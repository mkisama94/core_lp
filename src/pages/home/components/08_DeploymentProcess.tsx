import React from 'react';
import { SectionHeader } from '../../../components/common/SectionHeader';

export const DeploymentProcess: React.FC = () => {
  const steps = [
    {
      num: 'STEP 01',
      title: '現状把握・データ受託',
      period: '約 1〜2 週間',
      description: '過去1年分の30分デマンドデータ（電力会社CSV等）と、現在の受電設備・蓄電池・デマコン構成を確認。',
      output: 'デマンド特性分析・試算レポートの作成'
    },
    {
      num: 'STEP 02',
      title: '設計・シミュレーション検証',
      period: '約 2〜3 週間',
      description: '実データに基づく反実仮想シミュレーションおよびシャドーモードによる制御モデルの整合検証を実施。',
      output: '安全目標（kW）設定・通信接続仕様書の策定'
    },
    {
      num: 'STEP 03',
      title: '機器導入・通信結合試験',
      period: '約 1〜2 日（現場作業）',
      description: 'SPAQ CORE本体の設置、CT配線、Modbus/RS-485通信接続および安全フェールセーフ動作試験を実施。',
      output: '現場ドライラン試験・単一ライター確認'
    },
    {
      num: 'STEP 04',
      title: '実証運転・本番最適化',
      period: '継続運用・月次モニタリング',
      description: 'スタートアップ放電と通常制御を開始。クラウド画面での監視とともに、月次での制御監査・精度チューニングを提供。',
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
          subtitle="まずは既存の電力データに基づく事前検証から。工場の操業を妨げないシャドーモード検証を経て、安全確実に本番自動制御へとステップを進めます。"
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
