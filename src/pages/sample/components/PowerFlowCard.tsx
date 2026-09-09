const flowItems = [
  { icon: 'ri-sun-line', label: '太陽光発電', value: '+185 kW', color: '#d97706', bg: 'bg-amber-50', border: 'border-amber-100' },
  { icon: 'ri-battery-charge-line', label: '蓄電池', value: '-42 kW', color: '#0d9488', bg: 'bg-teal-50', border: 'border-teal-100' },
  { icon: 'ri-building-line', label: '系統電力', value: '+324 kW', color: '#7c3aed', bg: 'bg-violet-50', border: 'border-violet-100' },
  { icon: 'ri-factory-line', label: '負荷消費', value: '467 kW', color: '#ea580c', bg: 'bg-orange-50', border: 'border-orange-100' },
];

export default function PowerFlowCard() {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <h3 className="text-gray-800 text-sm font-semibold mb-4">電力フロー</h3>
      <div className="grid grid-cols-2 gap-3">
        {flowItems.map((item) => (
          <div key={item.label} className={`rounded-lg p-3 ${item.bg} border ${item.border} flex items-center gap-3`}>
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0">
              <i className={`${item.icon} text-lg`} style={{ color: item.color }}></i>
            </span>
            <div>
              <p className="text-gray-500 text-xs">{item.label}</p>
              <p className="text-sm font-bold font-['Orbitron']" style={{ color: item.color }}>
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
