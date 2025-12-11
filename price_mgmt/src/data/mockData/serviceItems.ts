// Mock data for Service Items with costs
// TODO: Replace with API call when connecting to backend
export interface ServiceItem {
  id: string
  serviceName: string
  cost: number
}

export const SERVICE_ITEMS: ServiceItem[] = [
  { id: "1", serviceName: "Service 1", cost: 44 },
  { id: "2", serviceName: "Service 2", cost: 52 },
  { id: "3", serviceName: "Service 3", cost: 52 },
  { id: "4", serviceName: "Service 4", cost: 60 },
  { id: "5", serviceName: "Service 5", cost: 27 },
  { id: "6", serviceName: "Service 6", cost: 54 },
  { id: "7", serviceName: "Service 7", cost: 32 },
  { id: "8", serviceName: "Service 8", cost: 50 },
  { id: "9", serviceName: "Service 9", cost: 62 },
  { id: "10", serviceName: "Service 10", cost: 38 },
  { id: "11", serviceName: "Service 11", cost: 9 },
  { id: "12", serviceName: "Service 12", cost: 48 },
  { id: "13", serviceName: "Service 13", cost: 48 },
  { id: "14", serviceName: "Service 14", cost: 43 },
]

