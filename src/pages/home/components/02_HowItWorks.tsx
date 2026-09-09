import React from 'react';
import { Activity, Brain, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../../../components/common/SectionHeader';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '状態観測',
      tag: 'OBSERVE',
      description: '受電点CT、デマコン、蓄電池SOC、空調稼働状態をリアルタイムに収集。通信品質を常時検証。',
      detail: '生需要の計測だけでなく、欠損・遅延を自動検知'
    },
    {
      num: '02',
      title: '先読み予測',
      tag: 'PREDICT',
      description: '30分時限の残り時間と工場負荷トレンドから、時限末のデマンド予測値を算出。蓄電池の自己減衰を復元。',
      detail: '安全側上限予測で警報発生前の兆候を捕捉'
    },
    {
      num: '03',
      title: '自律判断',
      tag: 'DECIDE',
      description: '契約デマンド・計測特性を考慮した安全目標・安全余裕枠を照合し、「待機・放電・充電」を即時確定。',
      detail: 'スタートアップ放電／ラストスパート充電の切替'
    },
    {
      num: '04',
      title: '指令と監査',
      tag: 'ACT & AUDIT',
      description: 'PCSへ制御指令を送信し、判断の根拠と実行内容を記録。システム監査で運用の妥当性を確認できます。',
      detail: '制御履歴をたどり、監査時の事実確認や原因調査を支援'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-paper-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          tag="HOW IT WORKS"
          title="予測から制御まで、ひとつにつなぐ。"
          subtitle="「需要を読む → 充放電を判断 → 制御する → 証跡を残す」。属人的な警報対応を排し、現場の30分デマンド運用を一連の自動プロセスとして統合します。"
          theme="light"
        />

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-paper-light border border-paper-border p-6 flex flex-col justify-between hover:border-ink transition-colors relative group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-paper-border pb-3 mb-4">
                  <span className="font-mono text-2xl font-black text-ink">
                    {step.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-light leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-paper-border/60 text-[11px] font-mono text-ink-muted">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Roles between Cloud and Edge */}
        <div className="mt-12 bg-paper-light border border-paper-border p-6 sm:p-8">
          <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-widest mb-4">
            役割分担：クラウドと現場エッジコントローラー
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans text-ink-light leading-relaxed">
            <div className="p-4 bg-paper border border-paper-border">
              <span className="font-mono font-bold text-ink text-sm block mb-1">
                現場エッジ（SPAQ CORE 制御装置）
              </span>
              <p>
                時限同期・高速サンプリング・PCSへの放電指令・異常時の安全な制御停止など、<strong>リアルタイム制御と設備保護</strong>を現場内で自律完結。インターネット遮断時も単独で止まらず稼働を維持します。
              </p>
            </div>
            <div className="p-4 bg-paper border border-paper-border">
              <span className="font-mono font-bold text-ink text-sm block mb-1">
                クラウド管理画面（SPAQ Cloud）
              </span>
              <p>
                複数拠点の受電電力・デマンド状況の俯瞰監視、反実仮想分析（蓄電池がなかった場合の試算検証）、モデル配信、長期監査ログの蓄積など、<strong>長期的な最適化・可視化と経営判断の支援</strong>を担います。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
