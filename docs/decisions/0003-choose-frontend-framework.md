# ADR 0003: Choose Frontend Framework

## Status

Accepted

## Context

MVP 0 needs a practical frontend foundation for a public landing page, contact form,
privacy page, SEO basics and a future chatbot widget integration point.

The frontend should be simple enough for early MVP delivery, but structured enough to support
component reuse, routing, API calls and future MVP 1 chatbot UI work.

The current MVP 0 scope does not include chatbot implementation, LLM integration, RAG,
multi-client configuration, admin panel or voice assistant functionality.

## Decision

Use Vite with React and TypeScript for the MVP 0 frontend application.

The frontend should be implemented as a small public website with routed pages, reusable
components and a typed API client boundary for backend calls.

This decision is enough for MVP 0 because it supports:

- a fast local development server,
- a landing page and privacy page,
- a contact form UI,
- reusable components,
- TypeScript models for API payloads,
- future integration of a chatbot widget in MVP 1,
- static or simple hosted deployment options.

## Options Considered

- Vite with React and TypeScript.
  - Pros: lightweight, fast local development, broad ecosystem, good component model,
    straightforward static hosting.
  - Cons: routing, SEO metadata and application conventions need to be selected explicitly.
- Angular.
  - Pros: strong conventions, built-in routing and structure.
  - Cons: heavier setup for a small landing page and contact form.
- Next.js.
  - Pros: strong routing and SEO support, server-rendering options.
  - Cons: introduces framework complexity that is not required for the MVP 0 public site.
- Plain HTML, CSS and JavaScript.
  - Pros: very simple for a static landing page.
  - Cons: weaker structure for contact form behavior, typed API calls and future widget work.

## Consequences

Positive consequences:

- MVP 0 can start with a small frontend application.
- Component boundaries can support landing page sections and contact form reuse.
- TypeScript reduces accidental API contract drift.
- The future MVP 1 chatbot widget can be added without changing the frontend stack.
- The build output can be hosted by several simple frontend hosting options.

Negative consequences:

- The project must choose and maintain routing, testing and linting conventions.
- SEO behavior may need explicit metadata handling.
- The frontend hosting decision remains separate.

## Scope

This ADR applies to the MVP 0 public frontend application only.

Included:

- landing page UI,
- privacy page UI,
- contact form UI,
- frontend API client boundary,
- future chatbot widget integration point.

Excluded:

- chatbot widget implementation,
- `/api/chat`,
- LLM integration,
- RAG,
- multi-client support,
- admin panel,
- voice assistant,
- frontend hosting decision.

## Follow-ups

- Create the initial `frontend/` application using Vite, React and TypeScript.
- Add frontend local development commands to documentation after setup.
- Decide frontend hosting separately before public deployment.
- Add MVP 1 chatbot UI implementation only after MVP 0 foundations are ready.
