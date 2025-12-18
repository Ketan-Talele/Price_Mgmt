import type { Order } from "../../types/order"

interface OrderTableProps {
  orders: Order[]
  onReview?: (order: Order) => void
}

export default function OrderTable({ orders, onReview }: OrderTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-gray-50 text-xs text-gray-500">
            <th className="p-2 font-medium">Customer</th>
            <th className="p-2 font-medium">Product</th>
            <th className="p-2 font-medium">Region</th>
            <th className="p-2 font-medium">Req. Price</th>
            <th className="p-2 font-medium">Min/Target</th>
            <th className="p-2 font-medium">Deviation</th>
            <th className="p-2 font-medium">Approval Status</th>
            <th className="p-2 font-medium">End Date</th>
            <th className="p-2 font-medium">Comment</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {orders.map((order) => (
            <tr key={order.orderNo} className="border-b hover:bg-gray-50">
              <td className="p-2">{order.customer}</td>
              <td className="p-2">{order.item}</td>
              <td className="p-2">{order.region}</td>
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
              <td className="p-2 text-gray-500">{order.endDate ?? ""}</td>
              <td className="p-2 text-gray-500">{order.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}





