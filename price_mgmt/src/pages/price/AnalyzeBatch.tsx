import { useAuthStore } from "../../store/authStore"
import { analysisData } from "../../data/analysis"
import type { Batch } from "../../types/batch"
import MainLayout from "../../layout/MainLayout"

interface AnalyzeBatchProps {
  batch: Batch
  onNavigate: (screen: string) => void
}

export default function AnalyzeBatch({ batch, onNavigate }: AnalyzeBatchProps) {
  const { role } = useAuthStore()

  return (
    <MainLayout
      title={`${role === "priceManager" ? "Analyse Batch" : "View Batch"} – ${batch.batchNo}`}
      showBack
      onBack={() => onNavigate("work_price")}
      actions={
        <button
          className="p-2 rounded-full bg-white hover:bg-gray-50 border shadow-sm text-gray-600"
          title="Send Notification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </button>
      }
    >
      <div className="max-w-5xl mx-auto text-sm">
        <div className="grid md:grid-cols-3 gap-3 mb-4 text-xs">
          <div className="bg-white rounded shadow p-3">
            <div className="text-gray-500 mb-1">Effective Date</div>
            <div className="font-semibold">{batch.effDate}</div>
          </div>
          <div className="bg-white rounded shadow p-3">
            <div className="text-gray-500 mb-1">Total Items</div>
            <div className="font-semibold">1,240</div>
          </div>
          <div className="bg-white rounded shadow p-3">
            <div className="text-gray-500 mb-1">Flagged for Review</div>
            <div className="font-semibold text-amber-600">37</div>
          </div>
        </div>
        <div className="bg-white rounded shadow overflow-hidden mb-4">
          <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50">
            Sample Items (EU / non-EU)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs whitespace-nowrap">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-2 text-left font-semibold">Product</th>
                  <th className="p-2 text-left font-semibold">Region</th>
                  <th className="p-2 text-right font-semibold">Min Price</th>
                  <th className="p-2 text-right font-semibold">Target Price</th>
                  <th className="p-2 text-right font-semibold">Variance Vs Last</th>
                  <th className="p-2 text-right font-semibold">Min Margin</th>
                  <th className="p-2 text-right font-semibold">Target Margin</th>
                  <th className="p-2 text-right font-semibold">Min Margin %</th>
                  <th className="p-2 text-right font-semibold">Target Margin %</th>
                  <th className="p-2 text-center font-semibold">Flag</th>
                </tr>
              </thead>
              <tbody>
                {analysisData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b last:border-none hover:bg-gray-50 ${row.flag === "Review" ? "bg-amber-50" : ""}`}
                  >
                    <td className="p-2">{row.product}</td>
                    <td className="p-2">{row.region}</td>
                    <td className="p-2 text-right">{row.minPrice}</td>
                    <td className="p-2 text-right">{row.targetPrice}</td>
                    <td className="p-2 text-right">{row.variance}</td>
                    <td className="p-2 text-right">{row.minMargin}</td>
                    <td className="p-2 text-right">{row.targetMargin}</td>
                    <td className="p-2 text-right">{row.minMarginPct}</td>
                    <td className="p-2 text-right">{row.targetMarginPct}</td>
                    <td
                      className={`p-2 text-center font-medium ${row.flag === "Review" ? "text-red-600" : "text-gray-900"}`}
                    >
                      {row.flag}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs">
          {role === "priceManager" ? (
            <>
              <div className="text-gray-500">
                You can override Min / Target price for flagged items before publishing.
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-2 border rounded bg-white hover:bg-gray-50">Save as Draft</button>
                <button className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                  Publish Batch
                </button>
              </div>
            </>
          ) : (
            <div className="text-gray-500">
              Viewing price batch details. Only Price Managers can edit or publish batches.
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}





