---

docs/architecture/01-mvp-0-architecture.md

```md
# MVP 0 — Architecture

## 1. Purpose

This document describes the target technical architecture for MVP 0 — Foundation & Landing Page.

MVP 0 should provide a simple but production-oriented foundation for:

- a public landing page,
- contact form,
- backend API,
- basic lead capture,
- basic security,
- future deployment to Google Cloud Platform.

The architecture should stay simple, but it should not block future MVPs such as chatbot demo, multi-client support, RAG and email automation.

---

## 2. MVP 0 Architecture Goal

The goal of MVP 0 architecture is to support the first usable version of the AI Services Platform:

```text
User
  -> Public Website
  -> Contact Form
  -> Backend API
  -> Lead Handling
  -> Logging / Future Storage

MVP 0 does not include AI model integration yet. The LLM/chatbot architecture will be added in MVP 1.

3. High-level Architecture
Browser
  |
  v
Frontend Website
  |
  | HTTP
  v
Backend API
  |
  +--> Lead Service
  |
  +--> Logging
  |
  +--> Future Storage
  |
  v
GCP-ready Runtime
4. Components
Component	Responsibility	MVP 0 Status
Frontend Website	Public landing page and contact form	Required
Backend API	Health check and contact endpoint	Required
Lead Service	Validate and process contact requests	Required
Persistence Layer	Store leads or prepare future storage	Optional / placeholder
Notification Service	Notify owner about new leads	Optional / placeholder
Logging	Basic backend logs	Required
GCP Runtime	Cloud Run-ready deployment structure	Required
Secret Management	Keep sensitive values outside code	Required
5. Frontend Architecture

The frontend should be organized around pages and reusable components.

Suggested structure:

frontend/
  src/
    app/
      pages/
        home/
        contact/
        privacy/
      components/
        hero/
        services/
        benefits/
        process/
        faq/
        contact-form/
        navbar/
        footer/
      services/
        api-client/
      models/
        contact-request.ts
Frontend Responsibilities

The frontend is responsible for:

rendering the landing page,
presenting the AI services offer,
validating the contact form before submission,
calling the backend contact endpoint,
showing success and error states,
linking to privacy information,
providing responsive layout.
Frontend Restrictions

The frontend must not:

store API keys,
expose backend secrets,
contain business-critical hidden configuration,
send data to third-party services without documented consent.
6. Backend Architecture

The backend should expose minimal endpoints needed for MVP 0.

Suggested structure:

backend/
  app/
    main.py
    api/
      health.py
      contact.py
    services/
      lead_service.py
      notification_service.py
    models/
      lead.py
      contact.py
    config/
      settings.py
    tests/
      test_health.py
      test_contact.py
Required Endpoints
Method	Endpoint	Purpose
GET	/health	Health check for local and deployment checks
POST	/api/contact	Accept contact form submission
Backend Responsibilities

The backend is responsible for:

validating incoming contact payloads,
creating an internal lead representation,
assigning default lead status,
adding timestamp,
logging processing status,
returning structured success/error responses,
keeping sensitive configuration outside source code.
7. Contact Form Flow
User fills contact form
  |
  v
Frontend validates required fields
  |
  v
Frontend sends POST /api/contact
  |
  v
Backend validates payload
  |
  v
Lead Service processes lead
  |
  +--> log lead metadata
  +--> optional future storage
  +--> optional future notification
  |
  v
Backend returns success response
  |
  v
Frontend shows success message
8. Lead Model

Suggested MVP 0 lead model:

Field	Type	Required	Notes
id	string	Yes	Generated server-side
name	string	Yes	Contact person
email	string	Yes	Valid email
companyName	string	No	Optional
phone	string	No	Optional
serviceType	string	Yes	Selected service
message	string	Yes	Client request
source	string	Yes	Example: website_contact_form
status	string	Yes	Default: new
createdAt	datetime	Yes	Server-side timestamp

Suggested statuses:

new
contacted
qualified
rejected
closed
9. Configuration

The application should use environment-based configuration.

Suggested variables:

APP_ENV=local
APP_NAME=ai-services-platform
BACKEND_PORT=8000
FRONTEND_URL=http://localhost:4200
ALLOWED_ORIGINS=http://localhost:4200
LEAD_STORAGE_MODE=log

Future variables:

GCP_PROJECT_ID=
GCP_REGION=
LEAD_STORAGE_BACKEND=firestore
NOTIFICATION_EMAIL=
SMTP_HOST=
SMTP_PORT=
10. Security Architecture

MVP 0 security rules:

do not commit .env files,
provide .env.example,
validate all backend payloads,
restrict CORS to known frontend origins,
do not log full personal data unnecessarily,
keep secrets outside frontend code,
prepare for Secret Manager usage in GCP,
include consent checkbox in the contact form.
11. Observability

MVP 0 should include basic observability.

Minimum logs:

application startup,
health check status,
contact form submission status,
validation errors,
unexpected backend errors.

Do not log:

full message content unless needed for local development,
full personal data in production,
secrets,
tokens,
API keys.
12. GCP Deployment Direction

