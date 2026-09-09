import React from 'react';
import { SectionHeader } from '../../../components/common/SectionHeader';

export const DeploymentProcess: React.FC = () => {
  const steps = [
    {
      num: 'STEP 01',
      title: '現状と課題を確認',
      period: '約 1〜2 週間',
      description: '過去1年分の30分デマンドデータ（電力会社CSV等）と、現在の受電設備・蓄電池・デマンド監視装置構成を確認。',
      output: 'デマンド特性分析・試算レポートの作成'
    },
    {
      num: 'STEP 02',
      title: '導入効果を事前に検証',
      period: '約 2〜3 週間',
      description: '施設の電力データを使い、導入後のピーク抑制効果と制御の適合性を事前に確認します。',
      output: '設備条件に応じた安全目標の設計・通信接続仕様書の策定'
    },
    {
      num: 'STEP 03',
      title: '設置・動作確認',
      period: '約 1〜2 日（現場作業）',
      description: '制御装置を設置し、既設設備との接続を確認。通常時と異常時の動作を検証してから、運用へ進みます。',
      output: '稼働前の動作検証・設備保護の確認'
    },
    {
      num: 'STEP 04',
      title: '運用開始・継続改善',
      period: '継続運用・月次モニタリング',
      description: '需要に応じた充放電を開始。稼働状況と制御履歴を月次で確認し、現場の変化に合わせて運用を調整します。',
      output: '実測デマンド抑制・月次運用レポート'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-paper-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          tag="DEPLOYMENT PROCESS"
          title="導入から運用まで。"
          subtitle="施設の電力データで効果を検討し、設備との接続・動作を確認してから運用へ。現場への影響を確認しながら、段階的に導入を進めます。"
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-paper-light border border-paper-border p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-paper-border pb-3 mb-4 font-mono">
                  <span className="text-xs font-bold text-ink tracking-wider">
                    {step.num}
                  </span>
                  <span className="text-[11px] text-ink-muted">
                    {step.period}
                  </span>
                </div>

                <h3 className="text-base font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-ink-light leading-relaxed mb-4 font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-paper-border/60 text-[11px] font-mono text-ink-muted">
                成果物: {step.output}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-ink-muted">
          ※導入費用およびスケジュールは、現場の受電電圧・蓄電池メーカー・通信環境に応じて個別にご提示いたします。
        </div>

      </div>
    </section>
  );
};
