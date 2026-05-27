import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-4xl font-bold tracking-tight">Template Next App</h1>
      <p className="text-muted-foreground">
        Your starting point for building modern web applications.
      </p>
      <Button variant="outline">Login with GitHub</Button>
      <ThemeToggle />
    </main>
  )
}

export default HomePage
