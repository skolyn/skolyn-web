# Skolyn Web

Angular frontend for the Skolyn platform, prepared for AWS Amplify Console hosting and a Go backend API.

## Project structure

- `src/`: Angular 21 frontend.
- `backend/contact-api/`: Go Lambda backend for contact form submissions.
- `amplify.yml`: Amplify Console build configuration.

## Local development

```bash
npm ci
npm run start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build
```

## Deploy frontend with AWS Amplify Console

1. Push this repository to GitHub.
2. In **AWS Amplify Console**, choose **New app → Host web app** and connect the GitHub repo.
3. Amplify detects `amplify.yml` automatically.
4. Keep build image defaults and deploy.

## Deploy backend (Go + AWS Lambda)

From `backend/contact-api`:

```bash
sam build
sam deploy --stack-name skolyn-contact-api --resolve-s3 --capabilities CAPABILITY_IAM
```

After deployment, copy the CloudFormation output `ContactApiBaseUrl`.

## Wire frontend to backend in Amplify Console

In Amplify Hosting **Rewrites and redirects**, add a rewrite rule:

- **Source address:** `/api/<*>`
- **Target address:** `https://YOUR_CONTACT_API_BASE_URL/<*>`
- **Type:** `200 (Rewrite)`

The contact form posts to `/api/contact`, so this rule routes traffic to the Go API.

## Icon reliability fixes

- Material symbol styling now uses explicit icon font-family fallbacks.
- Google Sans is explicitly configured as the only typography family set (Google Sans / Google Sans Display / Google Sans Text) while production font inlining stays disabled for reliable CI/CD builds.

## Commands

- `npm run start` – Angular dev server.
- `npm run build` – Production build.
