import { describe, expect, it } from 'vitest'
import { getCommitHash } from '@/lib/utils/commit-hash'

describe('getCommitHash', () => {
  it('should return local-dev when no env var is set', () => {
    expect(getCommitHash()).toBe('local-dev')
  })
})
