# MVP 0 GitHub Issue Bodies

## Purpose

This document contains ready-to-copy GitHub Issue bodies for MVP 0 - Foundation & Landing Page.

It is based on:

- [MVP 0 GitHub issues plan](03-mvp-0-github-issues-plan.md)
- [MVP 0 implementation backlog](01-mvp-0-implementation-backlog.md)
- [MVP 0 requirements](../requirements/01-mvp-0-foundation-landing-page.md)
- [MVP 0 architecture](../architecture/01-mvp-0-architecture.md)
- [ADR backlog](../decisions/00-adr-backlog.md)

Do not create GitHub Issues directly from this document without review.

MVP 0 issue bodies must not include:

- MVP 1 chatbot widget implementation,
- `/api/chat`,
- LLM provider integration,
- RAG,
- multi-client support,
- admin panel,
- voice assistant,
- payments,
- CRM integration.

---

## Issue 001 - Finalize MVP 0 documentation baseline

Title:
Finalize MVP 0 documentation baseline

Labels:
`mvp: 0`, `type: docs`, `epic: docs`, `priority: high`, `status: ready`

Milestone:
MVP 0 - Planning Ready

Description:
Review the MVP 0 source-of-truth documentation before implementation starts. The goal is to make sure requirements, architecture, backlog, risks and operations notes are readable, current and aligned.

Scope:

- Review MVP 0 requirements.
- Review MVP 0 architecture.
- Review MVP 0 implementation backlog.
- Review MVP 0 risk and operations docs.
- Confirm MVP 0 exclusions remain visible.

Out of scope:

- Creating frontend or backend code.
- Creating GitHub Issues automatically.
- Adding MVP 1 chatbot implementation scope.
- Adding future MVP features.

Acceptance criteria:

- MVP 0 requirements are readable and current.
- MVP 0 architecture reflects the planned frontend, backend and contact flow.
- MVP 0 backlog is aligned with requirements.
- MVP 0 exclusions remain visible.
- No MVP 1 implementation scope is added.

Dependencies:
None.

Validation:

- Check Markdown rendering for the reviewed docs.
- Confirm links between requirements, architecture and backlog work.
- Confirm no future MVP implementation tasks were added.

---

## Issue 002 - Update README and documentation navigation for MVP 0

Title:
Update README and documentation navigation for MVP 0

Labels:
`mvp: 0`, `type: docs`, `epic: docs`, `priority: high`, `status: ready`

Milestone:
MVP 0 - Planning Ready

Description:
Make sure repository and documentation navigation points to the MVP 0 source-of-truth files and explains the current MVP focus.

Scope:

- Update the root README or documentation index as needed.
- Link MVP 0 requirements, backlog, architecture and operations docs.
- Keep MVP 0 first and MVP 1 next in navigation.
- Keep later MVPs marked as future planning only.

Out of scope:

- Changing MVP requirements.
- Choosing implementation technologies.
- Creating application code.
- Creating GitHub Issues automatically.

Acceptance criteria:

- Main documentation index links to MVP 0 requirements, backlog, architecture and operations docs.
- README or docs index explains current MVP focus.
- Related docs can be found without searching manually.
- Navigation does not imply later MVPs are ready for implementation.

Dependencies:
MVP0-ISSUE-001.

Validation:

- Check all Markdown links point to existing files.
- Confirm the documentation map renders correctly.
- Confirm MVP 2+ items remain future-only.

---

## Issue 003 - Write required MVP 0 ADRs before implementation

Title:
Write required MVP 0 ADRs before implementation

Labels:
`mvp: 0`, `type: docs`, `epic: docs`, `priority: high`, `status: ready`

Milestone:
MVP 0 - Planning Ready

Description:
Write the highest-priority ADRs needed before implementation, including frontend framework, backend framework, environment configuration, secret management and initial lead storage.

Scope:

- Create ADRs for required MVP 0 technology decisions.
- Include context, decision and consequences in each ADR.
- Include cost notes where choices are paid or cloud-dependent.
- Update ADR backlog after decisions are accepted.

Out of scope:

- Implementing frontend or backend code.
- Adding future MVP scope.
- Choosing MVP 1 LLM provider.
- Creating GitHub Issues automatically.

