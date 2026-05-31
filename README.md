# Bildung

Educational React app: students learn by exploring how the UI they use is built.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · React Router

**Design:** [Positivus (Figma)](https://www.figma.com/design/nReuPBlPBFer26cV52SINr/Positivus-Landing-Page-Design--Community-?node-id=330-762) + [blocks.cloud](https://blocks.cloud/) spacing clarity

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) → **Style guide** for the design system.

## Where to look first

| Goal | File |
|------|------|
| Colors & type scale | `src/styles/tokens.css` |
| Buttons, cards, inputs | `src/components/ui/` |
| Live component gallery | `src/pages/StyleGuidePage.tsx` |
| Routes | `src/app/routes.tsx` |
| Full folder map | `docs/PROJECT_STRUCTURE.md` |

## Scripts

- `npm run dev` — local development at http://localhost:5173 (reuses the port; stops any previous dev server first)
- `npm run build` — production build
- `npm run preview` — preview production build
