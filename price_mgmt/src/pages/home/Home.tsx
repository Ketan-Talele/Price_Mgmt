import { useAuthStore } from '../../store/authStore';

interface HomeProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export default function Home({ onNavigate, onLogout }: HomeProps) {
  const { role } = useAuthStore();

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Home</h2>
        <div className="text-xs text-gray-500">
          Role:{' '}
          <span className="font-semibold capitalize">
            {role === 'priceManager' ? 'Price Manager' : role}
          </span>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {(role === 'priceManager' || role === 'sales') && (
          <button
            onClick={() => onNavigate('work_price')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Price List</div>
            <div className="text-xs text-gray-500">
              View and manage published price batches.
            </div>
          </button>
        )}

        {role === 'priceManager' && (
          <button
            onClick={() => onNavigate('price_calc_rules_list')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Price Calculation Rule</div>
            <div className="text-xs text-gray-500">
              Maintain Oil / Forex based pricing rules.
            </div>
          </button>
        )}

        {role === 'priceManager' && (
          <button
            onClick={() => onNavigate('upload_price')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Upload Price List</div>
            <div className="text-xs text-gray-500">
              Import analysed prices from Excel and create a batch.
            </div>
          </button>
        )}

        {role === 'priceManager' && (
          <button
            onClick={() => onNavigate('price_validation_rules_list')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Price Validation Rule</div>
            <div className="text-xs text-gray-500">
              Set tolerance limits and approval workflows.
            </div>
          </button>
        )}

        {role === 'priceManager' && (
          <button
            onClick={() => onNavigate('packaging_cost')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Packaging Cost</div>
            <div className="text-xs text-gray-500">
              Manage packaging types and their associated costs.
            </div>
          </button>
        )}

        {role === 'priceManager' && (
          <button
            onClick={() => onNavigate('services_cost')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Services Cost</div>
            <div className="text-xs text-gray-500">
              Manage services and their associated costs.
            </div>
          </button>
        )}

        {role === 'priceManager' && (
          <button
            onClick={() => onNavigate('upload-base-price')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Upload Base Price</div>
            <div className="text-xs text-gray-500">
              Upload base price data from Excel file with effective date.
            </div>
          </button>
        )}

        {role === 'sales' && (
          <button
            onClick={() => onNavigate('analyze_review_prices')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Price Analysis &amp; Review</div>
            <div className="text-xs text-gray-500">
              View the dashboard filtered to your sales channel (conceptual).
            </div>
          </button>
        )}

        {role === 'sales' && (
          <button
            onClick={() => onNavigate('quote_price_1')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Quote a Price 1</div>
            <div className="text-xs text-gray-500">
              Simulate Price for a Quote (Original)
            </div>
          </button>
        )}

        {role === 'sales' && (
          <button
            onClick={() => onNavigate('quote_price_2')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Quote a Price 2</div>
            <div className="text-xs text-gray-500">
              Get a suggested price per customer &amp; product, with oil/FX and
              service/packaging adjustments.
            </div>
          </button>
        )}

        {role === 'sales' && (
          <button
            onClick={() => onNavigate('request_approval')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Request an Approval</div>
            <div className="text-xs text-gray-500">
              Submit a below-minimum price request for approval.
            </div>
          </button>
        )}

        {role === 'sales' && (
          <button
            onClick={() => onNavigate('price_status')}
            className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold mb-1">Price Status</div>
            <div className="text-xs text-gray-500">
              Track approval status of submitted price requests.
            </div>
          </button>
        )}

        {role === 'director' && (
          <div className="md:col-span-2 flex gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <button
                onClick={() => onNavigate('work_price')}
                className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
              >
                <div className="font-semibold mb-1">Price List</div>
                <div className="text-xs text-gray-500">
                  View and manage published price batches.
                </div>
              </button>

              <button
                onClick={() => onNavigate('approve_order')}
                className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
              >
                <div className="font-semibold mb-1">Pending Approvals</div>
                <div className="text-xs text-gray-500">
                  Review below-minimum price requests.
                </div>
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <button
                onClick={() => onNavigate('analyze_review_prices')}
                className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
              >
                <div className="font-semibold mb-1">Price Analysis &amp; Review</div>
                <div className="text-xs text-gray-500">
                  View pricing analysis and review dashboard (conceptual).
                </div>
              </button>

              <button
                onClick={() => onNavigate('approved_prices')}
                className="p-4 bg-white shadow rounded text-left hover:bg-gray-50 transition-colors"
              >
                <div className="font-semibold mb-1">Approved Prices</div>
                <div className="text-xs text-gray-500">
                  View all approved price requests.
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={onLogout}
        className="mt-6 text-xs text-blue-600 underline hover:text-blue-800"
      >
        ← Logout
      </button>
    </div>
  );
}