MVP 0 should be prepared for this deployment direction:

Area	Proposed GCP Service
Backend hosting	Cloud Run
Container images	Artifact Registry
Secrets	Secret Manager
Logs	Cloud Logging
Monitoring	Cloud Monitoring
Static frontend	Firebase Hosting, Cloud Run or other selected hosting
Lead storage	Firestore or Cloud SQL in later MVP

The first deployment should stay minimal. Advanced infrastructure automation can be added later.

13. Future Extension Points

The architecture should allow future additions:

Future Feature	Extension Point
Chatbot demo	Add /api/chat endpoint and chatbot widget
LLM provider	Add LLM service adapter
Multi-client support	Add client configuration model
RAG	Add knowledge ingestion and retrieval services
Mail automation	Add notification and email generation services
Admin panel	Add authentication and admin API
Voice assistant	Add voice provider integration and call processing
14. MVP 0 Architecture Decisions

The following decisions should be documented separately as ADRs:

use GitHub Markdown as documentation source,
use GCP as cloud provider,
use Cloud Run for backend hosting,
choose initial frontend framework,
choose initial backend framework,
choose initial lead storage strategy.
15. Acceptance Criteria

The architecture for MVP 0 is acceptable when:

frontend and backend responsibilities are clearly separated,
required endpoints are defined,
lead flow is documented,
configuration approach is defined,
security basics are documented,
GCP deployment direction is clear,
future MVPs are not blocked by the design.

---

docs/operations/00-local-development.md

```md
# Local Development

## 1. Purpose

This document describes how to run the AI Services Platform locally during MVP 0 development.

At this stage the project may still be documentation-only. This file defines the target local development workflow that should be implemented once frontend and backend code are added.

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

Suggested backend structure:

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

Suggested frontend structure:

frontend/
  src/
  package.json
  .env.example
3. Required Tools

The exact versions should be updated after the technology stack is finalized.

Recommended tools:

Tool	Purpose
Git	Version control
Node.js	Frontend development
npm or pnpm	Frontend package manager
Python	Backend development
pip or poetry	Backend dependency management
Docker Desktop	Local container testing
Google Cloud CLI	Future GCP deployment
4. Environment Files

The repository should not contain real .env files.

Each application should provide an example file:

backend/.env.example
frontend/.env.example

Example backend variables:

APP_ENV=local
APP_NAME=ai-services-platform
BACKEND_PORT=8000
FRONTEND_URL=http://localhost:4200
ALLOWED_ORIGINS=http://localhost:4200
LEAD_STORAGE_MODE=log

Example frontend variables:

VITE_API_BASE_URL=http://localhost:8000

The actual variable names may change depending on the selected frontend framework.

5. Backend Local Run

Target command for backend development:

cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

Expected result:

Backend API runs at http://localhost:8000
Health check available at http://localhost:8000/health
6. Frontend Local Run

Target command for frontend development:

cd frontend
npm install
npm run dev

Expected result:

Frontend runs locally and can call the backend API.

The exact local URL depends on the selected framework.

Examples:

Angular: http://localhost:4200
Vite/React: http://localhost:5173
Next.js: http://localhost:3000
7. Local Development Flow

Recommended local workflow:

Start backend API.
Verify /health.
Start frontend app.
Open landing page.
Submit contact form.
Check backend logs.
Run tests before commit.
8. Health Check

Backend health check should be available at:

GET /health

Expected response:

{
  "status": "ok",
  "service": "ai-services-platform"
}
9. Contact Endpoint

Contact form endpoint should be available at:

POST /api/contact

Example request:

{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "companyName": "Example Company",
  "phone": "+48123123123",
  "serviceType": "Website with AI chatbot",
  "message": "I want to automate customer support.",
  "consent": true
}

Expected response:

{
  "status": "success",
  "message": "Contact request received."
}
10. Testing

Suggested backend test command:

cd backend
pytest

Suggested frontend test command:

cd frontend
npm test

If tests are not configured yet, this section should be updated when implementation starts.

11. Formatting and Linting

Suggested backend checks:

cd backend
ruff check .
black --check .

Suggested frontend checks:

cd frontend
npm run lint
npm run format:check

Exact commands should be updated after the stack is finalized.

12. Common Issues
Backend port already in use

Use another port or stop the process using port 8000.

Frontend cannot connect to backend

Check:

backend is running,
API base URL is correct,
CORS allows frontend origin,
backend endpoint path is correct.
Environment variables are missing

Create local .env files based on .env.example.

Git accidentally tracks local environment files

Make sure .gitignore includes:

.env
.env.*
!.env.example
13. Commit Checklist

Before committing local changes:

 app starts locally,
 no secrets are committed,
 .env.example is updated if needed,
 documentation is updated if behavior changed,
 tests pass or missing tests are documented,
 git status does not show unwanted files.
14. Future Improvements

Future local development improvements:

Docker Compose for frontend and backend,
local Firestore emulator,
Makefile or task runner,
pre-commit hooks,
automated linting,
local integration tests.