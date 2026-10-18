# Webflow capture — Tim Boshoff Inc

Captured 2026-10-18 from the Webflow Designer (`tim-boshoff-inc.design.webflow.com`, site preview mode, Desktop ≥992px base). The site was never published to `*.webflow.io`. It is built on the **"Lexence Partners"** template by Muji Templates, and most pages still carry template copy.

Assets were downloaded from `cdn.prod.website-files.com` into `public/` (see "Assets" below).

## Design tokens (from the site stylesheet)

| Token | Value | Notes |
| --- | --- | --- |
| Heading font | Be Vietnam Pro | `--font--main` |
| Body font | Inter | `--font--secondary` |
| Page background | `#f2f2f2` | `body` |
| Navy (`light-green` var) | `#0e1a2b` | primary button bg, success states |
| Navy deep | `#0c1727` | `.navbar.dark` |
| Gold (`light-oliv` var) | `#c9a24d` | accent headings, active service tab, insight button |
| Ink (`black-100`) | `#272727` | body text |
| Ink 2 (`black-200`) | `#444` | secondary text |
| Grey 500/400/300/200/100/50 | `#606060` `#828282` `#acacac` `#e3e3e3` `#eee` `#f9f9f9` | |
| Cream card | `#faf8f4` (border `#f2f0ec`) | stats cards |
| Oliv / grey-oliv / light-brown | `#acb58c` `#d9dbd2` `#b7b3a2` | template accents (borders, form cards) |
| Green / red | `#102d23` `#fa4149` | stats number colour / errors |
| `black` / `black-50` vars | **white** | recoloured template: "black" utilities now render white |

Container: max 1800px, side padding 32 / 24 (≤991) / 16 (≤479).
Breakpoints (desktop-first): 991, 767, 479.

### Type scale (desktop → ≤991 → ≤767; ≤479 overrides noted)

| Style | Desktop | ≤991 | ≤767 |
| --- | --- | --- | --- |
| h1 | 120/112% / -5.5px / 500 | 96/116% | 48/116% / -4px (≤479 `.heading-1` 28px) |
| h2 | 96/120% / -4px / 500 | same | 48/130% / -3px |
| h3 | 64/130% / -3px / 400 | same | 30/130% |
| h4 | 48/130% / -2.75px / 400 | same | 28/140% / -2px |
| h5 | 40/150% / -3px | same | 28/150% / -2px |
| h6 | 32/110% / -2px | same | 24/110% |
| text-large | 20/140% / -1px (Inter) | same | 16 |
| text-regular | 16/140% / -0.75px | same | 14 |
| text-small | 14/150% / -0.5px | same | 12 |
| label-small | 14/150% / -0.5px / 500 uppercase | | |

Section spacing vars: 160/120/96/80/64/48 → (≤991) 120/80/72/64/64/48 → (≤767) 80/64/64/56/64/48 → (≤479) 64/48/48/48/48/48. Hero top padding 168 → 120 (≤767).

## Global chrome

- **Navbar** (visible one is `.navbar.black-100`): fixed, `rgba(0,0,0,.08)` + `blur(3px)`, bottom border `0.5px rgba(183,179,162,.4)`, padding 16px. Logo = signature SVG (85×50). Links white (`#f9f9f9`), current link underlined (0.25px, offset 6px). Right: cart icon "3" (template, **removed**) + outline "Schedule a consultation" button. ≤991: hamburger, dropdown panel with gold/oliv border, radius 16, white bg (`black-50`), links grey-50 (!). A second `.navbar.dark` exists but renders 0px tall (broken).
- **Footer**: `.footer` bg = `black-50` = **white**, text `#e3e3e3` → near-invisible in Webflow. Logo (template "White Logo"), newsletter input, link columns Navigation / Company / Resources, giant "Lexence Partners™" marquee SVG, © 2025 Lexence Partners, socials pointing at facebook.com etc., template description paragraph.
- **Buttons**: `.button-primary` navy bg, white text, radius 3, padding 14×24 (16×24 ≤991, 12×16 ≤767), min-width 180, chevron icon on the left that slides on hover, text duplicated for a vertical text-swap hover. Outline variant: 1px navy border, transparent, text `#eee`, used on dark backgrounds.
- **Link button**: text + arrow, gap 8 → 10 on hover.
- **Section label** pill: 1px border `rgba(18,18,18,.4)`, radius 24, padding 8×16, `label-small` uppercase.
- Scroll interactions: most headings/blocks fade in on scroll (IX2, opacity). The CTA heading sits `#eee` on `#acacac`.

## Pages

