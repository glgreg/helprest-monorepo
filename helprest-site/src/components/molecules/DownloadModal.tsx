'use client';

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { getButtonClasses } from '../atoms/Button';
import { X, Smartphone, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

let cachedSupportsDisplayTransition: boolean | undefined;

function canTransitionDisplay(): boolean {
  if (cachedSupportsDisplayTransition !== undefined) return cachedSupportsDisplayTransition;
  if (
    typeof window === 'undefined' ||
    !window.CSS?.supports?.('transition-behavior', 'allow-discrete') ||
    !document.body
  ) {
    return false;
  }
  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  const initialDisplay = getComputedStyle(probe).display;
  probe.style.display = 'none';
  cachedSupportsDisplayTransition =
    Boolean(initialDisplay) && getComputedStyle(probe).display === 'block';
  probe.remove();
  return cachedSupportsDisplayTransition;
}

function supportsTopLayerExit(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.CSS?.supports?.('overlay', 'auto')) && canTransitionDisplay();
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const emailId = useId();
  const hintId = useId();

  const requestAnimatedClose = useCallback(async () => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open) return;

    if (!supportsTopLayerExit()) {
      if (dialog.hasAttribute('data-closing')) return;
      dialog.setAttribute('data-closing', '');
      const animations = dialog.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise<void>((resolve) => setTimeout(resolve, 2000)),
        ]);
      }
      if (!dialog.hasAttribute('data-closing')) return;
      dialog.removeAttribute('data-closing');
    }

    if (dialog.open) {
      dialog.close();
    }
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.removeAttribute('data-closing');
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      void requestAnimatedClose();
    }
  }, [isOpen, requestAnimatedClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      void requestAnimatedClose();
    };

    const handleClose = () => {
      dialog.returnValue = '';
      onClose();
    };

    dialog.addEventListener('cancel', handleCancel);
    dialog.addEventListener('close', handleClose);

    // Fallback for browsers without native <dialog closedby="any">
    let removeBackdropListeners: (() => void) | undefined;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      let pressedOutside = false;
      const isOutside = (e: PointerEvent) => {
        const r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      const onPointerDown = (e: PointerEvent) => {
        pressedOutside = isOutside(e);
      };
      const onPointerUp = (e: PointerEvent) => {
        if (pressedOutside && isOutside(e)) {
          void requestAnimatedClose();
        }
        pressedOutside = false;
      };
      dialog.addEventListener('pointerdown', onPointerDown);
      dialog.addEventListener('pointerup', onPointerUp);
      removeBackdropListeners = () => {
        dialog.removeEventListener('pointerdown', onPointerDown);
        dialog.removeEventListener('pointerup', onPointerUp);
      };
    }

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('close', handleClose);
      removeBackdropListeners?.();
    };
  }, [onClose, requestAnimatedClose]);

  const notifyHref = `mailto:suporte@helprest.net?subject=${encodeURIComponent(
    '[HelpRest Android] Solicitação de link / acesso na Google Play'
  )}&body=${encodeURIComponent(
    `Olá equipe HelpRest,\n\nGostaria de receber o link atualizado do aplicativo HelpRest (com.helprest) na Google Play Store.\nE-mail de contato: ${notifyEmail || 'responder neste endereço'}`
  )}`;

  const closedByProp: Record<string, string> = { closedby: 'any' };

  return (
    <dialog
      ref={dialogRef}
      {...closedByProp}
      className="hr-dialog"
      aria-labelledby={titleId}
    >
      {/* Clean bright header separated by neutral hairline */}
      <div className="bg-white border-b border-[#E6E8EB] px-6 py-5 text-[#11181C] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/assets/logos/helprest_logo_green.svg"
            alt=""
            aria-hidden="true"
            className="w-9 h-9 object-contain flex-shrink-0"
          />
          <div className="min-w-0">
            <h2 id={titleId} className="font-display text-lg font-bold leading-tight text-[#11181C] truncate">
              Baixar o HelpRest
            </h2>
            <p className="text-xs text-[#596168] truncate">Disponível para Android via Google Play</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => void requestAnimatedClose()}
          className="w-11 h-11 rounded-full text-[#596168] hover:text-[#11181C] hover:bg-[#F1F2F4] flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <div className="p-6 space-y-5 bg-white text-[#11181C]">
        <p className="text-sm text-[#596168] leading-relaxed">
          O aplicativo Android está configurado no Google Play Console. Consulte os detalhes do pacote e acesse diretamente os documentos de privacidade:
        </p>

        <dl className="tonal-surface bg-[#F7F7F8] rounded-2xl p-4 text-xs space-y-2.5 text-[#3F454A]">
          <div className="flex justify-between gap-3">
            <dt className="text-[#596168]">Aplicativo</dt>
            <dd className="font-bold text-[#11181C]">HelpRest</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-[#596168]">Pacote Android</dt>
            <dd>
              <code className="font-mono font-semibold text-[#11181C]">com.helprest</code>
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-[#596168]">Desenvolvedor</dt>
            <dd className="font-medium text-[#11181C]">Gustavo L. Gregorio</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-[#596168]">Versão e preço</dt>
            <dd className="font-semibold text-[#00797A]">1.0.0 · Gratuito</dd>
          </div>
        </dl>

        <div className="space-y-2">
          <label htmlFor={emailId} className="block text-sm font-medium text-[#11181C]">
            Receber link ou suporte por e-mail
          </label>
          <p id={hintId} className="text-xs text-[#596168]">
            Abriremos seu aplicativo de e-mail para solicitar o acesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 pt-0.5">
            <input
              id={emailId}
              name="notify_email"
              type="email"
              autoComplete="email"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              enterKeyHint="send"
              autoFocus
              aria-describedby={hintId}
              value={notifyEmail}
              onChange={(e) => setNotifyEmail(e.target.value)}
              placeholder="voce@exemplo.com"
              className="hr-field-control flex-1 rounded-xl border border-[#717880] bg-white px-4 py-2.5 text-[#11181C] placeholder:text-[#717880] hover:border-[#11181C] focus:border-[#009C9D] transition-colors"
            />
            <a
              href={notifyHref}
              className={getButtonClasses({
                variant: 'primary',
                size: 'md',
                className: 'w-full sm:w-auto',
              })}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Solicitar</span>
            </a>
          </div>
        </div>

        <div className="pt-3 border-t border-[#E6E8EB] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="inline-flex items-center gap-1.5 text-[#00797A] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />
            <span>Políticas de dados ativas</span>
          </div>
          <Link
            href="/seguranca-dos-dados"
            onClick={() => void requestAnimatedClose()}
            className="font-semibold text-[#00797A] hover:underline inline-flex items-center gap-1 min-h-[36px]"
          >
            <span>Segurança dos Dados</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#596168]">
          <Smartphone className="w-4 h-4 flex-shrink-0 text-[#009C9D]" aria-hidden="true" />
          <span>A versão para iOS (App Store) está prevista após a etapa inicial no Android.</span>
        </div>
      </div>
    </dialog>
  );
};
