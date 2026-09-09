import React from 'react';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { PowerFlowSimulator } from '../../../components/interactive/PowerFlowSimulator';

export const PredictiveControl: React.FC = () => {
  return (
    <section id="control" className="py-20 md:py-28 bg-graphite border-b border-graphite-border bg-tech-grid">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          tag="PREDICTIVE DISCHARGE & CHARGE"
          title="放電する瞬間も、充電する余裕も。"
          subtitle="電力需要の見通し、目標デマンド、蓄電池の残容量（SOC）を常時演算。警報が出る前の先回り放電と、安全余裕を活かした充電により、次時限へ向けた余力を常に最適化します。"
          theme="dark"
        />

        {/* Interactive Simulator Component */}
        <PowerFlowSimulator />

        {/* Technical Principles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
          <div className="bg-graphite-card border border-graphite-border p-5 space-y-2">
            <span className="font-mono text-signal-lime font-bold text-xs uppercase block">
              01 / スマート先行ディフェンス
            </span>
            <h4 className="text-sm font-bold text-paper-light">
              空調を止めずに、蓄電池が先回り防衛
            </h4>
            <p className="text-slate-400 leading-relaxed">
              従来の「警報が出たらエアコンが止まる」運用から脱却。デマコンと協調し、蓄電池が立ち上がるまで現場の空調停止を一時ブロック。快適性を維持したままデマンドを守ります。
            </p>
          </div>

          <div className="bg-graphite-card border border-graphite-border p-5 space-y-2">
            <span className="font-mono text-signal-lime font-bold text-xs uppercase block">
              02 / 反実仮想判定（需要復元）
            </span>
            <h4 className="text-sm font-bold text-paper-light">
              放電による「見かけの低下」に惑わされない
            </h4>
            <p className="text-slate-400 leading-relaxed">
              蓄電池が放電すると受電電力が下がり、制御が自動解除されて再上昇する「ハンチング」を防ぐため、EMS実放電量を足し戻して真の工場需要を復元・判定します。
            </p>
          </div>

          <div className="bg-graphite-card border border-graphite-border p-5 space-y-2">
            <span className="font-mono text-signal-lime font-bold text-xs uppercase block">
              03 / ラストスパート充電
            </span>
            <h4 className="text-sm font-bold text-paper-light">
              30分平均の計算特性を活かした高速回収
            </h4>
            <p className="text-slate-400 leading-relaxed">
              時限の残り時間と需要予測から、契約電力枠内で利用可能な充電余力を評価。設備の応答性と次時限への影響を考慮し、蓄電池の余力を回復します。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
