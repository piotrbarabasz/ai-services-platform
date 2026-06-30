import os
from dataclasses import dataclass
from functools import lru_cache


@dataclass(frozen=True)
class Settings:
    app_env: str = "local"
    app_name: str = "ai-services-platform"
    backend_port: int = 8000
    log_level: str = "INFO"


@lru_cache
def get_settings() -> Settings:
    return Settings(
        app_env=os.getenv("APP_ENV", Settings.app_env),
        app_name=os.getenv("APP_NAME", Settings.app_name),
        backend_port=int(os.getenv("BACKEND_PORT", Settings.backend_port)),
        log_level=os.getenv("LOG_LEVEL", Settings.log_level).upper(),
    )
