import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

// TODO(content): the value descriptions are template copy (they mention "candidate placements").
const values = [
  {
    icon: "/icons/integrity.svg",
    title: "Integrity",
    text: "We uphold the highest standards of integrity, ensuring confidentiality and trust in all our interactions.",
  },
  {
    icon: "/icons/excellence.svg",
    title: "Excellence",
    text: "We strive for excellence in every aspect of our service, from client engagements to candidate placements.",
  },
  {
    icon: "/icons/collaboration.svg",
    title: "Collaboration",
    text: "We believe in the power of collaboration, working closely with our clients and candidates to achieve shared success.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-[var(--space-120)]">
      <div className="container-main">
        <div className="flex flex-col gap-[var(--space-80)]">
          <Reveal className="flex flex-col items-start gap-4">
            <SectionLabel>Our values</SectionLabel>
            <div className="flex w-2/5 flex-col gap-6 tablet:w-4/5 phone:w-[90%]">
              <h2 className="heading-4 text-ink">The Values Behind Every Decision</h2>
              <p className="body-regular text-ink-2">
                At Tim Boshoff Inc, our core values are more than words—they’re the foundation of
                how we work, collaborate, and deliver results.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-12 tablet:grid-cols-2 phone:grid-cols-1">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100} className="flex flex-col gap-6">
                <Image src={value.icon} alt="" width={44} height={44} className="h-11 w-11" />
                <h3 className="heading-6">{value.title}</h3>
                <p className="body-regular text-ink-2">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
