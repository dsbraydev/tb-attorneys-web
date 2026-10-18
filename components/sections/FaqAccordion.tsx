"use client";

import { useId, useState } from "react";
import type { Faq } from "@/content/faqs";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const expanded = open === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={faq.question} className="overflow-hidden rounded-2xl bg-grey-50 p-6">
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
                className="flex w-full items-center justify-between gap-8 text-left font-sans text-[22px] leading-[150%] tracking-[-1px] landscape:text-xl"
              >
                <span>{faq.question}</span>
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
                  <span className="h-[1.5px] w-3.5 bg-ink" />
                  <span
                    className={`absolute h-3.5 w-[1.5px] bg-ink transition-transform duration-300 ${
                      expanded ? "rotate-90" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="body-regular pt-2.5 text-ink-2">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
