import type { Metadata } from 'next';
import { SupportView } from '../../views/SupportView';

export const metadata: Metadata = {
  title: 'Central de Suporte & Contato',
  description:
    'Canal oficial de suporte técnico, denúncias e contato do desenvolvedor do HelpRest (Gustavo L. Gregorio · suporte@helprest.net · privacidade@helprest.net · com.helprest).',
  alternates: {
    canonical: '/suporte',
  },
};

export default function SupportAliasPage() {
  return <SupportView />;
}
