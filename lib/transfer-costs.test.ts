import { describe, expect, it } from "vitest";
import {
  calculateTransferDuty,
  estimateTransferCosts,
  formatRand,
  type FeeSchedule,
} from "@/lib/transfer-costs";

describe("calculateTransferDuty", () => {
  // Worked examples against the SARS table effective 1 April 2025.
  it.each([
    [0, 0],
    [1_000_000, 0],
    [1_210_000, 0],
    [1_500_000, 8_700], // 3% of 290,000
    [1_663_800, 13_614], // top of the 3% band
    [2_000_000, 33_786], // 13,614 + 6% of 336,200
    [2_500_000, 67_200], // 53,544 + 8% of 170,700
    [5_000_000, 327_356], // 106,784 + 11% of 2,005,200
    [15_000_000, 1_461_156], // 1,241,456 + 13% of 1,690,000
  ])("R%i → R%i", (price, duty) => {
    expect(calculateTransferDuty(price)).toBe(duty);
  });

  it("treats invalid prices as zero", () => {
    expect(calculateTransferDuty(-5)).toBe(0);
    expect(calculateTransferDuty(Number.NaN)).toBe(0);
  });
});

describe("estimateTransferCosts", () => {
  it("shows transfer duty only while no fee schedule is configured", () => {
    const estimate = estimateTransferCosts({
      price: 2_000_000,
      vatTransaction: false,
      schedule: null,
    });
    expect(estimate.feesIncluded).toBe(false);
    expect(estimate.lines).toHaveLength(1);
    expect(estimate.total).toBe(33_786);
  });

  it("charges no transfer duty on a VAT transaction", () => {
    const estimate = estimateTransferCosts({
      price: 2_000_000,
      vatTransaction: true,
      schedule: null,
    });
    expect(estimate.total).toBe(0);
    expect(estimate.lines[0].note).toMatch(/VAT/);
  });

  it("adds fees, disbursements and VAT on fees from a schedule", () => {
    const schedule: FeeSchedule = {
      effectiveFrom: "2026-01-01",
      conveyancing: [
        { upTo: 1_000_000, fee: 20_000 },
        { upTo: null, fee: 30_000 },
      ],
      deedsOffice: [{ upTo: null, fee: 2_000 }],
      disbursements: 1_000,
    };
    const estimate = estimateTransferCosts({ price: 2_000_000, vatTransaction: false, schedule });
    expect(estimate.feesIncluded).toBe(true);
    expect(Object.fromEntries(estimate.lines.map((line) => [line.label, line.amount]))).toEqual({
      "Transfer duty (SARS)": 33_786,
      "Conveyancing fee": 30_000,
      Disbursements: 1_000,
      "VAT on fees": 4_650,
      "Deeds Office fee": 2_000,
    });
    expect(estimate.total).toBe(71_436);
  });
});

describe("formatRand", () => {
  it("formats whole rand", () => {
    expect(formatRand(33_786).replace(/\s/g, " ")).toBe("R 33 786");
  });
});
