import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/site'
import { env } from '@/lib/core/env'

const robots = (): MetadataRoute.Robots => {
  const isProduction = env.VERCEL_ENV === 'production'

  if (!isProduction) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

export default robots
