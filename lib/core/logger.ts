import { createLogger, format, transports } from 'winston'
import { env, isDev } from '@/lib/core/env'

const { combine, timestamp, errors, json, colorize, printf } = format

const devFormat = combine(
  colorize(),
  timestamp({ format: 'HH:mm:ss' }),
  errors({ stack: true }),
  printf(({ timestamp, level, message, stack, ...meta }) => {
    const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : ''
    return stack
      ? `${timestamp} ${level}: ${message}\n${stack}`
      : `${timestamp} ${level}: ${message}${metaStr}`
  }),
)

const prodFormat = combine(timestamp(), errors({ stack: true }), json())

export const logger = createLogger({
  level: isDev ? 'debug' : 'info',
  defaultMeta: { service: 'nextemplate', env: env.NODE_ENV },
  transports: [new transports.Console()],
  format: isDev ? devFormat : prodFormat,
})