Acceptance criteria:

- Required MVP 0 technology decisions are documented as ADRs.
- Each ADR includes context, decision and consequences.
- Decisions do not add future MVP scope.
- Paid or cloud-dependent choices include cost notes where relevant.

Dependencies:
MVP0-ISSUE-001.

Validation:

- Confirm new ADR files render correctly.
- Confirm ADR backlog links to accepted ADRs.
- Confirm decisions do not change existing accepted ADRs.

---

## Issue 004 - Create frontend application skeleton

Title:
Create frontend application skeleton

Labels:
`mvp: 0`, `type: frontend`, `epic: frontend`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - App Skeleton

Description:
Create the initial frontend application structure after the frontend framework ADR is accepted.

Scope:

- Create the `frontend/` application structure.
- Add basic install and start scripts.
- Add initial application entry point.
- Document initial frontend run command.

Out of scope:

- Building final landing page sections.
- Connecting to LLM providers.
- Adding chatbot UI components.
- Adding API keys or secrets to frontend files.

Acceptance criteria:

- `frontend/` application structure exists.
- Frontend can be installed and started locally.
- Initial project scripts are documented.
- No API keys or secrets are stored in frontend files.

Dependencies:
MVP0-ISSUE-003.

Validation:

- Run the documented frontend install command.
- Run the documented frontend start command.
- Confirm the app starts locally.
- Confirm no secret values are committed.

---

## Issue 005 - Configure frontend routing and base layout

Title:
Configure frontend routing and base layout

Labels:
`mvp: 0`, `type: frontend`, `epic: frontend`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - App Skeleton

Description:
Add initial routing and a shared page shell for homepage, contact access and privacy page.

Scope:

- Add homepage route.
- Add privacy route or page placeholder.
- Add shared layout shell.
- Add navigation and footer structure needed for MVP 0.

Out of scope:

- Final landing page copy and sections.
- Chatbot route or widget.
- Admin panel routes.
- Multi-client routing.

Acceptance criteria:

- Homepage route is available.
- Privacy route or page is planned in the frontend structure.
- Shared layout supports navigation and footer.
- Layout works as a base for landing page sections.

Dependencies:
MVP0-ISSUE-004.

Validation:

- Start the frontend locally.
- Confirm homepage and privacy route or placeholder can be reached.
- Confirm navigation and footer render without layout errors.

---

## Issue 006 - Add shared frontend components and responsive foundation

Title:
Add shared frontend components and responsive foundation

Labels:
`mvp: 0`, `type: frontend`, `epic: frontend`, `priority: medium`, `status: blocked`

Milestone:
MVP 0 - App Skeleton

Description:
Create reusable layout and section components needed for the landing page and contact flow.

Scope:

- Add shared section/layout components.
- Add reusable button and basic form layout patterns.
- Add responsive styling foundation.
- Keep components generic enough for MVP 0 landing and contact pages.

Out of scope:

- Chatbot UI components.
- Admin UI components.
- Client-specific configuration UI.
- Final visual polish beyond MVP 0 foundation.

Acceptance criteria:

- Shared components are separated from page components.
- Responsive styling foundation exists.
- Basic button, section and form layout patterns are reusable.
- No chatbot UI components are added.

Dependencies:
MVP0-ISSUE-005.

Validation:

- Start the frontend locally.
- Check shared components render on desktop and mobile widths.
- Confirm no chatbot-specific components were added.

---

## Issue 007 - Implement landing page hero and primary CTA

Title:
Implement landing page hero and primary CTA

Labels:
`mvp: 0`, `type: frontend`, `epic: frontend`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Landing Page

Description:
Implement the hero section with a clear value proposition and a contact-oriented call to action.

Scope:

- Add MVP 0 hero section.
- Add primary CTA to contact form or contact section.
- Keep copy focused on current AI services offer.
- Ensure hero works on desktop and mobile.

Out of scope:

- Chatbot widget or live AI demo.
- Pricing promises.
- RAG, admin, voice assistant or multi-client claims.
- Backend contact endpoint work.

Acceptance criteria:

- Hero section explains the AI services offer.
- Primary CTA points to contact form or contact section.
- Section works on desktop and mobile.
- Copy does not promise unavailable features.

