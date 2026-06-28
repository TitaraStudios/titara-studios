# Titara Studios — Official Website

A modern, AAA-quality game studio website for **Titara Studios**, built as a fast,
accessible, production-ready single-page app.

> _"Crafting Games Players Love."_

## ✨ Features

- **Dark / Light mode** with a persisted, system-aware theme toggle
- **Smooth animations** throughout — hero parallax, fade-in on scroll, hover effects,
  card elevation, gradient glow, floating particles and animated buttons (Framer Motion)
- **Smooth page transitions** between routes
- **Fully responsive** from mobile to ultra-wide
- **SEO-optimized** with per-page titles, meta tags, Open Graph / Twitter cards,
  `sitemap.xml` and `robots.txt`
- **Fast loading** — route-level code splitting + vendor chunking
- **Image lazy-loading** with shimmer placeholders (no layout shift)
- **Accessible** — semantic HTML, skip link, focus rings, ARIA labels,
  `prefers-reduced-motion` support
- **Reusable components** and a clean, scalable folder structure
- Written in **TypeScript** with strict settings

## 🧱 Tech Stack

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| Framework      | React 18                        |
| Build tool     | Vite 5                          |
| Language       | TypeScript                      |
| Styling        | Tailwind CSS v3                 |
| Animation      | Framer Motion                   |
| Routing        | React Router v6                 |
| Icons          | Lucide React                    |
| SEO            | react-helmet-async              |

## 🎨 Brand

| Token       | Value     |
| ----------- | --------- |
| Primary     | `#6C5CE7` |
| Secondary   | `#00D2FF` |
| Accent      | `#FFD93D` |
| Background  | `#0F172A` |
| Cards       | `#1E293B` |
| Fonts       | Space Grotesk (display), Inter (body) |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build locally
npm run preview
```

### Environment variables (optional)

Copy `.env.example` to `.env` to wire up real integrations:

```bash
VITE_CONTACT_ENDPOINT=        # POST endpoint for the contact form
VITE_GOOGLE_MAPS_EMBED_URL=   # Google Maps embed URL for the contact page
```

If `VITE_CONTACT_ENDPOINT` is unset, the contact form simulates a successful submit
(useful for demos). If `VITE_GOOGLE_MAPS_EMBED_URL` is unset, a styled map placeholder
is shown instead of a live embed.

## 📁 Project Structure

```
titara-website/
├── public/                  # Static assets (favicon, OG image, game/news art, robots, sitemap)
│   └── assets/
│       ├── games/           # Game banners & logos (SVG placeholders)
│       └── news/            # News cover art (SVG placeholders)
├── src/
│   ├── components/
│   │   ├── contact/         # ContactForm
│   │   ├── games/           # GameCard, StoreButtons, StoreIcons
│   │   ├── home/            # Hero, FeaturedGames, Stats, AboutPreview, LatestNews, CTASection
│   │   ├── layout/          # Layout, Navbar, Footer, PageHeader, PageTransition, Logo, ScrollToTop
│   │   ├── news/            # NewsCard
│   │   ├── seo/             # Seo (react-helmet-async wrapper)
│   │   └── ui/              # Reusable primitives: Button, Card, Badge, Section, Container, etc.
│   ├── context/             # ThemeContext (dark/light mode)
│   ├── data/                # Typed content: games, news, stats, values, navigation
│   ├── hooks/               # useCountUp, usePrefersReducedMotion
│   ├── lib/                 # animations (Framer variants), cn (classname helper)
│   ├── pages/               # Home, Games, About, Careers, News, Contact, Legal, NotFound
│   ├── types/               # Shared TypeScript types
│   ├── App.tsx              # Routes
│   ├── main.tsx             # App bootstrap (providers)
│   └── index.css            # Tailwind layers + global styles
├── index.html               # SEO meta + font preloads
├── tailwind.config.js       # Brand theme, animations
├── vite.config.ts           # Aliases + build chunking
└── tsconfig.json
```

## 🧩 Pages

- **Home** — Hero (parallax + particles), Featured Games, About preview, Stats, Latest News, CTA
- **Games** — Filterable grid of game cards with store buttons and hover animations
- **About** — Story, Mission, Vision, Core Values, Timeline, Why Titara
- **Careers** — "No openings currently" state + perks (easy to expand later)
- **News** — Blog layout with category filters and search
- **Contact** — Form with validation, contact details, socials, map placeholder
- **Privacy / Terms** — Placeholder legal pages
- **404** — Friendly not-found page

## 🛠️ Adding Content

- **A new game** → add an entry to `src/data/games.ts` and drop art in `public/assets/games/`.
- **A news post** → add an entry to `src/data/news.ts`.
- **A job opening** → extend `src/pages/Careers.tsx` (the structure is ready for a roles list).

## 📦 Deployment

This is a static SPA — deploy the `dist/` folder to any static host (Vercel, Netlify,
Cloudflare Pages, GitHub Pages). For client-side routing, configure your host to
rewrite all paths to `index.html`.

---

© 2026 Titara Studios. Placeholder assets are included for demonstration.
