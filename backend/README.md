# Backend

FastAPI backend foundation for MVP 0.

## Local Run

```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The API should be available at:

```text
http://localhost:8000
```

Health check:

```text
GET /health
```

Expected response:

```json
{
  "status": "ok",
  "service": "ai-services-platform",
  "environment": "local"
}
```

## Tests

```powershell
cd backend
pytest
```

## Configuration

Use local environment variables for configuration.
The `.env.example` file documents supported variable names.
Do not commit real `.env` files or secrets.
