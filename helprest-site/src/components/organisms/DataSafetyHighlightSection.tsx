import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { Link } from '../../router';
import { ShieldCheck, Lock, Trash2, HeartPulse, MapPin, ArrowRight } from 'lucide-react';

export const DataSafetyHighlightSection: React.FC = () => {
  const docs = [
    {
      title: 'Política de Privacidade',
      desc: 'Detalhes da LGPD, localização em segundo plano opcional e Google Sign-In.',
      href: '/privacidade',
      icon: <ShieldCheck className="w-4 h-4 text-[#009C9D]" />,
    },
    {
      title: 'Segurança dos Dados',
      desc: 'Permissões Android declaradas, criptografia TLS 1.3 e SDKs integrados.',
      href: '/seguranca-dos-dados',
      icon: <Lock className="w-4 h-4 text-[#007E7F]" />,
    },
    {
      title: 'Exclusão de Conta e Dados',
      desc: 'Solicite a remoção da sua conta ou histórico diretamente pela web.',
      href: '/exclusao-de-dados',
      icon: <Trash2 className="w-4 h-4 text-[#D93829]" />,
    },
    {
      title: 'Aviso de Saúde & Alérgenos',
      desc: 'Entenda os limites informativos do app e cuidados com contaminação cruzada.',
      href: '/aviso-de-saude',
      icon: <HeartPulse className="w-4 h-4 text-[#D4A710]" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#EAEAEA]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <SectionTag>Privacidade & permissões</SectionTag>
            <Heading2>Transparência no uso dos seus dados</Heading2>
            <Paragraph>
              Restrições alimentares e localização são tratadas apenas para filtrar locais e validar visitas presenciais. Não vendemos dados e não exibimos publicidade invasiva.
            </Paragraph>
            <div className="pt-2 flex items-start gap-2.5 text-xs text-[#687076]">
              <MapPin className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5" />
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
                className="group bg-[#FAFAFA] hover:bg-[#F4FDFB] border border-[#EAEAEA] hover:border-[#B2DFDB] rounded-2xl p-5 flex flex-col justify-between gap-3 transition-colors"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#EAEAEA] flex items-center justify-center">
                    {doc.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#11181C] group-hover:text-[#007E7F]">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-[#687076] leading-relaxed">{doc.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#007E7F]">
                  <span>Acessar documento</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
