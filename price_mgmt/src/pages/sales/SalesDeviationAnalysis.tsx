import { salesDeviationData } from "../../data/salesDeviation"
import SalesDeviationTable from "../../components/tables/SalesDeviationTable"
import MainLayout from "../../layout/MainLayout"
import { SALES_PERSONS } from "../../data/mockData"

interface SalesDeviationAnalysisProps {
  onNavigate: (screen: string) => void
}

export default function SalesDeviationAnalysis({ onNavigate }: SalesDeviationAnalysisProps) {
  return (
    <MainLayout title="Sales Deviation Analysis" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow text-sm">
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium mb-1">Sales Person</label>
            <select className="w-full p-2 border rounded">
              {SALES_PERSONS.map((person) => (
                <option key={person.value} value={person.value}>
                  {person.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Date From</label>
            <input type="date" className="w-full p-2 border rounded" defaultValue="2025-10-01" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Date To</label>
            <input type="date" className="w-full p-2 border rounded" defaultValue="2025-10-31" />
          </div>
        </div>
        <SalesDeviationTable data={salesDeviationData} />
      </div>
    </MainLayout>
  )
}





