import logging

from app.config import Settings


def _get_log_level(level_name: str) -> int:
    level = logging.getLevelName(level_name.upper())
    if not isinstance(level, int):
        raise ValueError(f"Unsupported LOG_LEVEL: {level_name}")

    return level


def configure_logging(settings: Settings) -> None:
    log_level = _get_log_level(settings.log_level)
    logging.basicConfig(
        level=log_level,
        format="%(asctime)s %(levelname)s %(name)s %(message)s",
    )
    logging.getLogger().setLevel(log_level)
