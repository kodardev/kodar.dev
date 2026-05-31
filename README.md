# Kodar

Educational React app: students learn by exploring how the UI they use is built.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · React Router

**Design:** Kodar green palette + [blocks.cloud](https://blocks.cloud/) elevation & spacing

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) → **Style guide** for the design system.

## Where to look first

| Goal | File |
|------|------|
| Brand logo | `src/components/layout/Logo.tsx` · `src/assets/kodar.svg` |
| Colors & type scale | `src/styles/tokens.css` |
| Buttons, cards, inputs | `src/components/ui/` |
| Live component gallery | `src/pages/StyleGuidePage.tsx` |
| Routes | `src/app/routes.tsx` |
| Full folder map | `docs/PROJECT_STRUCTURE.md` |

## Scripts

- `npm run dev` — local development at http://localhost:5173 (reuses the port; stops any previous dev server first)
- `npm run build` — production build
- `npm run preview` — preview production build
