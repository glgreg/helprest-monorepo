import React from 'react';
import { Container } from '../atoms/Container';
import { Heading1, Paragraph } from '../atoms/Typography';
import { StoreBadge } from '../atoms/StoreBadge';
import { PhoneMockup } from '../molecules/PhoneMockup';
import { ShieldCheck, MapPin, HeartHandshake } from 'lucide-react';
import { useModal } from '../../context/useModal';

export interface HeroSectionProps {
  onOpenDownloadModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownloadModal }) => {
  const { openDownloadModal: openGlobalModal } = useModal();
  const handleOpenModal = onOpenDownloadModal || openGlobalModal;
  return (
    <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#E6F7F7]/40 via-white to-slate-50">
      {/* Decorative gradient ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#009C9D]/15 to-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F7F7] text-[#007E7F] text-xs font-bold border border-[#009C9D]/30 select-none">
              <img src="/assets/logos/helprest_logo_green.svg" alt="HelpRest" className="w-4 h-4 rounded-xs" />
              <span>Aplicativo Oficial para Restrições Alimentares</span>
            </div>

            <Heading1>
              Onde comer com <span className="text-[#009C9D]">segurança</span> e <span className="text-slate-900 underline decoration-[#009C9D]/40 decoration-2">liberdade</span>.
            </Heading1>

            <Paragraph className="max-w-2xl mx-auto lg:mx-0">
              Conectamos celíacos, alérgicos, intolerantes a lactose e veganos a restaurantes com cozinhas auditadas e cardápios transparentes. Nosso algoritmo inteligente calcula o <strong>Match 100%</strong> das suas necessidades alimentares em tempo real.
            </Paragraph>

            {/* Store Download CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <StoreBadge platform="google-play" onClick={handleOpenModal} />
              <StoreBadge platform="app-store" />
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#E6F7F7] flex items-center justify-center text-[#007E7F] flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Match de Flags</div>
                  <div className="text-[11px] text-slate-500">Exclusão de locais incompatíveis</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Geofencing 100m</div>
                  <div className="text-[11px] text-slate-500">Avaliações reais validadas por GPS</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Comunidade Ativa</div>
                  <div className="text-[11px] text-slate-500">Dicas e fotos de quem também tem restrição</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#009C9D]/20 to-[#F7CC33]/15 rounded-full filter blur-2xl transform scale-90" />
            <PhoneMockup />
          </div>

        </div>
      </Container>
    </section>
  );
};