Dependencies:
MVP0-ISSUE-006.

Validation:

- Start the frontend locally.
- Verify CTA target works.
- Check hero layout on desktop and mobile widths.
- Review copy for unsupported feature promises.

---

## Issue 008 - Implement services, examples and benefits sections

Title:
Implement services, examples and benefits sections

Labels:
`mvp: 0`, `type: frontend`, `epic: frontend`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Landing Page

Description:
Implement landing page sections that explain available service categories, example use cases and business value.

Scope:

- Add services section.
- Add examples or use cases section.
- Add benefits section.
- Keep content aligned with MVP 0 public landing page scope.

Out of scope:

- Implementing actual automations.
- Implementing chatbot behavior.
- Adding client-specific or admin functionality.
- Claiming future MVP features are available now.

Acceptance criteria:

- Services section is present.
- Examples or use cases are present.
- Benefits section is present.
- Content is clear and does not implement later-MVP features.

Dependencies:
MVP0-ISSUE-006.

Validation:

- Start the frontend locally.
- Confirm all three sections render.
- Review copy for future-MVP claims.
- Check layout on desktop and mobile widths.

---

## Issue 009 - Implement process, FAQ and footer sections

Title:
Implement process, FAQ and footer sections

Labels:
`mvp: 0`, `type: frontend`, `epic: frontend`, `priority: medium`, `status: blocked`

Milestone:
MVP 0 - Landing Page

Description:
Add supporting landing page sections that explain cooperation process, answer common questions and provide footer links.

Scope:

- Add process section.
- Add FAQ section.
- Add footer with contact and privacy links.
- Keep page content simple and MVP 0 focused.

Out of scope:

- Advanced marketing pages.
- Admin links.
- Chatbot UI.
- Payment or subscription content.

Acceptance criteria:

- Process section is present.
- FAQ section is present.
- Footer includes contact and privacy links.
- Page keeps a simple MVP 0 scope.

Dependencies:
MVP0-ISSUE-006.

Validation:

- Start the frontend locally.
- Confirm process, FAQ and footer sections render.
- Confirm footer links work.
- Review FAQ for unsupported future-MVP promises.

---

## Issue 010 - Create contact form UI fields and validation

Title:
Create contact form UI fields and validation

Labels:
`mvp: 0`, `type: frontend`, `epic: contact`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Contact Flow

Description:
Create the contact form UI with required fields and frontend validation.

Scope:

- Add contact form fields.
- Add required-field validation.
- Add email validation.
- Add required consent checkbox.
- Keep form ready for backend connection.

Out of scope:

- Backend `/api/contact` implementation.
- Email sending.
- CRM integration.
- Chatbot handoff.

Acceptance criteria:

- Contact form includes name, email, optional company name, optional phone, service type, message and consent.
- Required fields are validated.
- Invalid email is rejected.
- Consent is required before submission.

Dependencies:
MVP0-ISSUE-006.

Validation:

- Start the frontend locally.
- Try submitting empty and invalid forms.
- Confirm consent is required.
- Confirm no backend secrets are present in frontend code.

---

## Issue 011 - Add contact form loading, success and error states

Title:
Add contact form loading, success and error states

Labels:
`mvp: 0`, `type: frontend`, `epic: contact`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Contact Flow

Description:
Add user-facing loading, success and error states for contact form submission.

Scope:

- Add loading state.
- Prevent duplicate submission while loading.
- Add success message.
- Add safe generic error message.

Out of scope:

- Backend endpoint implementation.
- Exposing backend stack traces or internal errors.
- Email automation.
- Chatbot handoff.

Acceptance criteria:

- Loading state is shown during submission.
- Duplicate submission is prevented while loading.
- Success message is shown after valid submission.
- Error message is shown after failed submission.
- Internal backend details are not exposed to users.

Dependencies:
MVP0-ISSUE-010.

Validation:

- Start the frontend locally.
- Exercise loading, success and error states using mocked or temporary outcomes.
- Confirm duplicate submission is blocked during loading.
- Confirm user-facing errors are safe.

---

## Issue 012 - Connect contact form UI to backend API client

Title:
Connect contact form UI to backend API client

