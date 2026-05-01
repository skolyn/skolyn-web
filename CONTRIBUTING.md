# Contributing to Skolyn

Thank you for your interest in contributing to the Skolyn platform. This document provides guidelines for contributing to the project.

## Code of Conduct

This project has adopted the [Code of Conduct](CODE_OF_CONDUCT.md). All contributors are expected to adhere to this code.

## Getting Started

1. Fork the repository
2. Clone your fork to your local machine
3. Create a feature branch from `main`
4. Make your changes
5. Submit a pull request

## Development Workflow

### Branch Naming

Use descriptive branch names:
- Feature: `feature/description-of-feature`
- Bugfix: `fix/description-of-bug`
- Documentation: `docs/description`

Example: `feature/add-user-authentication`

### Commit Messages

Follow the conventional commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, semicolons, etc.)
- `refactor:` Code refactoring without feature changes
- `test:` Adding or updating tests
- `chore:` Build process, dependencies, or tooling changes

Example:
```
feat(api): add newsletter subscription endpoint

Add POST /api/newsletter endpoint to handle newsletter subscriptions
with email validation and database persistence.

Closes #42
```

### Code Style

Frontend (Angular/TypeScript):
- Use ESLint configuration provided in the project
- Format code with Prettier
- Use strict TypeScript mode
- Follow Angular style guide

Backend (Go):
- Use Go fmt for formatting
- Follow effective Go guidelines
- Use meaningful variable names
- Document exported functions

## Testing

All changes must include appropriate tests:

Frontend:
- Unit tests for services and components
- E2E tests for critical user flows
- Run tests: `npm run test`

Backend:
- Unit tests for business logic
- Integration tests for API endpoints
- Run tests: `go test ./...`

## Pull Request Process

1. Update documentation and changelog if applicable
2. Ensure all tests pass
3. Ensure code follows project style guidelines
4. Request review from maintainers
5. Address feedback and iterate
6. Merge only after approval

## Reporting Issues

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (OS, browser, Go version, etc.)
- Screenshots or error logs if applicable

## Documentation

Documentation improvements are always welcome. See `docs/` for existing documentation.

- API docs: `docs/api/`
- Guides: `docs/guides/`
- Architecture: `docs/architecture/`

## License

By contributing, you agree that your contributions will be licensed under the project license.

## Questions?

For questions about contributing, please open an issue or contact the maintainers.
