# MVP 0 GitHub Issues Plan

## 1. Purpose

This document prepares a manual GitHub Issues import plan for MVP 0 - Foundation & Landing Page.

It is based on:

- [Initial epics](00-epics.md)
- [MVP 0 implementation backlog](01-mvp-0-implementation-backlog.md)
- [MVP 0 requirements](../requirements/01-mvp-0-foundation-landing-page.md)
- [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)

Do not create GitHub Issues directly from this document without review.

---

## 2. Scope

This plan includes MVP 0 work for:

- documentation cleanup,
- README and navigation,
- frontend skeleton,
- landing page sections,
- contact form UI,
- backend skeleton,
- health endpoint,
- contact endpoint,
- lead model,
- privacy and SEO,
- GCP deployment preparation,
- local development documentation.

This plan does not include:

- MVP 1 chatbot widget,
- `/api/chat`,
- LLM provider integration,
- RAG,
- multi-client support,
- admin panel,
- voice assistant,
- payments,
- CRM integration.

---

## 3. Recommended GitHub Labels

| Label | Purpose |
|---|---|
| `mvp: 0` | Work belongs to MVP 0. |
| `type: docs` | Documentation-only work. |
| `type: frontend` | Frontend application or UI work. |
| `type: backend` | Backend API work. |
| `type: infra` | Infrastructure or deployment preparation. |
| `type: security` | Security, privacy or secret-handling work. |
| `type: seo` | SEO metadata and search-related work. |
| `type: testing` | Automated or manual validation work. |
| `type: operations` | Local development, deployment or operations docs. |
| `priority: high` | Needed early or blocks other work. |
| `priority: medium` | Important but not a first blocker. |
| `priority: low` | Nice to have for MVP 0 or can be deferred. |
| `status: ready` | Ready to implement once dependencies are met. |
| `status: blocked` | Waiting on another issue or ADR. |
| `epic: docs` | Documentation foundation work. |
| `epic: frontend` | Frontend foundation and landing page work. |
| `epic: contact` | Contact form and lead capture work. |
| `epic: backend` | Backend foundation work. |
| `epic: security` | Security and privacy work. |
| `epic: infra` | GCP and deployment preparation work. |

---

## 4. Recommended Milestones

| Milestone | Goal |
|---|---|
| `MVP 0 - Planning Ready` | Documentation, ADRs and navigation are ready for implementation. |
| `MVP 0 - App Skeleton` | Frontend and backend skeletons run locally. |
| `MVP 0 - Landing Page` | Landing page content and layout are implemented. |
| `MVP 0 - Contact Flow` | Contact form, backend endpoint and lead handling work end to end. |
| `MVP 0 - Deployment Prep` | Project is ready for first manual GCP deployment preparation. |
| `MVP 0 - Release Candidate` | Privacy, SEO, local docs, validation and final checks are complete. |

---

## 5. Proposed Issues Summary

