import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { FileText, AlertTriangle, ShieldCheck, Scale, CheckCircle2, Users } from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <LegalLayout
      title="Termos de Uso e Diretrizes da Comunidade"
      subtitle="Condições que regem o uso do aplicativo HelpRest (com.gustavo_lg.helprest), responsabilidades dos estabelecimentos parceiros e regras de conteúdo gerado por usuários."
      lastUpdated="Novembro de 2026"
    >
      <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F4F6F5] flex items-start gap-3">
        <Scale className="w-5 h-5 text-[#007677] flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-[#3A413F] leading-relaxed">
          Ao instalar ou usar o aplicativo <strong className="text-[#181C1B]">HelpRest</strong> ou suas páginas web associadas, operados por <strong className="text-[#181C1B]">Gustavo L. Gregorio</strong>, você concorda integralmente com estes Termos de Uso e com a{' '}
          <strong className="text-[#181C1B]">Política de Privacidade</strong>. Para criar uma conta pessoal é necessário ter ao menos <strong className="text-[#181C1B]">13 anos de idade</strong>.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>1. Natureza Informativa do Serviço</span>
        </h2>
        <p>
          O HelpRest é uma ferramenta digital de busca gastronômica, filtro por flags de restrição alimentar e compartilhamento comunitário de experiências de visita presencial.
        </p>
        <p>
          O aplicativo <strong className="text-[#181C1B]">não prepara, não vende e não realiza entregas de alimentos</strong>. A responsabilidade sanitária, nutricional e legal pela produção e manipulação dos alimentos ofertados é exclusivamente de cada estabelecimento comercial listado.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-[#B42318]" aria-hidden="true" />
          <span>2. Alergias Severas e Segurança Alimentar</span>
        </h2>
        <div className="tonal-surface bg-[#FDF1EF] border-s-4 border-[#B42318] rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-[#7A271A] space-y-2">
          <p>
            O HelpRest apoia a escolha cotidiana de locais, mas não substitui consulta médica nem garantia verbal direta do restaurante. Pessoas com risco de anafilaxia, alergias graves ou alta sensibilidade devem sempre confirmar ingredientes e riscos de contaminação cruzada com a cozinha antes do pedido.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>3. Cadastro de Consumidores e Estabelecimentos</span>
        </h2>
        <ul className="list-disc ps-6 space-y-1.5 text-xs sm:text-sm text-[#3A413F]">
          <li>
            O usuário compromete-se a fornecer informações verídicas e zelar pelas credenciais de acesso;
          </li>
          <li>
            Estabelecimentos parceiros devem ser representados por empresas regularmente constituídas, sendo responsáveis pela veracidade do CNPJ, endereço, flags de cozinha declaradas e composição dos pratos exibidos no cardápio;
          </li>
          <li>
            Contas e estabelecimentos que prestem declarações enganosas sobre segurança alergênica estarão sujeitos à suspensão ou remoção imediata.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <Users className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>4. Conteúdo Gerado pelo Usuário (UGC), Geofencing 100m e Moderação</span>
        </h2>
        <p>
          O Feed Social e os comentários de visita permitem a publicação de textos e fotos enviados pelos usuários, sob as seguintes regras obrigatórias de comunidade (Google Play UGC Policy):
        </p>
        <ul className="list-disc ps-6 space-y-1.5 text-xs sm:text-sm text-[#3A413F]">
          <li>
            <strong className="text-[#181C1B]">Verificação em 100 metros:</strong> o registro oficial de visita exige confirmação por GPS dentro de 100m do estabelecimento para coibir avaliações falsas ou spam;
          </li>
          <li>
            <strong className="text-[#181C1B]">Conteúdo estritamente proibido:</strong> discursos de ódio, assédio, nudez, violência, dados pessoais de terceiros, difamação gratuita, publicidade enganosa ou qualquer tentativa de manipulação de coordenadas GPS;
          </li>
          <li>
            <strong className="text-[#181C1B]">Canal de Denúncia & Moderação:</strong> qualquer usuário pode reportar avaliações, fotos ou informações de cardápio inconsistentes pelo e-mail{' '}
            <a href="mailto:suporte@helprest.com" className="text-[#00696A] font-semibold hover:underline">
              suporte@helprest.com
            </a>
            . Denúncias são analisadas com remoção do conteúdo abusivo e suspensão ou banimento da conta infratora.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>5. Propriedade Intelectual e Foro</span>
        </h2>
        <p>
          A marca HelpRest, interface, código-fonte e organização visual são protegidos por direitos autorais sob titularidade do desenvolvedor <strong className="text-[#181C1B]">Gustavo L. Gregorio</strong>. Estes Termos são regidos pelas leis da República Federativa do Brasil, elegendo-se o Foro da Comarca de <strong className="text-[#181C1B]">Curitiba, Estado do Paraná</strong>, salvo disposições protetivas de foro do consumidor aplicáveis.
        </p>
      </section>
    </LegalLayout>
  );
};
