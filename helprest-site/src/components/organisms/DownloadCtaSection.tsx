'use client';

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
    <section className="py-16 sm:py-20 bg-[#F7F7F8]">
      <Container size="lg">
        <div className="tonal-surface rounded-[32px] bg-[#EFFBFB] text-[#11181C] px-6 py-12 sm:px-12 sm:py-16 text-center space-y-6">
          <img
            src="/assets/logos/helprest_logo_green.svg"
            alt="HelpRest"
            className="w-16 h-16 object-contain mx-auto"
          />

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#11181C] max-w-2xl mx-auto leading-tight">
            Encontre opções compatíveis perto de você
          </h2>

          <p className="text-base sm:text-lg text-[#3F454A] max-w-xl mx-auto leading-relaxed">
            Configure suas flags alimentares uma vez e descubra restaurantes, pratos separados e avaliações confirmadas por GPS sempre que sair para comer.
          </p>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <StoreBadge platform="google-play" tone="dark" onClick={handleOpenModal} />
            <StoreBadge platform="app-store" tone="dark" />
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#3F454A]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />
              <span>Gratuito no Android</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />
              <span>Sem redes externas de anúncios</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />
              <span>Políticas de dados transparentes</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
