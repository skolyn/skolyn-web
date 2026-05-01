# Security and Compliance

## Overview

Skolyn implements comprehensive security and compliance measures to protect user data and ensure regulatory adherence.

## Data Protection

### Encryption in Transit

- All communications over HTTPS (TLS 1.2+)
- CloudFront enforces HTTPS redirect
- API Gateway uses secure protocols
- Certificate pinning recommended for mobile apps

### Encryption at Rest

- S3 buckets: Server-side encryption (SSE-S3)
- DynamoDB: Encryption with AWS KMS
- Parameter Store: Encrypted values
- Logs: Encrypted in CloudWatch

### Key Management

- AWS Key Management Service (KMS) for encryption keys
- Automatic key rotation enabled
- Access limited to required IAM roles

## Access Control

### Authentication

- Future: JWT token-based authentication
- Future: Multi-factor authentication (MFA)
- Password requirements: Minimum 12 characters

### Authorization

- Role-based access control (RBAC)
- API endpoint restrictions
- Resource-level permissions
- Lambda execution roles with least privilege

### API Security

- Input validation on all endpoints
- Output encoding to prevent XSS
- SQL injection prevention (ORM usage)
- CSRF tokens for state-changing operations
- Rate limiting (planned)

## Infrastructure Security

### Network

- VPC configuration (planned)
- Security groups for Lambda (if applicable)
- API Gateway WAF rules (recommended)
- DDoS protection via CloudFront

### IAM

- No root account usage for operations
- MFA required for console access
- Service roles with specific permissions
- Regular access reviews

### Monitoring

- CloudWatch logs for all services
- CloudTrail for API calls
- Lambda execution logs
- API Gateway execution logs
- Error tracking and alerting

## Compliance

### Data Residency

- All data stored in EU (Ireland region)
- No cross-region replication without consent
- Compliant with EU data localization requirements

### Privacy

- Privacy policy: https://skolyn.se/privacy
- GDPR compliant
- Data subject rights support
- Legitimate interest documentation

### Audit Logging

- All data access logged
- API calls recorded
- File access tracking
- User activity monitoring

### Incident Response

- Incident response plan in place
- Contact: security@skolyn.se
- 24-hour response commitment
- Data breach notification procedures

## Vulnerability Management

### Code Security

- Regular dependency scanning
- Security patch updates
- Code review process
- Penetration testing (annual)

### Infrastructure

- AWS security updates applied automatically
- Regular security assessments
- Configuration reviews
- Patch management

## Data Retention

### User Data

- Account data: Retained while account active
- Submissions: 90 days default
- Logs: 30 days default (CloudWatch)
- Backups: 35 days retention

### Deletion Policies

- User-initiated deletion within 48 hours
- GDPR right to erasure support
- Unsubscribe processes immediate

## Third-Party Security

### Vendors

- AWS: AWS Compliance Program
- GitHub: GitHub Enterprise compliance
- No data sharing with third parties without consent

### Subprocessors

- AWS services used as subprocessors
- AWS Data Processing Addendum (DPA) in effect
- No further sub-processing without notice

## Secure Development

### Version Control

- All code in Git with history
- Secrets not stored in repositories
- Code review before merge
- Signed commits recommended

### Dependency Management

- Lock files for reproducible builds
- Regular dependency updates
- Vulnerability scanning (npm audit, go vulnerabilities)
- Open source compliance review

### Environment Management

- Environment variables for secrets
- AWS Secrets Manager for sensitive data
- Different credentials per environment
- Automatic credential rotation

## Compliance Standards

### Implemented

- GDPR: Data protection regulation
- Data Protection Act 2018
- AWS Shared Responsibility Model

### Planned

- HIPAA: Healthcare data (with BAA)
- ISO 27001: Information security
- SOC 2: Security controls
- PCI DSS: If payment processing added

## Security Checklist

Regular security review (monthly):
- [ ] Review IAM permissions
- [ ] Audit log entries
- [ ] Dependency updates
- [ ] SSL certificate status
- [ ] CloudFront configuration
- [ ] S3 bucket policies
- [ ] API rate limiting status
- [ ] DynamoDB backups

## Incident Response

### Reporting

Email: security@skolyn.se

Include:
- Description of issue
- Steps to reproduce
- Impact assessment
- Suggested fix (if any)

### Response Timeline

- Acknowledgment: Within 4 hours
- Initial assessment: Within 24 hours
- Fix deployment: Based on severity
- Communication: Regular updates

## Support and Questions

For security questions, contact: security@skolyn.se

Do not disclose vulnerabilities publicly until fixed and notification provided.

Last Updated: May 2026
