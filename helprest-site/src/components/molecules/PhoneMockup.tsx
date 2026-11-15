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

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
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
    <div className="relative mx-auto w-[312px] sm:w-[332px] rounded-[46px] p-3 bg-[#181E22] shadow-[0_24px_60px_-15px_rgba(17,24,28,0.22)] ring-1 ring-black/10 select-none">
      {/* Hardware Side Keys */}
      <div className="absolute -left-[3px] top-24 h-9 w-[3px] bg-[#2D353A] rounded-l-sm" />
      <div className="absolute -left-[3px] top-36 h-11 w-[3px] bg-[#2D353A] rounded-l-sm" />
      <div className="absolute -right-[3px] top-28 h-14 w-[3px] bg-[#2D353A] rounded-r-sm" />

      {/* Inner Phone Viewport matching helprest-app #FAFAFA / #FFFFFF */}
      <div className="relative w-full h-[630px] rounded-[36px] bg-[#FAFAFA] overflow-hidden flex flex-col justify-between border-[3px] border-[#11181C] font-sans">
        {/* Top Notch & Android/iOS Status Bar */}
        <div className="bg-white/95 pt-2.5 px-5 pb-1.5 flex items-center justify-between text-[10px] font-bold text-[#11181C] z-30 border-b border-[#EAEAEA]/70">
          <span>09:41</span>
          <div className="w-16 h-3.5 bg-[#11181C] rounded-full" />
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-3.5 h-2 border border-[#11181C] rounded-[2px] p-[1px]">
              <div className="w-2 h-full bg-[#11181C]" />
            </div>
          </div>
        </div>

        {/* DETAIL SCREEN OVERLAY (helprest-app/app/(app)/details/[id].tsx) */}
        {selectedPlace ? (
          <div className="flex-1 flex flex-col bg-[#FAFAFA] overflow-y-auto scrollbar-none pb-20">
            {/* Banner Photo */}
            <div className="relative h-36 bg-[#E0F2F1] flex-shrink-0">
              <img
                src={selectedPlace.imageUrl}
                alt={selectedPlace.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPlace(null)}
                aria-label="Voltar"
                className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 shadow-xs flex items-center justify-center text-[#11181C] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={(e) => toggleFavorite(selectedPlace.id, e)}
                aria-label="Favoritar"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 shadow-xs flex items-center justify-center cursor-pointer"
              >
                <Heart
                  className={`w-4 h-4 ${
                    favoriteIds.includes(selectedPlace.id)
                      ? 'fill-[#FF533F] text-[#FF533F]'
                      : 'text-[#687076]'
                  }`}
                />
              </button>
            </div>

            {/* Overlapping Curved White Card Container matching details/[id].tsx */}
            <div className="-mt-6 rounded-t-[26px] bg-white px-4 pt-9 pb-5 relative flex-1 border-t border-[#EAEAEA]">
              {/* Circular Avatar Straddling Card Border */}
              <div
                className="absolute -top-6 left-4 w-12 h-12 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white font-bold text-xs"
                style={{ backgroundColor: selectedPlace.logoBg }}
              >
                {selectedPlace.logoInitials}
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-[#11181C] leading-snug">
                  {selectedPlace.name}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#687076]">
                  <Star className="w-3 h-3 fill-[#F7CC33] text-[#F7CC33]" />
                  <span className="font-bold text-[#11181C]">{selectedPlace.rating}</span>
                  <span>({selectedPlace.reviewCount})</span>
                  <span>•</span>
                  <span>{selectedPlace.distanceFormatted}</span>
                </div>

                {/* App Flags Row */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {selectedPlace.flags.slice(0, 3).map((fid) => {
                    const f = DIETARY_FLAGS.find((item) => item.id === fid);
                    return (
                      <span
                        key={fid}
                        className="font-mono text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-[#F4FDFB] text-[#007E7F] border border-[#B2DFDB]"
                      >
                        {f?.shortLabel || fid}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* "Para você" / "Outros Itens" Segmented Pill Bar */}
              <div className="grid grid-cols-2 p-0.5 rounded-full bg-[#E0E0E0] text-[10px] font-bold mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setDetailTab('for-you');
                    setShowIngredients(false);
                  }}
                  className={`py-1.5 rounded-full transition-colors cursor-pointer ${
                    detailTab === 'for-you' ? 'bg-white text-[#11181C]' : 'text-[#687076]'
                  }`}
                >
                  Para você
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDetailTab('others');
                    setShowIngredients(false);
                  }}
                  className={`py-1.5 rounded-full transition-colors cursor-pointer ${
                    detailTab === 'others' ? 'bg-white text-[#11181C]' : 'text-[#687076]'
                  }`}
                >
                  Outros Itens
                </button>
              </div>

              {/* Active Dish Card mirroring ProductItem / ProductBottomSheet */}
              {(() => {
                const dish =
                  detailTab === 'for-you'
                    ? selectedPlace.highlightDish
                    : selectedPlace.otherDish;
                return (
                  <div className="mt-3 border border-[#EAEAEA] rounded-xl p-2.5 bg-[#FAFAFA] space-y-2">
                    <div className="flex gap-2.5 items-start">
                      <img
                        src={dish.imageUrl || selectedPlace.imageUrl}
                        alt={dish.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <span className="text-[11px] font-bold text-[#11181C] leading-tight">
                            {dish.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#687076] line-clamp-2 mt-0.5">
                          {dish.description}
                        </p>
                        <span className="text-[11px] font-bold text-[#007E7F] block mt-1">
                          {dish.priceFormatted}
                        </span>
                      </div>
                    </div>

                    {/* BottomSheet Tab Simulator: Descrição vs Ingredientes */}
                    <button
                      type="button"
                      onClick={() => setShowIngredients(!showIngredients)}
                      className="w-full text-[10px] font-bold text-[#007E7F] text-left cursor-pointer hover:underline"
                    >
                      {showIngredients ? 'Ocultar ingredientes ↑' : 'Ver ingredientes & ficha ↓'}
                    </button>

                    {showIngredients && (
                      <div className="pt-1.5 border-t border-[#EAEAEA] space-y-1 text-[10px]">
                        <div className="text-[#333333]">
                          <strong>Ingredientes:</strong> {dish.ingredients.join(', ')}
                        </div>
                        {detailTab === 'for-you' ? (
                          <div className="inline-flex items-center gap-1 text-[#186A3B] font-bold">
                            <CheckCircle2 className="w-3 h-3" /> Seguro para o perfil ativo
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1 text-[#8C1D1D] font-bold">
                            <AlertCircle className="w-3 h-3" /> {dish.allergenAlerts?.join(', ')}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Geofence Visit CTA matching details/[id] floating button */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setVisitToast(true)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#009C9D] hover:bg-[#007E7F] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Registrar Visita (raio 100m)</span>
                </button>
                {visitToast && (
                  <p className="mt-1.5 text-[10px] text-center text-[#007E7F] font-medium">
                    GPS valida distância ≤ 100m no momento do envio no app.
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* TAB VIEWS (Início / Lugares / Favoritos / Social) */
          <div className="flex-1 overflow-y-auto scrollbar-none pb-16">
            {/* Floating UserBar inside Map (Início) and Lugares */}
            {(activeTab === 'home' || activeTab === 'places') && (
              <div className="px-3 pt-2.5 pb-2 sticky top-0 z-20 bg-[#FAFAFA]/90 backdrop-blur-xs">
                <div className="bg-white rounded-full py-1.5 px-3 border border-[#DDDDDD] shadow-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    <MapPin className="w-4 h-4 text-[#009C9D] flex-shrink-0" />
                    <Search className="w-3 h-3 text-[#9BA1A6] flex-shrink-0" />
                    <span className="text-[11px] text-[#687076] font-medium truncate">
                      Batel, Curitiba • Pesquise aqui
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#E0F2F1] text-[#007E7F] font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                    CM
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: INÍCIO (Curitiba Vector Map + Official Pins) */}
            {activeTab === 'home' && (
              <div className="px-3 pb-3 space-y-2.5">
                <div className="relative h-[380px] rounded-2xl overflow-hidden border border-[#DDDDDD] bg-[#F1F5F4]">
                  {/* Stylized clean Curitiba street grid */}
                  <svg
                    viewBox="0 0 300 380"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  >
                    <rect width="300" height="380" fill="#EFF3F2" />
                    {/* Parks */}
                    <rect x="20" y="20" width="76" height="58" rx="12" fill="#DDF0E4" />
                    <rect x="196" y="252" width="84" height="68" rx="14" fill="#DDF0E4" />
                    {/* Clean street arteries */}
                    <path
                      d="M0 95 L300 120 M0 198 L300 178 M0 295 L300 265 M82 0 L98 380 M188 0 L172 380 M246 0 L262 380"
                      stroke="#FFFFFF"
                      strokeWidth="7"
                    />
                    <path
                      d="M35 0 L285 380"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                    />
                    {/* Current User 100m Geofence Radius Pulse */}
                    <circle cx="145" cy="182" r="34" fill="#009C9D" fillOpacity="0.12" />
                    <circle cx="145" cy="182" r="6" fill="#009C9D" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>

                  {/* Street Label */}
                  <span className="absolute top-3 left-3 bg-white/90 text-[#687076] font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#EAEAEA]">
                    CURITIBA • PR
                  </span>

                  {/* Official HelpRest Map Pins from /assets/flags/ */}
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
                          alt={est.name}
                          className="w-8 h-8 object-contain drop-shadow-sm"
                        />
                      </button>
                    );
                  })}

                  {/* Bottom Floating Selected Place Card */}
                  <div
                    onClick={() => openDetails(pinTarget)}
                    className="absolute bottom-3 inset-x-3 bg-white rounded-2xl p-2.5 border border-[#EAEAEA] shadow-md flex items-center gap-2.5 cursor-pointer hover:border-[#009C9D]"
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
                      <div className="flex items-center gap-1 text-[10px] text-[#687076]">
                        <Star className="w-3 h-3 fill-[#F7CC33] text-[#F7CC33]" />
                        <span className="font-bold text-[#11181C]">{pinTarget.rating}</span>
                        <span>•</span>
                        <span>{pinTarget.distanceFormatted}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#007E7F] px-2 py-1 rounded-full bg-[#F4FDFB]">
                      Abrir
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LUGARES (Matches (places)/index.tsx & CardHorizontal.tsx) */}
            {activeTab === 'places' && (
              <div className="px-3.5 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-[#11181C] lowercase tracking-tight">
                      para você
                    </h4>
                    <span className="text-[10px] font-bold text-[#007E7F]">Match 100%</span>
                  </div>

                  <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                    {SAMPLE_ESTABLISHMENTS.slice(0, 3).map((est) => (
                      <div
                        key={est.id}
                        onClick={() => openDetails(est)}
                        className="flex-shrink-0 w-[138px] border border-[#DDDDDD] rounded-xl p-1.5 bg-white space-y-1.5 cursor-pointer hover:border-[#009C9D] transition-colors"
                      >
                        <div className="relative h-[96px] rounded-lg overflow-hidden bg-[#F2F4F5]">
                          <img
                            src={est.imageUrl}
                            alt={est.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="px-0.5 space-y-1">
                          <h5 className="text-[11px] font-bold text-[#11181C] truncate">
                            {est.name}
                          </h5>
                          <div className="flex items-center justify-between text-[10px] text-[#687076]">
                            <span>{est.distanceFormatted}</span>
                            <span className="font-mono text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-[#009C9D] text-white">
                              {DIETARY_FLAGS.find((f) => f.id === est.flags[0])?.shortLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-[#11181C] lowercase tracking-tight">
                      próximos de você
                    </h4>
                    <span className="text-[10px] text-[#687076]">Toque para abrir</span>
                  </div>

                  <div className="space-y-2">
                    {SAMPLE_ESTABLISHMENTS.slice(0, 4).map((est) => {
                      const isFav = favoriteIds.includes(est.id);
                      const firstFlag = DIETARY_FLAGS.find((f) => f.id === est.flags[0]);
                      return (
                        <div
                          key={est.id}
                          onClick={() => openDetails(est)}
                          className="flex items-center gap-2.5 bg-white rounded-xl p-2 border border-[#EAEAEA] hover:border-[#009C9D] cursor-pointer transition-colors"
                        >
                          <div
                            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                            style={{ backgroundColor: est.logoBg }}
                          >
                            {est.logoInitials}
                          </div>
                          <div className="flex-1 min-w-0">
                            {est.isSponsor && (
                              <span className="text-[9px] text-[#687076] block leading-none mb-0.5">
                                Destaque próximo
                              </span>
                            )}
                            <h5 className="text-xs font-bold text-[#11181C] truncate leading-tight">
                              {est.name}
                            </h5>
                            <div className="flex items-center gap-1.5 text-[10px] text-[#687076] mt-0.5">
                              <span className="font-bold text-[#11181C] flex items-center gap-0.5">
                                <Star className="w-2.5 h-2.5 fill-[#F7CC33] text-[#F7CC33]" />
                                {est.rating}
                              </span>
                              <span>•</span>
                              <span>{est.distanceFormatted}</span>
                              <span>•</span>
                              <span className="font-mono text-[8px] font-bold uppercase text-[#007E7F]">
                                {firstFlag?.shortLabel}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => toggleFavorite(est.id, e)}
                            aria-label={`Favoritar ${est.name}`}
                            className="p-1.5 cursor-pointer"
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                isFav ? 'fill-[#FF533F] text-[#FF533F]' : 'text-[#9BA1A6]'
                              }`}
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: FAVORITOS (Matches (favorites)/index.tsx Segmented Locais / Produtos) */}
            {activeTab === 'favorites' && (
              <div className="px-3.5 pt-3 space-y-3">
                <h4 className="text-sm font-bold text-[#11181C]">Meus Favoritos</h4>

                <div className="grid grid-cols-2 p-0.5 rounded-full bg-[#E0E0E0] text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => setFavoriteMode('places')}
                    className={`py-1.5 rounded-full transition-colors cursor-pointer ${
                      favoriteMode === 'places' ? 'bg-white text-[#11181C]' : 'text-[#687076]'
                    }`}
                  >
                    Locais ({favoritePlaces.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setFavoriteMode('products')}
                    className={`py-1.5 rounded-full transition-colors cursor-pointer ${
                      favoriteMode === 'products' ? 'bg-white text-[#11181C]' : 'text-[#687076]'
                    }`}
                  >
                    Produtos ({favoritePlaces.length})
                  </button>
                </div>

                {favoritePlaces.length === 0 ? (
                  <div className="py-12 text-center text-xs text-[#687076]">
                    Toque no coração em Lugares para favoritar.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {favoritePlaces.map((est) => (
                      <div
                        key={est.id}
                        onClick={() => openDetails(est)}
                        className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-[#EAEAEA] cursor-pointer"
                      >
                        <img
                          src={
                            favoriteMode === 'places'
                              ? est.imageUrl
                              : est.highlightDish.imageUrl || est.imageUrl
                          }
                          alt={est.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-[#11181C] truncate">
                            {favoriteMode === 'places' ? est.name : est.highlightDish.name}
                          </h5>
                          <p className="text-[10px] text-[#687076] truncate">
                            {favoriteMode === 'places'
                              ? `${est.neighborhood} • ${est.distanceFormatted}`
                              : `${est.name} • ${est.highlightDish.priceFormatted}`}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => toggleFavorite(est.id, e)}
                          className="p-1 cursor-pointer"
                        >
                          <Heart className="w-4 h-4 fill-[#FF533F] text-[#FF533F]" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: SOCIAL (Matches (social)/index.tsx #F4FDFB NOVA INAUGURAÇÃO + Visits) */}
            {activeTab === 'social' && (
              <div className="px-3.5 pt-3 space-y-3">
                <h4 className="text-sm font-bold text-[#11181C]">Feed Social</h4>

                {/* Authentic #F4FDFB / #B2DFDB New Opening Card */}
                <div className="rounded-xl p-3 bg-[#F4FDFB] border border-[#B2DFDB] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase text-[#007E7F]">
                    <Sparkles className="w-3 h-3" />
                    <span>Nova inauguração</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h5 className="text-xs font-bold text-[#11181C]">
                        Forneria & Café da Praça
                      </h5>
                      <p className="text-[10px] text-[#687076]">
                        Centro • Forno exclusivo sem glúten
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openDetails(SAMPLE_ESTABLISHMENTS[2])}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#009C9D] text-white cursor-pointer"
                    >
                      Ver
                    </button>
                  </div>
                </div>

                {/* Verified Visit Post */}
                <div className="bg-white rounded-xl border border-[#EAEAEA] p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#009C9D] text-white text-[10px] font-bold flex items-center justify-center">
                        CM
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#11181C]">Camila Mendonça</div>
                        <div className="text-[9px] text-[#687076]">Visitou Cantina Verde • há 2d</div>
                      </div>
                    </div>
                    <span className="font-mono text-[9px] font-bold text-[#007E7F] bg-[#F4FDFB] px-1.5 py-0.5 rounded-full">
                      GPS 14m
                    </span>
                  </div>
                  <img
                    src="/assets/showcase/dish-gluten-free.jpg"
                    alt="Prato visitado"
                    className="w-full h-32 rounded-lg object-cover"
                  />
                  <p className="text-[11px] text-[#333333] leading-snug">
                    Gnocchi de mandioquinha aprovado. Cardápio “Para você” facilitou tudo!
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom 4-Tab Bar mirroring helprest-app/(app)/(tabs)/_layout.tsx */}
        <nav
          aria-label="Navegação do simulador do app"
          className="absolute bottom-0 inset-x-0 bg-white border-t border-[#EAEAEA] px-4 py-2 flex items-center justify-around z-30"
        >
          <button
            type="button"
            onClick={() => {
              setSelectedPlace(null);
              setActiveTab('home');
            }}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-bold cursor-pointer ${
              activeTab === 'home' && !selectedPlace ? 'text-[#009C9D]' : 'text-[#687076]'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Início</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedPlace(null);
              setActiveTab('places');
            }}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-bold cursor-pointer ${
              activeTab === 'places' || selectedPlace ? 'text-[#009C9D]' : 'text-[#687076]'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Lugares</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedPlace(null);
              setActiveTab('favorites');
            }}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-bold cursor-pointer ${
              activeTab === 'favorites' && !selectedPlace ? 'text-[#FF533F]' : 'text-[#687076]'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                activeTab === 'favorites' && !selectedPlace ? 'fill-[#FF533F]' : ''
              }`}
            />
            <span>Favoritos</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedPlace(null);
              setActiveTab('social');
            }}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-bold cursor-pointer ${
              activeTab === 'social' && !selectedPlace ? 'text-[#009C9D]' : 'text-[#687076]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Social</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
