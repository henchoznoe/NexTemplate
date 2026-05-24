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
      src: '/assets/icon-192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/assets/icon-512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
})

export default manifest
