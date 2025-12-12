export interface BasePriceRow {
  product: string
  customer: string
  region: string
  basePrice: number
}

export interface BasePriceUpload {
  effectiveDate: string
  totalItems: number
  rows: BasePriceRow[]
}

