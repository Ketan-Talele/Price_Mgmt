import type { SalesDeviation } from "../../types/sales"

interface SalesDeviationTableProps {
  data: SalesDeviation[]
}

export default function SalesDeviationTable({ data }: SalesDeviationTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="w-full text-xs border-collapse border border-gray-300">
        <thead>
          <tr className="border-b bg-gray-50 border-gray-300">
            <th className="p-2 text-left font-semibold border border-gray-300">Customer</th>
            <th className="p-2 text-left font-semibold border border-gray-300">Product</th>
            <th className="p-2 text-left font-semibold border border-gray-300">Order No</th>
            <th className="p-2 text-left font-semibold border border-gray-300">Order Type</th>
            <th className="p-2 text-left font-semibold border border-gray-300">Sales Channel</th>
            <th className="p-2 text-left font-semibold border border-gray-300">Region</th>
            <th className="p-2 text-right font-semibold border border-gray-300">Price</th>
            <th className="p-2 text-right font-semibold border border-gray-300">Min</th>
            <th className="p-2 text-right font-semibold border border-gray-300">Target</th>
            <th className="p-2 text-left font-semibold border border-gray-300">Deviation from</th>
            <th className="p-2 text-left font-semibold border border-gray-300">Comment</th>
            <th className="p-2 text-left font-semibold border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
              <td className="p-2 border border-gray-300">{row.customer}</td>
              <td className="p-2 border border-gray-300">{row.product}</td>
              <td className="p-2 border border-gray-300">{row.orderNo}</td>
              <td className="p-2 border border-gray-300">{row.orderType}</td>
              <td className="p-2 border border-gray-300">{row.salesChannel}</td>
              <td className="p-2 border border-gray-300">{row.region}</td>
              <td className="p-2 text-right border border-gray-300">{row.price.toLocaleString()}</td>
              <td className="p-2 text-right border border-gray-300">{row.min.toLocaleString()}</td>
              <td className="p-2 text-right border border-gray-300">{row.target.toLocaleString()}</td>
              <td className="p-2 border border-gray-300">
                {row.deviationPercent >= 0 ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <span>↑</span>
                    <span>{row.deviationPercent.toFixed(2)}%</span>
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center gap-1">
                    <span>↓</span>
                    <span>{row.deviationPercent.toFixed(2)}%</span>
                  </span>
                )}
              </td>
              <td className="p-2 border border-gray-300">
                {row.comment && (
                  <span
                    className={
                      row.commentStatus === "approved"
                        ? "text-green-600"
                        : row.commentStatus === "rejected" || row.commentStatus === "pending"
                          ? "text-red-600"
                          : ""
                    }
                  >
                    {row.comment}
                  </span>
                )}
              </td>
              <td className="p-2 border border-gray-300">
                {row.action && (
                  <button className="text-blue-600 hover:underline text-xs">{row.action}</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}





