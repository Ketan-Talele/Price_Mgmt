import { useAuthStore } from "../../store/authStore"
import { batches } from "../../data/batches"
import BatchTable from "../../components/tables/BatchTable"
import MainLayout from "../../layout/MainLayout"

interface WorkWithPriceProps {
  onNavigate: (screen: string) => void
  onAnalyzeBatch: (batch: typeof batches[0]) => void
}

export default function WorkWithPrice({ onNavigate, onAnalyzeBatch }: WorkWithPriceProps) {
  const { role } = useAuthStore()

  return (
    <MainLayout
      title="Price List"
      showBack
      onBack={() => onNavigate("home")}
      actions={
        role === "priceManager" && (
          <button
            onClick={() => onNavigate("upload_price")}
            className="px-3 py-1 border rounded bg-white text-xs hover:bg-gray-50"
          >
            + Upload New Batch
          </button>
        )
      }
    >
      <div className="max-w-4xl mx-auto">
        <BatchTable batches={batches} role={role!} onAnalyze={onAnalyzeBatch} />
      </div>
    </MainLayout>
  )
}





