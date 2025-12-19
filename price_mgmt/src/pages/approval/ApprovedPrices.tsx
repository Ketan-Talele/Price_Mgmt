import { orderStatusData } from "../../data/orders"
import MainLayout from "../../layout/MainLayout"
import OrderTable from "../../components/tables/OrderTable"

interface ApprovedPricesProps {
  onNavigate: (screen: string) => void
}

export default function ApprovedPrices({ onNavigate }: ApprovedPricesProps) {
  const approved = orderStatusData.filter((o) => o.approvalStatus === "Approved")

  return (
    <MainLayout title="Approved Prices" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow text-sm">
        <OrderTable orders={approved} />
      </div>
    </MainLayout>
  )
}


