import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

const card =
  "relative flex flex-col justify-between gap-4 overflow-hidden rounded-3xl border border-cream-border bg-cream p-8 tablet:p-7 phone:w-full phone:min-h-[230px]";

function StatNumber({ children }: { children: ReactNode }) {
  return (
    <div className="font-heading text-[length:var(--h5-size)] leading-[var(--h4-lh)] tracking-[var(--h4-ls)] text-forest">
      {children}
    </div>
  );
}

function ImageCard({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`${card} min-h-[300px] ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 991px) 50vw, 33vw"
        className="object-cover object-[50%_20%] landscape:object-[40%_50%]"
      />
    </div>
  );
}

export function HomeStats() {
  return (
    <section className="py-[var(--space-96)]">
      <div className="container-main flex flex-col gap-20 landscape:gap-[42px]">
        <Reveal className="grid grid-cols-[1.75fr_1fr] items-start gap-[42px] tablet:grid-cols-1 landscape:gap-7">
          <h2 className="heading-4 text-ink">
            By choosing Tim Boshoff Inc, you gain an experienced partner with a proven reputation in
            real estate industry
          </h2>
          {/* TODO(content): template copy carried over from Webflow. */}
          <p className="body-regular text-grey-500">
            Unlocking Peak Performance: A Comprehensive Visual Guide to Key Metrics, Enabling
            Data-Driven Insights and Continuous Optimization.
          </p>
        </Reveal>

        <div className="grid grid-flow-row-dense grid-cols-3 gap-8 tablet:grid-cols-2 tablet:gap-4 phone:flex phone:flex-wrap">
          <Reveal className={`${card} col-start-1 row-start-1 tablet:col-auto tablet:row-auto`}>
            <StatNumber>
              Direct
              <br />
              Attorney Access
            </StatNumber>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/stats-on-call.jpg"
                alt="Tim Boshoff on a call"
                fill
                sizes="(max-width: 991px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="body-regular">
              Deal directly with an attorney who oversees your matter from instruction to registration.
            </p>
          </Reveal>

          <ImageCard src="/images/stats-2.jpg" className="col-start-2 row-start-1 tablet:col-auto tablet:row-auto" />

          <Reveal className={`${card} col-start-3 row-start-1 tablet:col-auto tablet:row-auto`}>
            <StatNumber>Millions in Property Value Transferred</StatNumber>
            <h3 className="heading-6">
              Trusted with high-value property transactions across residential developments and
              estates.
            </h3>
          </Reveal>

          <ImageCard
            src="/images/stats-success.jpg"
            className="col-span-2 col-start-2 row-start-2 tablet:col-auto tablet:row-auto"
          />

          <Reveal className={`${card} col-start-1 row-start-2 tablet:col-auto tablet:row-auto`}>
            <StatNumber>500+ Successful Property Transfers</StatNumber>
            <div className="flex flex-col gap-2.5">
              <h3 className="heading-6">
                A proven track record of efficient, compliant property registrations.
              </h3>
              <p className="body-regular">
                We have assisted over 500 clients with transfer the properties giving the security
                and safety when investing in real estate.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
