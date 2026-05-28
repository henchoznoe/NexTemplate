import { describe, expect, it } from 'vitest'
import { demoAction } from '@/lib/actions/demo'

describe('demoAction', () => {
  it('should return a successful result', async () => {
    const result = await demoAction()
    expect(result.success).toBe(true)
    expect(result.message).toBe('Action executed successfully!')
  })
})
