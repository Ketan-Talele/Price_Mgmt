// Mock data for Nycare Status dropdown
// TODO: Replace with API call when connecting to backend
export const NYCARE_STATUSES = [
  { value: "Gold", label: "Gold" },
  { value: "Silver", label: "Silver" },
  { value: "Bronze", label: "Bronze" },
] as const

export type NycareStatus = typeof NYCARE_STATUSES[number]["value"]

