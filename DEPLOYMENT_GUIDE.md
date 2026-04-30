# Frontend & Backend Synchronization Guide

## Overview

This guide explains how the Skolyn web application is set up for synchronized deployment of both frontend (Angular) and backend (Go Lambda) on AWS.

## Architecture

### Frontend
- **Framework**: Angular 21+
- **Hosting**: AWS Amplify or S3 + CloudFront
- **Build Output**: `dist/skolyn-web/browser`

### Backend
- **Language**: Go 1.22
- **Hosting**: AWS Lambda
- **API Gateway**: AWS HTTP API with CORS enabled
- **Databases**: DynamoDB (Contact, Applications, Newsletter)
- **File Storage**: S3 (Resume uploads)
- **Email Service**: AWS SES (Newsletter, Notifications)

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/login` | POST | User authentication (Hospital Admin dashboard) |
| `/api/contact` | POST | Contact form submissions |
| `/api/apply` | POST | Job applications with resume uploads |
| `/api/newsletter` | POST | Newsletter subscriptions |

## Environment Configuration

### Frontend Environment Variables

The frontend supports runtime API URL injection through `window.API_URL`. 

**Files:**
- `src/environments/environment.ts` (Development)
- `src/environments/environment.prod.ts` (Production)

**Current Configuration:**
```typescript
apiUrl: typeof window !== 'undefined' && (window as any).API_URL
  ? (window as any).API_URL
  : 'https://o9bsy5k3wl.execute-api.eu-north-1.amazonaws.com' // Default for local dev
```

### Backend Environment Variables

Configured via CloudFormation in `backend/template.yaml`:

```yaml
Environment:
  Variables:
    CONTACT_TABLE_NAME: ContactTable
    APPLICATIONS_TABLE_NAME: ApplicationsTable
    NEWSLETTER_TABLE_NAME: NewsletterTable
    RESUMES_BUCKET_NAME: ResumesBucket
    NOTIFY_EMAIL: noreply@skolyn.se
    ADMIN_HOSPITAL_ID: HSK-10023
    ADMIN_PASSWORD: SecureSkolynAdmin2026!
```

## Centralized API Service

All HTTP calls are now routed through `src/app/services/api.service.ts`:

### Available Methods
- `login(payload)` → POST `/api/login`
- `submitContact(payload)` → POST `/api/contact`
- `submitApplication(payload)` → POST `/api/apply`
- `subscribeNewsletter(payload)` → POST `/api/newsletter`

### Usage Example
```typescript
import { ApiService } from '../../services/api.service';

export class MyComponent {
  constructor(private apiService: ApiService) {}

  submit() {
    this.apiService.submitContact({
      firstName: 'John',
      email: 'john@example.com',
      message: 'Hello'
    }).subscribe({
      next: (response) => console.log('Success'),
      error: (error) => console.log('Error', error)
    });
  }
}
```

## Deployment Workflows

### 1. **deploy-full-stack.yml** (Recommended)
Synchronizes both backend and frontend deployment:

**Workflow:**
1. Deploy backend using SAM
2. Extract API Gateway URL from CloudFormation outputs
3. Build frontend with injected API URL
4. Deploy frontend to S3/Amplify with the API URL

**Trigger:** `git push main`

**Required AWS Roles:**
- `GitHubActionsBackendDeployRole` - For SAM deployment
- `GitHubActionsFrontendDeployRole` - For S3/Amplify deployment

### 2. **deploy-frontend.yml** (Optional)
Deploys only the frontend. Useful for frontend-only changes.

**Trigger:** Push to `main` with changes in `src/`, `package.json`, or `angular.json`

### 3. **deploy-backend.yml** (Original)
Deploys only the backend using SAM.

**Trigger:** Manual trigger or backend changes

## CORS Configuration

The backend is configured with CORS enabled for:

**Allowed Origins:**
- `https://skolyn.se`
- `https://www.skolyn.se`
- `http://localhost:4200` (Development)
- `http://localhost:3000` (Local API testing)

**Allowed Methods:**
- GET, POST, PUT, DELETE, OPTIONS

**Allowed Headers:**
- Content-Type, Authorization, X-Amz-Date, X-Api-Key, X-Amz-Security-Token, Accept

**Configuration:** `backend/template.yaml` → `ServerlessHttpApi` resource

