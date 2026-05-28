import { createAuthClient } from 'better-auth/react'
import { SITE_URL } from '@/lib/config/site'

export const authClient = createAuthClient({
  baseURL: SITE_URL,
})
