# Frontend

MVP 0 frontend skeleton for the AI Services Platform public website.

Current scope:

- landing page skeleton at `/`,
- privacy page placeholder at `/privacy`,
- contact section placeholder,
- future chatbot demo placeholder,
- typed API boundary without backend calls.

Out of scope for this skeleton:

- contact form submission,
- chatbot widget,
- tracking or analytics,
- secrets or production deployment configuration.

## Run Locally

```cmd
npm install
npm run dev
```

The local Vite server runs at:

```text
http://localhost:4200
```

## Build

```cmd
npm run build
```

## Environment

Copy `.env.example` to `.env` for local overrides if needed. Do not commit real `.env` files.
