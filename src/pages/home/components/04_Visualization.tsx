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
              <Badge variant="graphite" size="sm">NODE-01 / JST</Badge>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-[11px]">
              <span>NTP同期: ±3ms</span>
              <span>Modbus通信: 正常 (1280ms)</span>
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
                    360 <span className="text-xs font-normal text-slate-400">/ 399 kW</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">補正率 5% ｜ 余裕 20kW</span>
                </div>

                <div className="bg-graphite-card border border-graphite-border p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 block">実効受電電力 (R004)</span>
                  <div className="text-xl sm:text-2xl font-bold text-signal-lime">
                    348.2 <span className="text-xs font-normal text-slate-400">kW</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 block">▲ 目標内維持（安全）</span>
                </div>

                <div className="bg-graphite-card border border-graphite-border p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 block">蓄電池 PCS出力</span>
                  <div className="text-xl sm:text-2xl font-bold text-paper-light">
                    +48.0 <span className="text-xs font-normal text-slate-400">kW (放電)</span>
                  </div>
                  <span className="text-[10px] text-signal-lime block">最大能力 50kW (96%)</span>
                </div>

                <div className="bg-graphite-card border border-graphite-border p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 block">蓄電池 残容量 (SOC)</span>
                  <div className="text-xl sm:text-2xl font-bold text-paper-light">
                    78.4 <span className="text-xs font-normal text-slate-400">%</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">セル温度 26.8℃ 正常</span>
                </div>
              </div>

              {/* Status Graphic Breakdown */}
              <div className="bg-graphite-card border border-graphite-border p-5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
                <div className="space-y-2">
                  <span className="text-slate-400 block">時限フェーズ</span>
                  <span className="text-sm font-bold text-signal-lime block">
                    Phase 03: 通常自動制御 (14:32 / 30:00)
                  </span>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    生需要の上昇トレンドを検知し、安全目標（360kW）を守るため48kWの連続放電を自律継続中。
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-slate-400 block">反実仮想推定（放電前需要）</span>
                  <span className="text-sm font-bold text-red-400 block">
                    396.2 kW (推定生需要)
                  </span>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    放電がなかった場合は契約電力（399kW）間近まで迫っていたことをリアルタイムに逆算して記録。
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-slate-400 block">制御主体 (COM-01)</span>
                  <span className="text-sm font-bold text-paper-light block">
                    SPAQ CORE (Single Writer)
                  </span>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    排他レジスタ制御権限を単独保持。他機器の競合介入ゼロを保証。
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
                    <th className="py-2 px-3">TIMESTAMP</th>
                    <th className="py-2 px-3">REASON CODE</th>
                    <th className="py-2 px-3">REASON DESCRIPTION</th>
                    <th className="py-2 px-3">COMMAND</th>
                    <th className="py-2 px-3">WRITER</th>
                    <th className="py-2 px-3">INTEGRITY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-border/50 text-[11px]">
                  <tr>
                    <td className="py-2.5 px-3 text-slate-300">14:15:00.042</td>
                    <td className="py-2.5 px-3 text-signal-lime">RC_STARTUP_DISCHARGE</td>
                    <td className="py-2.5 px-3 text-slate-200">時限開始0:15経過・生需要上昇に伴う先回り放電</td>
                    <td className="py-2.5 px-3 text-emerald-400">+50 kW (Discharge)</td>
                    <td className="py-2.5 px-3 text-slate-400">SPAQ_CORE</td>
                    <td className="py-2.5 px-3 text-emerald-400">VERIFIED</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-slate-300">14:00:15.110</td>
                    <td className="py-2.5 px-3 text-slate-400">RC_BASELINE_MEASURED</td>
                    <td className="py-2.5 px-3 text-slate-200">時限冒頭15秒基準計測完了・初期受電320kW</td>
                    <td className="py-2.5 px-3 text-slate-400">0 kW (Standby)</td>
                    <td className="py-2.5 px-3 text-slate-400">SPAQ_CORE</td>
                    <td className="py-2.5 px-3 text-emerald-400">VERIFIED</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-slate-300">13:59:45.002</td>
                    <td className="py-2.5 px-3 text-amber-300">RC_BOUNDARY_GUARD</td>
                    <td className="py-2.5 px-3 text-slate-200">時限境界15秒前・充電停止ガード実行</td>
                    <td className="py-2.5 px-3 text-slate-400">0 kW (Charge Stop)</td>
                    <td className="py-2.5 px-3 text-slate-400">SPAQ_CORE</td>
                    <td className="py-2.5 px-3 text-emerald-400">VERIFIED</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-slate-300">13:57:00.320</td>
                    <td className="py-2.5 px-3 text-sky-400">RC_LAST_SPURT_CHARGE</td>
                    <td className="py-2.5 px-3 text-slate-200">時限残余電力量再計算に基づくラストスパート急速充電</td>
                    <td className="py-2.5 px-3 text-sky-400">-45 kW (Charge)</td>
                    <td className="py-2.5 px-3 text-slate-400">SPAQ_CORE</td>
                    <td className="py-2.5 px-3 text-emerald-400">VERIFIED</td>
                  </tr>
                </tbody>
              </table>

              <div className="pt-2 text-[10px] text-slate-500 font-mono">
                ※すべての制御イベントは13ヶ月間、装置内不揮発メモリおよびクラウド監査基盤に二重保持されます。
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-graphite-border flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>画面イメージ（公開検証仕様）</span>
            <span>ログ出力形式: JSON / CSV対応</span>
          </div>
        </div>

      </div>
    </section>
  );
};
