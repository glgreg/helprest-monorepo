import type { Metadata } from 'next';
import { DataSafetyView } from '../../views/DataSafetyView';

export const metadata: Metadata = {
  title: 'Segurança dos Dados (Data Safety)',
  description:
    'Espelho público das declarações de Segurança dos Dados (Data Safety) do HelpRest no Google Play Console: criptografia TLS, Google OAuth2, permissões Android e exclusão em até 15 dias.',
  alternates: {
    canonical: '/seguranca-dos-dados',
  },
};

export default function DataSafetyPage() {
  return <DataSafetyView />;
}