| Order | Issue ID | Title | Group | Priority | Milestone | Dependencies |
|---|---|---|---|---|---|---|
| 1 | MVP0-ISSUE-001 | Finalize MVP 0 documentation baseline | Documentation cleanup | High | MVP 0 - Planning Ready | None |
| 2 | MVP0-ISSUE-002 | Update README and documentation navigation for MVP 0 | README and navigation | High | MVP 0 - Planning Ready | MVP0-ISSUE-001 |
| 3 | MVP0-ISSUE-003 | Write required MVP 0 ADRs before implementation | Documentation cleanup | High | MVP 0 - Planning Ready | MVP0-ISSUE-001 |
| 4 | MVP0-ISSUE-004 | Create frontend application skeleton | Frontend skeleton | High | MVP 0 - App Skeleton | MVP0-ISSUE-003 |
| 5 | MVP0-ISSUE-005 | Configure frontend routing and base layout | Frontend skeleton | High | MVP 0 - App Skeleton | MVP0-ISSUE-004 |
| 6 | MVP0-ISSUE-006 | Add shared frontend components and responsive foundation | Frontend skeleton | Medium | MVP 0 - App Skeleton | MVP0-ISSUE-005 |
| 7 | MVP0-ISSUE-007 | Implement landing page hero and primary CTA | Landing page sections | High | MVP 0 - Landing Page | MVP0-ISSUE-006 |
| 8 | MVP0-ISSUE-008 | Implement services, examples and benefits sections | Landing page sections | High | MVP 0 - Landing Page | MVP0-ISSUE-006 |
| 9 | MVP0-ISSUE-009 | Implement process, FAQ and footer sections | Landing page sections | Medium | MVP 0 - Landing Page | MVP0-ISSUE-006 |
| 10 | MVP0-ISSUE-010 | Create contact form UI fields and validation | Contact form UI | High | MVP 0 - Contact Flow | MVP0-ISSUE-006 |
| 11 | MVP0-ISSUE-011 | Add contact form loading, success and error states | Contact form UI | High | MVP 0 - Contact Flow | MVP0-ISSUE-010 |
| 12 | MVP0-ISSUE-012 | Connect contact form UI to backend API client | Contact form UI | High | MVP 0 - Contact Flow | MVP0-ISSUE-011, MVP0-ISSUE-018 |
| 13 | MVP0-ISSUE-013 | Create backend application skeleton | Backend skeleton | High | MVP 0 - App Skeleton | MVP0-ISSUE-003 |
| 14 | MVP0-ISSUE-014 | Add backend configuration and CORS foundation | Backend skeleton | High | MVP 0 - App Skeleton | MVP0-ISSUE-013 |
| 15 | MVP0-ISSUE-015 | Implement backend health endpoint | Health endpoint | High | MVP 0 - App Skeleton | MVP0-ISSUE-013 |
| 16 | MVP0-ISSUE-016 | Define contact request validation models | Contact endpoint | High | MVP 0 - Contact Flow | MVP0-ISSUE-014 |
| 17 | MVP0-ISSUE-017 | Define lead model and lead service | Lead model | High | MVP 0 - Contact Flow | MVP0-ISSUE-016 |
| 18 | MVP0-ISSUE-018 | Implement backend contact endpoint | Contact endpoint | High | MVP 0 - Contact Flow | MVP0-ISSUE-016, MVP0-ISSUE-017 |
| 19 | MVP0-ISSUE-019 | Add backend tests for health and contact endpoints | Backend skeleton | Medium | MVP 0 - Contact Flow | MVP0-ISSUE-015, MVP0-ISSUE-018 |
| 20 | MVP0-ISSUE-020 | Add environment examples and secret safeguards | Privacy and SEO | High | MVP 0 - Deployment Prep | MVP0-ISSUE-014 |
| 21 | MVP0-ISSUE-021 | Add privacy page and contact consent copy | Privacy and SEO | High | MVP 0 - Release Candidate | MVP0-ISSUE-005, MVP0-ISSUE-010 |
| 22 | MVP0-ISSUE-022 | Add basic SEO metadata and semantic headings | Privacy and SEO | Medium | MVP 0 - Release Candidate | MVP0-ISSUE-007, MVP0-ISSUE-008, MVP0-ISSUE-009 |
| 23 | MVP0-ISSUE-023 | Prepare backend containerization for Cloud Run | GCP deployment preparation | High | MVP 0 - Deployment Prep | MVP0-ISSUE-013, MVP0-ISSUE-015 |
| 24 | MVP0-ISSUE-024 | Document manual GCP deployment checklist | GCP deployment preparation | Medium | MVP 0 - Deployment Prep | MVP0-ISSUE-020, MVP0-ISSUE-023 |
| 25 | MVP0-ISSUE-025 | Update local development and validation docs | Local development docs | High | MVP 0 - Release Candidate | MVP0-ISSUE-004, MVP0-ISSUE-013 |
| 26 | MVP0-ISSUE-026 | Add basic logging and personal data logging rules | Backend skeleton | Medium | MVP 0 - Contact Flow | MVP0-ISSUE-014, MVP0-ISSUE-018 |
| 27 | MVP0-ISSUE-027 | Add MVP 0 final validation checklist | Documentation cleanup | Medium | MVP 0 - Release Candidate | MVP0-ISSUE-012, MVP0-ISSUE-019, MVP0-ISSUE-024, MVP0-ISSUE-025 |

