# ADR 0002: Use Google Cloud Platform as Cloud Platform

## Status

Accepted

## Context

The project requires a cloud platform for hosting a public website, backend APIs,
AI integrations, logs, monitoring, secrets and future automation workflows.

Possible options included:

- Google Cloud Platform,
- AWS,
- Azure,
- Vercel plus external services,
- self-hosted infrastructure.

The project should support AI workloads and future integrations with managed cloud services.

## Decision

Google Cloud Platform will be used as the main cloud platform for the project.

Initial services considered:

- Cloud Run for backend services,
- Artifact Registry for container images,
- Secret Manager for secrets,
- Cloud Logging for logs,
- Cloud Monitoring for observability,
- Cloud Scheduler for scheduled jobs,
- Cloud Storage for future files/documents,
- Firestore or Cloud SQL for data storage.

## Consequences

Positive consequences:

- strong support for containerized backend services,
- good integration with managed AI services,
- scalable serverless hosting options,
- centralized logging and monitoring,
- secure secret management.

Negative consequences:

- requires GCP setup and IAM configuration,
- may introduce cloud-specific complexity,
- costs must be monitored from the beginning,
- some design decisions may become GCP-specific.

## Notes

The initial MVP should use the smallest possible GCP setup and avoid unnecessary infrastructure complexity.
