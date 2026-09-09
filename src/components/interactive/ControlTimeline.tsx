import React, { useState } from 'react';
import { Clock, ShieldCheck, Zap, Battery, Wind, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';

export interface TimelinePhase {
  id: string;
  timeRange: string;
  phaseNum: string;
  name: string;
  catchphrase: string;
  batteryAction: string;
  acProtection: string; // 空調保護ステータス
  summary: string;
  detail: string;
  tag: string;
}

const PHASES: TimelinePhase[] = [
  {
    id: 'p1',
    timeRange: '時限切替',
    phaseNum: 'PHASE 01',
    name: '切り替わりも制御を継続',
    catchphrase: '30分の区切りでも、必要な放電を引き継ぐ',
    batteryAction: '切り替わり後の需要を確認し、必要な放電を継続',
    acProtection: '不要な空調停止を抑制',
    summary: '電力を管理する30分の区切りに合わせて、需要と蓄電池の状態を確認。ピークを抑えるために必要な制御を引き継ぎます。',
    detail: '区切りの前後で判断が途切れないように、計測データと制御状態を同期。需要の上昇や不要な空調停止を抑えます。',
    tag: '継続したピーク対策'
  },
  {
    id: 'p2',
    timeRange: '需要上昇の兆候',
    phaseNum: 'PHASE 02',
    name: '需要の増加に先回り',
    catchphrase: '空調を止める前に、蓄電池で対応する',
    batteryAction: '需要の上昇に合わせて必要な電力を供給',
    acProtection: '蓄電池で対応できる間は空調停止を抑制',
    summary: '需要が増える兆候を捉え、蓄電池の放電を準備。空調停止による作業環境への影響を減らします。',
    detail: 'デマンド監視装置と連携し、蓄電池の応答に合わせて空調への制御を調整。設備の状態を見ながら、ピーク超過への対応を進めます。',
    tag: '作業環境への配慮'
  },
  {
    id: 'p3',
    timeRange: '通常運用',
    phaseNum: 'PHASE 03',
    name: '蓄電池を優先して活用',
    catchphrase: '蓄電池と設備を組み合わせ、空調停止を抑える',
    batteryAction: '需要と残量に応じて放電・待機を選択',
    acProtection: '蓄電池で補えない分を段階的に調整',
    summary: 'まず蓄電池で需要を補い、それだけでは不足する場合に設備の使用電力を段階的に調整します。',
    detail: '蓄電池の残量・出力と、現場設備の運用条件を考慮して制御を選択。作業環境に配慮しながらピークを抑えます。',
    tag: '現場に合わせた調整'
  },
  {
    id: 'p4',
    timeRange: '余力の活用',
    phaseNum: 'PHASE 04',
    name: '余裕を次の備えに',
    catchphrase: '電力に余裕がある間に、次のピークへ備える',
    batteryAction: '電力目標に余裕がある範囲で充電',
    acProtection: '設備の使用電力を考慮して充電量を調整',
    summary: '残り時間と需要予測から充電できる余裕を確認。蓄電池の残量を回復させ、次の需要増加に備えます。',
    detail: '充電によって受電電力が増える分も考慮して出力を調整。需要が再び増えた場合は充電を抑え、必要に応じて放電へ切り替えます。',
    tag: '蓄電池の余力を回復'
  },
  {
    id: 'p5',
    timeRange: '次時限への移行',
    phaseNum: 'PHASE 05',
    name: '次の30分へ引き継ぐ',
    catchphrase: '充電の影響を抑えながら、次の運用へつなぐ',
    batteryAction: '次時限への影響を考慮して充電を調整。必要な放電は安全に引き継ぎ',
    acProtection: '空調の運転状況も次の区間へ引き継ぎ',
    summary: '次の30分に充電の影響を持ち越しすぎないよう出力を調整。必要な放電と設備の制御状態を引き継ぎます。',
    detail: '時刻差や通信遅延も考慮しながら切り替えを管理。時間の区切りをまたいでも、現場の状態に応じたピーク対策を続けます。',
    tag: '次の区間への備え'
  }
];

export const ControlTimeline: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('p2');
  const active = PHASES.find((p) => p.id === selectedPhase) || PHASES[1];

  return (
    <div className="bg-graphite-card border border-graphite-border p-6 sm:p-8 text-paper-light">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-graphite-border">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-signal-lime font-bold">
            SMART DEMAND COORDINATION SEQUENCE
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-paper-light mt-1">
            空調停止を抑えながら、需要の変化に対応する
          </h3>
        </div>
        <Badge variant="lime">特許出願中コア技術</Badge>
      </div>

      {/* Conceptual control phases; widths do not represent durations. */}
      <div className="pt-8 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1.5 text-center font-mono text-[11px] mb-2">
          {PHASES.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`p-2 sm:p-3 transition-all border text-left flex flex-col justify-between h-24 ${
                selectedPhase === phase.id
                  ? 'bg-spaq-cyan text-graphite-deep font-bold border-spaq-cyan shadow-md'
                  : 'bg-graphite-deep text-slate-300 border-graphite-border hover:border-slate-500'
              }`}
            >
              <div className="flex flex-wrap justify-between items-center gap-1 w-full">
                <span className="text-[10px] opacity-90">{phase.timeRange}</span>
                <span className="text-[9px] font-bold">{phase.phaseNum}</span>
              </div>
              <span className="text-xs sm:text-sm font-bold leading-tight line-clamp-2">{phase.name}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-500 px-1">
          <span>時限開始</span>
          <span>需要変動に応じた協調制御</span>
          <span>次の30分時限へ</span>
        </div>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed">制御の役割を示す概念図です。切替条件や動作時間は、設備特性と運用要件に応じて設計します。</p>

      {/* Selected Phase Detail Card */}
      <div className="mt-6 bg-graphite-deep border border-graphite-border p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-signal-lime font-bold">[{active.timeRange}]</span>
            <h4 className="text-lg sm:text-xl font-bold text-paper-light">{active.name}</h4>
            <Badge variant="graphite" size="sm">{active.tag}</Badge>
          </div>

          <p className="font-mono text-xs sm:text-sm text-spaq-cyan font-semibold">
            {active.catchphrase}
          </p>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans pt-1">
            {active.summary}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            {active.detail}
          </p>
        </div>

        {/* Coordination Indicators (Sales-Oriented) */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-graphite-border pt-4 lg:pt-0 lg:pl-6 space-y-3 flex flex-col justify-center">
          <span className="font-mono text-[11px] text-slate-400 block uppercase tracking-wider">
            リアルタイム協調ステータス
          </span>

          <div className="p-3 bg-graphite-card border border-graphite-border space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-signal-lime uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>蓄電池の動き</span>
            </div>
            <span className="text-xs font-bold text-paper-light block font-sans">
              {active.batteryAction}
            </span>
          </div>

          <div className="p-3 bg-graphite-card border border-graphite-border space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase">
              <Wind className="w-3.5 h-3.5" />
              <span>現場空調の保護</span>
            </div>
            <span className="text-xs font-bold text-emerald-300 block font-sans">
              {active.acProtection}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
