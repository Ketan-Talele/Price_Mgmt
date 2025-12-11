import MainLayout from "../../layout/MainLayout"

interface UploadPriceProps {
  onNavigate: (screen: string) => void
}

export default function UploadPrice({ onNavigate }: UploadPriceProps) {
  return (
    <MainLayout title="Upload Price List" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow text-sm">
        <p className="text-xs text-gray-500 mb-4">
          Upload the final analysed output from your Excel pricing model. System will create a new batch for EU /
          non-EU pricing.
        </p>
        <label className="block text-xs font-medium mb-1">Select File</label>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            placeholder="price_output_2025_01.xlsx"
          />
          <button className="px-3 py-2 border rounded text-xs bg-gray-50 hover:bg-gray-100">
            Browse
          </button>
        </div>
        <label className="block text-xs font-medium mb-1">Effective Date</label>
        <input type="date" className="w-full p-2 border rounded mb-4" />
        <button className="w-full bg-green-600 text-white p-2 rounded mb-2 hover:bg-green-700">
          Upload & Preview
        </button>
        <p className="text-[11px] text-gray-400 mb-1">
          Template fields: Item, Region, Min Price, Target Price, Currency, Margin %.
        </p>
      </div>
    </MainLayout>
  )
}





