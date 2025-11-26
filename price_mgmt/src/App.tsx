import { useState } from "react"

// Simple clickable prototype for Global Price Management

// Screens: Login → Home → Work With Price / Create Rule / Upload & Analyse / Price Inquiry / Create Order / Approvals / Order Status

interface Batch {
  batchNo: string
  effDate: string
  status: string
}

interface Order {
  orderNo: string
  customer: string
  item: string
  region: string
  requestedPrice: number
  minPrice: number
  targetPrice: number
  qty: number
  justification: string
  approvalStatus: string
  comment: string
}

export default function App() {
  const [screen, setScreen] = useState("login")
  const [role, setRole] = useState<"priceManager" | "sales" | "director">("sales")
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const go = (s: string) => () => setScreen(s)

  const handleLogin = (r: "priceManager" | "sales" | "director") => {
    setRole(r)
    setScreen("home")
  }

  const openBatchAnalysis = (batch: Batch) => {
    setSelectedBatch(batch)
    setScreen("analyze_batch")
  }

  const openOrderApproval = (order: Order) => {
    setSelectedOrder(order)
    setScreen("approve_order_detail")
  }

  // Sample data for batches & approvals
  const batches: Batch[] = [
    { batchNo: "2025-01", effDate: "01-Jan-2025", status: "Draft" },
    { batchNo: "2025-02", effDate: "01-Feb-2025", status: "Published" },
  ]

  const pendingOrders: Order[] = [
    {
      orderNo: "SO-1001",
      customer: "ABC Plastics GmbH",
      item: "Base Oil 150",
      region: "EU",
      requestedPrice: 950,
      minPrice: 980,
      targetPrice: 1020,
      qty: 12000,
      justification: "Strategic key account – volume commitment for 1 year.",
      approvalStatus: "Pending",
      comment: "",
    },
  ]

  const orderStatusData: Order[] = [
    {
      orderNo: "SO-1001",
      customer: "ABC Plastics GmbH",
      item: "BT 150",
      region: "EU",
      requestedPrice: 838,
      minPrice: 865,
      targetPrice: 1145,
      qty: 12000,
      justification: "",
      approvalStatus: "Pending",
      comment: "",
    },
    {
      orderNo: "SO-1002",
      customer: "ABC Plastics GmbH",
      item: "BBT 28",
      region: "EU",
      requestedPrice: 950,
      minPrice: 998,
      targetPrice: 1594,
      qty: 12000,
      justification: "",
      approvalStatus: "Approved",
      comment: "Acceptable Limit",
    },
    {
      orderNo: "SO-1003",
      customer: "ABC Plastics GmbH",
      item: "BHP 8",
      region: "EU",
      requestedPrice: 1150,
      minPrice: 1212,
      targetPrice: 1350,
      qty: 12000,
      justification: "",
      approvalStatus: "Rejected",
      comment: "Try to negotiate below 5%",
    },
  ]

  const analysisData = [
    {
      product: "Base Stock 130",
      region: "Europe",
      minPrice: "1,082",
      targetPrice: "1,166",
      variance: "5%",
      minMargin: "297",
      targetMargin: "381",
      minMarginPct: "27%",
      targetMarginPct: "33%",
      flag: "Ok",
    },
    {
      product: "BBT 28",
      region: "Europe",
      minPrice: "998",
      targetPrice: "1,594",
      variance: "6%",
      minMargin: "400",
      targetMargin: "996",
      minMarginPct: "40%",
      targetMarginPct: "62%",
      flag: "Ok",
    },
    {
      product: "BHP 8",
      region: "Europe",
      minPrice: "1,212",
      targetPrice: "1,350",
      variance: "10%",
      minMargin: "200",
      targetMargin: "338",
      minMarginPct: "17%",
      targetMarginPct: "25%",
      flag: "Ok",
    },
    {
      product: "BNS 10",
      region: "Europe",
      minPrice: "1,250",
      targetPrice: "1,456",
      variance: "-2%",
      minMargin: "425",
      targetMargin: "631",
      minMarginPct: "34%",
      targetMarginPct: "43%",
      flag: "Review",
    },
    {
      product: "BNS 14",
      region: "Europe",
      minPrice: "1,225",
      targetPrice: "1,669",
      variance: "4%",
      minMargin: "361",
      targetMargin: "805",
      minMarginPct: "29%",
      targetMarginPct: "48%",
      flag: "Ok",
    },
    {
      product: "BNS 150",
      region: "Europe",
      minPrice: "1,040",
      targetPrice: "1,372",
      variance: "7%",
      minMargin: "200",
      targetMargin: "533",
      minMarginPct: "19%",
      targetMarginPct: "39%",
      flag: "Review",
    },
    {
      product: "Base Stock 130",
      region: "ECO",
      minPrice: "1,044",
      targetPrice: "1,354",
      variance: "9%",
      minMargin: "259",
      targetMargin: "569",
      minMarginPct: "25%",
      targetMarginPct: "42%",
      flag: "OK",
    },
    {
      product: "BBT 28",
      region: "ECO",
      minPrice: "798",
      targetPrice: "848",
      variance: "3%",
      minMargin: "200",
      targetMargin: "250",
      minMarginPct: "25%",
      targetMarginPct: "29%",
      flag: "Review",
    },
    {
      product: "BNS 10",
      region: "ECO",
      minPrice: "1,224",
      targetPrice: "1,385",
      variance: "3%",
      minMargin: "399",
      targetMargin: "561",
      minMarginPct: "33%",
      targetMarginPct: "40%",
      flag: "Review",
    },
    {
      product: "BNS 30",
      region: "ECO",
      minPrice: "1,037",
      targetPrice: "1,308",
      variance: "3%",
      minMargin: "252",
      targetMargin: "524",
      minMarginPct: "24%",
      targetMarginPct: "40%",
      flag: "OK",
    },
    {
      product: "BT 150",
      region: "ECO",
      minPrice: "865",
      targetPrice: "1,145",
      variance: "3%",
      minMargin: "200",
      targetMargin: "479",
      minMarginPct: "23%",
      targetMarginPct: "42%",
      flag: "OK",
    },
    {
      product: "BT 22",
      region: "ECO",
      minPrice: "1,045",
      targetPrice: "1,231",
      variance: "3%",
      minMargin: "297",
      targetMargin: "483",
      minMarginPct: "28%",
      targetMarginPct: "39%",
      flag: "OK",
    },
    {
      product: "BT 220",
      region: "ECO",
      minPrice: "1,073",
      targetPrice: "1,285",
      variance: "5%",
      minMargin: "385",
      targetMargin: "597",
      minMarginPct: "36%",
      targetMarginPct: "46%",
      flag: "OK",
    },
    {
      product: "BT 400",
      region: "ECO",
      minPrice: "939",
      targetPrice: "1,005",
      variance: "5%",
      minMargin: "233",
      targetMargin: "298",
      minMarginPct: "25%",
      targetMarginPct: "30%",
      flag: "OK",
    },
  ]

  const priceCalculationRules = [
    {
      itemFamily: "BNS 150",
      region: "Europe",
      depotName: "Hull",
      service: "Service 2",
      packagingType: "Bulk",
      nycareStatus: "Gold",
      basedPrice: 1000,
      forexImpact: -1.2,
      calculatedPrice: "Auto",
      minMargin: 12,
      targetMargin: 18,
    },
    {
      itemFamily: "BT 150",
      region: "ECO",
      depotName: "LBC",
      service: "Service 3",
      packagingType: "Bulk",
      nycareStatus: "Gold",
      basedPrice: 1200,
      forexImpact: -1.2,
      calculatedPrice: "Auto",
      minMargin: 13,
      targetMargin: 18,
    },
  ]

  const priceValidationRules = [
    {
      ruleName: "Test 1",
      approverRole: "Director",
      customer: "",
      item: "",
      minTolerance: 3,
      maxTolerance: 5,
      approvalRequired: "Y",
      tillDate: "",
    },
    {
      ruleName: "Test 2",
      approverRole: "VP",
      customer: "111222",
      item: "BT 150",
      minTolerance: 3,
      maxTolerance: 5,
      approvalRequired: "N",
      tillDate: "12/31/2025",
    },
  ]

  return (
    <div className="p-4 font-sans min-h-screen bg-gray-100">
      {/* LOGIN */}
      {screen === "login" && (
        <div className="max-w-md mx-auto mt-16 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-2 text-center">Global Price Portal</h2>
          <p className="text-sm text-gray-500 mb-4 text-center">BITCOLLAGE Prototype</p>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input className="w-full p-2 border rounded mb-3" placeholder="you@company.com" />
          <label className="block text-sm font-medium mb-1">Password</label>
          <input className="w-full p-2 border rounded mb-4" placeholder="••••••••" type="password" />
          <p className="text-xs text-gray-500 mb-2">Login as:</p>
          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
            <button onClick={() => handleLogin("priceManager")} className="border rounded p-2 hover:bg-gray-50">
              Price Manager
            </button>
            <button onClick={() => handleLogin("sales")} className="border rounded p-2 hover:bg-gray-50">
              Sales
            </button>
            <button onClick={() => handleLogin("director")} className="border rounded p-2 hover:bg-gray-50">
              Sales Director
            </button>
          </div>
        </div>
      )}

      {/* HOME */}
      {screen === "home" && (
        <div className="max-w-3xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Home</h2>
            <div className="text-xs text-gray-500">
              Role: <span className="font-semibold capitalize">{role === "priceManager" ? "PriceManager" : role}</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {(role === "priceManager" || role === "sales") && (
              <button onClick={go("work_price")} className="p-4 bg-white shadow rounded text-left">
                <div className="font-semibold mb-1">Work With Price</div>
                <div className="text-xs text-gray-500">View and manage published price batches.</div>
              </button>
            )}

            {role === "priceManager" && (
              <button onClick={go("price_calc_rules_list")} className="p-4 bg-white shadow rounded text-left">
                <div className="font-semibold mb-1">Price Calculation Rule</div>
                <div className="text-xs text-gray-500">Maintain Oil / Forex based pricing rules.</div>
              </button>
            )}

            {role === "priceManager" && (
              <button onClick={go("upload_price")} className="p-4 bg-white shadow rounded text-left">
                <div className="font-semibold mb-1">Upload Price List</div>
                <div className="text-xs text-gray-500">Import analysed prices from Excel and create a batch.</div>
              </button>
            )}

            {role === "priceManager" && (
              <button onClick={go("price_validation_rules_list")} className="p-4 bg-white shadow rounded text-left">
                <div className="font-semibold mb-1">Price Validation Rule</div>
                <div className="text-xs text-gray-500">Set tolerance limits and approval workflows.</div>
              </button>
            )}

            {role === "sales" && (
              <button onClick={go("price_inquiry")} className="p-4 bg-white shadow rounded text-left">
                <div className="font-semibold mb-1">Price Inquiry</div>
                <div className="text-xs text-gray-500">Check minimum & target price before quoting.</div>
              </button>
            )}

            {role === "sales" && (
              <button onClick={go("create_order")} className="p-4 bg-white shadow rounded text-left">
                <div className="font-semibold mb-1">Create Order</div>
                <div className="text-xs text-gray-500">Simulate SO pricing and submit for approval if required.</div>
              </button>
            )}

            {role === "sales" && (
              <button onClick={go("order_status")} className="p-4 bg-white shadow rounded text-left">
                <div className="font-semibold mb-1">Order Status</div>
                <div className="text-xs text-gray-500">Track approval status of submitted orders.</div>
              </button>
            )}

            {role === "director" && (
              <button onClick={go("approve_order")} className="p-4 bg-white shadow rounded text-left">
                <div className="font-semibold mb-1">Approve Orders</div>
                <div className="text-xs text-gray-500">Review below-minimum price requests.</div>
              </button>
            )}
          </div>
          <button onClick={go("login")} className="mt-6 text-xs text-blue-600 underline">
            ← Logout
          </button>
        </div>
      )}

      {/* WORK WITH PRICE (BATCH LIST) */}
      {screen === "work_price" && (
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Work With Price</h2>
            <button onClick={go("home")} className="text-sm text-blue-600">
              ← Back
            </button>
          </div>
          <div className="mb-3 flex gap-2 text-xs">
            {role === "priceManager" && (
              <button onClick={go("upload_price")} className="px-3 py-1 border rounded bg-white">
                + Upload New Batch
              </button>
            )}
          </div>
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
                <tr key={b.batchNo} className="border-b last:border-none">
                  <td className="p-2">{b.batchNo}</td>
                  <td className="p-2">{b.effDate}</td>
                  <td className="p-2">{b.status}</td>
                  <td className="p-2">
                    {role === "priceManager" ? (
                      <button onClick={() => openBatchAnalysis(b)} className="text-blue-600 text-xs">
                        Analyse / Publish
                      </button>
                    ) : (
                      <button onClick={() => openBatchAnalysis(b)} className="text-blue-600 text-xs hover:underline">
                        View only
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {screen === "price_calc_rules_list" && (
        <div className="max-w-5xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Price Calculation Rule</h2>
            <button onClick={go("home")} className="text-sm text-blue-600">
              ← Back
            </button>
          </div>
          <div className="mb-3 flex gap-2 text-xs">
            <button onClick={go("create_rule")} className="px-3 py-1 border rounded bg-white">
              + Create Rule
            </button>
          </div>
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
      )}

      {/* CREATE RULE – OIL & FOREX BASED */}
      {screen === "create_rule" && (
        <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow text-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Create Price Calculation Rule</h2>
            <button onClick={go("price_calc_rules_list")} className="text-blue-600 text-sm">
              ← Back
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-xs font-medium mb-1">Item / Family</label>
              <input className="w-full p-2 border rounded" placeholder="Base Oil 150" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Region</label>
              <select className="w-full p-2 border rounded">
                <option>Europe</option>
                <option>ECO</option>
                <option>Global Default</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Depot Name</label>
              <select className="w-full p-2 border rounded">
                <option value="">Select Depot</option>
                <option>LBC</option>
                <option>Hull</option>
                <option>NNH</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Service</label>
              <select className="w-full p-2 border rounded">
                <option value="">Select Service</option>
                {Array.from({ length: 14 }, (_, i) => (
                  <option key={i}>Service {i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Packaging type</label>
              <select className="w-full p-2 border rounded">
                <option value="">Select Packaging</option>
                <option>Bulk</option>
                <option>IBC</option>
                <option>Drums</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Nycare Status</label>
              <select className="w-full p-2 border rounded">
                <option value="">Select Status</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Bronze</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Base Price (reference)</label>
              <input className="w-full p-2 border rounded" placeholder="1,000" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Forex Impact %</label>
              <input className="w-full p-2 border rounded" placeholder="-1.2" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                <div className="leading-tight space-y-0">
                  <div>Calculated</div>
                  <div>Adjusted Price</div>
                </div>
              </label>
              <input className="w-full p-2 border rounded bg-gray-50" placeholder="auto" disabled />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Minimum Margin %</label>
              <input className="w-full p-2 border rounded" placeholder="12" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Target Margin %</label>
              <input className="w-full p-2 border rounded" placeholder="18" />
            </div>
          </div>
          <button className="w-full bg-green-600 text-white p-2 rounded mt-4 hover:bg-green-700">Save Rule</button>
          <p className="text-xs text-gray-400 mt-2">
            Rules define how new Min / Target prices should move when oil and forex fluctuate.
          </p>
        </div>
      )}

      {screen === "price_validation_rules_list" && (
        <div className="max-w-5xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Price Validation Rule</h2>
            <button onClick={go("home")} className="text-sm text-blue-600">
              ← Back
            </button>
          </div>
          <div className="mb-3 flex gap-2 text-xs">
            <button onClick={go("create_validation_rule")} className="px-3 py-1 border rounded bg-white">
              + Create Rule
            </button>
          </div>
          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-2 text-left font-semibold">Rule Name</th>
                  <th className="p-2 text-left font-semibold">Approver Role</th>
                  <th className="p-2 text-left font-semibold">Customer</th>
                  <th className="p-2 text-left font-semibold">Item</th>
                  <th className="p-2 text-right font-semibold">Min Tolerance %</th>
                  <th className="p-2 text-right font-semibold">Max Tolerance %</th>
                  <th className="p-2 text-center font-semibold">Approval Required</th>
                  <th className="p-2 text-left font-semibold">Till Date</th>
                </tr>
              </thead>
              <tbody>
                {priceValidationRules.map((rule, index) => (
                  <tr key={index} className="border-b last:border-none hover:bg-gray-50">
                    <td className="p-2">{rule.ruleName}</td>
                    <td className="p-2">{rule.approverRole}</td>
                    <td className="p-2">{rule.customer}</td>
                    <td className="p-2">{rule.item}</td>
                    <td className="p-2 text-right">{rule.minTolerance}</td>
                    <td className="p-2 text-right">{rule.maxTolerance}</td>
                    <td className="p-2 text-center">{rule.approvalRequired}</td>
                    <td className="p-2">{rule.tillDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CREATE PRICE VALIDATION RULE */}
      {screen === "create_validation_rule" && (
        <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow text-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Create Price Validation Rule</h2>
            <button onClick={go("price_validation_rules_list")} className="text-blue-600 text-sm">
              ← Back
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium mb-1">Rule Name</label>
              <input className="w-full p-2 border rounded" placeholder="Enter rule name" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Approver Role</label>
              <select className="w-full p-2 border rounded">
                <option value="">Select Role</option>
                <option>Director</option>
                <option>VP</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium mb-1">Customer</label>
              <input className="w-full p-2 border rounded" placeholder="Enter customer name" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium mb-1">Item</label>
              <input className="w-full p-2 border rounded" placeholder="Enter item name" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Min Tolerance %</label>
              <input className="w-full p-2 border rounded" type="number" placeholder="0" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Max Tolerance %</label>
              <input className="w-full p-2 border rounded" type="number" placeholder="0" />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" id="approval_required" className="rounded border-gray-300" />
              <label htmlFor="approval_required" className="text-xs font-medium">
                Approval Required
              </label>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Date</label>
              <input className="w-full p-2 border rounded" type="date" placeholder="dd-mm-yyyy" />
            </div>
          </div>
          <button className="w-full bg-green-600 text-white p-2 rounded mt-4 hover:bg-green-700">
            Save Validation Rule
          </button>
        </div>
      )}

      {/* UPLOAD PRICE LIST */}
      {screen === "upload_price" && (
        <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow text-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Upload Price List</h2>
            <button onClick={go("home")} className="text-blue-600 text-sm">
              ← Back
            </button>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Upload the final analysed output from your Excel pricing model. System will create a new batch for EU /
            non-EU pricing.
          </p>
          <label className="block text-xs font-medium mb-1">Select File</label>
          <div className="flex items-center gap-2 mb-4">
            <input type="text" className="flex-1 p-2 border rounded" placeholder="price_output_2025_01.xlsx" />
            <button className="px-3 py-2 border rounded text-xs bg-gray-50">Browse</button>
          </div>
          <label className="block text-xs font-medium mb-1">Effective Date</label>
          <input type="date" className="w-full p-2 border rounded mb-4" />
          <button className="w-full bg-green-600 text-white p-2 rounded mb-2">Upload & Preview</button>
          <p className="text-[11px] text-gray-400 mb-1">
            Template fields: Item, Region, Min Price, Target Price, Currency, Margin %.
          </p>
        </div>
      )}

      {/* ANALYSE BATCH */}
      {screen === "analyze_batch" && selectedBatch && (
        <div className="max-w-5xl mx-auto mt-8 text-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold">
                {role === "priceManager" ? "Analyse Batch" : "View Batch"} – {selectedBatch.batchNo}
              </h2>
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
            </div>
            <button onClick={go("work_price")} className="text-blue-600 text-sm">
              ← Back to Batches
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-4 text-xs">
            <div className="bg-white rounded shadow p-3">
              <div className="text-gray-500 mb-1">Effective Date</div>
              <div className="font-semibold">{selectedBatch.effDate}</div>
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
            <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50">Sample Items (EU / non-EU)</div>
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
                  <button className="px-3 py-2 border rounded bg-white">Save as Draft</button>
                  <button className="px-3 py-2 rounded bg-blue-600 text-white">Publish Batch</button>
                </div>
              </>
            ) : (
              <div className="text-gray-500">
                Viewing price batch details. Only Price Managers can edit or publish batches.
              </div>
            )}
          </div>
        </div>
      )}

      {/* PRICE INQUIRY – SALES */}
      {screen === "price_inquiry" && (
        <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow text-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Price Inquiry</h2>
            <button onClick={go("home")} className="text-blue-600 text-sm">
              ← Back
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-xs font-medium mb-1">Customer</label>
              <input className="w-full p-2 border rounded" placeholder="ABC Plastics GmbH" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Region</label>
              <select className="w-full p-2 border rounded">
                <option>Europe</option>
                <option>ECO</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium mb-1">Item</label>
              <input className="w-full p-2 border rounded" placeholder="Base Oil 150" />
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded mb-4">Get Price</button>
          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Minimum Price</div>
              <div className="font-semibold">980 EUR / MT</div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Target Price</div>
              <div className="font-semibold">1,020 EUR / MT</div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Allowed Range</div>
              <div className="font-semibold">980 – 1,020</div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Min Margin</div>
              <div className="font-semibold">200 EUR/MT</div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Target Margin</div>
              <div className="font-semibold">400 EUR/MT</div>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-gray-400">
            Sales should aim for Target Price. If you need to go below Minimum, you must create an approval request via
            Create Order.
          </p>
        </div>
      )}

      {/* ORDER STATUS – SALES */}
      {screen === "order_status" && (
        <div className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded shadow text-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Order Status</h2>
            <button onClick={go("home")} className="text-blue-600 text-sm">
              ← Back
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 text-xs text-gray-500">
                  <th className="p-2 font-medium">Order No</th>
                  <th className="p-2 font-medium">Customer</th>
                  <th className="p-2 font-medium">Product</th>
                  <th className="p-2 font-medium">Req. Price</th>
                  <th className="p-2 font-medium">Min/Target</th>
                  <th className="p-2 font-medium">Deviation</th>
                  <th className="p-2 font-medium">Approval Status</th>
                  <th className="p-2 font-medium">Comment</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {orderStatusData.map((order) => (
                  <tr key={order.orderNo} className="border-b hover:bg-gray-50">
                    <td className="p-2">{order.orderNo}</td>
                    <td className="p-2">{order.customer}</td>
                    <td className="p-2">{order.item}</td>
                    <td className="p-2">{order.requestedPrice}</td>
                    <td className="p-2">
                      {order.minPrice} / {order.targetPrice}
                    </td>
                    <td className="p-2 text-red-600">
                      {(((order.requestedPrice - order.minPrice) / order.minPrice) * 100).toFixed(2)}%
                    </td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] ${
                          order.approvalStatus === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.approvalStatus === "Approved"
                              ? "bg-green-100 text-green-800"
                              : order.approvalStatus === "Rejected"
                                ? "bg-red-100 text-red-800"
                                : ""
                        }`}
                      >
                        {order.approvalStatus}
                      </span>
                    </td>
                    <td className="p-2 text-gray-500">{order.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CREATE ORDER – SALES */}
      {screen === "create_order" && (
        <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow text-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Create Order (Simulation)</h2>
            <button onClick={go("home")} className="text-blue-600 text-sm">
              ← Back
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-xs font-medium mb-1">Customer</label>
              <input className="w-full p-2 border rounded" placeholder="ABC Plastics GmbH" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Region</label>
              <select className="w-full p-2 border rounded">
                <option>Europe</option>
                <option>ECO</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Item</label>
              <input className="w-full p-2 border rounded" placeholder="Base Oil 150" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Quantity (MT)</label>
              <input className="w-full p-2 border rounded" placeholder="12,000" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Requested Price</label>
              <input className="w-full p-2 border rounded" placeholder="950" />
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-3 text-xs mb-4">
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Minimum Price</div>
              <div className="font-semibold">980</div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Target Price</div>
              <div className="font-semibold">1,020</div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Deviation vs Min</div>
              <div className="font-semibold text-red-600">-3.1%</div>
            </div>
            <div className="bg-red-50 rounded p-3">
              <div className="text-gray-500 mb-1">Status</div>
              <div className="font-semibold text-red-600">Below Minimum – Approval Needed</div>
            </div>
          </div>
          <label className="block text-xs font-medium mb-1">Justification for below-minimum price</label>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows={3}
            placeholder="Customer committing full plant volume for 12 months; competitor offer is 945."
          />
          <button className="w-full bg-blue-600 text-white p-2 rounded mb-2">Submit Approval Request</button>
          <p className="text-[11px] text-gray-400">
            On approval, ERP hold code on sales order will be released by Sales Director.
          </p>
        </div>
      )}

      {/* APPROVE ORDER – DIRECTOR LIST */}
      {screen === "approve_order" && (
        <div className="max-w-4xl mx-auto mt-8 text-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Pending Approvals</h2>
            <button onClick={go("home")} className="text-blue-600 text-sm">
              ← Back
            </button>
          </div>
          <table className="w-full bg-white shadow rounded text-sm">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-2 text-left">Order No</th>
                <th className="p-2 text-left">Customer</th>
                <th className="p-2 text-left">Item</th>
                <th className="p-2 text-left">Req. Price</th>
                <th className="p-2 text-left">Min / Target</th>
                <th className="p-2 text-left">Deviation</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map((o) => (
                <tr key={o.orderNo} className="border-b last:border-none">
                  <td className="p-2">{o.orderNo}</td>
                  <td className="p-2">{o.customer}</td>
                  <td className="p-2">{o.item}</td>
                  <td className="p-2">{o.requestedPrice}</td>
                  <td className="p-2">
                    {o.minPrice} / {o.targetPrice}
                  </td>
                  <td className="p-2 text-red-600">-3.1%</td>
                  <td className="p-2">
                    <button onClick={() => openOrderApproval(o)} className="text-blue-600">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* APPROVE ORDER DETAIL – DIRECTOR */}
      {screen === "approve_order_detail" && selectedOrder && (
        <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded shadow text-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Approve Order – {selectedOrder.orderNo}</h2>
            <button onClick={go("approve_order")} className="text-blue-600 text-sm">
              ← Back to List
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-4 text-xs">
            <div>
              <div className="text-gray-500 mb-1">Customer</div>
              <div className="font-semibold">{selectedOrder.customer}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Region</div>
              <div className="font-semibold">{selectedOrder.region}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Item</div>
              <div className="font-semibold">{selectedOrder.item}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Quantity</div>
              <div className="font-semibold">{selectedOrder.qty} MT</div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-3 text-xs mb-4">
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Requested Price</div>
              <div className="font-semibold">{selectedOrder.requestedPrice}</div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Minimum Price</div>
              <div className="font-semibold">{selectedOrder.minPrice}</div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="text-gray-500 mb-1">Target Price</div>
              <div className="font-semibold">{selectedOrder.targetPrice}</div>
            </div>
            <div className="bg-red-50 rounded p-3">
              <div className="text-gray-500 mb-1">Deviation vs Min</div>
              <div className="font-semibold text-red-600">-3.1%</div>
            </div>
          </div>
          <div className="mb-4 text-xs">
            <div className="text-gray-500 mb-1">Sales Justification</div>
            <div className="bg-gray-50 rounded p-3">{selectedOrder.justification}</div>
          </div>
          <label className="block text-xs font-medium mb-1">Director Comments</label>
          <textarea
            className="w-full p-2 border rounded mb-3"
            rows={3}
            placeholder="Approved considering strategic volume and competitor pressure."
          />
          <div className="flex gap-2 justify-end text-xs">
            <button className="px-3 py-2 border rounded bg-white">Reject</button>
            <button onClick={go("create_validation_rule")} className="px-3 py-2 rounded bg-green-600 text-white">
              Approve & Release Hold
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

