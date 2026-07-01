import os
from dataclasses import dataclass
from functools import lru_cache


def _get_int_env(name: str, default: int) -> int:
    return int(os.getenv(name, default))


def _get_csv_env(name: str, default: tuple[str, ...]) -> tuple[str, ...]:
    value = os.getenv(name)
    if value is None:
        return default

    return tuple(item.strip() for item in value.split(",") if item.strip())


@dataclass(frozen=True)
class Settings:
    app_env: str = "local"
    app_name: str = "ai-services-platform"
    backend_port: int = 8000
    frontend_url: str = "http://localhost:4200"
    allowed_origins: tuple[str, ...] = ("http://localhost:4200",)
    lead_storage_mode: str = "log"
    log_level: str = "INFO"


@lru_cache
def get_settings() -> Settings:
    return Settings(
        app_env=os.getenv("APP_ENV", Settings.app_env),
        app_name=os.getenv("APP_NAME", Settings.app_name),
        backend_port=_get_int_env("BACKEND_PORT", Settings.backend_port),
        frontend_url=os.getenv("FRONTEND_URL", Settings.frontend_url),
        allowed_origins=_get_csv_env("ALLOWED_ORIGINS", Settings.allowed_origins),
        lead_storage_mode=os.getenv("LEAD_STORAGE_MODE", Settings.lead_storage_mode),
        log_level=os.getenv("LOG_LEVEL", Settings.log_level).upper(),
    )
