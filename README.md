# Saad Gul Channa — HUD Portfolio

A dark, holographic heads-up-display–styled portfolio: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and GSAP ScrollTrigger.

## Design language

- **Palette:** near-black void (`#050608`), signal cyan (`#00D2FF`) as the primary glow, with sparing crimson (`#FF3B4E`) and brushed gold (`#E8B356`) accents for status/warning highlights.
- **Glass panels:** `backdrop-blur-xl`, translucent cyan-tinted borders, corner-bracket "targeting frame" pseudo-elements (`.hud-frame`).
- **Backdrop:** an original, hand-built SVG blueprint layer (`HUDBackdrop.tsx`) — grid lines, circuit traces, radar rings, telemetry labels — not derived from any external artwork.
- **Note on the reference images:** the Iron Man renders you shared are copyrighted fan art/film-derived character art, so I didn't embed them or brand the site as "Iron Man"/"Stark Industries" — reproducing that character art or trademarked branding isn't something I can do. Everything visual here is an original build in the same *generic sci-fi HUD* language (arc-style glow, blueprint grid, holographic panels) so you get the aesthetic without the IP risk.

## What's new vs. the previous build

- `BootSequence.tsx` — a "system calibration" boot overlay on load: animated concentric rings, a typed system log, and a progress bar, before revealing the site.
- `HUDBackdrop.tsx` — fixed z-0 blueprint/circuit background layer, GSAP-parallaxed.
- `ScrollFX.tsx` — GSAP ScrollTrigger choreography: the backdrop scales/drifts for depth as you scroll the whole page, and every `.gsap-card` element animates forward out of the depth of field as it enters view.
- `SpotlightCard.tsx` — upgraded with a tracking-reticle cursor dot and ring (like an active sensor), plus corner-bracket framing.
- Content refreshed from your latest export: added **AI Event Management System** and **Zeus Restaurant Menu** to Projects, and replaced the old timeline with a **Journey** path (`lib/data.ts` → `journey`) covering all five stages through to VibeShield/Vizi Audit AI.

## Structure

```
app/
  layout.tsx        Fonts + metadata
  page.tsx           Mounts BootSequence, HUDBackdrop, ScrollFX, then all sections
  globals.css        HUD grid, glass, corner-bracket frame, scan-line utilities
components/
  BootSequence.tsx    Boot/calibration overlay
  HUDBackdrop.tsx      Fixed original blueprint/circuit background
  ScrollFX.tsx         GSAP ScrollTrigger setup (parallax + card reveal)
  Navbar.tsx           Scroll-aware floating glass nav
  Hero.tsx             Mouse-tracking glow, energy-core motif, headline
  SpotlightCard.tsx     Reusable glass card: spotlight + tilt + reticle
  ProjectsGrid.tsx      5 projects, grid → modal via Framer Motion layoutId
  ExperienceTimeline.tsx  Active-assignment card + GSAP-drawn Journey path
  SkillsMatrix.tsx      Glass badge grid grouped by category
  Contact.tsx           Terminal-styled interactive contact form
lib/
  data.ts             All resume-derived content
```

No Education section is rendered anywhere, per spec.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> `next/font` fetches Space Grotesk, Inter, and JetBrains Mono from Google Fonts at build/dev time — an internet connection is required for `npm run build` / `npm run dev` to compile.

## Build

```bash
npm run build
npm start
```
