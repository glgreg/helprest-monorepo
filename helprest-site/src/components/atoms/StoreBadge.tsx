import React from 'react';

export interface StoreBadgeProps {
  platform: 'google-play' | 'app-store';
  onClick?: () => void;
  className?: string;
}

export const StoreBadge: React.FC<StoreBadgeProps> = ({
  platform,
  onClick,
  className = '',
}) => {
  if (platform === 'google-play') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group relative inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-slate-900/25 active:scale-[0.98] border border-slate-700/80 cursor-pointer ${className}`}
        aria-label="Baixar na Google Play"
      >
        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a1.944 1.944 0 01-.22-.924V2.738c0-.34.08-.66.22-.924z" fill="#00C1A6"/>
            <path d="M17.18 8.613l-3.388 3.388 3.388 3.387 3.82-2.17a1.442 1.442 0 000-2.434l-3.82-2.171z" fill="#FFC400"/>
            <path d="M13.792 12L3.609 1.814c.26-.2.58-.314.93-.314.47 0 .93.18 1.34.42l11.3 6.693-3.387 3.387z" fill="#00E5FF"/>
            <path d="M13.792 12l3.388 3.388-11.3 6.692a2.38 2.38 0 01-1.34.42c-.35 0-.67-.114-.93-.314L13.792 12z" fill="#FF3A44"/>
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300">
            Disponível no
          </span>
          <span className="text-base font-bold tracking-tight text-white leading-tight">
            Google Play
          </span>
        </div>
      </button>
    );
  }

  // App Store (Em breve)
  return (
    <div
      className={`relative inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/90 text-white/90 border border-slate-700/70 select-none shadow-sm ${className}`}
      title="Versão iOS em desenvolvimento"
    >
      <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 text-white">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.95-1 .04-2.16.66-2.82 1.44-.58.67-1.1 1.76-.96 2.83 1.12.09 2.19-.55 2.82-1.32z"/>
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
            Disponível em
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
            Em breve
          </span>
        </div>
        <span className="text-base font-bold tracking-tight text-white leading-tight">
          App Store
        </span>
      </div>
    </div>
  );
};
