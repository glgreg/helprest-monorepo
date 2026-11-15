import type { Metadata } from 'next';
import { HealthDisclaimerView } from '../../views/HealthDisclaimerView';

export const metadata: Metadata = {
  title: 'Aviso Legal de Saúde e Alérgenos',
  description:
    'Orientações sobre o propósito informativo de descoberta gastronômica do HelpRest (com.helprest), prevenção de contaminação cruzada e cuidados para celíacos e alérgicos.',
  alternates: {
    canonical: '/aviso-de-saude',
  },
};

export default function HealthDisclaimerPage() {
  return <HealthDisclaimerView />;
}