---

## 6. Issue Details

### MVP0-ISSUE-001 - Finalize MVP 0 documentation baseline

**Description:**  
Review MVP 0 requirements, architecture, backlog, risk and operations docs before implementation starts.

**Suggested labels:** `mvp: 0`, `type: docs`, `epic: docs`, `priority: high`, `status: ready`

**Acceptance criteria:**

- MVP 0 requirements are readable and current.
- MVP 0 architecture reflects the planned frontend, backend and contact flow.
- MVP 0 backlog is aligned with requirements.
- MVP 0 exclusions remain visible.
- No MVP 1 implementation scope is added.

**Dependencies:** None.

---

### MVP0-ISSUE-002 - Update README and documentation navigation for MVP 0

**Description:**  
Make sure repository and documentation navigation points to the MVP 0 source-of-truth files.

**Suggested labels:** `mvp: 0`, `type: docs`, `epic: docs`, `priority: high`, `status: ready`

**Acceptance criteria:**

- Main documentation index links to MVP 0 requirements, backlog, architecture and operations docs.
- README or docs index explains current MVP focus.
- Related docs can be found without searching manually.
- Navigation does not imply later MVPs are ready for implementation.

**Dependencies:** MVP0-ISSUE-001.

---

### MVP0-ISSUE-003 - Write required MVP 0 ADRs before implementation

**Description:**  
Write the highest-priority ADRs needed before implementation, including frontend framework, backend framework, environment configuration, secret management and initial lead storage.

**Suggested labels:** `mvp: 0`, `type: docs`, `epic: docs`, `priority: high`, `status: ready`

**Acceptance criteria:**

- Required MVP 0 technology decisions are documented as ADRs.
- Each ADR includes context, decision and consequences.
- Decisions do not add future MVP scope.
- Paid or cloud-dependent choices include cost notes where relevant.

**Dependencies:** MVP0-ISSUE-001.

---

### MVP0-ISSUE-004 - Create frontend application skeleton

**Description:**  
Create the initial frontend application structure after the frontend framework ADR is accepted.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: frontend`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- `frontend/` application structure exists.
- Frontend can be installed and started locally.
- Initial project scripts are documented.
- No API keys or secrets are stored in frontend files.

**Dependencies:** MVP0-ISSUE-003.

---

### MVP0-ISSUE-005 - Configure frontend routing and base layout

**Description:**  
Add initial routing and shared page shell for homepage, contact access and privacy page.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: frontend`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Homepage route is available.
- Privacy route or page is planned in the frontend structure.
- Shared layout supports navigation and footer.
- Layout works as a base for landing page sections.

**Dependencies:** MVP0-ISSUE-004.

---

### MVP0-ISSUE-006 - Add shared frontend components and responsive foundation

**Description:**  
Create reusable layout and section components needed for the landing page and contact flow.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: frontend`, `priority: medium`, `status: blocked`

**Acceptance criteria:**

- Shared components are separated from page components.
- Responsive styling foundation exists.
- Basic button, section and form layout patterns are reusable.
- No chatbot UI components are added.

**Dependencies:** MVP0-ISSUE-005.

---

### MVP0-ISSUE-007 - Implement landing page hero and primary CTA

**Description:**  
Implement the hero section with a clear value proposition and contact-oriented call to action.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: frontend`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Hero section explains the AI services offer.
- Primary CTA points to contact form or contact section.
- Section works on desktop and mobile.
- Copy does not promise unavailable features.

