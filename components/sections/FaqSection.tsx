import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqs } from "@/content/faqs";

export function FaqSection({
  title = "Curious About Something?",
  page = false,
}: {
  title?: string;
  /** The standalone /faq page: large page heading, no "More FAQs" button. */
  page?: boolean;
}) {
  return (
    <section className={page ? "pb-[var(--space-80)] pt-[var(--space-hero-top)]" : "py-[var(--space-80)]"}>
      <div className="container-main">
        <div className="grid w-full grid-cols-2 items-start gap-4 tablet:flex tablet:flex-col tablet:gap-8">
          <Reveal className="sticky top-[120px] flex flex-col items-start gap-4 tablet:static">
            <SectionLabel>FAQs</SectionLabel>
            {page ? <h1 className="heading-1">FAQ</h1> : <h2 className="heading-4">{title}</h2>}
            {!page && <ButtonLink href="/faq">More FAQs</ButtonLink>}
          </Reveal>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
