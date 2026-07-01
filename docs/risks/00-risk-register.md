# Risk Register

## 1. Purpose

This document tracks project risks, their impact and mitigation strategies.

The risk register should be updated as the project grows.

AI-specific MVP 1 risks are tracked in the [AI risk register](01-ai-risk-register.md).

---

## 2. Risk Table

| ID | Risk | Area | Probability | Impact | Mitigation |
|---|---|---|---|---|---|
| RISK-001 | Project scope becomes too broad | Product | High | High | Use MVP-based planning and keep MVP 0/MVP 1 small |
| RISK-002 | LLM usage costs grow unexpectedly | Cost | Medium | High | Add message limits, rate limits and usage tracking |
| RISK-003 | Chatbot provides incorrect information | AI | Medium | Medium | Use clear prompts, guardrails and disclaimers |
| RISK-004 | Chatbot invents pricing | Business | Medium | High | Avoid hardcoded pricing unless explicitly configured |
| RISK-005 | Contact form receives spam | Security | Medium | Medium | Add CAPTCHA, rate limiting or spam filtering |
| RISK-006 | Secrets are accidentally committed | Security | Low | High | Use environment variables and Secret Manager |
| RISK-007 | GCP setup becomes too complex | Infrastructure | Medium | Medium | Start with minimal Cloud Run-based deployment |
| RISK-008 | Voice assistant is underestimated | Product | High | High | Keep voice assistant out of early MVPs |
| RISK-009 | RODO/privacy requirements are ignored | Compliance | Medium | High | Add privacy policy and minimize personal data storage |
| RISK-010 | Multi-client architecture added too early | Architecture | Medium | Medium | Start single-client and design extension points |

---

## 3. Current Highest Risks

The most important risks at the current stage are:

1. scope becoming too broad,
2. AI/LLM cost growth,
3. chatbot hallucinations,
4. GCP complexity,
5. privacy and personal data handling.

---

## 4. Risk Management Rules

The project should follow these rules:

- do not add new MVP scope without documenting it,
- keep voice assistant outside early implementation,
- add cost control before public chatbot launch,
- never expose API keys in frontend code,
- document architectural decisions as ADRs,
- keep requirements updated before creating backlog items.
