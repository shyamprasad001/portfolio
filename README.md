# Shyam Prasad Mantri — Portfolio

Next.js 14 (App Router) + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx` — fonts (Inter, JetBrains Mono via next/font; Clash Display via Fontshare in `globals.css`) + metadata
- `app/page.tsx` — assembles all sections
- `components/Hero.tsx` — staggered headline, marquee stack strip
- `components/About.tsx` — scroll-reveal bio + credentials card
- `components/Skills.tsx` — bento-grid stack display
- `components/Projects.tsx` — hover-reveal project cards
- `components/Contact.tsx` — footer with animated email + socials
- `components/MagneticButton.tsx` — reusable magnetic hover wrapper
- `lib/motion.ts` — shared Framer Motion variants

## Customize

- Colors/type scale live in `tailwind.config.ts` (`ink`, `surface`, `line`, `ion`, `bone`, `mist`, `graphite`).
- Update the email in `components/Contact.tsx` and the GitHub/LinkedIn URLs in the `socials` array.
- Project copy/links live in the `projects` array in `components/Projects.tsx`.
- Resume/CV link: add a button next to "Get in touch" in `components/Hero.tsx` if you want one.

## Deploy

Push to GitHub and import into Vercel — zero config needed for a stock Next.js app.
