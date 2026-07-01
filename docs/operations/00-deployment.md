# Deployment

## 1. Purpose

This document describes the target deployment direction for the AI Services Platform.

For MVP 0, deployment should stay simple and focus on preparing the application for Google Cloud
Platform, especially Cloud Run for the backend.

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
```

---

## 4. Suggested GCP Services

| Area | Service |
|---|---|
| Backend hosting | Cloud Run |
| Container images | Artifact Registry |
| Secrets | Secret Manager |
| Logs | Cloud Logging |
| Monitoring | Cloud Monitoring |
| Scheduled jobs | Cloud Scheduler in future MVPs |
| Static frontend | Firebase Hosting, Cloud Run, Vercel or another selected option |
| Lead storage | Firestore or Cloud SQL in future MVPs |

---

## 5. Deployment Environments

Suggested environments:

| Environment | Purpose |
|---|---|
| local | Local development |
| dev | Cloud development/testing |
| prod | Public production version |

For early MVP work, only local and dev may be needed.

---

## 6. Backend Deployment Requirements

The backend should be deployable as a container.

Required files:

```text
backend/Dockerfile
backend/.dockerignore
backend/.env.example
```

Required endpoint:

```text
GET /health
```

The backend should listen on the port provided by the environment.

For Cloud Run this usually means reading the `PORT` environment variable.

Current status:

- backend Dockerfile exists,
- backend `.dockerignore` exists,
- backend `/health` endpoint exists,
- local Docker commands are documented,
- Cloud Run deployment has not been executed.

---

## 7. Backend Dockerfile

The MVP 0 backend includes a minimal Dockerfile at:

```text
backend/Dockerfile
```

The container uses `python:3.12-slim`, installs dependencies from `requirements.txt`, copies the
backend application code and starts Uvicorn on `0.0.0.0`.

Runtime command:

```dockerfile
CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
```

The `PORT` environment variable is used for Cloud Run compatibility, with a local fallback to
`8000`.

Local container validation:

```cmd
cd backend
docker build -t ai-services-backend .
docker run --rm -p 8000:8000 -e PORT=8000 ai-services-backend
```

In another terminal:

```cmd
curl.exe http://localhost:8000/health
```

---

## 8. Environment Variables

Suggested backend variables:

```text
APP_ENV=prod
APP_NAME=ai-services-platform
PORT=8000
FRONTEND_URL=https://example.com
ALLOWED_ORIGINS=https://example.com
LEAD_STORAGE_MODE=log
LOG_LEVEL=INFO
```

Future variables:

```text
GCP_PROJECT_ID=
GCP_REGION=
LEAD_STORAGE_BACKEND=
NOTIFICATION_EMAIL=
```

Secrets should not be stored directly in repository files.

---

## 9. Secret Management

Rules:

- do not commit `.env` files,
- do not hardcode API keys,
- use Secret Manager for production secrets,
- use `.env.example` for documentation only,
- limit access to secrets by service account.

Examples of future secrets:

```text
LLM_API_KEY
SMTP_PASSWORD
GOOGLE_CLIENT_SECRET
```

---

## 10. Initial Manual Deployment Checklist

Before the first manual deployment:

- GCP project exists.
- Billing is enabled.
- Budget alert is configured.
- Required APIs are enabled.
- Artifact Registry repository exists.
- Cloud Run service account exists.
- Secrets are configured if needed.
- Backend container builds successfully.
- `/health` works locally.
- CORS allowed origins are configured.
- No secrets are committed.

---

## 11. Suggested Deployment Commands

Example commands to be adapted later:

```cmd
gcloud config set project YOUR_PROJECT_ID
gcloud config set run/region europe-west1
```

Build and submit image:

```cmd
gcloud builds submit backend --tag europe-west1-docker.pkg.dev/YOUR_PROJECT_ID/ai-services-platform/backend:latest
```

Deploy to Cloud Run:

```cmd
gcloud run deploy ai-services-backend ^
  --image europe-west1-docker.pkg.dev/YOUR_PROJECT_ID/ai-services-platform/backend:latest ^
  --platform managed ^
  --region europe-west1 ^
  --allow-unauthenticated
```

These commands are placeholders and should be validated during implementation.

---

## 12. Frontend Deployment Direction

Frontend deployment decision is still open.

Options:

| Option | Pros | Cons |
|---|---|---|
| Firebase Hosting | Good GCP integration | Additional setup |
| Cloud Run | One GCP runtime model | Less ideal for static-only site |
| Vercel | Very fast frontend deployment | Outside GCP |
| GitHub Pages | Simple and free | Limited for dynamic apps |

The final frontend hosting decision should be documented as an ADR.

---

## 13. Rollback Strategy

Initial rollback approach:

- keep previous working image tag,
- redeploy previous image if latest deployment fails,
- keep deployment commands documented,
- avoid destructive database migrations in early MVPs.

Future improvements:

- semantic image tags,
- GitHub Actions deployment pipeline,
- automated smoke tests,
- staged deployments.

---

## 14. Monitoring After Deployment

After deployment, verify:

- frontend loads,
- backend `/health` returns success,
- contact form can call backend,
- backend logs are visible,
- errors are visible in Cloud Logging,
- Cloud Run service has reasonable min/max instance settings,
- budget alerts are active.

---

## 15. Future CI/CD Direction

Future CI/CD should:

- run tests on pull request,
- build backend container,
- push image to Artifact Registry,
- deploy to Cloud Run after merge to main/master,
- keep secrets outside GitHub repository,
- support separate dev and prod deployments.

This should be documented in a separate CI/CD document when implementation starts.
