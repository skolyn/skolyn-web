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

	// Send email notifications synchronously before Lambda freezes
	h.notifyApplicant(record)
	h.notifyHR(record)

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

func (h *Handler) notifyApplicant(r applicationRecord) {
	if h.notifyEmail == "" {
		return
	}
	subject := "We have received your application - Skolyn"

	htmlBody := fmt.Sprintf(`
	<!DOCTYPE html>
	<html>
	<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
		<div style="text-align: center; margin-bottom: 20px;">
			<h2 style="color: #0056b3;">Application Received</h2>
		</div>
		<p>Dear %s %s,</p>
		<p>Thank you for submitting your application for the position <strong>%s</strong> at Skolyn.</p>
		<p>Our Human Resources team will review your application and uploaded documents. We will contact you regarding the next steps if your qualifications match our current needs.</p>
		<br>
		<p>Best regards,<br><strong>The Skolyn Career Team</strong></p>
		<hr style="border: none; border-top: 1px solid #eee; margin-top: 30px; margin-bottom: 20px;">
		<p style="font-size: 12px; color: #777; text-align: center;">This is an automated message. Please do not reply to this email.</p>
	</body>
	</html>
	`, r.FirstName, r.LastName, r.JobID)

	textBody := fmt.Sprintf(
		"Dear %s %s,\n\nThank you for submitting your application for the position %s at Skolyn.\nOur Human Resources team will review your application and uploaded documents. We will contact you regarding the next steps if your qualifications match our current needs.\n\nBest regards,\nThe Skolyn Career Team",
		r.FirstName, r.LastName, r.JobID,
	)

	charset := "UTF-8"

	_, err := h.ses.SendEmail(context.Background(), &ses.SendEmailInput{
		Source: &h.notifyEmail,
		Destination: &sestypes.Destination{
			ToAddresses: []string{r.Email},
		},
		Message: &sestypes.Message{
			Subject: &sestypes.Content{Data: &subject, Charset: &charset},
			Body: &sestypes.Body{
				Html: &sestypes.Content{Data: &htmlBody, Charset: &charset},
				Text: &sestypes.Content{Data: &textBody, Charset: &charset},
			},
		},
	})
	if err != nil {
		log.Printf("SES application confirmation send failed for %s: %v", r.Email, err)
	}
}

func (h *Handler) notifyHR(r applicationRecord) {
	if h.notifyEmail == "" {
		return
	}

	resumeURL := ""
	if r.ResumeS3Key != "" {
		// Public object URL format: https://bucket-name.s3.region.amazonaws.com/key
		// If bucket is strictly private, HR needs IAM access to view this link.
		resumeURL = fmt.Sprintf("https://%s.s3.eu-north-1.amazonaws.com/%s", h.resumesBucket, r.ResumeS3Key)
	}

	subject := fmt.Sprintf("New Job Application: %s - %s %s", r.JobID, r.FirstName, r.LastName)

	htmlBody := fmt.Sprintf(`
	<!DOCTYPE html>
	<html>
	<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
		<h2 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">New Job Application Received</h2>
		
		<p><strong>Position ID:</strong> %s</p>
		<p><strong>Applicant Name:</strong> %s %s</p>
		<p><strong>Email Address:</strong> <a href="mailto:%s">%s</a></p>
		<p><strong>Phone Number:</strong> %s</p>
		
		<h3 style="margin-top: 25px; color: #444;">Professional Links</h3>
		<ul>
			<li><strong>LinkedIn:</strong> <a href="%s" target="_blank">%s</a></li>
			<li><strong>Portfolio:</strong> <a href="%s" target="_blank">%s</a></li>
		</ul>

		<h3 style="margin-top: 25px; color: #444;">Application Documents</h3>
		<ul>
			<li><strong>Resume/CV:</strong> <a href="%s" target="_blank" style="background-color: #f0f0f0; padding: 4px 8px; border-radius: 4px; text-decoration: none; color: #0056b3; font-weight: bold;">Download / View Resume (%s)</a></li>
		</ul>

		<h3 style="margin-top: 25px; color: #444;">Cover Letter</h3>
		<div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0056b3; white-space: pre-wrap;">%s</div>
		
		<hr style="border: none; border-top: 1px solid #eee; margin-top: 30px; margin-bottom: 20px;">
		<p style="font-size: 12px; color: #777; text-align: center;">Skolyn Automated HR System</p>
	</body>
	</html>
	`, r.JobID, r.FirstName, r.LastName, r.Email, r.Email, r.Phone, r.LinkedIn, r.LinkedIn, r.Portfolio, r.Portfolio, resumeURL, r.ResumeFileName, r.CoverLetter)

	textBody := fmt.Sprintf(
		"New Job Application\n\nPosition ID: %s\nApplicant: %s %s\nEmail: %s\nPhone: %s\nLinkedIn: %s\nPortfolio: %s\n\nResume URL: %s\n\nCover Letter:\n%s",
		r.JobID, r.FirstName, r.LastName, r.Email, r.Phone, r.LinkedIn, r.Portfolio, resumeURL, r.CoverLetter,
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
				Html: &sestypes.Content{Data: &htmlBody, Charset: &charset},
				Text: &sestypes.Content{Data: &textBody, Charset: &charset},
			},
		},
	})
	if err != nil {
		log.Printf("SES HR notification send failed for application %s: %v", r.ID, err)
	}
}
