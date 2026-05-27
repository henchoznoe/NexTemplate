import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/site'

const manifest = (): MetadataRoute.Manifest => ({
  name: siteConfig.name,
  short_name: siteConfig.name,
  description: siteConfig.description,
  start_url: '/',
  display: 'standalone',
  background_color: '#09090b',
  theme_color: '#09090b',
  icons: [
    {
      src: '/assets/nextjs.svg',
      sizes: 'any',
      type: 'image/svg+xml',
    },
  ],
})

export default manifest
