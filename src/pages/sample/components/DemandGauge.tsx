import { useMemo } from 'react';

interface DemandGaugeProps {
  current: number;
  contract: number;
}

export default function DemandGauge({ current, contract }: DemandGaugeProps) {
  const ratio = Math.min(current / contract, 1);

  const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const describeArc = (cx: number, cy: number, r: number, startAngle: number, endAngle: number) => {
    const s = polarToCartesian(cx, cy, r, startAngle);
    const e = polarToCartesian(cx, cy, r, endAngle);
    const large = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  };

  const cx = 160;
  const cy = 150;
  const r = 110;
  const arcStart = -150;
  const arcEnd = 90;
  const arcSpan = arcEnd - arcStart;

  const needleAngle = arcStart + ratio * arcSpan;
  const needleEnd = polarToCartesian(cx, cy, r - 10, needleAngle);
  const needleBase1 = polarToCartesian(cx, cy, 12, needleAngle + 90);
  const needleBase2 = polarToCartesian(cx, cy, 12, needleAngle - 90);

  const gradientStops = useMemo(() => [
    { offset: '0%', color: '#22c55e' },
    { offset: '40%', color: '#eab308' },
    { offset: '70%', color: '#f97316' },
    { offset: '100%', color: '#ef4444' },
  ], []);

  const bgPath = describeArc(cx, cy, r, arcStart, arcEnd);
  const valuePath = describeArc(cx, cy, r, arcStart, arcStart + ratio * arcSpan);

  return (
    <div className="flex flex-col items-center">
      <svg width="320" height="200" viewBox="0 0 320 200">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientStops.map((s) => (
              <stop key={s.offset} offset={s.offset} stopColor={s.color} />
            ))}
          </linearGradient>
        </defs>
        {/* Background arc */}
        <path d={bgPath} fill="none" stroke="#e5e7eb" strokeWidth="20" strokeLinecap="round" />
        {/* Value arc */}
        <path d={valuePath} fill="none" stroke="url(#gaugeGrad)" strokeWidth="20" strokeLinecap="round" />
        {/* Needle */}
        <polygon
          points={`${needleEnd.x},${needleEnd.y} ${needleBase1.x},${needleBase1.y} ${needleBase2.x},${needleBase2.y}`}
          fill="#9ca3af"
          opacity="0.9"
        />
        <circle cx={cx} cy={cy} r="8" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
        {/* Labels */}
        <text x={cx - r + 5} y={cy + 30} fill="#9ca3af" fontSize="11" textAnchor="middle">0</text>
        <text x={cx + r - 5} y={cy + 30} fill="#9ca3af" fontSize="11" textAnchor="middle">{contract}kW</text>
        {/* Center text */}
        <text x={cx} y={cy - 10} fill="#9ca3af" fontSize="12" textAnchor="middle">現在</text>
        <text x={cx} y={cy + 18} fill="#0d9488" fontSize="18" fontWeight="bold" textAnchor="middle">{current}kW</text>
        <text x={cx} y={cy + 36} fill="#9ca3af" fontSize="11" textAnchor="middle">/ 契約 <tspan fill="#f97316">{contract}kW</tspan></text>
      </svg>
    </div>
  );
}
