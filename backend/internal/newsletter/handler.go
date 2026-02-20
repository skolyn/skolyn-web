package newsletter

import (
	"context"
	"encoding/json"
	"regexp"
	"strings"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
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
	tableName string
	db        *dynamodb.Client
}

// New creates a new newsletter handler.
func New(db *dynamodb.Client, tableName string) *Handler {
	return &Handler{db: db, tableName: tableName}
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

	return response.JSON(201, map[string]string{"message": "Subscribed"}), nil
}
