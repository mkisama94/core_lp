import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Building2, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { SectionHeader } from '../../components/common/SectionHeader';
import { CASES, CaseItem } from '../../data/casesData';

export default function CasesIndexPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'actual' | 'simulation'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCases = CASES.filter((c) => {
    if (activeFilter === 'all') return true;
    return c.type === activeFilter;
  });

  return (
    <div className="min-h-screen bg-graphite flex flex-col selection:bg-signal-lime selection:text-graphite-deep">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Page Hero */}
        <section className="py-16 md:py-20 bg-graphite border-b border-graphite-border bg-tech-grid">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <Badge variant="lime">CASE STUDIES & PROOFS</Badge>
              <h1 className="text-3xl sm:text-5xl font-black text-paper-light tracking-tight">
                導入事例・実証結果
              </h1>
              <p className="font-mono text-xl sm:text-2xl text-signal-lime font-bold">
                実機検証で確認された成果と、モデル試算データの透明な公開。
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
                SPAQ COREは、過大な削減保証や曖昧な宣伝数値を掲載しません。
                工場現場での実機試験データ（実測）と、過去1年間の受電実績に基づくシミュレーション（試算）を厳格に分けて提示しています。
              </p>
            </div>
          </div>
        </section>

        {/* Filter & Cases List */}
        <section className="py-16 md:py-24 bg-paper border-b border-paper-border text-ink">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-paper-border mb-10">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-ink-muted" />
                <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
                  データ種別で絞り込み:
                </span>
              </div>

              <div className="flex items-center gap-2 p-1 bg-paper-light border border-paper-border font-mono text-xs">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 transition-colors ${
                    activeFilter === 'all'
                      ? 'bg-ink text-paper-light font-bold'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  すべて ({CASES.length})
                </button>
                <button
                  onClick={() => setActiveFilter('actual')}
                  className={`px-4 py-2 transition-colors ${
                    activeFilter === 'actual'
                      ? 'bg-ink text-paper-light font-bold'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  実測データのみ ({CASES.filter((c) => c.type === 'actual').length})
                </button>
                <button
                  onClick={() => setActiveFilter('simulation')}
                  className={`px-4 py-2 transition-colors ${
                    activeFilter === 'simulation'
                      ? 'bg-ink text-paper-light font-bold'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  シミュレーション試算 ({CASES.filter((c) => c.type === 'simulation').length})
                </button>
              </div>
            </div>

            {/* Cases Cards */}
            <div className="space-y-8">
              {filteredCases.map((c) => (
                <div
                  key={c.id}
                  className="bg-paper-light border border-paper-border p-6 sm:p-8 hover:border-ink transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Summary (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant={c.type === 'actual' ? 'actual' : 'simulation'}>
                          {c.typeLabel}
                        </Badge>
                        <span className="font-mono text-xs text-ink-muted">
                          {c.industryLabel}
                        </span>
                        <span className="font-mono text-xs text-ink-subtle">
                          ｜ {c.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-ink leading-snug">
                        {c.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-ink-light leading-relaxed">
                        {c.summary}
                      </p>

                      {/* Equipment Spec Snapshot */}
                      <div className="p-3.5 bg-paper border border-paper-border grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        <div>
                          <span className="text-ink-muted block text-[10px]">受電・デマンド仕様:</span>
                          <span className="text-ink font-medium">{c.equipment.contractPower}</span>
                        </div>
                        <div>
                          <span className="text-ink-muted block text-[10px]">蓄電池・制御構成:</span>
                          <span className="text-ink font-medium">{c.equipment.batteryCapacity}</span>
                        </div>
                      </div>

                      {c.assumptions && (
                        <p className="text-[11px] text-ink-subtle font-sans leading-relaxed pt-1">
                          {c.assumptions}
                        </p>
                      )}
                    </div>

                    {/* Right: Metrics & Action (4 cols) */}
                    <div className="lg:col-span-4 bg-white border border-paper-border p-5 flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-3">
                        <span className="font-mono text-xs text-ink-muted block uppercase tracking-wider">
                          {c.type === 'actual' ? '実測確認指標' : '試算成果見込み'}
                        </span>

                        {c.verifiedResults.slice(0, 2).map((res, i) => (
                          <div key={i} className="border-b border-paper-border pb-2 last:border-b-0">
                            <span className="font-mono text-[10px] text-ink-muted block">{res.label}</span>
                            <span className="font-mono text-xl font-bold text-ink block">{res.value}</span>
                            <span className="font-sans text-[10px] text-ink-subtle block">{res.note}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Button
                          to={`/cases/${c.slug}`}
                          variant="outline-dark"
                          size="sm"
                          className="w-full justify-center"
                          icon={<ArrowRight className="w-3.5 h-3.5" />}
                        >
                          詳細レポートを見る
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-graphite-deep text-paper-light text-center border-t border-graphite-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              自社設備のデマンドデータで事前試算しませんか？
            </h2>
            <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
              過去の受電実績CSVをお送りいただければ、SPAQ COREによる反実仮想シミュレーションを無料で実施いたします。
            </p>
            <div className="pt-2">
              <Button
                to="/contact?type=simulation"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                削減効果の事前試算を申し込む
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
