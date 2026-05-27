import { createAuthClient } from 'better-auth/react'
import { env } from '@/lib/core/env'

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
})
