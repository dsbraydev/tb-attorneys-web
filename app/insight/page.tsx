import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/FaqSection";
import { InsightGrid } from "@/components/sections/InsightGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { insightCategories, insightPosts } from "@/content/insight";

export const metadata: Metadata = {
  title: "Insight",
  description: "Tips from Tim: property-related legal topics, explained.",
};

export default function InsightPage() {
  return (
    <>
      <section className="pt-[var(--space-hero-top)] pb-[var(--space-80)]">
        <div className="container-main">
          <Reveal className="mb-[var(--title-mb-small)] flex flex-col items-start gap-4">
            <SectionLabel>Tips from Tim</SectionLabel>
            <div className="flex w-1/2 flex-col gap-6 landscape:w-full landscape:gap-4 tablet:w-[72%]">
              <h1 className="heading-1">Our Stories</h1>
              <p className="body-regular text-ink-2">
                Practical guidance on buying, selling and transferring property, from the attorney
                who handles it every day.
              </p>
            </div>
          </Reveal>
          <InsightGrid posts={insightPosts} categories={insightCategories} />
        </div>
      </section>
      <FaqSection />
    </>
  );
}
