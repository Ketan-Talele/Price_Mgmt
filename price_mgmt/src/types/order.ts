export interface Order {
  orderNo: string
  customer: string
  item: string
  region: string
  requestedPrice: number
  minPrice: number
  targetPrice: number
  qty: number
  justification: string
  approvalStatus: string
  endDate?: string
  comment: string
}

export interface PriceCalculationRule {
  itemFamily: string
  region: string
  depotName: string
  service: string
  packagingType: string
  nycareStatus: string
  basedPrice: number
  forexImpact: number
  calculatedPrice: string
  minMargin: number
  targetMargin: number
}

export interface PriceValidationRule {
  ruleName: string
  approverRole: string
  depotName: string
  customer: string
  customerGroup: string
  item: string
  itemGroup: string
  minTolerance: number
  maxTolerance: number
  approvalRequired: string
  tillDate: string
}


