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
    <section className="py-16 sm:py-20 bg-white">
      <Container size="lg">
        <div className="tonal-surface surface-deep rounded-[32px] bg-[#0A4E50] text-white px-6 py-12 sm:px-12 sm:py-16 text-center space-y-6 shadow-[0_24px_60px_-16px_rgba(10,78,80,0.32)]">
          <img
            src="/assets/logos/logo_bare.png"
            alt="HelpRest"
            className="w-16 h-16 object-contain mx-auto"
          />

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Encontre opções compatíveis perto de você
          </h2>

          <p className="text-base sm:text-lg text-[#E3F3F2] max-w-xl mx-auto leading-relaxed">
            Configure suas flags alimentares uma vez e descubra restaurantes, pratos separados e avaliações confirmadas por GPS sempre que sair para comer.
          </p>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <StoreBadge platform="google-play" tone="light" onClick={handleOpenModal} />
            <StoreBadge platform="app-store" tone="light" />
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E3F3F2]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#9CE2E0]" aria-hidden="true" />
              <span>Gratuito no Android</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#9CE2E0]" aria-hidden="true" />
              <span>Zero anúncios invasivos</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#9CE2E0]" aria-hidden="true" />
              <span>Políticas de dados transparentes</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
