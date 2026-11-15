import React from 'react';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { Container } from '../atoms/Container';
import { Breadcrumb } from '../molecules/Breadcrumb';
import { Link } from '../../router';
import { useRouter } from '../../router/useRouter';
import {
  ShieldCheck,
  FileText,
  Trash2,
  Lock,
  HeartPulse,
  HelpCircle,
  Clock,
} from 'lucide-react';

export interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  lastUpdated = 'Novembro de 2026',
  children,
}) => {
  const { currentPath } = useRouter();

  const legalNavItems = [
    {
      label: 'Política de Privacidade',
      href: '/privacidade',
      icon: <ShieldCheck className="w-4 h-4 text-[#007677]" aria-hidden="true" />,
    },
    {
      label: 'Segurança dos Dados',
      href: '/seguranca-dos-dados',
      icon: <Lock className="w-4 h-4 text-[#007677]" aria-hidden="true" />,
    },
    {
      label: 'Exclusão de Conta e Dados',
      href: '/exclusao-de-dados',
      icon: <Trash2 className="w-4 h-4 text-[#B42318]" aria-hidden="true" />,
    },
    {
      label: 'Aviso de Saúde & Alérgenos',
      href: '/aviso-de-saude',
      icon: <HeartPulse className="w-4 h-4 text-[#C43E32]" aria-hidden="true" />,
    },
    {
      label: 'Termos de Uso',
      href: '/termos',
      icon: <FileText className="w-4 h-4 text-[#525B58]" aria-hidden="true" />,
    },
    {
      label: 'Central de Suporte',
      href: '/suporte',
      icon: <HelpCircle className="w-4 h-4 text-[#007677]" aria-hidden="true" />,
    },
  ];

  const normalizedPath = currentPath.split('#')[0].replace(/\/$/, '') || '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F5] text-[#181C1B] font-sans">
      <a
        href="#main-content"
        className="visually-hidden fixed top-3 start-3 z-50 rounded-full bg-[#007677] px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
      >
        Ir para o conteúdo principal
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 py-10 sm:py-14 focus:outline-none">
        <Container size="lg">
          <Breadcrumb currentPageTitle={title} />

          {/* Clean Document Header */}
          <div className="mb-8 space-y-2.5">
            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-medium text-[#525B58]">
              <Clock className="w-3.5 h-3.5 text-[#007677]" aria-hidden="true" />
              <span>
                Atualizado em {lastUpdated} ·{' '}
                <code className="font-mono text-[#3A413F]">com.gustavo_lg.helprest</code>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#181C1B] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-[17px] text-[#525B58] max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Mobile Only Horizontal Document Nav Strip */}
          <nav
            aria-label="Documentos legais"
            className="lg:hidden mb-6 tonal-surface bg-white rounded-2xl p-2 shadow-[0_2px_10px_-4px_rgba(24,28,27,0.06)]"
          >
            <ul className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {legalNavItems.map((item) => {
                const isActive = normalizedPath === item.href;
                return (
                  <li key={item.href} className="flex-shrink-0">
                    <Link
                      to={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs whitespace-nowrap transition-colors ${
                        isActive
                          ? 'bg-[#E9F3F2] text-[#00696A] font-semibold underline decoration-2 underline-offset-4 decoration-[#007677]'
                          : 'text-[#3A413F] hover:text-[#181C1B] hover:bg-[#EDF1EF] font-medium'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop 2-Column Tonal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 tonal-surface bg-white rounded-3xl p-5 shadow-[0_2px_12px_-4px_rgba(24,28,27,0.06)] space-y-5">
                <nav aria-label="Navegação legal">
                  <div className="text-xs font-semibold text-[#525B58] px-3 mb-2">
                    Documentos do aplicativo
                  </div>
                  <ul className="space-y-1">
                    {legalNavItems.map((item) => {
                      const isActive = normalizedPath === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            aria-current={isActive ? 'page' : undefined}
                            className={`flex items-center justify-between gap-2.5 px-3 py-2.5 min-h-[44px] rounded-2xl text-sm transition-colors ${
                              isActive
                                ? 'bg-[#E9F3F2] text-[#00696A] font-semibold'
                                : 'text-[#3A413F] hover:bg-[#EDF1EF] hover:text-[#181C1B] font-medium'
                            }`}
                          >
                            <span className="flex items-center gap-2.5 min-w-0">
                              {item.icon}
                              <span className="truncate">{item.label}</span>
                            </span>
                            {isActive && (
                              <span
                                className="w-1.5 h-4 rounded-full bg-[#007677] flex-shrink-0"
                                aria-hidden="true"
                              />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="rounded-2xl bg-[#F4F6F5] p-4 text-xs text-[#525B58] space-y-1.5">
                  <div className="font-semibold text-[#181C1B]">Controlador & Privacidade</div>
                  <p className="leading-snug">HelpRest — Desenvolvedor: Gustavo L. Gregorio</p>
                  <a
                    href="mailto:privacidade@helprest.com"
                    className="text-[#00696A] hover:underline font-semibold inline-block pt-0.5"
                  >
                    privacidade@helprest.com
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="tonal-surface bg-white rounded-3xl p-6 sm:p-10 shadow-[0_2px_12px_-4px_rgba(24,28,27,0.06)] space-y-8 text-[#3A413F] leading-relaxed text-sm sm:text-base">
                {children}
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};
