# MVP 0 — Implementation Backlog

## 1. Purpose

This document defines the implementation backlog for MVP 0 — Foundation & Landing Page.

The goal of MVP 0 is to create the initial technical and product foundation for the AI Services Platform, including:

* project structure,
* documentation foundation,
* landing page,
* contact form,
* backend API foundation,
* basic lead capture,
* privacy and SEO foundations,
* initial GCP deployment preparation.

This backlog is based on the requirements defined in:

```text
docs/requirements/01-mvp-0-foundation-landing-page.md
```

---

## 2. MVP 0 Goal

The goal of MVP 0 is to launch the first usable version of the website that allows a potential client to:

1. understand the AI services offer,
2. see what problems can be solved,
3. learn what types of AI automations are available,
4. submit a contact request,
5. access basic legal and privacy information.

At this stage, the platform does not need to include chatbot functionality yet. The chatbot will be implemented in MVP 1.

---

## 3. MVP 0 Scope

MVP 0 includes:

* repository and documentation foundation,
* basic frontend application,
* public landing page,
* contact form UI,
* backend API foundation,
* contact form endpoint,
* basic lead payload validation,
* basic logging,
* privacy policy page,
* SEO basics,
* initial GCP deployment preparation.

---

## 4. MVP 0 Out of Scope

MVP 0 does not include:

* AI chatbot widget,
* `/api/chat` endpoint,
* LLM provider integration,
* multi-client support,
* RAG / knowledge base,
* admin panel,
* email automation,
* voice assistant,
* payment system,
* CRM integration.

---

## 5. Current Backend Implementation Status

The MVP 0 backend foundation has been implemented.

Completed backend work:

* FastAPI application structure exists.
* `GET /health` is implemented.
* `POST /api/contact` is implemented.
* Contact request validation exists for required fields, email format and consent.
* Internal lead model and lead service exist.
* Initial lead handling uses `LEAD_STORAGE_MODE=log`.
* Basic logging, settings and CORS configuration exist.
* Backend tests exist for health and contact endpoint behavior.
* Backend Dockerfile and `.dockerignore` exist for Cloud Run preparation.

Still pending:

* final landing page content and styling,
* active contact form UI with frontend validation and backend submission,
* final privacy policy copy and SEO basics,
* durable lead storage,
* email notifications,
* production Cloud Run deployment,
* final custom API error response format.

---

## 6. Current Frontend Skeleton Status

The MVP 0 frontend application skeleton has been created.

Completed frontend skeleton work:

* `frontend/` exists.
* Vite, React and TypeScript are configured.
* Local dev server is configured for `http://localhost:4200`.
* `/` route exists with placeholder landing sections.
* `/privacy` route exists with placeholder privacy content.
* Contact area exists as a placeholder and does not submit to the backend yet.
* Future chatbot demo area exists as a placeholder only.
* Frontend environment example exists.

Still pending:

* final landing page implementation,
* active contact form component,
* frontend validation and `/api/contact` integration,
* final privacy policy text,
* SEO basics and production frontend deployment.

---

## EPIC-01 — Project & Documentation Foundation

### Goal

Create the initial repository and documentation structure that will be used as the source of truth for project planning and implementation.

### User Story

As a project owner, I want to have a clear documentation structure, so that requirements,
roadmap, architecture, risks and backlog can be developed in an organized way.

### Related Requirements

* WEB-001
* GCP-001
* GCP-005

### Technical Tasks

| Task ID      | Task                               | Priority |
| ------------ | ---------------------------------- | -------- |
| MVP0-DOC-001 | Create `docs/` directory structure | High     |
| MVP0-DOC-002 | Add project overview document      | High     |
| MVP0-DOC-003 | Add requirements index             | High     |
| MVP0-DOC-004 | Add MVP 0 requirements document    | High     |
| MVP0-DOC-005 | Add MVP 1 requirements document    | Medium   |
| MVP0-DOC-006 | Add roadmap overview               | Medium   |
| MVP0-DOC-007 | Add architecture overview          | Medium   |
| MVP0-DOC-008 | Add initial risk register          | Medium   |
| MVP0-DOC-009 | Add initial ADR documents          | Medium   |

### Acceptance Criteria

* `docs/` directory exists.
* Documentation is split into logical categories.
* MVP 0 and MVP 1 requirements are documented.
* Roadmap is documented.
* Architecture overview is documented.
* Initial risks are documented.
* Initial architecture decisions are documented.

