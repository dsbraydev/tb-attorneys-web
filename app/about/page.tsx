import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/sections/CtaBand";
import { CtaImage } from "@/components/sections/CtaImage";
import { FaqSection } from "@/components/sections/FaqSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "About",
  description: "Tim Boshoff Inc is your trusted partner in property transactions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        heading={
          <>
            Your <span className="text-gold">trusted partner</span> in property transactions.
          </>
        }
        // TODO(content): template copy carried over from Webflow.
        intro="We help businesses navigate complexity with strategic, legal, and financial expertise, providing tailored solutions that drive growth, enhance efficiency, and deliver long-term success."
        actions={
          <>
            <ButtonLink href="/contact-us">Schedule a consultation</ButtonLink>
            <TextLink href="/services">Our services</TextLink>
          </>
        }
      />
      <section className="relative h-[810px] tablet:h-[560px] landscape:h-[420px] phone:h-[380px]">
        <Image
          src="/images/about-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_4%]"
        />
      </section>
      <LogoStrip />
      <ValuesSection />
      <CtaBand />
      {/* The Webflow team slider listed the template's fictional people; it returns once Tim supplies his team. */}
      <Testimonials
        testimonials={testimonials}
        heading="Our Clients Say It Best"
        subheading="Discover how we’ve helped our clients."
      />
      <FaqSection />
      <CtaImage />
    </>
  );
}
