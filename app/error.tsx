'use client'

import { useEffect } from 'react'

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4">
      <p className="select-none font-mono text-6xl font-bold text-muted-foreground/30">
        Error
      </p>
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
      </div>
      <button
        type="button"
        onClick={reset}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Try again
      </button>
    </div>
  )
}

export default ErrorPage
