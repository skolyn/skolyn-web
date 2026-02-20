package contact

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
	dbtypes "github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
	"github.com/aws/aws-sdk-go-v2/service/ses"
	sestypes "github.com/aws/aws-sdk-go-v2/service/ses/types"
	"github.com/google/uuid"
	"github.com/skolyn/skolyn-web/backend/internal/response"
)

var emailRegex = regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)

// ContactRequest matches the frontend contact form payload.
type ContactRequest struct {
	FirstName    string `json:"firstName"`
	LastName     string `json:"lastName"`
	Email        string `json:"email"`
	Organization string `json:"organization"`
	Role         string `json:"role"`
	Interest     string `json:"interest"`
	Message      string `json:"message"`
}

type contactRecord struct {
	ID           string `dynamodbav:"id"`
	CreatedAt    string `dynamodbav:"createdAt"`
	FirstName    string `dynamodbav:"firstName"`
	LastName     string `dynamodbav:"lastName"`
	Email        string `dynamodbav:"email"`
	Organization string `dynamodbav:"organization"`
	Role         string `dynamodbav:"role"`
	Interest     string `dynamodbav:"interest"`
	Message      string `dynamodbav:"message"`
}

// Handler handles contact form submissions.
type Handler struct {
	tableName   string
	notifyEmail string
	db          *dynamodb.Client
	ses         *ses.Client
}

// New creates a new contact handler.
func New(db *dynamodb.Client, sesClient *ses.Client, tableName, notifyEmail string) *Handler {
	return &Handler{db: db, ses: sesClient, tableName: tableName, notifyEmail: notifyEmail}
}

// Handle processes a contact form POST request.
func (h *Handler) Handle(ctx context.Context, event events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	var req ContactRequest
	if err := json.Unmarshal([]byte(event.Body), &req); err != nil {
		return response.JSON(400, map[string]string{"error": "Invalid JSON payload"}), nil
	}

	if err := validateContact(req); err != nil {
		return response.JSON(400, map[string]string{"error": err.Error()}), nil
	}

	now := time.Now().UTC()
	record := contactRecord{
		ID:           uuid.New().String(),
		CreatedAt:    now.Format(time.RFC3339),
		FirstName:    strings.TrimSpace(req.FirstName),
		LastName:     strings.TrimSpace(req.LastName),
		Email:        strings.TrimSpace(strings.ToLower(req.Email)),
		Organization: strings.TrimSpace(req.Organization),
		Role:         strings.TrimSpace(req.Role),
		Interest:     strings.TrimSpace(req.Interest),
		Message:      strings.TrimSpace(req.Message),
	}

	item, err := attributevalue.MarshalMap(record)
	if err != nil {
		return response.JSON(500, map[string]string{"error": "Failed to process payload"}), nil
	}

	condExpr := "attribute_not_exists(id)"
	_, err = h.db.PutItem(ctx, &dynamodb.PutItemInput{
		TableName:           &h.tableName,
		Item:                item,
		ConditionExpression: &condExpr,
	})
	if err != nil {
		var condErr *dbtypes.ConditionalCheckFailedException
		if errors.As(err, &condErr) {
			return response.JSON(409, map[string]string{"error": "Duplicate submission"}), nil
		}
		return response.JSON(500, map[string]string{"error": "Failed to store message"}), nil
	}

	// Send email notification synchronously before Lambda freezes
	h.notify(record)

	return response.JSON(201, map[string]string{"message": "Message received"}), nil
}

func validateContact(req ContactRequest) error {
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
	if strings.TrimSpace(req.Message) == "" {
		return errors.New("message is required")
	}
	if len(req.Message) > 5000 {
		return errors.New("message exceeds 5 000 characters")
	}
	return nil
}

func (h *Handler) notify(r contactRecord) {
	if h.notifyEmail == "" {
		return
	}
	subject := fmt.Sprintf("New contact from %s %s <%s>", r.FirstName, r.LastName, r.Email)
	body := fmt.Sprintf(
		"Name: %s %s\nEmail: %s\nOrganization: %s\nRole: %s\nInterest: %s\n\nMessage:\n%s",
		r.FirstName, r.LastName, r.Email, r.Organization, r.Role, r.Interest, r.Message,
	)
	charset := "UTF-8"

	_, err := h.ses.SendEmail(context.Background(), &ses.SendEmailInput{
		Source: &h.notifyEmail,
		Destination: &sestypes.Destination{
			ToAddresses: []string{"contact@skolyn.se"},
		},
		Message: &sestypes.Message{
			Subject: &sestypes.Content{Data: &subject, Charset: &charset},
			Body: &sestypes.Body{
				Text: &sestypes.Content{Data: &body, Charset: &charset},
			},
		},
	})
	if err != nil {
		log.Printf("SES send failed for contact %s: %v", r.ID, err)
	}
}