Labels:
`mvp: 0`, `type: frontend`, `epic: contact`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Contact Flow

Description:
Connect the contact form to the backend `/api/contact` endpoint through a frontend API client.

Scope:

- Add frontend API client for contact submission.
- Make API base URL configurable.
- Submit contact payload to `/api/contact`.
- Wire success and error states to backend outcomes.

Out of scope:

- Implementing backend `/api/contact`.
- Calling third-party APIs directly from the browser.
- Adding secrets to frontend configuration.
- Chatbot or LLM integration.

Acceptance criteria:

- Frontend API base URL is configurable.
- Contact form submits to `/api/contact`.
- Success and error states use backend response outcomes.
- Frontend does not contain backend secrets.

Dependencies:
MVP0-ISSUE-011, MVP0-ISSUE-018.

Validation:

- Run frontend and backend locally.
- Submit a valid contact payload.
- Submit invalid payloads and confirm safe errors.
- Confirm browser code contains no secrets.

---

## Issue 013 - Create backend application skeleton

Title:
Create backend application skeleton

Labels:
`mvp: 0`, `type: backend`, `epic: backend`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - App Skeleton

Description:
Create the backend application structure after the backend framework ADR is accepted.

Scope:

- Add `backend/` application structure.
- Add basic app entry point.
- Add initial test structure.
- Document install and local start commands.

Out of scope:

- Contact endpoint business logic.
- LLM integration.
- Database integration unless selected by ADR.
- Email sending.

Acceptance criteria:

- `backend/` application structure exists.
- Backend can be installed and started locally.
- Basic app entry point exists.
- Initial test structure exists.

Dependencies:
MVP0-ISSUE-003.

Validation:

- Run the documented backend install command.
- Run the documented backend start command.
- Confirm initial tests can be discovered or run.
- Confirm no secrets are committed.

---

## Issue 014 - Add backend configuration and CORS foundation

Title:
Add backend configuration and CORS foundation

Labels:
`mvp: 0`, `type: backend`, `type: security`, `epic: backend`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - App Skeleton

Description:
Add environment-based backend configuration and allowed-origin handling.

Scope:

- Add backend configuration module.
- Read settings from environment variables.
- Configure local frontend origin.
- Restrict CORS to configured origins.

Out of scope:

- Hardcoding sensitive values.
- Secret Manager production integration beyond preparation.
- Authentication or admin authorization.
- Chat endpoint configuration.

Acceptance criteria:

- Backend reads configuration from environment variables.
- Local frontend origin can be configured.
- CORS is restricted to configured origins.
- Sensitive values are not hardcoded.

Dependencies:
MVP0-ISSUE-013.

Validation:

- Run backend locally with environment configuration.
- Confirm allowed origin works.
- Confirm unconfigured origins are not broadly allowed.
- Review code for hardcoded secrets.

---

## Issue 015 - Implement backend health endpoint

Title:
Implement backend health endpoint

Labels:
`mvp: 0`, `type: backend`, `epic: backend`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - App Skeleton

Description:
Add `GET /health` for local checks and future deployment checks.

Scope:

- Add `GET /health` endpoint.
- Return basic service status.
- Keep endpoint independent from secrets.
- Keep response suitable for deployment checks.

Out of scope:

- Deep dependency health checks.
- Chatbot health checks.
- Authentication.
- Monitoring alerts.

Acceptance criteria:

- `GET /health` returns a successful response.
- Response includes basic service status.
- Endpoint does not require secrets.
- Endpoint is suitable for deployment checks.

Dependencies:
MVP0-ISSUE-013.

Validation:

- Start backend locally.
- Call `GET /health`.
- Confirm successful response and safe response body.
- Add or run health endpoint test when test framework exists.

---

## Issue 016 - Define contact request validation models

Title:
Define contact request validation models

Labels:
`mvp: 0`, `type: backend`, `epic: contact`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Contact Flow

Description:
Define backend request validation for contact form submissions.

Scope:

- Define contact payload model.
- Validate required fields.
- Validate email format.
- Validate consent.
- Define consistent validation error behavior.

Out of scope:

- Persisting leads.
- Sending email notifications.
- CRM integration.
- Chatbot data capture.

Acceptance criteria:

