import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline-light' | 'outline-dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  ...rest
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }[size];

  const variantClasses = {
    primary:
      'bg-signal-lime text-graphite-deep font-semibold hover:bg-signal-lime-hover shadow-sm border border-signal-lime transition-all duration-150',
    secondary:
      'bg-graphite-light text-paper-light hover:bg-graphite-light/80 border border-graphite-border transition-all duration-150',
    'outline-light':
      'bg-transparent text-paper-light border border-graphite-border-light hover:border-signal-lime hover:text-signal-lime transition-all duration-150',
    'outline-dark':
      'bg-transparent text-ink border border-paper-border hover:border-ink transition-all duration-150',
    ghost:
      'bg-transparent text-ink hover:text-signal-lime transition-all duration-150 p-0',
  }[variant];

  const baseClasses = `inline-flex items-center justify-center gap-2 font-mono tracking-wide rounded-none transition-colors cursor-pointer select-none ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...rest}>
      {content}
    </button>
  );
};
