import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaImage() {
  return (
    <section className="relative z-[1] h-[650px] tablet:h-[350px]">
      <Image src="/images/cta.avif" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center text-grey-200">
        <Reveal className="flex w-[600px] max-w-[calc(100%-32px)] flex-col items-center gap-8 text-center landscape:max-w-[80%]">
          <h2 className="heading-3">Ready to Write Your Success Story?</h2>
          <ButtonLink href="/contact-us">Contact Us Today</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
