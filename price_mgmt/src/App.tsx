import React, { useState } from "react";

// Simple clickable prototype for Global Price Management

// Screens: Login → Home → Work With Price / Create Rule / Upload & Analyse / Price Inquiry / Create Order / Approvals

interface Batch {
  batchNo: string;
  effDate: string;
  status: string;
}

interface Order {
  orderNo: string;
  customer: string;
  item: string;
  region: string;
  requestedPrice: number;
  minPrice: number;
  targetPrice: number;
  qty: number;
  justification: string;
}

export default function App() {
  const [screen, setScreen] = useState("login");
  const [role, setRole] = useState<"priceManager" | "sales" | "director">("sales");
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const go = (s: string) => () => setScreen(s);

  const handleLogin = (r: "priceManager" | "sales" | "director") => {
    setRole(r);
    setScreen("home");
  };

  const openBatchAnalysis = (batch: Batch) => {
    setSelectedBatch(batch);
    setScreen("analyze_batch");
  };

  const openOrderApproval = (order: Order) => {
    setSelectedOrder(order);
    setScreen("approve_order_detail");
  };

  // Sample data for batches & approvals
  const batches: Batch[] = [
    { batchNo: "2025-01", effDate: "01-Jan-2025", status: "Draft" },
    { batchNo: "2025-02", effDate: "01-Feb-2025", status: "Published" },
  ];

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
    },
  ];

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
          <input
            className="w-full p-2 border rounded mb-4"
            placeholder="••••••••"
            type="password"
          />
          <p className="text-xs text-gray-500 mb-2">Login as:</p>
          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
            <button
              onClick={() => handleLogin("priceManager")}
              className="border rounded p-2 hover:bg-gray-50"
            >
              Price Manager
            </button>
            <button
              onClick={() => handleLogin("sales")}
              className="border rounded p-2 hover:bg-gray-50"
            >
              Sales
            </button>
            <button
              onClick={() => handleLogin("director")}
              className="border rounded p-2 hover:bg-gray-50"
            >
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
              Role: <span className="font-semibold capitalize">{role}</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {(role === "priceManager" || role === "sales") && (
              <button
                onClick={go("work_price")}
                className="p-4 bg-white shadow rounded text-left"
              >
                <div className="font-semibold mb-1">Work With Price</div>
                <div className="text-xs text-gray-500">
                  View and manage published price batches.
                </div>
              </button>
            )}

            {role === "priceManager" && (
              <button
                onClick={go("create_rule")}
                className="p-4 bg-white shadow rounded text-left"
              >
                <div className="font-semibold mb-1">Create Rule</div>
                <div className="text-xs text-gray-500">
                  Maintain Oil / Forex based pricing rules.
                </div>
              </button>
            )}

            {role === "priceManager" && (
              <button
                onClick={go("upload_price")}
                className="p-4 bg-white shadow rounded text-left"
              >
                <div className="font-semibold mb-1">Upload Price List</div>
                <div className="text-xs text-gray-500">
                  Import analysed prices from Excel and create a batch.
                </div>
              </button>
            )}

            {role === "sales" && (
              <button
                onClick={go("price_inquiry")}
                className="p-4 bg-white shadow rounded text-left"
              >
                <div className="font-semibold mb-1">Price Inquiry</div>
                <div className="text-xs text-gray-500">
                  Check minimum & target price before quoting.
                </div>
              </button>
            )}

            {role === "sales" && (
              <button
                onClick={go("create_order")}
                className="p-4 bg-white shadow rounded text-left"
              >
                <div className="font-semibold mb-1">Create Order</div>
                <div className="text-xs text-gray-500">
                  Simulate SO pricing and submit for approval if required.
                </div>
              </button>
            )}

            {role === "director" && (
              <button
                onClick={go("approve_order")}
                className="p-4 bg-white shadow rounded text-left"
              >
                <div className="font-semibold mb-1">Approve Orders</div>
                <div className="text-xs text-gray-500">
                  Review below-minimum price requests.
                </div>
              </button>
            )}
          </div>
          <button
            onClick={go("login")}
            className="mt-6 text-xs text-blue-600 underline"
          >
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
              <button
                onClick={go("upload_price")}
                className="px-3 py-1 border rounded bg-white"
              >
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
                      <button
                        onClick={() => openBatchAnalysis(b)}
                        className="text-blue-600 text-xs"
                      >
                        Analyse / Publish
                      </button>
                    ) : (
                      <span className="text-gray-400 text-xs">View only</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            Upload the final analysed output from your Excel pricing model. System will
            create a new batch for EU / non-EU pricing.
          </p>
          <label className="block text-xs font-medium mb-1">Select File</label>
          <div className="flex items-center gap-2 mb-4">
            <input type="text" className="flex-1 p-2 border rounded" placeholder="price_output_2025_01.xlsx" />
            <button className="px-3 py-2 border rounded text-xs bg-gray-50">Browse</button>
          </div>
          <label className="block text-xs font-medium mb-1">Effective Date</label>
          <input type="date" className="w-full p-2 border rounded mb-4" />
          <button className="w-full bg-green-600 text-white p-2 rounded mb-2">
            Upload & Preview
          </button>
          <p className="text-[11px] text-gray-400 mb-1">Template fields: Item, Region, Min Price, Target Price, Currency, Margin %.</p>
        </div>
      )}

      {/* ANALYSE BATCH */}
      {screen === "analyze_batch" && selectedBatch && (
        <div className="max-w-5xl mx-auto mt-8 text-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Analyse Batch – {selectedBatch.batchNo}</h2>
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
            <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50">
              Sample Items (EU / non-EU)
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Item</th>
                  <th className="p-2 text-left">Region</th>
                  <th className="p-2 text-left">Min Price</th>
                  <th className="p-2 text-left">Target Price</th>
                  <th className="p-2 text-left">Margin %</th>
                  <th className="p-2 text-left">Variance vs Last</th>
                  <th className="p-2 text-left">Flag</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Base Oil 150</td>
                  <td className="p-2">EU</td>
                  <td className="p-2">980</td>
                  <td className="p-2">1,020</td>
                  <td className="p-2">18%</td>
                  <td className="p-2">+2.5%</td>
                  <td className="p-2 text-green-600">OK</td>
                </tr>
                <tr className="border-b bg-amber-50">
                  <td className="p-2">Base Oil 150</td>
                  <td className="p-2">Non-EU</td>
                  <td className="p-2">960</td>
                  <td className="p-2">1,010</td>
                  <td className="p-2">14%</td>
                  <td className="p-2">-6.0%</td>
                  <td className="p-2 text-amber-600">Review</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="text-gray-500">
              You can override Min / Target price for flagged items before publishing.
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 border rounded bg-white">Save as Draft</button>
              <button className="px-3 py-2 rounded bg-blue-600 text-white">Publish Batch</button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE RULE – OIL & FOREX BASED */}
      {screen === "create_rule" && (
        <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow text-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Create Pricing Rule</h2>
            <button onClick={go("home")} className="text-blue-600 text-sm">
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
                <option>EU</option>
                <option>Non-EU</option>
                <option>Global Default</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Base Price (reference)</label>
              <input className="w-full p-2 border rounded" placeholder="1,000" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Oil Diff %</label>
              <input className="w-full p-2 border rounded" placeholder="+3.5" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Forex Impact %</label>
              <input className="w-full p-2 border rounded" placeholder="-1.2" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Calculated Adjusted Price</label>
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
          <button className="w-full bg-green-600 text-white p-2 rounded mb-2">Save Rule</button>
          <p className="text-[11px] text-gray-400">
            Rules define how new Min / Target prices should move when oil and forex fluctuate.
          </p>
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
                <option>EU</option>
                <option>Non-EU</option>
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
          </div>
          <p className="mt-3 text-[11px] text-gray-400">
            Sales should aim for Target Price. If you need to go below Minimum, you must
            create an approval request via Create Order.
        </p>
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
                <option>EU</option>
                <option>Non-EU</option>
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
          <button className="w-full bg-blue-600 text-white p-2 rounded mb-2">
            Submit Approval Request
          </button>
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
          <table className="w-full bg-white shadow rounded text-xs">
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
                    <button
                      onClick={() => openOrderApproval(o)}
                      className="text-blue-600"
                    >
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
            <div className="bg-gray-50 rounded p-3">
              {selectedOrder.justification}
            </div>
          </div>
          <label className="block text-xs font-medium mb-1">Director Comments</label>
          <textarea
            className="w-full p-2 border rounded mb-3"
            rows={3}
            placeholder="Approved considering strategic volume and competitor pressure."
          />
          <div className="flex gap-2 justify-end text-xs">
            <button className="px-3 py-2 border rounded bg-white">Reject</button>
            <button className="px-3 py-2 rounded bg-green-600 text-white">Approve & Release Hold</button>
          </div>
        </div>
      )}
    </div>
  );
}
