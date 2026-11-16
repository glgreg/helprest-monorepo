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
      icon: <Layers className="w-5 h-5 text-[#009C9D]" aria-hidden="true" />,
    },
    {
      title: 'Validação de Visita por Geofencing (100m)',
      description:
        'Acabe com avaliações compradas ou falsas. No HelpRest, a publicação de fotos de refeições no feed social exige validação das coordenadas GPS do dispositivo dentro de um raio de 100 metros do restaurante.',
      icon: <MapPin className="w-5 h-5 text-[#009C9D]" aria-hidden="true" />,
    },
    {
      title: 'Auditoria de Alérgenos & Cardápio Digital',
      description:
        'Consulte ingredientes, rotulagem de alérgenos e avisos de potenciais contaminações cruzadas em tempo real antes de sair de casa ou fazer seu pedido.',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#009C9D]" aria-hidden="true" />,
    },
    {
      title: 'Feed Social de Quem Entende sua Rotina',
      description:
        'Siga amigos e membros da comunidade com as mesmas alergias. Descubra novidades locais, lançamentos de sobremesas seguras e dicas gastronômicas.',
      icon: <Users className="w-5 h-5 text-[#009C9D]" aria-hidden="true" />,
    },
    {
      title: 'Painel Empresarial para Restaurantes',
      description:
        'Ferramenta completa para donos de restaurantes gerenciarem seus selos de preparo seguro, cadastrarem cardápios com fotos e propagarem alterações em lote para filiais.',
      icon: <Building2 className="w-5 h-5 text-[#009C9D]" aria-hidden="true" />,
    },
    {
      title: 'Privacidade & Proteção de Dados (LGPD)',
      description:
        'Suas restrições alimentares são tratadas com consentimento específico (LGPD Art. 11, I), protegidas por criptografia em trânsito (HTTPS/TLS) e autenticação via Google OAuth2 com tokens JWT assinados. Seus dados nunca são vendidos a terceiros.',
      icon: <Lock className="w-5 h-5 text-[#11181C]" aria-hidden="true" />,
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
              className="tonal-surface bg-[#F7F7F8] rounded-3xl p-7 hover:bg-[#F1F2F4] transition-colors space-y-3"
            >
              <div className="inline-flex items-center">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#11181C] leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-[#3F454A] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