- Contact payload model includes required MVP 0 fields.
- Required fields are validated.
- Email format is validated.
- Consent is validated.
- Invalid payloads produce consistent validation errors.

Dependencies:
MVP0-ISSUE-014.

Validation:

- Run backend tests for valid and invalid payloads.
- Confirm validation errors are structured consistently.
- Confirm validation does not log unnecessary personal data.

---

## Issue 017 - Define lead model and lead service

Title:
Define lead model and lead service

Labels:
`mvp: 0`, `type: backend`, `epic: contact`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Contact Flow

Description:
Create the internal lead representation and lead handling service boundary.

Scope:

- Define internal lead model.
- Add generated id, source, status and timestamp fields.
- Add lead service boundary.
- Align initial storage behavior with accepted ADR.

Out of scope:

- Full CRM implementation.
- Email automation.
- Advanced lead scoring.
- Multi-client lead routing.

Acceptance criteria:

- Internal lead model includes id, contact fields, source, status and timestamp.
- Default status is defined.
- Lead handling is separated from endpoint code.
- Initial storage mode follows the accepted ADR.

Dependencies:
MVP0-ISSUE-016.

Validation:

- Run lead service unit tests if available.
- Confirm default status and timestamp are assigned.
- Confirm endpoint code is not tightly coupled to storage details.
- Confirm no unnecessary personal data is logged.

---

## Issue 018 - Implement backend contact endpoint

Title:
Implement backend contact endpoint

Labels:
`mvp: 0`, `type: backend`, `epic: contact`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Contact Flow

Description:
Add `POST /api/contact` and connect it to validation and lead handling.

Scope:

- Add `POST /api/contact`.
- Validate incoming contact payloads.
- Pass valid payloads to the lead service.
- Return structured success and error responses.
- Avoid unnecessary personal data logging.

Out of scope:

- Chat endpoint.
- LLM calls.
- Email automation unless separately approved.
- CRM integration.

Acceptance criteria:

- `POST /api/contact` accepts valid contact payloads.
- Invalid payloads are rejected.
- Valid payloads are passed to the lead service.
- Endpoint returns consistent success and error responses.
- Full personal data is not unnecessarily logged.

Dependencies:
MVP0-ISSUE-016, MVP0-ISSUE-017.

Validation:

- Start backend locally.
- Submit valid and invalid contact requests.
- Run endpoint tests.
- Review logs for personal data exposure.

---

## Issue 019 - Add backend tests for health and contact endpoints

Title:
Add backend tests for health and contact endpoints

Labels:
`mvp: 0`, `type: backend`, `type: testing`, `epic: backend`, `priority: medium`, `status: blocked`

Milestone:
MVP 0 - Contact Flow

Description:
Add focused backend tests for MVP 0 endpoint behavior.

Scope:

- Test health endpoint success path.
- Test contact endpoint valid payload path.
- Test contact endpoint invalid payload path.
- Document how tests are run locally.

Out of scope:

- End-to-end browser tests.
- LLM provider tests.
- Load testing.
- Production monitoring tests.

Acceptance criteria:

- Health endpoint success path is tested.
- Contact endpoint valid payload path is tested.
- Contact endpoint invalid payload path is tested.
- Tests can be run locally with documented command.

Dependencies:
MVP0-ISSUE-015, MVP0-ISSUE-018.

Validation:

- Run the documented backend test command.
- Confirm tests pass locally.
- Confirm tests are focused on MVP 0 endpoints.

---

## Issue 020 - Add environment examples and secret safeguards

Title:
Add environment examples and secret safeguards

Labels:
`mvp: 0`, `type: security`, `type: operations`, `epic: security`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Deployment Prep

Description:
Add `.env.example` files and repository safeguards for local configuration.

Scope:

- Add backend `.env.example`.
- Add frontend `.env.example` when needed.
- Ensure local `.env` files are ignored by Git.
- Document where secrets belong locally and in future GCP deployment.

Out of scope:

- Committing real secrets.
- Full Secret Manager automation.
- Production CI/CD secret injection.
- Frontend exposure of backend secrets.

Acceptance criteria:

- Backend `.env.example` documents required variables.
- Frontend `.env.example` documents required variables when needed.
- `.env` files are ignored by Git.
- No real secrets are committed.
- Documentation explains where secrets belong for local and future GCP use.

