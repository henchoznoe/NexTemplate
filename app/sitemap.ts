import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/site'

const sitemap = (): MetadataRoute.Sitemap => {
  return [{ url: siteConfig.url, changeFrequency: 'weekly', priority: 1 }]
}

export default sitemap
