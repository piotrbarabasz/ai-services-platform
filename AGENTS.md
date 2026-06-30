# AGENTS.md

## Project

This repository contains the AI Services Platform project.

The goal of the project is to build a Google Cloud Platform based website and technical foundation for offering AI services, including:

- websites with personalized AI chatbots,
- lead handling automation,
- email automation,
- customer support chatbots,
- future 24/7 voice assistants.

The project is planned using MVP-based documentation stored in the `docs/` directory.

---

## Current Project Stage

The project is currently in the planning and early implementation phase.

The current focus is:

1. MVP 0 - Foundation & Landing Page
2. MVP 1 - AI Chatbot Demo

Do not implement later MVPs unless explicitly requested.

---

## Source of Truth

Use the documentation in `docs/` as the source of truth.

Important files:

```text
docs/00-overview.md
docs/requirements/00-requirements-index.md
docs/requirements/01-mvp-0-foundation-landing-page.md
docs/requirements/02-mvp-1-chatbot-demo.md
docs/backlog/00-epics.md
docs/backlog/01-mvp-0-implementation-backlog.md
docs/architecture/00-architecture-overview.md
docs/architecture/01-mvp-0-architecture.md
docs/operations/00-local-development.md
docs/operations/00-deployment.md
docs/risks/00-risk-register.md
```

Before making changes, inspect the relevant documentation files.

---

## Working Rules

When working on this repository:

- Start by reading the relevant files in `docs/`.
- Create a short implementation plan before editing files.
- Keep changes limited to the requested scope.
- Do not implement features from future MVPs unless requested.
- Prefer small, reviewable changes.
- Do not remove documentation unless it is clearly obsolete.
- Update documentation when implementation decisions change.
- Do not commit secrets or real credentials.
- Do not add unnecessary dependencies.
- Explain what was changed and why.

---

## Documentation Rules

Documentation should be written in Markdown.

Keep the existing documentation structure:

```text
docs/
  requirements/
  roadmap/
  architecture/
  backlog/
  decisions/
  risks/
  operations/
```

When adding new documentation:

- use descriptive file names,
- keep MVP scope clear,
- include acceptance criteria when relevant,
- update related index files if needed.

---

## Implementation Rules

The target architecture assumes:

- frontend application for the public website,
- backend API for health checks, contact form and future chatbot features,
- Google Cloud Platform as the main cloud provider,
- Cloud Run as the initial backend deployment target,
- Secret Manager for secrets,
- Cloud Logging and Cloud Monitoring for observability.

Do not hardcode secrets.

Do not expose API keys in frontend code.

---

## MVP 0 Scope

MVP 0 includes:

- project structure,
- landing page,
- contact form,
- backend API foundation,
- contact endpoint,
- lead capture foundation,
- privacy page,
- SEO basics,
- local development documentation,
- initial GCP deployment preparation.

MVP 0 does not include:

- chatbot widget,
- LLM integration,
- RAG,
- multi-client support,
- admin panel,
- voice assistant,
- payments,
- CRM integration.

---

## Expected Output Format

For planning tasks, provide:

1. Summary
2. Plan
3. Files to change
4. Implementation steps
5. Validation steps
6. Risks or open questions

For implementation tasks, provide:

1. Summary of changes
2. Files changed
3. How to run locally
4. How to test
5. Notes / follow-ups

---

## Validation

When code exists, run or propose appropriate validation commands.

Expected future checks may include:

```text
cd backend
pytest

cd frontend
npm test
npm run lint
```

If commands cannot be run, explain why.
