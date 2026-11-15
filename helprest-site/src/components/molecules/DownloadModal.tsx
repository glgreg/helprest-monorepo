import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Link } from '../../router';
import { X, Smartphone, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [notifyEmail, setNotifyEmail] = useState('');

  if (!isOpen) return null;

  const notifyHref = `mailto:suporte@helprest.com?subject=${encodeURIComponent(
    '[HelpRest Android] Solicitação de link / acesso na Google Play'
  )}&body=${encodeURIComponent(
    `Olá equipe HelpRest,\n\nGostaria de receber o link atualizado do aplicativo HelpRest (com.gustavo_lg.helprest) na Google Play Store.\nE-mail de contato: ${notifyEmail || 'responder neste endereço'}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#11181C]/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#EAEAEA] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
      >
        {/* App-authentic Brand Header Strip matching helprest-app/(auth)/home */}
        <div className="bg-[#009C9D] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logos/logo_bare.png"
              alt="HelpRest"
              className="w-9 h-9 object-contain"
            />
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/85 block">
                Google Play Store
              </span>
              <h3 id="download-modal-title" className="text-lg font-bold leading-tight">
                Baixar o HelpRest
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-sm text-[#687076] leading-relaxed">
            O pacote Android oficial está configurado para distribuição no Google Play Console. Confira a ficha técnica e os documentos públicos de conformidade do aplicativo:
          </p>

          <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl p-4 text-xs space-y-2 text-[#333333]">
            <div className="flex justify-between gap-2">
              <span className="text-[#687076]">Aplicativo:</span>
              <span className="font-bold text-[#11181C]">HelpRest</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-[#687076]">Pacote Android:</span>
              <code className="font-mono font-bold text-[#11181C]">com.gustavo_lg.helprest</code>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-[#687076]">Desenvolvedor:</span>
              <span className="font-medium text-[#11181C]">Gustavo L. Gregorio</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-[#687076]">Versão / Preço:</span>
              <span className="font-bold text-[#007E7F]">1.0.0 • Gratuito</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <label htmlFor="notify-email-input" className="block text-xs font-bold text-[#11181C]">
              Receber o link ou suporte de instalação por e-mail
            </label>
            <div className="flex gap-2">
              <input
                id="notify-email-input"
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="flex-1 rounded-full border border-[#DDDDDD] px-4 py-2 text-sm text-[#11181C] placeholder:text-[#9BA1A6] focus:outline-none focus:border-[#009C9D]"
              />
              <a href={notifyHref}>
                <Button type="button" variant="primary" size="md" iconLeft={<Mail className="w-4 h-4" />}>
                  Solicitar
                </Button>
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-[#EAEAEA] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="inline-flex items-center gap-1.5 text-[#007E7F] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Políticas Play Console ativas</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/seguranca-dos-dados"
                onClick={onClose}
                className="font-bold text-[#007E7F] hover:underline inline-flex items-center gap-1"
              >
                <span>Segurança dos Dados</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#687076]">
            <Smartphone className="w-3.5 h-3.5 flex-shrink-0 text-[#009C9D]" />
            <span>Versão para iOS (App Store) prevista após a etapa inicial no Android.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
