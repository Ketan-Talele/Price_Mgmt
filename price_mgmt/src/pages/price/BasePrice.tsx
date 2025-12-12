import { useState } from "react"
import MainLayout from "../../layout/MainLayout"
import { basePriceRows } from "../../data/basePrice"

interface BasePriceProps {
  onNavigate: (screen: string) => void
}

export default function BasePrice({ onNavigate }: BasePriceProps) {
  const [effectiveDate, setEffectiveDate] = useState("2025-01-01")
  const [totalItems, setTotalItems] = useState(basePriceRows.length)

  return (
    <MainLayout title="Base Price" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow text-sm">
        <div className="mb-4 grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium mb-1">Effective Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Total Items</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={totalItems}
              onChange={(e) => setTotalItems(Number(e.target.value) || 0)}
            />
          </div>
        </div>

        <div className="bg-white rounded shadow overflow-hidden">
          <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50">
            Base Price Data
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Customer</th>
                <th className="p-2 text-left">Region</th>
                <th className="p-2 text-right">Base Price</th>
              </tr>
            </thead>
            <tbody>
              {basePriceRows.map((row, idx) => (
                <tr key={`${row.product}-${row.customer}-${row.region}-${idx}`} className="border-b last:border-none hover:bg-gray-50">
                  <td className="p-2">{row.product}</td>
                  <td className="p-2">{row.customer}</td>
                  <td className="p-2">{row.region}</td>
                  <td className="p-2 text-right">{row.basePrice.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  )
}

