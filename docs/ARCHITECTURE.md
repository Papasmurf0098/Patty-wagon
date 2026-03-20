# Architecture Notes

## Repository intent

Patty-wagon is currently a foundation repository. Its immediate purpose is to provide a sane structure for future application code rather than leave contributors guessing how to organize work.

## Design principles

- **Clarity first:** top-level files should explain the repo before code exists.
- **Low-friction onboarding:** a new contributor should understand where things belong in minutes.
- **Incremental growth:** add directories only when they serve a concrete purpose.
- **Documentation close to decisions:** keep major structural decisions written down.

## Suggested expansion path

As the project grows, consider adding these directories only when needed:

- `src/` for application code.
- `tests/` for automated tests.
- `scripts/` for local developer utilities.
- `config/` for checked-in configuration templates.
- `docs/adr/` for architecture decision records.

## Operating expectation

Every future addition should answer three questions:

1. Why does this belong in the repository?
2. Where is the right place for it?
3. How will the next contributor discover and use it?
