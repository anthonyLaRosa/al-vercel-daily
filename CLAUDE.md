# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# From repo root
pnpm dev              # Start all workspaces in dev mode (via Turborepo)
pnpm build            # Build all workspaces
pnpm lint             # Biome lint
pnpm format           # Biome format (write)
pnpm check            # Biome check (lint + format)
pnpm check-types      # TypeScript type check across workspaces

# From apps/daily
pnpm dev              # next dev --port 3000
pnpm build            # next build

# Generate a new UI component (from packages/ui)
pnpm generate:component
```

There are no test commands — no test suite is configured.

## Architecture

This is a **pnpm + Turborepo monorepo** with two workspaces:

- `apps/daily` (`@repo/web`) — Next.js 16 App Router application
- `packages/ui` (`@repo/ui`) — editorial design system consumed by the app

### Data flow in `apps/daily`

API calls go to `https://vercel-daily-news-api.vercel.app` (proxied via Next.js rewrites at `/vercel-api/*`). The service layer in `src/services/` wraps the API with typed functions using `dailyFetch`. React Server Components fetch directly; client components use TanStack Query via the `dailyQuery` hook in `src/helpers/`.

`src/app/layout.tsx` wraps the tree in a `<Providers>` client component (TanStack QueryClientProvider). Components in `src/components/` are Next.js-specific wrappers around `@repo/ui` organisms — most are RSC, with a few marked `"use client"` (search, subscribe interactions).

### `@repo/ui` design system layers

Components follow a strict three-tier hierarchy:

- **Atoms** (`src/atoms/`) — extend native HTML props, use CVA for variants, no state
- **Molecules** (`src/molecules/`) — slot-based composition via ReactNode props, minimal logic
- **Organisms** (`src/organisms/`) — compound `Parent.SubPart` pattern; RSC-safe (no Context, no state)

Only three components are `"use client"`: `SearchInput`, `SearchBar`, `NewsletterSignup`.

Path alias `@repo/ui/*` maps to `packages/ui/src/*` in both workspaces.

### Design system constraints ("The Archivist")

- **No 1px borders** — separate surfaces using background color or whitespace only
- **Radii**: `rounded-soft` (12px) for controls, `rounded-organic` (16px) for cards, `rounded-gallery` (24px) for hero images
- **Colors**: oklch-based tokens; primary is editorial red (`#a20513`); surfaces use tonal nesting
- **Typography**: `--font-headline` (Newsreader serif), `--font-body` (Manrope sans-serif)
- Glassmorphism (`GlassPanel`) for floating/overlay elements

### Tooling

- **Biome** (extends `ultracite`) handles both linting and formatting — do not use ESLint or Prettier
- **TypeScript strict mode** is enabled; `moduleDetection: "force"` in `apps/daily`
- **CVA** (`class-variance-authority`) + `clsx` + `tailwind-merge` via the `cn()` utility for all conditional class logic
- **Tailwind CSS 4** (PostCSS plugin)
