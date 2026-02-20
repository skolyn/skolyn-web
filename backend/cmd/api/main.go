package main

import (
	"context"
	"log"
	"os"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/aws/aws-sdk-go-v2/service/ses"
	"github.com/skolyn/skolyn-web/backend/internal/apply"
	"github.com/skolyn/skolyn-web/backend/internal/auth"
	"github.com/skolyn/skolyn-web/backend/internal/contact"
	"github.com/skolyn/skolyn-web/backend/internal/newsletter"
	"github.com/skolyn/skolyn-web/backend/internal/router"
)

func main() {
	contactTable := requireEnv("CONTACT_TABLE_NAME")
	applicationsTable := requireEnv("APPLICATIONS_TABLE_NAME")
	newsletterTable := requireEnv("NEWSLETTER_TABLE_NAME")
	resumesBucket := requireEnv("RESUMES_BUCKET_NAME")
	notifyEmail := os.Getenv("NOTIFY_EMAIL")
	adminHospitalID := requireEnv("ADMIN_HOSPITAL_ID")
	adminPassword := requireEnv("ADMIN_PASSWORD")

	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		log.Fatalf("unable to load AWS config: %v", err)
	}

	dbClient := dynamodb.NewFromConfig(cfg)
	s3Client := s3.NewFromConfig(cfg)
	sesClient := ses.NewFromConfig(cfg)

	contactHandler := contact.New(dbClient, sesClient, contactTable, notifyEmail)
	applyHandler := apply.New(dbClient, s3Client, sesClient, applicationsTable, resumesBucket, notifyEmail)
	newsletterHandler := newsletter.New(dbClient, sesClient, newsletterTable, notifyEmail)
	authHandler := auth.New(adminHospitalID, adminPassword)

	r := router.New()
	r.Register("POST", "/api/contact", contactHandler.Handle)
	r.Register("POST", "/api/apply", applyHandler.Handle)
	r.Register("POST", "/api/newsletter", newsletterHandler.Handle)
	r.Register("POST", "/api/login", authHandler.Handle)

	lambda.Start(r.Handler)
}

func requireEnv(key string) string {
	v := os.Getenv(key)
	if v == "" {
		log.Fatalf("environment variable %s is required", key)
	}
	return v
}
