import MainLayout from "../../layout/MainLayout"
import { APPROVER_ROLES, DEPOT_NAMES } from "../../data/mockData"

interface CreateValidationRuleProps {
  onNavigate: (screen: string) => void
}

export default function CreateValidationRule({ onNavigate }: CreateValidationRuleProps) {
  return (
    <MainLayout title="Create Price Validation Rule" showBack onBack={() => onNavigate("price_validation_rules_list")}>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow text-sm">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium mb-1">Rule Name</label>
            <input className="w-full p-2 border rounded" placeholder="Enter rule name" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Approver Role</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Role</option>
              {APPROVER_ROLES.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
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
            <label className="block text-xs font-medium mb-1">Customer</label>
            <input className="w-full p-2 border rounded" placeholder="Enter customer name" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Customer Group</label>
            <input className="w-full p-2 border rounded" placeholder="Enter customer group" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Item</label>
            <input className="w-full p-2 border rounded" placeholder="Enter item name" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Item Group</label>
            <input className="w-full p-2 border rounded" placeholder="Enter item group" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Min Tolerance %</label>
            <input className="w-full p-2 border rounded" type="number" placeholder="0" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Max Tolerance %</label>
            <input className="w-full p-2 border rounded" type="number" placeholder="0" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="approval_required" className="rounded border-gray-300" />
            <label htmlFor="approval_required" className="text-xs font-medium">
              Approval Required
            </label>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Date</label>
            <input className="w-full p-2 border rounded" type="date" placeholder="dd-mm-yyyy" />
          </div>
        </div>
        <button className="w-full bg-green-600 text-white p-2 rounded mt-4 hover:bg-green-700">
          Save Validation Rule
        </button>
      </div>
    </MainLayout>
  )
}


