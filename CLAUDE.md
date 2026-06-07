# Medjura Lifecare — Claude Code Instructions

## Project
Pharma brand website for Medjura Lifecare Pvt. Ltd.
Medicine distribution company — Ahmedabad, Gujarat, India.

## Stack
- Next.js 16 App Router + TypeScript + React 19
- Tailwind CSS v4 + shadcn/ui v4
- Content in /src/data/*.json
- Hosted on Vercel

## Brand Colors (from clean PNG logo — Tailwind v4 utility classes)
- `bg-medjura-navy`     / `text-medjura-navy`     → #1B2B6B ("Medjura" wordmark · Ortho primary)
- `bg-medjura-green`    / `text-medjura-green`     → #6DB530 ("Lifecare" script + leaf · CTA)
- `bg-medjura-teal`     / `text-medjura-teal`      → #42B8C5 (top wave in icon · accent)
- `bg-medjura-lavender` / `text-medjura-lavender`  → #8090C5 (bottom wave · Gynec primary)
- `bg-medjura-pink`     / `text-medjura-pink`      → #E890A8 (human figure + swoosh · Gynec accent)
- `bg-medjura-leaf`     / `text-medjura-leaf`      → #72C035 (leaf highlight · lighter green)

Logo file: /public/images/logo.png (clean PNG) — use Logo component with next/image.
Colors are defined in src/app/globals.css @theme block — NOT in tailwind.config.ts.

## Products
ORTHO: Jointcync, Auramag D, Mytocarn T+, Chalixjura
GYNEC: Auramag D, Vamachol-XT, Primovelle, Chalixjura

## Coding Rules
- Mobile-first always
- Use Next.js built-in `generateMetadata()` for SEO — not next-seo
- No hardcoded content — all data lives in /src/data/*.json
- shadcn/ui for all UI components
- next/image for ALL images (never <img>)
- TypeScript strict mode — types for everything in /src/lib/types.ts
- Server Components by default — `"use client"` only when truly needed
- cn() from /src/lib/utils.ts for conditional classes

## Naming Conventions
- Components: PascalCase  (e.g. ProductCard.tsx)
- Files:      kebab-case
- Functions:  camelCase
- Types:      PascalCase (e.g. Product, Branch)

## Folder Rules
- Pages       → src/app/(marketing)/[page]/page.tsx
- Components  → src/components/[section]/ComponentName.tsx
- Data        → src/data/[name].json
- Types       → src/lib/types.ts
- Utilities   → src/lib/utils.ts

## Key Tailwind v4 Note
No tailwind.config.ts for colors — everything is in globals.css @theme block.
Use `--color-medjura-*` CSS vars or utility classes like `bg-medjura-navy`.

## Phases
1. Project Setup          ✅
2. Design System          (fonts, globals polish)
3. Layout Shell           (Header, Footer, Navbar)
4. Data Layer             (JSON schemas + TypeScript types) ✅
5. Pages                  (Home → Products → About → Contact → Branches)
6. SEO + Performance
7. Deploy to Vercel

## Current Phase: 2 — Design System
