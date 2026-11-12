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
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="/assets/logos/helprest_logo_green.svg"
        alt="HelpRest Logo"
        className={`rounded-xl object-contain shadow-xs ${iconSizes[size]}`}
      />
      {variant === 'full' && (
        <span className={`font-bold tracking-tight text-[#11181C] ${textSizes[size]}`}>
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

