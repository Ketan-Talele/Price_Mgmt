import { REGIONS } from '../../data/mockData';
import MainLayout from '../../layout/MainLayout';

interface PriceInquiryProps {
  onNavigate: (screen: string) => void;
}

export default function PriceInquiry({ onNavigate }: PriceInquiryProps) {
  return (
    <MainLayout
      title="Request an Approval"
      showBack
      onBack={() => onNavigate('home')}
    >
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow text-sm">
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs font-medium mb-1">Customer</label>
            <input
              className="w-full p-2 border rounded"
              placeholder="ABC Plastics GmbH"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Region</label>
            <select className="w-full p-2 border rounded">
              {REGIONS.map((region) => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-medium mb-1">Item</label>
            <input
              className="w-full p-2 border rounded"
              placeholder="Base Oil 150"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-medium mb-1">
              Price for Approval
            </label>
            <input className="w-full p-2 border rounded" placeholder="950" />
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded mb-4 hover:bg-blue-700">
          Send to Approval
        </button>
        <div className="grid md:grid-cols-3 gap-3 text-xs">
          <div className="bg-gray-50 rounded p-3">
            <div className="text-gray-500 mb-1">Minimum Price</div>
            <div className="font-semibold">980 EUR / MT</div>
          </div>
          <div className="bg-gray-50 rounded p-3">
            <div className="text-gray-500 mb-1">Target Price</div>
            <div className="font-semibold">1,020 EUR / MT</div>
          </div>
          <div className="bg-gray-50 rounded p-3">
            <div className="text-gray-500 mb-1">Allowed Range</div>
            <div className="font-semibold">980 – 1,020</div>
          </div>
          <div className="bg-gray-50 rounded p-3">
            <div className="text-gray-500 mb-1">Min Margin</div>
            <div className="font-semibold">200 EUR/MT</div>
          </div>
          <div className="bg-gray-50 rounded p-3">
            <div className="text-gray-500 mb-1">Target Margin</div>
            <div className="font-semibold">400 EUR/MT</div>
          </div>
        </div>
        <p className="mt-3 text-[11px] text-gray-400">
          Sales should aim for Target Price. If you need to go below Minimum,
          submit an approval request.
        </p>
      </div>
    </MainLayout>
  );
}
