import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'gold' | 'success' | 'neutral' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  size = 'md',
  icon,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1 font-medium',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
  };

  const variantStyles = {
    brand: 'bg-[#E6F7F7] text-[#007E7F] border border-[#009C9D]/20',
    gold: 'bg-amber-50 text-amber-900 border border-amber-200/80',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    warning: 'bg-amber-100/70 text-amber-950 border border-amber-300',
    danger: 'bg-rose-50 text-rose-800 border border-rose-200',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
};
