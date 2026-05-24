# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Copilot, Cursor, etc.) when working with this repository.

## Fast Start

- Single Next.js 16 App Router application. TypeScript strict mode.
- Boundaries:
  - `app/` — Routes and page orchestration
  - `components/` — UI components (`ui/` for shadcn primitives)
  - `lib/actions/` — Server Actions (mutations)
  - `lib/config/` — Constants and configuration
  - `lib/core/` — Infrastructure (auth, db clients, env, logger)
  - `lib/hooks/` — Custom React hooks
  - `lib/services/` — Read-side data access (cached)
  - `lib/types/` — TypeScript interfaces
  - `lib/utils/` — Helper functions
  - `lib/validations/` — Zod schemas
  - `proxy.ts` — Edge middleware
- No database, no auth, no API routes by default. Extend as needed.

## Commands

```bash
pnpm dev              # Start dev server
pnpm check:com        # Full validation: biome + knip + tsc --noEmit + next build
pnpm check            # Biome lint + format (auto-fix)
pnpm check:all        # Biome + knip (no build)
pnpm knip             # Dead code / unused dependency detection
```

`pnpm check:com` is the source of truth — always run before considering work done.

## Architecture

- `app/` — Routes and page orchestration
- `components/` — UI components (`ui/` for shadcn primitives)
- `lib/actions/` — Server Actions for mutations
- `lib/config/` — Constants and named configuration
- `lib/core/` — Infrastructure singletons (auth, db, env, logger)
- `lib/hooks/` — Custom React hooks
- `lib/services/` — Read-side cached data access
- `lib/types/` — TypeScript interfaces and type definitions
- `lib/utils/` — Helper functions
- `lib/validations/` — Zod schemas for runtime validation
- `proxy.ts` — Edge middleware (route protection)

**Styling**: Tailwind v4 via PostCSS (no tailwind.config file). Theme defined in `app/globals.css` with `@theme inline` and CSS custom properties. Supports light + dark mode. Font: Inter (`--font-inter`) via `next/font/google`, mapped in `@theme inline`.

**shadcn/ui**: Configured in `components.json` (new-york style, zinc base). Utils alias points to `@/lib/utils/cn`. Add components with `npx shadcn@latest add`.

## Code Style (enforced by Biome)

- Single quotes, no semicolons, trailing commas
- Arrow parens only when needed: `x => x` not `(x) => x`
- Node imports require `node:` protocol (`node:os` not `os`)
- `any` is forbidden (`noExplicitAny: error`)
- Imports auto-organized on save/check
- 2-space indent, UTF-8, LF line endings (see .editorconfig)

## Key Patterns

- `cn()` from `@/lib/utils/cn` for all Tailwind class merging (clsx + tailwind-merge)
- Vercel env vars exposed to client via `next.config.ts` `env` block (e.g., `NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA`)
- Path alias: `@/*` maps to project root

## Verification

- CI order: `tsc --noEmit` → `biome check .` → `knip` → `pnpm audit --audit-level=high`
- `release.yml` reuses `ci.yml` via `workflow_call`. Node version pinned in `.node-version`.
- Additional workflows: `dependency-review.yml` (blocks vulnerable deps in PRs), `pr-title.yml` (enforces Conventional Commits).
- Pre-commit runs `biome check --write` on staged `*.{ts,tsx,css}` via lefthook.
- Commit messages validated via commitlint (Conventional Commits format required).

## Release

Semantic-release on `main` branch via GitHub Actions. Conventional Commits required for PR titles (feat, fix, chore, ci, docs, refactor, test, perf). Version bumped in `package.json`, changelog generated automatically.

## Adding Features

- Add shadcn components: `npx shadcn@latest add <component>`
- Server Actions (mutations) go in `lib/actions/`
- Read-side data access go in `lib/services/`
- Zod schemas go in `lib/validations/`
- TypeScript types go in `lib/types/`
- Constants go in `lib/config/`
- Infrastructure (auth, db, env) go in `lib/core/`
- Custom hooks go in `lib/hooks/`
- Utilities go in `lib/utils/`
- Static assets go in `public/assets/`
- Custom fonts go in `public/fonts/`
