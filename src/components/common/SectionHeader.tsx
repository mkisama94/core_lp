import React from 'react';

export interface SectionHeaderProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  theme?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  subtitle,
  theme = 'light',
  align = 'left',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {(number || tag) && (
        <div
          className={`flex items-center gap-3 font-mono text-xs tracking-widest uppercase mb-3 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          {number && (
            <span className={isDark ? 'text-signal-lime' : 'text-ink font-semibold'}>
              [{number}]
            </span>
          )}
          {tag && (
            <span className={isDark ? 'text-slate-400' : 'text-ink-muted'}>
              {tag}
            </span>
          )}
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight ${
          isDark ? 'text-paper-light' : 'text-ink'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-3xl ${
            isCenter ? 'mx-auto' : ''
          } ${isDark ? 'text-slate-300' : 'text-ink-muted'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
