import { useState } from "react"
import MainLayout from "../../layout/MainLayout"

interface UploadBasePriceProps {
  onNavigate: (screen: string) => void
}

export default function UploadBasePrice({ onNavigate }: UploadBasePriceProps) {
  const [selectedFile, setSelectedFile] = useState("")
  const [effectiveDate, setEffectiveDate] = useState("")

  const handleFileSelect = () => {
    // In a real implementation, this would open a file picker
    // For now, we'll just simulate file selection
    setSelectedFile("price_output_2025_01.xlsx")
  }

  const handleUpload = () => {
    // In a real implementation, this would upload the file to backend
    // For now, we'll navigate to the base price view after validation
    if (selectedFile && effectiveDate) {
      // Simulate successful upload
      onNavigate("base_price")
    } else {
      alert("Please select a file and enter an effective date")
    }
  }

  return (
    <MainLayout title="Upload Base Price" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow text-sm">
        <p className="text-xs text-gray-500 mb-4">
          Upload the final analysed output from your Excel pricing model. System will create a new batch for EU / non-EU pricing.
        </p>
        
        <div className="mb-4">
          <label className="block text-xs font-medium mb-1">Select File</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded"
              placeholder="price_output_2025_01.xlsx"
              value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.value)}
              readOnly
            />
            <button 
              onClick={handleFileSelect}
              className="px-3 py-2 border rounded text-xs bg-gray-50 hover:bg-gray-100"
            >
              Browse
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium mb-1">Effective Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleUpload}
          className="w-full bg-green-600 text-white p-2 rounded mb-2 hover:bg-green-700"
        >
          Upload Base Price & Review
        </button>

        <p className="text-[11px] text-gray-400 mb-1">
          Template Fields: Item, Region, Min Price, Target Price, Currency, Margin %.
        </p>
      </div>
    </MainLayout>
  )
}
