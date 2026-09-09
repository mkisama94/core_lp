import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
import { Zap, BatteryCharging, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';

type ControlState = 'standby' | 'discharge' | 'charge';

interface TimelinePoint {
  time: string;
  demand: number;
  gridPower: number;
}

export const PowerFlowSimulator: React.FC = () => {
  const [activeState, setActiveState] = useState<ControlState>('discharge');

  // Illustration-only relative coordinates; these are not site telemetry or control settings.
  const generateData = (mode: ControlState): TimelinePoint[] => {
    const stages = ['観測', '変化の兆候', '協調制御', '余力評価', '次時限'];
    const curves = {
      discharge: { demand: [45, 75, 90, 55, 45], grid: [45, 55, 60, 50, 45] },
      charge: { demand: [35, 30, 25, 30, 35], grid: [35, 45, 50, 45, 35] },
      standby: { demand: [40, 45, 40, 45, 40], grid: [40, 45, 40, 45, 40] },
    }[mode];
    return stages.map((time, index) => ({time, demand: curves.demand[index], gridPower: curves.grid[index]}));
  };

  const currentData = generateData(activeState);

  const stateDetails = {
    discharge: {
      title: 'ピーク抑制放電（デマンド超過の先回り防止）',
      tag: '予兆検知と先行放電',
      description:
        '需要予測からピーク超過の兆候を捉え、蓄電池の余力と設備制約に応じて先回り放電を判断。受電電力を安全目標に沿って抑制します。',
      statusText: '需要に応じて放電',
      statusColor: 'text-signal-lime',
      batteryStatus: '余力を活用',
      metric1: '需要ピークを抑制',
      metric2: '安全目標と継続照合',
    },
    charge: {
      title: '余力活用充電（残存電力量の安全回収）',
      tag: '運用余力と充電の最適化',
      description:
        '工場稼働に余裕がある時間帯を検知。30分平均デマンドに悪影響を与えない範囲を厳密に計算し、蓄電池へ充電して次時限のピークへ備えます。次時限への影響を考慮して充電を調整します。',
      statusText: '余力に応じて充電',
      statusColor: 'text-sky-400',
      batteryStatus: '次の需要変動へ備える',
      metric1: '蓄電池余力を回復',
      metric2: '受電枠と設備制約を考慮',
    },
    standby: {
      title: '基準計測・定常監視（無制御安全待機）',
      tag: '基準需要の観測と状態監視',
      description:
        '基準となる需要と設備の状態を継続的に観測。需給が安定し、充放電が不要な局面では待機を選択し、蓄電池の余力を温存します。',
      statusText: '待機・監視',
      statusColor: 'text-slate-300',
      batteryStatus: '蓄電池余力を温存',
      metric1: '需要の安定を確認',
      metric2: '状態と通信品質を監視',
    },
  }[activeState];

  return (
    <div className="bg-graphite-card border border-graphite-border p-6 sm:p-8 text-paper-light">
      {/* State Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">制御ステート:</span>
          <span className="font-mono text-xs text-signal-lime font-bold">[{activeState.toUpperCase()}]</span>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-graphite-deep border border-graphite-border">
          <button
            onClick={() => setActiveState('discharge')}
            className={`px-3.5 py-1.5 font-mono text-xs tracking-wider transition-colors ${
              activeState === 'discharge'
                ? 'bg-signal-lime text-graphite-deep font-bold'
                : 'text-slate-400 hover:text-paper-light'
            }`}
          >
            01 / 放電（ピーク抑制）
          </button>
          <button
            onClick={() => setActiveState('charge')}
            className={`px-3.5 py-1.5 font-mono text-xs tracking-wider transition-colors ${
              activeState === 'charge'
                ? 'bg-signal-lime text-graphite-deep font-bold'
                : 'text-slate-400 hover:text-paper-light'
            }`}
          >
            02 / 充電（余裕回収）
          </button>
          <button
            onClick={() => setActiveState('standby')}
            className={`px-3.5 py-1.5 font-mono text-xs tracking-wider transition-colors ${
              activeState === 'standby'
                ? 'bg-signal-lime text-graphite-deep font-bold'
                : 'text-slate-400 hover:text-paper-light'
            }`}
          >
            03 / 待機（基準計測）
          </button>
        </div>
      </div>

      {/* Main Simulator Graphic & Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        {/* Left: Chart Visualization */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-red-400/80 inline-block" />
                <span className="text-slate-300">生の需要（制御前）</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-signal-lime inline-block" />
                <span className="text-slate-300">実効受電電力（CORE制御後）</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-amber-300">
              <span className="w-4 h-[2px] bg-amber-400 inline-block border-dashed" />
              <span>設備条件に応じた安全目標</span>
            </div>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-64 sm:h-72 w-full bg-graphite-deep border border-graphite-border p-3 pt-5">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gridPowerGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38B5DE" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#38B5DE" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="demandGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F87171" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#F87171" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="time"
                  stroke="#5A6E78"
                  tick={{ fill: '#889DA8', fontSize: 10, fontFamily: 'monospace' }}
                />
                <YAxis
                  domain={[0, 100]}
                  stroke="#5A6E78"
                  tick={{ fill: '#889DA8', fontSize: 10, fontFamily: 'monospace' }}
                  tickFormatter={() => ''}
                />
                <Tooltip formatter={() => '相対的な変化'}
                  contentStyle={{
                    backgroundColor: '#0B1318',
                    borderColor: 'rgba(255,255,255,0.1)',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                  }}
                />
                <ReferenceLine
                  y={65}
                  stroke="#FBBF24"
                  strokeDasharray="3 3"
                  label={{ value: '安全目標（概念）', fill: '#FBBF24', fontSize: 10, position: 'insideTopRight' }}
                />
                {/* 生の需要 */}
                <Area
                  type="monotone"
                  dataKey="demand"
                  stroke="#F87171"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#demandGrad)"
                  name="制御前の需要（相対イメージ）"
                />
                {/* 制御後の受電 */}
                <Area
                  type="monotone"
                  dataKey="gridPower"
                  stroke="#38B5DE"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#gridPowerGrad)"
                  name="制御後の受電（相対イメージ）"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-between text-[11px] font-mono text-slate-500">
            <span>※概念図：縦軸は相対イメージ。実測値・設定値・成果を表すものではありません。</span>
            <span>30分時限との協調</span>
          </div>
        </div>

        {/* Right: State Explanation & Telemetry */}
        <div className="bg-graphite-deep border border-graphite-border p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="lime" size="sm">{stateDetails.tag}</Badge>
              <span className={`font-mono text-xs font-bold ${stateDetails.statusColor}`}>
                ● CONCEPT
              </span>
            </div>

            <h3 className="font-bold text-base text-paper-light">
              {stateDetails.title}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {stateDetails.description}
            </p>
          </div>

          {/* Telemetry Metrics */}
          <div className="space-y-2.5 pt-3 border-t border-graphite-border">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">制御ステータス:</span>
              <span className={`font-bold ${stateDetails.statusColor}`}>{stateDetails.statusText}</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">蓄電池動作:</span>
              <span className="text-paper-light">{stateDetails.batteryStatus}</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">制御指標:</span>
              <span className="text-signal-lime font-bold">{stateDetails.metric1}</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">安全余裕度:</span>
              <span className="text-emerald-400 font-bold">{stateDetails.metric2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
