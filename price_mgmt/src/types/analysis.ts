// src/types/analysis.ts

// Sheet 1: Detailed price movement table row
export interface PriceMovementRow {
  customer: string
  product: string
  price202501: number
  price202509: number
  basePriceChange: number
  exchangeRateChange: number
  adjustedPrice: number
  gap: number
}

// Sheet 2: Tail review row (customer-product level)
export interface TailReviewRow {
  customer: string
  product: string
  nbdPerTon: number // NBD/T – Net Back Depot per ton
  pricePremium: number
  percentile: number
}

// Sheet 3: Product overview row – aggregated per product
export interface ProductOverviewRow {
  product: string
  nbdPerTon: number      // aggregated / weighted NBD/T
  pricePremium: number   // aggregated / weighted price premium
  percentile: number     // weighted percentile vs Nynas global
}

// Sheet 3: Customer overview row – aggregated per customer
export interface CustomerOverviewRow {
  customer: string
  nbdPerTon: number      // aggregated / weighted NBD/T
  pricePremium: number   // aggregated / weighted price premium
  percentile: number     // weighted percentile vs Nynas global
}


