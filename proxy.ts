// Edge middleware stub — extend for route protection, auth guards, redirects, etc.
import { type NextRequest, NextResponse } from 'next/server'

export const proxy = async (_request: NextRequest) => {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest).*)',
  ],
}
