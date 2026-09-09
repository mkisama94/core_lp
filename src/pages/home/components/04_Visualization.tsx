import React, { useState } from 'react';
import { LayoutDashboard, CheckCircle, AlertCircle, Eye, Search, FileText } from 'lucide-react';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { Badge } from '../../../components/common/Badge';

export const Visualization: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monitor' | 'audit'>('monitor');

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-paper-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          tag="OPERATIONAL VISUALIZATION"
          title="制御の状態を、運用の判断へ。"
          subtitle="リアルタイムの受電電力・充放電状況から、制御が下された瞬間の「判断根拠（理由コード）」まで。ブラックボックスになりがちな産業制御のすべての判断を可視化・監査可能にします。"
          theme="light"
        />

        {/* Tab Selector */}
        <div className="flex items-center gap-2 mb-6 border-b border-paper-border pb-3">
          <button
            onClick={() => setActiveTab('monitor')}
            className={`px-4 py-2 font-mono text-xs tracking-wider transition-colors ${
              activeTab === 'monitor'
                ? 'bg-ink text-paper-light font-bold'
                : 'bg-paper-light text-ink-muted hover:text-ink border border-paper-border'
            }`}
          >
            01 / リアルタイム監視画面
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-4 py-2 font-mono text-xs tracking-wider transition-colors ${
              activeTab === 'audit'
                ? 'bg-ink text-paper-light font-bold'
                : 'bg-paper-light text-ink-muted hover:text-ink border border-paper-border'
            }`}
          >
            02 / 制御理由・監査ログ（Reason Code）
          </button>
        </div>

        {/* Screen Mockup Container */}
        <div className="bg-graphite-deep border-2 border-graphite-light p-4 sm:p-6 shadow-xl text-paper-light">
          {/* Header bar of UI mockup */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-graphite-border pb-4 mb-6 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-bold text-paper-light tracking-wider">
                SPAQ CORE EDGE TELEMETRY CONSOLE
              </span>
              <Badge variant="graphite" size="sm">DEMONSTRATION</Badge>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-[11px]">
              <span>時刻同期: 正常</span>
              <span>設備通信: 正常</span>
              <span className="text-signal-lime">● ONLINE</span>
            </div>
          </div>

          {activeTab === 'monitor' ? (
            /* Monitor View */
            <div className="space-y-6">
              {/* Telemetry Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
                <div className="bg-graphite-card border border-graphite-border p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 block">契約デマンド / 安全目標</span>
                  <div className="text-xl sm:text-2xl font-bold text-amber-300">
                    設備別設計
                  </div>
                  <span className="text-[10px] text-slate-400 block">計測特性・安全余裕を考慮</span>
                </div>

                <div className="bg-graphite-card border border-graphite-border p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 block">実効受電電力</span>
                  <div className="text-xl sm:text-2xl font-bold text-signal-lime">
                    目標範囲内
                  </div>
                  <span className="text-[10px] text-emerald-400 block">▲ 目標内維持（安全）</span>
                </div>

                <div className="bg-graphite-card border border-graphite-border p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 block">蓄電池 PCS出力</span>
                  <div className="text-xl sm:text-2xl font-bold text-paper-light">
                    放電制御中
                  </div>
                  <span className="text-[10px] text-signal-lime block">設備能力に応じて出力を調整</span>
                </div>

                <div className="bg-graphite-card border border-graphite-border p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 block">蓄電池 残容量 (SOC)</span>
                  <div className="text-xl sm:text-2xl font-bold text-paper-light">
                    余力を確保
                  </div>
                  <span className="text-[10px] text-slate-400 block">蓄電池の状態を継続監視</span>
                </div>
              </div>

              {/* Status Graphic Breakdown */}
              <div className="bg-graphite-card border border-graphite-border p-5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
                <div className="space-y-2">
                  <span className="text-slate-400 block">時限フェーズ</span>
                  <span className="text-sm font-bold text-signal-lime block">
                    通常協調フェーズ
                  </span>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    需要の上昇傾向と蓄電池余力を評価し、安全目標に沿って必要な放電を自律判断。
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-slate-400 block">反実仮想推定（放電前需要）</span>
                  <span className="text-sm font-bold text-red-400 block">
                    需要上昇を検知
                  </span>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    蓄電池による需要補完分を加味し、制御がなかった場合の負荷と判断根拠を記録。
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-slate-400 block">制御主体</span>
                  <span className="text-sm font-bold text-paper-light block">
                    SPAQ CORE (Single Writer)
                  </span>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    制御指令の権限を一元化し、他機器との競合を防止。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Audit Log View */
            <div className="space-y-3 font-mono text-xs overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-graphite-border text-slate-400 text-[11px]">
                    <th className="py-2 px-3">EVENT SEQUENCE</th>
                    <th className="py-2 px-3">DECISION CATEGORY</th>
                    <th className="py-2 px-3">REASON DESCRIPTION</th>
                    <th className="py-2 px-3">COMMAND</th>
                    <th className="py-2 px-3">WRITER</th>
                    <th className="py-2 px-3">INTEGRITY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-border/50 text-[11px]">
                  <tr>
                    <td className="py-2.5 px-3 text-slate-300">需要変化時</td>
                    <td className="py-2.5 px-3 text-signal-lime">先行放電</td>
                    <td className="py-2.5 px-3 text-slate-200">需要上昇の兆候に基づく先回り放電</td>
                    <td className="py-2.5 px-3 text-emerald-400">放電指令</td>
                    <td className="py-2.5 px-3 text-slate-400">SPAQ_CORE</td>
                    <td className="py-2.5 px-3 text-emerald-400">VERIFIED</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-slate-300">観測更新時</td>
                    <td className="py-2.5 px-3 text-slate-400">基準需要の観測</td>
                    <td className="py-2.5 px-3 text-slate-200">基準となる需要と設備状態を取得</td>
                    <td className="py-2.5 px-3 text-slate-400">監視・待機</td>
                    <td className="py-2.5 px-3 text-slate-400">SPAQ_CORE</td>
                    <td className="py-2.5 px-3 text-emerald-400">VERIFIED</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-slate-300">時限切替前</td>
                    <td className="py-2.5 px-3 text-amber-300">境界保護</td>
                    <td className="py-2.5 px-3 text-slate-200">次時限への影響を評価し充電を停止</td>
                    <td className="py-2.5 px-3 text-slate-400">充電停止</td>
                    <td className="py-2.5 px-3 text-slate-400">SPAQ_CORE</td>
                    <td className="py-2.5 px-3 text-emerald-400">VERIFIED</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-slate-300">余力検出時</td>
                    <td className="py-2.5 px-3 text-sky-400">余力充電</td>
                    <td className="py-2.5 px-3 text-slate-200">時限残余電力量再計算に基づくラストスパート急速充電</td>
                    <td className="py-2.5 px-3 text-sky-400">充電指令</td>
                    <td className="py-2.5 px-3 text-slate-400">SPAQ_CORE</td>
                    <td className="py-2.5 px-3 text-emerald-400">VERIFIED</td>
                  </tr>
                </tbody>
              </table>

              <div className="pt-2 text-[10px] text-slate-500 font-mono">
                ※すべての制御イベントは長期にわたり、装置内不揮発メモリおよびクラウド監査基盤に二重保持されます。
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-graphite-border flex flex-wrap gap-2 items-center justify-between text-[11px] font-mono text-slate-500">
            <span>概念画面：判断の流れと記録項目を表示</span>
            <span>ログ出力形式: JSON / CSV対応</span>
          </div>
        </div>

      </div>
    </section>
  );
};
