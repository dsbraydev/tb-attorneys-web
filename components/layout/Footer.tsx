import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { SocialIcon, type SocialNetwork } from "@/components/ui/icons";
import { footerNav, site } from "@/content/site";

// Webflow's footer rendered light-grey text on white (a recoloured template variable);
// it uses the navy brand colour here so the content is readable.
export function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url) as [SocialNetwork, string][];
  const marqueeItems = Array.from({ length: 4 });

  return (
    <footer className="overflow-hidden bg-navy py-[var(--space-80)] text-grey-200">
      <div className="container-main">
        <div className="grid grid-cols-[0.5fr_1fr] gap-10 tablet:grid-cols-1">
          <div className="flex flex-col gap-10">
            <Link href="/" className="h-12 self-start" aria-label={`${site.name} home`}>
              <Image
                src="/images/signature-logo.svg"
                alt={site.name}
                width={158}
                height={150}
                className="h-12 w-auto invert"
              />
            </Link>
            <NewsletterForm />
          </div>

          <div className="flex justify-end gap-[120px] pr-[75px] tablet:justify-start landscape:justify-between landscape:gap-x-16 landscape:gap-y-14 landscape:pr-5 phone:flex-wrap phone:justify-start phone:gap-x-14 phone:gap-y-[34px]">
            {footerNav.map((column) => (
              <div key={column.title} className="flex shrink-0 flex-col gap-8 phone:gap-4">
                <div className="body-regular uppercase text-grey-300">{column.title}</div>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="capitalize text-grey-200 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {(site.contact.email || site.contact.phone) && (
              <div className="flex shrink-0 flex-col gap-8 phone:gap-4">
                <div className="body-regular uppercase text-grey-300">Contact</div>
                <ul className="flex flex-col gap-2.5">
                  {site.contact.phone && (
                    <li>
                      <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
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
        className="mb-[72px] mt-[140px] overflow-clip phone:mb-10 phone:mt-20"
        aria-hidden
      >
        <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-16 motion-reduce:animate-none">
          {marqueeItems.map((_, index) => (
            <span
              key={index}
              className="font-heading text-[clamp(96px,14vw,220px)] leading-none tracking-[-0.04em] whitespace-nowrap text-white/[0.06]"
            >
              {site.name}
            </span>
          ))}
        </div>
      </div>

      <div className="container-main">
        <div className="flex flex-col gap-8 border-t-[0.5px] border-[rgba(217,219,210,0.6)] py-8 phone:pb-0">
          <div className="flex items-center justify-between gap-10 tablet:flex-wrap phone:flex-col phone:items-start">
            <p className="body-regular">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            {socials.length > 0 && (
              <div className="flex items-center gap-2">
                {socials.map(([network, url]) => (
                  <a
                    key={network}
                    href={url}
                    aria-label={network}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(201,241,161,0.08)] text-grey-50 transition-all duration-300 ease-out hover:bg-[rgba(201,241,161,0.16)] hover:text-white"
                  >
                    <SocialIcon network={network} />
                  </a>
                ))}
              </div>
            )}
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
