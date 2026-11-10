import React from 'react';
import { Link } from '../../router';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbProps {
  currentPageTitle: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPageTitle }) => {
  return (
    <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 select-none" aria-label="Navegação estrutural">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-[#009C9D] transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Início</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="font-semibold text-slate-800 truncate">
        {currentPageTitle}
      </span>
    </nav>
  );
};
