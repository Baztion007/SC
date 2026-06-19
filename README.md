# Spruce Construction — Marketing Site

A modern, accessible, SEO-optimized marketing website for Spruce Construction, a custom residential homebuilder in Richmond and Virginia's Northern Neck.

Built with Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, and Prisma.

## Architecture

This is a **single-page application** (only the `/` route is exposed). The five "pages" from the IA spec (Home, Portfolio, Services, About, Contact) are implemented as client-side views managed by a Zustand store, with smooth Framer Motion page transitions. This delivers a faster, app-like UX than traditional multi-page navigation while keeping the build portable across static and serverless hosts.

### Key features
- **5 full pages** with every section from the IA spec, plus improvements:
  - Home: hero, services overview, stats band, featured projects, process, testimonials, about preview, service area + Boscobel Trace, CTA
  - Portfolio: filterable project grid (All / New Builds / Renovations) with project detail modal
  - Services: New Builds, Whole-Home Renovations, How We Work (4-step process), FAQ accordion, CTA
  - About: Roots of Spruce (10 principles), team grid (12 members), Instagram feed, CTA
  - Contact: form (react-hook-form + zod) with success state, philosophy quote, contact details, Boscobel card, OpenStreetMap embed
- **Contact API** (`/api/contact`): zod validation, honeypot spam protection, in-memory rate limiting, Prisma persistence to SQLite, fire-and-forget email notification stub
- **Dark mode** via next-themes
- **SEO**: comprehensive metadata, Open Graph, Twitter cards, Schema.org `GeneralContractor` structured data
- **Accessibility**: semantic HTML, ARIA labels, keyboard navigation, skip links, focus states, sr-only content
- **Performance**: Next.js Image optimization (AVIF/WebP), `optimizePackageImports` for lucide-react & framer-motion, sticky header with backdrop blur
- **UX**: scroll progress bar, back-to-top button, sticky mobile CTA bar, toast notifications, loading states

## Development

```bash
bun install        # Install dependencies
bun run dev        # Start dev server on http://localhost:3000
bun run lint       # Run ESLint
bun run db:push    # Push Prisma schema to SQLite
bun run build      # Production build (standalone output)
```

## Deployment

This project is configured for **Netlify**, **Cloudflare Pages**, and **GitHub Pages** (with caveats). The `output: "standalone"` setting in `next.config.ts` works with Netlify and Cloudflare. For GitHub Pages (static-only), see the notes below.

### Netlify
- Config: `netlify.toml`
- Uses `@netlify/plugin-nextjs` for SSR, image optimization, and API routes
- Set environment variables in the Netlify dashboard:
  - `DATABASE_URL` — SQLite path or external DB URL
  - `NOTIFY_EMAIL` — (optional) email address to receive contact form notifications
- Legacy URL redirects (`/palmyra`, `/portfolio`, etc.) are configured to preserve SEO from the old site

### Cloudflare Pages
- Config: `wrangler.toml`
- Uses `@cloudflare/next-on-pages` adapter
- Set environment variables in the Cloudflare dashboard:
  - `DATABASE_URL` — use Cloudflare D1, Turso, or another edge-compatible SQLite
- SPA fallback redirects configured for client-side routing

### GitHub Actions (CI/CD)
- Config: `.github/workflows/ci.yml`
- On every push/PR: runs lint + build with an ephemeral SQLite
- On push to `main`: deploys to both Netlify and Cloudflare Pages
- Required secrets (set in GitHub repo settings):
  - `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`
  - `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
  - `NETLIFY_DATABASE_URL`, `CF_DATABASE_URL` (optional)

### GitHub Pages (static export)
GitHub Pages only serves static files — no server-side API routes. To deploy there:
1. Change `output: "standalone"` to `output: "export"` in `next.config.ts`
2. Set `images.unoptimized: true` (no Next.js image optimizer on static hosts)
3. Replace the contact form's `fetch('/api/contact', ...)` with a third-party form service (Formspree, Getform, etc.) or a `mailto:` link
4. Remove or stub the `/api/contact` route
5. Build with `bun run build` and deploy the `out/` directory to GitHub Pages

## Content

All site content (projects, team, principles, FAQs, testimonials, stats) is centralized in `src/lib/content.ts`. Edit that file to update content across the site.

## Images

All images are AI-generated and stored in `public/images/`. To regenerate:
```bash
bun scripts/generate-images.mjs
```

## License

© Spruce Construction. All rights reserved.
