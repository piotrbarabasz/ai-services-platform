# Local Development

## 1. Purpose

This document describes how to run the AI Services Platform locally during MVP 0 development.

The MVP 0 backend exists and can be run locally. The frontend foundation also exists.
The frontend contact form submits to the backend `POST /api/contact` endpoint during local
development.

---

## 2. Expected Repository Structure

Target structure for MVP 0:

```text
ai-services-platform/
  docs/
  frontend/
  backend/
  .gitignore
  README.md
```

Suggested backend structure:

```text
backend/
  app/
    main.py
    api/
    services/
    models/
    config/
  tests/
  requirements.txt
  .env.example
  Dockerfile
  .dockerignore
```

Suggested frontend structure:

```text
frontend/
  src/
  package.json
  .env.example
```

---

## 3. Required Tools

Current MVP 0 tools:

| Tool | Purpose |
|---|---|
| Git | Version control |
| Node.js | Frontend development with Vite and React |
| npm | Frontend package manager |
| Python 3.12 or compatible Python 3 | Backend development with FastAPI |
| pip | Backend dependency management |
| Docker Desktop | Local container testing |
| Google Cloud CLI | Future GCP deployment |

---

## 4. Environment Files

The repository should not contain real `.env` files.

Each application should provide an example file:

```text
backend/.env.example
frontend/.env.example
```

Example backend variables:

```text
APP_ENV=local
APP_NAME=ai-services-platform
BACKEND_PORT=8000
FRONTEND_URL=http://localhost:4200
ALLOWED_ORIGINS=http://localhost:4200
LEAD_STORAGE_MODE=log
LOG_LEVEL=INFO
```

Example frontend variables:

```text
VITE_API_BASE_URL=http://localhost:8000
```

`VITE_API_BASE_URL` is frontend-visible configuration and must not contain secrets.

---

## 5. Backend Local Run

Current command for backend development on Windows CMD:

```cmd
cd backend
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

Expected result:

- backend API runs at `http://localhost:8000`,
- health check available at `http://localhost:8000/health`,
- contact endpoint available at `http://localhost:8000/api/contact`.

Docker alternative:

```cmd
cd backend
docker build -t ai-services-backend .
docker run --rm -p 8000:8000 -e PORT=8000 ai-services-backend
```

---

## 6. Frontend Local Run

Current command for frontend development on Windows CMD:

```cmd
cd frontend
npm install
npm run dev
```

Expected result:

- frontend runs locally at `http://localhost:4200`,
- homepage route is available at `http://localhost:4200/`,
- privacy route is available at `http://localhost:4200/privacy`,
- API base URL is documented through `frontend/.env.example`,
- contact form submission calls `http://localhost:8000/api/contact` when `VITE_API_BASE_URL` uses the local backend URL.

---

## 7. Local Development Flow

Recommended local workflow:

1. Start backend API.
2. Verify `/health`.
3. Start frontend app.
4. Open landing page.
5. Fill and submit the contact form with valid data.
6. Confirm the frontend success message and check backend logs for accepted contact request metadata.
7. Test frontend validation with an invalid email and missing consent.
8. Run validation commands before commit.

---

## 8. Health Check

Backend health check should be available at:

```text
GET /health
```

Expected response:

```json
{
  "status": "ok",
  "service": "ai-services-platform",
  "environment": "local"
}
```

---

## 9. Contact Endpoint

Contact form endpoint should be available at:

```text
POST /api/contact
```

Example request:

```json
{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "companyName": "Example Company",
  "phone": "+48123123123",
  "serviceType": "Website with AI chatbot",
  "message": "I want to automate customer support.",
  "consent": true
}
```

Expected response:

```json
{
  "status": "success",
  "message": "Contact request received."
}
```

---

## 10. Testing

Suggested backend test command:

```cmd
cd backend
python -m pytest
```

Current frontend validation command:

```cmd
cd frontend
npm run typecheck
npm run build
```

Backend tests are configured. A frontend test runner is not configured yet.

---

## 11. Formatting and Linting

Suggested backend checks:

```cmd
cd backend
ruff check .
black --check .
```

Current frontend check:

```cmd
cd frontend
npm run typecheck
npm run build
```

Linting and formatting scripts should be added when the frontend implementation grows enough to justify extra tooling.

---

## 12. Common Issues

### Backend Port Already in Use

Use another port or stop the process using port 8000.

### Frontend Cannot Connect to Backend

Check:

- backend is running,
- API base URL is correct,
- CORS allows frontend origin,
- backend endpoint path is correct.

### Environment Variables Are Missing

Create local `.env` files based on `.env.example`.

### Git Accidentally Tracks Local Environment Files

Make sure `.gitignore` includes:

```text
.env
.env.*
!.env.example
```

---

## 13. Commit Checklist

Before committing local changes:

- app starts locally,
- no secrets are committed,
- `.env.example` is updated if needed,
- documentation is updated if behavior changed,
- tests pass or missing tests are documented,
- `git status` does not show unwanted files.

---

## 14. Future Improvements

Future local development improvements:

- Docker Compose for frontend and backend,
- local Firestore emulator,
- Makefile or task runner,
- pre-commit hooks,
- automated linting,
- local integration tests.
