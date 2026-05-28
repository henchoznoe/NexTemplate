import { AuthSection } from '@/components/auth-section'
import { ThemeToggle } from '@/components/theme-toggle'
import { getAppAuthor, getAppVersion } from '@/lib/utils/app'

const HomePage = () => {
  const author = getAppAuthor()
  const version = getAppVersion()

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-4xl font-bold tracking-tight">Template Next App</h1>
      <p className="text-muted-foreground">Made by {author}</p>
      <p className="text-muted-foreground italic text-sm">Version: {version}</p>
      <AuthSection />
      <ThemeToggle />
    </main>
  )
}

export default HomePage
