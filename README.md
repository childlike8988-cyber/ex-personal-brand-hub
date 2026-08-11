# E.X Personal Brand Hub

A showcase platform for personal brand websites with switchable industry profiles.

## Current profiles

- Realty
- Generic Business / Food Demo

## Current features

- Profile switching
- Personal digital card
- Featured listings / products
- Mortgage calculator
- Booking demo
- Responsive UI
- Detail modal
- Optional modules showcase

## Current status

**Showcase MVP / Demo**

No production backend, CMS, login, payment, or real booking integration yet.
Contact information, QR code, avatar, and listing/product content are placeholders for demonstration only.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Static export and GitHub Pages

The project uses Next.js static export and writes the production site to `out/` after `npm run build`.

GitHub Actions builds this project site with `NEXT_PUBLIC_BASE_PATH=/ex-personal-brand-hub`, which configures Next.js `basePath` and `assetPrefix`. Demo image URLs use `src/lib/assetPath.ts`, so local development remains at `/` while the Pages build serves assets from the repository path.

## Demo reference material

`docs/ui-reference/` contains development-only visual references. They are not production assets and are not referenced by the application bundle.

## Related Projects

- [E.X Creator Studio](https://childlike8988-cyber.github.io/ex-learning-knowledge-hub/) — AI Creative Center × Creator Academy
