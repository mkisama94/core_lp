import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'graphite' | 'paper' | 'actual' | 'simulation' | 'planning' | 'available';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'graphite',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs tracking-wider';

  let variantClasses = '';
  switch (variant) {
    case 'lime':
      variantClasses = 'bg-spaq-cyan text-white font-semibold border border-spaq-cyan shadow-sm';
      break;
    case 'actual':
      variantClasses = 'bg-spaq-cyan/15 text-spaq-cyan font-bold border border-spaq-cyan/50';
      break;
    case 'simulation':
      variantClasses = 'bg-slate-200 text-ink-muted font-medium border border-slate-300';
      break;
    case 'available':
      variantClasses = 'bg-spaq-cyan/15 text-spaq-cyan font-semibold border border-spaq-cyan/40';
      break;
    case 'planning':
      variantClasses = 'bg-spaq-gold/20 text-spaq-gold-light font-semibold border border-spaq-gold/40';
      break;
    case 'paper':
      variantClasses = 'bg-paper-light text-ink border border-paper-border';
      break;
    case 'graphite':
    default:
      variantClasses = 'bg-graphite-light text-slate-300 border border-graphite-border';
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1 font-mono uppercase tracking-wider rounded-none ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
