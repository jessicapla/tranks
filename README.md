# Tranks Monorepo

Tranks is a personal finance application. 

## Stack Overview

* **Backend: in progress with** Deno, Danet (Framework), Drizzle (ORM)
* **Frontend: initialized with** Vue 3, Vite, shadcn/vue
* **Monorepo Tooling:** pnpm (package manager), Turborepo (build system & task orchestration -- soon)

## Structure

* `apps/`: Contains independent applications (e.g., `tranks-server`, `tranks-web`).
* `packages/`: Will contain reusable internal libraries (e.g., `@tranks/shared-types`, `@tranks/ui-common`).