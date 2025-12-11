import type { Order } from "../types/order"

// Mock data for Orders
// TODO: Replace with API call when connecting to backend
export const pendingOrders: Order[] = [
  {
    orderNo: "SO-1001",
    customer: "ABC Plastics GmbH",
    item: "Base Oil 150",
    region: "EU",
    requestedPrice: 950,
    minPrice: 980,
    targetPrice: 1020,
    qty: 12000,
    justification: "Strategic key account – volume commitment for 1 year.",
    approvalStatus: "Pending",
    comment: "",
  },
]

// Mock data for Order Status
// TODO: Replace with API call when connecting to backend
export const orderStatusData: Order[] = [
  {
    orderNo: "SO-1001",
    customer: "ABC Plastics GmbH",
    item: "BT 150",
    region: "EU",
    requestedPrice: 838,
    minPrice: 865,
    targetPrice: 1145,
    qty: 12000,
    justification: "",
    approvalStatus: "Pending",
    comment: "",
  },
  {
    orderNo: "SO-1002",
    customer: "ABC Plastics GmbH",
    item: "BBT 28",
    region: "EU",
    requestedPrice: 950,
    minPrice: 998,
    targetPrice: 1594,
    qty: 12000,
    justification: "",
    approvalStatus: "Approved",
    comment: "Acceptable Limit",
  },
  {
    orderNo: "SO-1003",
    customer: "ABC Plastics GmbH",
    item: "BHP 8",
    region: "EU",
    requestedPrice: 1150,
    minPrice: 1212,
    targetPrice: 1350,
    qty: 12000,
    justification: "",
    approvalStatus: "Rejected",
    comment: "Try to negotiate below 5%",
  },
]





