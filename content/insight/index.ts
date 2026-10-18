export type InsightPost = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  heroImage: string;
};

// Order matches the Webflow CMS list. The Webflow article bodies were all identical template copy,
// so each MDX body is a stub until Tim supplies the real article.
export const insightPosts: InsightPost[] = [
  {
    slug: "tips-from-tim-building-plans",
    title: "Tips from Tim: Building plans",
    tags: ["Law", "Town planning"],
    image: "/images/insight/building-plans.webp",
    heroImage: "/images/insight/building-plans-hero.webp",
  },
  {
    slug: "if-property-solution-duets-and-town-planning",
    title: "IF Property solution: duets and town planning legalities",
    tags: ["Legal", "Strategy"],
    image: "/images/insight/duets-town-planning.webp",
    heroImage: "/images/insight/duets-town-planning.webp",
  },
  {
    slug: "tokenized-property-transactions",
    title: "The emergence of Tokenized property transactions",
    tags: ["Finance"],
    image: "/images/insight/tokenized-property.webp",
    heroImage: "/images/insight/tokenized-property.webp",
  },
  {
    slug: "compliance-certificates-for-property-transfers",
    title: "Tips from Tim: Compliance certificates needed for property transfers",
    tags: ["Legal", "Conveyancing"],
    image: "/images/insight/compliance-certificates.webp",
    heroImage: "/images/insight/compliance-certificates-hero.webp",
  },
];

export function getInsightPost(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}

// The filter categories from the Webflow Insight page.
export const insightCategories = ["Legal", "Finance", "Strategy"];
