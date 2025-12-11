import type { PriceCalculationRule, PriceValidationRule } from "../types/order"

// Mock data for Price Calculation Rules
// TODO: Replace with API call when connecting to backend
export const priceCalculationRules: PriceCalculationRule[] = [
  {
    itemFamily: "BNS 150",
    region: "Europe",
    depotName: "Hull",
    service: "Service 2",
    packagingType: "Bulk",
    nycareStatus: "Gold",
    basedPrice: 1000,
    forexImpact: -1.2,
    calculatedPrice: "Auto",
    minMargin: 12,
    targetMargin: 18,
  },
  {
    itemFamily: "BT 150",
    region: "ECO",
    depotName: "LBC",
    service: "Service 3",
    packagingType: "Bulk",
    nycareStatus: "Gold",
    basedPrice: 1200,
    forexImpact: -1.2,
    calculatedPrice: "Auto",
    minMargin: 13,
    targetMargin: 18,
  },
]

// Mock data for Price Validation Rules
// TODO: Replace with API call when connecting to backend
export const priceValidationRules: PriceValidationRule[] = [
  {
    ruleName: "Test 1",
    approverRole: "Director",
    depotName: "",
    customer: "",
    customerGroup: "",
    item: "",
    itemGroup: "",
    minTolerance: 3,
    maxTolerance: 5,
    approvalRequired: "Y",
    tillDate: "",
  },
  {
    ruleName: "Test 2",
    approverRole: "VP",
    depotName: "",
    customer: "111222",
    customerGroup: "",
    item: "BT 150",
    itemGroup: "",
    minTolerance: 3,
    maxTolerance: 5,
    approvalRequired: "N",
    tillDate: "12/31/2025",
  },
]


