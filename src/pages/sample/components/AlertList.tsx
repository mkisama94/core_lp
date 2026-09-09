const alerts = [
  { level: 'error', icon: 'ri-error-warning-line', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100', time: '14:32', msg: 'デマンド契約超過リスク（予測512kW / 契約500kW）' },
  { level: 'warn',  icon: 'ri-alert-line',         color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100', time: '14:28', msg: '生産ライン1 電力消費が上限の80%を超過' },
  { level: 'warn',  icon: 'ri-alert-line',         color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100', time: '14:15', msg: '蓄電池残量が20%以下に低下' },
  { level: 'info',  icon: 'ri-information-line',   color: 'text-teal-500',  bg: 'bg-teal-50', border: 'border-teal-100', time: '13:50', msg: '太陽光発電量が本日最大値を更新（185kW）' },
  { level: 'info',  icon: 'ri-information-line',   color: 'text-teal-500',  bg: 'bg-teal-50', border: 'border-teal-100', time: '13:20', msg: '空調設備の自動制御を開始しました' },
];

export default function AlertList() {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-800 text-sm font-semibold">アラート・通知</h3>
        <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">すべて見る</span>
      </div>
      <div className="flex flex-col gap-2">
        {alerts.map((a, i) => (
          <div key={i} className={`flex items-start gap-3 rounded-lg px-3 py-2.5 border ${a.bg} ${a.border}`}>
            <span className={`w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 ${a.color}`}>
              <i className={`${a.icon} text-sm`}></i>
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-gray-700 text-xs leading-relaxed">{a.msg}</p>
            </div>
            <span className="text-gray-400 text-xs shrink-0">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
