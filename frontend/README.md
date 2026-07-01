# Frontend

MVP 0 frontend foundation for the AI Services Platform public website.

Current scope:

- landing page skeleton at `/`,
- privacy page with MVP placeholder privacy sections at `/privacy`,
- active contact form submission to the MVP 0 backend `/api/contact` endpoint,
- future chatbot demo placeholder only,
- typed API boundary for backend calls.

Out of scope for this frontend foundation:

- chatbot widget,
- tracking or analytics,
- secrets or production deployment configuration.

Current behavior:

- the contact form validates required fields, email format and consent,
- valid submissions are sent to `POST /api/contact` using `VITE_API_BASE_URL`,
- loading, success and error states are visible to the user,
- basic title, meta description and social metadata placeholders are configured,
- final landing content, final legally reviewed privacy copy, production URL metadata and production deployment are still pending.

## Run Locally

```cmd
cd frontend
npm install
npm run dev
```

The local Vite server runs at:

```text
http://localhost:4200
```

The contact form submits to the backend URL configured with `VITE_API_BASE_URL`.
For local end-to-end testing, start the backend at `http://localhost:8000`.

## Build

```cmd
cd frontend
npm run build
```

## Validation

Run the TypeScript check without building assets:

```cmd
cd frontend
npm run typecheck
```

Run the full frontend validation and production build:

```cmd
cd frontend
npm run build
```

No frontend test runner or lint script is configured yet. Add those only when the frontend
implementation grows enough to justify the extra tooling.

## Environment

Copy `.env.example` to `.env` for local overrides if needed. Do not commit real `.env` files.

Default local backend URL:

```text
VITE_API_BASE_URL=http://localhost:8000
```

`VITE_` variables are bundled into frontend code, so they must not contain secrets.
