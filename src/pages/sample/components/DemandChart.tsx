import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const generateData = () => {
  const data = [];
  for (let i = 0; i <= 30; i++) {
    const min = i * 1;
    const label = `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
    const actual = i <= 18 ? 380 + i * 5 + Math.random() * 8 : null;
    const forecast = i >= 16 ? 460 + (i - 16) * 4 + Math.random() * 6 : null;
    data.push({ time: label, actual, forecast });
  }
  return data;
};

const chartData = generateData();

export default function DemandChart() {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-800 text-sm font-semibold">
          30分時間のデマンド（現在{18}分値）
        </h3>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-teal-500">
            <span className="w-6 h-0.5 bg-teal-500 inline-block"></span>現値
          </span>
          <span className="flex items-center gap-1.5 text-orange-400">
            <span className="w-6 border-t-2 border-dashed border-orange-400 inline-block"></span>危険ゾーン
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="forecastGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="time"
            tick={{ fill: '#9ca3af', fontSize: 10 }}
            tickLine={false}
            axisLine={{ stroke: '#e5e7eb' }}
            interval={4}
          />
          <YAxis
            tick={{ fill: '#9ca3af', fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            domain={[350, 550]}
          />
          <Tooltip
            contentStyle={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 12 }}
            labelStyle={{ color: '#6b7280' }}
            itemStyle={{ color: '#14b8a6' }}
          />
          <ReferenceLine y={500} stroke="#ef4444" strokeDasharray="4 4" strokeWidth={1.5} />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="#14b8a6"
            strokeWidth={2}
            fill="url(#actualGrad)"
            dot={false}
            connectNulls={false}
            name="現値"
          />
          <Area
            type="monotone"
            dataKey="forecast"
            stroke="#f97316"
            strokeWidth={2}
            strokeDasharray="5 3"
            fill="url(#forecastGrad)"
            dot={false}
            connectNulls={false}
            name="予測"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
