import type { Batch } from "../../types/batch"

interface BatchTableProps {
  batches: Batch[]
  role: "priceManager" | "sales" | "director"
  onAnalyze?: (batch: Batch) => void
}

export default function BatchTable({ batches, role, onAnalyze }: BatchTableProps) {
  return (
    <table className="w-full bg-white shadow rounded text-sm">
      <thead>
        <tr className="border-b bg-gray-50">
          <th className="p-2 text-left">Batch No</th>
          <th className="p-2 text-left">Effective Date</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {batches.map((b) => (
          <tr key={b.batchNo} className="border-b last:border-none hover:bg-gray-50">
            <td className="p-2">{b.batchNo}</td>
            <td className="p-2">{b.effDate}</td>
            <td className="p-2">{b.status}</td>
            <td className="p-2">
              {role === "priceManager" ? (
                <button onClick={() => onAnalyze?.(b)} className="text-blue-600 text-xs hover:underline">
                  Analyse / Publish
                </button>
              ) : (
                <button onClick={() => onAnalyze?.(b)} className="text-blue-600 text-xs hover:underline">
                  View only
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}