### Dependencies

None.

### Notes

This epic is mostly documentation-related and should be completed before implementation starts.

---

## EPIC-02 — Frontend Application Foundation

### Goal

Create the initial frontend application structure for the public website.

### User Story

As a potential client, I want to open a professional website, so that I can understand what AI services are offered.

### Related Requirements

* WEB-001
* WEB-002
* WEB-003
* WEB-010

### Technical Tasks

| Task ID     | Task                                  | Priority |
| ----------- | ------------------------------------- | -------- |
| MVP0-FE-001 | Create frontend application structure | High     |
| MVP0-FE-002 | Configure routing for core pages      | High     |
| MVP0-FE-003 | Create homepage layout                | High     |
| MVP0-FE-004 | Create shared layout components       | Medium   |
| MVP0-FE-005 | Create reusable section components    | Medium   |
| MVP0-FE-006 | Configure environment files           | Medium   |
| MVP0-FE-007 | Add base responsive styling           | High     |
| MVP0-FE-008 | Add basic error/loading UI patterns   | Low      |

### Suggested Page Structure

```text
/
  Home / Landing Page

/contact
  Contact section or standalone contact page

/privacy
  Privacy policy page

/terms
  Optional terms page
```

### Suggested Frontend Structure

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
        footer/
        navbar/
      services/
        api-client/
      models/
```

### Acceptance Criteria

* Frontend application starts locally.
* Homepage route is available.
* Basic routing works.
* Layout is responsive.
* Shared components are separated from page components.
* No API keys or secrets are stored in frontend code.

### Dependencies

* EPIC-01 — Project & Documentation Foundation

---

## EPIC-03 — Landing Page Implementation

### Goal

Implement the first version of the public landing page describing the AI services offer.

### User Story

As a potential client, I want to understand the offer quickly, so that I can decide whether to contact the business.

### Related Requirements

* WEB-001
* WEB-002
* WEB-003
* WEB-010

### Required Landing Page Sections

| Section     | Purpose                               | Priority |
| ----------- | ------------------------------------- | -------- |
| Hero        | Explain main value proposition        | High     |
| Problem     | Show business problems solved by AI   | High     |
| Services    | Present available AI services         | High     |
| Benefits    | Explain business value                | High     |
| Process     | Explain how cooperation works         | Medium   |
| Demo teaser | Prepare space for future chatbot demo | Medium   |
| FAQ         | Answer common objections              | Medium   |
| Contact CTA | Lead user to contact form             | High     |
| Footer      | Add links and legal information       | Medium   |

### Technical Tasks

| Task ID     | Task                               | Priority |
| ----------- | ---------------------------------- | -------- |
| MVP0-LP-001 | Implement hero section             | High     |
| MVP0-LP-002 | Implement services section         | High     |
| MVP0-LP-003 | Implement benefits section         | High     |
| MVP0-LP-004 | Implement process section          | Medium   |
| MVP0-LP-005 | Implement FAQ section              | Medium   |
| MVP0-LP-006 | Implement contact CTA section      | High     |
| MVP0-LP-007 | Implement footer                   | Medium   |
| MVP0-LP-008 | Add responsive behavior for mobile | High     |
| MVP0-LP-009 | Add basic accessibility attributes | Medium   |

### Suggested Services to Present

The landing page should present services such as:

* AI-powered websites,
* personalized website chatbots,
* lead handling automation,
* email automation,
* customer support automation,
* future 24/7 voice assistants.

### Acceptance Criteria

* Landing page contains all required core sections.
* The offer is clear and understandable.
* CTA buttons lead to the contact section or contact page.
* Page works on desktop and mobile.
* Page has no obvious layout issues.
* Content does not promise features that are not yet available.

### Dependencies

* EPIC-02 — Frontend Application Foundation

---

## EPIC-04 — Contact Form UI

### Goal

Create a contact form that allows potential clients to submit a request.

### User Story

As a potential client, I want to submit my contact details and project needs, so that I can request a consultation or offer.

### Related Requirements

* WEB-004
* WEB-005
* WEB-006
* WEB-007
* WEB-008

### Contact Form Fields

| Field            | Required | Notes                            |
| ---------------- | -------- | -------------------------------- |
| Name             | Yes      | Person name                      |
| Email            | Yes      | Must be valid email              |
| Company name     | No       | Optional for early MVP           |
| Phone            | No       | Optional                         |
| Service type     | Yes      | Selected from predefined options |
| Message          | Yes      | Description of client need       |
| Consent checkbox | Yes      | Personal data/contact consent    |

### Suggested Service Type Options

```text
Website with AI chatbot
Email automation
Lead handling automation
Customer support chatbot
Voice assistant
Not sure yet
Other
```

### Technical Tasks

| Task ID     | Task                                         | Priority |
| ----------- | -------------------------------------------- | -------- |
| MVP0-CF-001 | Create contact form component                | High     |
| MVP0-CF-002 | Add form fields                              | High     |
| MVP0-CF-003 | Add frontend validation                      | High     |
| MVP0-CF-004 | Add consent checkbox                         | High     |
| MVP0-CF-005 | Add success state                            | High     |
| MVP0-CF-006 | Add error state                              | High     |
| MVP0-CF-007 | Connect form to backend endpoint             | High     |
| MVP0-CF-008 | Prevent duplicate submissions during loading | Medium   |
| MVP0-CF-009 | Add basic spam protection placeholder        | Medium   |

### Acceptance Criteria

* User can fill in the form.
* Required fields are validated.
* Invalid email is rejected.
* Consent checkbox is required.
* Form shows loading state while submitting.
* Form shows success message after valid submission.
* Form shows error message after failed submission.
* Form does not expose backend or secret configuration.

### Dependencies

* EPIC-02 — Frontend Application Foundation
* EPIC-05 — Backend API Foundation

---

## EPIC-05 — Backend API Foundation

### Goal

Create the initial backend API structure for health checks and future business endpoints.

### User Story

As a developer, I want a clean backend API foundation, so that contact form, chatbot and future
automation features can be implemented safely.

### Related Requirements

* API-001
* API-002
* API-003
* API-004
* API-005

### Required Endpoints

| Method | Endpoint       | Purpose                  |
| ------ | -------------- | ------------------------ |
| GET    | `/health`      | Application health check |
| POST   | `/api/contact` | Submit contact form      |

### Suggested Backend Structure

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
    config/
      settings.py
    tests/
      test_health.py
      test_contact.py
```

