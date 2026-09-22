# i5dr0id.github.io

Personal site of Israel Ugbodaga — software engineer, Lagos. Live at https://i5dr0id.github.io.

Built with Nuxt 4, Vue 3 and Tailwind CSS v4, statically generated and deployed to GitHub Pages
by the workflow in `.github/workflows/deploy.yml`. Fonts are self-hosted at build time by `@nuxt/fonts`.

## Where things live

| Path | What |
|---|---|
| `app/data/profile.ts` | Name, links, headline, intro, and the hero diff |
| `app/data/work.ts` | Case studies (one page each under `/work/<slug>`) and the shorter "Also" list |
| `app/data/experience.ts` | The timeline |
| `app/data/skills.ts` | The skills table |
| `app/assets/css/main.css` | Design tokens for light and dark, diff styling, the one reveal animation |
| `app/pages/index.vue` | Home |
| `app/pages/work/[slug].vue` | Case-study template |

Editing content means editing a `.ts` file under `app/data/`; no component changes needed.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm generate   # static output in .output/public
pnpm preview
```

## Deploy

Push to `main`. The workflow builds the site and publishes `.output/public` through GitHub Pages
(the repository's Pages source must be set to **GitHub Actions**, not a branch).
