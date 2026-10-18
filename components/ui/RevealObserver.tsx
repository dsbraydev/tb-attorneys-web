"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// One IntersectionObserver for every `.reveal` on the page, re-run after each client navigation.
// It also runs the `[data-marquee]` animations only while they are on screen.
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document
      .querySelectorAll(".reveal:not([data-revealed])")
      .forEach((element) => observer.observe(element));

    const marquees = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        (entry.target as HTMLElement).dataset.active = String(entry.isIntersecting);
      }
    });
    document.querySelectorAll("[data-marquee]").forEach((element) => marquees.observe(element));

    return () => {
      observer.disconnect();
      marquees.disconnect();
    };
  }, [pathname]);

  return null;
}
