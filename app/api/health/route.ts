import process from 'node:process'
import { env } from '@/lib/core/env'
import { getAppVersion } from '@/lib/utils/app'
import { getCommitHash } from '@/lib/utils/commit-hash'

const startedAt = new Date()

const formatBytes = (bytes: number): string => {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

export const GET = () => {
  const memoryUsage = process.memoryUsage()
  const uptimeSeconds = Math.floor(process.uptime())

  return Response.json({
    status: 'ok',
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
  })
}
