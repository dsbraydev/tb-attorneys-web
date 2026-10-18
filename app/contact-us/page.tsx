import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/sections/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Send your sale agreement for review or book a free 15 minute consultation.",
};

type InfoCard = { icon: string; title: string; text: string; link: { href: string; label: string } };

export default function ContactPage() {
  const { phone, email, mapUrl } = site.contact;
  const cards: InfoCard[] = [];
  if (phone) {
    cards.push({
      icon: "/icons/phone.svg",
      title: "Phone",
      text: "We’re just a call away. Reach out to us for any quick queries or support.",
      link: { href: `tel:${phone.replace(/\s/g, "")}`, label: phone },
    });
  }
  if (email) {
    cards.push({
      icon: "/icons/mail.svg",
      title: "Email",
      text: "Have a question? Drop us an email and we’ll get back to you soon.",
      link: { href: `mailto:${email}`, label: email },
    });
  }
  if (mapUrl) {
    cards.push({
      icon: "/icons/address.avif",
      title: "Address",
      text: "Come say hi at our office or send us a letter. We’d love to hear from you.",
      link: { href: mapUrl, label: "Locate us" },
    });
  }

  return (
    <>
      <section className="pt-[var(--space-hero-top)]">
        <div className="container-main">
          <div className="mx-auto mb-[var(--space-80)] flex w-full max-w-[650px] flex-col gap-[42px]">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="heading-2">Get in touch</h1>
              <p className="body-regular text-ink-2">
                Send us your sale agreement for review, or tell us about your transaction and we
                will get back to you.
              </p>
            </div>
            <ContactForm />
          </div>

          {cards.length > 0 && (
            <div className="mx-auto flex flex-wrap items-start justify-center gap-[22px]">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="flex min-h-[400px] w-full min-w-[354px] max-w-[450px] flex-col justify-between overflow-hidden rounded-2xl border border-oliv/[0.12] bg-oliv/[0.08] px-6 py-8 tablet:min-w-[250px] tablet:max-w-[345px] landscape:min-h-[320px] landscape:min-w-0 landscape:max-w-none"
                >
                  <Image src={card.icon} alt="" width={48} height={48} className="h-12 w-12" />
                  <div className="flex flex-col gap-4">
                    <h2 className="heading-6 text-ink">{card.title}</h2>
                    <p className="body-regular text-grey-500">{card.text}</p>
                    <a href={card.link.href} className="body-regular text-grey-500 underline">
                      {card.link.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-16 h-0 w-full border-b border-[rgba(183,179,162,0.8)] landscape:mt-10" />
        </div>
      </section>
      <FaqSection />
    </>
  );
}
