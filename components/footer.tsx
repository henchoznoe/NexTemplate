import { getAppVersion, getRepoUrl } from '@/lib/utils/app-version'
import { getCommitHash } from '@/lib/utils/commit-hash'

export function Footer() {
  const appVersion = getAppVersion()
  const repoUrl = getRepoUrl()
  const commitHash = getCommitHash()

  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
        <p>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            v{appVersion} &middot; {commitHash}
          </a>
        </p>
      </div>
    </footer>
  )
}
