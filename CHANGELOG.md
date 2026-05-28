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
