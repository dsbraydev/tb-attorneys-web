import Image from "next/image";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { ButtonLink } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="relative z-0 h-svh min-h-svh">
      <div className="relative flex h-full items-end py-[var(--space-80)]">
        <Image
          src="/video/hero-poster.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="eager"
        />
        <HeroVideo />
        {/* A plain 44% black overlay; identical to Webflow's black multiply blend, without the compositing cost. */}
        <div className="absolute inset-0 z-[2] bg-black/[0.44]" />

        <div className="relative z-[3] container-main">
          <div className="grid h-[70svh] grid-cols-8 grid-rows-[auto_auto_auto] gap-4 text-white landscape:flex landscape:flex-col landscape:justify-end landscape:gap-8 tablet:grid-cols-6 phone:gap-5">
            <div className="col-span-6 col-start-1 row-start-1 self-end landscape:self-stretch">
              <h1 className="heading-3 text-white phone:text-center">
                Property Transfers made Clear, Fast &amp; Secure
              </h1>
            </div>
            <div className="col-span-3 col-start-6 row-start-2 flex flex-col gap-6 tablet:col-span-3 tablet:col-start-4">
              <p className="body-large">
                Before you sign, get your sale agreement reviewed by a property attorney. We protect
                your interests, guide you through the legal process, and manage the transfer with
                clarity and care, so there are no delays or costly surprises
              </p>
              <Image
                src="/images/signature-white.webp"
                alt="Tim Boshoff signature"
                width={518}
                height={198}
                className="h-auto w-[259px] max-w-full"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="col-span-3 col-start-1 row-start-3 flex flex-wrap items-center gap-4 self-end landscape:self-stretch phone:w-full phone:flex-col phone:items-stretch phone:gap-3">
              <ButtonLink href="/contact-us">Send Agreement for Review</ButtonLink>
              <ButtonLink href="/pricing" variant="outline">
                Estimate Transfer Costs
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
