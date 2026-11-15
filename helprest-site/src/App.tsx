import React, { useEffect } from 'react';
import { RouterProvider } from './router';
import { useRouter } from './router/useRouter';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { DataDeletionPage } from './pages/DataDeletionPage';
import { DataSafetyPage } from './pages/DataSafetyPage';
import { HealthDisclaimerPage } from './pages/HealthDisclaimerPage';
import { SupportPage } from './pages/SupportPage';
import { ModalProvider } from './context/ModalContext';

const ROUTE_TITLES: Record<string, string> = {
  '/privacidade': 'Política de Privacidade | HelpRest',
  '/privacy': 'Política de Privacidade | HelpRest',
  '/termos': 'Termos de Uso | HelpRest',
  '/terms': 'Termos de Uso | HelpRest',
  '/exclusao-de-dados': 'Exclusão de Conta e Dados | HelpRest',
  '/data-deletion': 'Exclusão de Conta e Dados | HelpRest',
  '/seguranca-dos-dados': 'Segurança dos Dados | HelpRest',
  '/data-safety': 'Segurança dos Dados | HelpRest',
  '/aviso-de-saude': 'Aviso Legal de Saúde e Alérgenos | HelpRest',
  '/health-disclaimer': 'Aviso Legal de Saúde e Alérgenos | HelpRest',
  '/suporte': 'Central de Suporte | HelpRest',
  '/support': 'Central de Suporte | HelpRest',
  '/contato': 'Central de Suporte | HelpRest',
  '/': 'HelpRest | Descoberta gastronômica segura para restrições alimentares',
};

const AppRoutes: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path (handle trailing slashes or subpaths)
  const normalizedPath = currentPath.split('#')[0].replace(/\/$/, '') || '/';

  useEffect(() => {
    document.title =
      ROUTE_TITLES[normalizedPath] ||
      'HelpRest | Descoberta gastronômica segura para restrições alimentares';
  }, [normalizedPath]);

  switch (normalizedPath) {
    case '/privacidade':
    case '/privacy':
      return <PrivacyPolicyPage />;
    case '/termos':
    case '/terms':
      return <TermsOfServicePage />;
    case '/exclusao-de-dados':
    case '/data-deletion':
      return <DataDeletionPage />;
    case '/seguranca-dos-dados':
    case '/data-safety':
      return <DataSafetyPage />;
    case '/aviso-de-saude':
    case '/health-disclaimer':
      return <HealthDisclaimerPage />;
    case '/suporte':
    case '/support':
    case '/contato':
      return <SupportPage />;
    case '/':
    default:
      return <HomePage />;
  }
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </RouterProvider>
  );
};
