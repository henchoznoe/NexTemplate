import { describe, expect, it } from 'vitest'
import { env, formatEnvErrors, isDev, isProd } from '@/lib/core/env'

describe('env', () => {
  it('should parse NODE_ENV', () => {
    expect(env.NODE_ENV).toBe('test')
  })

  it('should parse NEXT_PUBLIC_APP_URL', () => {
    expect(env.NEXT_PUBLIC_APP_URL).toBe('http://localhost:3000')
  })

  it('should parse DATABASE_URL', () => {
    expect(env.DATABASE_URL).toBeDefined()
    expect(typeof env.DATABASE_URL).toBe('string')
  })

  it('should parse BETTER_AUTH_SECRET', () => {
    expect(env.BETTER_AUTH_SECRET).toBeDefined()
    expect(env.BETTER_AUTH_SECRET.length).toBeGreaterThanOrEqual(32)
  })

  it('should parse BETTER_AUTH_URL', () => {
    expect(env.BETTER_AUTH_URL).toBe('http://localhost:3000')
  })

  it('should parse GITHUB_CLIENT_ID', () => {
    expect(env.GITHUB_CLIENT_ID).toBeDefined()
  })

  it('should parse GITHUB_CLIENT_SECRET', () => {
    expect(env.GITHUB_CLIENT_SECRET).toBeDefined()
  })

  it('should have optional VERCEL_ENV as undefined in test', () => {
    expect(env.VERCEL_ENV).toBeUndefined()
  })
})

describe('isProd', () => {
  it('should be false in test environment', () => {
    expect(isProd).toBe(false)
  })
})

describe('isDev', () => {
  it('should be false in test environment', () => {
    expect(isDev).toBe(false)
  })
})

describe('formatEnvErrors', () => {
  it('should format a single issue', () => {
    const result = formatEnvErrors([
      { path: ['DATABASE_URL'], message: 'Required' },
    ])
    expect(result).toBe('  - DATABASE_URL: Required')
  })

  it('should format multiple issues', () => {
    const result = formatEnvErrors([
      { path: ['DATABASE_URL'], message: 'Required' },
      {
        path: ['BETTER_AUTH_SECRET'],
        message: 'String must be at least 32 characters',
      },
    ])
    expect(result).toContain('DATABASE_URL: Required')
    expect(result).toContain(
      'BETTER_AUTH_SECRET: String must be at least 32 characters',
    )
  })

  it('should handle nested paths', () => {
    const result = formatEnvErrors([
      { path: ['nested', 'field'], message: 'Invalid' },
    ])
    expect(result).toBe('  - nested.field: Invalid')
  })

  it('should return empty string for empty array', () => {
    const result = formatEnvErrors([])
    expect(result).toBe('')
  })
})
