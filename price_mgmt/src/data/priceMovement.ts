// src/data/priceMovement.ts
import type { PriceMovementRow } from "../types/analysis"

export const priceMovementRows: PriceMovementRow[] = [
  {
    customer: "Cust A",
    product: "Product B",
    price202501: 1050,
    price202509: 1000,
    basePriceChange: -61,
    exchangeRateChange: 103,
    adjustedPrice: 1092,
    gap: -92,
  },
  {
    customer: "Cust A",
    product: "Product C",
    price202501: 1030,
    price202509: 1020,
    basePriceChange: -61,
    exchangeRateChange: 103,
    adjustedPrice: 1072,
    gap: -52,
  },
  {
    customer: "Cust B",
    product: "Product C",
    price202501: 1100,
    price202509: 1095,
    basePriceChange: -61,
    exchangeRateChange: 103,
    adjustedPrice: 1142,
    gap: -47,
  },
]


