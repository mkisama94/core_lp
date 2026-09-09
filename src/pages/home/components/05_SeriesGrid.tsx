import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Building2, Server, Check, HelpCircle } from 'lucide-react';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { PRODUCTS } from '../../../data/productsData';

export const SeriesGrid: React.FC = () => {
  const facilityProduct = PRODUCTS.find((p) => p.id === 'spaq-core-facility')!;
  const dcProduct = PRODUCTS.find((p) => p.id === 'spaq-core-datacenter')!;

  return (
    <section className="py-20 md:py-28 bg-graphite-deep border-b border-graphite-border bg-tech-grid text-paper-light">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          tag="CORE SERIES LINEUP"
          title="現場ごとの電力運用に、COREを。"
          subtitle="工場や産業施設向けのSPAQ COREを提供しています。AIデータセンター向けには、限られた受電容量を活用する電力運用の仕組みを計画中です。"
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Card: SPAQ CORE (Facility / Industrial) - 7 Cols */}
          <div className="lg:col-span-7 bg-graphite-card border-2 border-signal-lime/60 p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-signal-lime" />
                  <span className="font-mono text-xs font-bold text-signal-lime tracking-widest uppercase">
                    {facilityProduct.seriesName}
                  </span>
                </div>
                <Badge variant="available">{facilityProduct.statusLabel}</Badge>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-paper-light tracking-tight">
                  {facilityProduct.name}
                  <span className="text-sm font-normal text-slate-400 ml-3">
                    （施設・産業向け）
                  </span>
                </h3>
                <p className="font-mono text-sm text-signal-lime font-semibold mt-1">
                  {facilityProduct.headline}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {facilityProduct.summary}
              </p>

              {/* Target facilities */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs text-slate-400 block uppercase tracking-wider">
                  対象施設・現場
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
                  {facilityProduct.targetFacility.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-signal-lime shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-graphite-border text-xs font-mono">
                <div className="p-3 bg-graphite-deep border border-graphite-border">
                  <span className="text-signal-lime block font-bold">需要に応じた充放電</span>
                  <span className="text-slate-400 text-[11px]">ピークを抑え、次の需要増加に備える</span>
                </div>
                <div className="p-3 bg-graphite-deep border border-graphite-border">
                  <span className="text-signal-lime block font-bold">設備連携</span>
                  <span className="text-slate-400 text-[11px]">既存設備と連携した充放電制御</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-graphite-border flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/products/spaq-core"
                className="font-mono text-xs text-slate-300 hover:text-paper-light flex items-center gap-1 group"
              >
                <span>製品の特長・導入条件を見る</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Button
                to="/contact?type=intro&product=spaq-core"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                施設向け導入を相談する
              </Button>
            </div>
          </div>

          {/* Planning Card: AI Data Center EMS - 5 Cols */}
          <div className="lg:col-span-5 bg-graphite-card border border-graphite-border p-6 sm:p-8 flex flex-col justify-between relative">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-amber-400" />
                  <span className="font-mono text-xs font-bold text-amber-400 tracking-widest uppercase">
                    {dcProduct.seriesName}
                  </span>
                </div>
                <Badge variant="planning">{dcProduct.statusLabel}</Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-paper-light tracking-tight">
                  {dcProduct.name}
                </h3>
                <p className="font-mono text-xs text-amber-300 font-medium mt-1">
                  高密度GPU環境の受電制約を見据えた次世代EMS構想
                </p>
              </div>

              <div className="p-4 bg-graphite-deep border border-graphite-border space-y-2 text-xs font-sans text-slate-300 leading-relaxed">
                <p>
                  AIデータセンターの電力運用を見据えたEMSを計画しています。
                  施設構成や運用要件に応じた検討について、お問い合わせください。
                </p>
                <p className="text-[11px] text-slate-400 pt-1">
                  ※確定仕様の公表前段階であり、施設規模や受電系統に応じた共同検討・パートナーシップ協議を受付しています。
                </p>
              </div>

              {/* Discussion Points */}
              <div className="space-y-2 text-xs font-mono">
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                  協議・検討テーマ
                </span>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400" />
                    <span>AIの学習・推論に伴う急な電力変動への対応</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400" />
                    <span>蓄電池を活用した、受電容量の制約への対応</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400" />
                    <span>非常用発電機・UPSとの役割分担と設備連携</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-graphite-border">
              <Button
                to="/contact?type=dc&product=spaq-core-dc"
                variant="outline-light"
                size="md"
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                構想について相談する
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
