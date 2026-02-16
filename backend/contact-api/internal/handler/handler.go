package handler

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"regexp"
	"strings"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

var emailRegex = regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)

type ContactRequest struct {
	FirstName    string `json:"firstName"`
	LastName     string `json:"lastName"`
	Email        string `json:"email"`
	Organization string `json:"organization"`
	Role         string `json:"role"`
	Interest     string `json:"interest"`
	Message      string `json:"message"`
}

type ContactRecord struct {
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

type Handler struct {
	tableName string
	dbClient  *dynamodb.Client
}

func New(dbClient *dynamodb.Client, tableName string) *Handler {
	return &Handler{dbClient: dbClient, tableName: tableName}
}

func (h *Handler) Handle(ctx context.Context, event events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	if event.RequestContext.HTTP.Method == "OPTIONS" {
		return h.response(200, map[string]string{"message": "ok"}), nil
	}

	var req ContactRequest
	if err := json.Unmarshal([]byte(event.Body), &req); err != nil {
		return h.response(400, map[string]string{"error": "Invalid JSON payload"}), nil
	}

	if err := validate(req); err != nil {
		return h.response(400, map[string]string{"error": err.Error()}), nil
	}

	now := time.Now().UTC()
	record := ContactRecord{
		ID:           fmt.Sprintf("%d", now.UnixNano()),
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
		return h.response(500, map[string]string{"error": "Failed to process payload"}), nil
	}

	_, err = h.dbClient.PutItem(ctx, &dynamodb.PutItemInput{
		TableName:           &h.tableName,
		Item:                item,
		ConditionExpression: awsString("attribute_not_exists(id)"),
	})
	if err != nil {
		var conditionalErr *types.ConditionalCheckFailedException
		if errors.As(err, &conditionalErr) {
			return h.response(409, map[string]string{"error": "Duplicate submission"}), nil
		}
		return h.response(500, map[string]string{"error": "Failed to store message"}), nil
	}

	return h.response(201, map[string]string{"message": "Message received"}), nil
}

func validate(req ContactRequest) error {
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
	if len(req.Message) > 2000 {
		return errors.New("message exceeds 2000 characters")
	}
	return nil
}

func (h *Handler) response(status int, body any) events.APIGatewayV2HTTPResponse {
	payload, _ := json.Marshal(body)
	return events.APIGatewayV2HTTPResponse{
		StatusCode: status,
		Headers: map[string]string{
			"Content-Type":                 "application/json",
			"Access-Control-Allow-Origin":  "*",
			"Access-Control-Allow-Methods": "OPTIONS,POST",
			"Access-Control-Allow-Headers": "Content-Type",
		},
		Body: string(payload),
	}
}

func awsString(v string) *string {
	return &v
}
