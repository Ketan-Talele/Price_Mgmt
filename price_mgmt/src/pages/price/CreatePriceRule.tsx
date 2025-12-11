import MainLayout from "../../layout/MainLayout"
import { REGIONS, DEPOT_NAMES, SERVICES, PACKAGING_TYPES, NYCARE_STATUSES } from "../../data/mockData"

interface CreatePriceRuleProps {
  onNavigate: (screen: string) => void
}

export default function CreatePriceRule({ onNavigate }: CreatePriceRuleProps) {
  return (
    <MainLayout title="Create Price Calculation Rule" showBack onBack={() => onNavigate("price_calc_rules_list")}>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow text-sm">
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs font-medium mb-1">Item / Family</label>
            <input className="w-full p-2 border rounded" placeholder="Base Oil 150" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Region</label>
            <select className="w-full p-2 border rounded">
              {REGIONS.map((region) => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Depot Name</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Depot</option>
              {DEPOT_NAMES.map((depot) => (
                <option key={depot.value} value={depot.value}>
                  {depot.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Service</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Service</option>
              {SERVICES.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Packaging type</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Packaging</option>
              {PACKAGING_TYPES.map((packaging) => (
                <option key={packaging.value} value={packaging.value}>
                  {packaging.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Nycare Status</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Status</option>
              {NYCARE_STATUSES.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Base Price (reference)</label>
            <input className="w-full p-2 border rounded" placeholder="1,000" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Forex Impact %</label>
            <input className="w-full p-2 border rounded" placeholder="-1.2" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">
              <div className="leading-tight space-y-0">
                <div>Calculated</div>
                <div>Adjusted Price</div>
              </div>
            </label>
            <input className="w-full p-2 border rounded bg-gray-50" placeholder="auto" disabled />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Minimum Margin %</label>
            <input className="w-full p-2 border rounded" placeholder="12" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Target Margin %</label>
            <input className="w-full p-2 border rounded" placeholder="18" />
          </div>
        </div>
        <button className="w-full bg-green-600 text-white p-2 rounded mt-4 hover:bg-green-700">
          Save Rule
        </button>
        <p className="text-xs text-gray-400 mt-2">
          Rules define how new Min / Target prices should move when oil and forex fluctuate.
        </p>
      </div>
    </MainLayout>
  )
}





