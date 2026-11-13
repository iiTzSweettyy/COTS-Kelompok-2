# VOGIA — E-commerce Front-end

Front-end for **VOGIA**, a fictional fashion & lifestyle brand. Built as the
web programming course project (COTS / Kelompok 2).

## Tech Stack

- **React 19** + **TypeScript** (strict, `tsc -b`)
- **Vite 8** dev server & bundler
- **Tailwind CSS v4** (`@tailwindcss/vite`, design tokens in `src/index.css`)
- **React Router v7** for client-side routing
- **Google Fonts** — Playfair Display (headings) + Inter (body), with offline fallbacks

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
npm run lint     # eslint .
```

## Routes

| Route              | Page                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| `/`                | Home — hero, featured pieces, craftsmanship, collections, membership |
| `/shop`            | Product grid with category filter and search (`?category=`, `?q=`)   |
| `/product/:slug`   | Product detail — gallery, colour/size, quantity, add to bag          |
| `/#story` `/#collections` `/#join` | In-page anchors from the header navigation              |

## Project Structure

```
src/
  App.tsx                    # route table + scroll manager
  components/
    layout/Header.tsx        # logo, nav, search, account, cart badge
    layout/Footer.tsx        # newsletter, link columns, socials
    sections/                # Hero, FeaturedPieces, Craftsmanship,
                             # Collections, InnerCircle
    Placeholder.tsx          # generated SVG/gradient artwork
    ProductCard.tsx          # reusable product card
    icons.tsx                # inline SVG icon set
  data/products.ts           # catalogue data (9 products, 3 categories)
  pages/                     # Home, Shop, ProductDetail
  store/                     # cart context (in-memory)
```

## Notes

- **Images are placeholders.** Every photo slot renders a generated
  SVG/gradient via `src/components/Placeholder.tsx`, so the app has zero
  external image dependencies. Replace a slot with a real `<img>` when final
  photography is ready.
- **Cart state is in-memory** (React context) and resets on page refresh.
- Product copy, prices and categories live in `src/data/products.ts`.
