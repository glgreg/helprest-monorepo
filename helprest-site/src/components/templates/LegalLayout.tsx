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
    { label: 'Política de Privacidade', href: '/privacidade', icon: <ShieldCheck className="w-4 h-4" /> },
    { label: 'Segurança dos Dados', href: '/seguranca-dos-dados', icon: <Lock className="w-4 h-4" /> },
    { label: 'Exclusão de Conta e Dados', href: '/exclusao-de-dados', icon: <Trash2 className="w-4 h-4 text-[#D93829]" /> },
    { label: 'Aviso de Saúde & Alérgenos', href: '/aviso-de-saude', icon: <HeartPulse className="w-4 h-4 text-[#D4A710]" /> },
    { label: 'Termos de Uso', href: '/termos', icon: <FileText className="w-4 h-4" /> },
    { label: 'Central de Suporte', href: '/suporte', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#11181C] font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-14">
        <Container size="lg">
          <Breadcrumb currentPageTitle={title} />

          {/* Clean Header */}
          <div className="mb-8 pb-6 border-b border-[#EAEAEA]">
            <div className="inline-flex flex-wrap items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4FDFB] text-[#007E7F] border border-[#B2DFDB] mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Atualizado em {lastUpdated} • com.gustavo_lg.helprest</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#11181C] tracking-tight">
              {title}
            </h1>
            <p className="mt-2.5 text-base sm:text-lg text-[#687076] max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Mobile Only Compact Nav Strip */}
          <div className="lg:hidden mb-6 bg-white border border-[#EAEAEA] rounded-2xl p-2">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
              {legalNavItems.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-[#009C9D] text-white'
                        : 'text-[#687076] hover:text-[#11181C] hover:bg-[#FAFAFA]'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop 2-Column Layout without duplicate horizontal bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 bg-white border border-[#EAEAEA] rounded-2xl p-5 space-y-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#687076] px-2">
                  Documentos do Aplicativo
                </div>
                <nav className="space-y-1" aria-label="Navegação legal">
                  {legalNavItems.map((item) => {
                    const isActive = currentPath === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                          isActive
                            ? 'bg-[#F4FDFB] text-[#007E7F] font-bold border border-[#B2DFDB]'
                            : 'text-[#333333] hover:bg-[#FAFAFA] font-medium'
                        }`}
                      >
                        <span className={isActive ? 'text-[#009C9D]' : 'text-[#687076]'}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-4 border-t border-[#EAEAEA] px-2 text-xs text-[#687076] space-y-1.5">
                  <div className="font-bold text-[#11181C]">Controlador & Privacidade</div>
                  <p className="leading-snug">
                    HelpRest — Desenvolvedor: Gustavo L. Gregorio
                  </p>
                  <a
                    href="mailto:privacidade@helprest.com"
                    className="text-[#007E7F] hover:underline font-mono text-xs block font-bold"
                  >
                    privacidade@helprest.com
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="bg-white border border-[#EAEAEA] rounded-2xl p-6 sm:p-9 space-y-7 text-[#333333] leading-relaxed text-sm sm:text-base">
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
