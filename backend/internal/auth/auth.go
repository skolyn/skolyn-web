package auth

import (
	"context"
	"encoding/json"

	"github.com/aws/aws-lambda-go/events"
	"github.com/skolyn/skolyn-web/backend/internal/response"
)

type Handler struct {
	adminHospitalID string
	adminPassword   string
}

func New(hospitalID, password string) *Handler {
	return &Handler{
		adminHospitalID: hospitalID,
		adminPassword:   password,
	}
}

type LoginRequest struct {
	HospitalID string `json:"hospitalId"`
	Password   string `json:"password"`
}

func (h *Handler) Handle(ctx context.Context, event events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	var req LoginRequest
	if err := json.Unmarshal([]byte(event.Body), &req); err != nil {
		return response.JSON(400, map[string]string{"error": "Invalid request body"}), nil
	}

	if req.HospitalID == "" || req.Password == "" {
		return response.JSON(400, map[string]string{"error": "Hospital ID and Password are required"}), nil
	}

	if req.HospitalID == h.adminHospitalID && req.Password == h.adminPassword {
		// In a real application, you would generate a JWT token here.
		// For this demo, we return a mock token representing successful authentication.
		return response.JSON(200, map[string]string{
			"token":   "skolyn_auth_token_mock_948f2a1b",
			"message": "Authentication successful",
		}), nil
	}

	return response.JSON(401, map[string]string{"error": "Invalid credentials. Skolyn Dashboard is restricted to verified hospital and clinical partners only."}), nil
}
