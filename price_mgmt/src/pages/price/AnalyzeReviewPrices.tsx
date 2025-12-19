// src/pages/price/AnalyzeReviewPrices.tsx
import { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  ZAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
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
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 1 – Price Premium vs Base Price
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Conceptual placeholder for PowerBI chart showing price premium
                  (PP) and base price over months.
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      {
                        period: '202501',
                        'Base Price': 1120,
                        'Price Premium': 100,
                      },
                      {
                        period: '202509',
                        'Base Price': 1120,
                        'Price Premium': 50,
                      },
                    ]}
                    margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="period"
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'Period',
                        position: 'insideBottom',
                        offset: -5,
                        style: { fontSize: 10 },
                      }}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'EUR / MT',
                        angle: -90,
                        position: 'insideLeft',
                        style: { fontSize: 10 },
                      }}
                      domain={[0, 1200]}
                      ticks={[0, 200, 400, 600, 800, 1000, 1200]}
                    />
                    <Tooltip
                      formatter={(value: number | string | undefined) =>
                        `${value ?? 0} EUR / MT`
                      }
                      labelStyle={{ fontSize: 11 }}
                      contentStyle={{ fontSize: 11 }}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: 10, paddingTop: 5 }}
                      iconSize={12}
                    />
                    <Bar
                      dataKey="Base Price"
                      fill="#3b82f6"
                      name="Base Price"
                    />
                    <Bar
                      dataKey="Price Premium"
                      fill="#f97316"
                      name="Price Premium"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 2 – FX Curve (USD to EUR)
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Conceptual line chart showing USD to EUR FX rate over the
                  selected period.
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { period: '202501', fxRate: 0.92 },
                      { period: '202503', fxRate: 0.94 },
                      { period: '202505', fxRate: 0.96 },
                      { period: '202507', fxRate: 0.95 },
                      { period: '202509', fxRate: 0.97 },
                    ]}
                    margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="period"
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'Period',
                        position: 'insideBottom',
                        offset: -5,
                        style: { fontSize: 10 },
                      }}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'FX Rate',
                        angle: -90,
                        position: 'insideLeft',
                        style: { fontSize: 10 },
                      }}
                      domain={[0.9, 1]}
                      tickCount={6}
                    />
                    <Tooltip
                      formatter={(value: number | string | undefined) =>
                        typeof value === 'number' ? value.toFixed(4) : `${value ?? ''}`
                      }
                      labelStyle={{ fontSize: 11 }}
                      contentStyle={{ fontSize: 11 }}
                    />
                    <Legend wrapperStyle={{ fontSize: 10, paddingTop: 5 }} />
                    <Line
                      type="monotone"
                      dataKey="fxRate"
                      name="USD to EUR FX Rate"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 4.5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Sheet 2 Graphs */}
        {activeSheet === 'sheet2' && (
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 1 – NBD/T Distribution
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Stacked bar showing Base Margin and Price Premium effect by
                  customer–product.
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { label: 'Cust B-Prod C', baseMargin: 30, premiumEffect: 30 },
                      { label: 'Cust A-Prod B', baseMargin: 35, premiumEffect: 30 },
                      { label: 'Cust A-Prod C', baseMargin: 42, premiumEffect: 28 },
                      { label: 'Cust C-Prod D', baseMargin: 55, premiumEffect: 25 },
                    ]}
                    margin={{ top: 5, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="label"
                      tick={{ fontSize: 10 }}
                      tickMargin={12}
                      interval={0}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'NBD/T (EUR per ton)',
                        angle: -90,
                        position: 'insideLeft',
                        style: { fontSize: 10 },
                      }}
                      domain={[0, 90]}
                      tickCount={10}
                    />
                    <Tooltip
                      formatter={(value: number | string | undefined) =>
                        `${value ?? 0} EUR`
                      }
                      labelStyle={{ fontSize: 11 }}
                      contentStyle={{ fontSize: 11 }}
                    />
                    <Legend wrapperStyle={{ fontSize: 10, paddingTop: 5 }} />
                    <Bar
                      dataKey="baseMargin"
                      name="Base Margin"
                      stackId="nbdt"
                      fill="#1d4ed8"
                    />
                    <Bar
                      dataKey="premiumEffect"
                      name="Price Premium Effect"
                      stackId="nbdt"
                      fill="#f97316"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 2 – Percentile vs Price Premium
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Scatter plot showing percentile performance vs price premium
                  with threshold line at 10% percentile.
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="number"
                      dataKey="percentile"
                      name="Percentile"
                      domain={[0, 16]}
                      ticks={[0, 5, 10, 15]}
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'Percentile (vs Nynas Global)',
                        position: 'insideBottom',
                        offset: -5,
                        style: { fontSize: 10 },
                      }}
                    />
                    <YAxis
                      type="number"
                      dataKey="pricePremium"
                      name="Price Premium"
                      domain={[-32, 2]}
                      ticks={[-30, -25, -20, -15, -10, -5, 0]}
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'Price Premium (EUR / MT)',
                        angle: -90,
                        position: 'insideLeft',
                        style: { fontSize: 10 },
                      }}
                    />
                    <ReferenceLine
                      x={10}
                      stroke="#0ea5e9"
                      strokeDasharray="5 5"
                      label={{
                        value: 'Percentile threshold (10%)',
                        position: 'top',
                        style: { fontSize: 10, fill: '#0ea5e9' },
                      }}
                    />
                    <ReferenceLine y={0} stroke="#0f172a" />
                    <Tooltip
                      formatter={(value: number | string | undefined, name) =>
                        name === 'Percentile'
                          ? `${value ?? ''}%`
                          : `${value ?? 0} EUR / MT`
                      }
                      labelFormatter={(_, payload) =>
                        payload && payload[0]?.payload?.label
                          ? payload[0].payload.label
                          : ''
                      }
                      labelStyle={{ fontSize: 11 }}
                      contentStyle={{ fontSize: 11 }}
                    />
                    <Legend wrapperStyle={{ fontSize: 10, paddingTop: 5 }} />
                    <Scatter
                      name="Critical pricing (urgent)"
                      data={[
                        {
                          label: 'Cust B – Product C',
                          percentile: 3.5,
                          pricePremium: -30,
                        },
                      ]}
                      fill="#dc2626"
                    />
                    <Scatter
                      name="Weak pricing"
                      data={[
                        {
                          label: 'Cust A – Product B',
                          percentile: 5,
                          pricePremium: -25,
                        },
                        {
                          label: 'Cust A – Product C',
                          percentile: 8,
                          pricePremium: -18,
                        },
                      ]}
                      fill="#f59e0b"
                    />
                    <Scatter
                      name="Acceptable / improving"
                      data={[
                        {
                          label: 'Cust C – Product D',
                          percentile: 15,
                          pricePremium: -9,
                        },
                      ]}
                      fill="#16a34a"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Sheet 3 Graphs */}
        {activeSheet === 'sheet3' && (
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 1 – Product Performance Overview
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Weighted percentile vs NBD/T with management threshold lines.
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="number"
                      dataKey="percentile"
                      name="Weighted Percentile"
                      domain={[10, 42]}
                      ticks={[10, 20, 30, 40]}
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'Weighted Percentile (vs Nynas Global)',
                        position: 'insideBottom',
                        offset: -5,
                        style: { fontSize: 10 },
                      }}
                    />
                    <YAxis
                      type="number"
                      dataKey="nbdt"
                      name="NBD/T"
                      domain={[50, 72]}
                      ticks={[52, 55, 60, 65, 70]}
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'NBD/T (EUR per ton)',
                        angle: -90,
                        position: 'insideLeft',
                        style: { fontSize: 10 },
                      }}
                    />
                    <ZAxis dataKey="size" range={[80, 200]} />
                    <ReferenceLine
                      x={20}
                      stroke="#0ea5e9"
                      strokeDasharray="5 5"
                      label={{
                        value: 'Management Threshold (Percentile)',
                        position: 'top',
                        style: { fontSize: 10, fill: '#0ea5e9' },
                      }}
                    />
                    <ReferenceLine
                      y={60}
                      stroke="#0ea5e9"
                      strokeDasharray="5 5"
                      label={{
                        value: 'Management Threshold (NBD/T)',
                        position: 'right',
                        style: { fontSize: 10, fill: '#0ea5e9' },
                      }}
                    />
                    <Tooltip
                      formatter={(value: number | string | undefined, name) => {
                        if (name === 'Weighted Percentile') return `${value ?? ''}`;
                        if (name === 'NBD/T') return `${value ?? 0} EUR / ton`;
                        return value;
                      }}
                      labelFormatter={(_, payload) =>
                        payload && payload[0]?.payload?.label
                          ? payload[0].payload.label
                          : ''
                      }
                      labelStyle={{ fontSize: 11 }}
                      contentStyle={{ fontSize: 11 }}
                    />
                    <Legend wrapperStyle={{ fontSize: 10, paddingTop: 5 }} />
                    <Scatter
                      name="Structurally Weak"
                      data={[
                        {
                          label: 'Product A',
                          percentile: 12,
                          nbdt: 52,
                          size: 180,
                        },
                      ]}
                      fill="#ef4444"
                    />
                    <Scatter
                      name="Needs Attention"
                      data={[
                        {
                          label: 'Product B',
                          percentile: 25,
                          nbdt: 60,
                          size: 220,
                        },
                      ]}
                      fill="#f59e0b"
                    />
                    <Scatter
                      name="Healthy"
                      data={[
                        {
                          label: 'Product C',
                          percentile: 40,
                          nbdt: 70,
                          size: 260,
                        },
                      ]}
                      fill="#16a34a"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded shadow p-4 h-56 flex flex-col">
              <div>
                <div className="font-semibold text-xs mb-1">
                  Graph 2 – Customer Performance Overview
                </div>
                <div className="text-[11px] text-gray-500 mb-2">
                  Weighted percentile vs NBD/T by customer with management
                  thresholds.
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="number"
                      dataKey="percentile"
                      name="Weighted Percentile"
                      domain={[8, 32]}
                      ticks={[10, 15, 20, 25, 30]}
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'Weighted Percentile (vs Nynas Global)',
                        position: 'insideBottom',
                        offset: -5,
                        style: { fontSize: 10 },
                      }}
                    />
                    <YAxis
                      type="number"
                      dataKey="nbdt"
                      name="NBD/T"
                      domain={[36, 58]}
                      ticks={[38, 42, 46, 50, 54, 58]}
                      tick={{ fontSize: 10 }}
                      label={{
                        value: 'NBD/T (EUR per ton)',
                        angle: -90,
                        position: 'insideLeft',
                        style: { fontSize: 10 },
                      }}
                    />
                    <ZAxis dataKey="size" range={[80, 220]} />
                    <ReferenceLine
                      x={20}
                      stroke="#0ea5e9"
                      strokeDasharray="5 5"
                      label={{
                        value: 'Management Threshold (Percentile)',
                        position: 'top',
                        style: { fontSize: 10, fill: '#0ea5e9' },
                      }}
                    />
                    <ReferenceLine
                      y={50}
                      stroke="#0ea5e9"
                      strokeDasharray="5 5"
                      label={{
                        value: 'Management Threshold (NBD/T)',
                        position: 'right',
                        style: { fontSize: 10, fill: '#0ea5e9' },
                      }}
                    />
                    <Tooltip
                      formatter={(value: number | string | undefined, name) => {
                        if (name === 'Weighted Percentile') return `${value ?? ''}`;
                        if (name === 'NBD/T') return `${value ?? 0} EUR / ton`;
                        return value;
                      }}
                      labelFormatter={(_, payload) =>
                        payload && payload[0]?.payload?.label
                          ? payload[0].payload.label
                          : ''
                      }
                      labelStyle={{ fontSize: 11 }}
                      contentStyle={{ fontSize: 11 }}
                    />
                    <Legend wrapperStyle={{ fontSize: 10, paddingTop: 5 }} />
                    <Scatter
                      name="Structurally Weak Customer"
                      data={[
                        {
                          label: 'Cust A',
                          percentile: 10,
                          nbdt: 38,
                          size: 200,
                        },
                      ]}
                      fill="#ef4444"
                    />
                    <Scatter
                      name="Needs Commercial Attention"
                      data={[
                        {
                          label: 'Cust B',
                          percentile: 18,
                          nbdt: 45,
                          size: 220,
                        },
                      ]}
                      fill="#f59e0b"
                    />
                    <Scatter
                      name="Healthy Customer"
                      data={[
                        {
                          label: 'Cust C',
                          percentile: 30,
                          nbdt: 58,
                          size: 260,
                        },
                      ]}
                      fill="#16a34a"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
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
