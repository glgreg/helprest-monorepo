import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
import { SlidersHorizontal, UtensilsCrossed, MapPin } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const pillars = [
    {
      title: 'Filtro real desde o cadastro',
      description:
        'Durante o onboarding você marca intolerâncias, alergias ou estilo alimentar. Nossa busca calcula o match de cada cozinha e oculta locais sem correspondência.',
      icon: <SlidersHorizontal className="w-5 h-5 text-[#007677]" aria-hidden="true" />,
    },
    {
      title: 'Aba “Para você” separada de “Outros Itens”',
      description:
        'Dentro de cada restaurante, os pratos compatíveis ficam isolados logo na primeira aba, com lista explícita de ingredientes e alertas visuais para itens com alérgenos.',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#007677]" aria-hidden="true" />,
    },
    {
      title: 'Visitas confirmadas presencialmente',
      description:
        'Para manter a confiança da comunidade, avaliações com foto só podem ser publicadas quando o GPS valida presença dentro de 100 metros do restaurante.',
      icon: <MapPin className="w-5 h-5 text-[#007677]" aria-hidden="true" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-white">
      <Container size="lg">
        <div className="max-w-2xl mb-10">
          <Heading2>Como o HelpRest funciona no dia a dia</Heading2>
          <Paragraph className="mt-2.5">
            Em vez de promessas genéricas, o aplicativo combina filtragem rigorosa, leitura clara de cardápio e validação geográfica presencial.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="tonal-surface bg-[#EDF1EF] rounded-3xl p-6 sm:p-7 flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-white shadow-2xs flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-[#181C1B] leading-snug">{item.title}</h3>

              <p className="text-sm text-[#3A413F] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
