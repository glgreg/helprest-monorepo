import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { ShieldCheck, Lock, MapPin, Eye, Database, AlertCircle, Camera } from 'lucide-react';
import { Link } from '../router';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Transparência sobre coleta, tratamento, compartilhamento técnico, permissões Android e direitos dos titulares no HelpRest em conformidade com a LGPD e as diretrizes do Google Play."
      lastUpdated="Novembro de 2026"
    >
      {/* Overview Callout */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#F4FDFB] border border-[#B2DFDB] flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#007E7F] flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-[#11181C] leading-relaxed">
          <strong>Compromisso de Privacidade:</strong> O HelpRest nunca vende nem aluga seus dados pessoais. Coletamos apenas os dados necessários para filtrar estabelecimentos compatíveis com suas restrições alimentares, autenticar sua conta e validar visitas presenciais a até 100 metros do restaurante.
        </div>
      </div>

      {/* Prominent Disclosure for Background Location — Mandatory Google Play Policy */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#FEF9E7] border border-[#F9E6A2] space-y-2">
        <div className="flex items-center gap-2 font-bold text-[#735107] text-sm">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>Divulgação Proeminente: Uso de Localização em Segundo Plano</span>
        </div>
        <p className="text-xs sm:text-sm text-[#735107] leading-relaxed">
          O aplicativo <strong>HelpRest</strong> pode solicitar a permissão opcional de localização em segundo plano (
          <code className="font-mono text-xs bg-white/70 px-1 py-0.5 rounded">ACCESS_BACKGROUND_LOCATION</code> e serviço em primeiro plano{' '}
          <code className="font-mono text-xs bg-white/70 px-1 py-0.5 rounded">FOREGROUND_SERVICE_LOCATION</code>
          ) para manter o serviço opcional <em>HELPREST_BACKGROUND_LOCATION</em> ativo com notificação visível na barra do sistema e ajudar você a descobrir estabelecimentos seguros próximos mesmo quando o aplicativo está minimizado.
        </p>
        <p className="text-xs sm:text-sm text-[#735107] leading-relaxed">
          Essa permissão é <strong>estritamente opcional</strong>: você pode utilizar normalmente a busca, o mapa, os filtros de restrições e o cardápio permitindo apenas <em>“Durante o uso do app”</em>. Não mantemos histórico contínuo de rotas em servidor e você pode revogar a autorização a qualquer momento em{' '}
          <strong>Configurações do Android &gt; Aplicativos &gt; HelpRest &gt; Permissões</strong>.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#11181C] flex items-center gap-2">
          <Database className="w-5 h-5 text-[#009C9D]" />
          1. Identificação do Responsável e do Aplicativo
        </h2>
        <p>
          O aplicativo móvel <strong>HelpRest</strong> (pacote Android{' '}
          <code className="bg-[#FAFAFA] border border-[#EAEAEA] px-1.5 py-0.5 rounded text-xs font-mono text-[#11181C]">
            com.gustavo_lg.helprest
          </code>
          ) e seu portal web são mantidos e operados sob responsabilidade do desenvolvedor{' '}
          <strong>Gustavo L. Gregorio</strong> (Controlador de Dados nos termos da Lei Geral de Proteção de Dados — Lei nº 13.709/2018, LGPD).
        </p>
        <p>
          O canal oficial do Encarregado pelo Tratamento de Dados Pessoais (DPO) para solicitações, dúvidas ou exercício de direitos de titularidade é{' '}
          <a href="mailto:privacidade@helprest.com" className="text-[#007E7F] font-bold hover:underline">
            privacidade@helprest.com
          </a>{' '}
          (suporte técnico geral:{' '}
          <a href="mailto:suporte@helprest.com" className="text-[#007E7F] font-bold hover:underline">
            suporte@helprest.com
          </a>
          ).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#11181C] flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#009C9D]" />
          2. Dados Coletados, Permissões e Finalidades
        </h2>

        <div className="space-y-3 pt-1">
          <div className="border border-[#EAEAEA] rounded-2xl p-4 bg-[#FAFAFA] space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              a) Dados Cadastrais, Autenticação e Parceiros Comerciais
            </h3>
            <p className="text-xs sm:text-sm text-[#333333]">
              <strong>Consumidores:</strong> nome completo, e-mail, data de nascimento (coletada no cadastro para verificação etária e personalização), senha criptografada com Argon2id ou identificador Google Sign-In (OAuth2), além de foto de perfil e links sociais quando informados voluntariamente.
            </p>
            <p className="text-xs sm:text-sm text-[#333333]">
              <strong>Estabelecimentos Parceiros:</strong> nome comercial, CNPJ, endereço geográfico e cardápios informados pelo gestor do restaurante no cadastro empresarial.
            </p>
          </div>

          <div className="border border-[#EAEAEA] rounded-2xl p-4 bg-[#FAFAFA] space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#009C9D]" />
              b) Dados de Localização (Primeiro Plano e Segundo Plano Opcional)
            </h3>
            <p className="text-xs sm:text-sm text-[#333333]">
              Coordenadas aproximadas e precisas (
              <code className="text-xs font-mono">ACCESS_FINE_LOCATION</code> e{' '}
              <code className="text-xs font-mono">ACCESS_COARSE_LOCATION</code>) são usadas para ordenar estabelecimentos próximos via cálculo geoespacial e aplicar a validação de presença física no raio de <strong>100 metros</strong> (geofencing) no momento de registrar uma visita avaliada. Caso o usuário habilite a permissão opcional de segundo plano (
              <code className="text-xs font-mono">ACCESS_BACKGROUND_LOCATION</code>), o serviço exibe notificação ativa persistente no Android (
              <code className="text-xs font-mono">POST_NOTIFICATIONS</code>).
            </p>
          </div>

          <div className="border border-[#EAEAEA] rounded-2xl p-4 bg-[#FAFAFA] space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              c) Preferências e Restrições Alimentares (Flags)
            </h3>
            <p className="text-xs sm:text-sm text-[#333333]">
              Flags escolhidas no perfil (como Sem Glúten, Sem Lactose, Vegano, Vegetariano, Sem Castanhas, Sem Frutos do Mar, Sem Ovos ou Sem Açúcar) são processadas exclusivamente para o ranqueamento personalizado do{' '}
              <code className="text-xs font-mono">RecommendationService</code> e separação de cardápios em <em>“Para você”</em> e <em>“Outros Itens”</em>, sem fins publicitários.
            </p>
          </div>

          <div className="border border-[#EAEAEA] rounded-2xl p-4 bg-[#FAFAFA] space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#009C9D]" />
              d) Câmera, Mídia e Conteúdo Gerado pelo Usuário (Feed Social)
            </h3>
            <p className="text-xs sm:text-sm text-[#333333]">
              O acesso à câmera ou galeria (<em>expo-image-picker</em>) ocorre apenas sob ação explícita do usuário para adicionar foto de perfil ou fotografar uma refeição ao registrar visita dentro dos 100 metros do restaurante. Comentários, notas e fotos publicados ficam visíveis no Feed Social comunitário.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#11181C] flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#009C9D]" />
          3. Terceiros, Transferência Técnica e Segurança
        </h2>
        <p>
          Todas as comunicações entre o aplicativo e os servidores ocorrem exclusivamente via HTTPS com TLS 1.3; senhas são armazenadas com Argon2id e sessões utilizam tokens JWT com expiração controlada.
        </p>
        <p>
          Para viabilizar recursos essenciais do app sem comercializar dados, utilizamos os seguintes provedores técnicos:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-[#333333]">
          <li>
            <strong>Google Maps Platform:</strong> renderização de mapas e marcadores geográficos, sujeito à{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-[#007E7F] font-bold hover:underline"
            >
              Política de Privacidade do Google
            </a>
            .
          </li>
          <li>
            <strong>Google Sign-In / Identity Services:</strong> validação segura de autenticação OAuth2 por ID Token quando o usuário opta pelo login com Google.
          </li>
          <li>
            <strong>Infraestrutura em Nuvem (MongoDB Atlas e Redis):</strong> persistência e cache protegidos por controle de acesso e sanitização de consultas.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#11181C]">
          4. Retenção, Direitos LGPD e Exclusão de Conta
        </h2>
        <p>
          Conforme a LGPD (Art. 18), você pode solicitar confirmação de tratamento, correção, portabilidade, revogação de consentimento ou exclusão definitiva da sua conta e dos dados associados. O prazo máximo de atendimento e expurgo é de 30 dias corridos.
        </p>
        <p>
          Consulte instruções detalhadas e gere sua solicitação na{' '}
          <Link to="/exclusao-de-dados" className="text-[#007E7F] font-bold hover:underline">
            Página Oficial de Exclusão de Conta e Dados
          </Link>{' '}
          ou consulte o resumo técnico em{' '}
          <Link to="/seguranca-dos-dados" className="text-[#007E7F] font-bold hover:underline">
            Segurança dos Dados (Data Safety)
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#11181C]">
          5. Idade Mínima e Privacidade de Crianças
        </h2>
        <p>
          A criação de conta pessoal no HelpRest requer idade mínima de <strong>13 anos</strong>. O aplicativo não é direcionado a crianças menores de 13 anos e não coleta intencionalmente seus dados. Caso identifiquemos cadastro indevido de menor de 13 anos sem consentimento legal aplicável, removeremos a conta imediatamente após notificação em{' '}
          <a href="mailto:privacidade@helprest.com" className="text-[#007E7F] font-bold hover:underline">
            privacidade@helprest.com
          </a>
          .
        </p>
      </section>

      <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-xs text-[#687076] flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-[#687076] flex-shrink-0 mt-0.5" />
        <div>
          Alterações relevantes nesta Política de Privacidade serão comunicadas nesta URL oficial com data de revisão atualizada.
        </div>
      </div>
    </LegalLayout>
  );
};