**Dependencies:** MVP0-ISSUE-006.

---

### MVP0-ISSUE-008 - Implement services, examples and benefits sections

**Description:**  
Implement landing page sections that explain available service categories and business value.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: frontend`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Services section is present.
- Examples or use cases are present.
- Benefits section is present.
- Content is clear and does not implement later-MVP features.

**Dependencies:** MVP0-ISSUE-006.

---

### MVP0-ISSUE-009 - Implement process, FAQ and footer sections

**Description:**  
Add supporting landing page sections that explain cooperation process, answer common questions and provide footer links.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: frontend`, `priority: medium`, `status: blocked`

**Acceptance criteria:**

- Process section is present.
- FAQ section is present.
- Footer includes contact and privacy links.
- Page keeps a simple MVP 0 scope.

**Dependencies:** MVP0-ISSUE-006.

---

### MVP0-ISSUE-010 - Create contact form UI fields and validation

**Description:**  
Create the contact form UI with required fields and frontend validation.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: contact`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Contact form includes name, email, optional company name, optional phone, service type, message and consent.
- Required fields are validated.
- Invalid email is rejected.
- Consent is required before submission.

**Dependencies:** MVP0-ISSUE-006.

---

### MVP0-ISSUE-011 - Add contact form loading, success and error states

**Description:**  
Add user-facing states for contact form submission.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: contact`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Loading state is shown during submission.
- Duplicate submission is prevented while loading.
- Success message is shown after valid submission.
- Error message is shown after failed submission.
- Internal backend details are not exposed to users.

**Dependencies:** MVP0-ISSUE-010.

---

### MVP0-ISSUE-012 - Connect contact form UI to backend API client

**Description:**  
Connect the contact form to the backend `/api/contact` endpoint through a frontend API client.

**Suggested labels:** `mvp: 0`, `type: frontend`, `epic: contact`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Frontend API base URL is configurable.
- Contact form submits to `/api/contact`.
- Success and error states use backend response outcomes.
- Frontend does not contain backend secrets.

**Dependencies:** MVP0-ISSUE-011, MVP0-ISSUE-018.

---

### MVP0-ISSUE-013 - Create backend application skeleton

**Description:**  
Create the backend application structure after the backend framework ADR is accepted.

**Suggested labels:** `mvp: 0`, `type: backend`, `epic: backend`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- `backend/` application structure exists.
- Backend can be installed and started locally.
- Basic app entry point exists.
- Initial test structure exists.

**Dependencies:** MVP0-ISSUE-003.

---

### MVP0-ISSUE-014 - Add backend configuration and CORS foundation

**Description:**  
Add environment-based backend configuration and allowed-origin handling.

**Suggested labels:** `mvp: 0`, `type: backend`, `type: security`, `epic: backend`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Backend reads configuration from environment variables.
- Local frontend origin can be configured.
- CORS is restricted to configured origins.
- Sensitive values are not hardcoded.

**Dependencies:** MVP0-ISSUE-013.

---

### MVP0-ISSUE-015 - Implement backend health endpoint

**Description:**  
Add `GET /health` for local checks and future deployment checks.

**Suggested labels:** `mvp: 0`, `type: backend`, `epic: backend`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- `GET /health` returns a successful response.
- Response includes basic service status.
- Endpoint does not require secrets.
- Endpoint is suitable for deployment checks.

**Dependencies:** MVP0-ISSUE-013.

---

### MVP0-ISSUE-016 - Define contact request validation models

**Description:**  
Define backend request validation for contact form submissions.

**Suggested labels:** `mvp: 0`, `type: backend`, `epic: contact`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Contact payload model includes required MVP 0 fields.
- Required fields are validated.
- Email format is validated.
- Consent is validated.
- Invalid payloads produce consistent validation errors.

**Dependencies:** MVP0-ISSUE-014.

---

