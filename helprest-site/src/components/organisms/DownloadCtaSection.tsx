import React from 'react';
import { Container } from '../atoms/Container';
import { StoreBadge } from '../atoms/StoreBadge';
import { CheckCircle2 } from 'lucide-react';
import { useModal } from '../../context/useModal';

export interface DownloadCtaSectionProps {
  onOpenDownloadModal?: () => void;
}

export const DownloadCtaSection: React.FC<DownloadCtaSectionProps> = ({
  onOpenDownloadModal,
}) => {
  const { openDownloadModal: openGlobalModal } = useModal();
  const handleOpenModal = onOpenDownloadModal || openGlobalModal;

  return (
    <section className="py-16 sm:py-20 bg-[#009C9D] text-white">
      <Container size="md">
        <div className="text-center space-y-6">
          <img
            src="/assets/logos/logo_bare.png"
            alt="HelpRest"
            className="w-16 h-16 object-contain mx-auto"
          />

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Encontre opções compatíveis perto de você
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
            Configure suas flags alimentares uma vez e descubra restaurantes, pratos separados e avaliações confirmadas por GPS sempre que sair para comer.
          </p>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <StoreBadge platform="google-play" tone="light" onClick={handleOpenModal} />
            <StoreBadge platform="app-store" tone="light" />
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-5 text-xs text-white/90">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7CC33]" />
              Gratuito no Android
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7CC33]" />
              Zero anúncios invasivos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7CC33]" />
              Políticas de dados transparentes
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
