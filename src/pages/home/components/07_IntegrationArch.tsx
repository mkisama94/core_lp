import React from 'react';
import { ArrowRight, ShieldCheck, RefreshCw, Cpu, Server, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { ArchitectureDiagram } from '../../../components/interactive/ArchitectureDiagram';
import { Button } from '../../../components/common/Button';

export const IntegrationArch: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-graphite border-b border-graphite-border bg-tech-grid text-paper-light">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          tag="INTEGRATION & RELIABILITY"
          title="設備とつながる。運用を支える。"
          subtitle="受電キュービクル、デマンド監視装置、蓄電池PCS、空調機器。各メーカーの標準設備と連携し、単一ライター責任分界とフェールセーフ安全停止で工場設備の稼働を守ります。"
          theme="dark"
        />

        {/* System Architecture Diagram */}
        <ArchitectureDiagram />

        {/* 3 Pillars of Industrial Safety */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
          <div className="bg-graphite-card border border-graphite-border p-6 space-y-3">
            <div className="w-8 h-8 bg-signal-lime/10 border border-signal-lime/30 flex items-center justify-center text-signal-lime font-mono font-bold">
              01
            </div>
            <h4 className="text-base font-bold text-paper-light">
              単一ライター保護 (COM-02)
            </h4>
            <p className="text-slate-300 leading-relaxed">
              PCS制御レジスタへの書込み主体をSPAQ COREに限定。複数装置からの競合書込みや予期せぬ上書きを排除し、制御の矛盾を物理的に防止します。
            </p>
          </div>

          <div className="bg-graphite-card border border-graphite-border p-6 space-y-3">
            <div className="w-8 h-8 bg-signal-lime/10 border border-signal-lime/30 flex items-center justify-center text-signal-lime font-mono font-bold">
              02
            </div>
            <h4 className="text-base font-bold text-paper-light">
              安全待機フェールセーフ (COM-05)
            </h4>
            <p className="text-slate-300 leading-relaxed">
              上位通信の途絶、ハートビート異常、計測値の欠損を検知した場合、ミリ秒単位で「充電禁止・自律安全待機」へ移行。ライン停止事故を未然に防ぎます。
            </p>
          </div>

          <div className="bg-graphite-card border border-graphite-border p-6 space-y-3">
            <div className="w-8 h-8 bg-signal-lime/10 border border-signal-lime/30 flex items-center justify-center text-signal-lime font-mono font-bold">
              03
            </div>
            <h4 className="text-base font-bold text-paper-light">
              13ヶ月ローカル証跡保持 (COM-16)
            </h4>
            <p className="text-slate-300 leading-relaxed">
              停電や回線断が発生しても、すべての制御判断・理由コードを装置内不揮発ストレージに最低13ヶ月保存。事後検証と説明責任を確実に担保します。
            </p>
          </div>
        </div>

        {/* Link to Technology Page */}
        <div className="mt-10 flex justify-center">
          <Button
            to="/technology"
            variant="outline-light"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            30分時限制御・安全要求仕様の詳細を見る
          </Button>
        </div>

      </div>
    </section>
  );
};
