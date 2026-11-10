import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
import { StoreBadge } from '../atoms/StoreBadge';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useModal } from '../../context/useModal';

export interface DownloadCtaSectionProps {
  onOpenDownloadModal?: () => void;
}

export const DownloadCtaSection: React.FC<DownloadCtaSectionProps> = ({ onOpenDownloadModal }) => {
  const { openDownloadModal: openGlobalModal } = useModal();
  const handleOpenModal = onOpenDownloadModal || openGlobalModal;
  return (
    <section className="py-20 bg-gradient-to-tr from-[#007E7F] via-[#009C9D] to-[#21B2B3] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <Container size="md">
        <div className="text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-xs border border-white/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F7CC33]" />
            Pronto para Comer com Tranquilidade?
          </div>

          <Heading2 className="text-white text-3xl sm:text-5xl">
            Descubra Restaurantes Seguros Perto de Você
          </Heading2>

          <Paragraph className="text-white/90 max-w-xl mx-auto text-base sm:text-lg">
            Junte-se à comunidade que está transformando a forma como pessoas com restrições alimentares se alimentam fora de casa.
          </Paragraph>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <StoreBadge platform="google-play" onClick={handleOpenModal} />
            <StoreBadge platform="app-store" />
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/90">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7CC33]" /> 100% Gratuito para Usuários
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7CC33]" /> Sem Anúncios Invasivos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7CC33]" /> Cozinhas Auditadas
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
