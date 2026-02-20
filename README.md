# Skolyn Web

Angular frontend for the Skolyn platform, prepared for AWS Amplify Console hosting and a unified Go backend API.

## Architecture & CI/CD Strategy

Skolyn uses a modular Full-Stack AWS architecture, deployed via automated CI/CD pipelines:

1. **Frontend (Angular)**: Hosted on **AWS Amplify**.
   - Deploys automatically upon pushing to the `main` branch.
   - Configuration is defined in `amplify.yml`.
2. **Backend (Go + AWS API Gateway + Lambda)**: Managed by **AWS SAM (Serverless Application Model)**.
   - Deploys automatically via **GitHub Actions** (`.github/workflows/deploy-backend.yml`).
   - Unified API processing Contact (`/api/contact`), Job Applications (`/api/apply`), and Newsletter (`/api/newsletter`) endpoints.
   - Integrated with AWS DynamoDB (Data Storage), Amazon S3 (Resume Uploads), and Amazon SES (Email distribution to `contact@skolyn.se` and `careers@skolyn.se`).

## Local Development

### Frontend

```bash
npm install
npm run start
```
Open `http://localhost:4200`.

### Backend

Requires [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) and [Go 1.22+](https://go.dev/).

```bash
cd backend
sam build
sam local start-api
```

## Production Deployment Guide

### 1. Authenticate GitHub Actions (OIDC)

For the backend to deploy automatically, an IAM Web Identity Provider (OIDC) must be configured in your AWS account. 

- Create an IAM role (e.g., `GitHubActionsBackendDeployRole`) with the required SAM deployment permissions.
- In `.github/workflows/deploy-backend.yml`, insert your AWS Role ARN and Region to authorize the automated deployment.

### 2. Configure AWS Amplify

1. Push this repository to GitHub.
2. In **AWS Amplify Console**, choose **New app → Host web app** and connect the GitHub repo.
3. Amplify detects `amplify.yml` automatically and initiates the first frontend build.

### 3. Wire Frontend to Backend
Once your backend is successfully deployed by GitHub Actions, retrieve the `ApiBaseUrl` from your AWS CloudFormation outputs for the `skolyn-backend` stack.

In Amplify Hosting **Rewrites and redirects**, add a proxy rule to securely route frontend API calls to your newly created API Gateway:
- **Source address:** `/api/<*>`
- **Target address:** `https://skolyn.se/api/<*>`
- **Type:** `200 (Rewrite)`
