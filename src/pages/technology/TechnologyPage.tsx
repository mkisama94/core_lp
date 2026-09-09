import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, ShieldCheck, Activity, Database, CheckCircle2, Lock, Terminal } from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ControlTimeline } from '../../components/interactive/ControlTimeline';
import { ArchitectureDiagram } from '../../components/interactive/ArchitectureDiagram';

export default function TechnologyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-graphite flex flex-col selection:bg-signal-lime selection:text-graphite-deep">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Page Hero */}
        <section className="py-16 md:py-20 bg-graphite border-b border-graphite-border bg-tech-grid">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <Badge variant="lime">TECHNOLOGY & RELIABILITY</Badge>
              <h1 className="text-3xl sm:text-5xl font-black text-paper-light tracking-tight">
                技術・運用アーキテクチャ
              </h1>
              <p className="font-mono text-xl sm:text-2xl text-signal-lime font-bold">
                電力会社の30分時限制御に適合する独自アルゴリズムと、現場安全設計。
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
                産業用電力のデマンド制御は、わずか一度のピーク超過が1年間の基本料金に影響します。
                SPAQ COREは、ミリ秒単位の現場通信から30分時限の先読み、単一ライター保護、13ヶ月不揮発ログまでを一体化し、止まらない・競合しない制御を具現化しています。
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: 30分時限制御スケジュール */}
        <section id="schedule" className="py-16 md:py-24 bg-graphite-card border-b border-graphite-border text-paper-light">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeader
              number="01"
              tag="30-MINUTE TIMELINE"
              title="30分固定デマンド時限制御"
              subtitle="電力会社の30分検針サイクルを5つの明確なフェーズに分割。デマコンのベースライン測定を妨げず、かつ先行放電と余力充電を成立させる独自タイムラインです。"
              theme="dark"
            />

            <ControlTimeline />

            {/* Safety Target Math Box */}
            <div className="bg-graphite-deep border border-graphite-border p-6 font-mono text-xs space-y-4">
              <div className="flex items-center gap-2 text-signal-lime">
                <Terminal className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">
                  安全目標演算ロジック（例：契約デマンド 399kW 時）
                </span>
              </div>
              <div className="p-4 bg-[#070D10] border border-graphite-border space-y-2 text-slate-300">
                <div>電力会社計測誤差補正目標 = デマンド目標(399kW) ÷ (1 + 計測誤差率 5%) = <span className="text-signal-lime font-bold">380 kW</span></div>
                <div>スタートアップ安全目標 = 計測誤差補正目標(380kW) - 固定安全余裕(20kW) = <span className="text-signal-lime font-bold">360 kW</span></div>
                <div className="text-slate-500 pt-1">
                  ※突発的な大口負荷変動が生じても、360kW以内に制御を抑え込むことで、計量器の公称目標（399kW）を確実に保護します。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 反実仮想判定（需要復元の数式） */}
        <section className="py-16 md:py-24 bg-paper border-b border-paper-border text-ink">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeader
              number="02"
              tag="COUNTERFACTUAL ANALYSIS"
              title="反実仮想判定（放電前需要の復元）"
              subtitle="蓄電池が放電すると受電電力が下がり、制御装置自身が「需要が落ち着いた」と誤認して放電を止めてしまう自己減衰現象を、数式による真の需要復元で解決します。"
              theme="light"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-xs font-sans text-ink-light leading-relaxed">
                <p>
                  蓄電池の放電中、受電CTが計測する電力値には「蓄電池によって引き下げられた見かけの電力」しか現れません。
                  従来の簡易EMSでは、この見かけの電力をもとに判定するため、<strong>放電開始 → 受電低下 → 放電停止 → 受電再急騰 → 再警報</strong>という激しいハンチングを引き起こします。
                </p>
                <p>
                  SPAQ COREは、PCSから取得した実有効放電電力を受電電力へリアルタイムに足し戻し、<strong>「もし蓄電池が放電していなかった場合の本来の工場需要」</strong>をミリ秒単位で復元。制御の自己減衰を数学的に遮断します。
                </p>
              </div>

              {/* Formula Box */}
              <div className="bg-paper-light border-2 border-ink p-6 font-mono text-xs space-y-3">
                <span className="font-bold text-ink block uppercase tracking-wider text-[11px]">
                  RESTORATION FORMULA
                </span>
                <div className="p-3 bg-white border border-paper-border space-y-1.5 text-ink-light">
                  <div>推定放電前現在需要 = R004(受電電力) + EMS実放電電力</div>
                  <div>推定放電前予測需要 = R002(デマコン予測) + EMS実放電電力</div>
                  <div className="pt-2 font-bold text-ink border-t border-paper-border">
                    判定需要 = max(推定放電前現在需要, 推定放電前予測需要)
                  </div>
                  <div className="font-bold text-signal-lime bg-graphite px-2 py-1 mt-2">
                    必要放電量 = max(0, 判定需要 - スタートアップ安全目標)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 外部システム要求仕様書（COM-01〜COM-25） */}
        <section className="py-16 md:py-24 bg-graphite border-b border-graphite-border bg-tech-grid text-paper-light">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeader
              number="03"
              tag="EXTERNAL REQUIREMENTS"
              title="外部システム要求仕様と単一ライター保護"
              subtitle="協議用ドラフト（COM-01〜COM-25）に基づく堅牢な責任分界。他装置との競合書込みを排除し、万一の通信断でも安全側に自律停止します。"
              theme="dark"
            />

            <ArchitectureDiagram />

            {/* Key COM specs table */}
            <div className="bg-graphite-deep border border-graphite-border overflow-x-auto text-xs font-mono">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-graphite-border text-slate-400 bg-graphite-card">
                    <th className="py-3 px-4">REQUIREMENT ID</th>
                    <th className="py-3 px-4">ITEM</th>
                    <th className="py-3 px-4">SPAQ CORE IMPLEMENTATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-border/50 text-[11px] text-slate-300">
                  <tr>
                    <td className="py-3 px-4 text-signal-lime font-bold">COM-01 / COM-02</td>
                    <td className="py-3 px-4 text-paper-light font-bold">単一ライター責任分界</td>
                    <td className="py-3 px-4">PCS制御レジスタの書込み主体をSPAQ COREに限定。上位監視装置はRead Only化し競合を物理防止。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-signal-lime font-bold">COM-06 / COM-07</td>
                    <td className="py-3 px-4 text-paper-light font-bold">状態遷移理由コード (Reason Code)</td>
                    <td className="py-3 px-4">総合ステータスだけでなく、放電・充電・停止のすべての遷移に一意の理由コードを付与して記録。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-signal-lime font-bold">COM-11 / COM-16</td>
                    <td className="py-3 px-4 text-paper-light font-bold">13ヶ月不揮発一次証跡ログ</td>
                    <td className="py-3 px-4">通信断・電源断でも消去されない不揮発メモリへ13ヶ月分蓄積。外部からJSON/CSVで監査抽出可能。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-signal-lime font-bold">COM-19</td>
                    <td className="py-3 px-4 text-paper-light font-bold">高精度時刻同期 (NTP/GPS)</td>
                    <td className="py-3 px-4">各装置間の時刻差を通常1秒以内（目標3ms）に保ち、事後ログの時系列完全性を保証。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: シャドーモード検証 */}
        <section className="py-16 md:py-24 bg-paper text-ink">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeader
              number="04"
              tag="SHADOW MODE & VALIDATION"
              title="実機を止めないシャドーモード検証"
              subtitle="本番の制御指令を出さずに、現場のリアルタイムデータを取り込んで仮想判定のみを走らせるシャドーモードを標準装備。操業リスクゼロで性能を事前に確認できます。"
              theme="light"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-center">
              <div className="p-6 bg-paper-light border border-paper-border">
                <span className="text-xs text-ink-muted block uppercase">MAE (平均絶対誤差)</span>
                <span className="text-3xl font-bold text-ink block mt-1">± 3.2 kW</span>
                <span className="text-[11px] text-ink-subtle block mt-2">実測負荷と予測値の乖離検証</span>
              </div>
              <div className="p-6 bg-paper-light border border-paper-border">
                <span className="text-xs text-ink-muted block uppercase">見逃し率 (Miss Rate)</span>
                <span className="text-3xl font-bold text-emerald-600 block mt-1">0.0 %</span>
                <span className="text-[11px] text-ink-subtle block mt-2">安全側上限予測による超過見落としゼロ</span>
              </div>
              <div className="p-6 bg-paper-light border border-paper-border">
                <span className="text-xs text-ink-muted block uppercase">通信整合性</span>
                <span className="text-3xl font-bold text-ink block mt-1">100 %</span>
                <span className="text-[11px] text-ink-subtle block mt-2">Modbus応答率・CRC整合性確認</span>
              </div>
            </div>

            <div className="pt-8 flex justify-center">
              <Button
                to="/contact?type=partner"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                機器連携・技術仕様の相談をする
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
