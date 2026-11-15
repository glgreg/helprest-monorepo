import React from 'react';
import { Container } from '../atoms/Container';
import { Heading1, Paragraph } from '../atoms/Typography';
import { StoreBadge } from '../atoms/StoreBadge';
import { PhoneMockup } from '../molecules/PhoneMockup';
import { useModal } from '../../context/useModal';

export interface HeroSectionProps {
  onOpenDownloadModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownloadModal }) => {
  const { openDownloadModal: openGlobalModal } = useModal();
  const handleOpenModal = onOpenDownloadModal || openGlobalModal;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content & Clean Editorial Food Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <Heading1>
              Coma fora com <span className="text-[#007677]">segurança</span> e cardápios feitos para você.
            </Heading1>

            <Paragraph className="max-w-xl">
              O HelpRest filtra restaurantes próximos pelas suas restrições — sem glúten, sem lactose, vegano, vegetariano e alergias — separando no cardápio o que combina com seu perfil e exibindo avaliações confirmadas por GPS a até 100 metros do local.
            </Paragraph>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <StoreBadge platform="google-play" onClick={handleOpenModal} />
              <StoreBadge platform="app-store" />
            </div>

            <div className="pt-2">
              <img
                src="/assets/showcase/hero-dining.jpg"
                alt="Prato artesanal sem glúten servido em restaurante parceiro"
                className="w-full h-56 sm:h-[268px] rounded-3xl object-cover object-center bg-[#EDF1EF]"
              />
            </div>
          </div>

          {/* Right Interactive Prototype on Soft Tonal Stage */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[440px] rounded-[36px] bg-[#EDF1EF] py-8 px-4 sm:px-6 flex flex-col items-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