### Technical Tasks

| Task ID      | Task                                 | Priority |
| ------------ | ------------------------------------ | -------- |
| MVP0-API-001 | Create backend application structure | High     |
| MVP0-API-002 | Add `/health` endpoint               | High     |
| MVP0-API-003 | Add `/api/contact` endpoint          | High     |
| MVP0-API-004 | Add request validation models        | High     |
| MVP0-API-005 | Add consistent error responses       | Medium   |
| MVP0-API-006 | Add application configuration module | Medium   |
| MVP0-API-007 | Add basic logging                    | Medium   |
| MVP0-API-008 | Add CORS configuration               | Medium   |
| MVP0-API-009 | Add basic endpoint tests             | Medium   |

### Acceptance Criteria

* Backend starts locally.
* `/health` returns successful response.
* `/api/contact` accepts valid payload.
* `/api/contact` rejects invalid payload.
* API errors use consistent response format.
* Backend logs basic application errors.
* CORS configuration exists.
* Tests can be run locally.

### Current Status

Implemented for the MVP 0 backend foundation:

* backend application structure,
* `/health`,
* `/api/contact`,
* request validation models,
* configuration module,
* basic logging,
* CORS configuration,
* endpoint tests.

Remaining backend foundation follow-up:

* define a final custom error response envelope if needed before public release.

### Dependencies

* EPIC-01 — Project & Documentation Foundation

---

## EPIC-06 — Lead Capture Foundation

### Goal

Handle contact form submissions as leads.

### User Story

As a business owner, I want contact form submissions to be captured as leads, so that I can follow up with potential clients.

### Related Requirements

* WEB-004
* WEB-005
* API-002
* API-003

### Lead Data Model

Suggested initial lead model:

| Field       | Type     | Required |
| ----------- | -------- | -------- |
| id          | string   | Yes      |
| name        | string   | Yes      |
| email       | string   | Yes      |
| companyName | string   | No       |
| phone       | string   | No       |
| serviceType | string   | Yes      |
| message     | string   | Yes      |
| source      | string   | Yes      |
| createdAt   | datetime | Yes      |
| status      | string   | Yes      |

Suggested initial lead statuses:

```text
new
contacted
qualified
rejected
closed
```

### Technical Tasks

