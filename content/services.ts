export type ServiceIcon = "transfer" | "review" | "sectional" | "process";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: ServiceIcon;
  image: string;
  imagePosition?: string;
};

// The four services shown on the Webflow home page. The Webflow /services page and CMS still
// listed the template's consulting services (Strategy Development, Financial Consulting, ...);
// both pages now use these.
export const services: Service[] = [
  {
    slug: "transfer-of-property",
    title: "Transfer of Property",
    summary:
      "Full legal management of residential property transfers, including compliance, drafting, and registration at the Deeds Office.",
    icon: "transfer",
    image: "/images/service-strategy.jpg",
  },
  {
    slug: "sale-agreement-review",
    title: "Sale Agreement Review",
    summary:
      "We review sale agreements before signature to identify risks, missing clauses, and compliance issues that could delay or derail your transfer.",
    icon: "review",
    image: "/images/service-tab-2.avif",
  },
  {
    slug: "township-sectional-title-estate-transfers",
    title: "Township establishment, Sectional Title & Estate Transfers",
    summary:
      "Specialist handling of Township establishment, HOA requirements, levy clearances, exclusive use areas, state compliance requirements, VAT property transactions.",
    icon: "sectional",
    image: "/images/service-tab-3.jpg",
  },
  {
    slug: "property-transfer-process-optimization",
    title: "Property Transfer Process Optimization",
    // TODO(content): Webflow still had template copy here ("We analyze your goals, audience, and market trends…").
    summary:
      "We analyze your goals, audience, and market trends to design smart, customized strategies that drive growth, boost performance, and give your brand a competitive edge.",
    icon: "process",
    image: "/images/service-tab-4.avif",
    imagePosition: "50% 50%",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
