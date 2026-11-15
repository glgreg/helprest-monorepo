import React from 'react';
import { Link } from '../../router';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbProps {
  currentPageTitle: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPageTitle }) => {
  return (
    <nav
      className="flex items-center gap-2 text-xs sm:text-sm text-[#525B58] mb-5"
      aria-label="Navegação estrutural"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 min-h-[36px] hover:text-[#00696A] transition-colors"
      >
        <Home className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Início</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-[#747D7B]" aria-hidden="true" />
      <span className="font-semibold text-[#181C1B] truncate" aria-current="page">
        {currentPageTitle}
      </span>
    </nav>
  );
};
