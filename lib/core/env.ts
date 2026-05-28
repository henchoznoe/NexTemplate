import { z } from 'zod/v4'

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url(),
})

const serverSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.url(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  VERCEL_ENV: z.enum(['development', 'preview', 'production']).optional(), // Injected by Vercel
  VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(), // Injected by Vercel
  VERCEL_GIT_COMMIT_SHA: z.string().optional(), // Injected by Vercel
})

const isServer = typeof window === 'undefined'

const parsedClient = clientSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
})

const parsedServer = isServer
  ? serverSchema.safeParse(process.env)
  : { success: true as const, data: {} as z.infer<typeof serverSchema> }

if (!parsedClient.success || !parsedServer.success) {
  const clientErrors = parsedClient.success ? [] : parsedClient.error.issues
  const serverErrors = parsedServer.success ? [] : parsedServer.error.issues
  const allErrors = [...clientErrors, ...serverErrors]
  const summary = allErrors
    .map(issue => `  - ${issue.path.join('.')}: ${issue.message}`)
    .join('\n')

  console.error(`Invalid environment configuration:\n${summary}`)

  if (isServer && process.env.NODE_ENV !== 'test') {
    process.exit(1)
  } else if (isServer) {
    throw new Error('Invalid environment variables')
  }
}

type Env = z.infer<typeof clientSchema> & z.infer<typeof serverSchema>

export const env = {
  ...parsedClient.data,
  ...(parsedServer.data as z.infer<typeof serverSchema>),
} as Env

export const isProd = env.NODE_ENV === 'production'
export const isDev = env.NODE_ENV === 'development'
