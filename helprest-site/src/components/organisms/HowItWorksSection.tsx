import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { SlidersHorizontal, UtensilsCrossed, MapPin } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const pillars = [
    {
      index: '01',
      label: 'Flags & zero-match',
      title: 'Filtro real desde o cadastro',
      description:
        'Durante o onboarding você marca intolerâncias, alergias ou estilo alimentar. Nossa busca calcula o match de cada cozinha e oculta locais sem correspondência.',
      highlight: 'Sem surpresas no resultado',
      icon: <SlidersHorizontal className="w-5 h-5 text-[#007E7F]" />,
    },
    {
      index: '02',
      label: 'Cardápio organizado',
      title: 'Aba “Para você” separada de “Outros Itens”',
      description:
        'Dentro de cada restaurante, os pratos compatíveis ficam isolados logo na primeira aba, com lista explícita de ingredientes e alertas visuais para itens com alérgenos.',
      highlight: 'Foco em ingredientes reais',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#007E7F]" />,
    },
    {
      index: '03',
      label: 'Geofencing de 100 metros',
      title: 'Visitas confirmadas presencialmente',
      description:
        'Para manter a confiança da comunidade, avaliações com foto só podem ser publicadas quando o GPS valida presença dentro de 100 metros do restaurante.',
      highlight: 'Feed autêntico de quem foi',
      icon: <MapPin className="w-5 h-5 text-[#007E7F]" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-[#FAFAFA]">
      <Container size="lg">
        <div className="max-w-2xl mb-10">
          <SectionTag>Engenharia de confiança</SectionTag>
          <Heading2>Três camadas do HelpRest para quem come com restrição</Heading2>
          <Paragraph className="mt-2.5">
            Em vez de promessas genéricas, o aplicativo combina filtragem rigorosa, leitura clara de cardápio e validação geográfica presencial.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item) => (
            <div
              key={item.index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAEAEA] flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#F4FDFB] border border-[#B2DFDB] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#687076]">
                    {item.index} • {item.label}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#11181C] leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#687076] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA] font-mono text-[11px] font-bold uppercase tracking-wider text-[#007E7F]">
                {item.highlight}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
