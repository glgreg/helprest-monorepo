import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export interface BreadcrumbProps {
  currentPageTitle: string;
  currentHref?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  currentPageTitle,
  currentHref = '#',
}) => {
  return (
    <nav className="hr-breadcrumb mb-5 text-xs sm:text-sm text-[#596168]" aria-label="Navegação estrutural">
      <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 min-h-[36px] text-[#596168] hover:text-[#00797A] hover:underline focus-visible:underline transition-colors"
          >
            <Home className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <span>Início</span>
          </Link>
        </li>
        <li className="min-w-0">
          <Link
            href={currentHref}
            aria-current="page"
            className="inline-flex items-center min-h-[36px] font-semibold text-[#11181C] hover:underline focus-visible:underline"
          >
            <span>{currentPageTitle}</span>
          </Link>
        </li>
      </ol>
    </nav>
  );
};
