import React from 'react';
import { Container } from '../atoms/Container';
import { BrandLogo } from '../atoms/BrandLogo';
import { Link } from '../../router';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="surface-footer bg-[#161A19] text-[#C4CCC9] text-sm">
      <Container size="lg" className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Responsible Developer (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="md" tone="inverse" />
            <p className="text-xs sm:text-sm text-[#C4CCC9] leading-relaxed max-w-sm">
              Aplicativo para descoberta gastronômica adaptada a restrições alimentares, separação de cardápios e avaliações presenciais com geofencing de 100 metros.
            </p>
            <div className="space-y-2 text-xs pt-1 text-[#DCE2E0]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9CE2E0]" aria-hidden="true" />
                <a href="mailto:suporte@helprest.com" className="hover:text-white transition-colors">
                  suporte@helprest.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9CE2E0]" aria-hidden="true" />
                <a
                  href="mailto:privacidade@helprest.com"
                  className="hover:text-white transition-colors"
                >
                  privacidade@helprest.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9CE2E0]" aria-hidden="true" />
                <span>Curitiba, PR — Brasil</span>
              </div>
            </div>
          </div>

          {/* Product Links (2 cols) */}
          <nav aria-label="Links do produto" className="lg:col-span-2 space-y-3">
            <h2 className="text-xs font-semibold text-white">Produto</h2>
            <ul className="space-y-2.5 text-xs text-[#DCE2E0]">
              <li>
                <Link to="/#restricoes" className="hover:text-white transition-colors">
                  Simulador de Filtros
                </Link>
              </li>
              <li>
                <Link to="/#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/#restaurantes" className="hover:text-white transition-colors">
                  Para Restaurantes
                </Link>
              </li>
              <li>
                <Link to="/suporte" className="hover:text-white transition-colors">
                  Central de Suporte
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mandatory Google Play URLs (3 cols) */}
          <nav aria-label="Privacidade e termos legais" className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-semibold text-white">Privacidade e Termos</h2>
            <ul className="space-y-2.5 text-xs text-[#DCE2E0]">
              <li>
                <Link to="/privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/seguranca-dos-dados" className="hover:text-white transition-colors">
                  Segurança dos Dados (Data Safety)
                </Link>
              </li>
              <li>
                <Link to="/exclusao-de-dados" className="hover:text-white transition-colors">
                  Exclusão de Conta e Dados
                </Link>
              </li>
              <li>
                <Link to="/aviso-de-saude" className="hover:text-white transition-colors">
                  Aviso Legal de Saúde &amp; Alérgenos
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-white transition-colors">
                  Termos de Uso e Comunidade
                </Link>
              </li>
            </ul>
          </nav>

          {/* Official Play Console Identification (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-semibold text-white">Ficha do Aplicativo</h2>
            <dl className="bg-[#202524] rounded-2xl p-4 space-y-2 text-xs">
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-[#9AA5A2]">Desenvolvedor</dt>
                <dd className="text-white font-medium">Gustavo L. Gregorio</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-[#9AA5A2]">Pacote Android</dt>
                <dd>
                  <code className="font-mono text-white">com.gustavo_lg.helprest</code>
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-[#9AA5A2]">Versão</dt>
                <dd className="text-white">1.0.0</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-[#9AA5A2]">Regulação</dt>
                <dd className="text-[#9CE2E0] font-medium">LGPD (Lei 13.709/2018)</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9AA5A2]">
          <div>
            &copy; {currentYear} HelpRest — Gustavo L. Gregorio. Todos os direitos reservados.
          </div>
          <div>Curitiba, PR · Plataforma para restrições alimentares</div>
        </div>
      </Container>
    </footer>
  );
};
