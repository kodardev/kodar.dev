# Project structure (for students)

This app is organized so you can **learn by reading the code you run**.

## Folder map

```
src/
├── app/              # Application shell: routing (where URLs go)
├── pages/            # Full screens (Home, Style Guide)
├── components/
│   ├── ui/           # Design system primitives (Button, Card, …)
│   ├── layout/       # Page chrome (header, footer, logo, container)
│   └── learn/        # Teaching helpers (file path callouts)
├── styles/
│   └── tokens.css    # Design tokens → Tailwind theme
├── lib/
│   └── cn.ts         # Class name helper (clsx + tailwind-merge)
└── index.css         # Global styles + font import
```

## Suggested learning path

1. **`src/styles/tokens.css`** — Change `--color-accent` and reload.
2. **`src/components/ui/Button/Button.tsx`** — See how `variant` maps to classes.
3. **`src/pages/StyleGuidePage.tsx`** — See how components compose on a page.
4. **`src/app/routes.tsx`** — Add a new route when you build new pages.

## Design references

- **Kodar brand palette** — see `src/styles/tokens.css` (Black, Dusty Olive, Muted Teal, Tea Green, Celadon).
- [blocks.cloud](https://blocks.cloud/) — generous section spacing, 3D elevation, and clear hierarchy.

## Commands

```bash
npm install
npm run dev
npm run build
```
