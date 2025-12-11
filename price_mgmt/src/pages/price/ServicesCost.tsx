import { useState } from "react"
import MainLayout from "../../layout/MainLayout"
import { SERVICE_ITEMS, type ServiceItem } from "../../data/mockData"

interface ServicesCostProps {
  onNavigate: (screen: string) => void
}

export default function ServicesCost({ onNavigate }: ServicesCostProps) {
  const [serviceItems, setServiceItems] = useState<ServiceItem[]>(SERVICE_ITEMS)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState("")
  const [editCost, setEditCost] = useState(0)
  const [newName, setNewName] = useState("")
  const [newCost, setNewCost] = useState(0)

  const handleSave = () => {
    // Save logic would go here
    console.log("Saving services costs:", serviceItems)
  }

  const handleEdit = (item: ServiceItem) => {
    setEditingId(item.id)
    setEditName(item.serviceName)
    setEditCost(item.cost)
  }

  const handleSaveEdit = () => {
    if (editingId) {
      setServiceItems(
        serviceItems.map((item) =>
          item.id === editingId ? { ...item, serviceName: editName, cost: editCost } : item
        )
      )
      setEditingId(null)
      setEditName("")
      setEditCost(0)
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditName("")
    setEditCost(0)
  }

  const handleAdd = () => {
    if (newName && newCost > 0) {
      const newItem: ServiceItem = {
        id: Date.now().toString(),
        serviceName: newName,
        cost: newCost,
      }
      setServiceItems([...serviceItems, newItem])
      setNewName("")
      setNewCost(0)
    }
  }

  return (
    <MainLayout title="Services Cost" showBack onBack={() => onNavigate("home")}>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow text-sm">
        <div className="mb-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        </div>
        <div className="border rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-3 text-left font-semibold border-r">Packaging Type</th>
                <th className="p-3 text-left font-semibold border-r">Cost</th>
                <th className="p-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {serviceItems.map((item) => (
                <tr key={item.id} className="border-b last:border-none">
                  <td className="p-3 border-r">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    ) : (
                      item.serviceName
                    )}
                  </td>
                  <td className="p-3 border-r">
                    {editingId === item.id ? (
                      <input
                        type="number"
                        value={editCost}
                        onChange={(e) => setEditCost(Number(e.target.value))}
                        className="w-full p-1 border rounded"
                      />
                    ) : (
                      item.cost
                    )}
                  </td>
                  <td className="p-3">
                    {editingId === item.id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveEdit}
                          className="text-blue-600 hover:underline text-xs"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-red-600 hover:underline text-xs"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:underline text-xs"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-3 border-r">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter service name"
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="p-3 border-r">
                  <input
                    type="number"
                    value={newCost || ""}
                    onChange={(e) => setNewCost(Number(e.target.value))}
                    placeholder="Enter cost"
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="p-3">
                  <button
                    onClick={handleAdd}
                    className="text-blue-600 hover:underline text-xs"
                  >
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  )
}




