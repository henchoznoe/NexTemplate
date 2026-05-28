import { describe, expect, it } from 'vitest'
import { getAppAuthor, getAppVersion } from '@/lib/utils/app'

describe('getAppVersion', () => {
  it('should return a valid semver string', () => {
    const version = getAppVersion()
    expect(version).toMatch(/^\d+\.\d+\.\d+/)
  })
})

describe('getAppAuthor', () => {
  it('should return a non-empty string', () => {
    const author = getAppAuthor()
    expect(author).toBeTruthy()
    expect(typeof author).toBe('string')
  })
})
