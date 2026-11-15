import React from 'react';
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

const AppRoutes: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path (handle trailing slashes or subpaths)
  const normalizedPath = currentPath.split('#')[0].replace(/\/$/, '') || '/';

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
