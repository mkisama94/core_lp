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
          subtitle="受電キュービクル、デマンド監視装置、蓄電池PCS、空調機器。各メーカーの標準設備と連携し、異常時の設備保護と、判断根拠を追跡できる記録で日々の運用を支えます。"
          theme="dark"
        />

        {/* System Architecture Diagram */}
        <ArchitectureDiagram />

        {/* Operational Safety & Auditability */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs">
          <div className="bg-graphite-card border border-graphite-border p-6 space-y-3">
            <div className="w-8 h-8 bg-signal-lime/10 border border-signal-lime/30 flex items-center justify-center text-signal-lime font-mono font-bold">
              01
            </div>
            <h4 className="text-base font-bold text-paper-light">
              異常時も、設備への影響を抑える
            </h4>
            <p className="text-slate-300 leading-relaxed">
              通信や計測に異常が生じた際は、設備の保護を優先して充放電を調整・停止。現場への影響を抑え、状況を確認して対応できる安全な運用を支えます。
            </p>
          </div>

          <div className="bg-graphite-card border border-graphite-border p-6 space-y-3">
            <div className="w-8 h-8 bg-signal-lime/10 border border-signal-lime/30 flex items-center justify-center text-signal-lime font-mono font-bold">
              02
            </div>
            <h4 className="text-base font-bold text-paper-light">
              判断の根拠をたどれる、システム監査へ
            </h4>
            <p className="text-slate-300 leading-relaxed">
              「いつ、何を根拠に、どの制御を行ったか」を記録し、システム監査時の事実確認や障害発生時の原因調査に活用。停電や回線断に備えて記録を装置内にも保持し、運用の妥当性を説明するための証跡を残します。
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
