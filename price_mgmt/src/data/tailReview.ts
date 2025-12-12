// src/data/tailReview.ts
import type { TailReviewRow } from "../types/analysis"

// Sample data based on the client's Tail Review idea.
// You can later replace with real backend data.
export const tailReviewRows: TailReviewRow[] = [
  {
    customer: "Cust A",
    product: "Product B",
    nbdPerTon: 35,
    pricePremium: -25,
    percentile: 5,
  },
  {
    customer: "Cust A",
    product: "Product C",
    nbdPerTon: 42,
    pricePremium: -18,
    percentile: 8,
  },
  {
    customer: "Cust B",
    product: "Product C",
    nbdPerTon: 30,
    pricePremium: -30,
    percentile: 3,
  },
  {
    customer: "Cust C",
    product: "Product D",
    nbdPerTon: 55,
    pricePremium: -10,
    percentile: 15,
  },
]


