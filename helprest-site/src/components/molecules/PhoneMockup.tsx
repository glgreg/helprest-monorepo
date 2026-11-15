import React, { useState } from 'react';
import {
  MapPin,
  Search,
  Home,
  UtensilsCrossed,
  Heart,
  Users,
  ChevronLeft,
  Star,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Camera,
} from 'lucide-react';
import { SAMPLE_ESTABLISHMENTS } from '../../data/establishments';
import { DIETARY_FLAGS } from '../../data/flags';
import { Establishment } from '../../types';

type AppTab = 'home' | 'places' | 'favorites' | 'social';

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>('places');
  const [selectedPlace, setSelectedPlace] = useState<Establishment | null>(null);
  const [detailTab, setDetailTab] = useState<'for-you' | 'others'>('for-you');
  const [showIngredients, setShowIngredients] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['est-1', 'est-3']);
  const [favoriteMode, setFavoriteMode] = useState<'places' | 'products'>('places');
  const [activePinId, setActivePinId] = useState<string>('est-1');
  const [visitToast, setVisitToast] = useState<boolean>(false);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const openDetails = (place: Establishment) => {
    setSelectedPlace(place);
    setDetailTab('for-you');
    setShowIngredients(false);
    setVisitToast(false);
  };

  const favoritePlaces = SAMPLE_ESTABLISHMENTS.filter((e) => favoriteIds.includes(e.id));
  const pinTarget =
    SAMPLE_ESTABLISHMENTS.find((e) => e.id === activePinId) || SAMPLE_ESTABLISHMENTS[0];

  return (
    <div className="relative mx-auto w-[308px] sm:w-[326px] rounded-[44px] p-3 bg-[#181C1E] shadow-[0_24px_60px_-14px_rgba(17,24,28,0.28)] select-none">
      {/* Hardware Side Keys */}
      <div className="absolute -left-[3px] top-24 h-9 w-[3px] bg-[#2D3338] rounded-l-sm" />
      <div className="absolute -left-[3px] top-36 h-11 w-[3px] bg-[#2D3338] rounded-l-sm" />
      <div className="absolute -right-[3px] top-28 h-14 w-[3px] bg-[#2D3338] rounded-r-sm" />

      {/* Inner Phone Viewport */}
      <div className="relative w-full h-[618px] rounded-[34px] bg-[#F7F7F8] overflow-hidden flex flex-col justify-between font-sans">
        {/* Top Status Bar */}
        <div className="bg-white pt-2.5 px-5 pb-1.5 flex items-center justify-between text-[10px] font-bold text-[#11181C] z-30">
          <span>09:41</span>
          <div className="w-16 h-3.5 bg-[#11181C] rounded-full" />
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-3.5 h-2 border border-[#11181C] rounded-[2px] p-[1px]">
              <div className="w-2 h-full bg-[#11181C]" />
            </div>
          </div>
        </div>

        {/* DETAIL SCREEN OVERLAY */}
        {selectedPlace ? (
          <div className="flex-1 flex flex-col bg-[#F7F7F8] overflow-y-auto scrollbar-none pb-20">
            <div className="relative h-36 bg-[#D8F3F3] flex-shrink-0">
              <img
                src={selectedPlace.imageUrl}
                alt={selectedPlace.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPlace(null)}
                aria-label="Voltar"
                className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 shadow-sm flex items-center justify-center text-[#11181C] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => toggleFavorite(selectedPlace.id)}
                aria-label={
                  favoriteIds.includes(selectedPlace.id)
                    ? `Remover ${selectedPlace.name} dos favoritos`
                    : `Favoritar ${selectedPlace.name}`
                }
                aria-pressed={favoriteIds.includes(selectedPlace.id)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 shadow-sm flex items-center justify-center cursor-pointer"
              >
                <Heart
                  className={`w-4 h-4 ${
                    favoriteIds.includes(selectedPlace.id)
                      ? 'fill-[#FF533F] text-[#FF533F]'
                      : 'text-[#596168]'
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="-mt-6 rounded-t-[24px] bg-white px-4 pt-8 pb-5 relative flex-1">
              <div
                className="absolute -top-6 left-4 w-12 h-12 rounded-full ring-4 ring-white shadow-sm flex items-center justify-center text-white font-bold text-xs"
                style={{ backgroundColor: selectedPlace.logoBg }}
                aria-hidden="true"
              >
                {selectedPlace.logoInitials}
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-[#11181C] leading-snug">
                  {selectedPlace.name}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#596168]">
                  <Star className="w-3 h-3 fill-[#E5A910] text-[#E5A910]" aria-hidden="true" />
                  <span className="font-bold text-[#11181C]">{selectedPlace.rating}</span>
                  <span>({selectedPlace.reviewCount})</span>
                  <span>·</span>
                  <span>{selectedPlace.distanceFormatted}</span>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {selectedPlace.flags.slice(0, 3).map((fid) => {
                    const f = DIETARY_FLAGS.find((item) => item.id === fid);
                    return (
                      <span
                        key={fid}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EFFBFB] text-[#00797A]"
                      >
                        {f?.shortLabel || fid}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Segmented Pill Bar */}
              <div
                className="grid grid-cols-2 p-0.5 rounded-full bg-[#E6E8EB] text-[10px] font-semibold mt-4"
                role="group"
                aria-label="Separador de cardápio"
              >
                <button
                  type="button"
                  aria-pressed={detailTab === 'for-you'}
                  onClick={() => {
                    setDetailTab('for-you');
                    setShowIngredients(false);
                  }}
                  className={`py-1.5 rounded-full transition-colors cursor-pointer ${
                    detailTab === 'for-you' ? 'bg-white text-[#11181C]' : 'text-[#596168]'
                  }`}
                >
                  Para você
                </button>
                <button
                  type="button"
                  aria-pressed={detailTab === 'others'}
                  onClick={() => {
                    setDetailTab('others');
                    setShowIngredients(false);
                  }}
                  className={`py-1.5 rounded-full transition-colors cursor-pointer ${
                    detailTab === 'others' ? 'bg-white text-[#11181C]' : 'text-[#596168]'
                  }`}
                >
                  Outros Itens
                </button>
              </div>

              {(() => {
                const dish =
                  detailTab === 'for-you'
                    ? selectedPlace.highlightDish
                    : selectedPlace.otherDish;
                return (
                  <div className="mt-3 rounded-2xl p-3 bg-[#F7F7F8] space-y-2">
                    <div className="flex gap-2.5 items-start">
                      <img
                        src={dish.imageUrl || selectedPlace.imageUrl}
                        alt={dish.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-[#11181C] leading-tight block">
                          {dish.name}
                        </span>
                        <p className="text-[10px] text-[#596168] line-clamp-2 mt-0.5">
                          {dish.description}
                        </p>
                        <span className="text-[11px] font-bold text-[#00797A] block mt-1 tabular-nums">
                          {dish.priceFormatted}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowIngredients(!showIngredients)}
                      aria-expanded={showIngredients}
                      className="w-full text-[11px] font-semibold text-[#00797A] text-left cursor-pointer hover:underline py-1"
                    >
                      {showIngredients ? 'Ocultar ingredientes' : 'Ver ingredientes'}
                    </button>

                    {showIngredients && (
                      <div className="pt-2 border-t border-[#E6E8EB] space-y-1.5 text-[10px]">
                        <div className="text-[#3F454A]">
                          <strong className="text-[#11181C]">Ingredientes:</strong>{' '}
                          {dish.ingredients.join(', ')}
                        </div>
                        {detailTab === 'for-you' ? (
                          <div className="inline-flex items-center gap-1 text-[#137333] font-semibold">
                            <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                            <span>Seguro para o perfil ativo</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1 text-[#7A271A] font-semibold">
                            <AlertCircle className="w-3 h-3 text-[#B42318]" aria-hidden="true" />
                            <span>{dish.allergenAlerts?.join(', ')}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })()}

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setVisitToast(true)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#009C9D] hover:bg-[#1BA6A7] text-[#09181A] text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Camera className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Registrar visita (raio 100m)</span>
                </button>
                {visitToast && (
                  <p className="mt-1.5 text-[10px] text-center text-[#00797A] font-medium">
                    GPS valida distância ≤ 100m no momento do envio no app.
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* TAB VIEWS */
          <div className="flex-1 overflow-y-auto scrollbar-none pb-16">
            {(activeTab === 'home' || activeTab === 'places') && (
              <div className="px-3 pt-2.5 pb-2 sticky top-0 z-20 bg-[#F7F7F8]/95 backdrop-blur-xs">
                <div className="bg-white rounded-full py-1.5 px-3 shadow-[0_1px_4px_rgba(17,24,28,0.06)] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    <MapPin className="w-4 h-4 text-[#009C9D] flex-shrink-0" aria-hidden="true" />
                    <Search className="w-3 h-3 text-[#717880] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[11px] text-[#596168] font-medium truncate">
                      Batel, Curitiba
                    </span>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full bg-[#EFFBFB] text-[#00797A] font-bold text-[10px] flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    CM
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: INÍCIO (Map + Pins) */}
            {activeTab === 'home' && (
              <div className="px-3 pb-3 space-y-2.5">
                <div className="relative h-[380px] rounded-2xl overflow-hidden bg-[#EFEFF2]">
                  <svg
                    viewBox="0 0 300 380"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  >
                    <rect width="300" height="380" fill="#EFEFF2" />
                    <rect x="20" y="20" width="76" height="58" rx="12" fill="#DCEFE8" />
                    <rect x="196" y="252" width="84" height="68" rx="14" fill="#DCEFE8" />
                    <path
                      d="M0 95 L300 120 M0 198 L300 178 M0 295 L300 265 M82 0 L98 380 M188 0 L172 380 M246 0 L262 380"
                      stroke="#FFFFFF"
                      strokeWidth="7"
                    />
                    <path d="M35 0 L285 380" stroke="#FFFFFF" strokeWidth="4" />
                    <circle cx="145" cy="182" r="34" fill="#009C9D" fillOpacity="0.16" />
                    <circle cx="145" cy="182" r="6" fill="#009C9D" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>

                  <span className="absolute top-3 left-3 bg-white/95 text-[#11181C] text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-xs">
                    Curitiba, PR
                  </span>

                  {SAMPLE_ESTABLISHMENTS.slice(0, 4).map((est, idx) => {
                    const pinAssets = [
                      '/assets/flags/pin_gluten_free.png',
                      '/assets/flags/pin_vegan.png',
                      '/assets/flags/pin_vegetarian.png',
                      '/assets/flags/pin_gluten_free.png',
                    ];
                    const isSelectedPin = activePinId === est.id;
                    return (
                      <button
                        key={est.id}
                        type="button"
                        onClick={() => setActivePinId(est.id)}
                        style={{
                          left: `${est.mapPosition.x}%`,
                          top: `${est.mapPosition.y}%`,
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-full cursor-pointer transition-transform ${
                          isSelectedPin ? 'scale-120 z-20' : 'hover:scale-110 z-10'
                        }`}
                        aria-label={`Selecionar ${est.name}`}
                      >
                        <img
                          src={pinAssets[idx]}
                          alt=""
                          aria-hidden="true"
                          className="w-8 h-8 object-contain drop-shadow-sm"
                        />
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => openDetails(pinTarget)}
                    className="absolute bottom-3 inset-x-3 bg-white rounded-2xl p-2.5 shadow-[0_6px_20px_rgba(17,24,28,0.14)] flex items-center gap-2.5 cursor-pointer hover:bg-[#F7F7F8] text-left transition-colors"
                  >
                    <img
                      src={pinTarget.imageUrl}
                      alt={pinTarget.name}
                      className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold text-[#11181C] truncate">
                        {pinTarget.name}
                      </h5>
                      <div className="flex items-center gap-1 text-[10px] text-[#596168]">
                        <Star className="w-3 h-3 fill-[#E5A910] text-[#E5A910]" aria-hidden="true" />
                        <span className="font-bold text-[#11181C]">{pinTarget.rating}</span>
                        <span>·</span>
                        <span>{pinTarget.distanceFormatted}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#00797A] px-2.5 py-1 rounded-full bg-[#EFFBFB]">
                      Ver
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: LUGARES */}
            {activeTab === 'places' && (
              <div className="px-3.5 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-[#11181C] mb-2">Para você</h4>

                  <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                    {SAMPLE_ESTABLISHMENTS.slice(0, 3).map((est) => (
                      <button
                        key={est.id}
                        type="button"
                        onClick={() => openDetails(est)}
                        className="flex-shrink-0 w-[138px] text-left rounded-2xl p-1.5 bg-white shadow-[0_1px_5px_rgba(17,24,28,0.06)] hover:shadow-[0_4px_12px_rgba(17,24,28,0.1)] space-y-1.5 cursor-pointer transition-shadow"
                      >
                        <div className="relative h-[94px] rounded-xl overflow-hidden bg-[#F1F2F4]">
                          <img
                            src={est.imageUrl}
                            alt={est.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="px-1 space-y-1">
                          <h5 className="text-[11px] font-bold text-[#11181C] truncate">
                            {est.name}
                          </h5>
                          <div className="flex items-center justify-between gap-1 text-[10px] text-[#596168]">
                            <span>{est.distanceFormatted}</span>
                            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#EFFBFB] text-[#00797A] truncate">
                              {DIETARY_FLAGS.find((f) => f.id === est.flags[0])?.shortLabel}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#11181C] mb-2">Próximos de você</h4>

                  <div className="space-y-2">
                    {SAMPLE_ESTABLISHMENTS.slice(0, 4).map((est) => {
                      const isFav = favoriteIds.includes(est.id);
                      const firstFlag = DIETARY_FLAGS.find((f) => f.id === est.flags[0]);
                      return (
                        <div
                          key={est.id}
                          className="relative flex items-center gap-2.5 bg-white rounded-2xl p-2 shadow-[0_1px_5px_rgba(17,24,28,0.06)] hover:bg-[#F7F7F8] transition-colors has-[button.card-open:focus-visible]:outline has-[button.card-open:focus-visible]:outline-2 has-[button.card-open:focus-visible]:outline-[#009C9D]"
                        >
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                            style={{ backgroundColor: est.logoBg }}
                            aria-hidden="true"
                          >
                            {est.logoInitials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-bold text-[#11181C] truncate leading-tight">
                              <button
                                type="button"
                                onClick={() => openDetails(est)}
                                className="card-open text-left w-full truncate focus-visible:outline-none after:content-[''] after:absolute after:inset-0 cursor-pointer"
                              >
                                {est.name}
                              </button>
                            </h5>
                            <div className="flex items-center gap-1.5 text-[10px] text-[#596168] mt-0.5">
                              <span className="font-bold text-[#11181C] flex items-center gap-0.5">
                                <Star
                                  className="w-2.5 h-2.5 fill-[#E5A910] text-[#E5A910]"
                                  aria-hidden="true"
                                />
                                {est.rating}
                              </span>
                              <span>·</span>
                              <span>{est.distanceFormatted}</span>
                              <span>·</span>
                              <span className="font-medium text-[#00797A] truncate">
                                {firstFlag?.shortLabel}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleFavorite(est.id)}
                            aria-label={
                              isFav
                                ? `Remover ${est.name} dos favoritos`
                                : `Favoritar ${est.name}`
                            }
                            aria-pressed={isFav}
                            className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#F1F2F4]"
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                isFav ? 'fill-[#FF533F] text-[#FF533F]' : 'text-[#717880]'
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: FAVORITOS */}
            {activeTab === 'favorites' && (
              <div className="px-3.5 pt-3 space-y-3">
                <h4 className="text-sm font-bold text-[#11181C]">Meus Favoritos</h4>

                <div
                  className="grid grid-cols-2 p-0.5 rounded-full bg-[#E6E8EB] text-[11px] font-semibold"
                  role="group"
                  aria-label="Tipo de favoritos"
                >
                  <button
                    type="button"
                    aria-pressed={favoriteMode === 'places'}
                    onClick={() => setFavoriteMode('places')}
                    className={`py-1.5 rounded-full transition-colors cursor-pointer ${
                      favoriteMode === 'places' ? 'bg-white text-[#11181C]' : 'text-[#596168]'
                    }`}
                  >
                    Locais ({favoritePlaces.length})
                  </button>
                  <button
                    type="button"
                    aria-pressed={favoriteMode === 'products'}
                    onClick={() => setFavoriteMode('products')}
                    className={`py-1.5 rounded-full transition-colors cursor-pointer ${
                      favoriteMode === 'products' ? 'bg-white text-[#11181C]' : 'text-[#596168]'
                    }`}
                  >
                    Produtos ({favoritePlaces.length})
                  </button>
                </div>

                {favoritePlaces.length === 0 ? (
                  <div className="py-12 text-center text-xs text-[#596168]">
                    Nenhum favorito selecionado ainda.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {favoritePlaces.map((est) => (
                      <div
                        key={est.id}
                        className="relative flex items-center gap-2.5 bg-white p-2.5 rounded-2xl shadow-[0_1px_5px_rgba(17,24,28,0.06)] hover:bg-[#F7F7F8] transition-colors has-[button.card-open:focus-visible]:outline has-[button.card-open:focus-visible]:outline-2 has-[button.card-open:focus-visible]:outline-[#009C9D]"
                      >
                        <img
                          src={
                            favoriteMode === 'places'
                              ? est.imageUrl
                              : est.highlightDish.imageUrl || est.imageUrl
                          }
                          alt={est.name}
                          className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-[#11181C] truncate">
                            <button
                              type="button"
                              onClick={() => openDetails(est)}
                              className="card-open text-left w-full truncate focus-visible:outline-none after:content-[''] after:absolute after:inset-0 cursor-pointer"
                            >
                              {favoriteMode === 'places' ? est.name : est.highlightDish.name}
                            </button>
                          </h5>
                          <p className="text-[10px] text-[#596168] truncate">
                            {favoriteMode === 'places'
                              ? `${est.neighborhood} · ${est.distanceFormatted}`
                              : `${est.name} · ${est.highlightDish.priceFormatted}`}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleFavorite(est.id)}
                          aria-label={`Remover ${est.name} dos favoritos`}
                          aria-pressed={true}
                          className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#F1F2F4]"
                        >
                          <Heart className="w-4 h-4 fill-[#FF533F] text-[#FF533F]" aria-hidden="true" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: SOCIAL */}
            {activeTab === 'social' && (
              <div className="px-3.5 pt-3 space-y-3">
                <h4 className="text-sm font-bold text-[#11181C]">Feed Social</h4>

                <div className="rounded-2xl p-3 bg-[#EFFBFB] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#00797A]">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Nova inauguração</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h5 className="text-xs font-bold text-[#11181C]">
                        Forneria & Café da Praça
                      </h5>
                      <p className="text-[10px] text-[#596168]">
                        Centro · Forno exclusivo sem glúten
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openDetails(SAMPLE_ESTABLISHMENTS[2])}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#009C9D] text-[#09181A] cursor-pointer hover:bg-[#1BA6A7]"
                    >
                      Ver
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-[0_1px_5px_rgba(17,24,28,0.06)] p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full bg-[#009C9D] text-[#09181A] text-[10px] font-bold flex items-center justify-center"
                        aria-hidden="true"
                      >
                        CM
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#11181C]">Camila Mendonça</div>
                        <div className="text-[9px] text-[#596168]">Visitou Cantina Verde · há 2d</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#00797A] bg-[#EFFBFB] px-2 py-0.5 rounded-full">
                      14 m
                    </span>
                  </div>
                  <img
                    src="/assets/showcase/dish-gluten-free.jpg"
                    alt="Prato visitado"
                    className="w-full h-32 rounded-xl object-cover"
                  />
                  <p className="text-[11px] text-[#3F454A] leading-snug">
                    Gnocchi de mandioquinha aprovado. Cardápio “Para você” facilitou tudo!
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom 4-Tab Bar */}
        <nav
          aria-label="Navegação do simulador do app"
          className="absolute bottom-0 inset-x-0 bg-white shadow-[0_-4px_12px_rgba(17,24,28,0.05)] px-4 py-2 flex items-center justify-around z-30"
        >
          <button
            type="button"
            onClick={() => {
              setSelectedPlace(null);
              setActiveTab('home');
            }}
            aria-current={activeTab === 'home' && !selectedPlace ? 'page' : undefined}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold cursor-pointer ${
              activeTab === 'home' && !selectedPlace ? 'text-[#00797A]' : 'text-[#596168]'
            }`}
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Início</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedPlace(null);
              setActiveTab('places');
            }}
            aria-current={activeTab === 'places' || selectedPlace ? 'page' : undefined}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold cursor-pointer ${
              activeTab === 'places' || selectedPlace ? 'text-[#00797A]' : 'text-[#596168]'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
            <span>Lugares</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedPlace(null);
              setActiveTab('favorites');
            }}
            aria-current={activeTab === 'favorites' && !selectedPlace ? 'page' : undefined}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold cursor-pointer ${
              activeTab === 'favorites' && !selectedPlace ? 'text-[#C93322]' : 'text-[#596168]'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                activeTab === 'favorites' && !selectedPlace ? 'fill-[#FF533F] text-[#FF533F]' : ''
              }`}
              aria-hidden="true"
            />
            <span>Favoritos</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedPlace(null);
              setActiveTab('social');
            }}
            aria-current={activeTab === 'social' && !selectedPlace ? 'page' : undefined}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold cursor-pointer ${
              activeTab === 'social' && !selectedPlace ? 'text-[#00797A]' : 'text-[#596168]'
            }`}
          >
            <Users className="w-4 h-4" aria-hidden="true" />
            <span>Social</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
