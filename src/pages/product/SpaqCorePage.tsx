import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Building2,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  Clock,
  Layers,
  FileCheck
} from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { SectionHeader } from '../../components/common/SectionHeader';
import { PRODUCTS } from '../../data/productsData';
import { ControlTimeline } from '../../components/interactive/ControlTimeline';
import { ArchitectureDiagram } from '../../components/interactive/ArchitectureDiagram';

export default function SpaqCoreProductPage() {
  const product = PRODUCTS.find((p) => p.id === 'spaq-core-facility')!;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-graphite flex flex-col selection:bg-signal-lime selection:text-graphite-deep">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Template 1: 製品名・対象用途・提供段階・一言の価値 */}
        <section className="py-16 md:py-20 bg-graphite border-b border-graphite-border bg-tech-grid">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="available">{product.statusLabel}</Badge>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  {product.seriesName}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-paper-light tracking-tight">
                {product.name}
              </h1>

              <p className="font-mono text-xl sm:text-2xl text-signal-lime font-bold">
                {product.headline}
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans pt-2">
                {product.summary}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  to="/contact?type=intro&product=spaq-core"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  この製品の導入を相談する
                </Button>
                <Button
                  to="/technology"
                  variant="outline-light"
                  size="lg"
                >
                  制御アルゴリズム仕様
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Template 2: どの現場の、どんな課題に適するか */}
        <section className="py-16 md:py-24 bg-paper border-b border-paper-border text-ink">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="01"
              tag="TARGET & CHALLENGES"
              title="適する現場と解決する課題"
              subtitle="契約電力の超過リスク、既設デマコンと蓄電池の連動遅れ、設備のブラックボックス化。工場や産業施設の現場が抱える特有の課題に適合します。"
              theme="light"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Target Facilities */}
              <div className="bg-paper-light border border-paper-border p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-ink flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-signal-lime" />
                  対象施設・現場
                </h3>
                <ul className="space-y-3 font-sans text-sm text-ink-light">
                  {product.targetFacility.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-signal-lime shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific Challenges */}
              <div className="bg-paper-light border border-paper-border p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-ink flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  解決する現場の課題
                </h3>
                <ul className="space-y-3 font-sans text-sm text-ink-light">
                  {product.challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-amber-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Template 3: COREが行うこと／連携先が行うこと */}
        <section className="py-16 md:py-24 bg-graphite border-b border-graphite-border bg-tech-grid text-paper-light">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="02"
              tag="RESPONSIBILITY MATRIX"
              title="役割分担と責任分界マトリクス"
              subtitle="制御権限と保護機能を曖昧にしない。SPAQ COREが担う演算・指令と、連携先機器が担う自律保護の境界を明確に定義しています。"
              theme="dark"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CORE Responsibilities */}
              <div className="bg-graphite-card border-2 border-signal-lime/60 p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-graphite-border pb-3">
                  <h3 className="text-lg font-bold text-paper-light font-mono flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-signal-lime" />
                    SPAQ CORE が行うこと
                  </h3>
                  <Badge variant="lime">Single Writer</Badge>
                </div>
                <ul className="space-y-3 font-sans text-xs text-slate-300 leading-relaxed">
                  {product.coreResponsibility.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-signal-lime shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner Responsibilities */}
              <div className="bg-graphite-card border border-graphite-border p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-graphite-border pb-3">
                  <h3 className="text-lg font-bold text-paper-light font-mono flex items-center gap-2">
                    <Layers className="w-5 h-5 text-slate-400" />
                    連携先設備（PCS/デマコン）が行うこと
                  </h3>
                  <span className="font-mono text-xs text-slate-400">自律保護</span>
                </div>
                <ul className="space-y-3 font-sans text-xs text-slate-300 leading-relaxed">
                  {product.partnerResponsibility.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-slate-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Template 4: 主要機能と具体的な運用例 */}
        <section className="py-16 md:py-24 bg-paper border-b border-paper-border text-ink">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="03"
              tag="CORE FEATURES & SCHEDULE"
              title="主要機能と30分時限制御"
              subtitle="電力会社の固定30分デマンド検針サイクルに完全に一致する制御スケジュール。基準計測からスタートアップ放電、余力充電、境界ガードまでを自動運用。"
              theme="light"
            />

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {product.keyFeatures.map((feat, i) => (
                <div key={i} className="bg-paper-light border border-paper-border p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block">
                      {feat.tag}
                    </span>
                    <h4 className="text-base font-bold text-ink">{feat.title}</h4>
                    <p className="text-xs text-ink-light leading-relaxed font-sans">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Control Timeline */}
            <ControlTimeline />
          </div>
        </section>

        {/* Template 5: システム構成・対象設備・導入条件 */}
        <section className="py-16 md:py-24 bg-graphite border-b border-graphite-border bg-tech-grid text-paper-light">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="04"
              tag="SYSTEM SPECIFICATIONS"
              title="システム仕様・導入条件"
              subtitle="高圧・特別高圧受電設備、産業用蓄電池、デマンド監視装置との接続仕様および動作環境。"
              theme="dark"
            />

            <div className="bg-graphite-card border border-graphite-border p-6 sm:p-8">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 font-mono text-xs divide-y md:divide-y-0 divide-graphite-border">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="pt-4 md:pt-0 space-y-1">
                    <dt className="text-slate-400 text-[11px] uppercase tracking-wider">
                      {spec.label}
                    </dt>
                    <dd className="text-paper-light font-bold text-sm">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Template 6: 事例・検証結果（ユニオンマシナリ様等の実機実証） */}
        <section className="py-16 md:py-24 bg-paper border-b border-paper-border text-ink">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="05"
              tag="VERIFIED FIELD RESULTS"
              title="実機検証結果サマリ"
              subtitle="金属切削加工工場（ユニオンマシナリ様拠点）での実証運転において、突発負荷に対する先行放電とピーク超過ゼロを実測確認しました。"
              theme="light"
            />

            <div className="bg-paper-light border border-paper-border p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-border pb-4">
                <div>
                  <Badge variant="actual">実測データ</Badge>
                  <h3 className="text-xl font-bold text-ink mt-2">
                    精密金属切削工場 実機実証（契約電力 500kW級 / 蓄電池 62.5kWh）
                  </h3>
                </div>
                <span className="font-mono text-xs text-ink-muted">2026年7月〜8月 実証運転</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-center">
                <div className="p-4 bg-white border border-paper-border">
                  <span className="text-xs text-ink-muted block">デマンド目標超過回数</span>
                  <span className="text-3xl font-black text-ink block mt-1">0 回</span>
                  <span className="text-[10px] text-emerald-600 block mt-1">実測：超過リスク完全解消</span>
                </div>
                <div className="p-4 bg-white border border-paper-border">
                  <span className="text-xs text-ink-muted block">放電応答速度</span>
                  <span className="text-3xl font-black text-ink block mt-1">3 秒以内</span>
                  <span className="text-[10px] text-ink-muted block mt-1">実測：先行判定から出力まで</span>
                </div>
                <div className="p-4 bg-white border border-paper-border">
                  <span className="text-xs text-ink-muted block">次時限SOC回復率</span>
                  <span className="text-3xl font-black text-ink block mt-1">88 %</span>
                  <span className="text-[10px] text-ink-muted block mt-1">実測：ラストスパート充電</span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Link
                  to="/cases/union-machinery-actual"
                  className="font-mono text-xs text-ink hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>この事例の完全レポートを見る</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Template 7: よくある質問 (FAQ) */}
        <section className="py-16 md:py-24 bg-graphite border-b border-graphite-border text-paper-light">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="06"
              tag="FAQ"
              title="よくある技術的なご質問"
              subtitle="既設機器との互換性、通信断時の動作、操業停止の要否など、導入にあたって現場からよくいただく質問です。"
              theme="dark"
            />

            <div className="space-y-4 max-w-3xl">
              {product.faq.map((item, i) => (
                <div key={i} className="bg-graphite-card border border-graphite-border p-6 space-y-2">
                  <h4 className="text-base font-bold text-paper-light flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-signal-lime shrink-0" />
                    {item.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Template 8: 製品名を引き継いだ相談フォームへのダイレクト導線 */}
        <section className="py-20 bg-graphite-deep text-paper-light text-center bg-tech-grid">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Badge variant="lime">ACTION</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              あなたの現場に、SPAQ COREを。
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
              既設蓄電池やデマコンの型番、受電データ（CSV）をご用意いただければ、現場に合わせた導入構成と削減効果のシミュレーションをご提示いたします。
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                to={`/contact?type=intro&product=${product.slug}`}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {product.ctaText}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
