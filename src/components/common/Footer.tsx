import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite-deep text-slate-400 border-t border-graphite-border font-sans">
      {/* Upper Footer Links */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img
                src="/assets/spaq-logo.png"
                alt="Spaq株式会社"
                className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
              <div className="h-5 w-[1px] bg-slate-700" />
              <div className="flex flex-col">
                <span className="font-mono font-extrabold text-lg tracking-wider text-paper-light">
                  <span className="text-signal-lime">CORE</span>
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-slate-400 -mt-1">
                  Power Management
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              予測と制御をつなぐ、電力運用のコア。
              電力需要と設備の状態を捉え、産業用蓄電池・設備全体の最適な充放電を自律判断します。
            </p>

            <div className="pt-2">
              <a
                href="https://spaq.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-signal-lime hover:underline tracking-wide"
              >
                <span>Spaq株式会社 コーポレートサイト（spaq.co.jp）</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 1: Products & Series */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-paper-light uppercase tracking-widest border-b border-graphite-border pb-2">
              製品・シリーズ
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/products/spaq-core" className="hover:text-paper-light transition-colors block py-0.5">
                  SPAQ CORE（施設・産業向け）
                </Link>
              </li>
              <li>
                <Link to="/contact?type=dc" className="hover:text-paper-light transition-colors block py-0.5 text-slate-400">
                  AIデータセンターEMS <span className="text-[10px] text-amber-400">[計画中]</span>
                </Link>
              </li>
              <li>
                <Link to="/#control" className="hover:text-paper-light transition-colors block py-0.5">
                  30分時限制御・予測充放電
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Technology & Cases */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-paper-light uppercase tracking-widest border-b border-graphite-border pb-2">
              技術・事例
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/technology" className="hover:text-paper-light transition-colors block py-0.5">
                  技術・運用アーキテクチャ
                </Link>
              </li>
              <li>
                <Link to="/technology#schedule" className="hover:text-paper-light transition-colors block py-0.5">
                  30分時限制御スケジュール
                </Link>
              </li>
              <li>
                <Link to="/cases" className="hover:text-paper-light transition-colors block py-0.5">
                  導入事例一覧（実測／試算）
                </Link>
              </li>
              <li>
                <Link to="/cases/manufacturing-a-actual" className="hover:text-paper-light transition-colors block py-0.5">
                  実機検証実証事例
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-paper-light uppercase tracking-widest border-b border-graphite-border pb-2">
              ご相談・規約
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/contact?type=intro" className="hover:text-paper-light transition-colors block py-0.5">
                  施設・産業向け 導入相談
                </Link>
              </li>
              <li>
                <Link to="/contact?type=simulation" className="hover:text-paper-light transition-colors block py-0.5">
                  電力削減効果の事前試算
                </Link>
              </li>
              <li>
                <Link to="/contact?type=dc" className="hover:text-paper-light transition-colors block py-0.5">
                  データセンターEMS 構想相談
                </Link>
              </li>
              <li>
                <Link to="/contact?type=partner" className="hover:text-paper-light transition-colors block py-0.5">
                  設備メーカー・連携相談
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-paper-light transition-colors block py-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-signal-lime" />
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Note / Disclaimer according to specification */}
        <div className="mt-12 pt-6 border-t border-graphite-border/60 text-[11px] text-slate-500 leading-relaxed font-sans">
          <p>
            ※本サイトに掲載されているシステム構成図、波形、管理画面はすべて説明用イメージです。
            削減数値・試算結果は特定の設備条件および過去稼働実績に基づく計算値であり、あらゆる施設での一律の効果を保証するものではありません。
            AIデータセンターEMSは現在計画中の構想であり、仕様確定前の協議・要件ヒアリングを実施しています。
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#070D10] py-4 border-t border-graphite-border text-xs font-mono">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} Spaq Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              プライバシー方針
            </Link>
            <span>|</span>
            <a
              href="https://spaq.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              運営会社情報
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
