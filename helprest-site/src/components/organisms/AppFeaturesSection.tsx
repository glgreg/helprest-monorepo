import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
import {
  MapPin,
  UtensilsCrossed,
  Users,
  Building2,
  Lock,
  Layers,
} from 'lucide-react';

export const AppFeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Algoritmo de Compatibilidade de Flags',
      description:
        'Nosso motor de cálculo granular cruza cada prato e protocolo de cozinha com as suas restrições declaradas, garantindo que locais 100% compatíveis ocupem o topo e opções sem nenhuma correspondência sejam eliminadas.',
      icon: <Layers className="w-5 h-5 text-[#007677]" aria-hidden="true" />,
    },
    {
      title: 'Validação de Visita por Geofencing (100m)',
      description:
        'Acabe com avaliações compradas ou falsas. No HelpRest, a publicação de fotos de refeições no feed social exige validação das coordenadas GPS do dispositivo dentro de um raio de 100 metros do restaurante.',
      icon: <MapPin className="w-5 h-5 text-[#007677]" aria-hidden="true" />,
    },
    {
      title: 'Auditoria de Alérgenos & Cardápio Digital',
      description:
        'Consulte ingredientes, rotulagem de alérgenos e avisos de potenciais contaminações cruzadas em tempo real antes de sair de casa ou fazer seu pedido.',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#137333]" aria-hidden="true" />,
    },
    {
      title: 'Feed Social de Quem Entende sua Rotina',
      description:
        'Siga amigos e membros da comunidade com as mesmas alergias. Descubra novidades locais, lançamentos de sobremesas seguras e dicas gastronômicas.',
      icon: <Users className="w-5 h-5 text-[#007677]" aria-hidden="true" />,
    },
    {
      title: 'Painel Empresarial para Restaurantes',
      description:
        'Ferramenta completa para donos de restaurantes gerenciarem seus selos de preparo seguro, cadastrarem cardápios com fotos e propagarem alterações em lote para filiais.',
      icon: <Building2 className="w-5 h-5 text-[#007677]" aria-hidden="true" />,
    },
    {
      title: 'Privacidade & Proteção de Dados (LGPD)',
      description:
        'Suas informações de preferências alimentares são protegidas por criptografia moderna em trânsito (TLS 1.3) e hashes fortes (Argon2id). Seus dados nunca são vendidos a terceiros.',
      icon: <Lock className="w-5 h-5 text-[#181C1B]" aria-hidden="true" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Heading2>Recursos desenvolvidos para comer fora com clareza</Heading2>
          <Paragraph className="mt-3">
            O HelpRest une precisão nos filtros alimentares, geolocalização e relatos comunitários em uma única experiência.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="tonal-surface bg-[#F4F6F5] rounded-3xl p-7 hover:bg-[#EDF1EF] transition-colors space-y-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-white shadow-2xs flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#181C1B] leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-[#3A413F] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
