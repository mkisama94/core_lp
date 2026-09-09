import React from 'react';
import { Server, Cpu, Database, Activity, Shield, ArrowDown, ArrowUp, RefreshCw, Layers } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="bg-graphite-card border border-graphite-border p-6 sm:p-8 text-paper-light">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-graphite-border">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-signal-lime">
            System Architecture & Operational Reliability
          </span>
          <h3 className="text-xl font-bold text-paper-light mt-1">
            現場の自律制御と、クラウドでの運用確認をつなぐ構成
          </h3>
        </div>
        <Badge variant="lime">現場運用と監査を支援</Badge>
      </div>

      {/* Main Diagram Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
        {/* Layer 1: Cloud & Remote Monitoring */}
        <div className="bg-graphite-deep border border-graphite-border p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-graphite-border pb-3">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-signal-lime" />
              <span className="font-mono text-xs font-bold uppercase text-paper-light">
                Cloud Monitoring
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Read / Telemetry</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-graphite-card border border-graphite-border space-y-1">
              <span className="font-mono font-bold text-slate-200 block">リアルタイム運用監視</span>
              <span className="text-slate-400 block text-[11px]">受電電力・SOC・制御履歴のダッシュボード</span>
            </div>
            <div className="p-2.5 bg-graphite-card border border-graphite-border space-y-1">
              <span className="font-mono font-bold text-slate-200 block">反実仮想分析・シャドー検証</span>
              <span className="text-slate-400 block text-[11px]">蓄電池がなかった場合の仮想需要と削減効果検証</span>
            </div>
            <div className="p-2.5 bg-graphite-card border border-graphite-border space-y-1">
              <span className="font-mono font-bold text-slate-200 block">監査ログ・モデル同期</span>
              <span className="text-slate-400 block text-[11px]">判定理由コード（Reason Code）の長期保全</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-emerald-400 pt-1 flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>現場直接書込みなし（Read Only安全設計）</span>
          </div>
        </div>

        {/* Layer 2: SPAQ CORE (Edge Controller) - Center Core */}
        <div className="bg-graphite-light border-2 border-signal-lime/80 p-5 space-y-4 relative shadow-lg">
          <div className="absolute -top-3 left-4 bg-signal-lime text-graphite-deep font-mono text-[10px] font-black px-2 py-0.5 tracking-wider uppercase">
            現場で充放電を自律判断
          </div>

          <div className="flex items-center justify-between border-b border-graphite-border-light pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-signal-lime" />
              <span className="font-mono text-sm font-bold uppercase text-paper-light">
                SPAQ CORE 産業用コントローラー
              </span>
            </div>
            <span className="text-[10px] font-mono text-signal-lime">エッジ自律制御</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-graphite-deep border border-graphite-border space-y-1">
              <span className="font-mono font-bold text-signal-lime block">30分時限制御エンジン</span>
              <span className="text-slate-300 block text-[11px]">スタートアップ放電・余力充電の瞬時判断</span>
            </div>
            <div className="p-2.5 bg-graphite-deep border border-graphite-border space-y-1">
              <span className="font-mono font-bold text-paper-light block">現場での設備保護</span>
              <span className="text-slate-300 block text-[11px]">設備の状態に応じて充放電を調整・停止</span>
            </div>
            <div className="p-2.5 bg-graphite-deep border border-graphite-border space-y-1">
              <span className="font-mono font-bold text-paper-light block">監査に活かせる制御履歴</span>
              <span className="text-slate-300 block text-[11px]">判断根拠を装置内に記録し、事実確認・原因調査に活用</span>
            </div>
          </div>

          <div className="p-2 bg-signal-lime/10 border border-signal-lime/30 text-[11px] text-signal-lime font-mono">
            通信異常時も設備保護を優先し、現場への影響を抑制
          </div>
        </div>

        {/* Layer 3: Field Equipment & Facilities */}
        <div className="bg-graphite-deep border border-graphite-border p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-graphite-border pb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-slate-300" />
              <span className="font-mono text-xs font-bold uppercase text-paper-light">
                現場受電・蓄電・生産設備
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">標準プロトコル</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-graphite-card border border-graphite-border space-y-1">
              <div className="flex justify-between">
                <span className="font-mono font-bold text-slate-200">産業用蓄電池 PCS / BMU</span>
                <span className="text-[10px] text-slate-400">Modbus/RS-485</span>
              </div>
              <span className="text-slate-400 block text-[11px]">過充電・過放電・温度保護は装置内で完結保証</span>
            </div>
            <div className="p-2.5 bg-graphite-card border border-graphite-border space-y-1">
              <div className="flex justify-between">
                <span className="font-mono font-bold text-slate-200">デマンド監視装置 / 受電CT</span>
                <span className="text-[10px] text-slate-400">パルス・接点信号</span>
              </div>
              <span className="text-slate-400 block text-[11px]">受電データ・時限同期信号</span>
            </div>
            <div className="p-2.5 bg-graphite-card border border-graphite-border space-y-1">
              <div className="flex justify-between">
                <span className="font-mono font-bold text-slate-200">集中空調・生産設備</span>
                <span className="text-[10px] text-slate-400">接点/インターロック</span>
              </div>
              <span className="text-slate-400 block text-[11px]">非常時インターロック・現場安全優先</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-400 pt-1">
            ※既存メーカーの設備をそのまま活用可能
          </div>
        </div>
      </div>
    </div>
  );
};
