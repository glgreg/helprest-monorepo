'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { Container } from '../atoms/Container';
import { Breadcrumb } from '../molecules/Breadcrumb';
import { LEGAL_NAV_ITEMS, normalizeAppPath } from '../../lib/routes';

export interface LegalLayoutProps {
  title: string;
  subtitle: string;
  currentHref?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  currentHref,
  lastUpdated = 'Novembro de 2026',
  children,
}) => {
  const pathname = usePathname();
  const normalizedPath = normalizeAppPath(pathname);
  const resolvedHref = currentHref || normalizedPath;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F8] text-[#11181C] font-sans">
      <a
        href="#main-content"
        className="visually-hidden fixed top-3 start-3 z-50 rounded-full bg-[#009C9D] px-4 py-2.5 text-sm font-semibold text-[#09181A] shadow-lg"
      >
        Ir para o conteúdo principal
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 py-10 sm:py-14 focus:outline-none">
        <Container size="lg">
          <Breadcrumb currentPageTitle={title} currentHref={resolvedHref} />

          {/* Clean Document Header */}
          <header className="mb-8 space-y-2.5">
            <p className="text-xs font-medium text-[#596168]">
              Atualizado em {lastUpdated} ·{' '}
              <span className="font-mono text-[#3F454A]">com.helprest</span>
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#11181C] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-[17px] text-[#596168] max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </header>

          {/* Mobile Only Horizontal Document Nav Strip */}
          <nav
            aria-label="Documentos legais"
            className="lg:hidden mb-6 tonal-surface bg-white rounded-2xl p-2 shadow-[0_2px_10px_-4px_rgba(17,24,28,0.06)]"
          >
            <ul className="flex items-center gap-1 overflow-x-auto scrollbar-none">
              {LEGAL_NAV_ITEMS.map((item) => {
                const isActive = normalizedPath === item.href;
                return (
                  <li key={item.href} className="flex-shrink-0">
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`inline-flex items-center px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs whitespace-nowrap transition-colors ${
                        isActive
                          ? 'bg-[#EFFBFB] text-[#00797A] font-semibold'
                          : 'text-[#3F454A] hover:text-[#11181C] hover:bg-[#F1F2F4] font-medium'
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop 2-Column Google Safety Center Style Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 tonal-surface bg-white rounded-3xl p-5 shadow-[0_2px_12px_-4px_rgba(17,24,28,0.05)] space-y-5">
                <nav aria-label="Navegação legal">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#596168] px-3 mb-2.5">
                    Documentos do aplicativo
                  </div>
                  <ul className="space-y-0.5">
                    {LEGAL_NAV_ITEMS.map((item) => {
                      const isActive = normalizedPath === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            aria-current={isActive ? 'page' : undefined}
                            className={`flex items-center px-3.5 py-2.5 min-h-[44px] text-sm transition-colors ${
                              isActive
                                ? 'border-s-[3px] border-[#009C9D] bg-[#EFFBFB] text-[#09181A] font-semibold rounded-e-xl'
                                : 'border-s-[3px] border-transparent text-[#3F454A] hover:bg-[#F7F7F8] hover:text-[#11181C] font-medium rounded-xl'
                            }`}
                          >
                            <span className="truncate">{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="pt-4 border-t border-[#E6E8EB] px-3 text-xs text-[#596168] space-y-1.5">
                  <div className="font-semibold text-[#11181C]">Controlador &amp; Privacidade</div>
                  <p className="leading-snug">Gustavo L. Gregorio · Curitiba, PR</p>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <a
                      href="mailto:privacidade@helprest.net"
                      className="text-[#00797A] hover:underline font-semibold"
                    >
                      privacidade@helprest.net
                    </a>
                    <a
                      href="mailto:suporte@helprest.net"
                      className="text-[#596168] hover:text-[#11181C] hover:underline"
                    >
                      suporte@helprest.net
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="tonal-surface bg-white rounded-3xl p-6 sm:p-10 shadow-[0_2px_12px_-4px_rgba(17,24,28,0.05)] space-y-8 text-[#3F454A] leading-relaxed text-sm sm:text-base">
                <div className="max-w-[70ch] space-y-8">{children}</div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};
