import type { Metadata } from 'next';
import { HomeView } from '../views/HomeView';

export const metadata: Metadata = {
  title: {
    absolute: 'HelpRest | Restaurantes Compatíveis com suas Restrições Alimentares',
  },
  description:
    'Descubra restaurantes compatíveis com suas restrições alimentares — sem glúten, sem lactose, vegano, vegetariano e alergias — com cardápios separados e avaliações validadas por GPS em 100m.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeView />;
}
