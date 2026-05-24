import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils/cn'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NexTemplate',
    template: '%s | NexTemplate',
  },
  description:
    'Production-ready Next.js 16 starter — TypeScript strict, Tailwind v4, shadcn/ui, Biome, semantic-release, and CI/CD baked in. Clone, build, ship.',
}

interface RootLayoutProps {
  readonly children: PropsWithChildren['children']
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.variable, 'font-sans antialiased')}
        suppressHydrationWarning
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
