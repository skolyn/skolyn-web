# Contact API (Go)

This backend is designed for AWS Amplify-hosted frontend deployments.

## What it deploys

- API Gateway HTTP API (`POST /contact`)
- AWS Lambda function written in Go
- DynamoDB table for contact messages

## Deploy

From this folder:

```bash
sam build
sam deploy --stack-name skolyn-contact-api --resolve-s3 --capabilities CAPABILITY_IAM
```

After deployment, copy `ContactApiBaseUrl` from stack outputs.

## Connect in Amplify Console

In Amplify Hosting Rewrites and redirects, add:

- Source address: `/api/<*>`
- Target address: `https://YOUR_CONTACT_API_BASE_URL/<*>`
- Type: `200 (Rewrite)`

This routes frontend calls from `/api/contact` to the Go backend.
