import { siteConfig } from '@/lib/config/site'
import { getAppVersion } from '@/lib/utils/app-version'
import { getCommitHash } from '@/lib/utils/commit-hash'

export const Footer = () => {
  const appVersion = getAppVersion()
  const commitHash = getCommitHash()

  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="text-muted-foreground">
          v{appVersion} &middot; {commitHash}
        </p>
      </div>
    </footer>
  )
}
