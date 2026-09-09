import React, { useEffect } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Badge } from '../../components/common/Badge';
import { SectionHeader } from '../../components/common/SectionHeader';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-graphite flex flex-col selection:bg-signal-lime selection:text-graphite-deep">
      <Navbar />

      <main className="flex-grow pt-28">
        <section className="py-12 md:py-16 bg-graphite border-b border-graphite-border bg-tech-grid">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <Badge variant="lime">LEGAL & PRIVACY</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-paper-light">
                プライバシーポリシー及びデータ管理方針
              </h1>
              <p className="text-sm text-slate-300 font-sans">
                制定日：2026年1月1日 ｜ 最終改訂日：2026年9月9日
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-paper text-ink border-b border-paper-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-10 font-sans text-sm text-ink-light leading-relaxed">
              
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-ink border-b border-paper-border pb-2">
                  1. 基本方針
                </h2>
                <p>
                  Spaq株式会社（以下「当社」）は、法令遵守と安全安心を原則とし、お客様の個人情報および電力運用データの適正な管理と保護に努めます。当社が提供するエネルギーマネジメント製品「SPAQ CORE」および関連サービスにおける情報の取り扱いについて、以下のとおり定めます。
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-ink border-b border-paper-border pb-2">
                  2. 取得する情報
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>お客様に関する情報：</strong> 会社名、部署名、役職、ご担当者様氏名、メールアドレス、電話番号、所在地等</li>
                  <li><strong>設備・電力運用データ：</strong> 受電電圧、契約電力、30分デマンドデータ、蓄電池容量・状態、太陽光発電量、受電CT計測値、制御履歴ログ等</li>
                  <li><strong>通信・アクセス情報：</strong> IPアドレス、ブラウザ情報、アクセスログ等</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-ink border-b border-paper-border pb-2">
                  3. 利用目的
                </h2>
                <p>当社は、取得した情報を以下の目的の範囲内で利用いたします。</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>SPAQ CORE製品の導入可否判断、事前削減試算および技術検証のため</li>
                  <li>遠隔監視、制御ログの監査、不具合時の障害解析および保守サポートのため</li>
                  <li>お客様からのお問い合わせ、技術相談、資料請求への回答のため</li>
                  <li>エネルギーマネジメントアルゴリズムの研究開発、予測モデル精度向上のため（個人・企業が特定されない統計的処理を実施）</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-ink border-b border-paper-border pb-2">
                  4. 電力運用データの厳格な保全
                </h2>
                <p>
                  お客様の受電データおよび工場稼働パターンは極めて重要な事業機密であると認識しています。当社は、エッジ装置（SPAQ CORE本体）およびクラウド基盤において暗号化通信（TLS/HTTPS）およびアクセス権限の厳格な分離を実施し、第三者への無断開示・提供を行いません。
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-ink border-b border-paper-border pb-2">
                  5. お問い合わせ窓口
                </h2>
                <div className="p-4 bg-paper-light border border-paper-border space-y-1 font-mono text-xs">
                  <p className="font-bold text-ink">Spaq株式会社 個人情報・データ管理相談窓口</p>
                  <p>〒343-0845 埼玉県越谷市南越谷4-13-18 4F</p>
                  <p>TEL: 048-961-8427 ｜ E-mail: info@spaq.co.jp</p>
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
