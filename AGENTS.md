# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Copilot, Cursor, etc.) when working with this repository.

## Fast Start

- Single Next.js 16 App Router application. TypeScript strict mode.
- Boundaries:
  - `app/` — Routes and page orchestration
  - `components/` — UI components (`ui/` for shadcn primitives)
  - `lib/actions/` — Server Actions (mutations)
  - `lib/config/` — Constants and configuration (`site.ts` = central metadata)
  - `lib/core/` — Infrastructure (auth, db clients, env validation, logger)
  - `lib/hooks/` — Custom React hooks
  - `lib/services/` — Read-side data access (cached)
  - `lib/types/` — TypeScript interfaces
  - `lib/utils/` — Helper functions
  - `lib/validations/` — Zod schemas
  - `proxy.ts` — Edge middleware
- **Auth**: Better Auth with GitHub OAuth (`lib/core/auth.ts`, `lib/core/auth-client.ts`)
- **Database**: Prisma 7 + PostgreSQL (`lib/core/db.ts`, `prisma/schema.prisma`)
- **Testing**: Vitest + React Testing Library (`tests/`)

## Commands

```bash
pnpm dev              # Start dev server
pnpm check:com        # Full validation: biome + knip + prisma generate + tsc --noEmit + next build
pnpm check            # Biome lint + format (auto-fix)
pnpm check:all        # Biome + knip (no build)
pnpm knip             # Dead code / unused dependency detection
pnpm analyze          # Bundle analysis (opens report in browser)
pnpm test             # Run tests
pnpm test:coverage    # Run tests with coverage
pnpm db:generate      # Generate Prisma client
pnpm db:migrate       # Create and apply migration
pnpm db:push          # Push schema to database
pnpm db:seed          # Run seed script
pnpm db:studio        # Open Prisma Studio
```

`pnpm check:com` is the source of truth — always run before considering work done.

## Architecture

- `app/` — Routes and page orchestration
- `app/api/auth/[...all]/` — Better Auth catch-all API route
- `app/api/health/` — Health check endpoint (used by K8s probes)
- `components/` — UI components (`ui/` for shadcn primitives)
- `lib/actions/` — Server Actions for mutations
- `lib/config/` — Constants and named configuration
- `lib/config/site.ts` — Central site metadata (name, description, URL)
- `lib/core/` — Infrastructure singletons (auth, db, env, logger)
- `lib/core/auth.ts` — Better Auth server config (GitHub OAuth, Prisma adapter)
- `lib/core/auth-client.ts` — Better Auth React client hooks
- `lib/core/db.ts` — Prisma client singleton (hot-reload safe)
- `lib/core/env.ts` — Environment variable validation (Zod)
- `lib/generated/prisma/` — Generated Prisma client (gitignored)
- `prisma/schema.prisma` — Database schema (Better Auth models)
- `tests/` — Vitest test files
- `lib/hooks/` — Custom React hooks
- `lib/services/` — Read-side cached data access
- `lib/types/` — TypeScript interfaces and type definitions
- `lib/utils/` — Helper functions
- `lib/validations/` — Zod schemas for runtime validation
- `proxy.ts` — Edge middleware (route protection)

**Styling**: Tailwind v4 via PostCSS (no tailwind.config file). Theme defined in `app/globals.css` with `@theme inline` and CSS custom properties. Supports light + dark mode via `next-themes`. Font: Inter (`--font-inter`) via `next/font/google`, mapped in `@theme inline`.

**shadcn/ui**: Configured in `components.json` (new-york style, zinc base). Utils alias points to `@/lib/utils/cn`. Add components with `npx shadcn@latest add`.

**Theme**: `next-themes` with class strategy. ThemeProvider in `components/theme-provider.tsx`, toggle in `components/theme-toggle.tsx`. Supports light/dark/system.

## Code Style (enforced by Biome)

- Single quotes, no semicolons, trailing commas
- Arrow parens only when needed: `x => x` not `(x) => x`
- Node imports require `node:` protocol (`node:os` not `os`)
- `any` is forbidden (`noExplicitAny: error`)
- Imports auto-organized on save/check
- 2-space indent, UTF-8, LF line endings (see .editorconfig)
- **Always use arrow functions** for components, pages, layouts, and all modules:
  - Regular components: `export const MyComponent = () => { ... }`
  - Next.js modules (pages, layouts, route handlers, etc.): arrow function assigned to a `const`, then `export default` on a separate line below:

    ```tsx
    const Page = () => { ... }
    export default Page
    ```

## Key Patterns

- `cn()` from `@/lib/utils/cn` for all Tailwind class merging (clsx + tailwind-merge)
- `siteConfig` from `@/lib/config/site` for site name, description, URL
- `env` from `@/lib/core/env` for validated environment variables
- Vercel env vars exposed to client via `next.config.ts` `env` block (e.g., `NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA`)
- Path alias: `@/*` maps to project root
- Component props: declare an explicit `interface [Component]Props` for every component that accepts props. Wrap with `Readonly<>` at the function signature:

  ```tsx
  interface MyComponentProps {
    title: string
  }
  const MyComponent = ({ title }: Readonly<MyComponentProps>) => { ... }
  ```

## Verification

- CI order: `prisma generate` → `tsc --noEmit` → `biome check .` → `knip` → `next build` → `pnpm audit --audit-level=high` + `vitest` (parallel job)
- `release.yml` reuses `ci.yml` via `workflow_call`. Node version pinned in `.node-version`.
- Additional workflows: `dependency-review.yml` (blocks vulnerable deps in PRs), `pr-title.yml` (enforces Conventional Commits).
- Pre-commit runs `biome check --write` on staged `*.{ts,tsx,css}` via lefthook.
- Commit messages validated via commitlint (Conventional Commits format required).

## Release

Semantic-release on `main` branch via GitHub Actions. Conventional Commits required for PR titles (feat, fix, chore, ci, docs, refactor, test, perf). Version bumped in `package.json`, changelog generated automatically.

## Deployment

- **Vercel (default)**: Zero config. Push to GitHub, import in Vercel.
- **Docker**: `docker compose up --build`. Standalone output is auto-enabled via `DOCKER_BUILD=true` in the Dockerfile. Multi-stage build produces minimal Alpine image (~150MB). PostgreSQL included in `docker-compose.yml`.
- **Local DB**: `docker compose up db -d` starts PostgreSQL only for development.
- **Kubernetes**: Manifests in `k8s/` — deployment (2 replicas, probes on `/api/health`), service (ClusterIP), ingress (nginx). Update image and domain before applying.
- When switching to Docker/K8s, optionally remove `@vercel/analytics` and Vercel-specific env vars.

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
- New env vars: add to `lib/core/env.ts` schema and `.env.example`
