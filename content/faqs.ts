export type Faq = { question: string; answer: string };

// The Webflow site also listed template questions about the Webflow template itself; those are dropped.
// TODO(content): Tim to add more property-transfer FAQs.
export const faqs: Faq[] = [
  {
    question: "Who pays for the council and body corporate clearances?",
    answer:
      "Clearance application charges form part of the transfer costs and are payable by the purchaser. However, the seller must settle the amount reflected on the clearance figures to place their account in credit in order to obtain a clearance certificate. After registration, the transferring attorney will do a pro rata calculation and refund any credit to the seller, as the purchaser takes over the account with the credit applied.",
  },
  {
    question: "Penalty interest when cancelling your bond?",
    answer:
      "Sellers are reminded to notify their bank as soon as they intend to cancel their bond. This is often overlooked when a property is placed on the market, and the bank is only informed once a sale agreement has been signed and a transferring attorney appointed. This may result in up to three months’ penalty interest being added to the bond cancellation figure. Although this amount is included in the pro rata calculations during transfer, early notification can help sellers avoid unnecessary costs.",
  },
];
