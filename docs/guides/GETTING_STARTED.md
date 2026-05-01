# Getting Started

Welcome to Skolyn Platform development. This guide will help you set up your development environment and get started.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 22+ - https://nodejs.org
- npm 10+ - Included with Node.js
- Go 1.22+ - https://go.dev
- Git - https://git-scm.com
- AWS CLI - https://aws.amazon.com/cli

For development, you may also want:
- Visual Studio Code - https://code.visualstudio.com
- Postman - https://www.postman.com (for API testing)
- Docker - https://www.docker.com (optional, for local database)

## Repository Setup

1. Clone the repository:
```bash
git clone https://github.com/skolyn/skolyn-web.git
cd skolyn-web
```

2. Install frontend dependencies:
```bash
npm install
```

3. Configure environment:
```bash
cp src/environments/environment.ts.example src/environments/environment.ts
```

## Frontend Development

### Running the Development Server

```bash
npm run start
```

The application will be available at http://localhost:4200

### Building for Production

```bash
npm run build
```

Output will be in `dist/skolyn-web/browser/`

### Running Tests

```bash
npm run test
```

### Code Quality

Lint your code:
```bash
npm run lint
```

Format your code:
```bash
npm run format
```

## Backend Development

### Prerequisites for Backend

1. Install Go 1.22+
2. Install AWS SAM CLI:
```bash
brew install aws-sam-cli  # macOS
# or download from https://aws.amazon.com/serverless/sam
```

### Running Locally

1. Navigate to backend directory:
```bash
cd backend
```

2. Build the Lambda functions:
```bash
sam build
```

3. Start local API:
```bash
sam local start-api --port 3000
```

The API will be available at http://localhost:3000

### Testing the API

Test the newsletter endpoint:
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### Building for Production

```bash
sam build --use-container
```

### Backend Testing

```bash
cd backend
go test ./...
```

## IDE Setup

### VS Code Extensions

Recommended extensions for development:

- **Angular**: Angular Language Service
- **Go**: Go (gopls)
- **REST Client**: REST Client
- **Prettier**: Prettier - Code formatter
- **ESLint**: ESLint
- **AWS Toolkit**: AWS Toolkit for VS Code

### VS Code Settings

Create `.vscode/settings.json`:
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[go]": {
    "editor.defaultFormatter": "golang.go"
  },
  "go.lintOnSave": "package"
}
```

## Git Workflow

1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make changes and commit:
```bash
git commit -m "feat(component): description of changes"
```

3. Push and create a pull request:
```bash
git push origin feature/your-feature-name
```

See [CONTRIBUTING.md](../CONTRIBUTING.md) for detailed guidelines.

## Common Tasks

### Adding a New Component

Frontend:
```bash
ng generate component path/to/component
```

### Adding a New API Handler

Backend:
```bash
cd backend
# Create new file in handlers/
# Implement handler function
# Add to routes in main.go
```

### Adding Dependencies

Frontend:
```bash
npm install package-name
```

Backend:
```bash
cd backend
go get github.com/user/package
```

## Troubleshooting

### Port Already in Use

If port 4200 or 3000 is already in use:

```bash
# Frontend (use different port)
npm run start -- --port 4300

# Backend
sam local start-api --port 3001
```

### Node Modules Issues

Clear and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Go Build Issues

Update Go modules:
```bash
cd backend
go mod tidy
go mod download
```

### AWS Credentials

Ensure AWS credentials are configured:
```bash
aws configure
```

Or set environment variables:
```bash
export AWS_ACCESS_KEY_ID=your-key
export AWS_SECRET_ACCESS_KEY=your-secret
export AWS_REGION=eu-north-1
```

## Documentation

Refer to the documentation for more information:

- [System Architecture](../docs/architecture/SYSTEM_ARCHITECTURE.md)
- [API Reference](../docs/api/REST_API.md)
- [Deployment Guide](../docs/guides/DEPLOYMENT.md)
- [Security](../docs/compliance/SECURITY.md)

## Support

For questions or issues:
- Check existing documentation
- Open an issue on GitHub
- Contact: dev-support@skolyn.se

## Next Steps

1. Familiarize yourself with the codebase
2. Run the development servers
3. Make a small change to understand the workflow
4. Read through the contributing guidelines
5. Check out available issues to work on

Happy coding!

Last Updated: May 2026
