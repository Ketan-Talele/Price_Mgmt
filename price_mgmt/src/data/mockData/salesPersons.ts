// Mock data for Sales Person dropdown
// TODO: Replace with API call when connecting to backend
export const SALES_PERSONS = [
  { value: "Sales Person 1", label: "Sales Person 1" },
  { value: "Sales Person 2", label: "Sales Person 2" },
  { value: "Sales Person 3", label: "Sales Person 3" },
] as const

export type SalesPerson = typeof SALES_PERSONS[number]["value"]

