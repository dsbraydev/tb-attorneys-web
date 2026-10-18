import { InsightCard } from "@/components/sections/InsightCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { insightPosts } from "@/content/insight";

export function InsightFeature() {
  return (
    <section className="pb-[var(--space-80)]">
      <div className="container-main">
        <div className="mb-[var(--space-80)] h-0 w-full border-b border-[rgba(183,179,162,0.8)]" />
        <div className="grid grid-cols-2 items-start gap-8 tablet:flex tablet:flex-col tablet:gap-7">
          <Reveal className="sticky top-[120px] flex flex-col items-start gap-6 tablet:static">
            <SectionLabel>Tips from Tim</SectionLabel>
            <h2 className="heading-4 max-w-[75%] phone:max-w-full">
              Explore our library of property-related legal topics
            </h2>
            <ButtonLink href="/insight">All Stories</ButtonLink>
          </Reveal>
          <div className="flex w-full flex-col gap-8">
            {insightPosts.map((post) => (
              <Reveal key={post.slug}>
                <InsightCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
