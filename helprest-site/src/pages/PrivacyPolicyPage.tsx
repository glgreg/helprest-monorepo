import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { MapPin } from 'lucide-react';
import { Link } from '../router';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Transparência sobre coleta, tratamento, compartilhamento técnico, permissões Android e direitos dos titulares no HelpRest em conformidade com a LGPD e as diretrizes do Google Play."
      lastUpdated="Novembro de 2026"
    >
      <p className="text-sm sm:text-base text-[#11181C] font-medium leading-relaxed">
        O HelpRest nunca vende nem aluga seus dados pessoais. Coletamos apenas o necessário para filtrar estabelecimentos compatíveis com suas restrições alimentares, autenticar sua conta e validar visitas presenciais a até 100 metros do restaurante.
      </p>

      {/* Prominent Disclosure for Background Location — Mandatory Google Play Policy */}
      <div className="tonal-surface rounded-e-2xl bg-[#EFFBFB] border-s-[3px] border-[#009C9D] px-5 py-4 sm:px-6 sm:py-5 space-y-2.5">
        <div className="flex items-center gap-2 font-bold text-[#11181C] text-sm">
          <MapPin className="w-4 h-4 text-[#00797A] flex-shrink-0" aria-hidden="true" />
          <span>Divulgação Proeminente: Uso de Localização em Segundo Plano</span>
        </div>
        <p className="text-xs sm:text-sm text-[#3F454A] leading-relaxed">
          O aplicativo <strong>HelpRest</strong> pode solicitar a permissão opcional de localização em segundo plano (
          <code className="font-mono text-[0.875em] font-medium text-[#11181C]">ACCESS_BACKGROUND_LOCATION</code> e serviço em primeiro plano{' '}
          <code className="font-mono text-[0.875em] font-medium text-[#11181C]">FOREGROUND_SERVICE_LOCATION</code>) para manter o serviço opcional{' '}
          <code className="font-mono text-[0.875em] font-medium text-[#11181C]">HELPREST_BACKGROUND_LOCATION</code> ativo com notificação visível na barra do sistema e ajudar você a descobrir estabelecimentos seguros próximos mesmo quando o aplicativo está minimizado.
        </p>
        <p className="text-xs sm:text-sm text-[#3F454A] leading-relaxed">
          Essa permissão é <strong>estritamente opcional</strong>: você pode utilizar normalmente a busca, o mapa, os filtros de restrições e o cardápio permitindo apenas <em>“Durante o uso do app”</em>. Não mantemos histórico contínuo de rotas em servidor e você pode revogar a autorização a qualquer momento em{' '}
          <strong className="text-[#11181C]">Configurações do Android &gt; Aplicativos &gt; HelpRest &gt; Permissões</strong>.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          1. Identificação do Responsável e do Aplicativo
        </h2>
        <p>
          O aplicativo móvel <strong>HelpRest</strong> (pacote Android{' '}
          <code className="font-mono text-[0.875em] font-medium text-[#11181C]">com.helprest</code>) e seu portal web são mantidos e operados sob responsabilidade do desenvolvedor{' '}
          <strong className="text-[#11181C]">Gustavo L. Gregorio</strong> (Controlador de Dados nos termos da Lei Geral de Proteção de Dados — Lei nº 13.709/2018, LGPD).
        </p>
        <p>
          O canal oficial do Encarregado pelo Tratamento de Dados Pessoais (DPO) para solicitações, dúvidas ou exercício de direitos de titularidade é{' '}
          <a href="mailto:privacidade@helprest.net" className="text-[#00797A] font-semibold hover:underline">
            privacidade@helprest.net
          </a>{' '}
          (suporte técnico geral:{' '}
          <a href="mailto:suporte@helprest.net" className="text-[#00797A] font-semibold hover:underline">
            suporte@helprest.net
          </a>
          ).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          2. Dados Coletados, Permissões e Finalidades
        </h2>

        <div className="divide-y divide-[#E6E8EB] border-t border-b border-[#E6E8EB]">
          <div className="py-4 space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              a) Dados Cadastrais, Autenticação e Parceiros Comerciais
            </h3>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              <strong className="text-[#11181C]">Consumidores:</strong> nome completo, e-mail, data de nascimento (coletada no cadastro para verificação etária mínima e personalização), senha criptografada com Argon2id ou identificador Google Sign-In (OAuth2), além de foto de perfil e links sociais quando informados voluntariamente.
            </p>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              <strong className="text-[#11181C]">Estabelecimentos Parceiros:</strong> nome comercial, CNPJ, endereço geográfico e cardápios informados pelo gestor do restaurante no cadastro empresarial.
            </p>
          </div>

          <div className="py-4 space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              b) Dados de Localização (Primeiro Plano e Segundo Plano Opcional)
            </h3>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              Coordenadas aproximadas e precisas (
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">ACCESS_FINE_LOCATION</code> e{' '}
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">ACCESS_COARSE_LOCATION</code>) são usadas para ordenar estabelecimentos próximos via cálculo geoespacial e aplicar a validação de presença física no raio de{' '}
              <strong className="text-[#11181C]">100 metros</strong> (geofencing) no momento de registrar uma visita avaliada. Caso o usuário habilite a permissão opcional de segundo plano (
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">ACCESS_BACKGROUND_LOCATION</code>), o serviço exibe notificação ativa persistente no Android (
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">POST_NOTIFICATIONS</code>).
            </p>
          </div>

          <div className="py-4 space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              c) Preferências e Restrições Alimentares (Flags)
            </h3>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              Flags escolhidas no perfil (como Sem Glúten, Sem Lactose, Vegano, Vegetariano, Sem Castanhas, Sem Frutos do Mar, Sem Ovos ou Sem Açúcar) são processadas exclusivamente para o ranqueamento personalizado do{' '}
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">RecommendationService</code> e separação de cardápios em <em>“Para você”</em> e <em>“Outros Itens”</em>, sem fins publicitários ou perfilamento clínico.
            </p>
          </div>

          <div className="py-4 space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              d) Câmera, Mídia e Conteúdo Gerado pelo Usuário (Feed Social)
            </h3>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              O acesso à câmera ou seletor de imagens do sistema (
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">expo-image-picker</code>) ocorre apenas sob ação explícita do usuário para adicionar foto de perfil ou fotografar uma refeição ao registrar visita dentro dos 100 metros do restaurante. Comentários, notas e fotos publicados ficam visíveis no Feed Social comunitário. O app não processa pagamentos, dados financeiros nem integra redes externas de anúncios comportamentais.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          3. Terceiros, Transferência Técnica e Segurança
        </h2>
        <p>
          Todas as comunicações entre o aplicativo e os servidores ocorrem exclusivamente via HTTPS com TLS 1.3; senhas são armazenadas com Argon2id e sessões utilizam tokens JWT com expiração controlada.
        </p>
        <p>
          Para viabilizar recursos essenciais do app sem comercializar dados e sem SDKs de anúncios de terceiros, utilizamos os seguintes provedores técnicos:
        </p>
        <ul className="list-disc ps-6 space-y-1.5 text-xs sm:text-sm text-[#3F454A]">
          <li>
            <strong className="text-[#11181C]">Google Maps Platform:</strong> renderização de mapas e marcadores geográficos, sujeito à{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-[#00797A] font-semibold hover:underline"
            >
              Política de Privacidade do Google
            </a>
            .
          </li>
          <li>
            <strong className="text-[#11181C]">Google Sign-In / Identity Services:</strong> validação segura de autenticação OAuth2 por ID Token quando o usuário opta pelo login com Google.
          </li>
          <li>
            <strong className="text-[#11181C]">Infraestrutura em Nuvem (MongoDB Atlas e Redis):</strong> persistência e cache protegidos por controle de acesso e sanitização de consultas.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          4. Retenção, Direitos LGPD e Exclusão de Conta
        </h2>
        <p>
          Conforme a LGPD (Art. 18), você pode solicitar confirmação de tratamento, correção, portabilidade, revogação de consentimento ou exclusão definitiva da sua conta e dos dados associados. O prazo máximo de atendimento e expurgo é de 30 dias corridos.
        </p>
        <p>
          Consulte instruções detalhadas e gere sua solicitação na{' '}
          <Link to="/exclusao-de-dados" className="text-[#00797A] font-semibold hover:underline">
            Página Oficial de Exclusão de Conta e Dados
          </Link>{' '}
          ou consulte o resumo técnico em{' '}
          <Link to="/seguranca-dos-dados" className="text-[#00797A] font-semibold hover:underline">
            Segurança dos Dados (Data Safety)
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          5. Idade Mínima, Segurança Infantil e Privacidade de Crianças
        </h2>
        <p>
          A criação de conta pessoal no HelpRest requer idade mínima de <strong className="text-[#11181C]">13 anos</strong>. O aplicativo não é direcionado a crianças menores de 13 anos e não coleta intencionalmente seus dados. Caso identifiquemos cadastro indevido de menor de 13 anos sem consentimento legal aplicável, removeremos a conta imediatamente após notificação em{' '}
          <a href="mailto:privacidade@helprest.net" className="text-[#00797A] font-semibold hover:underline">
            privacidade@helprest.net
          </a>
          .
        </p>
        <p>
          Mantemos política pública de tolerância zero contra abuso e exploração sexual infantil (CSAE/CSAM) documentada na seção{' '}
          <Link to="/termos#seguranca-infantil" className="text-[#00797A] font-semibold hover:underline">
            Padrões de Segurança Infantil dos Termos de Uso
          </Link>
          .
        </p>
      </section>

      <p className="pt-5 border-t border-[#E6E8EB] text-xs text-[#596168]">
        Alterações relevantes nesta Política de Privacidade serão comunicadas nesta URL oficial com data de revisão atualizada.
      </p>
    </LegalLayout>
  );
};
