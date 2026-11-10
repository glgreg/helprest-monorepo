import React from 'react';
import { Link } from '../../router';

export interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon-only';
  clickable?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'full',
  clickable = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#007E7F] to-[#00B4B6] p-1.5 shadow-sm shadow-[#009C9D]/20 ${iconSizes[size]}`}>
        <img
          src="/assets/logos/logo_bare.svg"
          alt="HelpRest Logo"
          className="w-full h-full object-contain filter drop-shadow-sm brightness-110"
          onError={(e) => {
            // Fallback to text icon if svg not loaded
            const target = e.currentTarget;
            target.style.display = 'none';
          }}
        />
      </div>
      {variant === 'full' && (
        <span className={`font-extrabold tracking-tight text-slate-900 ${textSizes[size]}`}>
          Help<span className="text-[#009C9D]">Rest</span>
        </span>
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="inline-block hover:opacity-95 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
};
