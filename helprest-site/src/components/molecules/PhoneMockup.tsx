import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Users, 
  User, 
  Search, 
  ShieldCheck, 
  Sparkles,
  Leaf,
  WheatOff,
  MilkOff
} from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'explore' | 'map' | 'social' | 'profile'>('explore');
  const [mockActiveFlag, setMockActiveFlag] = useState<string>('gluten_free');

  return (
    <div className="relative mx-auto w-[310px] sm:w-[330px] rounded-[48px] p-3.5 bg-slate-900 shadow-2xl shadow-[#009C9D]/20 ring-1 ring-slate-800">
      {/* Outer Phone Bezel Buttons */}
      <div className="absolute -left-1 top-24 h-10 w-1 bg-slate-700 rounded-l-sm" />
      <div className="absolute -left-1 top-38 h-12 w-1 bg-slate-700 rounded-l-sm" />
      <div className="absolute -right-1 top-28 h-16 w-1 bg-slate-700 rounded-r-sm" />

      {/* Screen Frame */}
      <div className="relative w-full h-[620px] rounded-[40px] bg-slate-50 overflow-hidden flex flex-col justify-between border-4 border-slate-950">
        
        {/* Dynamic Island / Speaker */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-950 rounded-full z-40 flex items-center justify-end pr-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800" />
        </div>

        {/* Top Status Bar */}
        <div className="pt-2 px-6 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-800 select-none z-30">
          <span>12:30</span>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <div className="w-4 h-2.5 border border-slate-700 rounded-xs p-0.5 flex items-center">
              <div className="w-2.5 h-full bg-slate-800 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* App Content Area */}
        <div className="flex-1 overflow-y-auto px-4 pt-1 pb-16 space-y-3.5 select-none scrollbar-none">
          {/* In-App Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-lg bg-[#009C9D] flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold text-sm tracking-tight text-slate-900">
                Help<span className="text-[#009C9D]">Rest</span>
              </span>
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-white px-2 py-1 rounded-full border border-slate-200 shadow-2xs">
              <MapPin className="w-3 h-3 text-[#009C9D]" />
              <span>Jardins, SP</span>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <div className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-400 shadow-2xs">
              Buscar pratos, ingredientes seguros...
            </div>
          </div>

          {/* Dietary Filters Pill Strip */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Suas Restrições Ativas
              </span>
              <span className="text-[10px] text-[#009C9D] font-semibold">Editar</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setMockActiveFlag('gluten_free')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                  mockActiveFlag === 'gluten_free'
                    ? 'bg-[#009C9D] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                <WheatOff className="w-3 h-3" />
                <span>Sem Glúten</span>
              </button>
              <button
                type="button"
                onClick={() => setMockActiveFlag('lactose_free')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                  mockActiveFlag === 'lactose_free'
                    ? 'bg-[#009C9D] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                <MilkOff className="w-3 h-3" />
                <span>Sem Lactose</span>
              </button>
              <button
                type="button"
                onClick={() => setMockActiveFlag('vegan')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                  mockActiveFlag === 'vegan'
                    ? 'bg-[#009C9D] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                <Leaf className="w-3 h-3" />
                <span>Vegano</span>
              </button>
            </div>
          </div>

          {/* Highlight App Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-2">
            <div className="relative h-24 rounded-xl bg-gradient-to-r from-[#007E7F] to-[#009C9D] p-2.5 flex flex-col justify-between text-white overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/95 text-emerald-800 px-2 py-0.5 rounded-full shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  100% Compatível
                </span>
                <span className="text-[10px] bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-xs font-semibold">
                  800 m
                </span>
              </div>
              <div className="z-10">
                <p className="text-[11px] text-white/80">Cozinha Auditada</p>
                <h4 className="text-xs font-bold leading-tight">Verde Essência Bistrô</h4>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1">
              <div className="flex items-center gap-1 text-[#F7CC33] font-bold">
                <span>★ 4.9</span>
                <span className="text-slate-400 font-normal">(142)</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[#009C9D] font-semibold text-[10px]">
                <ShieldCheck className="w-3 h-3" /> Cozinha Isolada
              </span>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="text-slate-600 truncate max-w-[170px]">Gnocchi sem glúten</span>
              <span className="font-bold text-slate-900">R$ 54</span>
            </div>
          </div>

          {/* Social Geofence Post Preview */}
          <div className="bg-[#E6F7F7]/60 border border-[#009C9D]/20 rounded-xl p-2.5 space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-bold text-slate-900">Camila M.</span>
              <span className="inline-flex items-center gap-1 text-[#007E7F] font-semibold bg-white px-1.5 py-0.5 rounded border border-[#009C9D]/20">
                <MapPin className="w-2.5 h-2.5" /> GPS Verificado (14m)
              </span>
            </div>
            <p className="text-[11px] text-slate-700 italic">
              "Comi com total tranquilidade! Sem traços de glúten."
            </p>
          </div>
        </div>

        {/* In-App Bottom Navigation Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-2 flex items-center justify-between z-30">
          <button
            type="button"
            onClick={() => setActiveTab('explore')}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold ${
              activeTab === 'explore' ? 'text-[#009C9D]' : 'text-slate-400'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Explorar</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('map')}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold ${
              activeTab === 'map' ? 'text-[#009C9D]' : 'text-slate-400'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Mapa</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('social')}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold ${
              activeTab === 'social' ? 'text-[#009C9D]' : 'text-slate-400'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Social</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold ${
              activeTab === 'profile' ? 'text-[#009C9D]' : 'text-slate-400'
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
