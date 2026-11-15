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
} from 'lucide-react';
import { useModal } from '../../context/useModal';

export interface NavbarProps {
  onOpenDownloadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalMenuOpen, setLegalMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentPath } = useRouter();
  const { openDownloadModal: openGlobalModal } = useModal();

  const handleOpenModal = onOpenDownloadModal || openGlobalModal;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLegalMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const legalLinks = [
    {
      label: 'Política de Privacidade',
      href: '/privacidade',
      icon: <ShieldCheck className="w-4 h-4 text-[#009C9D]" />,
      desc: 'Dados coletados, GPS em segundo plano e LGPD',
    },
    {
      label: 'Segurança dos Dados',
      href: '/seguranca-dos-dados',
      icon: <Lock className="w-4 h-4 text-[#007E7F]" />,
      desc: 'Permissões Android, criptografia e SDKs terceiros',
    },
    {
      label: 'Exclusão de Conta e Dados',
      href: '/exclusao-de-dados',
      icon: <Trash2 className="w-4 h-4 text-[#D93829]" />,
      desc: 'Canal oficial web para remoção de conta e histórico',
    },
    {
      label: 'Aviso de Saúde & Alérgenos',
      href: '/aviso-de-saude',
      icon: <HeartPulse className="w-4 h-4 text-[#D4A710]" />,
      desc: 'Isenção médica e prevenção de contaminação cruzada',
    },
    {
      label: 'Termos de Uso',
      href: '/termos',
      icon: <FileText className="w-4 h-4 text-[#687076]" />,
      desc: 'Regras da comunidade, geofencing 100m e moderação',
    },
    {
      label: 'Central de Suporte',
      href: '/suporte',
      icon: <HelpCircle className="w-4 h-4 text-[#009C9D]" />,
      desc: 'Contato direto com suporte@helprest.com',
    },
  ];

  const isLegalActive = legalLinks.some((l) => l.href === currentPath);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xs border-b border-[#EAEAEA]">
      <Container size="lg">
        <div className="flex items-center justify-between h-18">
          <BrandLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            <Link
              to="/#restricoes"
              className="px-3.5 py-2 rounded-full text-sm font-medium text-[#333333] hover:text-[#11181C] hover:bg-[#F5F5F5] transition-colors"
            >
              Explorar filtros
            </Link>
            <Link
              to="/#como-funciona"
              className="px-3.5 py-2 rounded-full text-sm font-medium text-[#333333] hover:text-[#11181C] hover:bg-[#F5F5F5] transition-colors"
            >
              Como funciona
            </Link>
            <Link
              to="/#restaurantes"
              className="px-3.5 py-2 rounded-full text-sm font-medium text-[#333333] hover:text-[#11181C] hover:bg-[#F5F5F5] transition-colors"
            >
              Para restaurantes
            </Link>

            {/* Legal & Privacy Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLegalMenuOpen(!legalMenuOpen)}
                aria-expanded={legalMenuOpen}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isLegalActive
                    ? 'text-[#007E7F] bg-[#F4FDFB]'
                    : 'text-[#333333] hover:text-[#11181C] hover:bg-[#F5F5F5]'
                }`}
              >
                <span>Privacidade & Dados</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    legalMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {legalMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-lg border border-[#EAEAEA] p-2 z-50">
                  <div className="px-3 py-2 border-b border-[#EAEAEA] mb-1">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#687076]">
                      Transparência & Documentos
                    </div>
                  </div>
                  <div className="space-y-0.5">
                    {legalLinks.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setLegalMenuOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl text-xs transition-colors ${
                          currentPath === item.href
                            ? 'bg-[#F4FDFB] text-[#007E7F] font-bold'
                            : 'text-[#333333] hover:bg-[#FAFAFA]'
                        }`}
                      >
                        <div className="p-1.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA] mt-0.5">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#11181C]">{item.label}</div>
                          <p className="text-[11px] text-[#687076] font-normal mt-0.5 leading-snug">
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
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                currentPath === '/suporte'
                  ? 'text-[#007E7F] bg-[#F4FDFB] font-bold'
                  : 'text-[#333333] hover:text-[#11181C] hover:bg-[#F5F5F5]'
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
              iconLeft={<Smartphone className="w-4 h-4" />}
            >
              Baixar App
            </Button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#333333] hover:bg-[#F5F5F5] cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAEAEA] bg-white px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/#restricoes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#11181C] hover:bg-[#FAFAFA]"
            >
              Explorar filtros
            </Link>
            <Link
              to="/#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#11181C] hover:bg-[#FAFAFA]"
            >
              Como funciona
            </Link>
            <Link
              to="/#restaurantes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#11181C] hover:bg-[#FAFAFA]"
            >
              Para restaurantes
            </Link>
          </nav>

          <div className="pt-3 border-t border-[#EAEAEA]">
            <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#687076] px-3 mb-2">
              Privacidade & Conformidade
            </div>
            <div className="space-y-1">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium ${
                    currentPath === item.href
                      ? 'bg-[#F4FDFB] text-[#007E7F] font-bold'
                      : 'text-[#333333] hover:bg-[#FAFAFA]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#EAEAEA]">
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
              Baixar App no Android
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
