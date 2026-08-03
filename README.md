# Portfolio

Personal portfolio and CV site for a backend engineer working in Go and cloud-native systems. A single, dark-themed page covering background, experience, projects and skills, prerendered to static HTML at build time.

**Live site:** [portfolio-sreekuttan.vercel.app](https://portfolio-sreekuttan.vercel.app/)

## Overview

The site is one route covering background, experience, professional and academic projects, education and skills. Everything a visitor needs is on it, so there is no client-side router to hydrate, no data fetching on the critical path and nothing to wait for after the HTML arrives.

Content lives in the repository as typed TypeScript modules rather than in a CMS or a database. Experience entries are parsed through a Zod schema at import time, so a malformed entry fails the build rather than rendering broken markup in production.

## Design decisions

These are deliberate constraints, not omissions:

- **No database.** Content changes a few times a year and is edited by one person. A database would add a network hop, a failure mode and an operational surface to serve data that is known at build time.
- **No separate backend service.** Backend and infrastructure work is demonstrated by the linked project repositories rather than by a contrived API that serves a biography.
- **No state library, no component library, no CSS-in-JS.** The page has one piece of interactive state (the mobile menu). `useState` covers it. The expandable academic project cards use `<details>`/`<summary>`, so they cost no JavaScript at all and keep native keyboard and screen-reader behaviour.
- **Server Components by default.** `"use client"` appears in exactly two components, the ambient cursor glow and the mobile menu, both leaves of the tree. Everything else renders on the server and ships no JavaScript.

The restraint is the point. The stack is chosen to fit the problem rather than to demonstrate breadth.

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript, `strict` mode |
| Styling | Tailwind CSS v4 with CSS custom properties as design tokens |
| Content | Typed TS modules, validated with Zod |
| Fonts | Manrope and JetBrains Mono via `next/font` |
| Hosting | Vercel |

## Getting started

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/SreekuttanSreedharanThampi/portfolio.git
cd portfolio
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build (prerenders every route) |
| `npm start` | Serve the production build locally |
| `npm run lint` | ESLint |

Type checking runs as part of `npm run build`, or on its own with `npx tsc --noEmit`.

## Project structure

```
app/                  routes and global styles; thin, composes components
components/
  features/           page sections (Hero, Experience, Projects, Skills, Contact)
  layout/             SiteHeader, MobileNav, Footer
  ui/                 domain-agnostic primitives
content/              site copy and CV data as typed modules
lib/content/          Zod schemas and inferred types
public/               static assets, including resume.pdf
```

Types are inferred from the Zod schemas with `z.infer` rather than hand-written alongside them, so the schema is the single source of truth.

## Editing content

No code changes are needed to update the site's copy:

| File | Contents |
| --- | --- |
| `content/site.ts` | Name, headline, bio, contact details, social links |
| `content/experience.ts` | Roles, highlights and technology tags |
| `content/featured.ts` | Personal and external projects |
| `content/academic.ts` | University projects shown as collapsible cards |
| `content/education.ts` | Degrees, institutions and grades |
| `content/skills.ts` | Grouped skill lists |
| `content/nav.ts` | Header navigation items |

`content/experience.ts` and `content/academic.ts` are validated against `lib/content/schema.ts` on import. A missing required field or an empty array will stop the build.

## Responsive and accessible behaviour

- **Touch is treated as a first-class pointer type, not a narrow desktop.** Card surfaces are revealed on hover on pointer devices and rendered at rest on touch devices, keyed on `@media (hover: none)` rather than on viewport width. Hover-driven effects are gated behind `@media (hover: hover)` so touch browsers do not latch a sticky `:hover` state onto the last element tapped.
- Below the `sm` breakpoint the navigation collapses into a menu that closes on selection, on `Escape`, on an outside tap and when the viewport crosses back above the breakpoint.
- Every animation and transition is guarded by `prefers-reduced-motion`.
- Semantic landmarks and headings throughout, with visible focus states and labelled interactive controls.
- Apart from the cursor glow and the mobile menu, the page renders and is fully navigable with JavaScript disabled.

## Deployment

Deployed on Vercel. Every route is static, so a build produces plain HTML served from the CDN with no origin server at request time. Pushes to `main` deploy automatically; pull requests get preview deployments.

## Roadmap

- Art gallery with a lightbox
- Contact form as a Server Action, replacing the current `mailto:` link

## License

A personal project. The source is public for reference. The CV content, written copy and résumé are not licensed for reuse.
