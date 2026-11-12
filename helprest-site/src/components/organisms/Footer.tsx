import React from 'react';
import { Container } from '../atoms/Container';
import { BrandLogo } from '../atoms/BrandLogo';
import { Link } from '../../router';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11181C] text-[#9BA1A6] border-t border-white/10 text-sm">
      <Container size="lg" className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Responsible Developer (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="md" tone="inverse" />
            <p className="text-xs sm:text-sm text-[#9BA1A6] leading-relaxed max-w-sm">
              Aplicativo para descoberta gastronômica adaptada a restrições alimentares, separação de cardápios e avaliações presenciais com geofencing de 100 metros.
            </p>
            <div className="space-y-1.5 text-xs pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#009C9D]" />
                <a href="mailto:suporte@helprest.com" className="hover:text-white transition-colors">
                  suporte@helprest.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#009C9D]" />
                <a href="mailto:privacidade@helprest.com" className="hover:text-white transition-colors">
                  privacidade@helprest.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#009C9D]" />
                <span>Curitiba, PR — Brasil</span>
              </div>
            </div>
          </div>

          {/* Product Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
              Produto
            </h4>
            <ul className="space-y-2 text-xs">
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
          </div>

          {/* Mandatory Google Play URLs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
              Privacidade & Termos
            </h4>
            <ul className="space-y-2 text-xs">
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
                <Link
                  to="/exclusao-de-dados"
                  className="hover:text-white transition-colors text-[#F7CC33] font-medium"
                >
                  Exclusão de Conta e Dados
                </Link>
              </li>
              <li>
                <Link to="/aviso-de-saude" className="hover:text-white transition-colors">
                  Aviso Legal de Saúde & Alérgenos
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-white transition-colors">
                  Termos de Uso e Comunidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Play Console Identification (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
              Ficha do Aplicativo
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1.5 text-[11px]">
              <div>
                <span className="text-[#9BA1A6]">Desenvolvedor:</span>{' '}
                <span className="text-white font-medium">Gustavo L. Gregorio</span>
              </div>
              <div>
                <span className="text-[#9BA1A6]">Pacote Android:</span>{' '}
                <code className="font-mono text-white">com.gustavo_lg.helprest</code>
              </div>
              <div>
                <span className="text-[#9BA1A6]">Versão:</span>{' '}
                <span className="text-white">1.0.0</span>
              </div>
              <div>
                <span className="text-[#9BA1A6]">Regulação:</span>{' '}
                <span className="text-[#21B2B3] font-medium">LGPD (Lei 13.709/2018)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#687076]">
          <div>
            &copy; {currentYear} HelpRest — Gustavo L. Gregorio. Todos os direitos reservados.
          </div>
          <div>
            Curitiba, PR • Plataforma para restrições alimentares
          </div>
        </div>
      </Container>
    </footer>
  );
};
