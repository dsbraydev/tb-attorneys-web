# TB Attorneys

Website for Tim Boshoff Inc, property transfer attorneys. It replaces the Webflow site (`tim-boshoff-inc.design.webflow.com`) and is a close port of that design.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Where things live

- `app/`: routes (Home, About, Services, Insight, Transfer Cost Calculator at `/pricing`, Contact, FAQ, Privacy Policy). Keep them thin.
- `components/sections/`: page sections. `components/layout/`: navbar and footer. `components/ui/`: buttons, icons, labels, scroll reveal.
- `content/`: all site copy. `site.ts` (contact details, nav), `services.ts`, `testimonials.ts`, `faqs.ts`, `insight/` (post index + MDX bodies), `services/` and `legal/` (MDX).
- `lib/transfer-costs.ts`: transfer duty and fee calculation. `lib/forms.ts`: form server actions (currently stubbed).
- `app/globals.css`: design tokens and the type scale, mirrored from Webflow. Breakpoint variants are desktop-first, like Webflow: `tablet:` (≤991px), `landscape:` (≤767px), `phone:` (≤479px).

## Docs

- [docs/webflow-capture.md](docs/webflow-capture.md): what the Webflow site contained (tokens, page structure, assets).
- [docs/content-todo.md](docs/content-todo.md): **content Tim must supply before launch**, plus every deliberate deviation from the Webflow design.
