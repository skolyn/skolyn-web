package apply

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"regexp"
	"strings"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/aws/aws-sdk-go-v2/service/ses"
	sestypes "github.com/aws/aws-sdk-go-v2/service/ses/types"
	"github.com/google/uuid"
	"github.com/skolyn/skolyn-web/backend/internal/response"
)

var emailRegex = regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)

// ApplicationRequest matches the frontend job-application form payload.
type ApplicationRequest struct {
	JobID          string `json:"jobId"`
	FirstName      string `json:"firstName"`
	LastName       string `json:"lastName"`
	Email          string `json:"email"`
	Phone          string `json:"phone"`
	LinkedIn       string `json:"linkedin"`
	CoverLetter    string `json:"coverLetter"`
	Portfolio      string `json:"portfolio"`
	ResumeFileName string `json:"resumeFileName"`
}

// ApplicationResponse is returned to the frontend after a successful submission.
type ApplicationResponse struct {
	ID              string `json:"id"`
	ResumeUploadURL string `json:"resumeUploadUrl,omitempty"`
}

type applicationRecord struct {
	ID             string `dynamodbav:"id"`
	CreatedAt      string `dynamodbav:"createdAt"`
	JobID          string `dynamodbav:"jobId"`
	FirstName      string `dynamodbav:"firstName"`
	LastName       string `dynamodbav:"lastName"`
	Email          string `dynamodbav:"email"`
	Phone          string `dynamodbav:"phone"`
	LinkedIn       string `dynamodbav:"linkedin"`
	CoverLetter    string `dynamodbav:"coverLetter"`
	Portfolio      string `dynamodbav:"portfolio"`
	ResumeFileName string `dynamodbav:"resumeFileName"`
	ResumeS3Key    string `dynamodbav:"resumeS3Key"`
	Status         string `dynamodbav:"status"`
}

// Handler handles job application submissions.
type Handler struct {
	tableName       string
	resumesBucket   string
	notifyEmail     string
	db              *dynamodb.Client
	s3Client        *s3.Client
	s3PresignClient *s3.PresignClient
	ses             *ses.Client
}

// New creates a new application handler.
func New(db *dynamodb.Client, s3Client *s3.Client, sesClient *ses.Client, tableName, resumesBucket, notifyEmail string) *Handler {
	return &Handler{
		db:              db,
		s3Client:        s3Client,
		s3PresignClient: s3.NewPresignClient(s3Client),
		ses:             sesClient,
		tableName:       tableName,
		resumesBucket:   resumesBucket,
		notifyEmail:     notifyEmail,
	}
}

// Handle processes a job application POST request.
func (h *Handler) Handle(ctx context.Context, event events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	var req ApplicationRequest
	if err := json.Unmarshal([]byte(event.Body), &req); err != nil {
		return response.JSON(400, map[string]string{"error": "Invalid JSON payload"}), nil
	}

	if err := validateApplication(req); err != nil {
		return response.JSON(400, map[string]string{"error": err.Error()}), nil
	}

	now := time.Now().UTC()
	id := uuid.New().String()
	s3Key := fmt.Sprintf("applications/%s/%s/%s", req.JobID, id, sanitiseFilename(req.ResumeFileName))

	record := applicationRecord{
		ID:             id,
		CreatedAt:      now.Format(time.RFC3339),
		JobID:          strings.TrimSpace(req.JobID),
		FirstName:      strings.TrimSpace(req.FirstName),
		LastName:       strings.TrimSpace(req.LastName),
		Email:          strings.TrimSpace(strings.ToLower(req.Email)),
		Phone:          strings.TrimSpace(req.Phone),
		LinkedIn:       strings.TrimSpace(req.LinkedIn),
		CoverLetter:    strings.TrimSpace(req.CoverLetter),
		Portfolio:      strings.TrimSpace(req.Portfolio),
		ResumeFileName: strings.TrimSpace(req.ResumeFileName),
		ResumeS3Key:    s3Key,
		Status:         "received",
	}

	item, err := attributevalue.MarshalMap(record)
	if err != nil {
		return response.JSON(500, map[string]string{"error": "Failed to process payload"}), nil
	}

	_, err = h.db.PutItem(ctx, &dynamodb.PutItemInput{
		TableName: &h.tableName,
		Item:      item,
	})
	if err != nil {
		return response.JSON(500, map[string]string{"error": "Failed to store application"}), nil
	}

	// Generate presigned S3 PUT URL for resume upload.
	var uploadURL string
	if req.ResumeFileName != "" {
		presignReq, presignErr := h.s3PresignClient.PresignPutObject(ctx, &s3.PutObjectInput{
			Bucket: &h.resumesBucket,
			Key:    &s3Key,
		}, s3.WithPresignExpires(15*time.Minute))
		if presignErr == nil {
			uploadURL = presignReq.URL
		}
	}

	// Fire-and-forget email notification.
	go h.notify(record)

	return response.JSON(201, ApplicationResponse{
		ID:              id,
		ResumeUploadURL: uploadURL,
	}), nil
}

func validateApplication(req ApplicationRequest) error {
	if strings.TrimSpace(req.JobID) == "" {
		return errors.New("jobId is required")
	}
	if strings.TrimSpace(req.FirstName) == "" {
		return errors.New("firstName is required")
	}
	if strings.TrimSpace(req.LastName) == "" {
		return errors.New("lastName is required")
	}
	email := strings.TrimSpace(req.Email)
	if email == "" || !emailRegex.MatchString(email) {
		return errors.New("email is invalid")
	}
	if strings.TrimSpace(req.ResumeFileName) == "" {
		return errors.New("resumeFileName is required")
	}
	return nil
}

func sanitiseFilename(name string) string {
	name = strings.TrimSpace(name)
	name = strings.ReplaceAll(name, " ", "_")
	name = strings.ReplaceAll(name, "/", "_")
	name = strings.ReplaceAll(name, "\\", "_")
	if name == "" {
		name = "resume"
	}
	return name
}

func (h *Handler) notify(r applicationRecord) {
	if h.notifyEmail == "" {
		return
	}
	subject := fmt.Sprintf("New application for %s from %s %s", r.JobID, r.FirstName, r.LastName)
	body := fmt.Sprintf(
		"Position: %s\nName: %s %s\nEmail: %s\nPhone: %s\nLinkedIn: %s\nPortfolio: %s\nResume: %s\n\nCover Letter:\n%s",
		r.JobID, r.FirstName, r.LastName, r.Email, r.Phone, r.LinkedIn, r.Portfolio, r.ResumeFileName, r.CoverLetter,
	)
	charset := "UTF-8"

	_, err := h.ses.SendEmail(context.Background(), &ses.SendEmailInput{
		Source: &h.notifyEmail,
		Destination: &sestypes.Destination{
			ToAddresses: []string{"careers@skolyn.se"},
		},
		Message: &sestypes.Message{
			Subject: &sestypes.Content{Data: &subject, Charset: &charset},
			Body: &sestypes.Body{
				Text: &sestypes.Content{Data: &body, Charset: &charset},
			},
		},
	})
	if err != nil {
		log.Printf("SES send failed for application %s: %v", r.ID, err)
	}
}
