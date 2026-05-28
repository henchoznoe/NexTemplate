import { describe, expect, it, vi } from 'vitest'
import type { ActionResult } from '@/lib/types/action'

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}))

describe('showActionToast', () => {
  it('should call toast.success for successful actions', async () => {
    const { toast } = await import('sonner')
    const { showActionToast } = await import('@/lib/utils/action-toast')

    const result: ActionResult = { success: true, message: 'Done!' }
    showActionToast(result)

    expect(toast.success).toHaveBeenCalledWith('Done!')
  })

  it('should call toast.error for failed actions', async () => {
    const { toast } = await import('sonner')
    const { showActionToast } = await import('@/lib/utils/action-toast')

    const result: ActionResult = { success: false, message: 'Failed!' }
    showActionToast(result)

    expect(toast.error).toHaveBeenCalledWith('Failed!')
  })
})
