// src/pages/sales/QuotePrice2.tsx
import { useAuthStore } from "../../store/authStore"
import { useState } from "react"
import MainLayout from "../../layout/MainLayout"

interface QuotePrice2Props {
  onNavigate: (screen: string) => void
}

export default function QuotePrice2({ onNavigate }: QuotePrice2Props) {
  const { role } = useAuthStore()
  const [customer, setCustomer] = useState("ABC Plastics GmbH")
  const [product, setProduct] = useState("Base Oil 150")
  const [region, setRegion] = useState("EU")
  const [salesChannel, setSalesChannel] = useState("Spain")
  // These could later be populated from backend when clicking Populate
  const [latestPrice, setLatestPrice] = useState<number | null>(1050)
  const [latestPriceDate, setLatestPriceDate] = useState<string>("2025-01")
  const [nycareStatus, setNycareStatus] = useState<string>("Active")
  const [targetPrice, setTargetPrice] = useState<number | null>(1100)
  const [serviceOption, setServiceOption] = useState("Standard service")
  const [packagingOption, setPackagingOption] = useState("Bulk")
  // Conceptual drivers – later can be fed by analytics
  const [oilPriceChange, setOilPriceChange] = useState(-2.5) // %
  const [oilAdj, setOilAdj] = useState(-20) // EUR/MT
  const [fxChange, setFxChange] = useState(3.1) // %
  const [fxAdj, setFxAdj] = useState(15) // EUR/MT
  const [serviceCost, setServiceCost] = useState(5) // EUR/MT
  const [packagingCost, setPackagingCost] = useState(10) // EUR/MT

  const handlePopulate = () => {
    // In future, call backend using customer/product/region/salesChannel.
    // For now, we just leave the mocked values and simulate a "refresh".
    setLatestPrice(1050)
    setLatestPriceDate("2025-01")
    setNycareStatus("Active")
    setTargetPrice(1100)
  }

  const base = latestPrice ?? 0
  const finalSuggested =
    base + oilAdj + fxAdj + serviceCost + packagingCost

  const roleLabel =
    role === "priceManager"
      ? "Price Manager"
      : role === "sales"
      ? "Sales Manager"
      : "User"

  return (
    <MainLayout title="Quote a Price 2" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-4xl mx-auto mt-8 text-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Quote a Price 2</h2>
            <p className="text-xs text-gray-500 mt-1">
              Assist {roleLabel.toLowerCase()}s with a transparent suggested price,
              based on base price, oil &amp; FX changes, and extra costs for
              services and packaging.
            </p>
          </div>
        </div>
        {/* CUSTOMER / PRODUCT SELECTION */}
        <div className="bg-white rounded shadow p-4 mb-4 grid md:grid-cols-5 gap-3 text-xs">
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Customer</label>
            <input
              className="w-full border rounded p-2"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              placeholder="Type customer name"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Product</label>
            <input
              className="w-full border rounded p-2"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Select product"
            />
          </div>
          <div className="md:col-span-1 flex items-end">
            <button
              onClick={handlePopulate}
              className="w-full bg-blue-600 text-white rounded p-2"
            >
              Populate
            </button>
          </div>
          <div>
            <label className="block mb-1 font-medium mt-2">Region</label>
            <select
              className="w-full border rounded p-2"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option>EU</option>
              <option>Non-EU</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium mt-2">Sales Channel</label>
            <input
              className="w-full border rounded p-2"
              value={salesChannel}
              onChange={(e) => setSalesChannel(e.target.value)}
              placeholder="Spain, Italy, etc."
            />
          </div>
        </div>
        {/* LATEST PRICING SNAPSHOT */}
        <div className="grid md:grid-cols-4 gap-3 mb-4 text-xs">
          <div className="bg-white rounded shadow p-3">
            <div className="text-gray-500 mb-1">Latest Price</div>
            <div className="font-semibold">
              {latestPrice != null ? `${latestPrice} EUR / MT` : "-"}
            </div>
            <div className="text-[11px] text-gray-400">
              As of {latestPriceDate || "-"}
            </div>
          </div>
          <div className="bg-white rounded shadow p-3">
            <div className="text-gray-500 mb-1">Nycare Status</div>
            <div className="font-semibold">{nycareStatus || "-"}</div>
            <div className="text-[11px] text-gray-400">
              Internal product/customer status
            </div>
          </div>
          <div className="bg-white rounded shadow p-3">
            <div className="text-gray-500 mb-1">Target Price</div>
            <div className="font-semibold">
              {targetPrice != null ? `${targetPrice} EUR / MT` : "-"}
            </div>
            <div className="text-[11px] text-gray-400">
              From global price guidance
            </div>
          </div>
          <div className="bg-white rounded shadow p-3">
            <div className="text-gray-500 mb-1">Gap vs Target</div>
            <div className="font-semibold">
              {latestPrice != null && targetPrice != null
                ? `${latestPrice - targetPrice} EUR / MT`
                : "-"}
            </div>
            <div className="text-[11px] text-gray-400">
              Negative gap means below target
            </div>
          </div>
        </div>
        {/* SERVICES & PACKAGING SELECTION */}
        <div className="bg-white rounded shadow p-4 mb-4 grid md:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block mb-1 font-medium">Services</label>
            <select
              className="w-full border rounded p-2 mb-1"
              value={serviceOption}
              onChange={(e) => setServiceOption(e.target.value)}
            >
              <option>Standard service</option>
              <option>Express delivery</option>
              <option>Certification & testing</option>
            </select>
            <input
              type="number"
              className="w-full border rounded p-2"
              value={serviceCost}
              onChange={(e) => setServiceCost(Number(e.target.value) || 0)}
              placeholder="Service cost (EUR / MT)"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Packaging</label>
            <select
              className="w-full border rounded p-2 mb-1"
              value={packagingOption}
              onChange={(e) => setPackagingOption(e.target.value)}
            >
              <option>Bulk</option>
              <option>Drum</option>
              <option>IBC</option>
            </select>
            <input
              type="number"
              className="w-full border rounded p-2"
              value={packagingCost}
              onChange={(e) => setPackagingCost(Number(e.target.value) || 0)}
              placeholder="Packaging cost (EUR / MT)"
            />
          </div>
        </div>
        {/* PRICE DRIVERS */}
        <div className="bg-white rounded shadow p-4 mb-4 text-xs">
          <div className="font-semibold mb-2">Price Drivers</div>
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <label className="block mb-1 font-medium">Oil price change (%)</label>
              <input
                type="number"
                className="w-full border rounded p-2"
                value={oilPriceChange}
                onChange={(e) => setOilPriceChange(Number(e.target.value) || 0)}
              />
              <label className="block mt-2 mb-1 font-medium">
                Recommended oil price adjustment (EUR / MT)
              </label>
              <input
                type="number"
                className="w-full border rounded p-2"
                value={oilAdj}
                onChange={(e) => setOilAdj(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">FX change (%)</label>
              <input
                type="number"
                className="w-full border rounded p-2"
                value={fxChange}
                onChange={(e) => setFxChange(Number(e.target.value) || 0)}
              />
              <label className="block mt-2 mb-1 font-medium">
                FX adjustment (EUR / MT)
              </label>
              <input
                type="number"
                className="w-full border rounded p-2"
                value={fxAdj}
                onChange={(e) => setFxAdj(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <div className="bg-gray-50 rounded p-3 h-full flex flex-col justify-between">
                <div>
                  <div className="text-gray-500 mb-1 text-[11px]">
                    Explanation
                  </div>
                  <p className="text-[11px] text-gray-600">
                    Final suggested price = latest price adjusted for oil &amp; FX,
                    plus specific service and packaging cost per MT.
                  </p>
                </div>
                <div className="text-[11px] text-gray-400 mt-2">
                  This mirrors the Excel logic (Sheet 1) while remaining simple
                  enough for daily use by Sales.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FINAL SUGGESTED PRICE */}
        <div className="bg-white rounded shadow p-4 mb-6 text-xs">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="font-semibold text-sm">Final Suggested Price</div>
              <div className="text-[11px] text-gray-500">
                Use this as guidance. If you go below, you must request approval.
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-2xl font-bold">
              {Number.isFinite(finalSuggested) ? finalSuggested.toFixed(0) : "-"}
            </div>
            <div className="text-xs text-gray-500">EUR / MT</div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}