Dependencies:
MVP0-ISSUE-014.

Validation:

- Check Git ignore rules for `.env` files.
- Search changed files for secret-looking values.
- Confirm `.env.example` contains placeholders only.

---

## Issue 021 - Add privacy page and contact consent copy

Title:
Add privacy page and contact consent copy

Labels:
`mvp: 0`, `type: frontend`, `type: security`, `epic: security`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Release Candidate

Description:
Add basic privacy/legal content needed for contact form usage.

Scope:

- Add privacy page.
- Add contact form consent copy.
- Link footer to privacy page.
- Explain personal data processing at a basic level.

Out of scope:

- Full legal review.
- Terms/payment pages unless separately approved.
- User accounts.
- Admin panel privacy workflows.

Acceptance criteria:

- Privacy page exists.
- Contact form includes consent copy.
- Footer links to privacy page.
- Website explains personal data processing at a basic level.

Dependencies:
MVP0-ISSUE-005, MVP0-ISSUE-010.

Validation:

- Start frontend locally.
- Confirm privacy page renders.
- Confirm contact form consent copy is visible.
- Confirm footer privacy link works.

---

## Issue 022 - Add basic SEO metadata and semantic headings

Title:
Add basic SEO metadata and semantic headings

Labels:
`mvp: 0`, `type: frontend`, `type: seo`, `epic: frontend`, `priority: medium`, `status: blocked`

Milestone:
MVP 0 - Release Candidate

Description:
Add MVP 0 SEO foundations for the landing page.

Scope:

- Add homepage title.
- Add homepage meta description.
- Add Open Graph metadata if supported by the selected framework.
- Review semantic heading structure.
- Ensure one primary H1 on the homepage.

Out of scope:

- Advanced SEO automation.
- Paid analytics.
- Sitemap implementation unless separately planned.
- Content for future MVP features as current capabilities.

Acceptance criteria:

- Homepage has page title.
- Homepage has meta description.
- Open Graph metadata is added if supported by selected framework.
- Page uses a clear semantic heading structure.
- There is only one primary H1 on the homepage.

Dependencies:
MVP0-ISSUE-007, MVP0-ISSUE-008, MVP0-ISSUE-009.

Validation:

- Inspect rendered page metadata.
- Check homepage heading structure.
- Confirm metadata does not claim unavailable features.

---

## Issue 023 - Prepare backend containerization for Cloud Run

Title:
Prepare backend containerization for Cloud Run

Labels:
`mvp: 0`, `type: infra`, `type: backend`, `epic: infra`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Deployment Prep

Description:
Add backend containerization files and keep them aligned with Cloud Run requirements.

Scope:

- Add backend Dockerfile.
- Add `.dockerignore`.
- Ensure backend listens on configured port.
- Document container build instructions.
- Keep secrets out of the image.

Out of scope:

- Full Terraform or infrastructure automation.
- CI/CD pipeline.
- Frontend hosting implementation.
- Production deployment execution.

Acceptance criteria:

- Backend Dockerfile exists.
- `.dockerignore` exists.
- Backend listens on the configured port for Cloud Run compatibility.
- Container build instructions are documented.
- No secrets are copied into the image.

Dependencies:
MVP0-ISSUE-013, MVP0-ISSUE-015.

Validation:

- Build the backend container locally if tooling is available.
- Confirm `.dockerignore` excludes local env files.
- Confirm container command uses configurable port.
- Inspect image inputs for secrets.

---

## Issue 024 - Document manual GCP deployment checklist

Title:
Document manual GCP deployment checklist

Labels:
`mvp: 0`, `type: docs`, `type: infra`, `type: operations`, `epic: infra`, `priority: medium`, `status: blocked`

Milestone:
MVP 0 - Deployment Prep

Description:
Update deployment documentation with the manual MVP 0 deployment checklist and placeholders.

Scope:

- Document required GCP setup steps.
- Document Cloud Run deployment approach.
- Document Secret Manager expectations.
- Document budget alert checklist.
- Mark unvalidated commands as placeholders.

Out of scope:

