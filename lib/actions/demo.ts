'use server'

import type { ActionResult } from '@/lib/types/action'

export const demoAction = async (): Promise<ActionResult> => {
  return { success: true, message: 'Action executed successfully!' }
}
