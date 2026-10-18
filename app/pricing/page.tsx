import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/FaqSection";
import { TransferCostCalculator } from "@/components/sections/TransferCostCalculator";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Transfer Cost Calculator",
  description: "Estimate the transfer duty on your property purchase.",
};

// Webflow's /pricing was still the template's "Our Plans" page; this is the calculator the nav promised.
export default function PricingPage() {
  return (
    <>
      <section className="pt-[var(--space-hero-top)] pb-[var(--space-80)]">
        <div className="container-main">
          <div className="flex w-full flex-col gap-[var(--title-mb-small)]">
            <div className="mx-auto flex max-w-[660px] flex-col items-center gap-6 text-center">
              <SectionLabel className="self-center">Calculator</SectionLabel>
              <h1 className="heading-1">Transfer Costs</h1>
            </div>
            <TransferCostCalculator />
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}
