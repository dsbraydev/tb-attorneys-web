import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section className="bg-navy py-[var(--space-96)]">
      <div className="container-main">
        <Reveal className="grid grid-cols-2 items-start gap-[var(--space-64)] landscape:gap-7 tablet:mx-auto tablet:flex tablet:max-w-[90%] tablet:flex-col tablet:items-center tablet:gap-[42px] tablet:text-center phone:max-w-full">
          <h2 className="heading-4 text-white">
            Your Property Is Too Important to Leave to Chance
          </h2>
          <div className="flex flex-col items-start gap-8 text-grey-200 tablet:items-center phone:max-w-full">
            <p className="body-regular">
              Get legal guidance before committing to a binding agreement. A short consultation can
              prevent months of stress and unnecessary cost.
            </p>
            <div className="flex flex-wrap items-center gap-4 tablet:justify-center phone:w-full phone:flex-col phone:items-stretch">
              <ButtonLink href="/contact-us" variant="gold">
                Schedule a Free Consultation
              </ButtonLink>
              <ButtonLink href="/contact-us" variant="outline">
                Send Agreement for Review
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
