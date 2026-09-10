export const Benefits = () => (
  <section
    id="benefits"
    aria-labelledby="benefits-title"
    className="py-20 md:py-28 bg-graphite-deep border-b border-graphite-border text-paper-light scroll-mt-24"
  >
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center gap-3 font-mono text-xs tracking-widest uppercase mb-8">
        <span className="text-signal-lime">[01]</span>
        <span className="text-slate-400">BENEFITS</span>
      </div>

      <p className="text-lg sm:text-2xl font-bold text-paper-light">
        首都圏のある工場では、<br/ >基本料金だけで
      </p>
      <h2
        id="benefits-title"
        className="flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-4 mt-5 mb-6 font-bold tracking-tight"
      >
        <span className="text-xl sm:text-3xl">年間 約</span>
        <span className="text-7xl sm:text-8xl lg:text-[128px] leading-none text-signal-lime tabular-nums">126</span>
        <span className="text-2xl sm:text-4xl text-signal-lime">万円</span>
      </h2>
      <p className="text-xl sm:text-2xl font-bold text-paper-light">
        の削減効果。<br />加えて従量料金も削減。
      </p>

      <div className="w-12 h-px bg-signal-lime mx-auto my-8" aria-hidden="true" />

      <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-slate-300">
        SPAQ COREは電力需要のピークを抑えることでまず契約電力を引き下げます。<br className="hidden sm:block" />
        毎月の基本料金が下がり、さらに従量料金も削減されます。
      </p>
    </div>
  </section>
);
