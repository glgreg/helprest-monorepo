import React from 'react';
import { Establishment } from '../../types';
import { DIETARY_FLAGS } from '../../data/flags';
import { StarRating } from '../atoms/StarRating';
import { Badge } from '../atoms/Badge';
import { MapPin, ShieldCheck, Utensils } from 'lucide-react';

export interface EstablishmentCardProps {
  establishment: Establishment;
  userActiveFlags?: string[];
  className?: string;
}

export const EstablishmentCard: React.FC<EstablishmentCardProps> = ({
  establishment,
  userActiveFlags = [],
  className = '',
}) => {
  // Calculate dynamic flag match ratio based on user active flags
  const matchRatio = React.useMemo(() => {
    if (userActiveFlags.length === 0) return 1;
    const matchingCount = userActiveFlags.filter((f) =>
      establishment.flags.includes(f)
    ).length;
    return matchingCount / userActiveFlags.length;
  }, [establishment.flags, userActiveFlags]);

  const isFullMatch = matchRatio === 1;
  const isPartialMatch = matchRatio > 0 && matchRatio < 1;

  return (
    <div
      className={`group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-[#009C9D]/10 hover:border-[#009C9D]/40 transition-all duration-300 overflow-hidden flex flex-col ${className}`}
    >
      {/* Top Banner / Image Container */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        {/* Dynamic decorative visual */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-900/30 to-transparent z-10" />
        
        {/* Fallback pattern / background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#007E7F] to-[#00B4B6] opacity-90 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white">
          <Utensils className="w-16 h-16 opacity-20" />
        </div>

        {/* Badges on Image */}
        <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5 items-center">
          {userActiveFlags.length > 0 && isFullMatch && (
            <Badge variant="success" className="font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
              100% Compatível
            </Badge>
          )}
          {userActiveFlags.length > 0 && isPartialMatch && (
            <Badge variant="warning" className="font-bold shadow-sm">
              {Math.round(matchRatio * 100)}% Compatível
            </Badge>
          )}
          {establishment.kitchenCertified && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 shadow-sm backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#009C9D]" />
              Cozinha Segura
            </span>
          )}
        </div>

        {/* Distance & Price badge */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-white text-xs">
          <span className="inline-flex items-center gap-1 font-medium bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5 text-[#F7CC33]" />
            {establishment.distanceFormatted} • {establishment.neighborhood}
          </span>
          <span className="font-bold bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs text-[#F7CC33]">
            {establishment.priceRange}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#009C9D] transition-colors leading-snug">
              {establishment.name}
            </h3>
          </div>

          <p className="text-xs text-slate-500 mb-3">
            {establishment.category} • {establishment.city}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <StarRating rating={establishment.rating} reviewCount={establishment.reviewCount} size="sm" />
          </div>

          {/* Supported Flags */}
          <div className="mb-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Restrições Atendidas:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {establishment.flags.map((flagId) => {
                const flag = DIETARY_FLAGS.find((f) => f.id === flagId);
                const isUserRestricted = userActiveFlags.includes(flagId);
                return (
                  <span
                    key={flagId}
                    className={`text-[11px] px-2 py-0.5 rounded-md border font-medium ${
                      isUserRestricted
                        ? 'bg-[#E6F7F7] text-[#007E7F] border-[#009C9D]/40 font-semibold ring-1 ring-[#009C9D]/30'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    {flag?.shortLabel || flagId}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlight Dish box */}
        <div className="pt-3 border-t border-slate-100 mt-2">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-slate-700">Destaque Seguro:</span>
            <span className="font-bold text-[#009C9D]">
              {establishment.highlightDish.priceFormatted}
            </span>
          </div>
          <p className="text-xs text-slate-600 line-clamp-2">
            {establishment.highlightDish.name}
          </p>
        </div>
      </div>
    </div>
  );
};
