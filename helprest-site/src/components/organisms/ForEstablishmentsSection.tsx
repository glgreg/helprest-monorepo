import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Link } from '../../router';
import { 
  Store, 
  TrendingUp, 
  Users, 
  BadgeCheck, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export const ForEstablishmentsSection: React.FC = () => {
  return (
    <section id="restaurantes" className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009C9D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionTag className="bg-slate-800 text-[#21B2B3] border-[#009C9D]/30">
              <Store className="w-3.5 h-3.5" />
              Para Restaurantes & Bares
            </SectionTag>

            <Heading2 className="text-white">
              Sua Cozinha Segura Merece Ser Descoberta por Quem Precisa.
            </Heading2>

            <Paragraph className="text-slate-300">
              Mais de <strong>30% da população brasileira</strong> possui alguma restrição alimentar ou segue dietas específicas. Quando encontram um estabelecimento em que confiam, tornam-se clientes fiéis e trazem consigo grupos de amigos e familiares.
            </Paragraph>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-4.5 space-y-2">
                <div className="flex items-center gap-2 text-[#F7CC33] font-bold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>Aumento de Faturamento</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conquiste mesas completas: quem tem restrição costuma decidir o restaurante de todo o grupo.
                </p>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-4.5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Selo de Cozinha Auditada</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Destaque no app seus protocolos de esterilização, separação de utensílios e controle de insumos.
                </p>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-4.5 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Comunidade Engajada</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Receba visitas georreferenciadas com avaliações reais de clientes com restrições alimentares.
                </p>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-4.5 space-y-2">
                <div className="flex items-center gap-2 text-[#21B2B3] font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Gestão Multi-Filiais</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Controle matriz e filiais, replicando cardápios e ajustando particularidades por unidade.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link to="/suporte">
                <Button
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Cadastrar Meu Estabelecimento
                </Button>
              </Link>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#F7CC33]" />
                Auditoria inicial e suporte especializado inclusos
              </span>
            </div>
          </div>

          {/* Right Card / Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="text-xs uppercase font-bold tracking-wider text-[#21B2B3] mb-2">
                Painel do Administrador HelpRest
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Como Funciona a Inscrição para Empresas
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#009C9D]/20 text-[#21B2B3] border border-[#009C9D]/40 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Crie sua Conta Empresarial</strong>
                    Informe dados básicos, CNPJ e localização com mapa interativo.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#009C9D]/20 text-[#21B2B3] border border-[#009C9D]/40 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Declare suas Flags & Protocolos</strong>
                    Marque as restrições que sua cozinha e equipe conseguem atender de maneira segura.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#009C9D]/20 text-[#21B2B3] border border-[#009C9D]/40 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Publique seu Cardápio Digital</strong>
                    Adicione fotos dos pratos, preços, tabelas de alérgenos e opções substitutivas.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#009C9D]/20 text-[#21B2B3] border border-[#009C9D]/40 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Receba Clientes Qualificados</strong>
                    Seu restaurante passa a ser ranqueado para milhares de usuários próximos com restrições compatíveis.
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-700/80 text-center">
                <Link to="/suporte" className="text-xs text-[#21B2B3] hover:underline font-semibold">
                  Fale com nossa equipe comercial para parcerias e patrocínios →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
