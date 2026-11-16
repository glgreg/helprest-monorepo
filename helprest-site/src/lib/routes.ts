export interface LegalNavItem {
  label: string;
  href: string;
}

export const LEGAL_NAV_ITEMS: LegalNavItem[] = [
  { label: 'Política de Privacidade', href: '/privacidade' },
  { label: 'Segurança dos Dados', href: '/seguranca-dos-dados' },
  { label: 'Exclusão de Conta e Dados', href: '/exclusao-de-dados' },
  { label: 'Aviso de Saúde & Alérgenos', href: '/aviso-de-saude' },
  { label: 'Termos de Uso', href: '/termos' },
  { label: 'Central de Suporte', href: '/suporte' },
];

const ROUTE_ALIASES: Record<string, string> = {
  '/privacy': '/privacidade',
  '/data-deletion': '/exclusao-de-dados',
  '/data-safety': '/seguranca-dos-dados',
  '/health-disclaimer': '/aviso-de-saude',
  '/terms': '/termos',
  '/support': '/suporte',
  '/contato': '/suporte',
};

export function normalizeAppPath(pathname: string | null | undefined): string {
  const clean = (pathname || '/').split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
  return ROUTE_ALIASES[clean] ?? clean;
}
