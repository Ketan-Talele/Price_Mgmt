import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label className="block text-xs font-medium mb-1 text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}





