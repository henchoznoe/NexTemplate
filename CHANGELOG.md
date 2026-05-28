## [1.4.3](https://github.com/henchoznoe/NexTemplate/compare/v1.4.2...v1.4.3) (2026-05-28)


### Bug Fixes

* set renovate every 5 minutes to test ([f5868b6](https://github.com/henchoznoe/NexTemplate/commit/f5868b6a1fb2347b9fcd98e24a819ad75160e183))

## [1.4.2](https://github.com/henchoznoe/NexTemplate/compare/v1.4.1...v1.4.2) (2026-05-28)


### Bug Fixes

* disable Renovate dependency dashboard ([fb5c50f](https://github.com/henchoznoe/NexTemplate/commit/fb5c50ff6f5fb13a9dec82785cc79faa6e915d2c))

## [1.4.1](https://github.com/henchoznoe/NexTemplate/compare/v1.4.0...v1.4.1) (2026-05-28)


### Bug Fixes

* add minimumReleaseAge to Renovate config ([2eeb74a](https://github.com/henchoznoe/NexTemplate/commit/2eeb74a7502f6057441466ab3104c097cbb43147))
* set minimumReleaseAge to 1 day ([ef47766](https://github.com/henchoznoe/NexTemplate/commit/ef4776676cb15a60431982ad887023c2cfcc3f39))

# [1.4.0](https://github.com/henchoznoe/NexTemplate/compare/v1.3.0...v1.4.0) (2026-05-28)


### Bug Fixes

* **ci:** make Codecov upload non-blocking when token is missing ([482fb78](https://github.com/henchoznoe/NexTemplate/commit/482fb78d4618ddae9bf825de08621315619c67ee))


### Features

* add Sonner toast notifications with Server Actions pattern ([314472f](https://github.com/henchoznoe/NexTemplate/commit/314472f0cbbd21c50fcced4c766a89af51f4ff29))
* add Winston structured logger ([f63dbbf](https://github.com/henchoznoe/NexTemplate/commit/f63dbbf7948260f3228d0f444f2fd84c31023a43))
* **health:** add database connectivity check with degraded status ([adca2e3](https://github.com/henchoznoe/NexTemplate/commit/adca2e39923f9001afbbfcc70347cfd50f0b8692))

# [1.3.0](https://github.com/henchoznoe/NexTemplate/compare/v1.2.3...v1.3.0) (2026-05-28)


### Bug Fixes

* **ci:** add DATABASE_URL env for prisma generate steps ([0e98595](https://github.com/henchoznoe/NexTemplate/commit/0e985957bbb38092d5ab4e6af5d5bf6167264013))
* **ci:** add missing BETTER_AUTH_URL and NEXT_PUBLIC_APP_URL to build env ([aeb9b10](https://github.com/henchoznoe/NexTemplate/commit/aeb9b1022a01447791454ae6f459496e79e61b5f))
* **ci:** set DATABASE_URL at job level for all ci steps ([a290255](https://github.com/henchoznoe/NexTemplate/commit/a290255b8138c3396fc543bb6ac3e49fccf7e2a0))
* **ci:** use next build directly to skip migrate/seed in CI ([7f5b005](https://github.com/henchoznoe/NexTemplate/commit/7f5b0052546a9911e7e2d6848fe8e202058bc24c))
* resolve gitleaks false positives for CI/test placeholders ([e68aaa3](https://github.com/henchoznoe/NexTemplate/commit/e68aaa3f2cd8840ce8828bd12a24971f48c94da4)), closes [hi#entropy](https://github.com/hi/issues/entropy)


### Features

* add Better Auth, Prisma PostgreSQL, and Vitest testing ([dbbbc7b](https://github.com/henchoznoe/NexTemplate/commit/dbbbc7ba076e5fce655eb5e8cfd7016db602fe96))
* add GitHub login button with session display and sign out ([48cc6dc](https://github.com/henchoznoe/NexTemplate/commit/48cc6dca31c0101933cabbe173b0e20ebdc6e526))
* initialize Prisma schema, remove footer component, and update metadata display on home page ([26cb4e1](https://github.com/henchoznoe/NexTemplate/commit/26cb4e139af8b83dbd98abed9dc4615cee2a5641))

## [1.2.3](https://github.com/henchoznoe/NexTemplate/compare/v1.2.2...v1.2.3) (2026-05-27)


### Bug Fixes

* address audit findings and improve template defaults ([680046d](https://github.com/henchoznoe/NexTemplate/commit/680046da25a5a717b5d8c5220c30a912fbd403c8))

## [1.2.2](https://github.com/henchoznoe/NexTemplate/compare/v1.2.1...v1.2.2) (2026-05-25)


### Bug Fixes

* remove hardcoded repository URL and add Next.js build cache ([5425463](https://github.com/henchoznoe/NexTemplate/commit/5425463dfd64524dba32f4c6d2e3120371841c94))

## [1.2.1](https://github.com/henchoznoe/NexTemplate/compare/v1.2.0...v1.2.1) (2026-05-25)


### Bug Fixes

* update CI workflows with manual gitleaks installation and dependency review constraints ([5ae9e4e](https://github.com/henchoznoe/NexTemplate/commit/5ae9e4eea77edd6a60bd4e53051952cf77b356c9))
* use RELEASE_TOKEN with GITHUB_TOKEN fallback for semantic-release ([459c557](https://github.com/henchoznoe/NexTemplate/commit/459c557a8541b2e81172a9fa1d675aad712a821a))

# [1.2.0](https://github.com/henchoznoe/NexTemplate/compare/v1.1.0...v1.2.0) (2026-05-24)


### Bug Fixes

* relax VERCEL_PROJECT_PRODUCTION_URL validation type ([f2889c9](https://github.com/henchoznoe/NexTemplate/commit/f2889c97ce56cc0105148fbbbe248919c87fdcee))


### Features

* add Docker and Kubernetes support for production containerized deployment ([4745751](https://github.com/henchoznoe/NexTemplate/commit/47457511e1af40e27ef594fd7c542000ea10c824))
* add site configuration, theme support, health check, bundle analysis, and env validation ([459edda](https://github.com/henchoznoe/NexTemplate/commit/459edda8097bcc004d251c49271bfc164701b952))

# [1.1.0](https://github.com/henchoznoe/NexTemplate/compare/v1.0.0...v1.1.0) (2026-05-24)


### Features

* add loading, error, and not-found states and update CI concurrency ([8560557](https://github.com/henchoznoe/NexTemplate/commit/85605576278177f2944ae243ab3e6216278b417e))
* add proxy middleware template for Next.js requests ([2379a98](https://github.com/henchoznoe/NexTemplate/commit/2379a98473372e90aa5683f19c49177297f8967c))

# 1.0.0 (2026-05-24)


### Features

* initial template setup ([3b287da](https://github.com/henchoznoe/template-next-app/commit/3b287da346a72dcf9e48753ec22ca0e25fdd55a3))
