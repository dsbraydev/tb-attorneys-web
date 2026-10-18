import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { footerNav, site } from "@/content/site";

// Webflow's footer rendered light-grey text on white (a recoloured template variable);
// it uses the navy brand colour here so the content is readable.
export function Footer() {
  const marqueeItems = Array.from({ length: 4 });

  return (
    <footer className="overflow-hidden bg-navy py-[var(--space-80)] text-grey-200">
      <div className="container-main">
        <div className="grid grid-cols-[0.5fr_1fr] gap-10 tablet:grid-cols-1">
          <div className="flex flex-col gap-10">
            <Link href="/" className="h-12 self-start" aria-label={`${site.name} home`}>
              <Image
                src="/images/logo-tb.webp"
                alt={site.name}
                width={212}
                height={200}
                className="h-12 w-auto"
              />
            </Link>
            <NewsletterForm />
          </div>

          <div className="flex justify-end gap-[120px] pr-[75px] landscape:justify-between landscape:gap-x-16 landscape:gap-y-14 landscape:pr-5 tablet:justify-start phone:flex-wrap phone:justify-start phone:gap-x-14 phone:gap-y-[34px]">
            {footerNav.map((column) => (
              <div key={column.title} className="flex shrink-0 flex-col gap-8 phone:gap-4">
                <div className="body-regular text-grey-300 uppercase">{column.title}</div>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-grey-200 capitalize hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {(site.contact.email || site.contact.phone) && (
              <div className="flex shrink-0 flex-col gap-8 phone:gap-4">
                <div className="body-regular text-grey-300 uppercase">Contact</div>
                <ul className="flex flex-col gap-2.5">
                  {site.contact.phone && (
                    <li>
                      <a
                        href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                        className="hover:text-white"
                      >
                        {site.contact.phone}
                      </a>
                    </li>
                  )}
                  {site.contact.email && (
                    <li>
                      <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                        {site.contact.email}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="mt-[140px] mb-[72px] overflow-clip phone:mt-20 phone:mb-10"
        aria-hidden
        data-marquee
      >
        <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-16 motion-reduce:animate-none">
          {/* Decorative wordmark drawn as SVG text, so it isn't treated as low-contrast body copy. */}
          {marqueeItems.map((_, index) => (
            <svg
              key={index}
              className="h-[clamp(96px,14vw,220px)] w-auto shrink-0"
              viewBox="0 0 1600 220"
            >
              <text
                x="0"
                y="176"
                fill="currentColor"
                className="font-heading text-[200px] tracking-[-0.04em] text-white/[0.06]"
              >
                {site.name}
              </text>
            </svg>
          ))}
        </div>
      </div>

      <div className="container-main">
        <div className="flex flex-col gap-8 border-t-[0.5px] border-[rgba(217,219,210,0.6)] py-8 phone:pb-0">
          <div className="flex items-center justify-between gap-10 tablet:flex-wrap phone:flex-col phone:items-start">
            <p className="body-regular">
              © <CurrentYear buildYear={new Date().getFullYear()} /> {site.name}. All rights
              reserved.
            </p>
            <SocialLinks />
            <div className="flex items-center gap-4 phone:flex-col phone:items-start">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
