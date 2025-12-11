import { useState } from "react"
import { useAuthStore } from "../store/authStore"
import { batches } from "../data/batches"
import type { Batch } from "../types/batch"
import type { Order } from "../types/order"

// Pages
import Login from "../pages/auth/Login"
import Home from "../pages/home/Home"
import WorkWithPrice from "../pages/price/WorkWithPrice"
import UploadPrice from "../pages/price/UploadPrice"
import AnalyzeBatch from "../pages/price/AnalyzeBatch"
import PriceCalculationRules from "../pages/price/PriceCalculationRules"
import CreatePriceRule from "../pages/price/CreatePriceRule"
import PriceValidationRules from "../pages/price/PriceValidationRules"
import CreateValidationRule from "../pages/price/CreateValidationRule"
import PackagingCost from "../pages/price/PackagingCost"
import ServicesCost from "../pages/price/ServicesCost"
import PriceInquiry from "../pages/sales/PriceInquiry"
import CreateOrder from "../pages/sales/CreateOrder"
import OrderStatus from "../pages/sales/OrderStatus"
import SalesDeviationAnalysis from "../pages/sales/SalesDeviationAnalysis"
import ApproveOrders from "../pages/approval/ApproveOrders"
import ApproveOrderDetail from "../pages/approval/ApproveOrderDetail"

export default function AppRoutes() {
  const { isAuthenticated, logout } = useAuthStore()
  const [screen, setScreen] = useState("login")
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const navigate = (newScreen: string) => {
    setScreen(newScreen)
  }

  const handleLogin = () => {
    setScreen("home")
  }

  const handleLogout = () => {
    logout()
    setScreen("login")
  }

  const handleAnalyzeBatch = (batch: Batch) => {
    setSelectedBatch(batch)
    setScreen("analyze_batch")
  }

  const handleReviewOrder = (order: Order) => {
    setSelectedOrder(order)
    setScreen("approve_order_detail")
  }

  if (!isAuthenticated && screen !== "login") {
    return <Login onLogin={handleLogin} />
  }

  switch (screen) {
    case "login":
      return <Login onLogin={handleLogin} />

    case "home":
      return <Home onNavigate={navigate} onLogout={handleLogout} />

    case "work_price":
      return <WorkWithPrice onNavigate={navigate} onAnalyzeBatch={handleAnalyzeBatch} />

    case "upload_price":
      return <UploadPrice onNavigate={navigate} />

    case "analyze_batch":
      return selectedBatch ? (
        <AnalyzeBatch batch={selectedBatch} onNavigate={navigate} />
      ) : (
        <Home onNavigate={navigate} onLogout={handleLogout} />
      )

    case "price_calc_rules_list":
      return <PriceCalculationRules onNavigate={navigate} />

    case "create_rule":
      return <CreatePriceRule onNavigate={navigate} />

    case "price_validation_rules_list":
      return <PriceValidationRules onNavigate={navigate} />

    case "create_validation_rule":
      return <CreateValidationRule onNavigate={navigate} />

    case "packaging_cost":
      return <PackagingCost onNavigate={navigate} />

    case "services_cost":
      return <ServicesCost onNavigate={navigate} />

    case "price_inquiry":
      return <PriceInquiry onNavigate={navigate} />

    case "create_order":
      return <CreateOrder onNavigate={navigate} />

    case "order_status":
      return <OrderStatus onNavigate={navigate} />

    case "sales_deviation_analysis":
      return <SalesDeviationAnalysis onNavigate={navigate} />

    case "approve_order":
      return <ApproveOrders onNavigate={navigate} onReviewOrder={handleReviewOrder} />

    case "approve_order_detail":
      return selectedOrder ? (
        <ApproveOrderDetail order={selectedOrder} onNavigate={navigate} />
      ) : (
        <ApproveOrders onNavigate={navigate} onReviewOrder={handleReviewOrder} />
      )

    default:
      return <Login onLogin={handleLogin} />
  }
}

