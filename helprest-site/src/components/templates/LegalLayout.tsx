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
  Clock
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
    { label: 'Termos de Uso', href: '/termos', icon: <FileText className="w-4 h-4" /> },
    { label: 'Exclusão de Conta e Dados', href: '/exclusao-de-dados', icon: <Trash2 className="w-4 h-4 text-rose-500" /> },
    { label: 'Segurança dos Dados (Play Store)', href: '/seguranca-dos-dados', icon: <Lock className="w-4 h-4" /> },
    { label: 'Aviso Legal de Saúde & Alérgenos', href: '/aviso-de-saude', icon: <HeartPulse className="w-4 h-4 text-amber-500" /> },
    { label: 'Central de Suporte & Contato', href: '/suporte', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-14">
        <Container size="lg">
          <Breadcrumb currentPageTitle={title} />

          {/* Page Header */}
          <div className="mb-6 pb-6 border-b border-slate-200">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E6F7F7] text-[#007E7F] border border-[#009C9D]/20 mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Última atualização: {lastUpdated} • Google Play Console Nov/2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-3xl">
              {subtitle}
            </p>
          </div>

          {/* Top Horizontal Compliance Tabs Bar (Always visible at the top on Mobile & Desktop) */}
          <div className="mb-8 bg-white border border-slate-200 rounded-2xl p-2 shadow-2xs">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-1">
              {legalNavItems.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#009C9D] text-white shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar (4 cols) */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-28 bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3">
                  Documentação Legal & Google Play
                </h3>
                <nav className="space-y-1">
                  {legalNavItems.map((item) => {
                    const isActive = currentPath === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-[#E6F7F7] text-[#007E7F] shadow-2xs font-bold'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <span className={isActive ? 'text-[#009C9D]' : 'text-slate-400'}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-4 border-t border-slate-100 px-3 text-[11px] text-slate-500 space-y-2">
                  <div className="font-semibold text-slate-800">
                    Dúvidas sobre conformidade?
                  </div>
                  <p>
                    Entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail:
                  </p>
                  <a
                    href="mailto:privacidade@helprest.com"
                    className="text-[#009C9D] hover:underline font-mono text-xs block"
                  >
                    privacidade@helprest.com
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Content (8 cols) */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
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
