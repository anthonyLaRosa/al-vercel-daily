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

API calls go to `https://vercel-daily-news-api.vercel.app` (proxied via Next.js rewrites at `/vercel-api/*`). The service layer in `src/services/` wraps the API with typed functions using `dailyFetch`. RSCs fetch directly via `src/services/server-side/`; client components use TanStack Query via the `dailyQuery` hook (`src/helpers/dailyQuery.ts`), which prefixes all URLs with `/vercel-api`.

`src/app/layout.tsx` wraps the tree in a `<Providers>` client component (`src/hooks/TanstackQuery.tsx` — TanStack QueryClientProvider). Components in `src/components/` are Next.js-specific wrappers around `@repo/ui` organisms — most are RSC, with a few marked `"use client"` for search and subscribe interactions.

Async server components that fetch data are always paired with a `<Suspense>` boundary in their parent page. Skeleton fallbacks live in `@repo/ui` (`molecules/skeleton-*`, `organisms/skeleton-*`) and mirror the real component layout with the same responsive breakpoints.

### Responsive breakpoints

All components use a **mobile-first** approach with exactly two breakpoints:

- **Default (< 768px)** — mobile
- **`md:` (768px–1279px)** — tablet
- **`xl:` (≥ 1280px)** — desktop

Never use `sm:` or `lg:` prefixes — always migrate to `md:` and `xl:` respectively.

### `@repo/ui` design system layers

Components follow a strict three-tier hierarchy:

- **Atoms** (`src/atoms/`) — extend native HTML props, use CVA for variants, no state
- **Molecules** (`src/molecules/`) — slot-based composition via ReactNode props, minimal logic
- **Organisms** (`src/organisms/`) — compound `Parent.SubPart` pattern; RSC-safe (no Context, no state)

Only three DS components are `"use client"`: `SearchInput`, `SearchBar`, `NewsletterSignup`. In `apps/daily`, `"use client"` components are `MobileNavNext` and `SubscribeButton`.

Path alias `@repo/ui/*` maps to `packages/ui/src/*` in both workspaces.

### Key component patterns

**Navigation**: `HeaderNext` splits desktop and mobile at `md:`. Desktop nav lives inside `SiteNav.Nav` (hidden below `md:`); mobile nav is a `MobileNavNext` hamburger drawer (hidden above `md:`). `NavLinksNext` is an async RSC passed as `children` into the client `MobileNavNext` — valid App Router pattern. `NavLinksNext` accepts an `orientation` prop (`"horizontal"` | `"vertical"`) and should never wrap itself in `<SiteNav.Nav>`.

**Hero**: `HeroSection` is `flex flex-col md:relative`. On mobile the overlay stacks below the image; on `md+` it becomes `absolute` over the image. Image aspect ratio transitions: `aspect-[4/3]` → `md:aspect-video` → `xl:aspect-[30/9]`.

**Article body**: Uses `max-w-2xl mx-auto px-4` centered column — not hardcoded padding.

**Skeleton components**: Each skeleton mirrors the grid/layout classes of the real component exactly. Always reuse the `Skeleton` atom from `@repo/ui/atoms/skeleton` — no custom placeholder divs.

### Design system constraints ("The Archivist")

- **No 1px borders** — separate surfaces using background color or whitespace only
- **Radii**: `rounded-soft` (12px) for controls, `rounded-organic` (16px) for cards, `rounded-gallery` (24px) for hero images
- **Colors**: oklch-based tokens; primary is editorial red (`#a20513`); surfaces use tonal nesting
- **Typography**: `--font-headline` (Newsreader serif), `--font-body` (Manrope sans-serif)
- **Glassmorphism** (`GlassPanel`) for floating/overlay elements including the mobile nav drawer

### Tooling

- **Biome** (extends `ultracite`) handles both linting and formatting — do not use ESLint or Prettier
- **TypeScript strict mode** is enabled; `moduleDetection: "force"` in `apps/daily`
- **CVA** (`class-variance-authority`) + `clsx` + `tailwind-merge` via the `cn()` utility for all conditional class logic
- **Tailwind CSS 4** (PostCSS plugin)
