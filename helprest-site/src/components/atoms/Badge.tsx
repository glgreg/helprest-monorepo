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
    sm: 'text-[11px] px-2.5 py-0.5 gap-1 font-medium',
    md: 'text-xs px-3 py-1 gap-1.5 font-medium',
  };

  const variantStyles = {
    brand: 'bg-[#E9F3F2] text-[#00696A]',
    gold: 'bg-[#EDF1EF] text-[#3A413F]',
    success: 'bg-[#E6F4EA] text-[#137333]',
    neutral: 'bg-[#EDF1EF] text-[#3A413F]',
    warning: 'bg-[#FEF2EA] text-[#8A4409]',
    danger: 'bg-[#FDF1EF] text-[#7A271A]',
  };

  return (
    <span
      className={`tonal-surface inline-flex items-center rounded-full transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
};
