import React from 'react';
import Link from 'next/link';
import { LegalLayout } from '../components/templates/LegalLayout';

export const TermsOfServiceView: React.FC = () => {
  return (
    <LegalLayout
      title="Termos de Uso e Diretrizes da Comunidade"
      subtitle="Condições que regem o uso do aplicativo HelpRest (com.helprest), responsabilidades dos estabelecimentos parceiros, regras de conteúdo gerado por usuários e padrões de segurança infantil."
      currentHref="/termos"
      lastUpdated="Novembro de 2026"
    >
      <p className="text-sm sm:text-base text-[#11181C] font-medium leading-relaxed">
        Ao instalar ou usar o aplicativo HelpRest ou suas páginas web associadas, operados por Gustavo L. Gregorio, você concorda integralmente com estes Termos de Uso e com a{' '}
        <Link href="/privacidade" className="text-[#00797A] font-semibold hover:underline">
          Política de Privacidade
        </Link>
        . O uso de conta pessoal requer idade mínima de <strong className="font-bold">13 anos</strong>, devendo adolescentes entre 13 e menores de 18 anos atuar sob assistência e autorização de pai, mãe ou responsável legal (Art. 14 da LGPD).
      </p>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          1. Natureza Informativa do Serviço
        </h2>
        <p>
          O HelpRest é uma ferramenta digital de busca gastronômica, filtro por flags de restrição alimentar e compartilhamento comunitário de experiências de visita presencial.
        </p>
        <p>
          O aplicativo <strong className="text-[#11181C]">não prepara, não vende e não realiza entregas de alimentos</strong>. A responsabilidade sanitária, nutricional e legal pela produção e manipulação dos alimentos ofertados é exclusivamente de cada estabelecimento comercial listado.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          2. Alergias Severas e Segurança Alimentar
        </h2>
        <div className="tonal-surface bg-[#FDF1EF] border-s-[3px] border-[#B42318] rounded-e-2xl px-5 py-4 sm:px-6 sm:py-5 text-xs sm:text-sm text-[#7A271A]">
          <p>
            O HelpRest apoia a escolha cotidiana de locais, mas não substitui consulta médica nem garantia verbal direta do restaurante. Pessoas com risco de anafilaxia, alergias graves ou alta sensibilidade devem sempre confirmar ingredientes e riscos de contaminação cruzada com a cozinha antes do pedido.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          3. Cadastro de Consumidores e Estabelecimentos
        </h2>
        <ul className="list-disc ps-6 space-y-1.5 text-xs sm:text-sm text-[#3F454A]">
          <li>
            O usuário compromete-se a fornecer informações verídicas no perfil Google OAuth2 vinculado e zelar pelo acesso no dispositivo;
          </li>
          <li>
            Estabelecimentos parceiros devem ser representados por empresas regularmente constituídas, sendo responsáveis pela veracidade do nome comercial, endereço, documentação empresarial (CNPJ quando aplicável), flags de cozinha declaradas e composição dos pratos exibidos no cardápio;
          </li>
          <li>
            Contas e estabelecimentos que prestem declarações enganosas sobre segurança alergênica estarão sujeitos à suspensão ou remoção imediata.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          4. Conteúdo Gerado pelo Usuário (UGC), Geofencing 100m e Moderação
        </h2>
        <p>
          O Feed Social e os comentários de visita permitem a publicação de textos e fotos enviados pelos usuários, sob as seguintes regras obrigatórias de comunidade (Google Play UGC Policy):
        </p>
        <ul className="list-disc ps-6 space-y-1.5 text-xs sm:text-sm text-[#3F454A]">
          <li>
            <strong className="text-[#11181C]">Verificação em 100 metros:</strong> o envio de fotos em visitas avaliadas exige confirmação por GPS dentro de 100m do estabelecimento para coibir avaliações falsas ou spam;
          </li>
          <li>
            <strong className="text-[#11181C]">Conteúdo estritamente proibido:</strong> discursos de ódio, assédio, nudez, violência, dados pessoais de terceiros, difamação gratuita, publicidade enganosa ou qualquer tentativa de manipulação de coordenadas GPS;
          </li>
          <li>
            <strong className="text-[#11181C]">Canal de Denúncia &amp; Moderação:</strong> qualquer usuário pode reportar avaliações impróprias diretamente pelo recurso de denúncia no aplicativo ou enviar ocorrências sobre fotos, perfis abusivos ou cardápios inconsistentes para{' '}
            <a href="mailto:suporte@helprest.net" className="text-[#00797A] font-semibold hover:underline">
              suporte@helprest.net
            </a>
            . Denúncias são analisadas com remoção do conteúdo abusivo e suspensão ou banimento da conta infratora.
          </li>
        </ul>
      </section>

      <section id="seguranca-infantil" className="space-y-3 scroll-mt-24">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          5. Padrões de Segurança Infantil (CSAE / CSAM)
        </h2>
        <div className="tonal-surface rounded-e-2xl bg-[#EFFBFB] border-s-[3px] border-[#009C9D] px-5 py-4 sm:px-6 sm:py-5 space-y-2 text-xs sm:text-sm text-[#3F454A]">
          <p>
            O aplicativo <strong className="text-[#11181C]">HelpRest</strong> (pacote Android{' '}
            <code className="font-mono text-[0.875em] font-medium text-[#11181C]">com.helprest</code>) adota política pública de{' '}
            <strong className="text-[#11181C]">tolerância zero</strong> contra qualquer forma de Abuso e Exploração Sexual Infantil (CSAE) e Material de Abuso Sexual Infantil (CSAM), em conformidade com os Padrões de Segurança Infantil do Google Play.
          </p>
          <ul className="list-disc ps-5 space-y-1.5">
            <li>
              <strong className="text-[#11181C]">Proibição absoluta e bloqueio imediato:</strong> qualquer publicação, comentário, imagem de refeição, avatar ou contato que envolva exploração sexual, aliciamento, sexualização ou exposição indevida de menores resulta em remoção imediata e banimento permanente e irreversível da conta infratora.
            </li>
            <li>
              <strong className="text-[#11181C]">Notificação compulsória às autoridades:</strong> todo indício confirmado de CSAM/CSAE é reportado prontamente às autoridades competentes nacionais e internacionais (Polícia Civil, Polícia Federal, SaferNet Brasil e NCMEC, conforme a legislação aplicável) com preservação dos registros técnicos estritamente exigidos por lei (LGPD Art. 16, I).
            </li>
            <li>
              <strong className="text-[#11181C]">Ponto de contato designado para Segurança Infantil:</strong> denúncias urgentes sobre segurança de menores ou conteúdo suspeito na comunidade devem ser enviadas para{' '}
              <a href="mailto:suporte@helprest.net" className="text-[#00797A] font-semibold hover:underline">
                suporte@helprest.net
              </a>{' '}
              (cópia ao Encarregado/DPO em{' '}
              <a href="mailto:privacidade@helprest.net" className="text-[#00797A] font-semibold hover:underline">
                privacidade@helprest.net
              </a>
              ), com prioridade máxima de análise.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          6. Propriedade Intelectual e Foro
        </h2>
        <p>
          A marca HelpRest, interface, código-fonte e organização visual são protegidos por direitos autorais sob titularidade do desenvolvedor <strong className="text-[#11181C]">Gustavo L. Gregorio</strong>. Estes Termos são regidos pelas leis da República Federativa do Brasil, elegendo-se o Foro da Comarca de <strong className="text-[#11181C]">Curitiba, Estado do Paraná</strong>, salvo disposições protetivas de foro do consumidor aplicáveis.
        </p>
      </section>
    </LegalLayout>
  );
};
