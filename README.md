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

The custom-domain production build uses the root path (`NEXT_PUBLIC_BASE_PATH` unset), so Next.js static assets and routes resolve from `/`. The shared `src/lib/assetPath.ts` helper still supports an explicit base path for isolated legacy builds, but the GitHub Pages production workflow must not set one for `brand.excreatorstudio.com`.

## Demo reference material

`docs/ui-reference/` contains development-only visual references. They are not production assets and are not referenced by the application bundle.

## Related Projects

- [E.X Creator Studio](https://excreatorstudio.com/) — AI Creative Center × Creator Academy
