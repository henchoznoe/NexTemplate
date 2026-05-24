// Edge middleware stub — extend for route protection, auth guards, redirects, etc.
import { type NextRequest, NextResponse } from 'next/server'

export const proxy = async (_request: NextRequest) => {
  return NextResponse.next()
}
