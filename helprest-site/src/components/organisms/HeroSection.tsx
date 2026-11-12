import React from 'react';
import { Container } from '../atoms/Container';
import { Heading1, Paragraph, SectionTag } from '../atoms/Typography';
import { StoreBadge } from '../atoms/StoreBadge';
import { PhoneMockup } from '../molecules/PhoneMockup';
import { MapPin, Search, ShieldCheck } from 'lucide-react';
import { useModal } from '../../context/useModal';

export interface HeroSectionProps {
  onOpenDownloadModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownloadModal }) => {
  const { openDownloadModal: openGlobalModal } = useModal();
  const handleOpenModal = onOpenDownloadModal || openGlobalModal;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFAFA]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content & App Showcase Photo (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTag>Descoberta gastronômica segura</SectionTag>

            <Heading1>
              Coma fora com <span className="text-[#009C9D]">segurança</span> e cardápios feitos para você.
            </Heading1>

            <Paragraph className="max-w-xl">
              O HelpRest filtra restaurantes próximos pelas suas restrições — sem glúten, sem lactose, vegano, vegetariano e alergias — separando no cardápio o que combina com seu perfil e exibindo avaliações confirmadas por GPS a até 100 metros do local.
            </Paragraph>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <StoreBadge platform="google-play" onClick={handleOpenModal} />
              <StoreBadge platform="app-store" />
            </div>

            {/* Clean Editorial Food Preview Card featuring authentic App UserBar Pill */}
            <div className="pt-2">
              <div className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] bg-white p-2">
                <div className="relative h-52 sm:h-[260px] rounded-xl overflow-hidden bg-[#F2F4F5]">
                  <img
                    src="/assets/showcase/hero-dining.jpg"
                    alt="Prato artesanal sem glúten em bistrô parceiro"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Authentic App Floating UserBar Preview */}
                  <div className="absolute top-3.5 inset-x-3.5 bg-white/95 rounded-full py-1.5 px-3.5 border border-[#EAEAEA] flex items-center justify-between gap-2 shadow-sm">
                    <div className="flex items-center gap-2 min-w-0">
                      <MapPin className="w-4 h-4 text-[#009C9D] flex-shrink-0" />
                      <Search className="w-3.5 h-3.5 text-[#9BA1A6] flex-shrink-0" />
                      <span className="text-xs text-[#687076] truncate">
                        Sem glúten em Curitiba
                      </span>
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#F4FDFB] text-[#007E7F] border border-[#B2DFDB] flex-shrink-0">
                      Match 100%
                    </span>
                  </div>

                  {/* Caption Bar */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs">
                    <div className="inline-flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#F7CC33]" />
                      <span>Cardápio separado em “Para você” e “Outros Itens”</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive 4-Tab Mobile Prototype (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[440px] rounded-3xl bg-white border border-[#EAEAEA] py-6 px-4 sm:px-6 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-4 px-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#007E7F]">
                  Prévia interativa do app
                </span>
                <span className="text-[11px] text-[#687076]">
                  Toque nas abas e nos locais
                </span>
              </div>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
