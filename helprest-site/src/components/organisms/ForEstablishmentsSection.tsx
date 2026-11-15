import React from 'react';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Link } from '../../router';
import { Store, Star, MapPin, UtensilsCrossed, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ForEstablishmentsSection: React.FC = () => {
  return (
    <section
      id="restaurantes"
      className="surface-deep py-16 sm:py-20 bg-[#0A4E50] text-white"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#BCEBE9]">
              <Store className="w-4 h-4" aria-hidden="true" />
              <span>Para restaurantes e cafeterias</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.16]">
              Sua cozinha segura no mapa de quem realmente precisa.
            </h2>

            <p className="text-base text-[#E3F3F2] leading-relaxed max-w-xl">
              Clientes com restrições alimentares costumam escolher onde o grupo inteiro vai comer. No HelpRest Empresas você cadastra sua matriz e filiais, informa quais flags sua cozinha atende e detalha os ingredientes de cada prato.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/95 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9CE2E0] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Cadastro com CNPJ e endereço georreferenciado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9CE2E0] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Controle separado por flags alimentares</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9CE2E0] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Gestão unificada para matriz e filiais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9CE2E0] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Visitas comprovadas em raio de 100 metros</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/suporte">
                <Button
                  variant="white"
                  size="lg"
                  iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                >
                  Falar com o Suporte Comercial
                </Button>
              </Link>
              <span className="text-xs text-[#DCECEC]">
                Atendimento direto: suporte@helprest.com
              </span>
            </div>
          </div>

          {/* Right Column (6 cols): Borderless White Dashboard Card */}
          <div className="lg:col-span-6">
            <div className="tonal-surface bg-white text-[#181C1B] rounded-3xl p-5 sm:p-7 shadow-[0_24px_60px_-14px_rgba(8,59,60,0.45)] space-y-5">
              {/* Establishment Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#007677] flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src="/assets/logos/logo_bare.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#181C1B] truncate">
                    Cantina Verde • Unidade Batel
                  </h3>
                  <p className="text-xs text-[#525B58] truncate">Cozinha certificada · Curitiba, PR</p>
                </div>
              </div>

              {/* 3 KPI Tiles on Tonal #F4F6F5 */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#F4F6F5] rounded-2xl p-3.5 text-center">
                  <Star className="w-4 h-4 text-[#E5A910] fill-[#E5A910] mx-auto mb-1" aria-hidden="true" />
                  <div className="text-lg sm:text-xl font-bold text-[#181C1B] tabular-nums">4.9</div>
                  <div className="text-[11px] text-[#525B58]">Média de Notas</div>
                </div>
                <div className="bg-[#F4F6F5] rounded-2xl p-3.5 text-center">
                  <MapPin className="w-4 h-4 text-[#007677] mx-auto mb-1" aria-hidden="true" />
                  <div className="text-lg sm:text-xl font-bold text-[#181C1B] tabular-nums">142</div>
                  <div className="text-[11px] text-[#525B58]">Visitas Validadas</div>
                </div>
                <div className="bg-[#F4F6F5] rounded-2xl p-3.5 text-center">
                  <UtensilsCrossed className="w-4 h-4 text-[#007677] mx-auto mb-1" aria-hidden="true" />
                  <div className="text-lg sm:text-xl font-bold text-[#181C1B] tabular-nums">28</div>
                  <div className="text-[11px] text-[#525B58]">Itens no Menu</div>
                </div>
              </div>

              {/* Highlight Menu Row Preview */}
              <div className="rounded-2xl bg-[#F4F6F5] p-3.5 flex items-center gap-3">
                <img
                  src="/assets/showcase/dish-gluten-free.jpg"
                  alt="Gnocchi de Mandioquinha"
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-[#181C1B] truncate">
                      Gnocchi de Mandioquinha
                    </span>
                    <span className="text-xs font-bold text-[#00696A] tabular-nums flex-shrink-0">
                      R$ 54,00
                    </span>
                  </div>
                  <p className="text-xs text-[#525B58] truncate mt-0.5">
                    Massa artesanal com farinha de arroz e molho pomodoro
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#E9F3F2] text-[#00696A]">
                      Sem Glúten
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#E8F1F8] text-[#0B4F6C]">
                      Sem Lactose
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#E6F4EA] text-[#137333]">
                      Vegano
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#525B58] flex flex-wrap items-center justify-between gap-2 pt-1">
                <span>Cadastro simples no app para pessoa jurídica (CNPJ)</span>
                <Link
                  to="/termos"
                  className="font-semibold text-[#00696A] hover:underline inline-flex items-center gap-1 min-h-[36px]"
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
