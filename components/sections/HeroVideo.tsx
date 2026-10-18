"use client";

import { useEffect, useRef } from "react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

// The poster image (rendered by the server behind this) is the LCP element; the video only loads
// afterwards, and not at all on phones, data-saver connections or when motion is reduced.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const skip =
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      connection?.saveData ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g";
    if (skip) return;

    for (const [src, type] of [
      ["/video/hero.webm", "video/webm"],
      ["/video/hero.mp4", "video/mp4"],
    ]) {
      const source = document.createElement("source");
      source.src = src;
      source.type = type;
      video.appendChild(source);
    }
    video.load();
    video.addEventListener("canplay", () => video.classList.remove("opacity-0"), { once: true });
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      aria-hidden
    />
  );
}
