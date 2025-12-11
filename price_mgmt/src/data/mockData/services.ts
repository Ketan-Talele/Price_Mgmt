// Mock data for Services dropdown
// TODO: Replace with API call when connecting to backend
export const SERVICES = Array.from({ length: 14 }, (_, i) => ({
  value: `Service ${i + 1}`,
  label: `Service ${i + 1}`,
}))

export type Service = typeof SERVICES[number]["value"]

