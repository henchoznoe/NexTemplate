import process from 'node:process'
import { env } from '@/lib/core/env'
import { logger } from '@/lib/core/logger'
import prisma from '@/lib/core/prisma'
import { getAppVersion } from '@/lib/utils/app'
import { getCommitHash } from '@/lib/utils/commit-hash'

const startedAt = new Date()

const formatBytes = (bytes: number): string => {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

const checkDatabase = async (): Promise<'connected' | 'disconnected'> => {
  try {
    await prisma.$queryRawUnsafe('SELECT 1')
    return 'connected'
  } catch (error) {
    logger.error('Health check: database unreachable', { error })
    return 'disconnected'
  }
}

export const GET = async () => {
  const memoryUsage = process.memoryUsage()
  const uptimeSeconds = Math.floor(process.uptime())
  const database = await checkDatabase()
  const status = database === 'connected' ? 'ok' : 'degraded'

  return Response.json(
    {
      status,
      database,
      version: getAppVersion(),
      environment: env.NODE_ENV,
      node: process.version,
      timestamp: new Date().toISOString(),
      commit: getCommitHash(),
      deployedAt: startedAt.toISOString(),
      uptime: `${uptimeSeconds}s`,
      memory: {
        rss: formatBytes(memoryUsage.rss),
        heapUsed: formatBytes(memoryUsage.heapUsed),
        heapTotal: formatBytes(memoryUsage.heapTotal),
      },
    },
    { status: status === 'ok' ? 200 : 503 },
  )
}
