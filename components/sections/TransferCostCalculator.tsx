"use client";

import { useId, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { estimateTransferCosts, formatRand, transferDuty } from "@/lib/transfer-costs";

function parseRand(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

export function TransferCostCalculator() {
  const id = useId();
  const [rawPrice, setRawPrice] = useState("");
  const [vatTransaction, setVatTransaction] = useState(false);

  const price = parseRand(rawPrice);
  const estimate = estimateTransferCosts({ price, vatTransaction });

  return (
    <div className="grid grid-cols-2 gap-8 tablet:grid-cols-1">
      <div className="flex flex-col gap-[42px] rounded-2xl border border-oliv/[0.32] bg-oliv/[0.06] p-8 phone:p-6">
        <div className="flex flex-col gap-5">
          <h2 className="heading-6">Your purchase</h2>
          <p className="body-regular text-ink-2">
            Enter the purchase price to estimate the transfer duty payable to SARS.
          </p>
        </div>
        <div className="h-0 w-full border-b border-[rgba(183,179,162,0.8)]" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor={`${id}-price`} className="body-regular text-ink-2">
              Purchase price (R)
            </label>
            <input
              id={`${id}-price`}
              inputMode="numeric"
              autoComplete="off"
              placeholder="e.g. 2 500 000"
              value={price ? new Intl.NumberFormat("en-ZA").format(price) : rawPrice}
              onChange={(event) => setRawPrice(event.target.value)}
              className="h-14 w-full rounded-lg border border-oliv/[0.32] bg-page p-4 text-lg text-ink outline-none placeholder:font-light focus:border-gold"
            />
          </div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={vatTransaction}
              onChange={(event) => setVatTransaction(event.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-navy"
            />
            <span className="body-regular text-ink-2">
              The seller is a VAT vendor (for example a developer), so VAT is included in the price
              and no transfer duty is payable.
            </span>
          </label>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-[42px] rounded-2xl border border-oliv/[0.32] bg-oliv/[0.06] p-8 phone:p-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="heading-6">Estimated costs</h2>
            <div className="flex items-baseline gap-0.5" aria-live="polite">
              <span className="heading-4">{formatRand(estimate.total)}</span>
            </div>
          </div>
          <div className="h-0 w-full border-b border-[rgba(183,179,162,0.8)]" />
          <dl className="flex flex-col gap-4">
            {estimate.lines.map((line) => (
              <div key={line.label} className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-4">
                  <dt className="body-regular text-ink-2">{line.label}</dt>
                  <dd className="body-regular font-medium text-ink">{formatRand(line.amount)}</dd>
                </div>
                {line.note && <p className="body-small text-grey-500">{line.note}</p>}
              </div>
            ))}
          </dl>
          <p className="body-small text-grey-500">
            {estimate.feesIncluded
              ? "This is an estimate only. Final figures depend on your transaction and are confirmed in our quote."
              : "Attorney fees, Deeds Office fees and disbursements are quoted per transaction. Send us your sale agreement for an exact quote."}{" "}
            Transfer duty uses the SARS table effective{" "}
            {new Date(transferDuty.effectiveFrom).toLocaleDateString("en-ZA", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
            .
          </p>
        </div>
        <div className="flex flex-col items-stretch">
          <ButtonLink href="/contact-us">Get an Exact Quote</ButtonLink>
        </div>
      </div>
    </div>
  );
}
