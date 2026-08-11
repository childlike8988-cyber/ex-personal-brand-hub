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

Root-hosted static deployment is supported. For GitHub Pages project sites (`https://<account>.github.io/<repository>/`), configure `basePath` and `assetPrefix` after the final repository name is known, and update root-relative demo asset URLs to use that same path. Do not hard-code a repository path before that decision.

## Demo reference material

`docs/ui-reference/` contains development-only visual references. They are not production assets and are not referenced by the application bundle.
