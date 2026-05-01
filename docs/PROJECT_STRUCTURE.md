# Project Structure

This document describes the organization of the Skolyn Platform repository.

## Directory Layout

```
skolyn-web/
│
├── src/                              # Angular frontend source code
│   ├── app/
│   │   ├── components/              # Reusable Angular components
│   │   │   ├── cookie-banner/
│   │   │   ├── dialog/
│   │   │   ├── footer/
│   │   │   ├── navbar/
│   │   │   └── toast/
│   │   ├── pages/                   # Page-level components
│   │   │   ├── about/
│   │   │   ├── accessibility/
│   │   │   ├── blog/
│   │   │   ├── careers/
│   │   │   ├── contact/
│   │   │   ├── cookies/
│   │   │   ├── deployment/
│   │   │   ├── docs/
│   │   │   ├── faq/
│   │   │   ├── home/
│   │   │   ├── infrastructure/
│   │   │   ├── login/
│   │   │   ├── privacy/
│   │   │   ├── research/
│   │   │   ├── roadmap/
│   │   │   ├── team/
│   │   │   ├── terms/
│   │   │   └── webinars/
│   │   ├── services/                # Angular services
│   │   │   ├── api.service.ts       # Centralized API client
│   │   │   ├── auth.service.ts
│   │   │   └── ...
│   │   ├── app.config.ts            # Application configuration
│   │   ├── app.routes.ts            # Routing configuration
│   │   └── app.component.ts         # Root component
│   ├── assets/                      # Static assets
│   │   ├── partners/                # Partner organization logos by country
│   │   │   ├── azerbaijan/
│   │   │   ├── denmark/
│   │   │   ├── estonia/
│   │   │   ├── finland/
│   │   │   ├── lithuania/
│   │   │   └── sweden/
│   │   ├── skolyn-logo-icon.svg
│   │   ├── skolyn-logo-icon-white.svg
│   │   ├── skolyn-logo-wide.svg
│   │   ├── skolyn-logo-wide-white.svg
│   │   └── ...
│   ├── environments/                # Environment-specific configuration
│   │   ├── environment.ts           # Development environment
│   │   └── environment.prod.ts      # Production environment
│   └── styles/                      # Global styles
│
├── backend/                         # Go Lambda backend
│   ├── cmd/
│   │   └── main.go                  # Application entry point
│   ├── internal/
│   │   ├── handlers/                # HTTP request handlers
│   │   │   ├── newsletter.go
│   │   │   ├── contact.go
│   │   │   ├── apply.go
│   │   │   └── login.go
│   │   ├── models/                  # Data structures
│   │   │   └── ...
│   │   ├── db/                      # Database operations
│   │   ├── email/                   # Email service
│   │   └── middleware/              # HTTP middleware
│   ├── go.mod                       # Go module definition
│   ├── go.sum                       # Go dependencies
│   ├── template.yaml                # AWS SAM infrastructure template
│   └── samconfig.toml               # SAM deployment configuration
│
├── docs/                            # Documentation
│   ├── api/                         # API documentation
│   │   └── REST_API.md              # REST API reference
│   ├── architecture/                # Architecture documentation
│   │   └── SYSTEM_ARCHITECTURE.md   # System design and components
│   ├── compliance/                  # Compliance and security
│   │   └── SECURITY.md              # Security policies
│   ├── guides/                      # Operational guides
│   │   ├── DEPLOYMENT.md            # Deployment instructions
│   │   └── GETTING_STARTED.md       # Development setup guide
│   └── reference/                   # Generated documentation
│       └── *.html                   # HTML documentation files
│
├── .github/
│   ├── workflows/
│   │   ├── deploy-frontend.yml      # Frontend deployment workflow
│   │   ├── deploy-backend.yml       # Backend deployment workflow
│   │   └── deploy-full-stack.yml    # Combined deployment workflow
│   └── ...
│
├── node_modules/                    # npm dependencies (git ignored)
│   └── ...
│
├── dist/                            # Build output (git ignored)
│   ├── skolyn-web/
│   │   └── browser/                 # Production build
│
├── .angular/                        # Angular CLI cache (git ignored)
│
├── Root Configuration Files
│   ├── angular.json                 # Angular CLI configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tsconfig.app.json            # TypeScript app configuration
│   ├── package.json                 # npm dependencies and scripts
│   ├── package-lock.json            # npm lock file
│   ├── amplify.yml                  # AWS Amplify configuration
│   ├── .gitignore                   # Git ignore rules
│   │
│   ├── Documentation and Governance
│   ├── README.md                    # Project overview
│   ├── CONTRIBUTING.md              # Contribution guidelines
│   ├── CODE_OF_CONDUCT.md           # Code of conduct
│   └── LICENSE                      # Proprietary license
│
└── .git/                            # Git repository data
```

## Key Files and Directories

### Frontend (src/)

- **app/components/** - Reusable UI components (navbar, footer, dialogs, etc.)
- **app/pages/** - Page-level components corresponding to routes
- **app/services/** - Angular services including centralized API client
- **assets/partners/** - Partner organization logos organized by country
- **environments/** - Environment-specific configuration and API URLs
- **app.routes.ts** - Application routing configuration
- **app.config.ts** - Application setup and providers

### Backend (backend/)

- **cmd/main.go** - Lambda handler and application entry point
- **internal/handlers/** - HTTP endpoint handlers
- **template.yaml** - AWS SAM infrastructure definition
- **go.mod** - Go module dependencies

### Documentation (docs/)

- **api/** - API documentation and reference
- **architecture/** - System architecture and design
- **compliance/** - Security and compliance documentation
- **guides/** - Setup and operational guides
- **reference/** - Generated HTML documentation

### Configuration

- **angular.json** - Angular build and development configuration
- **tsconfig.json** - TypeScript compiler configuration
- **package.json** - Frontend dependencies and npm scripts
- **.gitignore** - Git repository ignore rules
- **amplify.yml** - AWS Amplify hosting configuration

## File Organization Principles

1. **Feature-based Organization** - Components and pages grouped by feature
2. **Separation of Concerns** - Services handle business logic, components handle UI
3. **Asset Organization** - Assets grouped logically (partners by country, etc.)
4. **Documentation Co-location** - Docs near related code when applicable
5. **Environment Separation** - Environment-specific configs isolated

## Build Outputs

- **dist/skolyn-web/browser/** - Production frontend build (deployed to S3)
- **.aws-sam/build/** - Backend build artifacts (deployed to Lambda)

## Version Control

All source code is version controlled in Git. Build outputs (dist/, node_modules/, .angular/) are excluded via .gitignore.

## Asset Management

- **Static logos and images** stored in src/assets/
- **Partner logos** organized by country in src/assets/partners/
- **Generated documentation** stored in docs/reference/

Last Updated: May 2026
