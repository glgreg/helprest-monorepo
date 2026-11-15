'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '../atoms/BrandLogo';
import { Button } from '../atoms/Button';
import { Container } from '../atoms/Container';
import { normalizeAppPath } from '../../lib/routes';
import {
  Menu,
  X,
  Smartphone,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Trash2,
  Lock,
  HeartPulse,
  FileText,
} from 'lucide-react';
import { useModal } from '../../context/useModal';

export interface NavbarProps {
  onOpenDownloadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalMenuOpen, setLegalMenuOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const popoverId = useId();
  const mobileDrawerId = useId();

  const pathname = usePathname();
  const { openDownloadModal: openGlobalModal } = useModal();
  const handleOpenModal = onOpenDownloadModal || openGlobalModal;

  const normalizedPath = normalizeAppPath(pathname);

  // Progressive fallback class (.is-stuck) for browsers without scroll-state container queries
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: [0] }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const closePopover = () => {
    try {
      popoverRef.current?.hidePopover?.();
    } catch {
      // Ignore if already closed or unsupported
    }
  };

  const handlePopoverToggle = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const toggleEvent = e.nativeEvent as ToggleEvent;
    const isOpen = toggleEvent.newState === 'open';
    setLegalMenuOpen(isOpen);

    if (
      isOpen &&
      triggerRef.current &&
      popoverRef.current &&
      !window.CSS?.supports?.('position-area', 'block-end')
    ) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popRect = popoverRef.current.getBoundingClientRect();
      const gap = 8;
      const fitsBelow = triggerRect.bottom + gap + popRect.height <= window.innerHeight - 16;
      const top = fitsBelow
        ? triggerRect.bottom + gap
        : Math.max(16, triggerRect.top - gap - popRect.height);
      const left = Math.max(
        16,
        Math.min(triggerRect.right - popRect.width, window.innerWidth - popRect.width - 16)
      );
      popoverRef.current.style.top = `${top}px`;
      popoverRef.current.style.left = `${left}px`;
    }
  };

  const legalLinks = [
    {
      label: 'Política de Privacidade',
      href: '/privacidade',
      icon: <ShieldCheck className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />,
      desc: 'Dados coletados, GPS em segundo plano e LGPD',
    },
    {
      label: 'Segurança dos Dados',
      href: '/seguranca-dos-dados',
      icon: <Lock className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />,
      desc: 'Permissões Android, criptografia e SDKs terceiros',
    },
    {
      label: 'Exclusão de Conta e Dados',
      href: '/exclusao-de-dados',
      icon: <Trash2 className="w-4 h-4 text-[#B42318]" aria-hidden="true" />,
      desc: 'Canal oficial web para remoção de conta e histórico',
    },
    {
      label: 'Aviso de Saúde & Alérgenos',
      href: '/aviso-de-saude',
      icon: <HeartPulse className="w-4 h-4 text-[#FF533F]" aria-hidden="true" />,
      desc: 'Isenção médica e prevenção de contaminação cruzada',
    },
    {
      label: 'Termos de Uso',
      href: '/termos',
      icon: <FileText className="w-4 h-4 text-[#596168]" aria-hidden="true" />,
      desc: 'Regras da comunidade, segurança infantil e moderação',
    },
    {
      label: 'Central de Suporte',
      href: '/suporte',
      icon: <HelpCircle className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />,
      desc: 'Contato direto com suporte@helprest.net',
    },
  ];

  const isLegalActive = legalLinks.some(
    (item) => item.href !== '/suporte' && item.href === normalizedPath
  );

  return (
    <>
      <div
        ref={sentinelRef}
        className="h-px w-full -mb-px pointer-events-none"
        aria-hidden="true"
      />
      <header className={`site-sticky-header w-full ${isStuck ? 'is-stuck' : ''}`}>
        <div className="site-header-bar">
          <Container size="lg">
            <div className="flex items-center justify-between min-h-[72px] gap-4">
              <BrandLogo size="md" />

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
                <Link
                  href="/#restricoes"
                  className="px-3.5 py-2.5 min-h-[44px] inline-flex items-center rounded-full text-sm font-medium text-[#3F454A] hover:text-[#11181C] hover:bg-[#F1F2F4] transition-colors"
                >
                  Explorar filtros
                </Link>
                <Link
                  href="/#como-funciona"
                  className="px-3.5 py-2.5 min-h-[44px] inline-flex items-center rounded-full text-sm font-medium text-[#3F454A] hover:text-[#11181C] hover:bg-[#F1F2F4] transition-colors"
                >
                  Como funciona
                </Link>
                <Link
                  href="/#restaurantes"
                  className="px-3.5 py-2.5 min-h-[44px] inline-flex items-center rounded-full text-sm font-medium text-[#3F454A] hover:text-[#11181C] hover:bg-[#F1F2F4] transition-colors"
                >
                  Para restaurantes
                </Link>

                {/* Native Popover Button Group (not role="menu") */}
                <div className="relative">
                  <button
                    ref={triggerRef}
                    type="button"
                    popoverTarget={popoverId}
                    aria-controls={popoverId}
                    aria-expanded={legalMenuOpen}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-full text-sm transition-colors cursor-pointer ${
                      isLegalActive
                        ? 'bg-[#EFFBFB] text-[#00797A] font-semibold'
                        : 'font-medium text-[#3F454A] hover:text-[#11181C] hover:bg-[#F1F2F4]'
                    }`}
                  >
                    <span>Privacidade &amp; Dados</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        legalMenuOpen ? 'rotate-180 text-[#009C9D]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={popoverId}
                    ref={popoverRef}
                    popover="auto"
                    onToggle={handlePopoverToggle}
                    className="site-nav-popover tonal-surface w-80 max-w-[calc(100dvw-2rem)] max-h-[calc(100dvh-6rem)] overflow-y-auto bg-white rounded-3xl shadow-[0_18px_40px_-10px_rgba(17,24,28,0.18)] p-2.5 z-50"
                  >
                    <ul className="space-y-0.5">
                      {legalLinks.map((item) => {
                        const isItemActive = normalizedPath === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={isItemActive ? 'page' : undefined}
                              onClick={closePopover}
                              className={`flex items-start gap-3 p-2.5 rounded-2xl text-xs transition-colors ${
                                isItemActive
                                  ? 'bg-[#EFFBFB] text-[#00797A] font-semibold'
                                  : 'text-[#3F454A] hover:bg-[#F7F7F8]'
                              }`}
                            >
                              <div className="w-9 h-9 rounded-xl bg-[#F7F7F8] flex items-center justify-center flex-shrink-0">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div
                                  className={`text-sm font-semibold leading-snug ${
                                    isItemActive ? 'text-[#00797A]' : 'text-[#11181C]'
                                  }`}
                                >
                                  {item.label}
                                </div>
                                <p className="text-xs text-[#596168] font-normal mt-0.5 leading-snug">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/suporte"
                  aria-current={normalizedPath === '/suporte' ? 'page' : undefined}
                  className={`px-3.5 py-2.5 min-h-[44px] inline-flex items-center rounded-full text-sm transition-colors ${
                    normalizedPath === '/suporte'
                      ? 'bg-[#EFFBFB] text-[#00797A] font-semibold'
                      : 'font-medium text-[#3F454A] hover:text-[#11181C] hover:bg-[#F1F2F4]'
                  }`}
                >
                  Suporte
                </Link>
              </nav>

              <div className="hidden sm:flex items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleOpenModal}
                  iconLeft={<Smartphone className="w-4 h-4" aria-hidden="true" />}
                >
                  Baixar App
                </Button>
              </div>

              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-expanded={mobileMenuOpen}
                  aria-controls={mobileDrawerId}
                  aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                  className="min-w-[44px] min-h-[44px] p-2.5 rounded-full text-[#11181C] hover:bg-[#F1F2F4] flex items-center justify-center cursor-pointer transition-colors"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </Container>

          {mobileMenuOpen && (
            <div
              id={mobileDrawerId}
              className="lg:hidden bg-[#F7F7F8] px-4 pt-3 pb-6 space-y-4 max-h-[85dvh] overflow-y-auto"
            >
              <nav aria-label="Menu móvel" className="flex flex-col space-y-1">
                <Link
                  href="/#restricoes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 min-h-[44px] inline-flex items-center rounded-2xl text-sm font-medium text-[#11181C] hover:bg-white transition-colors"
                >
                  Explorar filtros
                </Link>
                <Link
                  href="/#como-funciona"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 min-h-[44px] inline-flex items-center rounded-2xl text-sm font-medium text-[#11181C] hover:bg-white transition-colors"
                >
                  Como funciona
                </Link>
                <Link
                  href="/#restaurantes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 min-h-[44px] inline-flex items-center rounded-2xl text-sm font-medium text-[#11181C] hover:bg-white transition-colors"
                >
                  Para restaurantes
                </Link>
              </nav>

              <div className="rounded-2xl bg-white p-2.5 space-y-1">
                <div className="text-xs font-semibold text-[#596168] px-3 py-1.5">
                  Privacidade e documentos
                </div>
                <ul className="space-y-0.5">
                  {legalLinks.map((item) => {
                    const isItemActive = normalizedPath === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isItemActive ? 'page' : undefined}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-2.5 px-3 py-2.5 min-h-[44px] rounded-xl text-xs transition-colors ${
                            isItemActive
                              ? 'bg-[#EFFBFB] text-[#00797A] font-semibold'
                              : 'text-[#3F454A] hover:bg-[#F7F7F8] font-medium'
                          }`}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Button
                variant="primary"
                fullWidth
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenModal();
                }}
                iconLeft={<Smartphone className="w-4 h-4" aria-hidden="true" />}
              >
                Baixar App no Android
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
