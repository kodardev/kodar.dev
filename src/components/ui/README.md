# UI components

Each subfolder is one **primitive** with a single responsibility.

| Folder | Purpose |
|--------|---------|
| `Button/` | Actions — primary, secondary, accent with 3D elevation |
| `Badge/` | Small labels on cards |
| `Card/` | Elevated surfaces (white / green / dark) with hard offset shadow |
| `Input/` | Form fields with label & hint |
| `SectionLabel/` | Green highlight chip for section titles |

Import from `@/components/ui` in pages. Change tokens in `src/styles/tokens.css` first — components read theme utilities, not hard-coded hex values.
