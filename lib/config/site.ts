import { env } from '@/lib/core/env'

const siteUrl = env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  : env.NEXT_PUBLIC_APP_URL

export const siteConfig = {
  name: 'NexTemplate',
  description:
    'Production-ready Next.js 16 starter — TypeScript strict, Tailwind v4, shadcn/ui, Biome, semantic-release, and CI/CD baked in. Clone, build, ship.',
  url: siteUrl,
} as const
