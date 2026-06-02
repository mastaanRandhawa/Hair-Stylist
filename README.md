# Lumière Salon — Luxury Hair Stylist Website

A luxury editorial salon website built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** with custom design tokens (cream, gold, charcoal palette)
- **21st.dev Hero** — integrated from `21stdev.md` at `src/components/ui/hero-1.tsx`
- **shadcn-style UI** — Dialog, Button, Input, Accordion
- **CSS scroll reveals** — lightweight fade-in (no heavy animation library)
- **Optimized hero canvas** — 30fps cap, pauses off-screen, adaptive resolution
- **React Router** — multi-page routing

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Live site (GitHub Pages)

**https://mastaanrandhawa.github.io/Hair-Stylist/**

Deploys automatically on push to `main` via GitHub Actions.

## Build

```bash
npm run build
npm run preview
```

## Pages

| Route | Sections |
|-------|----------|
| `/` | Hero, About preview, Services, Stats, Gallery, Testimonials, CTA |
| `/about` | Hero, Story, Values, Team, Certifications, CTA |
| `/services` | Hero, Categories, Services, Pricing, FAQ, CTA |
| `/gallery` | Hero, Portfolio grid, Before/After, Instagram CTA |
| `/contact` | Hero, Form + info, Map, Social links |

## Design System

Colors and typography follow `requirements.md`:

- Playfair Display (headings) + Inter (body)
- Cream `#F4F1E8`, Gold `#D8C86A`, Charcoal `#1F1F1F`

## Hero Component

The hero is sourced from [21st.dev](https://21st.dev) (see `21stdev.md`). It has been themed with:

- Full-width background image overlay
- Editorial serif typography
- Gold CTA buttons
- Salon navigation and copy

## Future (Phase 2)

Static data in `src/data/` is structured for future booking API integration.
