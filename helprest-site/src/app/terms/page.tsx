import type { Metadata } from 'next';
import { TermsOfServiceView } from '../../views/TermsOfServiceView';

export const metadata: Metadata = {
  title: 'Termos de Uso e Segurança Infantil',
  description:
    'Termos de Uso do HelpRest (com.helprest), regras de conteúdo gerado por usuários (UGC), verificação por geofencing de 100m, faixas etárias (Art. 14 LGPD) e Padrões de Segurança Infantil (CSAE/CSAM).',
  alternates: {
    canonical: '/termos',
  },
};

export default function TermsAliasPage() {
  return <TermsOfServiceView />;
}
