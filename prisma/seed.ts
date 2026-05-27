import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../lib/generated/prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const seed = async () => {
  console.log('Seeding database...')

  // Add your seed data here
  // Example:
  // await prisma.user.upsert({
  //   where: { email: 'admin@example.com' },
  //   update: {},
  //   create: {
  //     id: 'seed-admin-id',
  //     name: 'Admin',
  //     email: 'admin@example.com',
  //     emailVerified: true,
  //   },
  // })

  console.log('Seeding complete.')
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
