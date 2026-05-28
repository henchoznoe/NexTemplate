'use client'

import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { demoAction } from '@/lib/actions/demo'
import { showActionToast } from '@/lib/utils/action-toast'

export const DemoActionButton = () => {
  const handleClick = async () => {
    const result = await demoAction()
    showActionToast(result)
  }

  return (
    <Button variant="outline" onClick={handleClick}>
      <Zap className="size-4" />
      Demo Action
    </Button>
  )
}
