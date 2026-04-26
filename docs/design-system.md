# Design System Extraction

These tokens were inferred from the exported reference frame in `public/assets/reference.png` because direct Figma inspect data was not locally available.

## Palette

- `--color-bg`: `#f7a51a` for the full-page orange field
- `--color-surface`: `#f7efe4` for the large framed panels
- `--color-ink`: `#242424` for body copy and illustration outlines
- `--color-outline`: `#000000` for borders and hard shadows
- `--color-display`: `#ffd21e` for the oversized masthead
- `--color-accent`: `#ff6a57` for labels and callout chips
- `--color-highlight`: `#ffb255` for brush-style text emphasis
- `--color-paper`: `#fffdf7` for inverse buttons and light badges

## Typography Roles

- Display: ultra-heavy rounded grotesk feel, approximated with `Arial Black` and strong layered shadowing
- Headline: bold sans for names and section titles, approximated with `Trebuchet MS`
- UI / body: clean geometric sans for navigation and copy, approximated with `Segoe UI`

## Layout and Component Tokens

- Max content width: `1320px`
- Primary border: `6px solid var(--color-outline)`
- Hard shadow offsets: `8px`, `10px`, and `12px`
- Soft panel radius: `28px`
- Pill radius: `999px`
- Core spacing rhythm: `8px`, `16px`, `24px`, `32px`, `48px`
- Breakpoints:
  - Desktop: `1200px+`
  - Tablet: `768px - 1199px`
  - Mobile: `< 768px`

## Decorative Language

- Repeated `star.png` placements at multiple scales across the full composition
- White dot-grid pattern over the orange backdrop
- Tilted tag shapes with thick outlines and hard shadows
- Hard-framed cards with flat fills, sharp contrast, and visible offset depth
