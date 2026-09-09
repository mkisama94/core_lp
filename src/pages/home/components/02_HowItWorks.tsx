import React from 'react';
import { Activity, Brain, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../../../components/common/SectionHeader';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '現場の状態を把握',
      tag: 'OBSERVE',
      description: '電力の使用状況、蓄電池の残量、空調の稼働状況をまとめて把握。需要の変化に対応するための情報を集めます。',
      detail: '計測データの欠損や遅れも確認'
    },
    {
      num: '02',
      title: 'ピークの兆候を捉える',
      tag: 'PREDICT',
      description: '電力使用量の推移から、この先の需要を予測。蓄電池の放電による受電電力の低下も考慮し、ピーク超過の兆候を捉えます。',
      detail: '警報後の対応から、兆候に応じた準備へ'
    },
    {
      num: '03',
      title: '必要な充放電を判断',
      tag: 'DECIDE',
      description: '施設の電力目標と蓄電池の余力に合わせて、放電・充電・待機を選択。現場の状況に応じた対応を自動化します。',
      detail: '需要が増えるときは放電、余裕があるときは充電'
    },
    {
      num: '04',
      title: '制御と根拠を記録',
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
          subtitle="需要の把握から蓄電池の制御、履歴の確認までをひとつに。警報のたびに担当者が判断・操作する負担を減らし、日々の電力運用を支えます。"
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
            現場で制御し、離れた場所から運用を確認
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans text-ink-light leading-relaxed">
            <div className="p-4 bg-paper border border-paper-border">
              <span className="font-mono font-bold text-ink text-sm block mb-1">
                現場の制御装置（SPAQ CORE）
              </span>
              <p>
                現場の電力データをもとに、<strong>蓄電池の充放電と設備保護</strong>を判断。クラウドへの接続状況に左右されず、設備の状態に応じた制御を現場で行います。
              </p>
            </div>
            <div className="p-4 bg-paper border border-paper-border">
              <span className="font-mono font-bold text-ink text-sm block mb-1">
                クラウド管理画面（SPAQ Cloud）
              </span>
              <p>
                複数拠点の電力使用状況や制御履歴をまとめて確認。蓄電池によるピーク抑制効果の検証を通じて、<strong>運用の見直しや設備投資の判断</strong>に役立てられます。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
