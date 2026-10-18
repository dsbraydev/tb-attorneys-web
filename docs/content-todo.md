# Content to-do before launch

The Webflow site was built on the "Lexence Partners" template, and much of the copy was never replaced. The port keeps the layout and Tim's real content. Everything below needs Tim's input. Search the code for `TODO(content)` to find each spot.

## Blocking (must be done before going live)

- [ ] **Contact details**: phone, email, office address and a map link (`content/site.ts`). The Webflow contact cards were the template's (US phone, `hi@lexencepartners.com`, a map in India). The contact cards and footer contact column stay hidden until these are filled in.
- [ ] **Privacy policy**: `content/legal/privacy-policy.mdx` is a draft adapted from the template's policy (which was for "Lexence Partners, New York"). It needs a POPIA review, an Information Officer, an effective date and contact details.
- [ ] **Transfer cost calculator** (`lib/transfer-costs.ts`):
  - Confirm the SARS transfer duty brackets (currently the table effective 1 April 2025) are still current.
  - Optionally supply Tim's conveyancing fee tariff, Deeds Office fees and disbursements (`feeSchedule`). Until then the calculator shows transfer duty only and says fees are quoted per transaction.
  - Note: Webflow's `/pricing` page never had a calculator. It was the template's "Our Plans" ($99/$299/$499 a month) page.
- [ ] **Insight articles**: all four Webflow articles had the same template body (a SaaS case study). The MDX files in `content/insight/` are stubs that need Tim's articles.
- [ ] **Service pages**: the Webflow service detail pages were template marketing copy. The stubs in `content/services/` need real descriptions.
- [ ] **Production domain**: set `NEXT_PUBLIC_SITE_URL` (used for metadata, sitemap and robots). A Vercel production build fails without it; previews use their own Vercel URL.
- [ ] **Forms**: there is no delivery provider yet, so the contact form, newsletter and "Schedule a consultation" cards show visitors an error asking them to make contact directly (nothing is sent or logged with personal details). Choose a provider (e.g. Resend) and implement `deliver` in `lib/forms.ts`. `FORMS_DRY_RUN=true` simulates success for local testing.
- [ ] **Hero video licence**: the Table Mountain clip is from Artlist and the Webflow copy shows an **"Artlist" watermark**, which suggests it's the preview file. Download the licensed, unwatermarked file and replace `public/video/hero.{mp4,webm}`.

## Template copy still visible (replace or approve)

- [ ] Home stats paragraph: "Unlocking Peak Performance: A Comprehensive Visual Guide to Key Metrics…" (`components/sections/HomeStats.tsx`).
- [ ] "Trusted by 100+ Companies" logo strip uses template "Logoipsum" placeholder logos (`components/sections/LogoStrip.tsx`). Supply real logos or drop the section.
- [ ] Service 4 "Property Transfer Process Optimization" summary is template copy ("…give your brand a competitive edge") (`content/services.ts`).
- [ ] About hero paragraph: "We help businesses navigate complexity with strategic, legal, and financial expertise…" (`app/about/page.tsx`).
- [ ] Values descriptions mention "candidate placements" (`components/sections/ValuesSection.tsx`).
- [ ] FAQs: only the two real questions were kept. The rest were about the Webflow template itself. Add more in `content/faqs.ts`.
- [ ] Team: the Webflow About page had a slider of eight fictional template people. It was dropped and can return once Tim provides real team members and photos.
- [ ] Social links: the Webflow ones pointed at facebook.com, instagram.com and so on. They are hidden until real profile URLs are added (`content/site.ts`).

## Copy written during the port (please approve)

- Insight page intro: "Practical guidance on buying, selling and transferring property, from the attorney who handles it every day." (replaced a template line about business case studies).
- Contact page intro: "Send us your sale agreement for review, or tell us about your transaction and we will get back to you." (replaced a template line about a task-management tool).
- Schedule card text: "Leave your email and we will contact you to book a free 15 minute consultation."
- Calculator labels, notes and the "Get an Exact Quote" button.
- Insight and service article stubs.

## Spelling fixes made during the port

- "liabary of property relate legal topics" → "library of property-related legal topics"
- "Consulation" → "Consultation"
- "The emergance of Tokenized…" → "The emergence of Tokenized…"
- "Tips from Tim: Complicance certificate needed from property transfers" → "…Compliance certificates needed for property transfers"
- "conditinos" → "conditions" (Services hero)
- Not changed, please confirm: "IF Property solution: **duets** and town planning legalities" (was "duties" intended?), and the client name "R Boswel" (the photo file is named "R Boswell").

## Deliberate deviations from the Webflow design

These fix bugs in the Webflow build (mostly caused by the template's recoloured colour variables), so the result is readable:

- **Footer**: Webflow rendered light-grey text on a white background. It now uses the navy brand colour.
- **Inner-page navbar**: Webflow showed only the current link (the others were dark on dark) and the logo failed to load. All links are now white on navy, with the signature logo.
- **Home navbar** turns solid navy once the hero has scrolled away. Before that, its white links disappeared over the light sections.
- **About hero**: "trusted partner" now renders in gold. In Webflow it was white on the light background.
- **Links**: "Estimate Transfer Costs" now goes to the calculator (it pointed at /services), and "Schedule a Free Consultation" goes to /contact-us (it pointed at /services).
- **Services page tabs** now show Tim's four real services. The Webflow /services page still listed the template's consulting services.
- **Removed**: cart icon ("3"), stray "Button Primary" link, "Designed by Muzammil / Muji Templates" credit, the Mujiflow help badge, template footer description and "Lexence Partners" marquee (replaced with "Tim Boshoff Inc"), and the Resources footer column (style guide, licences, changelog, instructions).
- **CTA buttons** wrap at tablet width instead of running off-screen.
- **Accessibility contrast fixes** (WCAG AA): the "Your Property Is Too Important…" band is navy instead of grey `#acacac` (its `#eee` heading was 1.9:1). The active service tab uses navy text on gold instead of near-white (2.3:1). Outline buttons use a translucent white border so they show on dark backgrounds.
- **Hero video** loads after the page and only on screens wider than 767px, and not on data-saver or reduced-motion. Phones see the still poster.
- **Insight article and service URLs** use readable slugs (e.g. `/insight/tips-from-tim-building-plans`) instead of the template's (`/insight/restructuring-for-scalable-growth`). The Webflow site was never published, so no redirects were added.
