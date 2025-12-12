// src/pages/price/AnalyzeReviewPrices.tsx
import { useState } from 'react';
import { priceMovementRows } from '../../data/priceMovement';
import {
  customerOverviewRows,
  productOverviewRows,
} from '../../data/productCustomerOverview';
import { tailReviewRows } from '../../data/tailReview';
import MainLayout from '../../layout/MainLayout';
import { useAuthStore } from '../../store/authStore';

interface AnalyzeReviewPricesProps {
  onNavigate: (screen: string) => void;
}

export default function AnalyzeReviewPrices({
  onNavigate,
}: AnalyzeReviewPricesProps) {
  const { role } = useAuthStore();
  const isPriceManager = role === 'priceManager';
  const isSales = role === 'sales';
  const [activeSheet, setActiveSheet] = useState<
    'sheet1' | 'sheet2' | 'sheet3'
  >('sheet1');

  // Sheet 2 – Tail review sorted views
  const tailSortedByPercentile = [...tailReviewRows].sort(
    (a, b) => a.percentile - b.percentile,
  );

  const tailSortedByNbd = [...tailReviewRows].sort(
    (a, b) => a.nbdPerTon - b.nbdPerTon,
  );

  // Sheet 3 – Product & customer overview sorted by weighted percentile
  const productOverviewSorted = [...productOverviewRows].sort(
    (a, b) => a.percentile - b.percentile,
  );
  const customerOverviewSorted = [...customerOverviewRows].sort(
    (a, b) => a.percentile - b.percentile,
  );

  return (
    <MainLayout
      title="Price Analysis & Review "
      showBack
      onBack={() => onNavigate('home')}
    >
      <div className="max-w-6xl mx-auto mt-8 text-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500 mt-1">
              {activeSheet === 'sheet1' &&
                'Sheet 1 – Price premium vs base price and FX impact. '}
              {activeSheet === 'sheet2' &&
                'Sheet 2 – Tail Review: Identify weakest customer-product combinations. '}
              {activeSheet === 'sheet3' &&
                'Sheet 3 – Product & Customer Overview: High-level view with weighted percentiles. '}
              {isSales &&
                'Data is conceptually filtered to your sales channel.'}
            </p>
          </div>
        </div>

        {/* Sheet Navigation Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveSheet('sheet1')}
            className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeSheet === 'sheet1'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Gap Analysis
          </button>
          <button
            onClick={() => setActiveSheet('sheet2')}
            className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeSheet === 'sheet2'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Tail Review
          </button>
          <button
            onClick={() => setActiveSheet('sheet3')}
            className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeSheet === 'sheet3'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Product–Customer Overview
          </button>
        </div>

        {/* Common Filter Bar – appears on all sheets */}
        <div className="bg-white rounded shadow p-4 mb-4 grid md:grid-cols-5 gap-3 text-xs">
          <div>
            <label className="block mb-1 font-medium">Period</label>
            <input
              type="text"
              className="w-full border rounded p-1"
              placeholder="202501 – 202509"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Sales Channel</label>
            <input
              type="text"
              className="w-full border rounded p-1"
              placeholder="Spain"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Customer Segment</label>
            <input
              type="text"
              className="w-full border rounded p-1"
              placeholder="ELI"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Product</label>
            <input
              type="text"
              className="w-full border rounded p-1"
              placeholder="All products"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white rounded p-2">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Sheet 1 Graphs */}
        {activeSheet === 'sheet1' && (
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 1 – Price Premium vs Base Price
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Conceptual placeholder for PowerBI chart showing price premium
                  (PP) and base price over months.
                </div>
              </div>
              <div className="flex-1 border border-dashed border-gray-300 rounded flex items-center justify-center text-[11px] text-gray-400">
                Chart area – to be replaced by PowerBI/embedded analytics
              </div>
            </div>
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 2 – FX Curve (USD to SEK/EUR)
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Conceptual placeholder for FX evolution and retention factor
                  over time.
                </div>
              </div>
              <div className="flex-1 border border-dashed border-gray-300 rounded flex items-center justify-center text-[11px] text-gray-400">
                Chart area – to be replaced by PowerBI/embedded analytics
              </div>
            </div>
          </div>
        )}

        {/* Sheet 2 Graphs */}
        {activeSheet === 'sheet2' && (
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 1 – NBD/T Distribution
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Conceptual placeholder for PowerBI chart showing NBD/T
                  distribution across customer-product combinations.
                </div>
              </div>
              <div className="flex-1 border border-dashed border-gray-300 rounded flex items-center justify-center text-[11px] text-gray-400">
                Chart area – to be replaced by PowerBI/embedded analytics
              </div>
            </div>
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 2 – Percentile vs Price Premium
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Conceptual placeholder for scatter plot showing percentile
                  performance vs price premium.
                </div>
              </div>
              <div className="flex-1 border border-dashed border-gray-300 rounded flex items-center justify-center text-[11px] text-gray-400">
                Chart area – to be replaced by PowerBI/embedded analytics
              </div>
            </div>
          </div>
        )}

        {/* Sheet 3 Graphs */}
        {activeSheet === 'sheet3' && (
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 1 – Product Performance Overview
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Conceptual placeholder for PowerBI chart showing weighted
                  percentile and NBD/T by product.
                </div>
              </div>
              <div className="flex-1 border border-dashed border-gray-300 rounded flex items-center justify-center text-[11px] text-gray-400">
                Chart area – to be replaced by PowerBI/embedded analytics
              </div>
            </div>
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 2 – Customer Performance Overview
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Conceptual placeholder for PowerBI chart showing weighted
                  percentile and NBD/T by customer.
                </div>
              </div>
              <div className="flex-1 border border-dashed border-gray-300 rounded flex items-center justify-center text-[11px] text-gray-400">
                Chart area – to be replaced by PowerBI/embedded analytics
              </div>
            </div>
          </div>
        )}

        {/* Sheet 1 Content */}
        {activeSheet === 'sheet1' && (
          <>
            {/* Sheet 1 table – sorted lowest on Gap */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50 flex items-center justify-between">
                <span>
                  Sheet 1 – Price movement analysis (sorted lowest on Gap)
                </span>
                <span className="text-[11px] text-gray-500">
                  Columns: Price 202501, Price 202509, Base Price Change, FX
                  Change, Adjusted Price, Gap
                </span>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Customer</th>
                    <th className="p-2 text-left">Product</th>
                    <th className="p-2 text-right">Price 202501</th>
                    <th className="p-2 text-right">Price 202509</th>
                    <th className="p-2 text-right">Base Price Change</th>
                    <th className="p-2 text-right">Exchange Rate Change</th>
                    <th className="p-2 text-right">Adjusted Price</th>
                    <th className="p-2 text-right">Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {priceMovementRows.map((row, idx) => (
                    <tr
                      key={`${row.customer}-${row.product}-${idx}`}
                      className="border-b last:border-none"
                    >
                      <td className="p-2">{row.customer}</td>
                      <td className="p-2">{row.product}</td>
                      <td className="p-2 text-right">{row.price202501}</td>
                      <td className="p-2 text-right">{row.price202509}</td>
                      <td className="p-2 text-right">{row.basePriceChange}</td>
                      <td className="p-2 text-right">
                        {row.exchangeRateChange}
                      </td>
                      <td className="p-2 text-right">{row.adjustedPrice}</td>
                      <td
                        className={`p-2 text-right ${
                          row.gap < 0 ? 'text-red-600' : 'text-green-600'
                        }`}
                      >
                        {row.gap}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* SHEET 2 – TAIL REVIEW */}
        {activeSheet === 'sheet2' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Sheet 2 – Tail Review</h3>
                <p className="text-[11px] text-gray-500">
                  Identify weakest customer–product combinations either by
                  percentile (relative performance) or by NBD/T (absolute
                  profitability).
                </p>
              </div>
            </div>
            {/* Table 1 – Sorted by Percentile */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50 flex items-center justify-between">
                <span>Table 1 – Tail review sorted lowest on Percentile</span>
                <span className="text-[11px] text-gray-500">
                  Percentile shows how far this combination is from Nynas
                  global.
                </span>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Customer</th>
                    <th className="p-2 text-left">Product</th>
                    <th className="p-2 text-right">NBD/T</th>
                    <th className="p-2 text-right">Price Premium</th>
                    <th className="p-2 text-right">Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {tailSortedByPercentile.map((row, idx) => (
                    <tr
                      key={`p-${row.customer}-${row.product}-${idx}`}
                      className="border-b last:border-none"
                    >
                      <td className="p-2">{row.customer}</td>
                      <td className="p-2">{row.product}</td>
                      <td className="p-2 text-right">{row.nbdPerTon}</td>
                      <td className="p-2 text-right">{row.pricePremium}</td>
                      <td className="p-2 text-right">{row.percentile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Table 2 – Sorted by NBD/T */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50 flex items-center justify-between">
                <span>Table 2 – Tail review sorted lowest on NBD/T</span>
                <span className="text-[11px] text-gray-500">
                  NBD/T (Net back depot per ton) highlights combinations with
                  the weakest absolute profitability.
                </span>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Customer</th>
                    <th className="p-2 text-left">Product</th>
                    <th className="p-2 text-right">NBD/T</th>
                    <th className="p-2 text-right">Price Premium</th>
                    <th className="p-2 text-right">Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {tailSortedByNbd.map((row, idx) => (
                    <tr
                      key={`n-${row.customer}-${row.product}-${idx}`}
                      className="border-b last:border-none"
                    >
                      <td className="p-2">{row.customer}</td>
                      <td className="p-2">{row.product}</td>
                      <td className="p-2 text-right">{row.nbdPerTon}</td>
                      <td className="p-2 text-right">{row.pricePremium}</td>
                      <td className="p-2 text-right">{row.percentile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SHEET 3 – PRODUCT & CUSTOMER OVERVIEW */}
        {activeSheet === 'sheet3' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">
                  Sheet 3 – Product &amp; Customer Overview
                </h3>
                <p className="text-[11px] text-gray-500">
                  High-level view to show which products and customers are
                  weakest versus Nynas global, using weighted percentiles.
                </p>
              </div>
            </div>
            {/* Product Overview – sorted by weighted percentile */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50 flex items-center justify-between">
                <span>
                  Table 1 – Product overview (sorted lowest on weighted
                  percentile)
                </span>
                <span className="text-[11px] text-gray-500">
                  Percentile is a weighted average across all customer
                  combinations for each product.
                </span>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Product</th>
                    <th className="p-2 text-right">NBD/T</th>
                    <th className="p-2 text-right">Price Premium</th>
                    <th className="p-2 text-right">Weighted Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {productOverviewSorted.map((row, idx) => (
                    <tr
                      key={`prod-${row.product}-${idx}`}
                      className="border-b last:border-none"
                    >
                      <td className="p-2">{row.product}</td>
                      <td className="p-2 text-right">{row.nbdPerTon}</td>
                      <td className="p-2 text-right">{row.pricePremium}</td>
                      <td className="p-2 text-right">{row.percentile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Customer Overview – sorted by weighted percentile */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="border-b px-3 py-2 text-xs font-semibold bg-gray-50 flex items-center justify-between">
                <span>
                  Table 2 – Customer overview (sorted lowest on weighted
                  percentile)
                </span>
                <span className="text-[11px] text-gray-500">
                  Percentile is a weighted average across all products sold to
                  each customer.
                </span>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Customer</th>
                    <th className="p-2 text-right">NBD/T</th>
                    <th className="p-2 text-right">Price Premium</th>
                    <th className="p-2 text-right">Weighted Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  {customerOverviewSorted.map((row, idx) => (
                    <tr
                      key={`cust-${row.customer}-${idx}`}
                      className="border-b last:border-none"
                    >
                      <td className="p-2">{row.customer}</td>
                      <td className="p-2 text-right">{row.nbdPerTon}</td>
                      <td className="p-2 text-right">{row.pricePremium}</td>
                      <td className="p-2 text-right">{row.percentile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
