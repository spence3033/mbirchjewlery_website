# mbirch jewelry - Portfolio Project CLAUDE.md

## Who I Am
- Developer: Spencer Birch
- LinkedIn: https://www.linkedin.com/in/spencer-birch
- GitHub: https://github.com/spence3033

## Project Overview
A jewelry website for mbirch jewelry, a small craft fair jewelry seller.
Built in Angular 21, rebuilt from scratch on the `rebuild` branch.
The goal is a beautiful, modern site that showcases her jewelry and allows people to purchase it.

## Repositories
- Source code: https://github.com/spence3033/mbirchjewlery_website
- Active branch: `rebuild`
- This CLAUDE.md raw link: https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/claude.md

## Tech Stack
- Framework: Angular 21 (standalone components, no NgModules)
- Styling: SCSS
- SSR: No
- Hosting: TBD
- Payment: TBD (Stripe, PayPal, or Venmo — buttons built but not connected yet)

## Site Structure Goals
1. Hero — Brand name, tagline, beautiful intro
2. Gallery — Showcase jewelry photos
3. Shop — Product listings with Buy Now buttons (payment not connected yet)
4. About — Her story and inspiration
5. Contact — Facebook link, contact info

## Current Status / Where We Left Off
- `rebuild` branch created fresh from a clean slate (old Angular 14 files removed)
- Angular 21 scaffolded successfully with:
  - `--standalone true`
  - `--style scss`
  - `--routing true`
  - No SSR
- `npm install` and `ng serve` not yet verified but scaffold completed without errors
- Next step: verify `ng serve` works at http://localhost:4200, then start building components

## Component Plan
All components will be standalone. Structure:
```
src/app/
  app.component.ts         ← root shell (nav + router-outlet + footer)
  app.routes.ts            ← routes
  app.config.ts            ← app config / providers
  pages/
    home/home.component.ts ← assembles all sections
  components/
    nav/
    hero/
    gallery/
    shop/
    about/
    contact/
    footer/
```

## Design Direction
- Elegant, luxury-adjacent but warm and handcrafted
- Fonts: Cormorant Garamond (display/serif) + Jost (body/sans)
- Colors: cream, warm white, gold, charcoal, taupe, stone
- Feel: editorial, minimal, refined — not corporate
