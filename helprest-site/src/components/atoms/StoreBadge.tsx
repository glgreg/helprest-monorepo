import React from 'react';

export interface StoreBadgeProps {
  platform: 'google-play' | 'app-store';
  tone?: 'dark' | 'light';
  onClick?: () => void;
  className?: string;
}

export const StoreBadge: React.FC<StoreBadgeProps> = ({
  platform,
  tone = 'dark',
  onClick,
  className = '',
}) => {
  const surfaceClasses =
    tone === 'light'
      ? 'bg-white text-[#11181C] border-[#FFFFFF] hover:bg-[#F4FDFB]'
      : 'bg-[#11181C] text-white border-[#11181C] hover:bg-[#232D33]';

  const mutedClasses = tone === 'light' ? 'text-[#687076]' : 'text-white/70';

  if (platform === 'google-play') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center gap-3 px-5 py-3 rounded-full border transition-colors duration-150 cursor-pointer active:scale-[0.985] ${surfaceClasses} ${className}`}
        aria-label="HelpRest para Android no Google Play"
      >
        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3.609 1.814L13.792 12 3.61 22.186a1.944 1.944 0 01-.22-.924V2.738c0-.34.08-.66.22-.924z"
              fill="#00C1A6"
            />
            <path
              d="M17.18 8.613l-3.388 3.388 3.388 3.387 3.82-2.17a1.442 1.442 0 000-2.434l-3.82-2.171z"
              fill="#F7CC33"
            />
            <path
              d="M13.792 12L3.609 1.814c.26-.2.58-.314.93-.314.47 0 .93.18 1.34.42l11.3 6.693-3.387 3.387z"
              fill="#2D9CDB"
            />
            <path
              d="M13.792 12l3.388 3.388-11.3 6.692a2.38 2.38 0 01-1.34.42c-.35 0-.67-.114-.93-.314L13.792 12z"
              fill="#FF533F"
            />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className={`text-[10px] font-mono uppercase tracking-wider leading-none ${mutedClasses}`}>
            Android • v1.0
          </span>
          <span className="text-sm font-bold tracking-tight leading-tight mt-0.5">
            Google Play
          </span>
        </div>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-full border select-none ${
        tone === 'light'
          ? 'bg-white/15 text-white border-white/30'
          : 'bg-white text-[#11181C] border-[#DDDDDD]'
      } ${className}`}
      title="Versão iOS em desenvolvimento"
    >
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.95-1 .04-2.16.66-2.82 1.44-.58.67-1.1 1.76-.96 2.83 1.12.09 2.19-.55 2.82-1.32z" />
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span
          className={`text-[10px] font-mono uppercase tracking-wider leading-none ${
            tone === 'light' ? 'text-white/80' : 'text-[#687076]'
          }`}
        >
          iOS • Em breve
        </span>
        <span className="text-sm font-bold tracking-tight leading-tight mt-0.5">
          App Store
        </span>
      </div>
    </div>
  );
};
