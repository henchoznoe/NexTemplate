import { describe, expect, it } from 'vitest'
import { AUTH_CONFIG } from '@/lib/config/time'

describe('AUTH_CONFIG', () => {
  it('should have SESSION_EXPIRES_IN set to 7 days in seconds', () => {
    expect(AUTH_CONFIG.SESSION_EXPIRES_IN).toBe(60 * 60 * 24 * 7)
  })

  it('should have SESSION_UPDATE_AGE set to 24 hours in seconds', () => {
    expect(AUTH_CONFIG.SESSION_UPDATE_AGE).toBe(60 * 60 * 24)
  })

  it('should have COOKIE_CACHE_MAX_AGE set to 5 minutes in seconds', () => {
    expect(AUTH_CONFIG.COOKIE_CACHE_MAX_AGE).toBe(60 * 5)
  })

  it('should have RATE_LIMIT_WINDOW set to 1 minute in seconds', () => {
    expect(AUTH_CONFIG.RATE_LIMIT_WINDOW).toBe(60)
  })

  it('should have RATE_LIMIT_MAX set to 30', () => {
    expect(AUTH_CONFIG.RATE_LIMIT_MAX).toBe(30)
  })
})
