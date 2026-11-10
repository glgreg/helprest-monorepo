import React from 'react';
import { Container } from '../atoms/Container';
import { BrandLogo } from '../atoms/BrandLogo';
import { Link } from '../../router';
import { Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <Container size="lg" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="brightness-110">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Plataforma mobile-first inteligente para descoberta e recomendação gastronômica focada em restrições alimentares, cozinhas auditadas e avaliações comunitárias geoverificadas.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#009C9D]" />
                <a href="mailto:suporte@helprest.com" className="hover:text-white transition-colors">
                  suporte@helprest.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#009C9D]" />
                <span>São Paulo, SP — Brasil</span>
              </div>
            </div>
          </div>

          {/* Product Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/#restricoes" className="hover:text-white transition-colors">
                  Restrições & Flags
                </Link>
              </li>
              <li>
                <Link to="/#restaurantes" className="hover:text-white transition-colors">
                  Para Restaurantes
                </Link>
              </li>
              <li>
                <Link to="/suporte" className="hover:text-white transition-colors">
                  Central de Suporte & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Play & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#009C9D]" />
              Conformidade Google Play
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/exclusao-de-dados" className="hover:text-white transition-colors text-amber-300/90 font-medium">
                  Exclusão de Conta e Dados
                </Link>
              </li>
              <li>
                <Link to="/seguranca-dos-dados" className="hover:text-white transition-colors">
                  Declaração de Segurança dos Dados
                </Link>
              </li>
              <li>
                <Link to="/aviso-de-saude" className="hover:text-white transition-colors text-slate-300">
                  Aviso Legal de Saúde & Alérgenos
                </Link>
              </li>
            </ul>
          </div>

          {/* Details / Credentials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Identificação do App
            </h4>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1.5 text-[11px] text-slate-400">
              <div>
                <span className="text-slate-500">ID Google Play:</span>{' '}
                <span className="font-mono text-slate-300">com.gustavo_lg.helprest</span>
              </div>
              <div>
                <span className="text-slate-500">Versão:</span>{' '}
                <span className="text-slate-300">1.0.0 (Android)</span>
              </div>
              <div>
                <span className="text-slate-500">Classificação:</span>{' '}
                <span className="text-slate-300">Livre (Adequado para todas as idades)</span>
              </div>
              <div>
                <span className="text-slate-500">Privacidade:</span>{' '}
                <span className="text-emerald-400 font-medium">LGPD Art. 7º e 11º em conformidade</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} HelpRest Tecnologia Ltda. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para uma vida sem restrições sociais.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
