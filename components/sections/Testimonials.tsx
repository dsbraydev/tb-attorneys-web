"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { Testimonial } from "@/content/testimonials";

function Stars() {
  return (
    <div className="flex items-start gap-1" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src="/icons/star.svg"
          alt=""
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ))}
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-ink transition-transform duration-200 active:scale-90 disabled:opacity-40"
    >
      <Image
        src={direction === "prev" ? "/icons/arrow-left.svg" : "/icons/arrow-right.svg"}
        alt=""
        width={24}
        height={24}
      />
    </button>
  );
}

export function Testimonials({
  testimonials,
  heading,
  subheading,
}: {
  testimonials: Testimonial[];
  heading: string;
  subheading: string;
}) {
  const [index, setIndex] = useState(0);
  const last = testimonials.length - 1;

  return (
    <section className="overflow-clip pt-[var(--space-120)] pb-[200px] phone:pb-[150px]">
      <div className="container-main">
        <div className="flex flex-col gap-20 tablet:gap-[60px]">
          <Reveal className="flex flex-col items-start gap-3">
            <h2 className="heading-4 text-gold">{heading}</h2>
            <p className="body-regular text-grey-500">{subheading}</p>
          </Reveal>

          <div className="relative landscape:w-[90vw]">
            <div className="w-[656px] max-w-full landscape:w-full" aria-roledescription="carousel">
              <ul
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(calc(${index} * (-100% - 32px)))` }}
              >
                {testimonials.map((testimonial, slide) => (
                  <li
                    key={testimonial.name}
                    aria-roledescription="slide"
                    aria-label={`${slide + 1} of ${testimonials.length}`}
                    aria-hidden={slide !== index}
                    className="mr-8 w-full max-w-[656px] shrink-0 rounded-2xl bg-grey-50 p-8"
                  >
                    <figure className="flex h-full min-h-[260px] flex-col items-start justify-between gap-6 phone:min-h-[370px]">
                      <Stars />
                      <blockquote className="body-large">“{testimonial.quote}”</blockquote>
                      <figcaption className="flex items-center gap-5 phone:flex-col phone:items-start">
                        <div className="flex items-center gap-5 phone:gap-3">
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                            <Image
                              src={testimonial.avatar}
                              alt=""
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="text-lg leading-[150%] font-medium">
                              {testimonial.name}
                            </div>
                            <div className="body-small text-grey-500">{testimonial.role}</div>
                          </div>
                          <div className="h-16 w-px bg-grey-200" />
                        </div>
                        <Image
                          src="/icons/excellence.svg"
                          alt=""
                          width={44}
                          height={44}
                          className="max-h-[100px] max-w-[100px] phone:max-h-12 phone:max-w-12"
                        />
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="absolute -bottom-[120px] left-0 flex items-center gap-1 phone:-bottom-20"
              role="group"
              aria-label="Choose a testimonial"
            >
              {testimonials.map((testimonial, dot) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-current={dot === index ? "true" : undefined}
                  aria-label={`Show testimonial ${dot + 1}`}
                  onClick={() => setIndex(dot)}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${dot === index ? "bg-ink" : "bg-ink/30"}`}
                  />
                </button>
              ))}
            </div>
            <div className="absolute right-0 -bottom-[120px] flex gap-4 phone:-bottom-20">
              <ArrowButton
                direction="prev"
                disabled={index === 0}
                onClick={() => setIndex((value) => Math.max(0, value - 1))}
              />
              <ArrowButton
                direction="next"
                disabled={index === last}
                onClick={() => setIndex((value) => Math.min(last, value + 1))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
