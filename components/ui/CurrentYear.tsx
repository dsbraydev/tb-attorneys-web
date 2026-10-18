"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

// The footer is prerendered at build time; this swaps in the visitor's current year after
// hydration so the copyright line doesn't stay stuck on the build year. `buildYear` comes from
// the server so hydration matches the prerendered HTML.
export function CurrentYear({ buildYear }: { buildYear: number }) {
  return useSyncExternalStore(
    noop,
    () => new Date().getFullYear(),
    () => buildYear,
  );
}
