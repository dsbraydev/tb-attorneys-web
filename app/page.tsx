import { CtaBand } from "@/components/sections/CtaBand";
import { CtaImage } from "@/components/sections/CtaImage";
import { FaqSection } from "@/components/sections/FaqSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { HomeStats } from "@/components/sections/HomeStats";
import { InsightFeature } from "@/components/sections/InsightFeature";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { Testimonials } from "@/components/sections/Testimonials";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeStats />
      <LogoStrip />
      <ServicesTabs services={services} />
      <CtaBand />
      <Testimonials
        testimonials={testimonials}
        heading="Real feedback from buyers and sellers who trusted us with their property transactions."
        subheading="Discover how we’ve helped our clients."
      />
      <InsightFeature />
      <FaqSection />
      <CtaImage />
    </>
  );
}
