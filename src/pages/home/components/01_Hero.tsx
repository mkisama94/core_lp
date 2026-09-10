import React from 'react';
import { ArrowRight, Cpu, ShieldCheck, Activity, ChevronDown } from 'lucide-react';
import { Button } from '../../../components/common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-graphite pt-32 pb-20 md:pt-40 md:pb-28 border-b border-graphite-border overflow-hidden bg-tech-grid">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-signal-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Copy & Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-base sm:text-xl font-semibold tracking-wide text-signal-lime">
              AI時代の電力インテリジェンス
            </p>

            <div className="space-y-3">
              <h1 className="font-sans text-[26px] sm:text-[44px] lg:text-[48px] font-black tracking-tight text-paper-light leading-[1.25]">
                <span className="block">産業用電力</span>
                <span className="block">マネジメントシステム</span>
              </h1>
              <p className="font-mono text-lg sm:text-xl lg:text-2xl text-signal-lime font-semibold tracking-wide">
                SPAQ CORE
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              電力を予測し、設備を賢く動かす。<br />
              産業のエネルギー利用を、ソフトウェアで最適化する。
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
                <span>異常時の設備保護</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-signal-lime shrink-0" />
                <span>需要の変化に合わせた制御</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Cpu className="w-4 h-4 text-signal-lime shrink-0" />
                <span>製造現場での実証</span>
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
                      <span className="text-paper-light font-bold block">受電・需要の監視</span>
                      <span className="text-[10px] text-slate-400">電力使用状況と需要の変化</span>
                    </div>
                  </div>
                  <span className="text-slate-300 font-mono">受電状況を監視</span>
                </div>

                <div className="flex justify-center text-slate-600">
                  <span>↓ 需要の見通しと設備の状態を確認</span>
                </div>

                {/* Node 2: SPAQ CORE (Central Hub) */}
                <div className="p-4 bg-graphite-light border-2 border-signal-lime text-center space-y-1 relative">
                  <div className="inline-block px-2 py-0.5 bg-signal-lime text-graphite-deep font-bold text-[10px] tracking-wider uppercase mb-1">
                    SPAQ CORE CONTROLLER
                  </div>
                  <div className="font-bold text-sm text-paper-light">
                    需要に合わせて、充放電を判断
                  </div>
                  <div className="text-[10px] text-signal-lime font-mono">
                    設備制約・需要予測を統合し、先行放電を判断
                  </div>
                </div>

                <div className="flex justify-center text-slate-600">
                  <span>↓ 設備の状態に応じた充放電指令</span>
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
