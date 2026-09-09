import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { Button } from './Button';

export interface NavbarProps {
  isScrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: '製品・シリーズ', path: '/products/spaq-core' },
    { label: '予測と制御', path: '/#control' },
    { label: '導入事例', path: '/cases' },
    { label: '技術・運用', path: '/technology' },
  ];

  const isCurrent = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.replace('/', '');
    }
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-graphite-deep/95 backdrop-blur-md border-b border-graphite-border shadow-lg py-3.5'
          : 'bg-graphite py-5 border-b border-graphite-border'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Wordmark */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/spaq-logo.png"
              alt="Spaq株式会社"
              className="h-7 sm:h-8 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
            <div className="h-5 w-[1px] bg-slate-700 hidden sm:block" />
            <div className="flex flex-col">
              <span className="font-mono font-extrabold text-base sm:text-lg tracking-wider text-paper-light">
                <span className="text-signal-lime">CORE</span>
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-slate-400 -mt-1">
                Power Management
              </span>
            </div>
          </Link>

          <a
            href="https://spaq.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-paper-light border-l border-graphite-border pl-4 transition-colors"
            title="Spaq株式会社 コーポレートサイト"
          >
            <span>Corporate Site</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-2 font-mono text-xs xl:text-sm tracking-wider transition-colors relative ${
                isCurrent(link.path)
                  ? 'text-signal-lime font-medium'
                  : 'text-slate-300 hover:text-paper-light'
              }`}
            >
              {link.label}
              {isCurrent(link.path) && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-signal-lime" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            className="min-h-[40px] px-5"
          >
            導入相談
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          className="lg:hidden p-2 text-paper-light hover:text-signal-lime transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-graphite-deep border-b border-graphite-border px-4 pt-4 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2.5 px-3 font-mono text-sm tracking-wider text-slate-200 hover:text-signal-lime hover:bg-graphite-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-graphite-border space-y-2">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center min-h-[44px]"
            >
              導入相談
            </Button>
            <a
              href="https://spaq.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 py-2 font-mono text-xs text-slate-400 hover:text-paper-light transition-colors"
            >
              <span>Spaq株式会社 コーポレートサイト</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
