import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  User, 
  UtensilsCrossed, 
  Compass, 
  Heart
} from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'places' | 'map' | 'favorites' | 'profile'>('places');
  const [favoritedIds, setFavoritedIds] = useState<string[]>(['est-1']);

  const toggleFavorite = (id: string) => {
    setFavoritedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative mx-auto w-[320px] sm:w-[340px] rounded-[50px] p-3.5 bg-[#1F2937] shadow-2xl shadow-[#009C9D]/20 ring-1 ring-slate-800 select-none">
      {/* Outer Phone Bezel Buttons */}
      <div className="absolute -left-1 top-24 h-10 w-1 bg-slate-700 rounded-l-sm" />
      <div className="absolute -left-1 top-38 h-12 w-1 bg-slate-700 rounded-l-sm" />
      <div className="absolute -right-1 top-28 h-16 w-1 bg-slate-700 rounded-r-sm" />

      {/* Screen Frame */}
      <div className="relative w-full h-[640px] rounded-[42px] bg-white overflow-hidden flex flex-col justify-between border-4 border-slate-900 font-sans">
        
        {/* Dynamic Island / Speaker */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-950 rounded-full z-40 flex items-center justify-end pr-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800" />
        </div>

        {/* Top Status Bar */}
        <div className="pt-2 px-6 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-800 z-30">
          <span>09:41</span>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span className="font-bold">5G</span>
            <div className="w-4 h-2.5 border border-slate-700 rounded-xs p-0.5 flex items-center">
              <div className="w-2.5 h-full bg-slate-800 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Main Content Area (Scrollable Discovery Screen mirroring helprest-app/app/(tabs)/(places)/index.tsx) */}
        <div className="flex-1 overflow-y-auto px-3.5 pt-2 pb-16 space-y-4 scrollbar-none">
          
          {/* Authentic HelpRest Floating UserBar (matching helprest-app/components/ui/UserBar.tsx) */}
          <div className="bg-white rounded-full py-2 px-3.5 shadow-md border border-slate-100 flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="w-5 h-5 text-[#9BA1A6] flex-shrink-0" />
              <div className="flex items-center gap-1.5 text-xs text-[#9BA1A6] font-semibold">
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Pesquise aqui</span>
              </div>
            </div>
            {/* User Profile Avatar */}
            <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src="/assets/logos/helprest_logo_green.svg"
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SECTION 1: "para você" (matching helprest-app Section 1) */}
          <div>
            <div className="flex items-center justify-between mb-2 px-0.5">
              <h3 className="text-sm font-bold text-[#11181C] lowercase tracking-tight">
                para você
              </h3>
              <span className="text-[10px] text-[#009C9D] font-bold">Ver todos</span>
            </div>

            {/* Horizontal Scroll of authentic Card.tsx */}
            <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
              
              {/* Card 1 */}
              <div className="flex-shrink-0 w-[142px] border border-[#DDD] rounded-xl p-1 bg-white shadow-2xs space-y-1.5">
                <div className="relative w-full h-[110px] rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src="/assets/alimentos/0.jpeg"
                    alt="Prato Seguro"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 left-1 text-[9px] font-bold bg-[#009C9D] text-white px-1.5 py-0.5 rounded-full font-mono uppercase">
                    MATCH 100%
                  </span>
                </div>
                <div className="px-1 flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0">
                    <img src="/assets/places/0.jpeg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xs font-bold text-[#333] truncate">
                    Bistrô Sem Glúten
                  </h4>
                </div>
                <div className="px-1 flex items-center justify-between text-[10px] text-[#333]">
                  <span>450m</span>
                  <span>•</span>
                  <span className="bg-[#009C9D] text-white text-[9px] px-1.5 py-0.5 rounded font-mono uppercase font-bold">
                    GLÚTEN
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-shrink-0 w-[142px] border border-[#DDD] rounded-xl p-1 bg-white shadow-2xs space-y-1.5">
                <div className="relative w-full h-[110px] rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src="/assets/alimentos/1.jpeg"
                    alt="Prato Seguro"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 left-1 text-[9px] font-bold bg-[#009C9D] text-white px-1.5 py-0.5 rounded-full font-mono uppercase">
                    AUDITADO
                  </span>
                </div>
                <div className="px-1 flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0">
                    <img src="/assets/places/1.jpeg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xs font-bold text-[#333] truncate">
                    Verde Vida Vegano
                  </h4>
                </div>
                <div className="px-1 flex items-center justify-between text-[10px] text-[#333]">
                  <span>800m</span>
                  <span>•</span>
                  <span className="bg-[#009C9D] text-white text-[9px] px-1.5 py-0.5 rounded font-mono uppercase font-bold">
                    VEGANO
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex-shrink-0 w-[142px] border border-[#DDD] rounded-xl p-1 bg-white shadow-2xs space-y-1.5">
                <div className="relative w-full h-[110px] rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src="/assets/alimentos/2.jpeg"
                    alt="Prato Seguro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-1 flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0">
                    <img src="/assets/places/2.jpeg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xs font-bold text-[#333] truncate">
                    Café Sem Lactose
                  </h4>
                </div>
                <div className="px-1 flex items-center justify-between text-[10px] text-[#333]">
                  <span>1.2km</span>
                  <span>•</span>
                  <span className="bg-[#009C9D] text-white text-[9px] px-1.5 py-0.5 rounded font-mono uppercase font-bold">
                    LACTOSE
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 2: "próximos de você" (matching helprest-app CardHorizontal.tsx list) */}
          <div>
            <div className="flex items-center justify-between mb-2 px-0.5">
              <h3 className="text-sm font-bold text-[#11181C] lowercase tracking-tight">
                próximos de você
              </h3>
            </div>

            <div className="space-y-2.5">
              
              {/* Item 1 - CardHorizontal */}
              <div className="flex items-center gap-2.5 border-b border-[#DDD] pb-2.5">
                {/* 62px IconCircle */}
                <div className="w-[58px] h-[58px] rounded-full overflow-hidden border border-[#DDD] flex-shrink-0 bg-slate-100">
                  <img src="/assets/places/0.jpeg" alt="Verde Essência" className="w-full h-full object-cover" />
                </div>
                {/* Info Container */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-[#333] block">Patrocinado</span>
                  <h4 className="text-xs font-bold text-[#333] truncate leading-tight">
                    Verde Essência Bistrô
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#333] mt-0.5 flex-wrap">
                    <span className="text-[#F7CC33] font-bold">★ 4.9</span>
                    <span>•</span>
                    <span className="text-[10px]">800m</span>
                    <span>•</span>
                    <span className="bg-[#009C9D] text-white text-[8px] px-1.5 py-0.2 rounded font-mono uppercase font-bold">
                      SEM GLÚTEN
                    </span>
                  </div>
                </div>
                {/* HeartClicable */}
                <button
                  type="button"
                  onClick={() => toggleFavorite('est-1')}
                  className="p-1.5 flex-shrink-0 cursor-pointer"
                  aria-label="Favoritar"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favoritedIds.includes('est-1')
                        ? 'fill-[#FF533F] text-[#FF533F]'
                        : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {/* Item 2 - CardHorizontal */}
              <div className="flex items-center gap-2.5 border-b border-[#DDD] pb-2.5">
                <div className="w-[58px] h-[58px] rounded-full overflow-hidden border border-[#DDD] flex-shrink-0 bg-slate-100">
                  <img src="/assets/places/1.jpeg" alt="Terra & Raiz" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#333] truncate leading-tight">
                    Terra & Raiz Botânica
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#333] mt-0.5 flex-wrap">
                    <span className="text-[#F7CC33] font-bold">★ 4.8</span>
                    <span>•</span>
                    <span className="text-[10px]">1,4km</span>
                    <span>•</span>
                    <span className="bg-[#009C9D] text-white text-[8px] px-1.5 py-0.2 rounded font-mono uppercase font-bold">
                      VEGANO
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleFavorite('est-2')}
                  className="p-1.5 flex-shrink-0 cursor-pointer"
                  aria-label="Favoritar"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favoritedIds.includes('est-2')
                        ? 'fill-[#FF533F] text-[#FF533F]'
                        : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {/* Item 3 - CardHorizontal */}
              <div className="flex items-center gap-2.5 border-b border-[#DDD] pb-2.5">
                <div className="w-[58px] h-[58px] rounded-full overflow-hidden border border-[#DDD] flex-shrink-0 bg-slate-100">
                  <img src="/assets/places/2.jpeg" alt="Aroma & Grão" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#333] truncate leading-tight">
                    Aroma & Grão Inclusiva
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#333] mt-0.5 flex-wrap">
                    <span className="text-[#F7CC33] font-bold">★ 4.9</span>
                    <span>•</span>
                    <span className="text-[10px]">2,1km</span>
                    <span>•</span>
                    <span className="bg-[#009C9D] text-white text-[8px] px-1.5 py-0.2 rounded font-mono uppercase font-bold">
                      SEM LACTOSE
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleFavorite('est-3')}
                  className="p-1.5 flex-shrink-0 cursor-pointer"
                  aria-label="Favoritar"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favoritedIds.includes('est-3')
                        ? 'fill-[#FF533F] text-[#FF533F]'
                        : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Authentic Bottom Tabs Bar (mirroring helprest-app Expo Router tabs: (places), (map), (favorites), (profile)) */}
        <div className="absolute bottom-0 inset-x-0 bg-white border-t border-[#DDD] px-6 py-2 flex items-center justify-between z-30">
          <button
            type="button"
            onClick={() => setActiveTab('places')}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold cursor-pointer ${
              activeTab === 'places' ? 'text-[#009C9D]' : 'text-[#687076]'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Lugares</span>
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('map')}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold cursor-pointer ${
              activeTab === 'map' ? 'text-[#009C9D]' : 'text-[#687076]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Mapa</span>
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('favorites')}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold cursor-pointer ${
              activeTab === 'favorites' ? 'text-[#FF533F]' : 'text-[#687076]'
            }`}
          >
            <Heart className={`w-4 h-4 ${activeTab === 'favorites' ? 'fill-[#FF533F]' : ''}`} />
            <span>Favoritos</span>
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold cursor-pointer ${
              activeTab === 'profile' ? 'text-[#009C9D]' : 'text-[#687076]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Perfil</span>
          </button>
        </div>

      </div>
    </div>
  );
};
