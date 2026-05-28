import { AuthSection } from '@/components/auth-section'
import { DemoActionButton } from '@/components/demo-action-button'
import { ThemeToggle } from '@/components/theme-toggle'
import { getAppAuthor, getAppVersion } from '@/lib/utils/app'
import { getCommitHash } from '@/lib/utils/commit-hash'

const HomePage = () => {
  const author = getAppAuthor()
  const version = getAppVersion()
  const commitHash = getCommitHash()

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-4xl font-bold tracking-tight">Template Next App</h1>
      <p className="text-muted-foreground">Made by {author}</p>
      <p className="text-muted-foreground italic text-sm">
        v{version} &middot; {commitHash}
      </p>
      <AuthSection />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <DemoActionButton />
      </div>
    </main>
  )
}

export default HomePage
