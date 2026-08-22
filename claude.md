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
- Hosting: TBD (AWS — S3 + CloudFront planned)
- Payment: TBD (Stripe planned, buttons built but not connected yet)

## Site Structure Goals
1. Hero — Brand name, tagline, beautiful intro ✅
2. Gallery — Showcase jewelry photos ✅ (placeholders, real photos TBD)
3. Shop — Product listings with Buy Now buttons ✅ (payment not connected yet)
4. About — Her story and inspiration ✅
5. Contact — Contact form + Facebook link ✅ (form not connected yet)
6. Footer ✅

## Current Status / Where We Left Off
- All components built and working
- Full page structure complete: Nav → Hero → Gallery → Shop → About → Contact → Footer
- Placeholder images throughout (real photos TBD)
- Contact form built but disabled (backend TBD)
- Buy Now buttons built but not connected (Stripe TBD)
- Next steps:
  - Style polish pass
  - Real product photos when ready
  - AWS hosting setup (S3 + CloudFront)
  - Stripe integration for payments
  - Contact form backend (AWS SES or Formspree)

## Angular 21 File Conventions
- Component files: `name.ts`, `name.html`, `name.scss` (no `.component` suffix)
- Class names: `export class NameComponent {}`
- All components are standalone
- No NgModules

## Component Plan
All components will be standalone. Structure:
```
src/app/
app.ts ← root shell
app.html
app.scss
app.routes.ts ← routes
app.config.ts ← app config / providers
pages/
home/ ← assembles all sections
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

## Future Backend / Hosting Notes (AWS)
- Images: S3 bucket
- Hosting: S3 + CloudFront (static Angular build)
- Contact form: AWS SES or Formspree
- Payments: Stripe
- Database: TBD (may not be needed if products stay in component)

## Key File URLs
Base raw URL: https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild

### App Shell
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/app.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/app.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/app.routes.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/app.config.ts

### Global Styles
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/styles.scss

### Pages
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/pages/home/home.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/pages/home/home.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/pages/home/home.scss

### Components
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/nav/nav.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/nav/nav.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/nav/nav.scss
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/hero/hero.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/hero/hero.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/hero/hero.scss
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/gallery/gallery.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/gallery/gallery.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/gallery/gallery.scss
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/shop/shop.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/shop/shop.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/shop/shop.scss
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/about/about.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/about/about.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/about/about.scss
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/contact/contact.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/contact/contact.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/contact/contact.scss
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/footer/footer.ts
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/footer/footer.html
- https://raw.githubusercontent.com/spence3033/mbirchjewlery_website/refs/heads/rebuild/src/app/components/footer/footer.scss