| Task ID       | Task                                     | Priority |
| ------------- | ---------------------------------------- | -------- |
| MVP0-LEAD-001 | Define lead request model                | High     |
| MVP0-LEAD-002 | Define internal lead entity              | High     |
| MVP0-LEAD-003 | Add lead service                         | High     |
| MVP0-LEAD-004 | Add basic lead persistence strategy      | Medium   |
| MVP0-LEAD-005 | Add temporary logging fallback for leads | Medium   |
| MVP0-LEAD-006 | Add notification placeholder             | Low      |
| MVP0-LEAD-007 | Document future lead storage decision    | Medium   |

### Initial Persistence Options

For MVP 0, lead persistence can be implemented in one of the following ways:

1. log-only mode for very early local testing,
2. Firestore,
3. Cloud SQL,
4. email notification only,
5. temporary file/database during local development.

The final decision should be documented as an ADR before production launch.

### Acceptance Criteria

* Backend receives lead data.
* Lead payload is validated.
* Lead receives timestamp and status.
* Lead processing is separated into a service layer.
* Invalid lead data is rejected.
* Lead handling does not expose sensitive data in logs.
* Future persistence option is documented.

### Current Status

Implemented for MVP 0:

* contact submissions are converted into internal lead objects,
* leads receive generated id, `createdAt`, `status=new` and `source=website_contact_form`,
* lead processing is separated into a service layer,
* log-only storage mode is used,
* full personal data is not logged by default.

Deferred:

* durable storage,
* notifications,
* CRM integration.

### Dependencies

* EPIC-05 — Backend API Foundation

---

## EPIC-07 — SEO, Privacy & Legal Foundation

### Goal

Add basic SEO and legal/privacy foundations for the public website.

### User Story

As a potential client, I want to understand how my data is processed, so that I can safely submit the contact form.

### Related Requirements

* WEB-009
* WEB-010
* SEC-003

### Technical Tasks

| Task ID        | Task                               | Priority |
| -------------- | ---------------------------------- | -------- |
| MVP0-LEGAL-001 | Add privacy policy page            | High     |
| MVP0-LEGAL-002 | Add consent text near contact form | High     |
| MVP0-LEGAL-003 | Add footer links to privacy page   | Medium   |
| MVP0-SEO-001   | Add page title                     | High     |
| MVP0-SEO-002   | Add meta description               | High     |
| MVP0-SEO-003   | Add Open Graph metadata            | Medium   |
| MVP0-SEO-004   | Add semantic heading structure     | Medium   |
| MVP0-SEO-005   | Add basic sitemap plan             | Low      |

### Acceptance Criteria

* Privacy policy page exists.
* Contact form includes consent checkbox.
* Footer links to privacy policy.
* Homepage has title and meta description.
* Heading structure uses one main H1.
* Website does not collect data without visible consent information.

### Dependencies

* EPIC-02 — Frontend Application Foundation
* EPIC-04 — Contact Form UI

---

## EPIC-08 — Initial GCP Deployment Preparation

### Goal

Prepare the application for future deployment to Google Cloud Platform.

### User Story

As a developer, I want the project to be ready for GCP deployment, so that the first public version can be deployed with minimal rework.

### Related Requirements

* GCP-001
* GCP-002
* GCP-003
* GCP-004
* GCP-005
* COST-001
* COST-002

### Technical Tasks

| Task ID      | Task                                         | Priority |
| ------------ | -------------------------------------------- | -------- |
| MVP0-GCP-001 | Add Dockerfile for backend                   | High     |
| MVP0-GCP-002 | Add `.dockerignore`                          | Medium   |
| MVP0-GCP-003 | Add environment variable documentation       | High     |
| MVP0-GCP-004 | Prepare Cloud Run deployment notes           | High     |
| MVP0-GCP-005 | Prepare Secret Manager usage notes           | Medium   |
| MVP0-GCP-006 | Prepare Artifact Registry usage notes        | Medium   |
| MVP0-GCP-007 | Prepare budget alert checklist               | Medium   |
| MVP0-GCP-008 | Add `/health` endpoint for deployment checks | High     |
| MVP0-GCP-009 | Document local vs production configuration   | Medium   |

### Acceptance Criteria

* Backend can be containerized.
* Environment variables are documented.
* Secrets are not stored in source code.
* Cloud Run deployment approach is documented.
* Budget/cost control checklist exists.
* `/health` endpoint is available for monitoring.
* Deployment notes are clear enough to follow later.

