import React from 'react';
import { ArrowRight, Building2, Calculator, Server, Handshake } from 'lucide-react';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { Button } from '../../../components/common/Button';

export const ActionCTA: React.FC = () => {
  const options = [
    {
      id: 'intro',
      title: '施設・産業向け導入相談',
      target: '工場・物流・産業施設の運用責任者様',
      description: '自社設備での30分デマンド制御の実現性、既設蓄電池・デマコンとの接続可否について技術相談を受付中。',
      ctaText: '導入の可否を相談する',
      icon: <Building2 className="w-5 h-5 text-signal-lime" />,
      tag: '主力製品'
    },
    {
      id: 'simulation',
      title: '電力削減効果の事前試算',
      target: '契約電力の削減余地を把握したい企業様',
      description: '過去の受電データ（CSV等）をお預かりし、SPAQ CORE導入時のピークカット効果・コスト削減額を反実仮想試算。',
      ctaText: '試算を申し込む',
      icon: <Calculator className="w-5 h-5 text-signal-lime" />,
      tag: 'データ診断'
    },
    {
      id: 'dc',
      title: 'AIデータセンターEMS 構想相談',
      target: '次世代データセンター開発・運用事業者様',
      description: '特別高圧受電制約やGPUクラスタの急激な負荷変動に対するEMSバッファリング構想の共同検討・ヒアリング。',
      ctaText: '構想について相談する',
      icon: <Server className="w-5 h-5 text-amber-400" />,
      tag: '計画中・共同検討'
    },
    {
      id: 'partner',
      title: '機器連携・パートナー相談',
      target: '蓄電池PCS・計測器・設備メーカー各社様',
      description: '単一ライター責任分界に基づくインターフェース整合試験、OEM提供、販売協業に関するディスカッション。',
      ctaText: '連携条件を相談する',
      icon: <Handshake className="w-5 h-5 text-signal-lime" />,
      tag: '協業・通信仕様'
    }
  ];

  return (
    <section id="contact-gate" className="py-20 md:py-28 bg-graphite-deep border-b border-graphite-border bg-tech-grid text-paper-light">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="09"
          tag="GET IN TOUCH"
          title="あなたの設備に、どんなCOREが必要か。"
          subtitle="導入のご相談から、事前の削減シミュレーション、データセンターEMSの構想協議、設備メーカー様との技術連携まで。目的に応じた専門窓口をご用意しています。"
          theme="dark"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {options.map((opt) => (
            <div
              key={opt.id}
              className="bg-graphite-card border border-graphite-border p-6 flex flex-col justify-between hover:border-signal-lime transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-graphite-border pb-3">
                  <div className="p-2 bg-graphite-deep border border-graphite-border">
                    {opt.icon}
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    {opt.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-paper-light group-hover:text-signal-lime transition-colors">
                    {opt.title}
                  </h3>
                  <span className="font-mono text-[11px] text-slate-400 block mt-1">
                    対象: {opt.target}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {opt.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-graphite-border">
                <Button
                  to={`/contact?type=${opt.id}`}
                  variant={opt.id === 'intro' ? 'primary' : 'outline-light'}
                  size="sm"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  {opt.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Phone Support */}
        <div className="mt-14 p-6 bg-graphite-card border border-graphite-border text-center space-y-2">
          <p className="text-xs text-slate-400 font-mono">
            お急ぎの技術確認や仕様照会は、お電話でも承っております。
          </p>
          <div className="font-mono text-lg font-bold text-paper-light">
            TEL: 048-961-8427 <span className="text-xs font-normal text-slate-400">（Spaq株式会社 担当窓口／平日 9:00〜18:00）</span>
          </div>
        </div>

      </div>
    </section>
  );
};
