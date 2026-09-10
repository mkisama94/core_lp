import { ChartNoAxesCombined, Settings2, Network } from 'lucide-react';
import { SectionHeader } from '../../../components/common/SectionHeader';

const benefits = [
  {
    icon: ChartNoAxesCombined,
    title: '電力ピークを抑え、コストを削減',
    lead: '電力需要の変化を捉え、ピークの発生を予測。',
    description: '蓄電池などの設備制御と組み合わせることで、最大需要電力を抑え、電力コストの削減につなげます。',
  },
  {
    icon: Settings2,
    title: '設備を、必要なときに動かす',
    lead: '電力の状況をリアルタイムに把握し、需要予測にもとづいて設備を制御。',
    description: '人の経験や勘だけに頼らない、データにもとづくエネルギー運用を実現します。',
  },
  {
    icon: Network,
    title: 'エネルギー設備を、ひとつの基盤へ',
    lead: '蓄電池、太陽光発電、計測機器など、異なるエネルギー設備をSPAQ COREにつなぎます。',
    description: '設備を個別に管理するのではなく、施設全体の電力をひとつのシステムとして最適化していきます。',
  },
];

export const Benefits = () => (
  <section id="benefits" className="py-20 md:py-28 bg-graphite-deep border-b border-graphite-border text-paper-light scroll-mt-24">
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        number="01"
        tag="BENEFITS"
        title="電力を「見える化」するだけで終わらせない。"
        theme="dark"
        className="mb-6 md:mb-6"
      />
      <p className="max-w-5xl text-base md:text-lg text-slate-300 leading-relaxed">
        SPAQ COREは、電力データをリアルタイムに捉え、需要を予測し、設備制御につなげます。<br />
        電力コストの削減から、設備運用の高度化まで。電力データを「見るもの」から「使うもの」へ変えていきます。
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
        {benefits.map(({ icon: Icon, title, lead, description }) => (
          <article key={title} className="bg-graphite-card border border-graphite-border border-t-2 border-t-signal-lime p-6 sm:p-8">
            <Icon className="w-8 h-8 text-signal-lime mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold leading-relaxed tracking-tight text-paper-light mb-4 text-balance lg:min-h-[3.75rem]">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {lead}<br />
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
