import React, { useState } from 'react';
import { Establishment } from '../../types';
import { DIETARY_FLAGS } from '../../data/flags';
import { StarRating } from '../atoms/StarRating';
import {
  MapPin,
  Heart,
  ShieldCheck,
  ChevronDown,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

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
      className={`group tonal-surface bg-white rounded-3xl shadow-[0_2px_12px_-4px_rgba(24,28,27,0.06)] hover:shadow-[0_14px_30px_-10px_rgba(24,28,27,0.12)] transition-shadow duration-200 overflow-hidden flex flex-col ${className}`}
    >
      {/* Clean Food Photo without stacked badge overlays */}
      <div className="relative aspect-[16/10] w-full bg-[#EDF1EF] overflow-hidden">
        <img
          src={establishment.imageUrl}
          alt={establishment.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = '/assets/showcase/hero-dining.jpg';
          }}
        />

        {onToggleFavorite && (
          <button
            type="button"
            onClick={() => onToggleFavorite(establishment.id)}
            aria-label={
              isFavorite
                ? `Remover ${establishment.name} dos favoritos`
                : `Favoritar ${establishment.name}`
            }
            aria-pressed={isFavorite}
            className="absolute top-3 end-3 w-11 h-11 rounded-full bg-white/95 shadow-[0_2px_10px_rgba(24,28,27,0.14)] flex items-center justify-center cursor-pointer transition-transform active:scale-90 hover:bg-white"
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite ? 'fill-[#FF533F] text-[#FF533F]' : 'text-[#525B58]'
              }`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      {/* Body with tonal grouping and clean typographic hierarchy */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-3.5">
          {/* Header Row */}
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
              style={{ backgroundColor: establishment.logoBg }}
              aria-hidden="true"
            >
              {establishment.logoInitials}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold text-[#181C1B] leading-snug truncate">
                {establishment.name}
              </h3>
              <p className="text-xs text-[#525B58] truncate mt-0.5">
                {establishment.category}
              </p>
            </div>
          </div>

          {/* Location, Distance, Price & Rating */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <StarRating
              rating={establishment.rating}
              reviewCount={establishment.reviewCount}
              size="sm"
            />
            <span className="inline-flex items-center gap-1 text-xs text-[#525B58]">
              <MapPin className="w-3.5 h-3.5 text-[#007677]" aria-hidden="true" />
              <span>
                {establishment.distanceFormatted} · {establishment.neighborhood} ·{' '}
                {establishment.priceRange}
              </span>
            </span>
          </div>

          {/* Compatibility + Verified Kitchen Strip */}
          {(userActiveFlags.length > 0 || establishment.kitchenCertified) && (
            <div className="flex flex-wrap items-center gap-2">
              {userActiveFlags.length > 0 && (
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                    isFullMatch
                      ? 'bg-[#E9F3F2] text-[#00696A]'
                      : 'bg-[#EDF1EF] text-[#181C1B]'
                  }`}
                >
                  {isFullMatch && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#007677]" aria-hidden="true" />
                  )}
                  <span>
                    {isFullMatch
                      ? '100% compatível'
                      : `${Math.round(matchRatio * 100)}% compatível`}
                  </span>
                </span>
              )}
              {establishment.kitchenCertified && (
                <span className="inline-flex items-center gap-1 text-xs text-[#3A413F]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#007677]" aria-hidden="true" />
                  <span>Cozinha verificada</span>
                </span>
              )}
            </div>
          )}

          {/* Dietary Flags as clean borderless tonal pills */}
          <div className="flex flex-wrap gap-1.5">
            {establishment.flags.map((flagId) => {
              const flag = DIETARY_FLAGS.find((f) => f.id === flagId);
              const isUserMatched = userActiveFlags.includes(flagId);
              return (
                <span
                  key={flagId}
                  className={`inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full ${
                    isUserMatched
                      ? 'bg-[#E9F3F2] text-[#00696A] font-semibold'
                      : 'bg-[#EDF1EF] text-[#3A413F] font-medium'
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: flag?.swatchColor || '#007677' }}
                    aria-hidden="true"
                  />
                  <span>{flag?.shortLabel || flagId}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Highlight Dish + Interactive Menu Preview on elevated surface */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-start justify-between gap-3 rounded-2xl bg-[#F4F6F5] px-3.5 py-2.5">
            <p className="text-xs font-semibold text-[#181C1B] line-clamp-1">
              {establishment.highlightDish.name}
            </p>
            <span className="text-xs font-bold text-[#00696A] flex-shrink-0 tabular-nums">
              {establishment.highlightDish.priceFormatted}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full min-h-[44px] flex items-center justify-between text-xs font-semibold text-[#3A413F] hover:text-[#00696A] px-3.5 py-2 rounded-xl bg-[#EDF1EF] hover:bg-[#E4EAE7] cursor-pointer transition-colors"
            aria-expanded={menuOpen}
          >
            <span>Explorar cardápio separado</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                menuOpen ? 'rotate-180 text-[#007677]' : 'text-[#525B58]'
              }`}
              aria-hidden="true"
            />
          </button>

          {menuOpen && (
            <div className="tonal-surface rounded-2xl bg-[#F4F6F5] p-3.5 space-y-3">
              {/* Segmented Control */}
              <div
                className="grid grid-cols-2 p-1 rounded-full bg-[#E4EAE7] text-xs font-semibold"
                role="group"
                aria-label="Separador de cardápio"
              >
                <button
                  type="button"
                  aria-pressed={menuTab === 'for-you'}
                  onClick={() => setMenuTab('for-you')}
                  className={`py-1.5 min-h-[34px] rounded-full transition-colors cursor-pointer ${
                    menuTab === 'for-you'
                      ? 'bg-white text-[#181C1B] shadow-2xs'
                      : 'text-[#525B58] hover:text-[#181C1B]'
                  }`}
                >
                  Para você
                </button>
                <button
                  type="button"
                  aria-pressed={menuTab === 'others'}
                  onClick={() => setMenuTab('others')}
                  className={`py-1.5 min-h-[34px] rounded-full transition-colors cursor-pointer ${
                    menuTab === 'others'
                      ? 'bg-white text-[#181C1B] shadow-2xs'
                      : 'text-[#525B58] hover:text-[#181C1B]'
                  }`}
                >
                  Outros Itens
                </button>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold text-[#181C1B]">{activeDish.name}</span>
                  <span className="text-xs font-bold text-[#181C1B] tabular-nums flex-shrink-0">
                    {activeDish.priceFormatted}
                  </span>
                </div>
                <p className="text-xs text-[#525B58] leading-snug">{activeDish.description}</p>
                <div className="text-[11px] text-[#525B58]">
                  <strong className="text-[#181C1B]">Ingredientes:</strong>{' '}
                  {activeDish.ingredients.join(', ')}
                </div>
                {menuTab === 'for-you' ? (
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#137333] bg-[#E6F4EA] px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Compatível com o filtro selecionado</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#7A271A] bg-[#FDF1EF] px-2.5 py-1 rounded-full">
                    <AlertCircle className="w-3.5 h-3.5 text-[#B42318]" aria-hidden="true" />
                    <span>
                      {activeDish.allergenAlerts?.join(' · ') ||
                        'Contém restrições fora do seu perfil'}
                    </span>
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
