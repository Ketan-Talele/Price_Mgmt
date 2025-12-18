import { orderStatusData } from "../../data/orders"
import OrderTable from "../../components/tables/OrderTable"
import MainLayout from "../../layout/MainLayout"

interface OrderStatusProps {
  onNavigate: (screen: string) => void
}

export default function OrderStatus({ onNavigate }: OrderStatusProps) {
  return (
    <MainLayout title="Price Status" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow text-sm">
        <OrderTable orders={orderStatusData} />
      </div>
    </MainLayout>
  )
}





