package response

import (
	"encoding/json"

	"github.com/aws/aws-lambda-go/events"
)

var corsHeaders = map[string]string{
	"Content-Type":                      "application/json",
	"Access-Control-Allow-Origin":       "*",
	"Access-Control-Allow-Methods":      "OPTIONS,POST",
	"Access-Control-Allow-Headers":      "Content-Type, Authorization, Accept",
	"Strict-Transport-Security":         "max-age=63072000; includeSubDomains; preload",
	"X-Content-Type-Options":            "nosniff",
	"X-Frame-Options":                   "DENY",
	"X-XSS-Protection":                  "1; mode=block",
	"Content-Security-Policy":           "default-src 'none'; frame-ancestors 'none'",
	"Cross-Origin-Resource-Policy":      "cross-origin",
	"Cross-Origin-Opener-Policy":        "same-origin",
}

// JSON builds an API Gateway V2 HTTP response with CORS headers.
func JSON(status int, body any) events.APIGatewayV2HTTPResponse {
	payload, _ := json.Marshal(body)
	return events.APIGatewayV2HTTPResponse{
		StatusCode: status,
		Headers:    corsHeaders,
		Body:       string(payload),
	}
}

// CORS returns a 200 response for OPTIONS preflight requests.
func CORS() events.APIGatewayV2HTTPResponse {
	return events.APIGatewayV2HTTPResponse{
		StatusCode: 200,
		Headers:    corsHeaders,
	}
}
