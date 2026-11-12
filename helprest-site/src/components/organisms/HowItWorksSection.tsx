import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { Smartphone, CheckCircle, Navigation, ShieldCheck, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Selecione suas Restrições',
      description: 'Defina no seu perfil as suas necessidades: sem glúten, sem lactose, vegano, alergias a oleaginosas, frutos do mar e muito mais. O app memoriza tudo de forma privada.',
      icon: <ShieldCheck className="w-6 h-6 text-[#009C9D]" />,
      badge: 'Perfil Inteligente',
    },
    {
      step: '02',
      title: 'Descubra Locais com Match 100%',
      description: 'O HelpRest cruza os dados das cozinhas e cardápios cadastrados com a sua localização em tempo real, priorizando estabelecimentos que atendem todas as suas flags sem risco.',
      icon: <Navigation className="w-6 h-6 text-[#007E7F]" />,
      badge: 'Algoritmo Haversine',
    },
    {
      step: '03',
      title: 'Comprove e Compartilhe com Segurança',
      description: 'Visitas reais só podem ser avaliadas e fotografadas se o GPS validar que você está a menos de 100m do restaurante, garantindo um feed social autêntico e sem fakes.',
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
      badge: 'Geofencing 100m',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTag>
            <Smartphone className="w-3.5 h-3.5" />
            Simples, Confiável e Rápido
          </SectionTag>
          <Heading2>
            Como o HelpRest Transforma a sua Experiência Gastronômica
          </Heading2>
          <Paragraph className="mt-3">
            Chega de gastar horas ligando para restaurantes, interrogando garçons ou arriscar sua saúde. Conheça as etapas que fazem da nossa plataforma um refúgio seguro.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#009C9D]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with step number & badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#009C9D] to-slate-400 font-mono">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#E6F7F7] text-[#007E7F] border border-[#009C9D]/20">
                    {item.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs text-slate-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
