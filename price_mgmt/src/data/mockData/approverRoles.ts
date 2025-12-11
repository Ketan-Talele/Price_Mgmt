// Mock data for Approver Role dropdown
// TODO: Replace with API call when connecting to backend
export const APPROVER_ROLES = [
  { value: "Director", label: "Director" },
  { value: "VP", label: "VP" },
] as const

export type ApproverRole = typeof APPROVER_ROLES[number]["value"]

