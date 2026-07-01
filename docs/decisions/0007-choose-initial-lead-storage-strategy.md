# ADR 0007: Choose Initial Lead Storage Strategy

## Status

Accepted

## Context

MVP 0 includes a contact form, backend contact endpoint and lead capture foundation.

The project needs a simple initial strategy before adding durable data infrastructure.
The strategy should allow the contact flow to be implemented and tested while avoiding premature
database, multi-client, CRM or email automation scope.

## Decision

Use a backend lead service boundary with configurable lead storage mode.

For the first MVP 0 implementation, start with `LEAD_STORAGE_MODE=log`.
This mode should validate contact payloads, create a lead representation and log only safe
operational metadata needed to verify the flow.

Durable lead storage is deferred. Firestore is the preferred first durable GCP option to evaluate
later because it is managed and simple for early lead records. Cloud SQL remains a future option
if relational querying or stronger transactional needs appear.

This decision is enough for MVP 0 because it supports:

- contact endpoint implementation,
- validation of lead payloads,
- a clear service boundary,
- safe early local and development testing,
- a path to Firestore or Cloud SQL without changing the contact API contract.

## Options Considered

- Configurable lead service with log mode first.
  - Pros: minimal infrastructure, easy to test, keeps storage replaceable.
  - Cons: log mode is not a durable lead management system.
- Firestore immediately.
  - Pros: managed GCP storage and good fit for simple lead documents.
  - Cons: adds cloud setup before the first contact flow is proven.
- Cloud SQL immediately.
  - Pros: relational model and strong querying.
  - Cons: more setup and operational overhead than MVP 0 needs.
- Email notification only.
  - Pros: simple operational handoff.
  - Cons: introduces email provider and deliverability decisions.
- Local file or SQLite storage.
  - Pros: easy local persistence.
  - Cons: not suitable for Cloud Run production behavior.

## Consequences

Positive consequences:

- MVP 0 can implement lead processing without choosing a database too early.
- Storage behavior can be changed behind the lead service boundary.
- The contact API contract can remain stable.
- Personal data logging can be minimized from the beginning.

Negative consequences:

- Log mode alone is not sufficient for long-term lead retention.
- Public production use may require enabling durable storage before relying on contact submissions.
- A future migration to Firestore or Cloud SQL still needs implementation and validation.

## Scope

This ADR applies to initial MVP 0 lead handling.

Included:

- contact payload validation,
- lead service boundary,
- `LEAD_STORAGE_MODE=log` for first implementation,
- safe operational logging,
- future path to Firestore or Cloud SQL.

Excluded:

- CRM integration,
- email automation,
- automatic follow-up emails,
- multi-client lead ownership,
- admin panel lead management,
- analytics dashboards.

## Follow-ups

- Implement the lead service so storage can be replaced without changing the contact endpoint.
- Avoid logging full personal data by default.
- Revisit durable lead storage before relying on public production contact submissions.
- Evaluate Firestore first when persistent lead storage becomes necessary.
