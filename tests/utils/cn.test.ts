import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils/cn'

describe('cn', () => {
  it('should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('should handle conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz')
  })

  it('should merge conflicting tailwind classes', () => {
    expect(cn('px-4', 'px-2')).toBe('px-2')
  })

  it('should handle empty inputs', () => {
    expect(cn()).toBe('')
  })

  it('should handle undefined and null', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar')
  })
})
