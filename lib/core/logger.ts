import { createLogger, format, transports } from 'winston'
import { env, isDev } from '@/lib/core/env'

const { combine, timestamp, errors, json, colorize, printf } = format

interface LogInfo {
  timestamp?: string
  level: string
  message: string
  stack?: string
  [key: string]: unknown
}

export const formatLogEntry = (info: LogInfo): string => {
  const { timestamp, level, message, stack, ...meta } = info
  const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : ''
  return stack
    ? `${timestamp} ${level}: ${message}\n${stack}`
    : `${timestamp} ${level}: ${message}${metaStr}`
}

const devFormat = combine(
  colorize(),
  timestamp({ format: 'HH:mm:ss' }),
  errors({ stack: true }),
  printf(formatLogEntry),
)

const prodFormat = combine(timestamp(), errors({ stack: true }), json())

export const logger = createLogger({
  level: isDev ? 'debug' : 'info',
  defaultMeta: { service: 'nextemplate', env: env.NODE_ENV },
  transports: [new transports.Console()],
  format: isDev ? devFormat : prodFormat,
})
