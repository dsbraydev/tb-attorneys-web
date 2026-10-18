"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceGlyph } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/content/services";

export function ServicesTabs({
  services,
  showAllButton = true,
}: {
  services: Service[];
  showAllButton?: boolean;
}) {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="py-[var(--space-120)]">
      <div className="container-main">
        <div className="flex flex-col gap-[var(--space-80)] tablet:gap-[62px] landscape:gap-12 phone:gap-[42px]">
          <Reveal className="flex max-w-[720px] flex-col items-start gap-8 landscape:max-w-[80%] phone:max-w-full">
            <h2 className="heading-4 text-gold">Explore our comprehensive service offerings</h2>
            {showAllButton && <ButtonLink href="/services">Our Services</ButtonLink>}
          </Reveal>

          <div className="flex w-full items-center justify-between tablet:flex-col tablet:items-stretch tablet:gap-8 phone:gap-0">
            <div
              role="tablist"
              aria-label="Services"
              className="mr-6 flex max-w-[40%] flex-col gap-6 tablet:mr-0 tablet:max-w-full landscape:w-full landscape:gap-4 phone:mb-8 phone:gap-3"
            >
              {services.map((service, index) => {
                const selected = index === active;
                return (
                  <button
                    key={service.slug}
                    type="button"
                    role="tab"
                    id={`service-tab-${index}`}
                    aria-selected={selected}
                    aria-controls="service-panel"
                    onClick={() => setActive(index)}
                    className={`flex flex-col items-start rounded-[32px] py-10 pl-10 pr-20 text-left font-heading transition-all duration-[350ms] ease-out tablet:py-8 tablet:pl-8 landscape:rounded-[20px] landscape:pr-10 phone:py-7 phone:pr-8 ${
                      selected ? "bg-gold text-grey-50" : "bg-white text-ink phone:text-ink-2"
                    }`}
                  >
                    <span className="flex items-center gap-7 phone:gap-5">
                      <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center landscape:h-8 landscape:w-8">
                        <ServiceGlyph icon={service.icon} />
                      </span>
                      <span className="text-[28px] leading-[112%] tracking-[-2px] landscape:text-2xl">
                        {service.title}
                      </span>
                    </span>
                    <span
                      className={`grid transition-[grid-template-rows] duration-[350ms] ease-out ${
                        selected ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="body-large block pt-6 font-sans tablet:pt-5 phone:pt-4">
                          {service.summary}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id="service-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${active}`}
              className="relative w-1/2 tablet:w-full"
            >
              <div className="relative h-[720px] w-full overflow-hidden rounded-[32px] tablet:h-[500px] landscape:h-[400px] landscape:rounded-[20px] phone:h-80">
                {services.map((service, index) => (
                  <Image
                    key={service.slug}
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 991px) 100vw, 50vw"
                    className={`object-cover transition-opacity duration-500 phone:object-[25%_50%] ${
                      index === active ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ objectPosition: service.imagePosition ?? "50% 20%" }}
                  />
                ))}
              </div>
              <div className="absolute bottom-5 right-7 z-[1]">
                <ButtonLink href={`/services/${current.slug}`}>View Service</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
