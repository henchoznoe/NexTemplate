import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/site'
import { isProd } from '@/lib/core/env'

const robots = (): MetadataRoute.Robots => {
  if (!isProd) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

export default robots
