<div align="center">

[![CI](https://github.com/henchoznoe/NexTemplate/actions/workflows/ci.yml/badge.svg)](https://github.com/henchoznoe/NexTemplate/actions/workflows/ci.yml)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/henchoznoe/NexTemplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Biome](https://img.shields.io/badge/Biome-2.4-39B420?style=flat&logo=biome)](https://biomejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

## NexTemplate

Production-ready Next.js 16 starter — clone, build, ship.

</div>

## Overview

Stop wasting hours on boilerplate. NexTemplate gives you TypeScript strict mode, Tailwind CSS v4, shadcn/ui, Biome, semantic-release, and GitHub Actions CI/CD — all wired together and battle-tested. Your next project starts here.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, RSC) |
| UI | React 19, Tailwind CSS v4, shadcn/ui (new-york) |
| Language | TypeScript 6 (strict mode) |
| Auth | Better Auth (GitHub OAuth) |
| Database | Prisma 7 + PostgreSQL |
| Testing | Vitest, @vitest/coverage-v8, React Testing Library |
| Theme | next-themes (light/dark/system) |
| Validation | Zod (env + runtime schemas) |
| Icons | Lucide React |
| Quality | Biome, knip, lefthook, commitlint |
| Release | Semantic Release, Conventional Commits |
| CI/CD | GitHub Actions |
| Analytics | Vercel Analytics |
| Hosting | Vercel (default), Docker/Kubernetes (alternative) |

## Project Structure

```text
NexTemplate/
├── app/                    # Next.js App Router pages and layouts
│   ├── api/auth/[...all]/  # Better Auth catch-all API route
│   ├── api/health/         # Health check endpoint (K8s probes)
│   ├── globals.css         # Tailwind v4 theme (light + dark)
│   ├── layout.tsx          # Root layout with providers
│   ├── manifest.ts         # PWA manifest
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Custom 404
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # Dark/light/system toggle
│   ├── footer.tsx          # Footer with version display
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── actions/            # Server Actions (mutations)
│   ├── config/site.ts      # Central site metadata
│   ├── core/auth.ts        # Better Auth server config
│   ├── core/auth-client.ts # Better Auth React client
│   ├── core/db.ts          # Prisma singleton
│   ├── core/env.ts         # Env validation (Zod)
│   ├── generated/prisma/   # Generated Prisma client (gitignored)
│   ├── hooks/              # Custom React hooks
│   ├── services/           # Read-side data access (cached)
│   ├── types/              # TypeScript interfaces
│   ├── utils/              # Helper functions (cn, version, commit hash)
│   └── validations/        # Zod schemas
├── prisma/
│   ├── schema.prisma       # Database schema (Better Auth models)
│   ├── seed.ts             # Database seed script
│   └── migrations/         # Prisma migrations
├── tests/                  # Vitest test files
├── k8s/                    # Kubernetes manifests (deployment, service, ingress)
├── proxy.ts                # Edge middleware
├── Dockerfile              # Multi-stage production build
├── docker-compose.yml      # PostgreSQL + app (Docker deployment)
├── public/
│   ├── assets/             # Images and static media
│   └── fonts/              # Custom font files
├── .github/
│   ├── workflows/          # CI, Release, Dependency Review, PR Title
│   └── dependabot.yml      # Automated dependency updates
└── [config files]          # TypeScript, Biome, Lefthook, Vitest, Prisma, etc.
```

## Quick Start

### Prerequisites

- Node.js 24+
- pnpm 11+

### Installation

```bash
git clone https://github.com/henchoznoe/NexTemplate.git
cd NexTemplate
pnpm install
cp .env.example .env
```

### Database Setup

Start a local PostgreSQL instance with Docker:

```bash
docker compose up db -d
```

Generate the Prisma client and apply the schema:

```bash
pnpm db:generate
pnpm db:push        # Apply schema to database
pnpm db:seed         # Optional: seed with sample data
```

### Authentication Setup

1. Create a GitHub OAuth app at [github.com/settings/developers](https://github.com/settings/developers)
2. Set the callback URL to `http://localhost:3000/api/auth/callback/github`
3. Copy the Client ID and Client Secret to your `.env` file
4. Generate a secret: `openssl rand -base64 32` and set `BETTER_AUTH_SECRET`

### Start Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Using This Template

When you create a new project from this template, follow these steps:

### 1. Rename the project

- Update `name`, `description`, `homepage`, and `repository` in `package.json`
- Update site metadata in `lib/config/site.ts`
- Update copyright in `components/footer.tsx`

### 2. Configure environment

- Copy `.env.example` to `.env` and fill in values
- Set up `DATABASE_URL`, `BETTER_AUTH_SECRET`, and GitHub OAuth credentials
- Add new env vars to `lib/core/env.ts` schema and `.env.example`

### 3. Configure hosting

**Vercel (default)** — no changes needed. Push to GitHub and import in Vercel.

**Docker/Kubernetes** — see [Deployment](#deployment) section below.

### 4. Set up CI/CD

- **Dependency review**: Enable the Dependency Graph (Settings > Code security and analysis > Dependency graph).
- **Secret scanning**: Works automatically on all repo types (public and private) — no configuration needed.
- Update `release.yml` if your main branch name differs

### 5. Clean up template content

- Replace the content in `app/page.tsx` with your own
- Remove example components you don't need
- Update or remove `CHANGELOG.md`
- Update this README for your project
- Replace the default PWA icon in `public/assets/` or remove `app/manifest.ts`

### 6. Optional integrations

| Need | Recommendation |
| --- | --- |
| Email | [React Email](https://react.email/) + [Resend](https://resend.com/) |
| Payments | [Stripe](https://stripe.com/) |
| Logging | [Pino](https://getpino.io/) or [Winston](https://github.com/winstonjs/winston) for structured logging |
| Error monitoring | [Sentry](https://sentry.io/) for error tracking and performance monitoring |

## Development Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Production build (includes Prisma generate) |
| `pnpm start` | Start production server |
| `pnpm check` | Biome lint + format (auto-fix) |
| `pnpm check:all` | Biome + knip (dead code) |
| `pnpm check:com` | Full validation: Biome + knip + Prisma generate + tsc + next build |
| `pnpm knip` | Dead code / unused dependency detection |
| `pnpm analyze` | Bundle size analysis (opens report) |
| `pnpm lint` | Biome lint only |
| `pnpm format` | Biome format only |
| `pnpm test` | Run tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:migrate` | Create and apply migration |
| `pnpm db:push` | Push schema to database (no migration) |
| `pnpm db:seed` | Run seed script |
| `pnpm db:studio` | Open Prisma Studio |

## Deployment

### Vercel (Default)

Push to GitHub and import in [Vercel](https://vercel.com). Zero configuration needed — the project is pre-configured for Vercel deployment.

### Docker

To deploy with Docker instead of Vercel:

**1. Build and run:**

> Standalone output is automatically enabled via the `DOCKER_BUILD=true` environment variable set in the Dockerfile — no code changes needed.

```bash
# Using docker-compose (recommended for local testing)
docker compose up --build

# Or manually
docker build -t nextemplate .
docker run -p 3000:3000 nextemplate
```

**2. Optional — Remove Vercel-specific code:**

- Remove `@vercel/analytics` from `package.json` and its usage in `app/layout.tsx`
- Remove `NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA` from `next.config.ts` (or replace with your own build-time variable)

### Kubernetes

After building your Docker image and pushing to a container registry:

**1. Update the image** in `k8s/deployment.yaml`:

```yaml
image: your-registry.io/nextemplate:latest
```

**2. Update the domain** in `k8s/ingress.yaml`:

```yaml
host: your-domain.com
```

**3. Apply manifests:**

```bash
kubectl apply -f k8s/
```

The K8s setup includes:

- **Deployment** — 2 replicas with resource limits, liveness/readiness probes on `/api/health`
- **Service** — ClusterIP exposing port 80
- **Ingress** — Nginx ingress controller routing

## Quality Workflow

### CI Pipeline Order

```text
gitleaks (secret scanning)
  ↓
prisma generate (generate client)
  ↓
tsc --noEmit (type-check)
  ↓
biome check . (lint + format)
  ↓
knip (dead code)
  ↓
next build (production build)
  ↓
pnpm audit --audit-level=high (security)
  ↓
vitest (tests + coverage) [parallel job]
```

### Additional Workflows

- **dependency-review.yml** — Blocks PRs introducing high-severity vulnerable dependencies
- **pr-title.yml** — Enforces Conventional Commits format on PR titles
- **release.yml** — Automated versioning and changelog via semantic-release

### Pre-commit Hook

Lefthook runs `biome check --write` on staged `*.{ts,tsx,css}` files. Commit messages are validated against Conventional Commits format via commitlint.

## License

This project is licensed under the [MIT License](LICENSE).
