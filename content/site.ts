export type NavLink = { label: string; href: string };

// Used for metadataBase, sitemap.xml and robots.txt, which are baked into the static build.
// TODO(content): set NEXT_PUBLIC_SITE_URL to the production domain once it is chosen.
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  // A production deploy must not fall back to a guessed URL.
  if (process.env.VERCEL_ENV === "production") {
    throw new Error("Set NEXT_PUBLIC_SITE_URL to the production domain before deploying.");
  }
  // Vercel previews get their own URL; everything else (local, CI) uses localhost.
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Tim Boshoff Inc",
  url: siteUrl(),
  description:
    "Property transfer attorneys. Before you sign, get your sale agreement reviewed by a property attorney. We protect your interests, guide you through the legal process, and manage the transfer with clarity and care.",
  // TODO(content): Tim's real contact details. Contact cards and footer links are hidden while these are empty.
  contact: {
    phone: "",
    email: "",
    address: "",
    mapUrl: "",
  },
  // TODO(content): Tim's real social profiles. Icons are hidden while a URL is empty.
  socials: {
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
    youtube: "",
  },
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Insight", href: "/insight" },
  { label: "Services", href: "/services" },
  { label: "Transfer Cost Calculator", href: "/pricing" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Transfer Cost Calculator", href: "/pricing" },
      { label: "Services", href: "/services" },
      { label: "Contact us", href: "/contact-us" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Insight", href: "/insight" },
      { label: "FAQs", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];
