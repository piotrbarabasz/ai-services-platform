# ADR 0006: Choose Secret Management Strategy

## Status

Accepted

## Context

MVP 0 requires a clear rule for handling sensitive values before frontend, backend and deployment
work moves forward.

Secrets must not be committed to the repository, embedded in frontend code or exposed to users.
The project has already selected Google Cloud Platform as the main cloud provider.

## Decision

Use Google Cloud Secret Manager for production secrets and untracked local environment files
for local development secrets.

Repository files may contain only placeholder names and safe example values.
Frontend code must not receive backend secrets, provider credentials or private configuration.

This decision is enough for MVP 0 because it supports:

- safe local development,
- Cloud Run-compatible production secret injection,
- a clear no-secrets-in-Git rule,
- future provider credentials without changing the basic strategy.

## Options Considered

- Google Cloud Secret Manager.
  - Pros: managed GCP service, integrates with Cloud Run and IAM, avoids storing secrets in code.
  - Cons: requires GCP setup and access management.
- Local `.env` files only.
  - Pros: simple for local development.
  - Cons: not sufficient for production secrets.
- GitHub repository secrets only.
  - Pros: useful for CI/CD later.
  - Cons: does not replace runtime secret management for Cloud Run.
- Hardcoded secrets.
  - Pros: none for this project.
  - Cons: unsafe and explicitly prohibited.

## Consequences

Positive consequences:

- Production secrets have a managed storage location.
- Secret access can be limited by service account.
- The repository can safely document variable names without real values.
- The strategy works for MVP 0 and later provider credentials.

Negative consequences:

- GCP IAM and Secret Manager setup are required before production deployment.
- Local developers must manage their own untracked secret files.
- Secret rotation and access review need operational discipline later.

## Scope

This ADR applies to secret handling for MVP 0.

Included:

- local untracked `.env` files for secrets,
- `.env.example` files for non-secret documentation,
- Google Cloud Secret Manager for production secrets,
- service-account-based access for deployed services.

Excluded:

- storing secrets in frontend code,
- committing real credentials,
- LLM API key selection,
- SMTP provider selection,
- GitHub Actions CI/CD secret design,
- per-client secret management.

## Follow-ups

- Keep `.env` files ignored by Git.
- Document required secret names before deployment.
- Configure Secret Manager only when deployment preparation begins.
- Add future LLM or email secrets only when those MVPs are explicitly in scope.
