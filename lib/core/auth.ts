import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { AUTH_CONFIG } from '@/lib/config/time'
import { env, isProd } from '@/lib/core/env'
import prisma from '@/lib/core/prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  advanced: {
    database: {
      generateId: 'uuid',
    },
    cookiePrefix: 'nextemplate',
    defaultCookieAttributes: {
      secure: true,
      httpOnly: true,
      sameSite: 'lax' as const,
    },
  },
  session: {
    expiresIn: AUTH_CONFIG.SESSION_EXPIRES_IN,
    updateAge: AUTH_CONFIG.SESSION_UPDATE_AGE,
    cookieCache: {
      enabled: true,
      maxAge: AUTH_CONFIG.COOKIE_CACHE_MAX_AGE,
    },
  },
  rateLimit: {
    /** Rate limiting is disabled outside production to avoid blocking dev/test flows. */
    enabled: isProd,
    window: AUTH_CONFIG.RATE_LIMIT_WINDOW,
    max: AUTH_CONFIG.RATE_LIMIT_MAX,
  },
  trustedOrigins: [env.BETTER_AUTH_URL, env.NEXT_PUBLIC_APP_URL],
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
})
