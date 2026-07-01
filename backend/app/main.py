import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.contact import router as contact_router
from app.api.health import router as health_router
from app.config import get_settings
from app.logging_config import configure_logging

logger = logging.getLogger(__name__)


def configure_cors(app: FastAPI, allowed_origins: tuple[str, ...]) -> None:
    if not allowed_origins:
        return

    app.add_middleware(
        CORSMiddleware,
        allow_origins=list(allowed_origins),
        allow_credentials=False,
        allow_methods=["GET", "POST", "OPTIONS"],
        allow_headers=["*"],
    )


def create_app() -> FastAPI:
    settings = get_settings()
    configure_logging(settings)

    app = FastAPI(title=settings.app_name)
    app.state.settings = settings
    configure_cors(app, settings.allowed_origins)
    app.include_router(health_router)
    app.include_router(contact_router)

    logger.info("Backend application configured", extra={"app_env": settings.app_env})
    return app


app = create_app()
