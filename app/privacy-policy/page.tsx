import type { Metadata } from "next";
import PrivacyPolicy from "@/content/legal/privacy-policy.mdx";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pb-[var(--space-80)] pt-[var(--space-hero-top)]">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-8 landscape:grid-cols-1">
          <div className="flex w-full max-w-[550px] flex-col items-start gap-6">
            <SectionLabel>Privacy Policy</SectionLabel>
            <h1 className="heading-2">Privacy Policy</h1>
          </div>
          <article className="prose-site body-regular">
            <PrivacyPolicy />
          </article>
        </div>
      </div>
    </section>
  );
}
