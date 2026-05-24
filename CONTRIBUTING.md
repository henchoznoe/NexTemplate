# Contributing

## Development Setup

```bash
git clone https://github.com/henchoznoe/NexTemplate.git
cd NexTemplate
pnpm install
pnpm dev
```

## Code Quality

Before submitting changes, run the full validation:

```bash
pnpm check:com
```

This runs Biome (lint + format), knip (dead code), TypeScript type-check, and a production build.

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages are validated by commitlint.

Format: `type(scope): description`

Allowed types: `feat`, `fix`, `chore`, `ci`, `docs`, `refactor`, `test`, `perf`

Examples:

```text
feat: add user authentication
fix: resolve hydration mismatch in theme toggle
docs: update deployment instructions
```

## Pull Requests

1. Create a feature branch from `develop`
2. Make your changes
3. Ensure `pnpm check:com` passes
4. Open a PR targeting `develop`
5. PR title must follow Conventional Commits format

## Project Structure

See [AGENTS.md](AGENTS.md) for architecture details and file placement guidelines.