## Running Locally

### Start Frontend Development Server
```bash
npm install
npm start
```
Frontend will run on `http://localhost:4200`

### Start Backend Locally (SAM)
```bash
cd backend
sam build
sam local start-api
```
Backend will run on `http://localhost:3000`

**Frontend will automatically use** `http://localhost:3000` as API URL during local development (see `environment.ts`).

## AWS Infrastructure Setup

### Prerequisites
1. AWS Account with appropriate permissions
2. AWS CLI configured
3. GitHub OIDC provider configured in AWS IAM

### Initial Setup Steps

#### 1. Create GitHub OIDC Provider (if not exists)
```bash
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
```

#### 2. Create IAM Roles for GitHub Actions

**Backend Deploy Role (`GitHubActionsBackendDeployRole`):**
- Permissions: SAM deployment, CloudFormation, S3, Lambda, DynamoDB, SES, IAM

**Frontend Deploy Role (`GitHubActionsFrontendDeployRole`):**
- Permissions: S3 sync, CloudFront invalidation, IAM assumeRole

#### 3. Configure GitHub Secrets
Add these secrets to your GitHub repository:
- `AMPLIFY_API_URL` - Optional, API URL for Amplify
- `CLOUDFRONT_DISTRIBUTION_ID` - CloudFront distribution ID for cache invalidation

#### 4. Deploy Backend Stack
```bash
cd backend
sam build
sam deploy \
  --stack-name skolyn-api-backend \
  --resolve-s3 \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
  --parameter-overrides \
    NotifyEmail=noreply@skolyn.se \
    AdminHospitalId=HSK-10023 \
    AdminPassword=YourSecurePassword
```

#### 5. Deploy Frontend
Update environment variables and deploy to Amplify/S3

## Testing Deployment

### 1. Test API Connectivity
```bash
API_URL="https://YOUR_API_URL"

# Test login endpoint
curl -X POST ${API_URL}/api/login \
  -H "Content-Type: application/json" \
  -d '{"hospitalId":"HSK-10023","password":"test"}'

# Test contact endpoint
curl -X POST ${API_URL}/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","message":"test"}'

# Test newsletter endpoint
curl -X POST ${API_URL}/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### 2. Test Frontend Build
```bash
npm run build
# Check dist/skolyn-web/browser for build output
```

### 3. Verify CORS Headers
```bash
curl -X OPTIONS ${API_URL}/api/login \
  -H "Origin: https://skolyn.se" \
  -H "Access-Control-Request-Method: POST" \
  -v
```

Expected response headers:
```
Access-Control-Allow-Origin: https://skolyn.se
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
```

## Troubleshooting

### Frontend Not Connecting to Backend
1. Check browser console for CORS errors
2. Verify API URL is correctly injected (`window.API_URL`)
3. Confirm CORS origins match in `backend/template.yaml`
4. Check Network tab in browser DevTools for actual API requests

### Backend Deployment Fails
1. Check SAM build output: `sam build --debug`
2. Verify Go binary builds: `GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build`
3. Check CloudFormation events for detailed errors
4. Verify IAM permissions for deployment role

### Email Sending Not Working
1. Verify SES email is verified in AWS console
2. Check CloudWatch Logs for Lambda function errors
3. Ensure IAM role has `ses:SendEmail` permissions

## Monitoring & Logs

### Frontend Logs
- CloudWatch Logs (if deployed to Amplify)
- Browser Console (development)

### Backend Logs
- CloudWatch Logs: `/aws/lambda/skolyn-api-backend-ApiFunction`
- DynamoDB: Check operation history in AWS console
- S3: Check upload logs in bucket

## Next Steps

1. **Set up AWS Infrastructure**: Complete initial AWS setup above
2. **Configure GitHub Secrets**: Add required secrets for CI/CD
3. **Update CORS Origins**: Add your production domain to `backend/template.yaml`
4. **Test Locally**: Run `npm start` + `sam local start-api`
5. **Deploy to Prod**: `git push main` to trigger full-stack deployment

## References

- [AWS SAM Developer Guide](https://docs.aws.amazon.com/serverless-application-model/)
- [Angular Standalone API](https://angular.io/guide/standalone-components)
- [AWS HTTP API CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html)
- [GitHub Actions OIDC](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
