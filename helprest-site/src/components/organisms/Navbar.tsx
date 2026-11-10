import React, { useState } from 'react';
import { BrandLogo } from '../atoms/BrandLogo';
import { Button } from '../atoms/Button';
import { Container } from '../atoms/Container';
import { Link } from '../../router';
import { useRouter } from '../../router/useRouter';
import { Menu, X, Smartphone, ShieldCheck, HelpCircle, Store } from 'lucide-react';
import { useModal } from '../../context/useModal';

export interface NavbarProps {
  onOpenDownloadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath } = useRouter();
  const { openDownloadModal: openGlobalModal } = useModal();

  const handleOpenModal = onOpenDownloadModal || openGlobalModal;

  const navLinks = [
    { label: 'Como Funciona', href: '/#como-funciona', icon: <Smartphone className="w-4 h-4" /> },
    { label: 'Restrições', href: '/#restricoes', icon: <ShieldCheck className="w-4 h-4" /> },
    { label: 'Para Restaurantes', href: '/#restaurantes', icon: <Store className="w-4 h-4" /> },
    { label: 'Segurança dos Dados', href: '/seguranca-dos-dados', icon: <ShieldCheck className="w-4 h-4" /> },
    { label: 'Suporte', href: '/suporte', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <Container size="lg">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#009C9D] bg-[#E6F7F7]/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
          <div className="flex items-center sm:hidden">
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#009C9D] hover:bg-[#E6F7F7]/50"
              >
                <span className="text-[#009C9D]">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
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
