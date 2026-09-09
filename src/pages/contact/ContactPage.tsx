import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Calculator, Server, Handshake, Phone, Mail, Send } from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { SectionHeader } from '../../components/common/SectionHeader';

type ContactType = 'intro' | 'simulation' | 'dc' | 'partner';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialType = (searchParams.get('type') as ContactType) || 'intro';
  const initialProduct = searchParams.get('product') || '';

  const [contactType, setContactType] = useState<ContactType>(initialType);
  const [productName, setProductName] = useState(initialProduct);

  // Form states
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [facilityType, setFacilityType] = useState('');
  const [contractPower, setContractPower] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const t = searchParams.get('type') as ContactType;
    if (t && ['intro', 'simulation', 'dc', 'partner'].includes(t)) {
      setContactType(t);
    }
    const p = searchParams.get('product');
    if (p) {
      setProductName(p);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }, 800);
  };

  const typeConfig = {
    intro: {
      title: '施設・産業向け 導入相談',
      tag: '主力製品',
      badge: 'available',
      note: '自社設備での30分デマンド制御の実現性や、既設蓄電池・デマコンとの連携について技術担当が回答します。'
    },
    simulation: {
      title: '電力削減効果の事前試算',
      tag: 'データ診断',
      badge: 'lime',
      note: '受電データ（過去のCSV等）に基づく反実仮想シミュレーションを行い、削減見込みをレポートします。'
    },
    dc: {
      title: 'AIデータセンターEMS 構想相談',
      tag: '計画中・共同検討',
      badge: 'planning',
      note: '急峻なGPU負荷変動への適応や特別高圧受電制約に対するバッファリング構想を協議いたします。'
    },
    partner: {
      title: '機器連携・パートナー相談',
      tag: '協業・通信仕様',
      badge: 'graphite',
      note: '蓄電池PCS・計測器・設備メーカー各社様との単一ライター責任分界やプロトコル整合に関するご相談です。'
    }
  }[contactType];

  return (
    <div className="min-h-screen bg-graphite flex flex-col selection:bg-signal-lime selection:text-graphite-deep">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Page Hero */}
        <section className="py-12 md:py-16 bg-graphite border-b border-graphite-border bg-tech-grid">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <Badge variant="lime">CONTACT & INQUIRY</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-paper-light">
                お問い合わせ・各種ご相談
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                施設への導入相談から、事前の削減試算、データセンターEMSの構想協議、設備メーカー様との技術連携まで。
                目的に応じた窓口へ迅速にお繋ぎいたします。
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-20 bg-paper text-ink border-b border-paper-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              
              {/* Type Switcher Tabs */}
              <div className="mb-10">
                <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-3">
                  01 / ご相談の目的を選択してください
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setContactType('intro')}
                    className={`p-3 text-left border flex flex-col justify-between h-20 transition-all ${
                      contactType === 'intro'
                        ? 'bg-ink text-paper-light border-ink font-bold shadow-sm'
                        : 'bg-paper-light text-ink-muted border-paper-border hover:border-ink'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-signal-lime" />
                    <span>施設導入相談</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactType('simulation')}
                    className={`p-3 text-left border flex flex-col justify-between h-20 transition-all ${
                      contactType === 'simulation'
                        ? 'bg-ink text-paper-light border-ink font-bold shadow-sm'
                        : 'bg-paper-light text-ink-muted border-paper-border hover:border-ink'
                    }`}
                  >
                    <Calculator className="w-4 h-4 text-signal-lime" />
                    <span>削減試算</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactType('dc')}
                    className={`p-3 text-left border flex flex-col justify-between h-20 transition-all ${
                      contactType === 'dc'
                        ? 'bg-ink text-paper-light border-ink font-bold shadow-sm'
                        : 'bg-paper-light text-ink-muted border-paper-border hover:border-ink'
                    }`}
                  >
                    <Server className="w-4 h-4 text-amber-400" />
                    <span>データセンター構想</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactType('partner')}
                    className={`p-3 text-left border flex flex-col justify-between h-20 transition-all ${
                      contactType === 'partner'
                        ? 'bg-ink text-paper-light border-ink font-bold shadow-sm'
                        : 'bg-paper-light text-ink-muted border-paper-border hover:border-ink'
                    }`}
                  >
                    <Handshake className="w-4 h-4 text-signal-lime" />
                    <span>機器・連携相談</span>
                  </button>
                </div>
              </div>

              {/* Selected Window Banner */}
              <div className="mb-8 p-4 bg-paper-light border border-paper-border flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-signal-lime mt-1.5 shrink-0" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink">
                    <span>選択窓口: {typeConfig.title}</span>
                    {productName && (
                      <span className="text-ink-muted font-normal">（対象製品: {productName}）</span>
                    )}
                  </div>
                  <p className="text-xs text-ink-muted font-sans">
                    {typeConfig.note}
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                /* Submission Complete State */
                <div className="bg-paper-light border-2 border-emerald-500 p-8 sm:p-12 text-center space-y-5">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">
                    お問い合わせを受け付けました
                  </h3>
                  <p className="text-sm text-ink-light max-w-md mx-auto leading-relaxed">
                    ご入力いただいたメールアドレス宛に受付確認メールを送信いたしました。
                    内容を確認の上、通常2営業日以内に専任の技術担当よりご連絡いたします。
                  </p>
                  <div className="pt-4">
                    <Button
                      to="/"
                      variant="outline-dark"
                      size="md"
                    >
                      トップページへ戻る
                    </Button>
                  </div>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="bg-paper-light border border-paper-border p-6 sm:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs font-bold text-ink">
                        会社名 / 組織名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="例：株式会社○○機械製作所"
                        className="w-full px-3.5 py-2.5 bg-white border border-paper-border text-sm text-ink focus:outline-none focus:border-ink"
                      />
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs font-bold text-ink">
                        ご担当者様氏名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="例：山田 太郎"
                        className="w-full px-3.5 py-2.5 bg-white border border-paper-border text-sm text-ink focus:outline-none focus:border-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs font-bold text-ink">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="例：yamada@example.co.jp"
                        className="w-full px-3.5 py-2.5 bg-white border border-paper-border text-sm text-ink focus:outline-none focus:border-ink"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs font-bold text-ink">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="例：03-1234-5678"
                        className="w-full px-3.5 py-2.5 bg-white border border-paper-border text-sm text-ink focus:outline-none focus:border-ink"
                      />
                    </div>
                  </div>

                  {/* Facility Type & Contract (Optional / Contextual) */}
                  {contactType !== 'dc' && contactType !== 'partner' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-paper-border/60">
                      <div className="space-y-1.5">
                        <label className="block font-mono text-xs font-bold text-ink">
                          施設用途 / 業種
                        </label>
                        <select
                          value={facilityType}
                          onChange={(e) => setFacilityType(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-white border border-paper-border text-sm text-ink focus:outline-none focus:border-ink"
                        >
                          <option value="">選択してください</option>
                          <option value="manufacturing">製造業・加工工場</option>
                          <option value="logistics">物流倉庫・冷凍冷蔵倉庫</option>
                          <option value="commercial">商業・オフィスビル</option>
                          <option value="hospital">医療・福祉施設</option>
                          <option value="other">その他</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block font-mono text-xs font-bold text-ink">
                          現在の契約電力（概算）
                        </label>
                        <input
                          type="text"
                          value={contractPower}
                          onChange={(e) => setContractPower(e.target.value)}
                          placeholder="例：500 kW（不明な場合は空欄で可）"
                          className="w-full px-3.5 py-2.5 bg-white border border-paper-border text-sm text-ink focus:outline-none focus:border-ink"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs font-bold text-ink">
                      ご相談内容・検討状況 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder={
                        contactType === 'dc'
                          ? '検討中のAIデータセンターの受電規模、蓄電池の併設有無、協議したい課題などをご記入ください。'
                          : contactType === 'simulation'
                          ? '過去のデマンドデータ（CSV等）の有無、気になっているピーク時間帯などをご記入ください。'
                          : '現在の受電設備、蓄電池やデマコンの有無、解決したいデマンド課題などをご記入ください。'
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-paper-border text-sm text-ink focus:outline-none focus:border-ink"
                    />
                  </div>

                  {/* Privacy Agreement */}
                  <div className="text-xs text-ink-muted font-sans pt-2">
                    ご入力いただいた情報は、お問い合わせ対応および関連技術資料のご案内にのみ利用いたします。詳細は
                    <a href="/privacy" target="_blank" className="text-ink underline ml-1 font-semibold">
                      プライバシーポリシー
                    </a>
                    をご確認ください。
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                      icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? '送信中...' : 'この内容で相談を送信する'}
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
