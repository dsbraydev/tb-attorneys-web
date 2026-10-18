import Image from "next/image";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HomeIntro() {
  return (
    <section className="py-[var(--space-120)]">
      <div className="container-main flex flex-col gap-[var(--space-80)]">
        <Reveal className="flex flex-col items-center gap-8">
          <div className="flex max-w-[900px] flex-col items-center gap-4 text-center">
            <SectionLabel
              className="self-center"
              icon={<Image src="/icons/label-strategy.svg" alt="" width={16} height={16} />}
            >
              Strategic. Trustworthy. Modern.
            </SectionLabel>
            <div className="flex flex-col gap-6">
              <h2 className="heading-4 text-gold">Why Clients Choose Tim Boshoff Inc.</h2>
              <p className="body-regular text-ink-2">
                Property transactions involve serious legal and financial risk. We provide expert
                legal guidance, clear communication, and hands-on management of your transfer from
                start to finish.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 phone:w-full phone:flex-col phone:items-stretch">
            <ButtonLink href="/services">Discover Our Services</ButtonLink>
            <TextLink href="/contact-us">Schedule a 15 Minute Free Consultation</TextLink>
          </div>
        </Reveal>
        <Reveal className="relative h-[80svh] min-h-[738px] w-full overflow-hidden rounded-3xl tablet:h-[50svh] tablet:min-h-0">
          <Image
            src="/images/intro.webp"
            alt=""
            fill
            sizes="(max-width: 1800px) 100vw, 1800px"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
