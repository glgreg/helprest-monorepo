import React from 'react';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Link } from '../../router';
import { Store, Star, MapPin, UtensilsCrossed, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ForEstablishmentsSection: React.FC = () => {
  return (
    <section id="restaurantes" className="py-16 sm:py-20 bg-[#009C9D] text-white">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols): App Teal Intro matching helprest-app/(auth)/home.tsx */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#E0F2F1]">
              <Store className="w-4 h-4" />
              <span>Para restaurantes & cafeterias</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.16]">
              Sua cozinha segura no mapa de quem realmente precisa.
            </h2>

            <p className="text-base text-white/90 leading-relaxed max-w-xl">
              Clientes com restrições alimentares costumam escolher onde o grupo inteiro vai comer. No HelpRest Empresas você cadastra sua matriz e filiais, informa quais flags sua cozinha atende e detalha os ingredientes de cada prato.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/95 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F7CC33] flex-shrink-0 mt-0.5" />
                <span>Cadastro com CNPJ e endereço georreferenciado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F7CC33] flex-shrink-0 mt-0.5" />
                <span>Controle separado por flags alimentares</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F7CC33] flex-shrink-0 mt-0.5" />
                <span>Gestão unificada para matriz e filiais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F7CC33] flex-shrink-0 mt-0.5" />
                <span>Visitas comprovadas em raio de 100 metros</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/suporte">
                <Button variant="white" size="lg" iconRight={<ArrowRight className="w-4 h-4" />}>
                  Falar com o Suporte Comercial
                </Button>
              </Link>
              <span className="text-xs text-white/80">
                Atendimento direto: suporte@helprest.com
              </span>
            </div>
          </div>

          {/* Right Column (6 cols): App-Authentic White Dashboard Card mirroring (establishment)/dashboard.tsx */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#11181C] rounded-3xl p-5 sm:p-7 shadow-xl border border-white/20 space-y-5">
              {/* App Header Strip */}
              <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#009C9D] flex items-center justify-center p-2">
                    <img
                      src="/assets/logos/logo_bare.png"
                      alt="Painel HelpRest"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-[#007E7F] block">
                      Painel Empresarial no App
                    </span>
                    <h3 className="text-base font-bold text-[#11181C]">
                      Cantina Verde • Unidade Batel
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#F4FDFB] text-[#007E7F] border border-[#B2DFDB]">
                  Ativo
                </span>
              </div>

              {/* Exact 3 KPI Cards mirroring dashboard.tsx: Média de Notas, Visitas Validadas, Itens no Menu */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl p-3 text-center">
                  <Star className="w-4 h-4 text-[#F7CC33] fill-[#F7CC33] mx-auto mb-1" />
                  <div className="text-lg sm:text-xl font-bold text-[#11181C] tabular-nums">4.9</div>
                  <div className="text-[11px] text-[#687076]">Média de Notas</div>
                </div>
                <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl p-3 text-center">
                  <MapPin className="w-4 h-4 text-[#009C9D] mx-auto mb-1" />
                  <div className="text-lg sm:text-xl font-bold text-[#11181C] tabular-nums">142</div>
                  <div className="text-[11px] text-[#687076]">Visitas Validadas</div>
                </div>
                <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl p-3 text-center">
                  <UtensilsCrossed className="w-4 h-4 text-[#007E7F] mx-auto mb-1" />
                  <div className="text-lg sm:text-xl font-bold text-[#11181C] tabular-nums">28</div>
                  <div className="text-[11px] text-[#687076]">Itens no Menu</div>
                </div>
              </div>

              {/* Highlight Menu Row Preview */}
              <div className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAFA] p-3.5 flex items-center gap-3">
                <img
                  src="/assets/showcase/dish-gluten-free.jpg"
                  alt="Gnocchi de Mandioquinha"
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-[#11181C] truncate">
                      Gnocchi de Mandioquinha
                    </span>
                    <span className="text-xs font-bold text-[#007E7F] tabular-nums">
                      R$ 54,00
                    </span>
                  </div>
                  <p className="text-xs text-[#687076] truncate mt-0.5">
                    Exibido automaticamente na aba “Para você”
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    <span className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#F4FDFB] text-[#007E7F] border border-[#B2DFDB]">
                      Sem Glúten
                    </span>
                    <span className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#EAF8FD] text-[#0B4F6C] border border-[#BFE9F9]">
                      Sem Lactose
                    </span>
                    <span className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#E9F7EF] text-[#186A3B] border border-[#BEE6CE]">
                      Vegano
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#687076] flex flex-wrap items-center justify-between gap-2 pt-1">
                <span>Cadastro simples no app para pessoa jurídica (CNPJ)</span>
                <Link to="/termos" className="font-bold text-[#007E7F] hover:underline">
                  Regras para parceiros →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
