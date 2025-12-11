import { AuthProvider } from "./store/authStore"
import AppRoutes from "./routes/AppRoutes"

export default function App() {
  return (
    <AuthProvider>
    <div className="p-4 font-sans min-h-screen bg-gray-100">
        <AppRoutes />
      </div>
    </AuthProvider>
  )
}