- Executing deployment.
- Creating GCP resources automatically.
- Adding CI/CD.
- Adding future MVP infrastructure.

Acceptance criteria:

- Deployment document lists required GCP setup steps.
- Cloud Run deployment approach is documented.
- Secret Manager expectations are documented.
- Budget alert checklist is documented.
- Commands are clearly marked as placeholders until validated.

Dependencies:
MVP0-ISSUE-020, MVP0-ISSUE-023.

Validation:

- Review deployment documentation links.
- Confirm placeholders are clearly marked.
- Confirm no real GCP project IDs, secrets or credentials are committed.

---

## Issue 025 - Update local development and validation docs

Title:
Update local development and validation docs

Labels:
`mvp: 0`, `type: docs`, `type: operations`, `epic: docs`, `priority: high`, `status: blocked`

Milestone:
MVP 0 - Release Candidate

Description:
Update local development documentation after frontend and backend skeletons exist.

Scope:

- Document frontend install and run commands.
- Document backend install and run commands.
- Document test commands.
- Document required environment variables.
- Add common troubleshooting notes.

Out of scope:

- Creating missing frontend or backend implementation.
- Deployment automation.
- CI/CD setup.
- MVP 1 chatbot local setup.

Acceptance criteria:

- Frontend install and run commands are documented.
- Backend install and run commands are documented.
- Test commands are documented.
- Required local environment variables are documented.
- Common troubleshooting notes are included.

Dependencies:
MVP0-ISSUE-004, MVP0-ISSUE-013.

Validation:

- Follow local development docs from a clean checkout where possible.
- Confirm documented commands match actual project scripts.
- Confirm troubleshooting notes address known setup issues.

---

## Issue 026 - Add basic logging and personal data logging rules

Title:
Add basic logging and personal data logging rules

Labels:
`mvp: 0`, `type: backend`, `type: security`, `type: operations`, `epic: security`, `priority: medium`, `status: blocked`

Milestone:
MVP 0 - Contact Flow

Description:
Add backend logging for MVP 0 and document what must not be logged.

Scope:

- Log backend application startup.
- Log health/contact endpoint status safely.
- Log validation failures without unnecessary personal data.
- Document logging behavior.
- Ensure secrets, tokens and API keys are never logged.

Out of scope:

- Advanced observability dashboards.
- Full production alerting.
- Chat request logging.
- Analytics tracking.

Acceptance criteria:

- Backend logs application startup.
- Backend logs health/contact endpoint status at a safe level.
- Backend logs validation failures without exposing unnecessary personal data.
- Secrets, tokens and API keys are never logged.
- Logging behavior is documented.

Dependencies:
MVP0-ISSUE-014, MVP0-ISSUE-018.

Validation:

- Exercise health and contact endpoints locally.
- Review logs for unsafe personal data or secrets.
- Confirm logging documentation matches implementation.

---

## Issue 027 - Add MVP 0 final validation checklist

Title:
Add MVP 0 final validation checklist

Labels:
`mvp: 0`, `type: docs`, `type: testing`, `epic: docs`, `priority: medium`, `status: blocked`

Milestone:
MVP 0 - Release Candidate

Description:
Create a final checklist for reviewing MVP 0 before considering it release-ready.

Scope:

- Add checklist for landing page sections.
- Add checklist for contact form happy path and error path.
- Add checklist for backend health and contact endpoints.
- Add checklist for privacy, SEO, local docs and deployment prep.
- Include explicit check that MVP 1 or later functionality was not added.

Out of scope:

- Implementing missing MVP 0 features.
- Creating automated test infrastructure unless separately planned.
- Releasing to production.
- Adding future MVP implementation checks as current scope.

Acceptance criteria:

- Checklist covers landing page sections.
- Checklist covers contact form happy path and error path.
- Checklist covers backend health and contact endpoints.
- Checklist covers privacy, SEO, local docs and deployment prep.
- Checklist confirms no MVP 1 or later-MVP functionality was added.

Dependencies:
MVP0-ISSUE-012, MVP0-ISSUE-019, MVP0-ISSUE-024, MVP0-ISSUE-025.

Validation:

- Review checklist against MVP 0 requirements.
- Confirm all dependencies are represented.
- Confirm future MVP implementation remains excluded.
