import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { 
  ShieldCheck, 
  MapPin, 
  UtensilsCrossed, 
  Users, 
  Building2, 
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';

export const AppFeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Algoritmo de Compatibilidade de Flags',
      description: 'Nosso motor de cálculo granular cruza cada prato e protocolo de cozinha com as suas restrições declaradas, garantindo que locais 100% compatíveis ocupem o topo e opções sem nenhuma correspondência sejam eliminadas.',
      icon: <Layers className="w-5 h-5 text-[#009C9D]" />,
    },
    {
      title: 'Validação de Visita por Geofencing (100m)',
      description: 'Acabe com avaliações compradas ou falsas. No HelpRest, a publicação de fotos de refeições no feed social exige validação das coordenadas GPS do dispositivo dentro de um raio de 100 metros do restaurante.',
      icon: <MapPin className="w-5 h-5 text-amber-600" />,
    },
    {
      title: 'Auditoria de Alérgenos & Cardápio Digital',
      description: 'Consulte ingredientes, rotulagem de alérgenos e avisos de potenciais contaminações cruzadas em tempo real antes de sair de casa ou fazer seu pedido.',
      icon: <UtensilsCrossed className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Feed Social de Quem Entende sua Dor',
      description: 'Siga amigos e membros da comunidade com as mesmas alergias. Descubra novidades locais, lançamentos de sobremesas seguras e dicas de viagens gastronômicas.',
      icon: <Users className="w-5 h-5 text-cyan-600" />,
    },
    {
      title: 'Painel Empresarial para Restaurantes',
      description: 'Ferramenta completa para donos de restaurantes gerenciarem seus selos de preparo seguro, cadastrarem cardápios com fotos e propagarem alterações em lote para filiais.',
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Privacidade & Proteção de Dados (LGPD)',
      description: 'Suas informações sensíveis de saúde e preferências alimentares são protegidas por criptografia moderna em trânsito (TLS 1.3) e hashes fortes (Argon2id). Seus dados nunca são vendidos a terceiros.',
      icon: <Lock className="w-5 h-5 text-slate-800" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTag>
            <Sparkles className="w-3.5 h-3.5" />
            Engenharia de Produto
          </SectionTag>
          <Heading2>
            Recursos Desenvolvidos Pensando na sua Segurança
          </Heading2>
          <Paragraph className="mt-3">
            O HelpRest une rigor técnico, tecnologia de geolocalização e engajamento comunitário para criar a experiência mais confiável do mercado.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 hover:bg-white hover:border-[#009C9D]/40 hover:shadow-xl hover:shadow-[#009C9D]/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-5 shadow-2xs">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#007E7F]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Padrão HelpRest Verificado</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
