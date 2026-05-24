<div align="center">

[![CI](https://github.com/henchoznoe/template-next-app/actions/workflows/ci.yml/badge.svg)](https://github.com/henchoznoe/template-next-app/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Biome](https://img.shields.io/badge/Biome-2.4-39B420?style=flat&logo=biome)](https://biomejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

## Template Next App

Opinionated Next.js starter with production-grade tooling.

</div>

## Overview

A batteries-included Next.js 16 template featuring TypeScript strict mode, Tailwind CSS v4, shadcn/ui, Biome, semantic-release, and GitHub Actions CI/CD — ready for rapid development.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, RSC) |
| UI | React 19, Tailwind CSS v4, shadcn/ui (new-york) |
| Language | TypeScript 6 (strict mode) |
| Icons | Lucide React |
| Quality | Biome, knip, lefthook, commitlint |
| Release | Semantic Release, Conventional Commits |
| CI/CD | GitHub Actions |
| Analytics | Vercel Analytics |
| Hosting | Vercel |

## Project Structure

```
template-next-app/
├── app/                    # Next.js App Router pages and layouts
│   ├── globals.css         # Tailwind v4 theme (light + dark)
│   ├── layout.tsx          # Root layout with font and analytics
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Custom 404
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── footer.tsx          # Footer with version display
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Utility functions (cn, version, commit hash)
├── public/                 # Static assets
├── .github/
│   ├── workflows/          # CI, Release, Dependency Review, PR Title
│   └── dependabot.yml      # Automated dependency updates
└── [config files]          # TypeScript, Biome, Lefthook, etc.
```

## Quick Start

### Prerequisites

- Node.js 24+
- pnpm 11+

### Installation

```bash
git clone https://github.com/henchoznoe/template-next-app.git
cd template-next-app
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm check` | Biome lint + format (auto-fix) |
| `pnpm check:all` | Biome + knip (dead code) |
| `pnpm check:com` | Full validation: Biome + knip + tsc + next build |
| `pnpm knip` | Dead code / unused dependency detection |
| `pnpm lint` | Biome lint only |
| `pnpm format` | Biome format only |

## Quality Workflow

### CI Pipeline Order

```
gitleaks (secret scanning)
  ↓
tsc --noEmit (type-check)
  ↓
biome check . (lint + format)
  ↓
knip (dead code)
  ↓
pnpm audit --audit-level=high (security)
```

### Additional Workflows

- **dependency-review.yml** — Blocks PRs introducing high-severity vulnerable dependencies
- **pr-title.yml** — Enforces Conventional Commits format on PR titles
- **release.yml** — Automated versioning and changelog via semantic-release

### Pre-commit Hook

Lefthook runs `biome check --write` on staged `*.{ts,tsx,css}` files. Commit messages are validated against Conventional Commits format via commitlint.

## Customization

### Rename the project

1. Update `name`, `homepage`, and `repository` in `package.json`
2. Update metadata in `app/layout.tsx`
3. Update copyright in `components/footer.tsx`

### Add shadcn/ui components

```bash
npx shadcn@latest add [component-name]
```

Components are added to `components/ui/`.

### Add authentication

Consider [Better Auth](https://www.better-auth.com/) or [NextAuth.js](https://next-auth.js.org/).

### Add a database

Consider [Prisma](https://www.prisma.io/) with PostgreSQL. Add a `prisma/` directory and update CI to include `prisma generate`.

### Add testing

Consider [Vitest](https://vitest.dev/) with `@vitest/coverage-v8`. Add `pnpm test` and `pnpm test:coverage` scripts.

## License

This project is licensed under the [MIT License](LICENSE).
