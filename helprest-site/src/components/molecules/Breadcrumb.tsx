import React from 'react';
import { Link } from '../../router';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbProps {
  currentPageTitle: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPageTitle }) => {
  return (
    <nav
      className="flex items-center gap-2 text-xs sm:text-sm text-[#687076] mb-5 select-none"
      aria-label="Navegação estrutural"
    >
      <Link to="/" className="inline-flex items-center gap-1 hover:text-[#007E7F] transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Início</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-[#9BA1A6]" />
      <span className="font-bold text-[#11181C] truncate">{currentPageTitle}</span>
    </nav>
  );
};
