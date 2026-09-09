import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: '1月', cost: 820000, saving: 120000 },
  { month: '2月', cost: 760000, saving: 145000 },
  { month: '3月', cost: 710000, saving: 168000 },
  { month: '4月', cost: 680000, saving: 182000 },
  { month: '5月', cost: 720000, saving: 175000 },
  { month: '6月', cost: 890000, saving: 210000 },
  { month: '7月', cost: 950000, saving: 235000 },
];

export default function CostSummary() {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-800 text-sm font-semibold">月別電力コスト推移</h3>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-gray-500">
            <span className="w-3 h-3 rounded-sm bg-blue-200 inline-block"></span>電力コスト
          </span>
          <span className="flex items-center gap-1.5 text-gray-500">
            <span className="w-3 h-3 rounded-sm bg-teal-400 inline-block"></span>削減額
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={monthlyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#9ca3af', fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fill: '#9ca3af', fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${(v / 10000).toFixed(0)}万`} />
          <Tooltip
            contentStyle={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 12 }}
            labelStyle={{ color: '#6b7280' }}
            formatter={(value: number) => [`¥${value.toLocaleString()}`, '']}
          />
          <Bar dataKey="cost" fill="#bfdbfe" radius={[3, 3, 0, 0]} name="電力コスト" />
          <Bar dataKey="saving" fill="#14b8a6" radius={[3, 3, 0, 0]} name="削減額" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
