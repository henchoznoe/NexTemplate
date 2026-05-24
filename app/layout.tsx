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

export const metadata: Metadata = {
  title: {
    default: 'Template Next App',
    template: '%s | Template Next App',
  },
  description: 'A Next.js starter template with opinionated tooling.',
}

export default function RootLayout({ children }: PropsWithChildren) {
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
