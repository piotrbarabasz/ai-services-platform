import logging

from fastapi import APIRouter, Request

router = APIRouter(tags=["health"])
logger = logging.getLogger(__name__)


@router.get("/health")
def health_check(request: Request) -> dict[str, str]:
    settings = request.app.state.settings
    logger.info("Health check returned ok")
    return {
        "status": "ok",
        "service": settings.app_name,
        "environment": settings.app_env,
    }
