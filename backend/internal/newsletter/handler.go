package newsletter

import (
	"context"
	"encoding/json"
	"log"
	"regexp"
	"strings"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/ses"
	sestypes "github.com/aws/aws-sdk-go-v2/service/ses/types"
	"github.com/skolyn/skolyn-web/backend/internal/response"
)

var emailRegex = regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)

// SubscribeRequest is the newsletter sign-up payload.
type SubscribeRequest struct {
	Email string `json:"email"`
}

type subscriberRecord struct {
	Email        string `dynamodbav:"email"`
	SubscribedAt string `dynamodbav:"subscribedAt"`
}

// Handler handles newsletter subscriptions.
type Handler struct {
	tableName   string
	notifyEmail string
	db          *dynamodb.Client
	ses         *ses.Client
}

// New creates a new newsletter handler.
func New(db *dynamodb.Client, sesClient *ses.Client, tableName, notifyEmail string) *Handler {
	return &Handler{db: db, ses: sesClient, tableName: tableName, notifyEmail: notifyEmail}
}

// Handle processes a newsletter subscription POST request.
func (h *Handler) Handle(ctx context.Context, event events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	var req SubscribeRequest
	if err := json.Unmarshal([]byte(event.Body), &req); err != nil {
		return response.JSON(400, map[string]string{"error": "Invalid JSON payload"}), nil
	}

	email := strings.TrimSpace(strings.ToLower(req.Email))
	if email == "" || !emailRegex.MatchString(email) {
		return response.JSON(400, map[string]string{"error": "email is invalid"}), nil
	}

	record := subscriberRecord{
		Email:        email,
		SubscribedAt: time.Now().UTC().Format(time.RFC3339),
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
		return response.JSON(500, map[string]string{"error": "Failed to subscribe"}), nil
	}

	h.notifySubscriber(email)

	return response.JSON(201, map[string]string{"message": "Subscribed"}), nil
}

func (h *Handler) notifySubscriber(subscriberEmail string) {
	if h.notifyEmail == "" {
		return
	}

	subject := "Welcome to Skolyn - Subscription Confirmed"

	htmlBody := `
	<!DOCTYPE html>
	<html>
	<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
		<div style="text-align: center; margin-bottom: 20px;">
			<h2 style="color: #0056b3;">Welcome to Skolyn</h2>
		</div>
		<p>Thank you for subscribing to our newsletter.</p>
		<p>You will now receive our latest updates regarding Explainable Artificial Intelligence (XAI) and medical imaging advancements.</p>
		<br>
		<p>Best regards,<br><strong>The Skolyn Team</strong></p>
		<hr style="border: none; border-top: 1px solid #eee; margin-top: 30px; margin-bottom: 20px;">
		<p style="font-size: 12px; color: #777; text-align: center;">You are receiving this email because you opted in via our website.</p>
	</body>
	</html>
	`
	textBody := "Welcome to Skolyn.\n\nThank you for subscribing to our newsletter. You will now receive our latest updates regarding Explainable Artificial Intelligence (XAI) and medical imaging advancements.\n\nBest regards,\nThe Skolyn Team"

	charset := "UTF-8"

	_, err := h.ses.SendEmail(context.Background(), &ses.SendEmailInput{
		Source: &h.notifyEmail,
		Destination: &sestypes.Destination{
			ToAddresses: []string{subscriberEmail},
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
		log.Printf("SES newsletter confirmation send failed for %s: %v", subscriberEmail, err)
	}
}