### Current Status

Implemented:

* backend Dockerfile,
* backend `.dockerignore`,
* environment variable documentation,
* local Docker build/run instructions,
* deployment notes for the Cloud Run direction.

Not completed:

* Artifact Registry setup,
* Cloud Run deployment execution,
* budget alert setup.

### Dependencies

* EPIC-05 — Backend API Foundation

---

## EPIC-09 — Basic Security Foundation

### Goal

Add basic security practices before exposing the application publicly.

### User Story

As a project owner, I want the application to follow basic security rules, so that API keys, user data and infrastructure are protected.

### Related Requirements

* SEC-001
* SEC-002
* SEC-003
* OBS-001
* OBS-002

### Technical Tasks

| Task ID      | Task                                      | Priority |
| ------------ | ----------------------------------------- | -------- |
| MVP0-SEC-001 | Ensure `.env` files are ignored by Git    | High     |
| MVP0-SEC-002 | Add `.env.example`                        | High     |
| MVP0-SEC-003 | Configure CORS for allowed origins        | Medium   |
| MVP0-SEC-004 | Avoid logging full personal data          | High     |
| MVP0-SEC-005 | Add basic rate limiting plan              | Medium   |
| MVP0-SEC-006 | Add spam protection plan for contact form | Medium   |
| MVP0-SEC-007 | Document secret management approach       | Medium   |

### Acceptance Criteria

* `.env` is not committed.
* `.env.example` exists.
* Sensitive values are not hardcoded.
* Contact form data is not unnecessarily logged.
* CORS configuration exists.
* Secret management approach is documented.

### Dependencies

* EPIC-05 — Backend API Foundation

---

## EPIC-10 — Local Development & Quality Checks

### Goal

Make the project easy to run and verify locally.

### User Story

As a developer, I want clear local development instructions, so that I can run the project and validate changes quickly.

### Technical Tasks

| Task ID      | Task                                | Priority |
| ------------ | ----------------------------------- | -------- |
| MVP0-DEV-001 | Add local development instructions  | High     |
| MVP0-DEV-002 | Document frontend start command     | High     |
| MVP0-DEV-003 | Document backend start command      | High     |
| MVP0-DEV-004 | Document test commands              | Medium   |
| MVP0-DEV-005 | Add basic lint/format command notes | Medium   |
| MVP0-DEV-006 | Add troubleshooting section         | Low      |

### Acceptance Criteria

* Developer can run frontend locally.
* Developer can run backend locally.
* Developer can run tests locally.
* Required environment variables are documented.
* Common local setup issues are documented.

### Dependencies

* EPIC-02 — Frontend Application Foundation
* EPIC-05 — Backend API Foundation

---

## MVP 0 Delivery Checklist

MVP 0 can be considered complete when:

* [x] Documentation foundation exists.
* [x] Frontend application exists.
* [ ] Landing page is implemented.
* [ ] Contact form UI is implemented.
* [x] Backend application exists.
* [x] `/health` endpoint works.
* [x] `/api/contact` endpoint works.
* [x] Contact payload validation works.
* [x] Lead handling service exists.
* [ ] Privacy policy page exists with final approved copy.
* [ ] SEO basics are configured.
* [x] Secrets are not committed.
* [x] Environment variables are documented.
* [x] GCP deployment approach is documented.
* [x] Local development instructions exist.

---

## Suggested Implementation Order

Recommended order of implementation:

1. EPIC-01 — Project & Documentation Foundation
2. EPIC-02 — Frontend Application Foundation
3. EPIC-05 — Backend API Foundation
4. EPIC-03 — Landing Page Implementation
5. EPIC-04 — Contact Form UI
6. EPIC-06 — Lead Capture Foundation
7. EPIC-07 — SEO, Privacy & Legal Foundation
8. EPIC-09 — Basic Security Foundation
9. EPIC-08 — Initial GCP Deployment Preparation
10. EPIC-10 — Local Development & Quality Checks

---

## Suggested GitHub Issue Labels

Suggested labels for GitHub Issues:

```text
type: docs
type: frontend
type: backend
type: infra
type: security
type: seo
type: testing
type: operations
priority: high
priority: medium
priority: low
mvp: 0
status: ready
status: blocked
```

---

## Next Step

After this backlog is accepted, the next step is to create GitHub Issues for MVP 0 or prepare a
more detailed implementation plan for the first frontend and backend tasks.
