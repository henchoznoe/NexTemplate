import packageJson from '@/package.json' with { type: 'json' }

export const getAppVersion = (): string => {
  return packageJson.version
}

export const getRepoUrl = (): string => {
  return packageJson.homepage
}
