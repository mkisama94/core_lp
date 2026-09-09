import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertTriangle, FileSpreadsheet } from 'lucide-react';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { CASES } from '../../../data/casesData';

export const CaseHighlights: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-paper border-b border-paper-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeader
            number="06"
            tag="CASE HIGHLIGHTS"
            title="制御の成果を、確かめる。"
            subtitle="製造業A社における30分時限制御とスタートアップ先行放電の実証を紹介します。現場の設備条件・稼働データに基づき、実機検証で確認された成果を掲載しています。"
            theme="light"
            className="mb-0 md:mb-0"
          />
          <Button
            to="/cases"
            variant="outline-dark"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            実証事例を見る
          </Button>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {CASES.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-paper-light border border-paper-border p-6 sm:p-8 flex flex-col justify-between hover:border-ink transition-colors"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={caseItem.type === 'actual' ? 'actual' : 'simulation'}>
                      {caseItem.typeLabel}
                    </Badge>
                    <span className="font-mono text-xs text-ink-muted">
                      {caseItem.industryLabel}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-ink-subtle">
                    {caseItem.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-ink leading-snug">
                  {caseItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-light leading-relaxed font-sans">
                  {caseItem.summary}
                </p>

                {/* Facility & Equipment Specs */}
                <div className="p-3 bg-paper border border-paper-border space-y-1 font-mono text-xs">
                  <div className="flex justify-between text-ink-light">
                    <span className="text-ink-muted">契約電力:</span>
                    <span className="font-medium text-ink">{caseItem.equipment.contractPower}</span>
                  </div>
                  <div className="flex justify-between text-ink-light">
                    <span className="text-ink-muted">蓄電池構成:</span>
                    <span className="font-medium text-ink">{caseItem.equipment.batteryCapacity}</span>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {caseItem.verifiedResults.slice(0, 2).map((res, i) => (
                    <div key={i} className="p-3 bg-white border border-paper-border">
                      <span className="font-mono text-[10px] text-ink-muted block">
                        {res.label}
                      </span>
                      <span className="font-mono text-lg sm:text-xl font-black text-ink block mt-0.5">
                        {res.value}
                      </span>
                      <span className="font-sans text-[10px] text-ink-subtle block mt-0.5 leading-tight">
                        {res.note}
                      </span>
                    </div>
                  ))}
                </div>

                {caseItem.assumptions && (
                  <p className="text-[10px] text-ink-subtle font-sans leading-tight pt-1">
                    {caseItem.assumptions}
                  </p>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-paper-border flex justify-between items-center">
                <Link
                  to={`/cases/${caseItem.slug}`}
                  className="font-mono text-xs text-ink hover:underline flex items-center gap-1 group font-semibold"
                >
                  <span>事例の詳細・前提条件を読む</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
