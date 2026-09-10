import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Hero } from './components/01_Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/02_HowItWorks';
import { PredictiveControl } from './components/03_PredictiveControl';
import { Visualization } from './components/04_Visualization';
import { SeriesGrid } from './components/05_SeriesGrid';
import { CaseHighlights } from './components/06_CaseHighlights';
import { IntegrationArch } from './components/07_IntegrationArch';
import { DeploymentProcess } from './components/08_DeploymentProcess';
import { ActionCTA } from './components/09_ActionCTA';

const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://core.spaq.co.jp';

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Spaq株式会社',
      alternateName: 'SPAQ Inc.',
      url: 'https://spaq.co.jp/',
      description:
        '再生可能エネルギー事業およびエネルギーマネジメントシステム「SPAQ CORE」を提供する企業です。',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+81-48-961-8427',
        contactType: 'technical support',
        availableLanguage: 'Japanese',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'SPAQ CORE | 工場・施設向けエネルギーマネジメントシステム',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'ja',
    },
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/#spaq-core`,
      name: 'SPAQ CORE',
      description:
        '工場・施設向けのエネルギーマネジメントシステム（EMS）。電力需要を先読みして蓄電池の充放電を自動で調整し、電力ピークの抑制と日々の運用管理を支えます。',
      brand: { '@type': 'Brand', name: 'SPAQ CORE' },
      manufacturer: { '@id': `${SITE_URL}/#organization` },
      category: '産業用エネルギーマネジメントシステム (EMS)',
      audience: {
        '@type': 'Audience',
        audienceType: '工場・物流倉庫・産業施設の設備管理者および経営層',
      },
    },
  ],
};

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Schema.org script injection
  useEffect(() => {
    const scriptId = 'schema-org-jsonld-renewal';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaOrg);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-graphite flex flex-col selection:bg-signal-lime selection:text-graphite-deep">
      <Navbar isScrolled={isScrolled} />

      {/* Hero and Main Content Sections (01 - 09) */}
      <main className="flex-grow">
        {/* Hero */}
        <Hero />

        {/* 01: Benefits */}
        <Benefits />

        {/* Anchor compatibility for legacy links */}
        <div id="features" className="scroll-mt-24" />
        <div id="problem" className="scroll-mt-24" />

        {/* 02: How it works */}
        <HowItWorks />

        {/* 03: Predictive Control (includes id="control") */}
        <PredictiveControl />

        {/* 04: Operational Visualization */}
        <Visualization />

        {/* 05: Series Grid (Facility & AI Datacenter EMS) */}
        <SeriesGrid />

        {/* 06: Case Highlights */}
        <div id="cases" className="scroll-mt-24" />
        <CaseHighlights />

        {/* 07: Architecture & Safety */}
        <div id="story" className="scroll-mt-24" />
        <IntegrationArch />

        {/* 08: Deployment Process */}
        <DeploymentProcess />

        {/* 09: Action CTA Gate */}
        <div id="contact" className="scroll-mt-24" />
        <ActionCTA />
      </main>

      <Footer />
    </div>
  );
}
