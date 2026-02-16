package main

import (
	"context"
	"log"
	"os"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/skolyn/skolyn-web/backend/contact-api/internal/handler"
)

func main() {
	tableName := os.Getenv("CONTACT_TABLE_NAME")
	if tableName == "" {
		log.Fatal("CONTACT_TABLE_NAME is required")
	}

	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		log.Fatalf("unable to load AWS config: %v", err)
	}

	dbClient := dynamodb.NewFromConfig(cfg)
	h := handler.New(dbClient, tableName)

	lambda.Start(h.Handle)
}
