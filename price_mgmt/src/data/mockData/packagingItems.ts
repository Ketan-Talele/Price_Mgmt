// Mock data for Packaging Items with costs
// TODO: Replace with API call when connecting to backend
export interface PackagingItem {
  id: string
  packagingType: string
  cost: number
}

export const PACKAGING_ITEMS: PackagingItem[] = [
  { id: "1", packagingType: "Bulk", cost: 30 },
  { id: "2", packagingType: "IBC", cost: 50 },
  { id: "3", packagingType: "Drums", cost: 100 },
]

