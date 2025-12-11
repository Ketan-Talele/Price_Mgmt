// Mock data for Packaging dropdown
// TODO: Replace with API call when connecting to backend
export const PACKAGING_TYPES = [
  { value: "Bulk", label: "Bulk" },
  { value: "IBC", label: "IBC" },
  { value: "Drums", label: "Drums" },
] as const

export type PackagingType = typeof PACKAGING_TYPES[number]["value"]

