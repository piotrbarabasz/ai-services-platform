---

docs/operations/00-deployment.md

```md
# Deployment

## 1. Purpose

This document describes the target deployment direction for the AI Services Platform.

For MVP 0, deployment should stay simple and focus on preparing the application for Google Cloud Platform, especially Cloud Run for the backend.

---

## 2. Deployment Goal for MVP 0

The goal of MVP 0 deployment is to prepare the project so that the first public version can be deployed with minimal rework.

MVP 0 should define:

- backend deployment target,
- frontend deployment target,
- environment configuration,
- secret handling,
- health checks,
- basic cost control,
- basic rollback approach.

---

## 3. Target Deployment Architecture

```text
User
  |
  v
Frontend Hosting
  |
  v
Cloud Run Backend
  |
  +--> Cloud Logging
  +--> Secret Manager
  +--> Future Lead Storage
4. Suggested GCP Services
Area	Service
Backend hosting	Cloud Run
Container images	Artifact Registry
Secrets	Secret Manager
Logs	Cloud Logging
Monitoring	Cloud Monitoring
Scheduled jobs	Cloud Scheduler in future MVPs
Static frontend	Firebase Hosting, Cloud Run, Vercel or another selected option
Lead storage	Firestore or Cloud SQL in future MVPs
5. Deployment Environments

Suggested environments:

Environment	Purpose
local	Local development
dev	Cloud development/testing
prod	Public production version

For early MVP work, only local and dev may be needed.

6. Backend Deployment Requirements

The backend should be deployable as a container.

Required files:

backend/Dockerfile
backend/.dockerignore
backend/.env.example

Required endpoint:

GET /health

The backend should listen on the port provided by the environment.

For Cloud Run this usually means reading the PORT environment variable.

7. Example Backend Dockerfile Direction

Example target Dockerfile structure:

FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app

CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]

This is only a starting point. The final Dockerfile should be adjusted after backend implementation starts.

8. Environment Variables

Suggested backend variables:

APP_ENV=prod
APP_NAME=ai-services-platform
ALLOWED_ORIGINS=https://example.com
LEAD_STORAGE_MODE=log

Future variables:

GCP_PROJECT_ID=
GCP_REGION=
LEAD_STORAGE_BACKEND=
NOTIFICATION_EMAIL=

Secrets should not be stored directly in repository files.

9. Secret Management

Rules:

do not commit .env files,
do not hardcode API keys,
use Secret Manager for production secrets,
use .env.example for documentation only,
limit access to secrets by service account.

Examples of future secrets:

LLM_API_KEY
SMTP_PASSWORD
GOOGLE_CLIENT_SECRET
10. Initial Manual Deployment Checklist

Before the first manual deployment:

 GCP project exists.
 Billing is enabled.
 Budget alert is configured.
 Required APIs are enabled.
 Artifact Registry repository exists.
 Cloud Run service account exists.
 Secrets are configured if needed.
 Backend container builds successfully.
 /health works locally.
 CORS allowed origins are configured.
 No secrets are committed.
11. Suggested Deployment Commands

Example commands to be adapted later:

gcloud config set project YOUR_PROJECT_ID
gcloud config set run/region europe-west1

Build and submit image:

gcloud builds submit backend --tag europe-west1-docker.pkg.dev/YOUR_PROJECT_ID/ai-services-platform/backend:latest

Deploy to Cloud Run:

gcloud run deploy ai-services-backend ^
  --image europe-west1-docker.pkg.dev/YOUR_PROJECT_ID/ai-services-platform/backend:latest ^
  --platform managed ^
  --region europe-west1 ^
  --allow-unauthenticated

These commands are placeholders and should be validated during implementation.

12. Frontend Deployment Direction

Frontend deployment decision is still open.

Options:

Option	Pros	Cons
Firebase Hosting	Good GCP integration	Additional setup
Cloud Run	One GCP runtime model	Less ideal for static-only site
Vercel	Very fast frontend deployment	Outside GCP
GitHub Pages	Simple and free	Limited for dynamic apps

The final frontend hosting decision should be documented as an ADR.

13. Rollback Strategy

Initial rollback approach:

keep previous working image tag,
redeploy previous image if latest deployment fails,
keep deployment commands documented,
avoid destructive database migrations in early MVPs.

Future improvements:

semantic image tags,
GitHub Actions deployment pipeline,
automated smoke tests,
staged deployments.
14. Monitoring After Deployment

After deployment, verify:

frontend loads,
backend /health returns success,
contact form can call backend,
backend logs are visible,
errors are visible in Cloud Logging,
Cloud Run service has reasonable min/max instance settings,
budget alerts are active.
15. Future CI/CD Direction

Future CI/CD should:

run tests on pull request,
build backend container,
push image to Artifact Registry,
deploy to Cloud Run after merge to main/master,
keep secrets outside GitHub repository,
support separate dev and prod deployments.

This should be documented in a separate CI/CD document when implementation starts.