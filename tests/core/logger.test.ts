import { describe, expect, it } from 'vitest'
import { formatLogEntry, logger } from '@/lib/core/logger'

describe('logger', () => {
  it('should be defined', () => {
    expect(logger).toBeDefined()
  })

  it('should have standard log methods', () => {
    expect(typeof logger.info).toBe('function')
    expect(typeof logger.error).toBe('function')
    expect(typeof logger.warn).toBe('function')
    expect(typeof logger.debug).toBe('function')
  })

  it('should have info level in non-dev environment', () => {
    expect(logger.level).toBe('info')
  })

  it('should have default meta with service name', () => {
    expect(logger.defaultMeta).toEqual(
      expect.objectContaining({ service: 'nextemplate' }),
    )
  })

  it('should log without throwing', () => {
    expect(() => logger.info('test message')).not.toThrow()
    expect(() => logger.error('test error', { code: 500 })).not.toThrow()
    expect(() => logger.warn('test warning')).not.toThrow()
    expect(() => logger.debug('test debug')).not.toThrow()
  })
})

describe('formatLogEntry', () => {
  it('should format a basic message', () => {
    const result = formatLogEntry({
      timestamp: '10:00:00',
      level: 'info',
      message: 'hello',
    })
    expect(result).toBe('10:00:00 info: hello')
  })

  it('should include meta as JSON', () => {
    const result = formatLogEntry({
      timestamp: '10:00:00',
      level: 'warn',
      message: 'warning',
      userId: '123',
    })
    expect(result).toBe('10:00:00 warn: warning {"userId":"123"}')
  })

  it('should format error with stack trace', () => {
    const result = formatLogEntry({
      timestamp: '10:00:00',
      level: 'error',
      message: 'Something failed',
      stack: 'Error: Something failed\n    at test.ts:1:1',
    })
    expect(result).toBe(
      '10:00:00 error: Something failed\nError: Something failed\n    at test.ts:1:1',
    )
  })

  it('should handle empty meta', () => {
    const result = formatLogEntry({
      timestamp: '12:00:00',
      level: 'debug',
      message: 'no meta',
    })
    expect(result).not.toContain('{')
  })
})
