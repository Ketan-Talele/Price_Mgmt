import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "success" | "danger"
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "px-3 py-2 rounded font-medium transition-colors"
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white border border-gray-300 hover:bg-gray-50",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  )
}





