# TB Attorneys

Website for Tim Boshoff Inc, property transfer attorneys. It replaces the Webflow site (`tim-boshoff-inc.design.webflow.com`) and is a close port of that design.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command                             | What it does                                                                                         |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `pnpm lint`                         | ESLint                                                                                               |
| `pnpm typecheck`                    | Generates route types and runs `tsc --noEmit`                                                        |
| `pnpm format` / `pnpm format:check` | Prettier, including Tailwind class sorting (MDX files are excluded: Prettier corrupts MDX 3)         |
| `pnpm test`                         | Vitest unit tests (`lib/**/*.test.ts`)                                                               |
| `pnpm test:e2e`                     | Playwright smoke tests against a production build (run `pnpm exec playwright install chromium` once) |

CI (`.github/workflows/ci.yml`) runs all of these on every pull request, plus a Lighthouse budget (`lighthouserc.json`) on `/` and `/pricing`.

## Images and video

Keep source images at most 2400px on the long edge and in WebP/AVIF. `next/image` resizes them per device, but large sources bloat the repo. The hero video should stay at about 1MB (720p, no audio). Example commands:

```bash
magick input.jpg -resize "2400x2400>" -strip -quality 78 public/images/output.webp
ffmpeg -i input.mp4 -an -vf scale=1280:-2 -c:v libx264 -preset slow -crf 30 -movflags +faststart public/video/hero.mp4
```

## Where things live

- `app/`: routes (Home, About, Services, Insight, Transfer Cost Calculator at `/pricing`, Contact, FAQ, Privacy Policy). Keep them thin.
- `components/sections/`: page sections. `components/layout/`: navbar and footer. `components/ui/`: buttons, icons, labels, scroll reveal.
- `content/`: all site copy. `site.ts` (contact details, nav), `services.ts`, `testimonials.ts`, `faqs.ts`, `insight/` (post index + MDX bodies), `services/` and `legal/` (MDX).
- `lib/transfer-costs.ts`: transfer duty and fee calculation. `lib/forms.ts`: form server actions (currently stubbed).
- `app/globals.css`: design tokens and the type scale, mirrored from Webflow. Breakpoint variants are desktop-first, like Webflow: `tablet:` (≤991px), `landscape:` (≤767px), `phone:` (≤479px).

## Docs

- [docs/webflow-capture.md](docs/webflow-capture.md): what the Webflow site contained (tokens, page structure, assets).
- [docs/content-todo.md](docs/content-todo.md): **content Tim must supply before launch**, plus every deliberate deviation from the Webflow design.
