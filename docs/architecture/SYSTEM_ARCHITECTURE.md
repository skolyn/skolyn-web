# Architecture Overview

## System Architecture

```
Internet
    |
    v
Route53 (DNS)
    |
    v
CloudFront (CDN)
    |
    +--- S3 (Static Frontend Assets)
    |     - index.html
    |     - JavaScript bundles
    |     - CSS and images
    |
    +--- API Gateway (HTTP API)
           |
           v
        Lambda Functions
        |
        +--- Newsletter Handler
        +--- Contact Handler
        +--- Application Handler
        +--- Login Handler
        |
        v
        DynamoDB (Data Store)
        - Users table
        - Submissions table
        - Logs table
        |
        v
        External Services
        - SES (Email)
        - S3 (Resume Storage)
```

## Component Descriptions

### Frontend (Angular)

Location: `src/`

The frontend is a single-page application (SPA) built with Angular 17.

Key components:
- `AppComponent` - Root component
- `NavbarComponent` - Navigation
- `FooterComponent` - Footer with links and newsletter signup
- `HomeComponent` - Landing page
- `DocsComponent` - Documentation viewer
- `CareersComponent` - Job listings and applications
- `ContactComponent` - Contact form

Services:
- `ApiService` - Centralized API client
- `AuthService` - Authentication handling

### Backend (Go + Lambda)

Location: `backend/`

Built with Go 1.22 and deployed as AWS Lambda functions.

Handlers:
- `main.go` - Application entry point
- `handlers/` - HTTP request handlers
  - `newsletter.go` - Newsletter subscription
  - `contact.go` - Contact form
  - `apply.go` - Job applications
  - `login.go` - Authentication

Data Layer:
- `models/` - Data structures
- `db/` - Database operations
- `email/` - Email service integration

### AWS Infrastructure

#### API Gateway

HTTP API endpoint that routes requests to Lambda functions.

Configuration:
- Resource: /api/{proxy+}
- Methods: POST
- CORS: Enabled for frontend domain
- Timeout: 30 seconds

#### Lambda Functions

Serverless compute for API handlers.

Configuration:
- Runtime: Go 1.22
- Memory: 256 MB
- Timeout: 30 seconds
- Environment: Production variables

#### DynamoDB Tables

NoSQL database for persistent storage.

Tables:
- `users` - User accounts and profiles
- `submissions` - Contact forms, applications, newsletters
- `logs` - Audit and access logs

#### S3 Buckets

Object storage.

Buckets:
- `skolyn-web-frontend-prod` - Frontend assets
- `skolyn-resumes` - Uploaded resume files
- `skolyn-api-backend-deployment` - SAM deployment artifacts

#### CloudFront Distribution

Content delivery network.

Configuration:
- Origin: S3 bucket
- Certificate: ACM certificate
- Caching: 24 hours (index.html), 1 year (assets)
- Custom domain: skolyn.se
- HTTPS only

#### Route53

DNS management.

Records:
- `skolyn.se` A - Alias to CloudFront
- `www.skolyn.se` CNAME - CloudFront distribution
- ACM validation records - CNAME to validation service

#### Certificate Manager

SSL/TLS certificate for HTTPS.

Certificate:
- Domain: skolyn.se, www.skolyn.se
- Type: HTTPS
- Auto-renewal: Enabled

#### SES (Simple Email Service)

Email delivery service.

Configuration:
- From addresses: contact@skolyn.se, careers@skolyn.se
- Sandbox mode: Disabled (production)
- Email limits: Per AWS account limits

## Data Flow

### Newsletter Subscription Flow

1. User enters email in footer
2. Frontend calls POST /api/newsletter
3. API Gateway routes to Lambda
4. Lambda validates email format
5. Lambda stores in DynamoDB
6. Lambda sends confirmation via SES
7. Response returned to frontend
8. Toast notification shown to user

### Contact Form Flow

1. User fills contact form
2. Frontend validates client-side
3. Frontend calls POST /api/contact
4. API Gateway routes to Lambda
5. Lambda validates all fields
6. Lambda stores in DynamoDB
7. Lambda sends email to contact@skolyn.se
8. Confirmation response to user

### Job Application Flow

1. User views job listings
2. User clicks apply and fills form
3. User uploads resume
4. Frontend encodes file to base64
5. Frontend calls POST /api/apply
6. API Gateway routes to Lambda
7. Lambda extracts resume to S3
8. Lambda stores application in DynamoDB
9. Lambda sends email to careers@skolyn.se
10. Confirmation with reference ID to user

## Security Architecture

### Network Security

- CloudFront enforces HTTPS only
- API Gateway validates requests
- CORS configured for specific domains
- WAF can be added for DDoS protection

### Data Security

- DynamoDB encryption at rest
- S3 encryption for all objects
- Secrets stored in AWS Systems Manager Parameter Store
- No hardcoded credentials in code

### Access Control

- IAM roles for Lambda functions
- Principle of least privilege
- GitHub OIDC for deployments
- No long-term credentials

### Audit and Compliance

- CloudFront access logs
- API Gateway execution logs
- Lambda function logs in CloudWatch
- DynamoDB point-in-time recovery

## Scalability

### Auto-Scaling Components

- Lambda: Automatic scaling based on requests
- API Gateway: Automatic scaling
- DynamoDB: On-demand or provisioned capacity
- CloudFront: Automatic scaling

### Performance Optimization

- CloudFront edge caching
- S3 transfer acceleration
- API response compression
- Database query optimization

## Disaster Recovery

### Backup Strategy

- DynamoDB point-in-time recovery
- S3 versioning enabled
- CloudFormation templates stored in Git
- Infrastructure as Code (IaC) approach

### High Availability

- CloudFront multi-region
- API Gateway managed service
- Lambda auto-recovery
- DynamoDB replicated data

## Deployment Pipeline

1. Developer pushes to main branch
2. GitHub Actions workflow triggered
3. Backend builds and tests
4. Backend deploys to Lambda
5. API URL extracted from CloudFormation
6. Frontend builds with API URL
7. Frontend deploys to S3
8. CloudFront cache invalidated

## Cost Optimization

- CloudFront caching reduces origin requests
- Lambda free tier for low traffic
- DynamoDB on-demand pricing
- S3 lifecycle policies for old objects
- Reserved capacity for predictable load

Last Updated: May 2026
