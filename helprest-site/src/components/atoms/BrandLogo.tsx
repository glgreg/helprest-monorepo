import React from 'react';
import { Link } from '../../router';

export interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon-only';
  tone?: 'default' | 'inverse';
  clickable?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'full',
  tone = 'default',
  clickable = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-[19px]',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const logoSrc =
    tone === 'inverse'
      ? '/assets/logos/logo_bare.png'
      : '/assets/logos/helprest_logo_green.svg';

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src={logoSrc}
        alt={variant === 'icon-only' ? 'HelpRest' : ''}
        aria-hidden={variant === 'full'}
        className={`object-contain ${
          tone === 'inverse' ? '' : 'rounded-[10px]'
        } ${iconSizes[size]}`}
      />
      {variant === 'full' && (
        <span
          className={`font-display font-bold tracking-tight ${textSizes[size]} ${
            tone === 'inverse' ? 'text-white' : 'text-[#11181C]'
          }`}
        >
          Help
          <span className={tone === 'inverse' ? 'text-[#26D0D1]' : 'text-[#009C9D]'}>
            Rest
          </span>
        </span>
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="inline-flex items-center rounded-lg hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
};
