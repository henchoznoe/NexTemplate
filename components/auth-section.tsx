'use client'

import { LogIn, LogOut, User } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/core/auth-client'

export const AuthSection = () => {
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        Loading...
      </div>
    )
  }

  if (!session) {
    return (
      <Button
        variant="outline"
        onClick={() => authClient.signIn.social({ provider: 'github' })}
      >
        <LogIn className="size-4" />
        Login with GitHub
      </Button>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
        ) : (
          <div className="flex size-10 items-center justify-center rounded-full bg-muted">
            <User className="size-5 text-muted-foreground" />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium">{session.user.name}</span>
          <span className="text-xs text-muted-foreground">
            {session.user.email}
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => window.location.reload() },
          })
        }
      >
        <LogOut className="size-4" />
        Sign out
      </Button>
    </div>
  )
}
