# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@masatomakino/raf-ticker` — A lightweight npm package that provides a unified `requestAnimationFrame` ticker using EventEmitter3. Consolidates multiple RAF calls into a single loop for performance optimization.

## Commands

All pnpm/npm commands MUST run inside DevContainer. Never run pnpm or npm directly on the host.

```bash
# Install dependencies
devcontainer exec --workspace-folder . pnpm install --frozen-lockfile

# TypeScript compile
devcontainer exec --workspace-folder . pnpm run buildTS

# Full build (TypeScript + demo)
devcontainer exec --workspace-folder . pnpm run build

# Run tests
devcontainer exec --workspace-folder . pnpm run test

# Run a single test file
devcontainer exec --workspace-folder . pnpm exec vitest run __test__/raf.spec.ts

# Coverage report
devcontainer exec --workspace-folder . pnpm run coverage

# Start dev server (demo + TS watch)
devcontainer exec --workspace-folder . pnpm run start:dev

# Format (Prettier)
devcontainer exec --workspace-folder . pnpm run pre-commit
```

## Architecture

The entire library is ~150 lines across three source files in `src/`:

- **RAFTicker** (`RAFTicker.ts`) — Static singleton that wraps `requestAnimationFrame`. Emits three ordered events per frame: `onBeforeTick` → `tick` → `onAfterTick`, each with a `RAFTickerEventContext` containing `timestamp` and `delta`. Auto-initializes on module import.
- **RAFTickerEvent** (`RAFTickerEventContext.ts`) — Event type definitions (`RAFTickerEventMap`) and the `RAFTickerEventContext` class carrying frame timing data.
- **index.ts** — Re-exports public API.

## Build Output

TypeScript compiles to `./esm` (ES2021, Node16 module resolution). Declaration files and source maps are generated.

## Testing

Vitest with jsdom environment. Tests in `__test__/` use a custom `RequestAnimationFrameMockSession` to deterministically control RAF timing. Coverage via Istanbul (text + lcov).

## CI

GitHub Actions matrix tests on Node 24/26. A published GitHub Release triggers `npm_publish.yml`, which stages the package on npm with OIDC trusted publishing (`npm stage publish`). A maintainer approves the staged version on npm with 2FA. See `RELEASING.md`.
