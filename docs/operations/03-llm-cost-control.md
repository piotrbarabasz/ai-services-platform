# LLM Cost Control

## 1. Purpose

This document defines cost-control principles and operational expectations for the MVP 1 chatbot demo.

It supports:

- [MVP 1 requirements](../requirements/02-mvp-1-chatbot-demo.md)
- [MVP 1 chatbot architecture](../architecture/02-mvp-1-chatbot-architecture.md)
- [AI risk register](../risks/01-ai-risk-register.md)

---

## 2. Scope

This document covers MVP 1 chatbot demo cost controls for:

- model configuration,
- message limits,
- session limits,
- rate limiting,
- usage logging,
- cost alerts,
- operational review.

This document does not define:

- RAG costs,
- embedding costs,
- client-specific billing,
- multi-client quotas,
- admin cost dashboards,
- voice assistant costs.

---

## 3. Cost-Control Principles

MVP 1 should follow these principles:

- Keep the first chatbot demo bounded and predictable.
- Reject invalid or oversized requests before calling the LLM provider.
- Keep model configuration server-side and environment-driven.
- Start with conservative message, session and rate limits.
- Log enough metadata to investigate usage and failures.
- Avoid storing unnecessary message content in logs.
- Review costs before increasing limits or switching models.
- Treat real provider credentials as secrets.

---

## 4. Model Configuration

Model settings should be backend configuration, not frontend configuration.

Expected configuration values may include:

| Setting | Purpose | Secret |
|---|---|---|
| `LLM_PROVIDER` | Selects the configured provider. | No |
| `LLM_MODEL` | Selects the model used by MVP 1. | No |
| `LLM_API_KEY` | Authenticates with the provider. | Yes |
| `LLM_REQUEST_TIMEOUT_SECONDS` | Limits how long provider calls can run. | No |
| `LLM_MAX_INPUT_CHARS` | Limits user message size. | No |
| `LLM_MAX_MESSAGES_PER_SESSION` | Limits session context growth. | No |
| `LLM_RATE_LIMIT_PER_IP_PER_MINUTE` | Limits request volume from one source. | No |

Real secret values must be stored in backend environment configuration or cloud secret storage. They must not be committed to the repository or exposed to frontend code.

---

## 5. Token and Message Limits

MVP 1 should define conservative limits before provider calls are enabled.

| Limit | Reason | Expected Behavior |
|---|---|---|
| Maximum user message length | Prevents very large prompts and prompt stuffing. | Reject oversized messages before provider calls. |
| Maximum messages per session | Prevents unbounded context growth. | Trim or stop accepting additional context. |
| Maximum provider response size | Prevents unexpectedly long responses. | Configure provider response limits when supported. |
| Request timeout | Prevents long-running provider calls. | Return a safe temporary failure message. |

The exact limit values should be chosen during implementation and documented before deployment.

---

## 6. Session Limits

MVP 1 session handling should:

- keep only the recent context needed for a useful answer,
- trim older messages when the context limit is reached,
- avoid persistent cross-session user profiles,
- avoid storing full chat history unless a separate privacy and retention decision is made,
- avoid client-specific context because multi-client support is outside MVP 1.

---

## 7. Rate Limiting

MVP 1 should include or prepare rate limiting for `/api/chat`.

Rate limiting should:

- apply before calling the LLM provider,
- protect against repeated automated requests,
- return a friendly limit message,
- log rate-limit events as operational metadata,
- be configurable without frontend changes.

Rate limiting may start with a simple per-source rule. More advanced per-user or per-client limits are future work.

---

## 8. Logging

Cost-related logging should capture:

- timestamp,
- endpoint,
- response status,
- latency,
- model identifier,
- validation failures,
- rate-limit events,
- provider error category,
- token or usage metadata when the provider returns it.

Logs should not include:

- API keys,
- provider credentials,
- system prompts,
- unnecessary personal data,
- full message content by default.

---

## 9. Alerts

MVP 1 should have documented alert expectations before production use.

Recommended alerts include:

- cloud billing budget threshold alerts,
- unusual `/api/chat` request volume,
- repeated provider failures,
- repeated rate-limit events,
- high latency or timeout spikes,
- missing or invalid provider configuration.

Alert channels and exact thresholds can be finalized during deployment planning.

---

## 10. Operational Review

Before raising limits or changing models, review:

- recent request volume,
- provider usage data,
- error and timeout rate,
- rate-limit frequency,
- cloud billing data,
- user-facing chatbot quality.

Limit increases should be treated as an operational decision, not an automatic code change.

---

## 11. Future Per-Client Limits

Future MVPs may add per-client limits, quotas or billing rules.

Those future controls may include:

- client-level monthly budgets,
- client-specific model selection,
- client-level request quotas,
- admin-visible usage reports,
- client-specific rate limits.

These are outside MVP 1 and should not be implemented as part of the chatbot demo.

---

## 12. Acceptance Criteria

LLM cost control is sufficient for MVP 1 when:

- provider credentials are never exposed to frontend code,
- oversized messages are rejected before provider calls,
- session context is bounded,
- timeout behavior is defined,
- rate limiting is implemented or explicitly prepared before deployment,
- usage metadata is logged when available,
- billing or usage alerts are documented,
- future per-client cost controls remain outside MVP 1.

