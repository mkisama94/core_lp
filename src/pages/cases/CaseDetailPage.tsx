import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Building2, Calendar, FileText } from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { CASES } from '../../data/casesData';
import NotFound from '../NotFound';

export default function CaseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const caseItem = CASES.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseItem) return <NotFound />;

  return (
    <div className="min-h-screen bg-graphite flex flex-col selection:bg-signal-lime selection:text-graphite-deep">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Breadcrumb & Navigation */}
        <section className="bg-graphite py-6 border-b border-graphite-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              to="/cases"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-paper-light transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>事例一覧へ戻る</span>
            </Link>

            <div className="flex items-center gap-2">
              <Badge variant={caseItem.type === 'actual' ? 'actual' : 'simulation'}>
                {caseItem.typeLabel}
              </Badge>
              <span className="font-mono text-xs text-slate-400">
                {caseItem.industryLabel}
              </span>
            </div>
          </div>
        </section>

        {/* Case Header */}
        <section className="py-12 md:py-16 bg-graphite border-b border-graphite-border bg-tech-grid">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-4">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>対象期間: {caseItem.period}</span>
                <span>｜</span>
                <span>{caseItem.clientName}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold text-paper-light leading-tight">
                {caseItem.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
                {caseItem.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Case Main Content */}
        <section className="py-16 md:py-20 bg-paper text-ink border-b border-paper-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Main Column (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                {/* 1. Challenge */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-ink border-b border-paper-border pb-3 flex items-center gap-2">
                    <span className="font-mono text-xs text-ink-muted">[01]</span>
                    導入前の課題と背景
                  </h2>
                  <p className="text-sm text-ink-light leading-relaxed font-sans">
                    {caseItem.challenge}
                  </p>
                </div>

                {/* 2. Solution */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-ink border-b border-paper-border pb-3 flex items-center gap-2">
                    <span className="font-mono text-xs text-ink-muted">[02]</span>
                    SPAQ COREによる解決アプローチ
                  </h2>
                  <p className="text-sm text-ink-light leading-relaxed font-sans">
                    {caseItem.solution}
                  </p>
                </div>

                {/* 3. Verified Results */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-ink border-b border-paper-border pb-3 flex items-center gap-2">
                    <span className="font-mono text-xs text-ink-muted">[03]</span>
                    {caseItem.type === 'actual' ? '確認された実測成果' : '試算による見込み効果'}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                    {caseItem.verifiedResults.map((res, i) => (
                      <div key={i} className="p-4 bg-paper-light border border-paper-border">
                        <span className="text-xs text-ink-muted block">{res.label}</span>
                        <span className="text-2xl font-black text-ink block mt-1">{res.value}</span>
                        <span className="text-[11px] text-ink-subtle block mt-1">{res.note}</span>
                      </div>
                    ))}
                  </div>

                  {caseItem.assumptions && (
                    <div className="p-4 bg-paper-light border-l-4 border-amber-500 text-xs font-sans text-ink-muted leading-relaxed">
                      {caseItem.assumptions}
                    </div>
                  )}
                </div>

                {/* 4. Technical Highlights */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-ink border-b border-paper-border pb-3 flex items-center gap-2">
                    <span className="font-mono text-xs text-ink-muted">[04]</span>
                    技術ハイライト
                  </h2>
                  <ul className="space-y-2.5 font-sans text-xs text-ink-light">
                    {caseItem.technicalHighlights.map((tech, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-signal-lime shrink-0 mt-0.5" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar Column (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-paper-light border border-paper-border p-6 space-y-4 font-mono text-xs">
                  <h3 className="font-bold text-sm text-ink uppercase tracking-wider border-b border-paper-border pb-2">
                    設備構成・前提条件
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-ink-muted block text-[10px]">契約電力・目標:</span>
                      <span className="text-ink font-medium">{caseItem.equipment.contractPower}</span>
                    </div>
                    <div>
                      <span className="text-ink-muted block text-[10px]">蓄電池設備:</span>
                      <span className="text-ink font-medium">{caseItem.equipment.batteryCapacity}</span>
                    </div>
                    {caseItem.equipment.pvCapacity && (
                      <div>
                        <span className="text-ink-muted block text-[10px]">太陽光発電:</span>
                        <span className="text-ink font-medium">{caseItem.equipment.pvCapacity}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-ink-muted block text-[10px]">コントローラー:</span>
                      <span className="text-ink font-medium">{caseItem.equipment.controller}</span>
                    </div>
                    <div>
                      <span className="text-ink-muted block text-[10px]">連携・その他:</span>
                      <span className="text-ink font-medium">{caseItem.equipment.other}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-graphite-card border border-graphite-border p-6 text-paper-light space-y-4">
                  <h3 className="text-base font-bold">同様の施設での効果を相談</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    自社の契約電力や蓄電池構成に応じた導入の可否・効果試算をご案内します。
                  </p>
                  <Button
                    to={`/contact?type=intro&case=${caseItem.slug}`}
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    この構成について相談する
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
