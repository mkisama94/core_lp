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
          subtitle="需要が増える前に放電を準備し、電力に余裕があるときに充電。施設の目標と蓄電池の残量に合わせて、ピークを抑えながら次の需要増加に備えます。"
          theme="dark"
        />

        {/* Interactive Simulator Component */}
        <PowerFlowSimulator />

        {/* Technical Principles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
          <div className="bg-graphite-card border border-graphite-border p-5 space-y-2">
            <span className="font-mono text-signal-lime font-bold text-xs uppercase block">
              01 / 空調停止を抑える
            </span>
            <h4 className="text-sm font-bold text-paper-light">
              空調を止める前に、蓄電池で対応
            </h4>
            <p className="text-slate-400 leading-relaxed">
              需要が増える兆候を捉え、まず蓄電池の放電で対応。デマンド監視装置と連携して不要な空調停止を抑え、作業環境への影響を減らします。
            </p>
          </div>

          <div className="bg-graphite-card border border-graphite-border p-5 space-y-2">
            <span className="font-mono text-signal-lime font-bold text-xs uppercase block">
              02 / 必要な放電を続ける
            </span>
            <h4 className="text-sm font-bold text-paper-light">
              電力の実際の使われ方に合わせて判断
            </h4>
            <p className="text-slate-400 leading-relaxed">
              蓄電池が補っている電力も含めて、施設全体の需要を把握。受電電力が下がっただけで放電を止めず、ピーク抑制に必要な対応を続けます。
            </p>
          </div>

          <div className="bg-graphite-card border border-graphite-border p-5 space-y-2">
            <span className="font-mono text-signal-lime font-bold text-xs uppercase block">
              03 / 次のピークに備える
            </span>
            <h4 className="text-sm font-bold text-paper-light">
              電力の余裕を、蓄電池の備えに
            </h4>
            <p className="text-slate-400 leading-relaxed">
              需要の見通しから、施設の電力目標に余裕がある範囲で充電。次の需要増加に使える電力を蓄え、蓄電池を継続的に活用します。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
