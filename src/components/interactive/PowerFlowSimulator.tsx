import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
import { Zap, BatteryCharging, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';

type ControlState = 'standby' | 'discharge' | 'charge';

interface TimelinePoint {
  time: string;
  demand: number;       // 生の需要 (kW)
  contractTarget: number; // 安全目標 (360kW)
  gridPower: number;    // 受電電力 (kW)
  batteryPower: number; // 放電(+) / 充電(-) (kW)
  soc: number;          // 蓄電池残量 (%)
}

export const PowerFlowSimulator: React.FC = () => {
  const [activeState, setActiveState] = useState<ControlState>('discharge');

  // 30分時限（0〜30分）のシミュレーションデータ
  const generateData = (mode: ControlState): TimelinePoint[] => {
    const times = [
      '0:00', '2:30', '5:00', '7:30', '10:00', '12:30', '15:00',
      '17:30', '20:00', '22:30', '25:00', '27:30', '29:45', '30:00'
    ];

    if (mode === 'discharge') {
      // ピーク発生時：需要が急上昇（最大440kW）、蓄電池が最大50kW放電して受電を360kW未満に抑制
      return [
        { time: '0:00', demand: 310, contractTarget: 360, gridPower: 310, batteryPower: 0, soc: 90 },
        { time: '2:30', demand: 380, contractTarget: 360, gridPower: 350, batteryPower: 30, soc: 88 },
        { time: '5:00', demand: 420, contractTarget: 360, gridPower: 358, batteryPower: 50, soc: 84 },
        { time: '7:30', demand: 435, contractTarget: 360, gridPower: 359, batteryPower: 50, soc: 80 },
        { time: '10:00', demand: 440, contractTarget: 360, gridPower: 359, batteryPower: 50, soc: 75 },
        { time: '12:30', demand: 410, contractTarget: 360, gridPower: 355, batteryPower: 45, soc: 71 },
        { time: '15:00', demand: 390, contractTarget: 360, gridPower: 350, batteryPower: 35, soc: 68 },
        { time: '17:30', demand: 365, contractTarget: 360, gridPower: 350, batteryPower: 15, soc: 66 },
        { time: '20:00', demand: 340, contractTarget: 360, gridPower: 340, batteryPower: 0, soc: 66 },
        { time: '22:30', demand: 330, contractTarget: 360, gridPower: 330, batteryPower: 0, soc: 66 },
        { time: '25:00', demand: 320, contractTarget: 360, gridPower: 320, batteryPower: 0, soc: 66 },
        { time: '27:30', demand: 315, contractTarget: 360, gridPower: 345, batteryPower: -30, soc: 70 }, // ラストスパート充電
        { time: '29:45', demand: 310, contractTarget: 360, gridPower: 345, batteryPower: -35, soc: 74 },
        { time: '30:00', demand: 310, contractTarget: 360, gridPower: 310, batteryPower: 0, soc: 74 },
      ];
    }

    if (mode === 'charge') {
      // 余裕充電時：需要が低く（260〜300kW）、安全余裕枠内で最大50kW充電し次時限へ備える
      return [
        { time: '0:00', demand: 280, contractTarget: 360, gridPower: 280, batteryPower: 0, soc: 40 },
        { time: '2:30', demand: 275, contractTarget: 360, gridPower: 275, batteryPower: 0, soc: 40 }, // 冒頭禁止
        { time: '5:00', demand: 270, contractTarget: 360, gridPower: 320, batteryPower: -50, soc: 46 }, // 余裕充電開始
        { time: '7:30', demand: 285, contractTarget: 360, gridPower: 330, batteryPower: -45, soc: 52 },
        { time: '10:00', demand: 290, contractTarget: 360, gridPower: 330, batteryPower: -40, soc: 58 },
        { time: '12:30', demand: 280, contractTarget: 360, gridPower: 325, batteryPower: -45, soc: 64 },
        { time: '15:00', demand: 275, contractTarget: 360, gridPower: 325, batteryPower: -50, soc: 70 },
        { time: '17:30', demand: 260, contractTarget: 360, gridPower: 310, batteryPower: -50, soc: 76 },
        { time: '20:00', demand: 265, contractTarget: 360, gridPower: 315, batteryPower: -50, soc: 82 },
        { time: '22:30', demand: 270, contractTarget: 360, gridPower: 320, batteryPower: -50, soc: 88 },
        { time: '25:00', demand: 280, contractTarget: 360, gridPower: 330, batteryPower: -50, soc: 94 },
        { time: '27:30', demand: 280, contractTarget: 360, gridPower: 330, batteryPower: -50, soc: 98 },
        { time: '29:45', demand: 280, contractTarget: 360, gridPower: 280, batteryPower: 0, soc: 98 }, // 境界停止
        { time: '30:00', demand: 280, contractTarget: 360, gridPower: 280, batteryPower: 0, soc: 98 },
      ];
    }

    // standby: 基準計測・定常監視
    return [
      { time: '0:00', demand: 320, contractTarget: 360, gridPower: 320, batteryPower: 0, soc: 85 },
      { time: '2:30', demand: 325, contractTarget: 360, gridPower: 325, batteryPower: 0, soc: 85 },
      { time: '5:00', demand: 330, contractTarget: 360, gridPower: 330, batteryPower: 0, soc: 85 },
      { time: '7:30', demand: 328, contractTarget: 360, gridPower: 328, batteryPower: 0, soc: 85 },
      { time: '10:00', demand: 332, contractTarget: 360, gridPower: 332, batteryPower: 0, soc: 85 },
      { time: '12:30', demand: 330, contractTarget: 360, gridPower: 330, batteryPower: 0, soc: 85 },
      { time: '15:00', demand: 335, contractTarget: 360, gridPower: 335, batteryPower: 0, soc: 85 },
      { time: '17:30', demand: 328, contractTarget: 360, gridPower: 328, batteryPower: 0, soc: 85 },
      { time: '20:00', demand: 330, contractTarget: 360, gridPower: 330, batteryPower: 0, soc: 85 },
      { time: '22:30', demand: 335, contractTarget: 360, gridPower: 335, batteryPower: 0, soc: 85 },
      { time: '25:00', demand: 328, contractTarget: 360, gridPower: 328, batteryPower: 0, soc: 85 },
      { time: '27:30', demand: 325, contractTarget: 360, gridPower: 325, batteryPower: 0, soc: 85 },
      { time: '29:45', demand: 320, contractTarget: 360, gridPower: 320, batteryPower: 0, soc: 85 },
      { time: '30:00', demand: 320, contractTarget: 360, gridPower: 320, batteryPower: 0, soc: 85 },
    ];
  };

  const currentData = generateData(activeState);

  const stateDetails = {
    discharge: {
      title: 'ピーク抑制放電（デマンド超過の先回り防止）',
      tag: '0:15〜3:00先行放電 ＋ 通常放電',
      description:
        '工場の突発負荷で生需要が契約目標（360kW）を突破しそうな場合、SPAQ COREが時限開始直後から先回り放電。受電電力を目標線以下に抑え込み、基本料金の上昇を防ぎます。',
      statusText: '放電中：50 kW出力',
      statusColor: 'text-signal-lime',
      batteryStatus: '放電稼働（残量 88% → 74%）',
      metric1: '最大抑制電力: 45 kW',
      metric2: '超過リスク: 0 %',
    },
    charge: {
      title: '余力活用充電（残存電力量の安全回収）',
      tag: '3:00〜27:00 余裕連動 ＋ 27:00〜 ラストスパート',
      description:
        '工場稼働に余裕がある時間帯を検知。30分平均デマンドに悪影響を与えない範囲を厳密に計算し、蓄電池へ充電して次時限のピークへ備えます。時限終了15秒前に自動停止し境界を守ります。',
      statusText: '充電中：-50 kW受電蓄電',
      statusColor: 'text-sky-400',
      batteryStatus: '急速充電中（残量 40% → 98%）',
      metric1: '回収電力量: 約22 kWh',
      metric2: '時限超過余裕: +30 kW安全',
    },
    standby: {
      title: '基準計測・定常監視（無制御安全待機）',
      tag: '0:00〜0:15 純粋計測 ＋ 巡航待機',
      description:
        '新しい30分時限の冒頭15秒間は、電力会社パルスとデマコンのベースラインを正確に観測するため完全無制御待機。需要トレンドに変化がない平時は蓄電池を温存し劣化を防ぎます。',
      statusText: '待機・監視中：0 kW出力',
      statusColor: 'text-slate-300',
      batteryStatus: '待機中（残量 85%維持）',
      metric1: '受電電力: 330 kW安定',
      metric2: '計測確度: 100% 正常同期',
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
              <span>安全目標 (360kW)</span>
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
                  domain={[200, 480]}
                  stroke="#5A6E78"
                  tick={{ fill: '#889DA8', fontSize: 10, fontFamily: 'monospace' }}
                  unit="kW"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0B1318',
                    borderColor: 'rgba(255,255,255,0.1)',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                  }}
                />
                <ReferenceLine
                  y={360}
                  stroke="#FBBF24"
                  strokeDasharray="3 3"
                  label={{ value: '安全目標 360kW', fill: '#FBBF24', fontSize: 10, position: 'insideTopRight' }}
                />
                {/* 生の需要 */}
                <Area
                  type="monotone"
                  dataKey="demand"
                  stroke="#F87171"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#demandGrad)"
                  name="生需要 (kW)"
                />
                {/* 制御後の受電 */}
                <Area
                  type="monotone"
                  dataKey="gridPower"
                  stroke="#38B5DE"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#gridPowerGrad)"
                  name="受電電力 (kW)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>※説明用イメージ：30分固定デマンド時限シミュレーション</span>
            <span>時限周期: 30分00秒</span>
          </div>
        </div>

        {/* Right: State Explanation & Telemetry */}
        <div className="bg-graphite-deep border border-graphite-border p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="lime" size="sm">{stateDetails.tag}</Badge>
              <span className={`font-mono text-xs font-bold ${stateDetails.statusColor}`}>
                ● LIVE
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
