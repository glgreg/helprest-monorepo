import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
import { Link } from '../../router';
import { ShieldCheck, Lock, Trash2, HeartPulse, MapPin, ArrowRight } from 'lucide-react';

export const DataSafetyHighlightSection: React.FC = () => {
  const docs = [
    {
      title: 'Política de Privacidade',
      desc: 'Detalhes da LGPD, localização em segundo plano opcional e Google Sign-In.',
      href: '/privacidade',
      icon: <ShieldCheck className="w-5 h-5 text-[#009C9D]" aria-hidden="true" />,
    },
    {
      title: 'Segurança dos Dados',
      desc: 'Permissões Android declaradas, criptografia TLS 1.3 e SDKs integrados.',
      href: '/seguranca-dos-dados',
      icon: <Lock className="w-5 h-5 text-[#009C9D]" aria-hidden="true" />,
    },
    {
      title: 'Exclusão de Conta e Dados',
      desc: 'Solicite a remoção da sua conta ou histórico diretamente pela web.',
      href: '/exclusao-de-dados',
      icon: <Trash2 className="w-5 h-5 text-[#B42318]" aria-hidden="true" />,
    },
    {
      title: 'Aviso de Saúde & Alérgenos',
      desc: 'Entenda os limites informativos do app e cuidados com contaminação cruzada.',
      href: '/aviso-de-saude',
      icon: <HeartPulse className="w-5 h-5 text-[#FF533F]" aria-hidden="true" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F7F7F8]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Heading2>Transparência no uso dos seus dados</Heading2>
            <Paragraph>
              Restrições alimentares e localização são tratadas apenas para filtrar locais e validar visitas presenciais. Não vendemos dados e não exibimos publicidade de redes de anúncios.
            </Paragraph>
            <p className="flex items-start gap-2.5 pt-1 text-xs text-[#596168] leading-relaxed">
              <MapPin
                className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>
                Permissões de GPS em segundo plano e câmera são opcionais e podem ser revogadas nas configurações do Android.
              </span>
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {docs.map((doc) => (
              <Link
                key={doc.href}
                to={doc.href}
                className="group tonal-surface bg-white hover:bg-[#EFFBFB] rounded-3xl p-5 sm:p-6 shadow-[0_2px_10px_-4px_rgba(17,24,28,0.05)] flex flex-col justify-between gap-4 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="inline-flex items-center">{doc.icon}</div>
                  <h3 className="text-sm sm:text-base font-bold text-[#11181C] group-hover:text-[#00797A]">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-[#596168] leading-relaxed">{doc.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00797A]">
                  <span>Acessar documento</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
