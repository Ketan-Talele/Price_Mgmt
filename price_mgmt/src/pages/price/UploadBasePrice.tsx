import { useState } from 'react';
import { DATE_ITEMS, type DateItem } from '../../data/mockData/DateItem';
import MainLayout from '../../layout/MainLayout';

interface UploadBasePriceProps {
  onNavigate: (screen: string) => void;
}

export default function UploadBasePrice({ onNavigate }: UploadBasePriceProps) {
  const [dateItems, setDateItems] = useState<DateItem[]>(DATE_ITEMS);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDate, setEditDate] = useState('');
  const [editValue, setEditValue] = useState(0);

  const [newDate, setNewDate] = useState('');
  const [newValue, setNewValue] = useState(0);

  const handleSave = () => {
    console.log('Saving date values:', dateItems);
  };

  const handleEdit = (item: DateItem) => {
    setEditingId(item.id);
    setEditDate(item.DateFrom);
    setEditValue(item.Value);
  };

  const handleSaveEdit = () => {
    if (editingId) {
      setDateItems(
        dateItems.map((item) =>
          item.id === editingId
            ? { ...item, DateFrom: editDate, Value: editValue }
            : item,
        ),
      );
      setEditingId(null);
      setEditDate('');
      setEditValue(0);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditDate('');
    setEditValue(0);
  };

  const handleAdd = () => {
    if (newDate && newValue > 0) {
      const newItem: DateItem = {
        id: Date.now().toString(),
        DateFrom: newDate,
        Value: newValue,
      };
      setDateItems([...dateItems, newItem]);
      setNewDate('');
      setNewValue(0);
    }
  };

  return (
    <MainLayout
      title="Upload Base Price"
      showBack
      onBack={() => onNavigate('home')}
    >
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow text-sm">
        {/* Save Button */}
        <div className="mb-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        </div>

        {/* Table */}
        <div className="border rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-3 text-left font-semibold border-r">
                  Effective Date
                </th>
                <th className="p-3 text-left font-semibold border-r">Value</th>
                <th className="p-3 text-left font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {dateItems.map((item) => (
                <tr key={item.id} className="border-b last:border-none">
                  {/* Date Column */}
                  <td className="p-3 border-r align-middle">
                    {editingId === item.id ? (
                      <input
                        type="date"
                        value={editDate}
                        onChange={(e) => setEditDate(e.target.value)}
                        className="w-full p-1 border rounded h-8"
                      />
                    ) : (
                      item.DateFrom
                    )}
                  </td>

                  {/* Value Column */}
                  <td className="p-3 border-r align-middle">
                    {editingId === item.id ? (
                      <input
                        type="number"
                        value={editValue}
                        onChange={(e) => setEditValue(Number(e.target.value))}
                        className="w-full p-1 border rounded h-8"
                      />
                    ) : (
                      item.Value
                    )}
                  </td>

                  {/* Action Column */}
                  <td className="p-3 align-middle">
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

              {/* Add New Row */}
              <tr>
                <td className="p-3 border-r align-middle">
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full p-1 border rounded h-8"
                  />
                </td>

                <td className="p-3 border-r align-middle">
                  <input
                    type="number"
                    value={newValue || ''}
                    onChange={(e) => setNewValue(Number(e.target.value))}
                    placeholder="Enter value"
                    className="w-full p-1 border rounded h-8"
                  />
                </td>

                <td className="p-3 align-middle">
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
  );
}
