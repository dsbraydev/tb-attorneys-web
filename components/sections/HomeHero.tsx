import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="relative z-0 h-svh min-h-svh">
      <div className="relative flex h-full items-end py-[var(--space-80)]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/video/hero-poster.jpg"
          aria-hidden
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[2] bg-black/[0.44] mix-blend-multiply" />

        <div className="container-main relative z-[3]">
          <div className="grid h-[70svh] grid-cols-8 grid-rows-[auto_auto_auto] gap-4 text-white tablet:grid-cols-6 landscape:flex landscape:flex-col landscape:justify-end landscape:gap-8 phone:gap-5">
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
                src="/images/signature-white.png"
                alt="Tim Boshoff signature"
                width={518}
                height={198}
                className="h-auto w-[259px] max-w-full"
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
