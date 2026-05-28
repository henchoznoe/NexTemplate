import { afterEach, describe, expect, it, vi } from 'vitest'
import { formatEnvErrors } from '@/lib/core/env'

describe('env validation errors', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it('should throw when NEXT_PUBLIC_APP_URL is invalid', async () => {
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'not-a-url')
    vi.resetModules()

    await expect(() => import('@/lib/core/env')).rejects.toThrow(
      'Invalid environment variables',
    )
  })

  it('should throw when BETTER_AUTH_SECRET is too short', async () => {
    vi.stubEnv('BETTER_AUTH_SECRET', 'short')
    vi.resetModules()

    await expect(() => import('@/lib/core/env')).rejects.toThrow(
      'Invalid environment variables',
    )
  })
})

describe('formatEnvErrors', () => {
  it('should format issues with path separators', () => {
    const result = formatEnvErrors([
      { path: ['a', 'b', 'c'], message: 'deep error' },
    ])
    expect(result).toBe('  - a.b.c: deep error')
  })
})
