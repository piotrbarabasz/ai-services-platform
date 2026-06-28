# ADR 0001: Use GitHub as Documentation Source

## Status

Accepted

## Context

The project requires structured technical documentation, MVP requirements, architecture notes, backlog planning and decision tracking.

The documentation should be versioned and should stay close to the source code.

Alternative options included:

- Notion,
- Google Docs,
- local documents,
- GitHub Markdown files.

## Decision

GitHub Markdown files inside the `docs/` directory will be used as the main source of truth for technical documentation.

The documentation will be organized into:

- requirements,
- roadmap,
- architecture,
- backlog,
- decisions,
- risks,
- operations.

## Consequences

Positive consequences:

- documentation is versioned,
- changes can be reviewed through pull requests,
- documentation stays close to code,
- backlog can be derived from requirements,
- decisions are easier to track over time.

Negative consequences:

- GitHub Markdown is less visual than Notion,
- non-technical users may find it less comfortable,
- manual formatting discipline is required.

## Notes

Notion can still be used later as a high-level product dashboard, but GitHub remains the technical source of truth.