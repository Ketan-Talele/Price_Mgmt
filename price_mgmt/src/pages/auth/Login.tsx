import { useAuthStore } from "../../store/authStore"
import type { UserRole } from "../../types/sales"

interface LoginProps {
  onLogin: () => void
}

export default function Login({ onLogin }: LoginProps) {
  const { login } = useAuthStore()

  const handleLogin = (role: UserRole) => {
    login(role)
    onLogin()
  }

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-2 text-center">Global Price Portal</h2>
      <p className="text-sm text-gray-500 mb-4 text-center">BITCOLLAGE Prototype</p>
      <label className="block text-sm font-medium mb-1">Email</label>
      <input className="w-full p-2 border rounded mb-3" placeholder="you@company.com" />
      <label className="block text-sm font-medium mb-1">Password</label>
      <input className="w-full p-2 border rounded mb-4" placeholder="••••••••" type="password" />
      <p className="text-xs text-gray-500 mb-2">Login as:</p>
      <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
        <button
          onClick={() => handleLogin("priceManager")}
          className="border rounded p-2 hover:bg-gray-50 transition-colors"
        >
          Price Manager
        </button>
        <button
          onClick={() => handleLogin("sales")}
          className="border rounded p-2 hover:bg-gray-50 transition-colors"
        >
          Sales
        </button>
        <button
          onClick={() => handleLogin("director")}
          className="border rounded p-2 hover:bg-gray-50 transition-colors"
        >
          Sales Director
        </button>
      </div>
    </div>
  )
}





