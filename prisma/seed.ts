import { PrismaPg } from '@prisma/adapter-pg'
import { config } from 'dotenv'
import { PrismaClient } from './generated/prisma/client'

config({ path: '.env.local' })

const main = async () => {
  // Skip seeding in test environment
  if (process.env.NODE_ENV === 'test') {
    console.log('Skipping seed in test environment.')
    return
  }

  // Setup Prisma client
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

  console.log('Seeding database...')

  try {
    // seed here
    console.log('\nSeed completed successfully!')
  } catch (error) {
    console.error('Seed failed:', error)
    throw error
  } finally {
    console.log('Disconnecting from database...')
    await prisma.$disconnect()
  }
}

main().catch(error => {
  console.error('Fatal error during seeding:', error)
  process.exit(1)
})
