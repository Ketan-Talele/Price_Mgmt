export interface SalesDeviation {
  customer: string
  product: string
  orderNo: string
  orderType: string
  salesChannel: string
  region: string
  price: number
  min: number
  target: number
  deviation: number
  deviationPercent: number
  comment: string
  commentStatus: "approved" | "pending" | "rejected" | ""
  action: string
}

export type UserRole = "priceManager" | "sales" | "director"





