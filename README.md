# Lumière Salon — Luxury Hair Stylist Website

A luxury editorial salon website built with React 19, TypeScript, Vite, and Tailwind CSS.

## Project structure

```
Hair-Stylist/
├── frontend/          # React SPA (Vite)
│   ├── public/        # Static assets + GitHub Pages 404 redirect
│   └── src/
│       ├── app/       # App shell, router, lazy routes
│       ├── config/    # Site metadata, route helpers
│       ├── content/   # Static copy & media URLs (CMS-ready)
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       └── pages/
├── requirements.md    # Design & content spec
└── 21stdev.md         # 21st.dev component references
```

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** — cream, gold (`#feed81`), charcoal palette
- **21st.dev Hero** — `frontend/src/components/ui/hero-1.tsx`
- **Cream editorial navbar** — inner pages (home uses hero nav)
- **Dynamic wave canvas** — hero background
- **React Router** — multi-page routing with GitHub Pages `basename`

## Getting started

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Or from the root (delegates to `frontend/`):

```bash
npm install --prefix frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Live site (GitHub Pages)

**https://mastaanrandhawa.github.io/Hair-Stylist/**

Deploys automatically on push to `main` via GitHub Actions (builds `frontend/` → `frontend/dist`).

### One-time GitHub Pages setup (fixes deploy 404)

If `deploy-pages` fails with **"Failed to create deployment (status: 404)"**, Pages is not enabled for Actions yet:

1. Open [Repository → Settings → Pages](https://github.com/mastaanRandhawa/Hair-Stylist/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Go to **Actions** → **Deploy to GitHub Pages** → **Re-run all jobs**.

If prompted, approve the **`github-pages`** environment for the deploy job. Public repos on github.com are required for free Pages on personal accounts.

## Build

```bash
cd frontend
npm run build
npm run preview
```

Production builds use `base: /Hair-Stylist/` for GitHub Pages.

## Pages

| Route | Sections |
|-------|----------|
| `/` | Hero, About preview, Services, Stats, Gallery, Testimonials, CTA |
| `/about` | Hero, Story, Values, Team, Certifications, CTA |
| `/services` | Hero, Categories, Services, Pricing, FAQ, CTA |
| `/gallery` | Hero, Portfolio grid, Before/After, Instagram CTA |
| `/contact` | Hero, Form + info, Map, Social links |

## Design system

Colors and typography follow `requirements.md`:

- Playfair Display (headings) + Inter (body)
- Cream `#F4F1E8`, Gold `#feed81`, Charcoal `#1F1F1F`

## Future (Phase 2)

Static content in `frontend/src/content/` is structured for future booking API integration.
