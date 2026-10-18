// Transfer cost estimates for South African residential property.
//
// TODO(content): Tim must confirm every figure here before launch.
// - Transfer duty brackets are the SARS table effective 1 April 2025. Check whether a later
//   Budget changed them (sars.gov.za → Transfer Duty).
// - Conveyancing and Deeds Office fees are left empty: each firm sets its own tariff, so the
//   calculator only shows them once Tim fills in `feeSchedule`.

export type Bracket = {
  /** Upper bound of the bracket in rand (inclusive). `null` means no upper bound. */
  upTo: number | null;
  /** Fixed amount payable at the start of the bracket. */
  base: number;
  /** Rate applied to the value above `from`. */
  rate: number;
  from: number;
};

export const transferDuty = {
  effectiveFrom: "2025-04-01",
  brackets: [
    { from: 0, upTo: 1_210_000, base: 0, rate: 0 },
    { from: 1_210_000, upTo: 1_663_800, base: 0, rate: 0.03 },
    { from: 1_663_800, upTo: 2_329_300, base: 13_614, rate: 0.06 },
    { from: 2_329_300, upTo: 2_994_800, base: 53_544, rate: 0.08 },
    { from: 2_994_800, upTo: 13_310_000, base: 106_784, rate: 0.11 },
    { from: 13_310_000, upTo: null, base: 1_241_456, rate: 0.13 },
  ] satisfies Bracket[],
};

export const VAT_RATE = 0.15;

/** A stepped fee table: the fee for the first band whose `upTo` covers the price. */
export type FeeBand = { upTo: number | null; fee: number };

export type FeeSchedule = {
  effectiveFrom: string;
  /** Attorney's conveyancing fee, excluding VAT. */
  conveyancing: FeeBand[];
  /** Deeds Office registration fee (no VAT). */
  deedsOffice: FeeBand[];
  /** Flat disbursements such as postage, FICA and document generation, excluding VAT. */
  disbursements: number;
};

// TODO(content): Tim's fee tariff. While this is null the calculator shows transfer duty only.
export const feeSchedule: FeeSchedule | null = null;

export function calculateTransferDuty(price: number): number {
  if (!Number.isFinite(price) || price <= 0) return 0;
  const bracket = transferDuty.brackets.find((b) => b.upTo === null || price <= b.upTo);
  if (!bracket) return 0;
  return Math.round(bracket.base + (price - bracket.from) * bracket.rate);
}

function feeFor(bands: FeeBand[], price: number) {
  return bands.find((band) => band.upTo === null || price <= band.upTo)?.fee ?? 0;
}

export type TransferCostLine = { label: string; amount: number; note?: string };

export type TransferCostEstimate = {
  lines: TransferCostLine[];
  total: number;
  feesIncluded: boolean;
};

export function estimateTransferCosts({
  price,
  vatTransaction,
  schedule = feeSchedule,
}: {
  price: number;
  /** The seller is a VAT vendor: VAT is included in the price and no transfer duty is payable. */
  vatTransaction: boolean;
  schedule?: FeeSchedule | null;
}): TransferCostEstimate {
  const lines: TransferCostLine[] = [
    vatTransaction
      ? { label: "Transfer duty", amount: 0, note: "Not payable: VAT is included in the purchase price." }
      : { label: "Transfer duty (SARS)", amount: calculateTransferDuty(price) },
  ];

  if (schedule) {
    const conveyancing = feeFor(schedule.conveyancing, price);
    lines.push(
      { label: "Conveyancing fee", amount: conveyancing },
      { label: "Disbursements", amount: schedule.disbursements },
      { label: "VAT on fees", amount: Math.round((conveyancing + schedule.disbursements) * VAT_RATE) },
      { label: "Deeds Office fee", amount: feeFor(schedule.deedsOffice, price) },
    );
  }

  return {
    lines,
    total: lines.reduce((sum, line) => sum + line.amount, 0),
    feesIncluded: schedule !== null,
  };
}

export function formatRand(amount: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(amount);
}
