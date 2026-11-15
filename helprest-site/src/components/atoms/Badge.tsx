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
    brand: 'bg-[#F4FDFB] text-[#007E7F] border border-[#B2DFDB]',
    gold: 'bg-[#FEF9E7] text-[#735107] border border-[#F9E6A2]',
    success: 'bg-[#E9F7EF] text-[#186A3B] border border-[#BEE6CE]',
    neutral: 'bg-[#F5F5F5] text-[#333333] border border-[#E0E0E0]',
    warning: 'bg-[#FEF3E8] text-[#8A4409] border border-[#FAD6B5]',
    danger: 'bg-[#FDECEC] text-[#8C1D1D] border border-[#F7C2C2]',
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
