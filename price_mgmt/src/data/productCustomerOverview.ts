// src/data/productCustomerOverview.ts
import type { ProductOverviewRow, CustomerOverviewRow } from "../types/analysis"

// Sample Sheet 3 data – feel free to replace with real values later
export const productOverviewRows: ProductOverviewRow[] = [
  {
    product: "Product A",
    nbdPerTon: 52,
    pricePremium: -8,
    percentile: 12, // worst performing product
  },
  {
    product: "Product B",
    nbdPerTon: 60,
    pricePremium: -3,
    percentile: 25,
  },
  {
    product: "Product C",
    nbdPerTon: 70,
    pricePremium: 2,
    percentile: 40,
  },
]

export const customerOverviewRows: CustomerOverviewRow[] = [
  {
    customer: "Cust A",
    nbdPerTon: 38,
    pricePremium: -22,
    percentile: 10,
  },
  {
    customer: "Cust B",
    nbdPerTon: 45,
    pricePremium: -15,
    percentile: 18,
  },
  {
    customer: "Cust C",
    nbdPerTon: 58,
    pricePremium: -5,
    percentile: 30,
  },
]