### MVP0-ISSUE-017 - Define lead model and lead service

**Description:**  
Create the internal lead representation and lead handling service boundary.

**Suggested labels:** `mvp: 0`, `type: backend`, `epic: contact`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Internal lead model includes id, contact fields, source, status and timestamp.
- Default status is defined.
- Lead handling is separated from endpoint code.
- Initial storage mode follows the accepted ADR.

**Dependencies:** MVP0-ISSUE-016.

---

### MVP0-ISSUE-018 - Implement backend contact endpoint

**Description:**  
Add `POST /api/contact` and connect it to validation and lead handling.

**Suggested labels:** `mvp: 0`, `type: backend`, `epic: contact`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- `POST /api/contact` accepts valid contact payloads.
- Invalid payloads are rejected.
- Valid payloads are passed to the lead service.
- Endpoint returns consistent success and error responses.
- Full personal data is not unnecessarily logged.

**Dependencies:** MVP0-ISSUE-016, MVP0-ISSUE-017.

---

### MVP0-ISSUE-019 - Add backend tests for health and contact endpoints

**Description:**  
Add focused backend tests for MVP 0 endpoint behavior.

**Suggested labels:** `mvp: 0`, `type: backend`, `type: testing`, `epic: backend`, `priority: medium`, `status: blocked`

**Acceptance criteria:**

- Health endpoint success path is tested.
- Contact endpoint valid payload path is tested.
- Contact endpoint invalid payload path is tested.
- Tests can be run locally with documented command.

**Dependencies:** MVP0-ISSUE-015, MVP0-ISSUE-018.

---

### MVP0-ISSUE-020 - Add environment examples and secret safeguards

**Description:**  
Add `.env.example` files and repository safeguards for local configuration.

**Suggested labels:** `mvp: 0`, `type: security`, `type: operations`, `epic: security`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Backend `.env.example` documents required variables.
- Frontend `.env.example` documents required variables when needed.
- `.env` files are ignored by Git.
- No real secrets are committed.
- Documentation explains where secrets belong for local and future GCP use.

**Dependencies:** MVP0-ISSUE-014.

---

### MVP0-ISSUE-021 - Add privacy page and contact consent copy

**Description:**  
Add basic privacy/legal content needed for contact form usage.

**Suggested labels:** `mvp: 0`, `type: frontend`, `type: security`, `epic: security`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Privacy page exists.
- Contact form includes consent copy.
- Footer links to privacy page.
- Website explains personal data processing at a basic level.

**Dependencies:** MVP0-ISSUE-005, MVP0-ISSUE-010.

---

### MVP0-ISSUE-022 - Add basic SEO metadata and semantic headings

**Description:**  
Add MVP 0 SEO foundations for the landing page.

**Suggested labels:** `mvp: 0`, `type: frontend`, `type: seo`, `epic: frontend`, `priority: medium`, `status: blocked`

**Acceptance criteria:**

- Homepage has page title.
- Homepage has meta description.
- Open Graph metadata is added if supported by selected framework.
- Page uses a clear semantic heading structure.
- There is only one primary H1 on the homepage.

**Dependencies:** MVP0-ISSUE-007, MVP0-ISSUE-008, MVP0-ISSUE-009.

---

### MVP0-ISSUE-023 - Prepare backend containerization for Cloud Run

**Description:**  
Add backend containerization files and keep them aligned with Cloud Run requirements.

**Suggested labels:** `mvp: 0`, `type: infra`, `type: backend`, `epic: infra`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Backend Dockerfile exists.
- `.dockerignore` exists.
- Backend listens on the configured port for Cloud Run compatibility.
- Container build instructions are documented.
- No secrets are copied into the image.

**Dependencies:** MVP0-ISSUE-013, MVP0-ISSUE-015.

---

### MVP0-ISSUE-024 - Document manual GCP deployment checklist

**Description:**  
Update deployment documentation with the manual MVP 0 deployment checklist and placeholders.

