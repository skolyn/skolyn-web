# API Reference

## Overview

The Skolyn Platform provides a RESTful API for newsletter subscriptions, contact inquiries, job applications, and user authentication.

Base URL: `https://9x38j33l1h.execute-api.eu-north-1.amazonaws.com`

## Authentication

Current implementation uses basic API access. Future versions will include:
- JWT token-based authentication
- OAuth 2.0 integration

## Endpoints

### Newsletter Subscription

**POST /api/newsletter**

Subscribe a user to the newsletter.

Request:
```json
{
  "email": "user@example.com"
}
```

Response (201 Created):
```json
{
  "message": "Subscribed",
  "email": "user@example.com"
}
```

Error (400 Bad Request):
```json
{
  "error": "Invalid email address"
}
```

### Contact Form

**POST /api/contact**

Submit a contact form inquiry.

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

Response (200 OK):
```json
{
  "message": "Message received",
  "reference": "MSG-20260501-001"
}
```

### Job Application

**POST /api/apply**

Submit a job application.

Request:
```json
{
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "position": "Software Engineer",
  "cover_letter": "Your cover letter here",
  "resume": "Base64 encoded resume file or URL"
}
```

Response (201 Created):
```json
{
  "message": "Application received",
  "application_id": "APP-20260501-001"
}
```

### User Login

**POST /api/login**

Authenticate user credentials.

Request:
```json
{
  "email": "user@example.com",
  "password": "secure_password"
}
```

Response (200 OK):
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user-123",
    "email": "user@example.com",
    "role": "user"
  }
}
```

Error (401 Unauthorized):
```json
{
  "error": "Invalid credentials"
}
```

## Error Handling

All errors follow this format:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2026-05-01T12:00:00Z"
}
```

Common HTTP Status Codes:
- `200 OK` - Request succeeded
- `201 Created` - Resource created
- `400 Bad Request` - Invalid input
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Access denied
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## Rate Limiting

Current implementation has no rate limiting. Future versions will include:
- Per-IP rate limits
- Per-email rate limits
- Burst limits

## CORS

CORS is enabled for the frontend domain. Allowed headers:
- Content-Type
- Authorization

## Integration Examples

### JavaScript/TypeScript

```typescript
async function subscribeNewsletter(email: string) {
  const response = await fetch(
    'https://9x38j33l1h.execute-api.eu-north-1.amazonaws.com/api/newsletter',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    }
  );
  return await response.json();
}
```

### cURL

```bash
curl -X POST \
  https://9x38j33l1h.execute-api.eu-north-1.amazonaws.com/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com"}'
```

### Python

```python
import requests

response = requests.post(
  'https://9x38j33l1h.execute-api.eu-north-1.amazonaws.com/api/newsletter',
  json={'email': 'user@example.com'}
)
print(response.json())
```

## Changelog

### Version 1.0.0 (May 2026)
- Initial API release
- Newsletter, contact, apply, login endpoints
- JSON request/response format
- CORS support

## Support

For API issues, contact: api-support@skolyn.se

Last Updated: May 2026
