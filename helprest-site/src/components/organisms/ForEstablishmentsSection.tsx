import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Link } from '../../router';
import { Store, Star, MapPin, UtensilsCrossed, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ForEstablishmentsSection: React.FC = () => {
  return (
    <section
      id="restaurantes"
      className="py-16 sm:py-20 bg-[#F7F7F8] text-[#11181C]"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#00797A]">
              <Store className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />
              <span>Para restaurantes e cafeterias</span>
            </div>

            <Heading2>
              Sua cozinha segura no mapa de quem realmente precisa.
            </Heading2>

            <Paragraph className="max-w-xl">
              Clientes com restrições alimentares costumam escolher onde o grupo inteiro vai comer. No HelpRest Empresas você cadastra sua matriz e filiais, informa quais flags sua cozinha atende e detalha os ingredientes de cada prato.
            </Paragraph>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#3F454A] pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Cadastro com CNPJ e endereço georreferenciado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Controle separado por flags alimentares</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Gestão unificada para matriz e filiais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Visitas comprovadas em raio de 100 metros</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/suporte">
                <Button
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                >
                  Falar com o Suporte Comercial
                </Button>
              </Link>
              <span className="text-xs text-[#596168]">
                Atendimento direto: suporte@helprest.net
              </span>
            </div>
          </div>

          {/* Right Column (6 cols): Borderless White Dashboard Card */}
          <div className="lg:col-span-6">
            <div className="tonal-surface bg-white text-[#11181C] rounded-3xl p-5 sm:p-7 shadow-[0_14px_38px_-14px_rgba(17,24,28,0.08)] space-y-5">
              {/* Establishment Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EFFBFB] flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src="/assets/logos/helprest_logo_green.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#11181C] truncate">
                    Cantina Verde • Unidade Batel
                  </h3>
                  <p className="text-xs text-[#596168] truncate">Cozinha certificada · Curitiba, PR</p>
                </div>
              </div>

              {/* 3 KPI Tiles on Neutral #F7F7F8 */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#F7F7F8] rounded-2xl p-3.5 text-center">
                  <Star className="w-4 h-4 text-[#E5A910] fill-[#E5A910] mx-auto mb-1" aria-hidden="true" />
                  <div className="text-lg sm:text-xl font-bold text-[#11181C] tabular-nums">4.9</div>
                  <div className="text-[11px] text-[#596168]">Média de Notas</div>
                </div>
                <div className="bg-[#F7F7F8] rounded-2xl p-3.5 text-center">
                  <MapPin className="w-4 h-4 text-[#009C9D] mx-auto mb-1" aria-hidden="true" />
                  <div className="text-lg sm:text-xl font-bold text-[#11181C] tabular-nums">142</div>
                  <div className="text-[11px] text-[#596168]">Visitas Validadas</div>
                </div>
                <div className="bg-[#F7F7F8] rounded-2xl p-3.5 text-center">
                  <UtensilsCrossed className="w-4 h-4 text-[#009C9D] mx-auto mb-1" aria-hidden="true" />
                  <div className="text-lg sm:text-xl font-bold text-[#11181C] tabular-nums">28</div>
                  <div className="text-[11px] text-[#596168]">Itens no Menu</div>
                </div>
              </div>

              {/* Highlight Menu Row Preview */}
              <div className="rounded-2xl bg-[#F7F7F8] p-3.5 flex items-center gap-3">
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
                    <span className="text-xs font-bold text-[#00797A] tabular-nums flex-shrink-0">
                      R$ 54,00
                    </span>
                  </div>
                  <p className="text-xs text-[#596168] truncate mt-0.5">
                    Massa artesanal com farinha de arroz e molho pomodoro
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#EFFBFB] text-[#00797A]">
                      Sem Glúten
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#EFF6FA] text-[#0B4F6C]">
                      Sem Lactose
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#E6F4EA] text-[#137333]">
                      Vegano
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#596168] flex flex-wrap items-center justify-between gap-2 pt-1">
                <span>Cadastro simples no app para pessoa jurídica (CNPJ)</span>
                <Link
                  to="/termos"
                  className="font-semibold text-[#00797A] hover:underline inline-flex items-center gap-1 min-h-[36px]"
                >
                  <span>Regras para parceiros</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
