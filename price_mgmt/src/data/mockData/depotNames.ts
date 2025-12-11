// Mock data for Depot Name dropdown
// TODO: Replace with API call when connecting to backend
export const DEPOT_NAMES = [
  { value: "LBC", label: "LBC" },
  { value: "Hull", label: "Hull" },
  { value: "NNH", label: "NNH" },
] as const

export type DepotName = typeof DEPOT_NAMES[number]["value"]

