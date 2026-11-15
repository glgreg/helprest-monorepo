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
      icon: <ShieldCheck className="w-4 h-4 text-[#007677]" aria-hidden="true" />,
    },
    {
      title: 'Segurança dos Dados',
      desc: 'Permissões Android declaradas, criptografia TLS 1.3 e SDKs integrados.',
      href: '/seguranca-dos-dados',
      icon: <Lock className="w-4 h-4 text-[#007677]" aria-hidden="true" />,
    },
    {
      title: 'Exclusão de Conta e Dados',
      desc: 'Solicite a remoção da sua conta ou histórico diretamente pela web.',
      href: '/exclusao-de-dados',
      icon: <Trash2 className="w-4 h-4 text-[#B42318]" aria-hidden="true" />,
    },
    {
      title: 'Aviso de Saúde & Alérgenos',
      desc: 'Entenda os limites informativos do app e cuidados com contaminação cruzada.',
      href: '/aviso-de-saude',
      icon: <HeartPulse className="w-4 h-4 text-[#C43E32]" aria-hidden="true" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Heading2>Transparência no uso dos seus dados</Heading2>
            <Paragraph>
              Restrições alimentares e localização são tratadas apenas para filtrar locais e validar visitas presenciais. Não vendemos dados e não exibimos publicidade invasiva.
            </Paragraph>
            <div className="rounded-2xl bg-[#F4F6F5] p-4 flex items-start gap-2.5 text-xs text-[#3A413F] leading-relaxed">
              <MapPin
                className="w-4 h-4 text-[#007677] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>
                Permissões de GPS em segundo plano e câmera são opcionais e podem ser desativadas nas configurações do Android.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {docs.map((doc) => (
              <Link
                key={doc.href}
                to={doc.href}
                className="group tonal-surface bg-[#F4F6F5] hover:bg-[#E9F3F2] rounded-3xl p-5 flex flex-col justify-between gap-4 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-2xs flex items-center justify-center">
                    {doc.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#181C1B] group-hover:text-[#00696A]">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-[#525B58] leading-relaxed">{doc.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00696A]">
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
