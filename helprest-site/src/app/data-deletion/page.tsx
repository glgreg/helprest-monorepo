import type { Metadata } from 'next';
import { DataDeletionView } from '../../views/DataDeletionView';

export const metadata: Metadata = {
  title: 'Exclusão de Conta e Dados Pessoais',
  description:
    'Solicite a exclusão definitiva de sua conta e de todos os dados pessoais no HelpRest (com.helprest) com prazo legal LGPD de até 15 dias corridos e expurgo completo de avaliações e fotos.',
  alternates: {
    canonical: '/exclusao-de-dados',
  },
};

export default function DataDeletionAliasPage() {
  return <DataDeletionView />;
}
