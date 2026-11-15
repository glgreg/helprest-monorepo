import type { Metadata } from 'next';
import { PrivacyPolicyView } from '../../views/PrivacyPolicyView';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade do aplicativo HelpRest (com.helprest): bases legais da LGPD, dados sensíveis alimentares (Art. 11), localização em segundo plano, transferência internacional e exclusão definitiva.',
  alternates: {
    canonical: '/privacidade',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
