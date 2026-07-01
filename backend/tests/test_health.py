from fastapi.testclient import TestClient

from app.config import get_settings
from app.main import create_app


def test_health_returns_ok_status() -> None:
    get_settings.cache_clear()
    app = create_app()
    client = TestClient(app)

    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "service": "ai-services-platform",
        "environment": "local",
    }


def test_health_uses_runtime_settings(monkeypatch) -> None:
    monkeypatch.setenv("APP_NAME", "custom-service")
    monkeypatch.setenv("APP_ENV", "test")
    get_settings.cache_clear()
    app = create_app()
    client = TestClient(app)

    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "service": "custom-service",
        "environment": "test",
    }


def test_health_allows_configured_cors_origin(monkeypatch) -> None:
    monkeypatch.setenv("ALLOWED_ORIGINS", "http://localhost:4200")
    get_settings.cache_clear()
    app = create_app()
    client = TestClient(app)

    response = client.options(
        "/health",
        headers={
            "Origin": "http://localhost:4200",
            "Access-Control-Request-Method": "GET",
        },
    )

    assert response.status_code == 200
    assert response.headers["access-control-allow-origin"] == "http://localhost:4200"
