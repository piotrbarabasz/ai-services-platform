import logging

from fastapi import FastAPI

from app.api.health import router as health_router
from app.config import get_settings
from app.logging_config import configure_logging

logger = logging.getLogger(__name__)


def create_app() -> FastAPI:
    settings = get_settings()
    configure_logging(settings)

    app = FastAPI(title=settings.app_name)
    app.state.settings = settings
    app.include_router(health_router)

    logger.info("Backend application configured", extra={"app_env": settings.app_env})
    return app


app = create_app()
