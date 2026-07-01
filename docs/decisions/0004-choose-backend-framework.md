# ADR 0004: Choose Backend Framework

## Status

Accepted

## Context

MVP 0 needs a backend API foundation for health checks, contact form submission,
payload validation, basic logging and future deployment to Google Cloud Platform.

The backend should be minimal, testable and compatible with Cloud Run. It should also leave
a clear path for the future MVP 1 chatbot endpoint without adding chatbot functionality now.

## Decision

Use FastAPI with Python for the MVP 0 backend application.

FastAPI should expose the initial MVP 0 endpoints:

- `GET /health`,
- `POST /api/contact`.

This decision is enough for MVP 0 because FastAPI provides:

- clear API routing,
- request and response validation,
- simple local development with Uvicorn,
- straightforward automated testing,
- compatibility with containerized Cloud Run deployment,
- a clean service boundary for future endpoints.

## Options Considered

- FastAPI.
  - Pros: lightweight, typed request validation, strong testing support, good fit for API services.
  - Cons: requires explicit choices for project structure, configuration and deployment packaging.
- Flask.
  - Pros: simple and mature.
  - Cons: more manual validation and API structure decisions.
- Django.
  - Pros: batteries-included framework with ORM and admin support.
  - Cons: heavier than needed for MVP 0 health and contact endpoints.
- Node.js with Express or similar.
  - Pros: common web API stack and same language family as frontend.
  - Cons: project documentation already points toward Python/FastAPI, and Python is a better fit
    for later AI service integration.

## Consequences

Positive consequences:

- MVP 0 backend work can stay small and readable.
- Validation can be centralized in typed models.
- Tests can verify endpoint behavior early.
- The backend can be containerized for Cloud Run.
- MVP 1 can add `/api/chat` later without changing the framework.

Negative consequences:

- Python dependency management and virtual environments must be documented.
- The project must define its own structure for services, settings and logging.
- Async behavior should be used deliberately to avoid unnecessary complexity.

## Scope

This ADR applies to the MVP 0 backend API foundation.

Included:

- backend application entrypoint,
- health endpoint,
- contact endpoint,
- request validation,
- basic logging,
- settings/configuration module,
- endpoint tests.

Excluded:

- chatbot endpoint,
- LLM provider integration,
- RAG,
- database integration beyond the selected MVP 0 lead handling approach,
- authentication,
- admin panel,
- voice assistant.

## Follow-ups

- Keep backend implementation minimal and aligned with MVP 0 requirements.
- Add local test and run commands after backend setup.
- Decide backend deployment details separately before public deployment.
- Add MVP 1 chatbot endpoint only after MVP 1 requirements and ADRs are ready.
