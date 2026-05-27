import os from 'node:os'
import bundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const getLocalIp = () => {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces))
    for (const iface of interfaces[name] ?? [])
      if (iface.family === 'IPv4' && !iface.internal) return iface.address
  return '127.0.0.1'
}

const nextConfig: NextConfig = {
  ...(process.env.DOCKER_BUILD === 'true' && { output: 'standalone' as const }),
  allowedDevOrigins: [getLocalIp()],
  env: {
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA ?? '',
  },
}

export default withBundleAnalyzer(nextConfig)
