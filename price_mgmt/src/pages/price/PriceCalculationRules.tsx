import { priceCalculationRules } from "../../data/priceRules"
import MainLayout from "../../layout/MainLayout"

interface PriceCalculationRulesProps {
  onNavigate: (screen: string) => void
}

export default function PriceCalculationRules({ onNavigate }: PriceCalculationRulesProps) {
  return (
    <MainLayout
      title="Price Calculation Rule"
      showBack
      onBack={() => onNavigate("home")}
      actions={
        <button
          onClick={() => onNavigate("create_rule")}
          className="px-3 py-1 border rounded bg-white text-xs hover:bg-gray-50"
        >
          + Create Rule
        </button>
      }
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-2 text-left font-semibold">Item/Family</th>
                <th className="p-2 text-left font-semibold">Region</th>
                <th className="p-2 text-left font-semibold">Depot Name</th>
                <th className="p-2 text-left font-semibold">Service</th>
                <th className="p-2 text-left font-semibold">Packaging Type</th>
                <th className="p-2 text-left font-semibold">Nycare Status</th>
                <th className="p-2 text-right font-semibold">Based Price</th>
                <th className="p-2 text-right font-semibold">Forex Impact %</th>
                <th className="p-2 text-left font-semibold whitespace-normal min-w-[120px]">
                  <div className="leading-tight space-y-0">
                    <div>Calculated</div>
                    <div>Adjusted Price</div>
                  </div>
                </th>
                <th className="p-2 text-right font-semibold">Min Margin %</th>
                <th className="p-2 text-right font-semibold">Target Margin %</th>
              </tr>
            </thead>
            <tbody>
              {priceCalculationRules.map((rule, index) => (
                <tr key={index} className="border-b last:border-none hover:bg-gray-50">
                  <td className="p-2">{rule.itemFamily}</td>
                  <td className="p-2">{rule.region}</td>
                  <td className="p-2">{rule.depotName}</td>
                  <td className="p-2">{rule.service}</td>
                  <td className="p-2">{rule.packagingType}</td>
                  <td className="p-2">{rule.nycareStatus}</td>
                  <td className="p-2 text-right">{rule.basedPrice}</td>
                  <td className="p-2 text-right">{rule.forexImpact}</td>
                  <td className="p-2">{rule.calculatedPrice}</td>
                  <td className="p-2 text-right">{rule.minMargin}</td>
                  <td className="p-2 text-right">{rule.targetMargin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  )
}





