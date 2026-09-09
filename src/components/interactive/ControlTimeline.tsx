import React, { useState } from 'react';
import { Clock, ShieldCheck, Zap, Battery, AlertTriangle, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';

export interface TimelinePhase {
  id: string;
  timeRange: string;
  name: string;
  chargeStatus: '禁止' | '条件付許可' | '最大活用' | '停止';
  dischargeStatus: '停止' | '自律必要量' | '危機時優先' | '継続可';
  summary: string;
  detail: string;
  tag: string;
}

const PHASES: TimelinePhase[] = [
  {
    id: 'p1',
    timeRange: '0:00 〜 0:15',
    name: '基準計測（無制御区間）',
    chargeStatus: '禁止',
    dischargeStatus: '停止',
    summary: '新しい時限のベースライン受電値（R002・R004等）を正確に取得する純粋無制御区間。',
    detail: '時限跨ぎ直後の過渡的な系統変動やNTP同期の誤差を排除し、正確なデマンド計測の起点を確定させます。',
    tag: '計測確定'
  },
  {
    id: 'p2',
    timeRange: '0:15 〜 3:00',
    name: 'スタートアップ放電',
    chargeStatus: '禁止',
    dischargeStatus: '自律必要量',
    summary: '蓄電池放電能力を受電電力へ実際に反映し、デマンドコントローラーに先回り認識させる。',
    detail: 'デマコンには蓄電池能力値の設定機能がないため、SPAQ COREが実際に放電して受電電力を目標値（360kW）以下へ押し下げます。見かけの需要減衰を補正する反実仮想判定も同時稼働。',
    tag: 'デマコン同期'
  },
  {
    id: 'p3',
    timeRange: '3:00 〜 27:00',
    name: '通常自動制御',
    chargeStatus: '条件付許可',
    dischargeStatus: '危機時優先',
    summary: '需要トレンドと電力量予算・残容量（SOC）に基づき、放電と充電を高度に振り分け。',
    detail: '需要下降中は前倒し充電、需要急増時は即時放電。安全側上限予測とリアルタイム受電電力の監視を秒単位でループします。',
    tag: '自律最適化'
  },
  {
    id: 'p4',
    timeRange: '27:00 〜 29:45',
    name: 'ラストスパート充電',
    chargeStatus: '最大活用',
    dischargeStatus: '危機時優先',
    summary: '30分平均デマンドに影響しにくい時限後半の残存電力量を充電へ最大限に割り当て。',
    detail: '当該時限の実績積算電力量と残り時間の予測から、契約デマンド枠内で安全に使える残余電力量を再計算。次時限へ向けSOCを高速回復させます。',
    tag: 'SOC急速回復'
  },
  {
    id: 'p5',
    timeRange: '29:45 〜 30:00',
    name: '境界ガード＆次時限準備',
    chargeStatus: '停止',
    dischargeStatus: '継続可',
    summary: 'NTP/GPS時刻差や通信遅延による次時限への充電食い込みを防止するため充電遮断。',
    detail: '時限終了15秒前に充電出力を安全にゼロ復帰。30:00ジャストで積算状態を切り替え、次のサイクルへ滑らかに引き継ぎます。',
    tag: '時限境界保護'
  }
];

export const ControlTimeline: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('p2');
  const active = PHASES.find((p) => p.id === selectedPhase) || PHASES[1];

  return (
    <div className="bg-graphite-card border border-graphite-border p-6 sm:p-8 text-paper-light">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-graphite-border">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-signal-lime">
            30-Minute Demand Schedule
          </span>
          <h3 className="text-xl font-bold text-paper-light mt-1">
            電力会社デマンド時限と完全に同期する「5段階制御シーケンス」
          </h3>
        </div>
        <Badge variant="lime">特許出願中コア技術</Badge>
      </div>

      {/* Progress Bar Timeline */}
      <div className="pt-8 pb-4">
        <div className="grid grid-cols-5 gap-1 text-center font-mono text-[11px] mb-2">
          {PHASES.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`p-2 transition-all border text-left flex flex-col justify-between h-20 ${
                selectedPhase === phase.id
                  ? 'bg-signal-lime text-graphite-deep font-bold border-signal-lime'
                  : 'bg-graphite-deep text-slate-300 border-graphite-border hover:border-slate-500'
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] opacity-80">{phase.timeRange}</span>
              </div>
              <span className="text-xs leading-tight line-clamp-2">{phase.name}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-500 px-1">
          <span>0:00 (時限開始)</span>
          <span>15分</span>
          <span>30:00 (時限完了)</span>
        </div>
      </div>

      {/* Selected Phase Detail Card */}
      <div className="mt-6 bg-graphite-deep border border-graphite-border p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-signal-lime font-bold">[{active.timeRange}]</span>
            <h4 className="text-lg font-bold text-paper-light">{active.name}</h4>
            <Badge variant="graphite" size="sm">{active.tag}</Badge>
          </div>
          <p className="text-sm text-slate-200 font-medium leading-relaxed">
            {active.summary}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            {active.detail}
          </p>
        </div>

        {/* Charge/Discharge Rules Status */}
        <div className="border-t md:border-t-0 md:border-l border-graphite-border pt-4 md:pt-0 md:pl-6 space-y-3">
          <span className="font-mono text-xs text-slate-400 block uppercase tracking-wider">
            インターロック制御条件
          </span>
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center p-2 bg-graphite-card border border-graphite-border">
              <span className="text-slate-400">充電制御:</span>
              <span className={`font-bold ${active.chargeStatus === '禁止' ? 'text-red-400' : 'text-signal-lime'}`}>
                {active.chargeStatus}
              </span>
            </div>
            <div className="flex justify-between items-center p-2 bg-graphite-card border border-graphite-border">
              <span className="text-slate-400">放電制御:</span>
              <span className={`font-bold ${active.dischargeStatus === '停止' ? 'text-slate-400' : 'text-emerald-400'}`}>
                {active.dischargeStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
