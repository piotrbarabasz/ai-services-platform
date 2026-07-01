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

The architecture should stay simple, but it should not block future MVPs such as chatbot demo,
multi-client support, RAG and email automation.

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
```

MVP 0 does not include AI model integration yet. The LLM/chatbot architecture will be added in MVP 1.

---

## 3. High-Level Architecture

```text
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
```

---

## 4. Components

| Component | Responsibility | Current MVP 0 Status |
|---|---|---|
| Frontend Website | Public landing page and contact form | `/` and `/privacy` routes exist locally; contact form is connected to backend; final landing content and legally reviewed privacy copy pending |
| Backend API | Health check and contact endpoint | Implemented |
| Lead Service | Validate and process contact requests | Implemented with log-only handling |
| Persistence Layer | Store leads or prepare future storage | Deferred; no database yet |
| Notification Service | Notify owner about new leads | Deferred; no email integration yet |
| Logging | Basic backend logs | Implemented for startup, health and contact flow |
| GCP Runtime | Cloud Run-ready deployment structure | Dockerfile prepared; Cloud Run not deployed |
| Secret Management | Keep sensitive values outside code | Environment examples documented; Secret Manager future |

---

## 5. Frontend Architecture

The frontend should be organized around pages and reusable components.

Suggested structure:

```text
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
```

### Frontend Responsibilities

The frontend is responsible for:

- rendering the landing page,
- presenting the AI services offer,
- validating the contact form before submission,
- calling the backend contact endpoint,
- showing success and error states,
- linking to privacy information,
- providing responsive layout.

Current MVP 0 frontend implementation includes an active contact form that submits to
`POST /api/contact` through a typed API client using `VITE_API_BASE_URL`. The contact form shows
loading, success and error states. The privacy page contains MVP placeholder sections, but the
landing page content and legally reviewed privacy copy still need final review before public
release.

### Frontend Restrictions

The frontend must not:

- store API keys,
- expose backend secrets,
- contain business-critical hidden configuration,
- send data to third-party services without documented consent.

---

## 6. Backend Architecture

The backend should expose minimal endpoints needed for MVP 0.

Suggested structure:

```text
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
```

Current implemented backend structure follows this shape with top-level `backend/tests/` and includes:

```text
backend/
  app/
    api/
      health.py
      contact.py
    config/
      settings.py
    models/
      contact.py
      lead.py
    services/
      lead_service.py
  tests/
    test_health.py
    test_contact.py
  Dockerfile
  .dockerignore
```

The frontend implementation follows the same boundaries with top-level route, component, service
and model folders under `frontend/src/`.

### Required Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Health check for local and deployment checks |
| POST | `/api/contact` | Accept contact form submission |

### Backend Responsibilities

The backend is responsible for:

- validating incoming contact payloads,
- creating an internal lead representation,
- assigning default lead status,
- adding timestamp,
- logging processing status,
- returning structured success/error responses,
- keeping sensitive configuration outside source code.

---

## 7. Contact Form Flow

```text
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
```

---

## 8. Lead Model

Suggested MVP 0 lead model:

| Field | Type | Required | Notes |
|---|---|---|---|
| id | string | Yes | Generated server-side |
| name | string | Yes | Contact person |
| email | string | Yes | Valid email |
| companyName | string | No | Optional |
| phone | string | No | Optional |
| serviceType | string | Yes | Selected service |
| message | string | Yes | Client request |
| source | string | Yes | Example: website_contact_form |
| status | string | Yes | Default: new |
| createdAt | datetime | Yes | Server-side timestamp |

Suggested statuses:

```text
new
contacted
qualified
rejected
closed
```

---

## 9. Configuration

The application should use environment-based configuration.

Suggested variables:

```text
APP_ENV=local
APP_NAME=ai-services-platform
BACKEND_PORT=8000
FRONTEND_URL=http://localhost:4200
ALLOWED_ORIGINS=http://localhost:4200
LEAD_STORAGE_MODE=log
```

Frontend runtime/build variable:

```text
VITE_API_BASE_URL=http://localhost:8000
```

`VITE_API_BASE_URL` is public frontend configuration and must not contain secrets. The backend
`ALLOWED_ORIGINS` value must include the frontend origin that will submit contact requests.

Future variables:

```text
GCP_PROJECT_ID=
GCP_REGION=
LEAD_STORAGE_BACKEND=firestore
NOTIFICATION_EMAIL=
SMTP_HOST=
SMTP_PORT=
```

---

## 10. Security Architecture

MVP 0 security rules:

- do not commit `.env` files,
- provide `.env.example`,
- validate all backend payloads,
- restrict CORS to known frontend origins,
- do not log full personal data unnecessarily,
- keep secrets outside frontend code,
- prepare for Secret Manager usage in GCP,
- include consent checkbox in the contact form.

---

## 11. Observability

MVP 0 should include basic observability.

Minimum logs:

- application startup,
- health check status,
- contact form submission status,
- validation errors,
- unexpected backend errors.

Do not log:

- full message content unless needed for local development,
- full personal data in production,
- secrets,
- tokens,
- API keys.

---

## 12. GCP Deployment Direction

MVP 0 should be prepared for this deployment direction:

| Area | Proposed GCP Service |
|---|---|
| Backend hosting | Cloud Run |
| Container images | Artifact Registry |
| Secrets | Secret Manager |
| Logs | Cloud Logging |
| Monitoring | Cloud Monitoring |
| Static frontend | Firebase Hosting, Cloud Run or other selected hosting |
| Lead storage | Firestore or Cloud SQL in later MVP |

The first deployment should stay minimal. Advanced infrastructure automation can be added later.
The current MVP 0 contact flow works locally; Cloud Run and frontend production deployment have
not been executed yet.

---

## 13. Future Extension Points

The architecture should allow future additions:

| Future Feature | Extension Point |
|---|---|
| Chatbot demo | Add `/api/chat` endpoint and chatbot widget |
| LLM provider | Add LLM service adapter |
| Multi-client support | Add client configuration model |
| RAG | Add knowledge ingestion and retrieval services |
| Mail automation | Add notification and email generation services |
| Admin panel | Add authentication and admin API |
| Voice assistant | Add voice provider integration and call processing |

---

## 14. MVP 0 Architecture Decisions

The following decisions should be documented separately as ADRs:

- use GitHub Markdown as documentation source,
- use GCP as cloud provider,
- use Cloud Run for backend hosting,
- choose initial frontend framework,
- choose initial backend framework,
- choose initial lead storage strategy.

---

## 15. Acceptance Criteria

The architecture for MVP 0 is acceptable when:

- frontend and backend responsibilities are clearly separated,
- required endpoints are defined,
- lead flow is documented,
- configuration approach is defined,
- security basics are documented,
- GCP deployment direction is clear,
- future MVPs are not blocked by the design.
