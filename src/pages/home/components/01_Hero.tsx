import React from 'react';
import { ArrowRight, Cpu, ShieldCheck, Activity, ChevronDown } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { Badge } from '../../../components/common/Badge';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-graphite pt-32 pb-20 md:pt-40 md:pb-28 border-b border-graphite-border overflow-hidden bg-tech-grid">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-signal-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Copy & Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="md">
                POWER MANAGEMENT PRODUCT
              </Badge>
              <span className="font-mono text-xs text-slate-400">
                CORE SERIES / 施設・産業向け提供中
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-sans text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-paper-light leading-[1.15]">
                電力の、その先を読む。
              </h1>
              <p className="font-mono text-lg sm:text-xl lg:text-2xl text-signal-lime font-semibold tracking-wide">
                予測と制御をつなぐ、電力運用のコア。
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              電力需要と設備の状態をリアルタイムに捉え、産業用蓄電池の充放電を自律判断。
              30分デマンド時限のピーク超過を防ぎ、工場・施設の電力運用を安全に最適化します。
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                to="/contact?type=intro"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                導入を相談する
              </Button>
              <Button
                to="/#control"
                variant="outline-light"
                size="lg"
                icon={<ChevronDown className="w-4 h-4" />}
              >
                予測充放電を知る
              </Button>
            </div>

            {/* Status & Trust Indicators */}
            <div className="pt-6 border-t border-graphite-border grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-signal-lime shrink-0" />
                <span>単一ライター安全保護</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-signal-lime shrink-0" />
                <span>30分時限同期制御</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Cpu className="w-4 h-4 text-signal-lime shrink-0" />
                <span>実機実証済みアルゴリズム</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Schema & Power Flow Diagram (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-graphite-card border border-graphite-border p-6 shadow-2xl relative">
              {/* Header inside schematic */}
              <div className="flex items-center justify-between border-b border-graphite-border pb-3 mb-5 font-mono text-xs">
                <span className="text-slate-400">CORE OPERATION SCHEMATIC</span>
                <span className="text-signal-lime flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-signal-lime animate-pulse" />
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Schematic Nodes */}
              <div className="space-y-4 font-mono text-xs">
                {/* Node 1: Grid & Demand */}
                <div className="p-3 bg-graphite-deep border border-graphite-border flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-slate-400" />
                    <div>
                      <span className="text-paper-light font-bold block">電力会社受電 / デマコン</span>
                      <span className="text-[10px] text-slate-400">30分時限パルス・受電CT</span>
                    </div>
                  </div>
                  <span className="text-slate-300 font-mono">332 kW</span>
                </div>

                <div className="flex justify-center text-slate-600">
                  <span>↓ 需要先読み・反実仮想判定</span>
                </div>

                {/* Node 2: SPAQ CORE (Central Hub) */}
                <div className="p-4 bg-graphite-light border-2 border-signal-lime text-center space-y-1 relative">
                  <div className="inline-block px-2 py-0.5 bg-signal-lime text-graphite-deep font-bold text-[10px] tracking-wider uppercase mb-1">
                    SPAQ CORE CONTROLLER
                  </div>
                  <div className="font-bold text-sm text-paper-light">
                    30分時限 充放電判定エンジン
                  </div>
                  <div className="text-[10px] text-signal-lime font-mono">
                    設備制約・需要予測を統合し、先行放電を判断
                  </div>
                </div>

                <div className="flex justify-center text-slate-600">
                  <span>↓ 単一ライターModbus高速指令</span>
                </div>

                {/* Node 3: Battery & PCS */}
                <div className="p-3 bg-graphite-deep border border-graphite-border flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-signal-lime" />
                    <div>
                      <span className="text-paper-light font-bold block">産業用蓄電池 PCS / BMU</span>
                      <span className="text-[10px] text-slate-400">自律過充放電保護・非常時インターロック</span>
                    </div>
                  </div>
                  <span className="text-signal-lime font-bold font-mono">必要出力を自律調整</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-graphite-border flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>※説明用模式図</span>
                <span>リアルタイム協調制御</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
