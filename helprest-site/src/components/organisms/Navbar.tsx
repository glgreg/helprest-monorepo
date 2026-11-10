import React, { useState, useRef, useEffect } from 'react';
import { BrandLogo } from '../atoms/BrandLogo';
import { Button } from '../atoms/Button';
import { Container } from '../atoms/Container';
import { Link } from '../../router';
import { useRouter } from '../../router/useRouter';
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
  CheckCircle2
} from 'lucide-react';
import { useModal } from '../../context/useModal';

export interface NavbarProps {
  onOpenDownloadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [complianceDropdownOpen, setComplianceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentPath } = useRouter();
  const { openDownloadModal: openGlobalModal } = useModal();

  const handleOpenModal = onOpenDownloadModal || openGlobalModal;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setComplianceDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const complianceLinks = [
    {
      label: 'Política de Privacidade',
      href: '/privacidade',
      icon: <ShieldCheck className="w-4 h-4 text-[#009C9D]" />,
      desc: 'Privacidade de dados e termos gerais da Play Store',
      tag: 'Obrigatório'
    },
    {
      label: 'Exclusão de Conta e Dados',
      href: '/exclusao-de-dados',
      icon: <Trash2 className="w-4 h-4 text-rose-500" />,
      desc: 'Formulário direto de deleção sem reinstalar o app',
      tag: 'Play Console'
    },
    {
      label: 'Segurança dos Dados (Data Safety)',
      href: '/seguranca-dos-dados',
      icon: <Lock className="w-4 h-4 text-emerald-600" />,
      desc: 'Criptografia em trânsito TLS 1.3 e retenção',
      tag: 'Auditado'
    },
    {
      label: 'Aviso de Saúde & Alérgenos',
      href: '/aviso-de-saude',
      icon: <HeartPulse className="w-4 h-4 text-amber-500" />,
      desc: 'Isenção médica e segurança alimentar preventiva',
      tag: 'Saúde'
    },
    {
      label: 'Termos de Uso',
      href: '/termos',
      icon: <FileText className="w-4 h-4 text-slate-600" />,
      desc: 'Regras de utilização do serviço e responsabilidades',
      tag: 'Legal'
    },
    {
      label: 'Central de Suporte & Contato',
      href: '/suporte',
      icon: <HelpCircle className="w-4 h-4 text-[#009C9D]" />,
      desc: 'Canais oficiais com SLA de resposta até 24h',
      tag: 'SAC'
    },
  ];

  const isComplianceActive = complianceLinks.some((l) => l.href === currentPath);

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Google Play Console Compliance Strip */}
      <div className="bg-[#007E7F] text-white text-[11px] sm:text-xs py-1.5 px-4 font-medium border-b border-[#006A6B]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Google Play Store • Conformidade Oficial (Nov/2026):</span>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-0.5 text-[11px]">
            <Link to="/privacidade" className="hover:underline text-teal-100 hover:text-white transition-colors">
              Privacidade
            </Link>
            <span className="text-teal-400/60">•</span>
            <Link to="/exclusao-de-dados" className="hover:underline text-teal-100 hover:text-white transition-colors">
              Exclusão de Conta
            </Link>
            <span className="text-teal-400/60">•</span>
            <Link to="/seguranca-dos-dados" className="hover:underline text-teal-100 hover:text-white transition-colors">
              Segurança dos Dados
            </Link>
            <span className="text-teal-400/60">•</span>
            <Link to="/aviso-de-saude" className="hover:underline text-teal-100 hover:text-white transition-colors">
              Aviso de Saúde
            </Link>
            <span className="text-teal-400/60">•</span>
            <Link to="/suporte" className="hover:underline text-teal-100 hover:text-white transition-colors">
              Suporte
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <Container size="lg">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <BrandLogo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navegação principal">
              <Link
                to="/#como-funciona"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Como Funciona
              </Link>

              <Link
                to="/#restricoes"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Restrições
              </Link>

              <Link
                to="/#restaurantes"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Para Restaurantes
              </Link>

              {/* Compliance Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setComplianceDropdownOpen(!complianceDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    isComplianceActive
                      ? 'text-[#009C9D] bg-[#E6F7F7]'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-[#009C9D]" />
                  <span>Conformidade Play Store</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${complianceDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {complianceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Políticas Google Play Console
                      </div>
                      <div className="text-xs text-slate-600">
                        Requisitos de publicação e conformidade
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      {complianceLinks.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setComplianceDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl text-xs transition-colors ${
                            currentPath === item.href
                              ? 'bg-[#E6F7F7] text-[#007E7F] font-bold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="p-1 rounded-lg bg-slate-100 mt-0.5">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-900">{item.label}</span>
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-mono">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/suporte"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  currentPath === '/suporte'
                    ? 'text-[#009C9D] bg-[#E6F7F7]'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Suporte
              </Link>
            </nav>

            {/* Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={handleOpenModal}
                iconLeft={<Smartphone className="w-4 h-4" />}
              >
                Baixar App
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-1">
              Navegação
            </div>
            <nav className="flex flex-col space-y-1">
              <Link
                to="/#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Como Funciona
              </Link>
              <Link
                to="/#restricoes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Restrições & Algoritmo
              </Link>
              <Link
                to="/#restaurantes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Para Restaurantes
              </Link>
            </nav>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#009C9D]">
                Requisitos Google Play Console (Nov/2026)
              </span>
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                <CheckCircle2 className="w-3 h-3" /> Conforme
              </span>
            </div>
            <div className="space-y-1">
              {complianceLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold ${
                    currentPath === item.href
                      ? 'bg-[#E6F7F7] text-[#007E7F]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">
                    {item.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Button
              variant="primary"
              fullWidth
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenModal();
              }}
              iconLeft={<Smartphone className="w-4 h-4" />}
            >
              Baixar no Google Play
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
