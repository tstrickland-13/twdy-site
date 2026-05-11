# TWDY Agency Website (V2)

Multi-page Next.js site for TWDY Agency — Creator & Athlete Management.

> Migrated from a single static HTML page to **Next.js 16 (App Router)** with
> TypeScript and Tailwind CSS v4 in branch `upgrade-V2`.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config) + custom CSS variables
- **Fonts:** `next/font` (Inter, Oswald)
- **Forms:** Netlify Forms (newsletter signup)
- **Hosting:** Netlify (`@netlify/plugin-nextjs`)

## Project structure

```
twdy-site/
├── app/
│   ├── layout.tsx            # Root layout (header, footer, fonts)
│   ├── globals.css           # Tailwind + design tokens + legacy section styles
│   ├── page.tsx              # Home (full single-page experience)
│   ├── talent/page.tsx       # /talent
│   ├── services/page.tsx     # /services
│   ├── about/page.tsx        # /about
│   ├── news/page.tsx         # /news
│   └── contact/page.tsx      # /contact
├── components/
│   ├── site-header.tsx       # Sticky 5-tab nav (Talent, Services, About, News, Contact)
│   ├── site-footer.tsx
│   ├── page-hero.tsx         # Reusable page header
│   ├── icons/instagram-icon.tsx
│   └── home/
│       ├── hero-video.tsx    # Autoplaying intro video w/ scroll behavior
│       ├── creators-showcase.tsx  # Rotating creator cards
│       └── signup-form.tsx   # Netlify-backed newsletter form
├── public/
│   ├── images/               # Creator/talent photos
│   ├── videos/               # Hero/logo videos
│   ├── logo-white.png
│   ├── logo-grey.png
│   └── __forms.html          # Stub so Netlify can detect the React form
├── netlify.toml              # Build config + @netlify/plugin-nextjs
├── next.config.mjs
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deployment (Netlify)

`netlify.toml` is already configured. Netlify will:

1. Run `npm run build`
2. Use `@netlify/plugin-nextjs` to serve the App Router output
3. Detect the `newsletter` form via `public/__forms.html`

## Roadmap

- Flesh out `/talent`, `/services`, `/about`, `/news`, `/contact` content
- Move section styles from `globals.css` to per-component Tailwind utilities
- Add a CMS or MDX for `/news`

## Contact

For inquiries: miles@twdyagency.com

---

© 2026 TWDY Agency LLC. All rights reserved.
