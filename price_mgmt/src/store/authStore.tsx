import { createContext, useContext, useState, ReactNode } from "react"
import type { UserRole } from "../types/sales"

interface AuthContextType {
  role: UserRole | null
  isAuthenticated: boolean
  login: (userRole: UserRole) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (userRole: UserRole) => {
    setRole(userRole)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setRole(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ role, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthStore() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuthStore must be used within an AuthProvider")
  }
  return context
}





