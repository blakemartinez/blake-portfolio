# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
```

No test suite or linter is configured.

## Commits

Always include this co-author trailer in commit messages:

```
Co-Authored-By: Blake's Claude Minion <blakes-claude-minion@noreply.local>
```

Before committing to `main`, perform a staff engineer code review: check for correctness, style consistency with the existing codebase, and any obvious bugs or issues, then fix anything found before committing.

## Architecture

This is an [Astro](https://astro.build) static site (v3) — a personal portfolio deployed at blake-blakemartinez.vercel.app.

**Pages** (`src/pages/`):
- `index.astro` — Home page, uses `BaseLayout`
- `keebs.astro` — Keyboard showcase with a 3D `<model-viewer>` rendering `keebRender.gltf` from `public/`
- `posts/resume.md` — Resume rendered via `MarkdownResumeLayout`

**Layouts** (`src/layouts/`):
- `BaseLayout.astro` — Wraps most pages; includes `Header`, `Footer`, `Hobbies`, the typewriter title animation, and imports `menu.js`
- `MarkdownResumeLayout.astro` — Used by `resume.md`; renders frontmatter fields (`author`, `pubDate`) and social links

**Key Components** (`src/components/`):
- `Header.astro` → `Hamburger.astro` + `Navigation.astro` (links: Home `/`, Resume `/posts/resume`)
- `Hobbies.astro` — Hobby icons displayed on the home page
- `MyKeebs.astro` — Pinterest iframe embeds for keyboard photos (currently commented out in `keebs.astro`)
- `Socials.astro`, `Github.astro`, `LinkedIn.astro` — Social link components

**Styling** (`src/styles/global.css`):
- Single global stylesheet; monospace font, mauve/rose color palette (`#b8a7aa` bg, `#ebe6ea` light, `#48373d` dark)
- Responsive nav: hamburger menu below 636px, inline links above
- Typewriter CSS animation on the home page title

**Scripts** (`src/scripts/menu.js`):
- Toggles `.expanded` class on `.nav-links` when `.hamburger` is clicked; imported via Astro's `<script>` tag in layouts

**Static assets** (`public/`):
- `keebRender.gltf` + `poster.webp` — 3D keyboard model used on the keebs page
- Favicon files live in `public/favicon/`
