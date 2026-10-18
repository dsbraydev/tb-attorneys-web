import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { InsightFeature } from "@/components/sections/InsightFeature";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Property transfers, sale agreement reviews, township establishment, sectional title and estate transfers.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-svh min-h-[640px] w-full overflow-hidden">
        <Image
          src="/images/services-hero.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[rgba(40,46,19,0.5)] mix-blend-multiply phone:bg-[rgba(172,181,140,0.85)]" />
        <div className="relative z-10 container-main flex h-full flex-col justify-between gap-[60px] pt-[var(--space-hero-top)] pb-[var(--space-80)] landscape:gap-[42px] phone:justify-end phone:gap-8">
          <Reveal className="w-4/5 landscape:w-full tablet:w-[90%]">
            <h1 className="heading-1 text-white">
              Tailored Solutions <span className="text-gold">for property</span> Transfer
            </h1>
          </Reveal>
          <Reveal className="ml-auto flex w-[30%] flex-col gap-8 landscape:ml-0 landscape:w-4/5 tablet:w-[60%] phone:w-auto">
            <p className="body-large text-grey-50">
              We help sellers, buyers and estate agents navigate complexity of property sales,
              township establishment, exclusive use registration, complex contractual conditions by
              providing tailored solutions. Book a free 15 minute zoom consultation to find out why
              we are a good fit.
            </p>
            <div className="flex gap-6 phone:flex-col phone:items-stretch">
              <ButtonLink href="/contact-us">Schedule a consultation</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
      <ServicesTabs services={services} showAllButton={false} />
      <CtaBand />
      <InsightFeature />
      <FaqSection title="Frequently asked?" />
    </>
  );
}
