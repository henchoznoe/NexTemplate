import { type NextRequest, NextResponse } from 'next/server'

export const proxy = async (_request: NextRequest) => {
  return NextResponse.next()
}
