# Skolyn Platform

Skolyn is a comprehensive medical imaging AI platform that delivers explainable diagnostic analysis across multiple imaging modalities including MRI, CT, Ultrasound, and X-Ray.

## Project Structure

```
skolyn-web/
├── src/                      # Angular frontend application
│   ├── app/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API and business logic services
│   │   └── app.config.ts    # Application configuration
│   ├── assets/              # Images, logos, and static files
│   │   ├── partners/        # Partner organization logos
│   │   └── icons/           # Application icons
│   └── environments/        # Environment-specific configuration
├── backend/                 # Go Lambda backend
│   ├── cmd/                 # Executable entry points
│   ├── internal/            # Internal packages
│   └── template.yaml        # AWS SAM infrastructure template
├── docs/                    # Documentation
│   ├── api/                 # API documentation
│   ├── guides/              # User and deployment guides
│   ├── architecture/        # Architecture documentation
│   └── compliance/          # Compliance and security docs
├── .github/
│   └── workflows/           # GitHub Actions CI/CD pipelines
└── angular.json             # Angular CLI configuration
```

## Technology Stack

Frontend:
- Angular 17+ with TypeScript
- RxJS for reactive programming
- Standalone components architecture

Backend:
- Go 1.22+
- AWS Lambda runtime
- AWS SAM for infrastructure

Infrastructure:
- AWS Lambda (Compute)
- AWS API Gateway (API Layer)
- AWS CloudFront (CDN)
- AWS S3 (Static hosting and file storage)
- AWS DynamoDB (Data persistence)
- AWS SES (Email service)
- AWS Route53 (DNS)
- AWS Certificate Manager (SSL/TLS)

## Quick Start

### Frontend Development

```bash
npm install
npm run start
```

Access the application at http://localhost:4200

### Backend Development

Requires AWS SAM CLI and Go 1.22+

```bash
cd backend
sam build
sam local start-api
```

The API will be available at http://localhost:3000

## Build and Deployment

### Local Build

Frontend:
```bash
npm run build
```

Backend:
```bash
cd backend
sam build
```

### AWS Deployment

Automated deployments are triggered by pushes to the main branch via GitHub Actions.

Workflows:
- `.github/workflows/deploy-frontend.yml` - Deploys frontend to S3 and invalidates CloudFront cache
- `.github/workflows/deploy-full-stack.yml` - Orchestrates backend and frontend deployment
- Backend deployment uses AWS SAM with OIDC authentication

For detailed deployment instructions, see [DEPLOYMENT.md](docs/guides/DEPLOYMENT.md)

## API Endpoints

The backend provides the following endpoints:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/newsletter` | POST | Newsletter subscription |
| `/api/contact` | POST | Contact form submission |
| `/api/apply` | POST | Job application submission |
| `/api/login` | POST | User authentication |

For complete API documentation, see [docs/api/](docs/api/)

## Configuration

Environment variables are managed through:

- `src/environments/environment.ts` - Development configuration
- `src/environments/environment.prod.ts` - Production configuration
- `backend/template.yaml` - Lambda environment variables

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Code style and standards
- Commit message format
- Pull request process
- Testing requirements

## Code of Conduct

This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## Support

For support inquiries, contact: support@skolyn.se

## Project Status

This project is in active development. Features and APIs may change without notice during the development phase.

Last Updated: May 2026
