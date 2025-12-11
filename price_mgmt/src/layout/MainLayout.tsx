import { ReactNode } from "react"
import { useAuthStore } from "../store/authStore"

interface MainLayoutProps {
  children: ReactNode
  title: string
  showBack?: boolean
  onBack?: () => void
  actions?: ReactNode
}

export default function MainLayout({
  children,
  title,
  showBack = false,
  onBack,
  actions,
}: MainLayoutProps) {
  const { role } = useAuthStore()

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">{title}</h2>
          {role && (
            <div className="text-xs text-gray-500">
              Role: <span className="font-semibold capitalize">{role === "priceManager" ? "Price Manager" : role}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {actions}
          {showBack && onBack && (
            <button onClick={onBack} className="text-sm text-blue-600 hover:underline">
              ← Back
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

