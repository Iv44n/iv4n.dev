# iv4n.dev

Personal site and blog of **Iván Todelano** — backend & distributed systems developer.
Built with [Astro](https://astro.build), bilingual (ES/EN), statically generated and deployed on Vercel.

🔗 **Live:** https://iv4n.dev

## Stack

- **[Astro 6](https://astro.build)** — static output, content collections, view transitions/prefetch
- **[Tailwind CSS 4](https://tailwindcss.com)** (via `@tailwindcss/vite`)
- **MDX** for blog posts + **[Shiki](https://shiki.style)** dual-theme syntax highlighting (`vitesse-light` / `vitesse-dark`)
- **i18n** — Spanish (default, no prefix) and English (`/en`), with `hreflang` + localized RSS
- **[Fontsource](https://fontsource.org)** — Geist Sans + JetBrains Mono (latin subset only)
- **[sharp](https://sharp.pixelplumbing.com)** — build-time generation of OG image and blog hero art
- Deployed with **[@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/)**

## Project structure

```text
src/
├── assets/          # Images processed by Astro (blog hero art, …)
├── components/      # UI components (Header, Footer, BlogActions, …)
├── config/site.ts   # Single source of truth: profile, skills, projects, experience
├── content/blog/    # Blog posts as MDX, split by locale: es/ and en/
├── i18n/            # Locale config, UI strings (locales/) and helpers (utils.ts)
├── layouts/         # BaseLayout + BlogPost
├── pages/           # File-based routes (es at root, en under /en)
├── scripts/         # Client-side TS (reveal.ts)
├── styles/          # global.css (Tailwind theme + prose styles)
├── utils/           # rss.ts, markdown.ts
└── views/           # Page-level composition (HomeView, AboutView, …)
scripts/             # Node build scripts for static assets (sharp)
```

## Commands

| Command             | Action                                                  |
| :------------------ | :------------------------------------------------------ |
| `bun install`       | Install dependencies                                    |
| `bun dev`           | Start the dev server at `localhost:4321`                |
| `bun build`         | Build the production site to `./dist/`                  |
| `bun preview`       | Preview the build locally                               |
| `bun run lint`      | Run ESLint                                              |
| `bun run lint:fix`  | Run ESLint with `--fix`                                 |
| `bun run check`     | Type-check `.astro`/TS with `astro check`               |
| `bun run og`        | Regenerate `public/og.png` + `apple-touch-icon.png`     |
| `bun run blog:hero` | Regenerate the blog hero art in `src/assets/blog/`      |

## Writing a blog post

1. Create an MDX file under `src/content/blog/<lang>/<slug>.mdx` (`<lang>` is `es` or `en`).
2. Add the frontmatter:

   ```yaml
   ---
   title: 'Post title'
   description: 'Short summary used for SEO and the post header.'
   pubDate: '2026-06-15'
   heroImage: '../../../assets/blog/your-image.png' # optional
   lang: es                                          # es | en
   id: your-post-slug                                # shared across translations
   ---
   ```

3. To link a translation, give both the ES and EN versions the **same `id`** — the
   language switcher and `hreflang` tags resolve the alternate URL from it.

## i18n model

- Spanish is the default locale and is served without a prefix (`/`, `/blog`, …).
- English lives under `/en`. UI strings are typed maps in `src/i18n/locales/`.
- Path helpers (`getLocalizedPath`, `useTranslatedPath`) and post helpers live in
  `src/i18n/utils.ts`.

## License

Code is available for reference. Content (blog posts, CV, images) © Iván Todelano.