**Suggested labels:** `mvp: 0`, `type: docs`, `type: infra`, `type: operations`, `epic: infra`, `priority: medium`, `status: blocked`

**Acceptance criteria:**

- Deployment document lists required GCP setup steps.
- Cloud Run deployment approach is documented.
- Secret Manager expectations are documented.
- Budget alert checklist is documented.
- Commands are clearly marked as placeholders until validated.

**Dependencies:** MVP0-ISSUE-020, MVP0-ISSUE-023.

---

### MVP0-ISSUE-025 - Update local development and validation docs

**Description:**  
Update local development documentation after frontend and backend skeletons exist.

**Suggested labels:** `mvp: 0`, `type: docs`, `type: operations`, `epic: docs`, `priority: high`, `status: blocked`

**Acceptance criteria:**

- Frontend install and run commands are documented.
- Backend install and run commands are documented.
- Test commands are documented.
- Required local environment variables are documented.
- Common troubleshooting notes are included.

**Dependencies:** MVP0-ISSUE-004, MVP0-ISSUE-013.

---

### MVP0-ISSUE-026 - Add basic logging and personal data logging rules

**Description:**  
Add backend logging for MVP 0 and document what must not be logged.

**Suggested labels:** `mvp: 0`, `type: backend`, `type: security`, `type: operations`, `epic: security`, `priority: medium`, `status: blocked`

**Acceptance criteria:**

- Backend logs application startup.
- Backend logs health/contact endpoint status at a safe level.
- Backend logs validation failures without exposing unnecessary personal data.
- Secrets, tokens and API keys are never logged.
- Logging behavior is documented.

**Dependencies:** MVP0-ISSUE-014, MVP0-ISSUE-018.

---

### MVP0-ISSUE-027 - Add MVP 0 final validation checklist

**Description:**  
Create a final checklist for reviewing MVP 0 before considering it release-ready.

**Suggested labels:** `mvp: 0`, `type: docs`, `type: testing`, `epic: docs`, `priority: medium`, `status: blocked`

**Acceptance criteria:**

- Checklist covers landing page sections.
- Checklist covers contact form happy path and error path.
- Checklist covers backend health and contact endpoints.
- Checklist covers privacy, SEO, local docs and deployment prep.
- Checklist confirms no MVP 1 or later-MVP functionality was added.

**Dependencies:** MVP0-ISSUE-012, MVP0-ISSUE-019, MVP0-ISSUE-024, MVP0-ISSUE-025.

---

## 7. Suggested Implementation Order

1. Finalize MVP 0 documentation and ADRs: MVP0-ISSUE-001 to MVP0-ISSUE-003.
2. Create frontend and backend skeletons in parallel: MVP0-ISSUE-004 and MVP0-ISSUE-013.
3. Add frontend routing/layout and backend configuration/health: MVP0-ISSUE-005, MVP0-ISSUE-014, MVP0-ISSUE-015.
4. Build landing page sections: MVP0-ISSUE-006 to MVP0-ISSUE-009.
5. Build backend contact flow: MVP0-ISSUE-016 to MVP0-ISSUE-019.
6. Build frontend contact flow: MVP0-ISSUE-010 to MVP0-ISSUE-012.
7. Add privacy, SEO, environment and logging safeguards: MVP0-ISSUE-020 to MVP0-ISSUE-022 and MVP0-ISSUE-026.
8. Prepare deployment and local documentation: MVP0-ISSUE-023 to MVP0-ISSUE-025.
9. Complete final validation: MVP0-ISSUE-027.

---

## 8. Import Notes

When creating issues manually:

- copy one issue detail section per GitHub Issue,
- keep the issue title exactly as listed unless a better title is agreed,
- add the suggested labels and milestone,
- add dependencies in the issue body,
- keep MVP 1 and later-MVP work out of MVP 0 issues,
- mark blocked issues as blocked until their dependencies are complete.

