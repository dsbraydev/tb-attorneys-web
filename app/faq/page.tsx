import type { Metadata } from "next";
import { CtaImage } from "@/components/sections/CtaImage";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about property transfers.",
};

export default function FaqPage() {
  return (
    <>
      <FaqSection page />
      <CtaImage />
    </>
  );
}
