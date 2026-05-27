import { describe, expect, it } from 'vitest'
import { getAppVersion } from '@/lib/utils/app-version'

describe('getAppVersion', () => {
  it('should return a valid semver string', () => {
    const version = getAppVersion()
    expect(version).toMatch(/^\d+\.\d+\.\d+/)
  })
})
