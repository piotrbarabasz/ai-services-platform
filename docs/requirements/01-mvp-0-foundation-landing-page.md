# MVP 0 — Foundation & Landing Page

## 1. Goal

The goal of MVP 0 is to create the basic project foundation and launch a professional landing page for AI services.

This MVP should allow potential clients to understand the offer and submit a contact request.

---

## 2. Scope

MVP 0 includes:

- initial repository structure,
- project documentation,
- basic frontend application,
- landing page,
- contact form UI,
- basic backend API,
- lead capture endpoint,
- initial GCP setup,
- first deployment approach,
- basic SEO,
- privacy and legal pages.

---

## 3. Out of Scope

MVP 0 does not include:

- AI chatbot functionality,
- multi-client support,
- RAG / knowledge base,
- admin panel,
- voice assistant,
- advanced mail automation,
- payment integration,
- CRM integration.

---

## 4. Functional Requirements

| ID | Requirement |
|---|---|
| WEB-001 | The website must include a landing page describing AI services. |
| WEB-002 | The landing page must include a hero section with a clear value proposition. |
| WEB-003 | The website must include sections for services, examples, benefits, process, FAQ and contact. |
| WEB-004 | The website must include a contact form. |
| WEB-005 | The contact form must allow the user to provide name, email, optional company name, optional phone, service type, message and consent. |
| WEB-006 | The contact form must validate required fields and consent. |
| WEB-007 | The user must see a success message after submitting the form. |
| WEB-008 | The user must see an error message if form submission fails. |
| WEB-009 | The website must include a privacy policy page. |
| WEB-010 | The website must include basic SEO metadata. |

---

## 5. Technical Requirements

| ID | Requirement |
|---|---|
| API-001 | The backend must expose a health check endpoint. |
| API-002 | The backend must expose a contact form endpoint. |
| API-003 | The backend must validate incoming contact form payloads. |
| API-004 | The backend must return consistent error responses. |
| API-005 | The backend must not expose sensitive configuration to the frontend. |
| GCP-001 | The project must be deployable to Google Cloud Platform. |
| GCP-002 | The backend should be prepared for Cloud Run deployment. |
| GCP-003 | Sensitive values should be stored outside the source code. |
| GCP-004 | Application logs should be available in GCP logging tools. |
| GCP-005 | The project should have a clear deployment document. |

---

## 6. Non-functional Requirements

| ID | Requirement |
|---|---|
| SEC-001 | API keys and secrets must not be committed to the repository. |
| SEC-002 | The contact form must include basic spam protection or be prepared for it. |
| SEC-003 | The website must include information about personal data processing. |
| OBS-001 | The backend must log application errors. |
| OBS-002 | The backend must expose basic health status. |
| COST-001 | The initial infrastructure should be low-cost and suitable for early-stage usage. |
| COST-002 | The project should be compatible with future GCP budget alerts. |

---

## 7. Acceptance Criteria

MVP 0 is considered complete when:

- the landing page is available locally,
- the landing page contains all core offer sections,
- the contact form is implemented in the frontend,
- the backend exposes a working health endpoint,
- the backend exposes a working contact endpoint,
- form validation works,
- successful form submission is handled,
- failed form submission is handled,
- the project can be built locally,
- initial deployment instructions exist,
- no secrets are stored in the repository.

---

## 8. Current Implementation Status

Current MVP 0 implementation status:

- backend foundation is implemented with `GET /health` and `POST /api/contact`,
- backend validation covers required contact fields, email format and consent,
- accepted contact submissions are converted into log-only lead records,
- frontend foundation is implemented with routes `/` and `/privacy`,
- frontend contact form submits to the backend using `VITE_API_BASE_URL`,
- frontend validation, loading, success and error states are implemented.

Still pending before MVP 0 can be considered complete:

- final landing page content and styling,
- final privacy policy copy,
- SEO metadata polish,
- durable lead storage or notification decision,
- first GCP dev deployment.

---

## 9. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Scope becomes too broad | Delays first release | Keep MVP 0 limited to website and contact flow |
| Contact form spam | Poor lead quality | Add CAPTCHA or rate limiting in later step |
| Too much focus on design | Slower technical progress | Use clean but simple UI first |
| Missing legal/privacy information | Compliance risk | Add privacy policy early |
| GCP setup becomes too complex | Delays deployment | Start with minimal Cloud Run setup |

---

## 10. Final Deliverables

At the end of MVP 0, the project should include:

- working landing page,
- contact form,
- basic backend API,
- health check endpoint,
- initial GCP-ready structure,
- initial documentation,
- deployment notes,
- first version of requirements and roadmap.

---

## 11. Proposed Epics

| Epic | Name |
|---|---|
| EPIC-01 | Project Documentation Foundation |
| EPIC-02 | Landing Page Implementation |
| EPIC-03 | Contact Form & Lead Capture |
| EPIC-04 | Backend API Foundation |
| EPIC-05 | Initial GCP Setup |
| EPIC-06 | Basic Security & Privacy |
