import type { Order } from "../../types/order"
import MainLayout from "../../layout/MainLayout"

interface ApproveOrderDetailProps {
  order: Order
  onNavigate: (screen: string) => void
}

export default function ApproveOrderDetail({ order, onNavigate }: ApproveOrderDetailProps) {
  return (
    <MainLayout title="Approve Price" showBack onBack={() => onNavigate("approve_order")}>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow text-sm">
        <div className="grid md:grid-cols-2 gap-3 mb-4 text-xs">
          <div>
            <div className="text-gray-500 mb-1">Customer</div>
            <div className="font-semibold">{order.customer}</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">Region</div>
            <div className="font-semibold">{order.region}</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">Item</div>
            <div className="font-semibold">{order.item}</div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-3 text-xs mb-4">
          <div className="bg-gray-50 rounded p-3">
            <div className="text-gray-500 mb-1">Requested Price</div>
            <div className="font-semibold">{order.requestedPrice}</div>
          </div>
          <div className="bg-gray-50 rounded p-3">
            <div className="text-gray-500 mb-1">Minimum Price</div>
            <div className="font-semibold">{order.minPrice}</div>
          </div>
          <div className="bg-gray-50 rounded p-3">
            <div className="text-gray-500 mb-1">Target Price</div>
            <div className="font-semibold">{order.targetPrice}</div>
          </div>
          <div className="bg-red-50 rounded p-3">
            <div className="text-gray-500 mb-1">Deviation vs Min</div>
            <div className="font-semibold text-red-600">-3.1%</div>
          </div>
        </div>
        <div className="mb-4 text-xs">
          <div className="text-gray-500 mb-1">Sales Justification</div>
          <div className="bg-gray-50 rounded p-3">{order.justification}</div>
        </div>
        <label className="block text-xs font-medium mb-1">Director Comments</label>
        <textarea
          className="w-full p-2 border rounded mb-3"
          rows={3}
          placeholder="Approved considering strategic volume and competitor pressure."
        />
        <div className="flex gap-2 justify-end text-xs">
          <button className="px-3 py-2 border rounded bg-white hover:bg-gray-50">Reject</button>
          <button
            className="px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Approve
          </button>
        </div>
      </div>
    </MainLayout>
  )
}





