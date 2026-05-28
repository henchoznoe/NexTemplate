import { describe, expect, it } from 'vitest'
import { SITE_URL, siteConfig } from '@/lib/config/site'

describe('SITE_URL', () => {
  it('should fallback to NEXT_PUBLIC_APP_URL when VERCEL_PROJECT_PRODUCTION_URL is not set', () => {
    expect(SITE_URL).toBe('http://localhost:3000')
  })
})

describe('siteConfig', () => {
  it('should have a name', () => {
    expect(siteConfig.name).toBe('NexTemplate')
  })

  it('should have a description', () => {
    expect(siteConfig.description).toBeTruthy()
    expect(typeof siteConfig.description).toBe('string')
  })

  it('should have a url matching SITE_URL', () => {
    expect(siteConfig.url).toBe(SITE_URL)
  })
})
