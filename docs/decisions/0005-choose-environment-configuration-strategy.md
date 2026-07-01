# ADR 0005: Choose Environment Configuration Strategy

## Status

Accepted

## Context

MVP 0 needs consistent local, development and production configuration for the frontend,
backend and future deployment environments.

Configuration must not expose secrets to the frontend or commit sensitive values to the repository.
The project also needs clear example variables for local setup and deployment preparation.

## Decision

Use documented `.env.example` files plus runtime environment variables.

Each application should provide an example file that documents supported non-secret variable names:

- `backend/.env.example`,
- `frontend/.env.example`.

Real local `.env` files may be created by developers but must remain untracked.
Deployed environments should receive configuration through runtime environment variables
or managed platform configuration.

This decision is enough for MVP 0 because it supports:

- local backend and frontend setup,
- Cloud Run-compatible backend configuration,
- frontend API base URL configuration,
- clear separation between example values and real values,
- future Secret Manager integration for sensitive values.

## Options Considered

- `.env.example` files plus runtime environment variables.
  - Pros: simple, common, easy to review, works locally and in cloud deployment.
  - Cons: requires discipline to avoid committing real `.env` files.
- Hardcoded configuration.
  - Pros: simple at first.
  - Cons: unsafe, inflexible and not suitable for multiple environments.
- Centralized configuration service.
  - Pros: powerful for larger systems.
  - Cons: unnecessary complexity for MVP 0.
- Framework-specific configuration only.
  - Pros: convenient within one framework.
  - Cons: less consistent across frontend, backend and deployment docs.

## Consequences

Positive consequences:

- Required configuration is visible in versioned example files.
- Local and deployed environments can use the same variable names.
- Secrets can be kept out of source control.
- Deployment preparation can reference explicit variables.

Negative consequences:

- Developers must create real local `.env` files manually when needed.
- The project must keep `.env.example` files updated when variables change.
- Runtime configuration errors may not be caught until startup unless validation is added.

## Scope

This ADR applies to MVP 0 frontend, backend and deployment configuration.

Included:

- documented example environment files,
- runtime environment variables,
- local and deployed environment names,
- frontend API base URL configuration,
- backend application configuration.

Excluded:

- secret values,
- CI/CD variable strategy,
- LLM provider configuration,
- chatbot-specific settings,
- per-client configuration.

## Follow-ups

- Keep `.env` and `.env.*` ignored while allowing `.env.example`.
- Add or update example files when frontend and backend setup changes.
- Validate required backend variables during application startup.
- Document any deployment-specific variables before public deployment.
