# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
