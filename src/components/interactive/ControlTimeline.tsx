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
    timeRange: '0:00 〜 0:15',
    phaseNum: 'PHASE 01',
    name: 'シームレス境界同期',
    catchphrase: '時限跨ぎでも制御を切らさない「ゼロギャップ引き継ぎ」',
    batteryAction: '新時限の受電を瞬時計測。必要な放電は途切れず継続',
    acProtection: '空調停止をブロック（通常運転維持）',
    summary: '電力会社の30分時限が切り替わった瞬間でも、前時限からのデマンド防衛をリセットせずシームレスに継続。',
    detail: '受電電力・需要予測・蓄電池残量をわずか15秒で同期。切り替え時のタイムラグによる突発超過や空調の無駄な停止を未然に遮断します。',
    tag: '時限完全同期'
  },
  {
    id: 'p2',
    timeRange: '0:15 〜 3:00',
    phaseNum: 'PHASE 02',
    name: 'スマート先行ディフェンス',
    catchphrase: '蓄電池が立ち上がるまで「空調停止を抑止」',
    batteryAction: '無駄な放電はゼロ。真に必要な量だけ高速レスポンス',
    acProtection: '蓄電池が守るため「空調停止を一時抑止」',
    summary: '従来の「とりあえず放電する」無駄を廃止。蓄電池がデマンドを受け止める間、現場の空調停止を抑止します。',
    detail: '大型機器の同時起動による需要急変を感知した時だけ、蓄電池がミリ秒単位で先回り放電。蓄電池の立ち上がりを待つ間は空調全止めをブロックし、作業環境を守ります。',
    tag: '現場快適性保護'
  },
  {
    id: 'p3',
    timeRange: '3:00 〜 27:00',
    phaseNum: 'PHASE 03',
    name: 'バッテリーファースト多段協調',
    catchphrase: '蓄電池を限界まで使い切り、空調停止を最小限に',
    batteryAction: '需要急増時は最前線で放電、余裕時は自動スタンバイ',
    acProtection: '「両方抑止 → 段階制御 → 全止め」の多段防壁',
    summary: 'いきなり空調を止めない。まず蓄電池が全力を出し、どうしても不足する場合のみ空調を段階的にアシストさせます。',
    detail: 'デマコンと直結した独自抑止レジスタにより「蓄電池単独対応 → 60%空調抑制 → 最後の手段として全止め」の多段階ガードを自律実行。現場の生産性とデマンド抑制を極限まで両立します。',
    tag: '多段階スマート防壁'
  },
  {
    id: 'p4',
    timeRange: '27:00 〜 29:45',
    phaseNum: 'PHASE 04',
    name: '残余枠スマート急速チャージ',
    catchphrase: '契約枠の「余り時間」を見極め、次時限へ安全フル充填',
    batteryAction: '契約電力を超えない安全余力枠でSOCを高速回復',
    acProtection: '空調判断を遅らせないリアルタイム残余評価',
    summary: '時限終了直前の安全な電力量余力をAIが即座に算出し、蓄電池へ充電して次時限のピークへ即座に備えます。',
    detail: '残り時間で使用可能な電力量を厳密に逆算。需要が再上昇した場合は瞬時に充電を停止・放電へ転換するため、契約電力超過のリスクはゼロです。',
    tag: 'SOC高速回復'
  },
  {
    id: 'p5',
    timeRange: '29:45 〜 30:00',
    phaseNum: 'PHASE 05',
    name: '境界フェイルセーフガード',
    catchphrase: '1秒の超過も許さない「ノーインパクト・バトンタッチ」',
    batteryAction: '時限15秒前に充電完全停止。放電は次時限へ安全引き継ぎ',
    acProtection: '抑止状態を維持したまま次の30分へ接続',
    summary: '時刻差や通信遅延による「時限を跨いだ充電超過」を物理的に遮断し、次の30分サイクルへ完全接続します。',
    detail: '充電出力を0kWへ確実に収束させつつ、デマンド保護に必要な放電と協調状態はそのまま次時限の冒頭へ引き継ぎ、24時間365日の連続自動防衛を実現します。',
    tag: '完全境界ガード'
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
            空調を急に止めない。電力会社デマンド時限と連動する「5段階スマート協調」
          </h3>
        </div>
        <Badge variant="lime">特許出願中コア技術</Badge>
      </div>

      {/* Progress Bar Timeline */}
      <div className="pt-8 pb-4">
        <div className="grid grid-cols-5 gap-1.5 text-center font-mono text-[11px] mb-2">
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
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] opacity-90">{phase.timeRange}</span>
                <span className="text-[9px] font-bold">{phase.phaseNum}</span>
              </div>
              <span className="text-xs sm:text-sm font-bold leading-tight line-clamp-2">{phase.name}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-500 px-1">
          <span>0:00 (時限開始)</span>
          <span>15分 (中間)</span>
          <span>30:00 (時限完了)</span>
        </div>
      </div>

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
              <span>蓄電池アクション</span>
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
