# Deployment Guide

This guide covers deploying the Skolyn platform to AWS using CloudFront, S3, Lambda, and API Gateway.

## Architecture Overview

The Skolyn platform uses a serverless architecture:

```
CloudFront (CDN)
    |
    +-- S3 (Frontend Assets)
    |
    +-- API Gateway
         |
         +-- Lambda Functions (Backend)
              |
              +-- DynamoDB (Database)
              +-- SES (Email Service)
              +-- S3 (File Storage)
```

## Prerequisites

- AWS Account with appropriate permissions
- GitHub repository with admin access
- AWS CLI configured with credentials
- Node.js 22+ for frontend builds
- Go 1.22+ for backend builds

## AWS Infrastructure Setup

### 1. Identity and Access Management

Create the following IAM roles in your AWS account:

**GitHubActionsFrontendDeployRole**
- Permissions for S3 and CloudFront
- Trust relationship with GitHub OIDC provider

**GitHubActionsBackendDeployRole**
- Permissions for Lambda, API Gateway, DynamoDB, SES, and S3
- Trust relationship with GitHub OIDC provider

### 2. Frontend Infrastructure

Create the following AWS resources:

- S3 bucket for frontend assets
- CloudFront distribution pointing to S3
- AWS Certificate Manager certificate for custom domain
- Route53 DNS records

### 3. Backend Infrastructure

The backend is deployed using AWS SAM:

```bash
cd backend
sam build
sam deploy --stack-name skolyn-api-backend
```

This creates:
- Lambda functions for API endpoints
- API Gateway for HTTP interface
- DynamoDB tables for data storage
- SES configuration for email

## CI/CD Pipeline

Automated deployments are triggered by pushing to the main branch:

### Frontend Deployment

`.github/workflows/deploy-frontend.yml`

This workflow:
1. Builds the Angular application
2. Uploads assets to S3
3. Invalidates CloudFront cache

### Backend Deployment

`.github/workflows/deploy-backend.yml`

This workflow:
1. Builds Go Lambda functions
2. Deploys using AWS SAM
3. Updates Lambda configuration

### Full Stack Deployment

`.github/workflows/deploy-full-stack.yml`

This workflow:
1. Deploys backend first
2. Extracts API Gateway URL
3. Passes URL to frontend build
4. Deploys frontend with API configuration

## Environment Configuration

### Frontend

Environment variables are defined in:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

The production build uses the API URL injected during deployment.

### Backend

Lambda environment variables are configured in `backend/template.yaml`:

```yaml
Environment:
  Variables:
    DATABASE_TABLE: !Ref DynamoDBTable
    S3_BUCKET: !Ref ResumeBucket
    SES_EMAIL: contact@skolyn.se
```

## DNS Configuration

### Custom Domain Setup

1. Add your domain registrar's nameservers to Route53
2. Configure Route53 DNS records:
   - Apex: A record (alias) to CloudFront
   - www: CNAME to CloudFront
   - ACM validation: CNAME records for certificate

### SSL/TLS Certificate

Use AWS Certificate Manager to create a certificate for your domain:

```bash
aws acm request-certificate \
  --domain-name skolyn.se \
  --subject-alternative-names www.skolyn.se \
  --validation-method DNS
```

## API Endpoints

After deployment, the API will be available at the configured API Gateway URL.

Endpoints:
- POST `/api/newsletter` - Newsletter subscription
- POST `/api/contact` - Contact form
- POST `/api/apply` - Job application
- POST `/api/login` - Authentication

## Monitoring and Logging

Monitor your deployment using:

- CloudFront console: View cache statistics and errors
- Lambda console: Monitor function performance
- CloudWatch: View logs and metrics
- API Gateway console: Monitor API usage

## Troubleshooting

### 403 Forbidden from CloudFront

Check:
1. S3 bucket policy allows CloudFront origin access
2. CloudFront origin is correctly configured
3. S3 objects have proper permissions

### Lambda Timeout

Check:
1. Lambda timeout setting (default 30s)
2. Database connection issues
3. External service delays

### API Gateway Errors

Check:
1. CORS configuration
2. Lambda function permissions
3. DynamoDB table capacity

## Rollback

To rollback frontend:
1. S3 is versioned, can restore previous objects
2. CloudFront cache invalidation clears old content

To rollback backend:
1. AWS Lambda automatic rollback via SAM
2. DynamoDB point-in-time recovery available

## Cost Optimization

- Use CloudFront caching to reduce S3 requests
- Set appropriate Lambda memory allocation
- Use DynamoDB on-demand or reserved capacity
- Monitor CloudWatch logs for unused resources

## Security Checklist

- [ ] Enable S3 versioning
- [ ] Enable S3 encryption
- [ ] Enable CloudFront encryption
- [ ] Use HTTPS only
- [ ] Enable CORS restrictions
- [ ] Validate input on backend
- [ ] Use IAM roles, not access keys
- [ ] Enable logging for audit trail
- [ ] Regular security updates
- [ ] Review IAM permissions regularly

## Support

For deployment issues, contact: devops@skolyn.se

Last Updated: May 2026
