import { toast } from 'sonner'
import type { ActionResult } from '@/lib/types/action'

export const showActionToast = (result: ActionResult) => {
  if (result.success) {
    toast.success(result.message)
  } else {
    toast.error(result.message)
  }
}
