import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';

export const HowItWorksSection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Filtro real desde o cadastro',
      description:
        'Durante o onboarding você marca intolerâncias, alergias ou estilo alimentar. Nossa busca calcula o match de cada cozinha e oculta locais sem correspondência.',
    },
    {
      step: '02',
      title: 'Aba “Para você” separada de “Outros Itens”',
      description:
        'Dentro de cada restaurante, os pratos compatíveis ficam isolados logo na primeira aba, com lista explícita de ingredientes e alertas visuais para itens com alérgenos.',
    },
    {
      step: '03',
      title: 'Visitas confirmadas presencialmente',
      description:
        'Para manter a confiança da comunidade, avaliações com foto só podem ser publicadas quando o GPS valida presença dentro de 100 metros do restaurante.',
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
              key={item.step}
              className="tonal-surface bg-[#F7F7F8] rounded-3xl p-6 sm:p-8 flex flex-col gap-3.5"
            >
              <span
                className="font-display text-3xl font-bold tracking-tight text-[#009C9D] tabular-nums leading-none"
                aria-hidden="true"
              >
                {item.step}
              </span>

              <h3 className="text-lg font-bold text-[#11181C] leading-snug">{item.title}</h3>

              <p className="text-sm text-[#3F454A] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
