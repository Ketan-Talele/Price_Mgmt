import { priceValidationRules } from "../../data/priceRules"
import MainLayout from "../../layout/MainLayout"

interface PriceValidationRulesProps {
  onNavigate: (screen: string) => void
}

export default function PriceValidationRules({ onNavigate }: PriceValidationRulesProps) {
  return (
    <MainLayout
      title="Price Validation Rule"
      showBack
      onBack={() => onNavigate("home")}
      actions={
        <button
          onClick={() => onNavigate("create_validation_rule")}
          className="px-3 py-1 border rounded bg-white text-xs hover:bg-gray-50"
        >
          + Create Rule
        </button>
      }
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-2 text-left font-semibold">Rule Name</th>
                <th className="p-2 text-left font-semibold">Approver Role</th>
                <th className="p-2 text-left font-semibold">Depot Name</th>
                <th className="p-2 text-left font-semibold">Customer</th>
                <th className="p-2 text-left font-semibold">Customer Group</th>
                <th className="p-2 text-left font-semibold">Item</th>
                <th className="p-2 text-left font-semibold">Item Group</th>
                <th className="p-2 text-right font-semibold">Min Tolerance %</th>
                <th className="p-2 text-right font-semibold">Max Tolerance %</th>
                <th className="p-2 text-center font-semibold">Approval Required</th>
                <th className="p-2 text-left font-semibold">Till Date</th>
              </tr>
            </thead>
            <tbody>
              {priceValidationRules.map((rule, index) => (
                <tr key={index} className="border-b last:border-none hover:bg-gray-50">
                  <td className="p-2">{rule.ruleName}</td>
                  <td className="p-2">{rule.approverRole}</td>
                  <td className="p-2">{rule.depotName}</td>
                  <td className="p-2">{rule.customer}</td>
                  <td className="p-2">{rule.customerGroup}</td>
                  <td className="p-2">{rule.item}</td>
                  <td className="p-2">{rule.itemGroup}</td>
                  <td className="p-2 text-right">{rule.minTolerance}</td>
                  <td className="p-2 text-right">{rule.maxTolerance}</td>
                  <td className="p-2 text-center">{rule.approvalRequired}</td>
                  <td className="p-2">{rule.tillDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  )
}


