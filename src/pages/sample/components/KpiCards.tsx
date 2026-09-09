interface KpiCardProps {
  label: string;
  value: string;
  unit?: string;
  sub?: string;
  color: string;
  bgColor: string;
  icon: string;
  iconColor: string;
}

function KpiCard({ label, value, unit, sub, color, bgColor, icon, iconColor }: KpiCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-xs">{label}</span>
        <span className={`w-7 h-7 flex items-center justify-center rounded-lg ${bgColor}`}>
          <i className={`${icon} text-sm ${iconColor}`}></i>
        </span>
      </div>
      <div className="flex items-end gap-1">
        <span className={`text-2xl font-bold font-['Orbitron'] ${color}`}>{value}</span>
        {unit && <span className="text-gray-400 text-sm mb-0.5">{unit}</span>}
      </div>
      {sub && <span className="text-gray-400 text-xs">{sub}</span>}
    </div>
  );
}

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <KpiCard
        label="現在瞬時電力"
        value="467"
        unit="kW"
        color="text-teal-500"
        bgColor="bg-teal-50"
        iconColor="text-teal-500"
        icon="ri-flashlight-line"
      />
      <KpiCard
        label="予測ピーク電力"
        value="512"
        unit="kW"
        sub="あと12分"
        color="text-orange-500"
        bgColor="bg-orange-50"
        iconColor="text-orange-500"
        icon="ri-line-chart-line"
      />
      <KpiCard
        label="計測時間残り"
        value="12"
        unit="分"
        color="text-orange-500"
        bgColor="bg-orange-50"
        iconColor="text-orange-500"
        icon="ri-time-line"
      />
      <KpiCard
        label="超過予想コスト"
        value="¥45,000"
        color="text-red-500"
        bgColor="bg-red-50"
        iconColor="text-red-500"
        icon="ri-money-yen-circle-line"
      />
    </div>
  );
}
