import { useState } from "react"
import MainLayout from "../../layout/MainLayout"
import { DEPOT_NAMES, NYCARE_STATUSES, SERVICES, PACKAGING_TYPES } from "../../data/mockData"

interface CreateOrderProps {
  onNavigate: (screen: string) => void
}

export default function CreateOrder({ onNavigate }: CreateOrderProps) {
  const [formData, setFormData] = useState({
    customer: "",
    item: "",
    depotName: "",
    nycareStatus: "",
    laborPrice: "",
    laborDate: "",
    targetPrice: "",
    services: "",
    packaging: "",
    recommendedOilPriceChange: "",
    recommendedOilPriceAdj: "",
    recommendedFXChange: "",
    recommendedFXAdj: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateFinalPrice = () => {
    // Calculation logic would go here
    return ""
  }

  return (
    <MainLayout title="Quote a Price 1" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow text-sm">
        <div className="mb-6">
          <h3 className="text-base font-semibold mb-4">Quote a Price 1</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1">Customer</label>
              <input
                className="w-full p-2 border rounded"
                placeholder="Enter customer"
                value={formData.customer}
                onChange={(e) => handleInputChange("customer", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Item</label>
              <input
                className="w-full p-2 border rounded"
                placeholder="Enter item"
                value={formData.item}
                onChange={(e) => handleInputChange("item", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Depot Name</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.depotName}
                onChange={(e) => handleInputChange("depotName", e.target.value)}
              >
                <option value="">Select Depot</option>
                {DEPOT_NAMES.map((depot) => (
                  <option key={depot.value} value={depot.value}>
                    {depot.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Nycare Status</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.nycareStatus}
                onChange={(e) => handleInputChange("nycareStatus", e.target.value)}
              >
                <option value="">Select Status</option>
                {NYCARE_STATUSES.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Labor Price & Date</label>
              <div className="flex gap-2">
                <input
                  className="flex-1 p-2 border rounded"
                  placeholder="Price"
                  type="number"
                  value={formData.laborPrice}
                  onChange={(e) => handleInputChange("laborPrice", e.target.value)}
                />
                <input
                  className="flex-1 p-2 border rounded"
                  placeholder="Date"
                  type="date"
                  value={formData.laborDate}
                  onChange={(e) => handleInputChange("laborDate", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Target Price</label>
              <input
                className="w-full p-2 border rounded"
                placeholder="Enter target price"
                type="number"
                value={formData.targetPrice}
                onChange={(e) => handleInputChange("targetPrice", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Services</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.services}
                onChange={(e) => handleInputChange("services", e.target.value)}
              >
                <option value="">Select Service</option>
                {SERVICES.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              <p className="text-[10px] text-gray-500 mt-1">Drop Down List</p>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Packaging</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.packaging}
                onChange={(e) => handleInputChange("packaging", e.target.value)}
              >
                <option value="">Select Packaging</option>
                {PACKAGING_TYPES.map((packaging) => (
                  <option key={packaging.value} value={packaging.value}>
                    {packaging.label}
                  </option>
                ))}
              </select>
              <p className="text-[10px] text-gray-500 mt-1">Drop down List</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-semibold mb-4">Calculate On</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1">Recommended Oil Price Change</label>
              <input
                className="w-full p-2 border rounded"
                placeholder="Enter value"
                type="number"
                value={formData.recommendedOilPriceChange}
                onChange={(e) => handleInputChange("recommendedOilPriceChange", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Recommended Oil Price Adj</label>
              <input
                className="w-full p-2 border rounded"
                placeholder="Enter value"
                type="number"
                value={formData.recommendedOilPriceAdj}
                onChange={(e) => handleInputChange("recommendedOilPriceAdj", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Recommended FX Change</label>
              <input
                className="w-full p-2 border rounded"
                placeholder="Enter value"
                type="number"
                value={formData.recommendedFXChange}
                onChange={(e) => handleInputChange("recommendedFXChange", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Recommended FX Adj</label>
              <input
                className="w-full p-2 border rounded"
                placeholder="Enter value"
                type="number"
                value={formData.recommendedFXAdj}
                onChange={(e) => handleInputChange("recommendedFXAdj", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Services $</label>
              <input
                className="w-full p-2 border rounded bg-gray-100"
                placeholder="Auto-calculated"
                type="number"
                disabled
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Packaging $</label>
              <input
                className="w-full p-2 border rounded bg-gray-100"
                placeholder="Auto-calculated"
                type="number"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-xs font-medium mb-1">Final Suggested Price</label>
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <div className="text-lg font-semibold text-green-800">
              {calculateFinalPrice() || "0.00"}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}


