"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, SocialIcon, type SocialNetwork } from "@/components/ui/icons";
import { mainNav, site } from "@/content/site";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

const isPastHero = () => window.scrollY > window.innerHeight - 90;

// On the home page the bar floats over the video hero and turns solid once the hero has scrolled
// away (the white links would vanish on the light sections below); other pages get the solid bar.
export function Navbar() {
  const pathname = usePathname();
  const pastHero = useSyncExternalStore(subscribeToScroll, isPastHero, () => false);
  const overlay = pathname === "/";
  const transparent = overlay && !pastHero;
  const [open, setOpen] = useState(false);

  const socials = Object.entries(site.socials).filter(([, url]) => url) as [SocialNetwork, string][];

  return (
    <header
      className={`top-0 z-[999] transition-colors duration-300 ${overlay ? "fixed inset-x-0" : "sticky"} ${
        transparent ? "bg-black/[0.08] backdrop-blur-[3px]" : "bg-navy-deep backdrop-blur-[8px]"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between gap-4 border-b-[0.5px] border-[rgba(183,179,162,0.4)] py-4">
          <Link href="/" className="flex w-[100px] items-center rounded-lg" aria-label={`${site.name} home`}>
            <Image
              src="/images/signature-logo.svg"
              alt={site.name}
              width={158}
              height={150}
              className="h-[50px] w-auto max-w-[130px] rounded-[10px] object-contain invert"
              loading="eager"
            />
          </Link>

          <nav
            aria-label="Main"
            className={`tablet:absolute tablet:inset-x-0 tablet:top-full tablet:mx-6 ${open ? "tablet:block" : "tablet:hidden"}`}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) setOpen(false);
            }}
          >
            <div className="flex items-center justify-center gap-4 tablet:mt-2.5 tablet:flex-col tablet:items-start tablet:gap-2.5 tablet:rounded-2xl tablet:border tablet:border-oliv tablet:bg-navy-deep tablet:px-5 tablet:py-6 landscape:gap-2">
              {mainNav.map((link) => {
                const current = isCurrent(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`cursor-pointer px-1.5 py-1 leading-[140%] text-grey-50 tablet:px-3 tablet:py-2 landscape:px-4 ${
                      current
                        ? "font-medium text-white underline decoration-[0.25px] underline-offset-[6px]"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="hidden w-full flex-col items-start gap-4 tablet:mt-10 tablet:flex phone:items-stretch">
                <ButtonLink href="/contact-us" variant="outline">
                  Schedule a consultation
                </ButtonLink>
                {socials.length > 0 && (
                  <div className="mt-2 flex w-full items-center gap-2 border-t-[0.5px] border-oliv/20 pt-3 text-grey-200">
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
              </div>
            </div>
          </nav>

          <div className="flex flex-wrap items-center justify-end gap-6">
            <div className="landscape:hidden">
              <ButtonLink href="/contact-us" variant="outline">
                Schedule a consultation
              </ButtonLink>
            </div>
            <button
              type="button"
              className="hidden items-center justify-center text-grey-50 tablet:flex"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
