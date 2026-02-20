package router

import (
	"context"

	"github.com/aws/aws-lambda-go/events"
	"github.com/skolyn/skolyn-web/backend/internal/response"
)

// HandlerFunc processes an API Gateway V2 request and returns a response.
type HandlerFunc func(ctx context.Context, event events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error)

type route struct {
	method  string
	path    string
	handler HandlerFunc
}

// Router dispatches API Gateway events to registered handlers.
type Router struct {
	routes []route
}

// New creates a new Router.
func New() *Router {
	return &Router{}
}

// Register adds a handler for the given HTTP method and path.
func (r *Router) Register(method, path string, handler HandlerFunc) {
	r.routes = append(r.routes, route{method: method, path: path, handler: handler})
}

// Handler is the Lambda entry-point compatible function.
func (r *Router) Handler(ctx context.Context, event events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	method := event.RequestContext.HTTP.Method
	path := event.RequestContext.HTTP.Path

	// Handle CORS preflight for any /api/ path.
	if method == "OPTIONS" {
		return response.CORS(), nil
	}

	for _, rt := range r.routes {
		if rt.method == method && rt.path == path {
			return rt.handler(ctx, event)
		}
	}

	return response.JSON(404, map[string]string{"error": "Not found"}), nil
}
