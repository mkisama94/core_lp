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
                運用を支える技術と設計
              </h1>
              <p className="font-mono text-xl sm:text-2xl text-signal-lime font-bold">
                ピークを抑え、設備を守り、判断の根拠を残す。
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
                現場の電力運用には、ピークへの対応に加え、設備の保護と制御内容を確認できることが求められます。
                SPAQ COREは、30分時限の先読みと異常時の設備保護、判断根拠の記録を一体化。日々の運用からシステム監査での検証までを支えます。
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
              title="空調停止を抑える、蓄電池と設備の連携"
              subtitle="30分ごとの電力管理に合わせて、需要の把握・放電・充電を調整。蓄電池を優先して活用し、現場への影響を抑えながらピークに対応します。"
              theme="dark"
            />

            <ControlTimeline />

            {/* Safety Target Math Box */}
            <div className="bg-graphite-deep border border-graphite-border p-6 font-mono text-xs space-y-4">
              <div className="flex items-center gap-2 text-signal-lime">
                <Terminal className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">
                  設備条件と予測の不確実性を織り込む安全目標設計
                </span>
              </div>
              <div className="p-4 bg-[#070D10] border border-graphite-border space-y-2 text-slate-300">
                <div><span className="text-signal-lime font-bold">制約条件</span>：契約電力・計測特性・設備の応答性を把握</div>
                <div><span className="text-signal-lime font-bold">安全目標</span>：予測の不確実性と運用余力を考慮して設計</div>
                <div className="text-slate-500 pt-1">
                  予測需要と安全目標を継続的に照合し、蓄電池の余力と現場設備の制約に応じて制御を判断します。
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
              title="必要な放電を続けるための需要把握"
              subtitle="受電電力の低下が、需要の減少によるものか、蓄電池の補完によるものかを区別。必要な放電を早く止めてしまうことを防ぎ、安定したピーク抑制につなげます。"
              theme="light"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-xs font-sans text-ink-light leading-relaxed">
                <p>
                  蓄電池の放電中、受電CTが計測する電力値には「蓄電池によって引き下げられた見かけの電力」しか現れません。
                  受電電力だけをもとに放電の要否を判断すると、<strong>放電開始 → 受電低下 → 放電停止 → 受電再急騰 → 再警報</strong>という動作の繰り返しが起こる場合があります。
                </p>
                <p>
                  SPAQ COREは、PCSから取得した実有効放電電力を受電電力へリアルタイムに足し戻し、<strong>「もし蓄電池が放電していなかった場合の本来の工場需要」</strong>を継続的に推定します。この需要復元（反実仮想判定）によって、必要な放電を続けるかどうかを判断します。
                </p>
              </div>

              {/* Formula Box */}
              <div className="bg-paper-light border-2 border-ink p-6 font-mono text-xs space-y-3">
                <span className="font-bold text-ink block uppercase tracking-wider text-[11px]">
                  DEMAND RESTORATION MODEL
                </span>
                <div className="p-3 bg-white border border-paper-border space-y-1.5 text-ink-light">
                  <div>推定放電前需要 ＝ 観測した受電電力 ＋ 蓄電池による需要補完分</div>
                  <div>現在の需要と将来予測を統合し、制御がなかった場合の負荷を評価</div>
                  <div className="pt-2 font-bold text-ink border-t border-paper-border">
                    判定：復元した需要と予測から、ピーク超過の兆候を捉える
                  </div>
                  <div className="font-bold text-signal-lime bg-graphite px-2 py-1 mt-2">
                    制御：安全目標・蓄電池余力・設備制約に応じて必要出力を決定
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 外部システム要求仕様書 */}
        <section className="py-16 md:py-24 bg-graphite border-b border-graphite-border bg-tech-grid text-paper-light">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeader
              number="03"
              tag="EXTERNAL REQUIREMENTS"
              title="設備への影響を抑え、運用を検証できる設計"
              subtitle="通信や計測の異常時には設備保護を優先し、現場への影響を抑制。制御の経緯を記録することで、障害調査やシステム監査での事実確認を支えます。"
              theme="dark"
            />

            <ArchitectureDiagram />

            {/* Key COM specs table */}
            <div className="bg-graphite-deep border border-graphite-border overflow-x-auto text-xs font-mono">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-graphite-border text-slate-400 bg-graphite-card">
                    <th className="py-3 px-4">DESIGN DOMAIN</th>
                    <th className="py-3 px-4">ITEM</th>
                    <th className="py-3 px-4">SPAQ CORE IMPLEMENTATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-border/50 text-[11px] text-slate-300">
                  <tr>
                    <td className="py-3 px-4 text-signal-lime font-bold">OPERATIONAL SAFETY</td>
                    <td className="py-3 px-4 text-paper-light font-bold">異常時の設備保護</td>
                    <td className="py-3 px-4">通信や計測の異常時は充放電を調整・停止し、設備への影響を抑えながら現場での確認・対応を支援します。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-signal-lime font-bold">EXPLAINABILITY</td>
                    <td className="py-3 px-4 text-paper-light font-bold">判断根拠の確認</td>
                    <td className="py-3 px-4">放電・充電・停止へ切り替えた理由を記録。現場で何が起き、どのように判断したかを後から確認できます。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-signal-lime font-bold">AUDITABILITY</td>
                    <td className="py-3 px-4 text-paper-light font-bold">システム監査・原因調査の支援</td>
                    <td className="py-3 px-4">判断根拠と制御履歴を保持し、JSON/CSVで抽出。監査時の証跡確認や障害時の原因調査、運用の妥当性の説明に活用できます。</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-signal-lime font-bold">TIME INTEGRITY</td>
                    <td className="py-3 px-4 text-paper-light font-bold">出来事を時系列で追跡</td>
                    <td className="py-3 px-4">装置間の時刻を同期し、観測・判断・指令を共通の時間軸で追跡。事後検証に必要な時系列の整合性を保ちます。</td>
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
              title="本番制御の前に、現場で確かめる"
              subtitle="設備を実際に制御せず、現場のデータで判断結果を確認する「シャドーモード」を用意。予測の精度やピークへの対応を検証してから、本番制御へ進めます。"
              theme="light"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-center">
              <div className="p-6 bg-paper-light border border-paper-border">
                <span className="text-xs text-ink-muted block uppercase">予測の精度</span>
                <span className="text-2xl font-bold text-ink block mt-1">実測と比較</span>
                <span className="text-[11px] text-ink-subtle block mt-2">実際の需要とのずれを確認</span>
              </div>
              <div className="p-6 bg-paper-light border border-paper-border">
                <span className="text-xs text-ink-muted block uppercase">ピークへの対応</span>
                <span className="text-2xl font-bold text-emerald-600 block mt-1">兆候を検証</span>
                <span className="text-[11px] text-ink-subtle block mt-2">需要上昇を捉えられるか確認</span>
              </div>
              <div className="p-6 bg-paper-light border border-paper-border">
                <span className="text-xs text-ink-muted block uppercase">設備との連携</span>
                <span className="text-2xl font-bold text-ink block mt-1">接続を確認</span>
                <span className="text-[11px] text-ink-subtle block mt-2">データの取得と応答の安定性を確認</span>
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