### Home `/`
1. **Hero** — 100svh, background video (Table Mountain, Artlist — note the preview has an **"Artlist" watermark**) with `rgba(0,0,0,.44)` multiply overlay. 8-col grid, 70svh tall, aligned to bottom. Heading (h3 64px white, "Property Transfers made Clear, Fast & Secure") cols 1–6 row 1; text-large paragraph + white signature PNG cols 6–8 row 2; buttons cols 1–3 row 3 ("Send Agreement for Review" → /contact-us; outline "Estimate Transfer Costs" → /services).
2. **Intro** — centred label "Strategic. Trustworthy. Modern." (with icon), gold h4 "Why Clients Choose Tim Boshoff Inc.", paragraph, buttons "Discover Our Services" + link "Schedule a 15 Minute Free Consulation". Below: rounded-24 image, 80svh (min 738).
3. **Stats** — h4 + grey paragraph (template: "Unlocking Peak Performance…") in 1.75fr/1fr grid; 3-col card grid: [Direct Attorney Access + photo][image][Millions in Property Value Transferred] / [500+ Successful Property Transfers][wide image]. Cards cream, radius 24, padding 32; numbers h5-size Be Vietnam, `#102d23`.
4. **Logos** — "Trusted by 100+ Companies" + 4 template Logoipsum SVGs (**placeholders**).
5. **Services tabs** — gold h4 "Explore our comprehensive service offerings" + "Our Services" button; 4 tab cards (white, radius 32, padding 39/80/40/40; active = gold bg) with icon + 28px title + description; right: image 720px tall radius 32 with "view service" button bottom-right. Tab 4 description is template copy.
6. **CTA** — bg `#acacac`, 2 cols: heading "Your Property Is Too Important to Leave to Chance" / paragraph + two buttons.
7. Stray "Button Primary" link (template, **removed**).
8. **Testimonials** — gold h4 "Real feedback from buyers and sellers who trusted us with their property transactions." + "Discover how we've helped our clients ." Slider of 6 cards (656px, `#f9f9f9`, radius 16, 5 stars, quote, avatar + name + role, divider, Excellence icon), prev/next round buttons + dots.
9. **Insight** — divider, sticky left "Tips from Tim" label + h4 "Explore our liabary of property relate legal topics" + "All Stories"; right list of 4 cards (400px image radius 16, hover overlay with gold "Read Story", title 24px + tag pills).
10. **FAQ** — 2-col grid, sticky "FAQs" label + h4 "Curious About Something?" + "More FAQs"; accordion items `#f9f9f9` radius 16 padding 24, 22px title, plus/minus icon. 2 real + 4 template Q&As.
11. **CTA 2** — 650px image ("CTA 2") with centred h3 "Ready to Write Your Success Story?" + "Contact Us Today".

### About `/about`
Hero (h1 "Your *trusted partner* in property transactions.", template paragraph "We help businesses navigate…", buttons) → full-width image 810px (`About Hero - Image.jpg`) → logos → **Values** (label "Our values", h4 "The Values Behind Every Decision", template copy mentioning Lexence Partners, 3 items Integrity/Excellence/Collaboration with icons) → CTA → **Team slider** (8 fictional template people, **dropped**) → testimonials ("Our Clients Say It Best") → FAQ → CTA 2.

### Services `/services`
Hero 100svh with `services - hero image.avif` + olive multiply overlay; h1 "Tailored Solutions *for property* Transfer" + real paragraph ("We help sellers, buyers and estate agents…") + "Schedule a consultation". Services tabs (**template titles**: Strategy Development, Financial Consulting, Legal Consulting, Business Process Optimization) → CTA → Insight → FAQ ("Frequently asked?").

### Service detail `/services/[slug]`
Template CMS items (strategy-development, financial-consulting, legal-consulting, business-process-optimization) with template SaaS/marketing copy. Same layout as an insight article.

### Insight `/insight`
Label "blog", h1 "Our Stories", template paragraph; filter pills ALL / Legal / Finance / Strategy; 2-col grid of 6 cards (4 real titles + 2 template posts) → FAQ.

### Insight article `/insight/[slug]`
Centred tags + h1 title, 16:9 image (radius 32, max 600px) with gold overlay → 2-col: rich text (h6 headings, figure, list, blockquote) + sticky side card "Schedule A Consultation" (oliv-tinted, radius 30) with email input → "Latest" 2-col grid. **All 4 article bodies are identical template copy** (a SaaS restructuring case study); only titles, tags and cover images are real.

### "Transfer Cost Calculator" `/pricing`
**Not a calculator** — the template "Our Plans" page ($99 / $299 / $499 per month consulting plans) → FAQ.

### Contact `/contact-us`
h2 "Get in touch" + template paragraph about a task-management tool; form Name / Email / Phone / Company / Message; three info cards (Phone +1 928 8920 178, hi@lexencepartners.com, "Locate us" → a map in India) — **all template**.

### FAQ `/faq`
h1 "FAQ", 8 template Q&As.

### Privacy policy `/privacy-policy`
Template policy for "Lexence Partners, New York" dated 3 March 2025.

## Assets (in `public/`)

- `video/hero.{mp4,webm}`, `video/hero-poster.jpg`
- `images/signature-logo.svg` (nav), `images/signature-white.png` (hero)
- `images/intro.jpg`, `about-hero.jpg`, `services-hero.avif`, `cta.avif`
- `images/stats-on-call.jpg`, `stats-2.jpg`, `stats-success.jpg`
- `images/service-strategy.jpg`, `service-tab-{2..4}`
- `images/logo-5{1,2,4,5}.svg` (template Logoipsum)
- `images/testimonials/*` (6 real client avatars)
- `images/insight/*` (4 card images + 2 article heroes)
- `icons/*` (star, arrows, values, contact, label icon)
