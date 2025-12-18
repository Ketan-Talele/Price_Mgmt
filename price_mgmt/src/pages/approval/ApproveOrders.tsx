import { pendingOrders } from "../../data/orders"
import type { Order } from "../../types/order"
import MainLayout from "../../layout/MainLayout"

interface ApproveOrdersProps {
  onNavigate: (screen: string) => void
  onReviewOrder: (order: Order) => void
}

export default function ApproveOrders({ onNavigate, onReviewOrder }: ApproveOrdersProps) {
  return (
    <MainLayout title="Pending Approvals" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-4xl mx-auto">
        <table className="w-full bg-white shadow rounded text-sm">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Item</th>
              <th className="p-2 text-left">Region</th>
              <th className="p-2 text-left">Req. Price</th>
              <th className="p-2 text-left">Min / Target</th>
              <th className="p-2 text-left">Deviation</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrders.map((o) => (
              <tr key={o.orderNo} className="border-b last:border-none hover:bg-gray-50">
                <td className="p-2">{o.customer}</td>
                <td className="p-2">{o.item}</td>
                <td className="p-2">{o.region}</td>
                <td className="p-2">{o.requestedPrice}</td>
                <td className="p-2">
                  {o.minPrice} / {o.targetPrice}
                </td>
                <td className="p-2 text-red-600">
                  {(((o.requestedPrice - o.minPrice) / o.minPrice) * 100).toFixed(1)}%
                </td>
                <td className="p-2">
                  <button onClick={() => onReviewOrder(o)} className="text-blue-600 hover:underline">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  )
}





