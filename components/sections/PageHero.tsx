import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

// The About-style hero: oversized heading on the left, short intro and actions pushed right.
export function PageHero({
  heading,
  intro,
  actions,
}: {
  heading: ReactNode;
  intro: ReactNode;
  actions: ReactNode;
}) {
  return (
    <section className="pt-[var(--space-hero-top)] pb-[var(--space-80)]">
      <div className="container-main">
        <div className="flex flex-col gap-[60px] landscape:gap-[42px] phone:gap-8">
          <Reveal className="flex w-4/5 flex-col landscape:w-full tablet:w-[90%]">
            <h1 className="heading-1 text-ink">{heading}</h1>
          </Reveal>
          <Reveal className="ml-auto flex w-[30%] flex-col gap-8 landscape:w-4/5 tablet:w-[60%] phone:w-full">
            <div className="body-regular text-ink-2">{intro}</div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 phone:flex-col phone:items-stretch">
              {actions}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
