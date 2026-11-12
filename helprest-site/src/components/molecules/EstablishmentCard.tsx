import React, { useState } from 'react';
import { Establishment } from '../../types';
import { DIETARY_FLAGS } from '../../data/flags';
import { StarRating } from '../atoms/StarRating';
import { MapPin, Heart, ShieldCheck, ChevronDown, AlertCircle, CheckCircle2 } from 'lucide-react';

export interface EstablishmentCardProps {
  establishment: Establishment;
  userActiveFlags?: string[];
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  className?: string;
}

export const EstablishmentCard: React.FC<EstablishmentCardProps> = ({
  establishment,
  userActiveFlags = [],
  isFavorite = false,
  onToggleFavorite,
  className = '',
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTab, setMenuTab] = useState<'for-you' | 'others'>('for-you');

  const matchRatio = React.useMemo(() => {
    if (userActiveFlags.length === 0) return 1;
    const matchingCount = userActiveFlags.filter((f) =>
      establishment.flags.includes(f)
    ).length;
    return matchingCount / userActiveFlags.length;
  }, [establishment.flags, userActiveFlags]);

  const isFullMatch = matchRatio === 1;
  const activeDish =
    menuTab === 'for-you' ? establishment.highlightDish : establishment.otherDish;

  return (
    <article
      className={`group bg-white rounded-2xl border border-[#EAEAEA] hover:border-[#009C9D]/50 transition-colors duration-150 overflow-hidden flex flex-col ${className}`}
    >
      {/* Top Food / Restaurant Image */}
      <div className="relative h-44 w-full bg-[#F2F4F5] overflow-hidden">
        <img
          src={establishment.imageUrl}
          alt={establishment.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = '/assets/showcase/hero-dining.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

        {/* Compatibility & Certification Badges */}
        <div className="absolute top-3 left-3 right-12 z-10 flex flex-wrap gap-1.5">
          {userActiveFlags.length > 0 && (
            <span
              className={`font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider ${
                isFullMatch
                  ? 'bg-[#009C9D] text-white'
                  : 'bg-[#F7CC33] text-[#11181C]'
              }`}
            >
              {isFullMatch ? '100% compatível' : `${Math.round(matchRatio * 100)}% compatível`}
            </span>
          )}
          {establishment.kitchenCertified && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white text-[#11181C]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#009C9D]" />
              Cozinha verificada
            </span>
          )}
        </div>

        {/* App-authentic HeartClicable Coral Button */}
        {onToggleFavorite && (
          <button
            type="button"
            onClick={() => onToggleFavorite(establishment.id)}
            aria-label={isFavorite ? 'Remover dos favoritos' : 'Favoritar restaurante'}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 border border-[#EAEAEA] flex items-center justify-center cursor-pointer transition-transform active:scale-90"
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite ? 'fill-[#FF533F] text-[#FF533F]' : 'text-[#687076]'
              }`}
            />
          </button>
        )}

        {/* Location & Price Row */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="inline-flex items-center gap-1 font-medium bg-black/45 px-2.5 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-[#F7CC33]" />
            {establishment.distanceFormatted} • {establishment.neighborhood}
          </span>
          <span className="font-mono font-bold text-xs bg-black/45 px-2 py-0.5 rounded-full text-white">
            {establishment.priceRange}
          </span>
        </div>
      </div>

      {/* Body matching CardHorizontal / Details pattern */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          {/* Row Header with circular brand monogram */}
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 border border-black/5"
              style={{ backgroundColor: establishment.logoBg }}
            >
              {establishment.logoInitials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-[#11181C] truncate">
                  {establishment.name}
                </h3>
              </div>
              <p className="text-xs text-[#687076] truncate">
                {establishment.category} • {establishment.city}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <StarRating rating={establishment.rating} reviewCount={establishment.reviewCount} size="sm" />
            {establishment.isSponsor && (
              <span className="text-[10px] font-medium text-[#687076] px-2 py-0.5 rounded-full bg-[#F5F5F5]">
                Novidade próxima
              </span>
            )}
          </div>

          {/* Dietary Flags with Roboto Mono badges matching app */}
          <div className="flex flex-wrap gap-1.5">
            {establishment.flags.map((flagId) => {
              const flag = DIETARY_FLAGS.find((f) => f.id === flagId);
              const isUserMatched = userActiveFlags.includes(flagId);
              return (
                <span
                  key={flagId}
                  className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                    isUserMatched
                      ? 'bg-[#F4FDFB] text-[#007E7F] border-[#009C9D]'
                      : 'bg-[#FAFAFA] text-[#687076] border-[#EAEAEA]'
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: flag?.swatchColor || '#009C9D' }}
                  />
                  {flag?.shortLabel || flagId}
                </span>
              );
            })}
          </div>
        </div>

        {/* Highlight Dish + Interactive Menu Preview ("Para você" vs "Outros Itens") */}
        <div className="pt-3 border-t border-[#EAEAEA] space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <span className="font-mono text-[10px] uppercase font-bold text-[#007E7F] block">
                Prato compatível
              </span>
              <p className="text-xs font-bold text-[#11181C] line-clamp-1">
                {establishment.highlightDish.name}
              </p>
            </div>
            <span className="text-xs font-bold text-[#007E7F] flex-shrink-0 tabular-nums">
              {establishment.highlightDish.priceFormatted}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full flex items-center justify-between text-xs font-medium text-[#687076] hover:text-[#007E7F] py-1.5 px-3 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA] cursor-pointer transition-colors"
            aria-expanded={menuOpen}
          >
            <span>Explorar cardápio separado no app</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${menuOpen ? 'rotate-180 text-[#009C9D]' : ''}`}
            />
          </button>

          {menuOpen && (
            <div className="rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] p-3 space-y-2.5">
              {/* Segmented Control mirroring helprest-app/app/(app)/details/[id].tsx */}
              <div className="grid grid-cols-2 p-0.5 rounded-full bg-[#E0E0E0] text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setMenuTab('for-you')}
                  className={`py-1 rounded-full transition-colors cursor-pointer ${
                    menuTab === 'for-you'
                      ? 'bg-white text-[#11181C] shadow-2xs'
                      : 'text-[#687076]'
                  }`}
                >
                  Para você
                </button>
                <button
                  type="button"
                  onClick={() => setMenuTab('others')}
                  className={`py-1 rounded-full transition-colors cursor-pointer ${
                    menuTab === 'others'
                      ? 'bg-white text-[#11181C] shadow-2xs'
                      : 'text-[#687076]'
                  }`}
                >
                  Outros Itens
                </button>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold text-[#11181C]">{activeDish.name}</span>
                  <span className="text-xs font-bold text-[#333333] tabular-nums">
                    {activeDish.priceFormatted}
                  </span>
                </div>
                <p className="text-[11px] text-[#687076] leading-snug">{activeDish.description}</p>
                <div className="text-[10px] text-[#687076]">
                  <strong className="text-[#333333]">Ingredientes:</strong>{' '}
                  {activeDish.ingredients.join(', ')}
                </div>
                {menuTab === 'for-you' ? (
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#186A3B] bg-[#E9F7EF] px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Compatível com o filtro selecionado
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#8C1D1D] bg-[#FDECEC] px-2 py-0.5 rounded-full">
                    <AlertCircle className="w-3 h-3" />
                    {activeDish.allergenAlerts?.join(' • ') || 'Contém restrições fora do seu perfil'}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
