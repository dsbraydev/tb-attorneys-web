import Image from "next/image";
import type { ReactNode } from "react";
import { InsightCard } from "@/components/sections/InsightCard";
import { ScheduleCard } from "@/components/sections/ScheduleCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { InsightPost } from "@/content/insight";

// Shared by Insight articles and service pages, matching Webflow's CMS detail template.
export function DetailLayout({
  title,
  tags = [],
  image,
  children,
  related,
}: {
  title: string;
  tags?: string[];
  image: string;
  children: ReactNode;
  related: InsightPost[];
}) {
  return (
    <>
      <section className="pt-[var(--space-hero-top)] pb-[var(--space-80)]">
        <div className="container-main">
          <div className="flex flex-col items-center gap-[var(--space-80)] text-center phone:gap-12">
            <Reveal className="flex flex-col items-center gap-6 landscape:gap-5 phone:gap-4">
              {tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {tags.map((tag) => (
                    <SectionLabel key={tag}>{tag}</SectionLabel>
                  ))}
                </div>
              )}
              <h1 className="heading-1 phone:text-[28px]">{title}</h1>
            </Reveal>
            <div className="relative aspect-video max-h-[600px] w-full overflow-hidden rounded-[32px] phone:h-[250px] phone:max-h-none phone:rounded-2xl">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 1800px) 100vw, 1800px"
                className="object-cover object-[50%_23%]"
                loading="eager"
                fetchPriority="high"
              />
              {/* Gold panel that wipes away on load, like the Webflow page-load interaction. */}
              <div className="absolute inset-0 origin-right animate-[wipe_1s_ease-in-out_0.2s_forwards] bg-gold motion-reduce:hidden" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[var(--space-48)] phone:pt-0">
        <div className="container-main">
          <div className="grid grid-cols-2 gap-10 tablet:flex tablet:flex-col">
            <article className="prose-site body-regular">{children}</article>
            <div className="flex flex-col items-end tablet:mt-12 tablet:items-stretch">
              <ScheduleCard />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-[var(--space-80)]">
          <div className="container-main">
            <div className="mb-16 h-0 w-full border-b border-[rgba(183,179,162,0.8)] landscape:mb-10" />
            <div className="mb-[var(--space-80)] flex flex-col items-start gap-4">
              <SectionLabel>Tips from Tim</SectionLabel>
              <h2 className="heading-4">Latest</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 tablet:grid-cols-1">
              {related.map((post) => (
                <InsightCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
