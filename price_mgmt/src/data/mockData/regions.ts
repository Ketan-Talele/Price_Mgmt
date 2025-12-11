// Mock data for Region dropdown
// TODO: Replace with API call when connecting to backend
export const REGIONS = [
  { value: "Europe", label: "Europe" },
  { value: "ECO", label: "ECO" },
  { value: "Global Default", label: "Global Default" },
] as const

export type Region = typeof REGIONS[number]["value"]

