const equipments = [
  { name: '生産ライン1', value: 120, max: 150, color: '#14b8a6', warn: '#f97316' },
  { name: '生産ライン2', value: 105, max: 150, color: '#14b8a6', warn: '#f97316' },
  { name: '空調設備',   value: 90,  max: 150, color: '#14b8a6', warn: null },
  { name: 'コンプレッサー', value: 75, max: 150, color: '#14b8a6', warn: null },
  { name: '照明設備',   value: 45,  max: 150, color: '#14b8a6', warn: null },
  { name: 'その他',     value: 32,  max: 150, color: '#14b8a6', warn: null },
];

export default function EquipmentBar() {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <h3 className="text-gray-800 text-sm font-semibold mb-4">設備別電力消費（kW）</h3>
      <div className="flex flex-col gap-3">
        {equipments.map((eq, i) => {
          const ratio = eq.value / eq.max;
          const warnRatio = eq.warn ? 0.75 : null;
          return (
            <div key={eq.name} className="flex items-center gap-3">
              <span className="text-gray-400 text-xs w-4 text-right shrink-0">{i + 1}</span>
              <span className="text-gray-600 text-xs w-24 shrink-0">{eq.name}</span>
              <div className="flex-1 h-5 bg-gray-100 rounded-sm overflow-hidden relative">
                <div
                  className="h-full rounded-sm transition-all duration-700"
                  style={{
                    width: `${ratio * 100}%`,
                    background: warnRatio && ratio > warnRatio
                      ? `linear-gradient(90deg, ${eq.color} ${(warnRatio / ratio) * 100}%, ${eq.warn} 100%)`
                      : eq.color,
                  }}
                />
              </div>
              <span className="text-gray-700 text-xs font-semibold w-14 text-right shrink-0">
                {eq.value}kW
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
