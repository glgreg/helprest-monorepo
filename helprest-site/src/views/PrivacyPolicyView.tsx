import React from 'react';
import Link from 'next/link';
import { LegalLayout } from '../components/templates/LegalLayout';
import { MapPin } from 'lucide-react';

export const PrivacyPolicyView: React.FC = () => {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Transparência sobre coleta, bases legais (LGPD), dados sensíveis alimentares, transferência internacional, permissões Android e exclusão definitiva no HelpRest."
      currentHref="/privacidade"
      lastUpdated="Novembro de 2026"
    >
      <p className="text-sm sm:text-base text-[#11181C] font-medium leading-relaxed">
        O HelpRest nunca vende nem aluga seus dados pessoais. Coletamos apenas os dados necessários para filtrar estabelecimentos compatíveis com suas restrições alimentares, autenticar sua sessão com segurança e validar visitas presenciais a até 100 metros do restaurante.
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
          <code className="font-mono text-[0.875em] font-medium text-[#11181C]">FOREGROUND_SERVICE_LOCATION</code>) para manter a tarefa opcional{' '}
          <code className="font-mono text-[0.875em] font-medium text-[#11181C]">HELPREST_BACKGROUND_LOCATION</code> ativa com notificação visível na barra do sistema e ajudar você a descobrir estabelecimentos seguros próximos mesmo quando o aplicativo está minimizado.
        </p>
        <p className="text-xs sm:text-sm text-[#3F454A] leading-relaxed">
          Essa permissão é <strong>estritamente opcional</strong>: você pode utilizar normalmente a busca, o mapa, os filtros de restrições e o cardápio permitindo apenas <em>“Durante o uso do app”</em>. Não mantemos histórico contínuo de trajetos em servidor e você pode revogar a autorização a qualquer momento em{' '}
          <strong className="text-[#11181C]">Configurações do Android &gt; Aplicativos &gt; HelpRest &gt; Permissões</strong>.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          1. Controlador de Dados e Encarregado (DPO — Art. 41 da LGPD)
        </h2>
        <p>
          O aplicativo móvel <strong>HelpRest</strong> (pacote Android{' '}
          <code className="font-mono text-[0.875em] font-medium text-[#11181C]">com.helprest</code>) e suas páginas oficiais são operados sob responsabilidade do desenvolvedor{' '}
          <strong className="text-[#11181C]">Gustavo L. Gregorio</strong> (Curitiba, PR — Brasil), atuando como Controlador de Dados Pessoais nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
        </p>
        <p>
          O contato oficial do <strong className="text-[#11181C]">Encarregado pelo Tratamento de Dados Pessoais (DPO)</strong>, nos termos do Art. 41 da LGPD e da Resolução CD/ANPD nº 18/2024, é{' '}
          <a href="mailto:privacidade@helprest.net" className="text-[#00797A] font-semibold hover:underline">
            privacidade@helprest.net
          </a>{' '}
          (suporte técnico geral e moderação:{' '}
          <a href="mailto:suporte@helprest.net" className="text-[#00797A] font-semibold hover:underline">
            suporte@helprest.net
          </a>
          ).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          2. Dados Coletados, Bases Legais e Finalidades Específicas
        </h2>

        <div className="divide-y divide-[#E6E8EB] border-t border-b border-[#E6E8EB]">
          <div className="py-4 space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              a) Identificação, Autenticação Google OAuth2 e Parceiros Comerciais (Art. 7º, V)
            </h3>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              <strong className="text-[#11181C]">Consumidores:</strong> para execução regular do serviço solicitado (Art. 7º, V da LGPD), coletamos nome completo, e-mail, identificador único do provedor Google Sign-In (<code className="font-mono text-[0.875em]">googleId</code> via OAuth2), data de nascimento (verificação etária mínima e perfil) e, opcionalmente, foto de perfil e links de redes sociais. O HelpRest não coleta nem armazena senhas tradicionais, operando exclusivamente com autenticação federada via Google Identity Services e tokens JWT de sessão.
            </p>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              <strong className="text-[#11181C]">Estabelecimentos Parceiros:</strong> nome comercial, endereço geográfico, cardápios e identificação empresarial (CNPJ) quando informada no fluxo cadastral pelo gestor da unidade.
            </p>
          </div>

          <div className="py-4 space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              b) Restrições Alimentares — Dados Sensíveis Relacionados à Saúde (Art. 5º, II e Art. 11, I)
            </h3>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              As flags selecionadas no perfil (Sem Glúten, Sem Lactose, Vegano, Vegetariano, Sem Castanhas, Sem Frutos do Mar, Sem Ovos e Sem Açúcar) podem estar associadas a condições clínicas como doença celíaca, intolerâncias e alergias severas, configurando{' '}
              <strong className="text-[#11181C]">dado pessoal sensível referente à saúde</strong> (Art. 5º, II da LGPD). Esse tratamento baseia-se exclusivamente no seu{' '}
              <strong className="text-[#11181C]">consentimento específico e destacado (Art. 11, I da LGPD)</strong> para a finalidade estrita de ranqueamento pelo{' '}
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">RecommendationService</code> e separação de cardápios em <em>“Para você”</em> e <em>“Outros Itens”</em>. Jamais utilizamos suas restrições alimentares para fins publicitários, comercialização ou inferência clínica, sendo possível editar ou revogar suas escolhas a qualquer momento no aplicativo.
            </p>
          </div>

          <div className="py-4 space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              c) Localização Geográfica — Primeiro Plano e Segundo Plano Opcional (Art. 7º, I)
            </h3>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              Mediante consentimento na permissão do sistema Android (Art. 7º, I), coordenadas aproximadas e precisas (
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">ACCESS_FINE_LOCATION</code> e{' '}
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">ACCESS_COARSE_LOCATION</code>) são processadas para ordenar estabelecimentos próximos e aplicar a validação presencial no raio de{' '}
              <strong className="text-[#11181C]">100 metros</strong> (geofencing) ao publicar fotos de visitas. Caso habilite o modo opcional em segundo plano (
              <code className="font-mono text-[0.875em] font-medium text-[#11181C]">ACCESS_BACKGROUND_LOCATION</code>), uma notificação visível (<code className="font-mono text-[0.875em]">POST_NOTIFICATIONS</code>) permanece ativa na barra do dispositivo.
            </p>
          </div>

          <div className="py-4 space-y-1.5">
            <h3 className="font-bold text-[#11181C] text-sm">
              d) Câmera, Mídia e Conteúdo Gerado pelo Usuário (Art. 7º, I e Art. 7º, IX)
            </h3>
            <p className="text-xs sm:text-sm text-[#3F454A]">
              O seletor de mídia do sistema (<code className="font-mono text-[0.875em] font-medium text-[#11181C]">expo-image-picker</code>) é acionado somente por iniciativa do usuário para foto de perfil ou foto de refeição dentro dos 100 metros do restaurante. Avaliações, notas e fotos publicados ficam visíveis no Feed Social comunitário. Também tratamos registros estritamente necessários de moderação, denúncia de avaliações e auditoria de segurança contra abusos e bloqueios (Art. 7º, II, VI e IX). O aplicativo não processa pagamentos nem integra redes externas de anúncios comportamentais.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          3. Operadores, Segurança e Transferência Internacional de Dados (Art. 33 da LGPD)
        </h2>
        <p>
          Todas as transmissões entre o aplicativo móvel e os servidores ocorrem exclusivamente via <strong className="text-[#11181C]">HTTPS criptografado (TLS 1.2/1.3)</strong>. Os tokens de autenticação utilizam assinatura criptográfica HS256 com controle de expiração, e toda entrada de dados passa por sanitização contra injeção de consultas e limitação de taxa distribuída.
        </p>
        <p>
          Para viabilizar a operação técnica sem comercialização de dados e sem SDKs publicitários, contamos com os seguintes operadores e provedores essenciais, cuja infraestrutura em nuvem pode implicar <strong className="text-[#11181C]">transferência internacional de dados</strong> amparada pelo <strong className="text-[#11181C]">Art. 33 da LGPD</strong> e pela <strong className="text-[#11181C]">Resolução CD/ANPD nº 19/2024</strong> (cláusulas contratuais padrão e salvaguardas equivalentes de proteção):
        </p>
        <ul className="list-disc ps-6 space-y-1.5 text-xs sm:text-sm text-[#3F454A]">
          <li>
            <strong className="text-[#11181C]">Google Identity Services (OAuth2 / JWKS):</strong> verificação criptográfica do ID Token para login seguro com conta Google.
          </li>
          <li>
            <strong className="text-[#11181C]">Google Maps Platform:</strong> renderização de mapas e marcadores geográficos, sujeita à{' '}
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
            <strong className="text-[#11181C]">Infraestrutura em Nuvem (MongoDB Atlas e Redis):</strong> banco de dados gerenciado e cache efêmero protegidos por controle de acesso, isolamento de rede e criptografia em trânsito e em repouso.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          4. Término do Tratamento, Exclusão Definitiva e Retenção Pós-Exclusão (Arts. 15, 16 e 18)
        </h2>
        <p>
          Nos termos do <strong className="text-[#11181C]">Art. 18, VI</strong> e do <strong className="text-[#11181C]">Art. 18, §5º e Art. 19, II da LGPD</strong>, o titular pode solicitar a eliminação definitiva dos seus dados tratados com base no consentimento ou o encerramento integral de sua conta. As solicitações verificadas são atendidas de forma <strong className="text-[#11181C]">imediata</strong> quando tecnicamente exequível ou no prazo máximo legal de <strong className="text-[#11181C]">15 (quinze) dias corridos</strong>.
        </p>
        <p>
          Ao optar pela exclusão total da conta, realizamos o <strong className="text-[#11181C]">expurgo definitivo</strong> dos seguintes dados nos sistemas operacionais: credenciais Google OAuth2 (<code className="font-mono text-[0.875em]">googleId</code>), nome, e-mail, data de nascimento, foto de perfil, links sociais, localização salva, favoritos, flags alimentares sensíveis{' '}
          <strong className="text-[#11181C]">e também todos os registros individuais de visitas, comentários textuais de avaliações, fotos de refeições e coordenadas associadas</strong>. Não mantemos avaliações em texto nem fotos publicadas de forma meramente “desvinculada” após pedido de exclusão.
        </p>
        <p>
          As únicas hipóteses estritas de conservação após o encerramento da conta limitam-se ao disposto no <strong className="text-[#11181C]">Art. 16 e Art. 12 da LGPD</strong>:
        </p>
        <ul className="list-disc ps-6 space-y-1.5 text-xs sm:text-sm text-[#3F454A]">
          <li>
            <strong className="text-[#11181C]">Dados estatísticos irreversivelmente anônimos (Art. 16, IV c/c Art. 12):</strong> apenas contadores ou médias numéricas agregadas de estabelecimentos, sem textos, imagens, marcações temporais granulares ou identificadores, e somente quando a quantidade de avaliações impedir qualquer singularização ou reidentificação indireta (em baixos volumes, a contribuição da conta é suprimida no recálculo).
          </li>
          <li>
            <strong className="text-[#11181C]">Cumprimento de obrigação legal, regulatória ou ordem judicial (Art. 16, I e VI):</strong> armazenamento em base lógica isolada e inacessível ao uso comercial apenas pelo prazo mínimo obrigatório em lei (por exemplo, preservação de registros em apuração compulsória de CSAE/CSAM, prevenção documentada a abusos graves ou atendimento a mandado judicial), sendo automaticamente eliminado após o termo legal.
          </li>
          <li>
            <strong className="text-[#11181C]">Cópias de backup criptografadas:</strong> cópias cíclicas de segurança são sobrescritas automaticamente no ciclo de rotação em até <strong className="text-[#11181C]">30 (trinta) dias corridos</strong>; havendo restauração antes da rotação, a remoção é reaplicada antes de qualquer exposição.
          </li>
        </ul>
        <p>
          Consulte todos os passos e gere seu protocolo na{' '}
          <Link href="/exclusao-de-dados" className="text-[#00797A] font-semibold hover:underline">
            Página Oficial de Exclusão de Conta e Dados
          </Link>{' '}
          ou verifique as práticas técnicas em{' '}
          <Link href="/seguranca-dos-dados" className="text-[#00797A] font-semibold hover:underline">
            Segurança dos Dados (Data Safety)
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          5. Direitos do Titular, Decisões Automatizadas (Art. 20) e Petição à ANPD
        </h2>
        <p>
          A qualquer momento você pode exercer gratuitamente, pelo canal{' '}
          <a href="mailto:privacidade@helprest.net" className="text-[#00797A] font-semibold hover:underline">
            privacidade@helprest.net
          </a>
          , os direitos previstos no Art. 18 da LGPD: confirmação de tratamento, acesso e cópia dos dados, correção de informações incompletas ou inexatas, anonimização, bloqueio ou eliminação de dados excessivos, portabilidade, informação sobre entidades públicas/privadas com as quais houve compartilhamento técnico, revogação do consentimento e oposição quando aplicável.
        </p>
        <p>
          <strong className="text-[#11181C]">Decisões Automatizadas (Art. 20):</strong> O{' '}
          <code className="font-mono text-[0.875em]">RecommendationService</code> calcula de forma determinística a compatibilidade de estabelecimentos e pratos com base nas flags selecionadas, localização e regra de exclusão <em>zero-match</em>. Caso deseje esclarecimentos sobre os critérios adotados ou revisão humana de eventual moderação/restrição automatizada, acione o Encarregado (DPO).
        </p>
        <p>
          Sem prejuízo do atendimento direto pelo HelpRest, o titular possui o direito expresso de <strong className="text-[#11181C]">peticionar diretamente junto à Autoridade Nacional de Proteção de Dados (ANPD)</strong> (Art. 18, §1º e §8º da LGPD) e aos órgãos de defesa do consumidor (PROCON/SENACON).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          6. Crianças, Adolescentes (Art. 14 da LGPD) e Segurança Infantil (CSAE / CSAM)
        </h2>
        <p>
          O cadastro e uso de conta pessoal no HelpRest é estritamente proibido para <strong className="text-[#11181C]">crianças menores de 13 anos</strong>. Caso seja identificado registro indevido de menor de 13 anos, a conta e todos os dados serão eliminados imediatamente após comunicação em{' '}
          <a href="mailto:privacidade@helprest.net" className="text-[#00797A] font-semibold hover:underline">
            privacidade@helprest.net
          </a>
          .
        </p>
        <p>
          Para <strong className="text-[#11181C]">adolescentes com idade entre 13 anos completos e menores de 18 anos</strong>, em conformidade com o <strong className="text-[#11181C]">Art. 14 da LGPD</strong>, o Estatuto da Criança e do Adolescente (ECA) e o Código Civil, a criação da conta e o consentimento específico para tratamento de restrições alimentares e localização devem ocorrer mediante assistência/autorização de pelo menos um dos pais ou responsável legal, priorizando sempre o melhor interesse do adolescente.
        </p>
        <p>
          Adotamos tolerância zero contra abuso e exploração sexual infantil (CSAE/CSAM), conforme detalhado nos{' '}
          <Link href="/termos#seguranca-infantil" className="text-[#00797A] font-semibold hover:underline">
            Padrões de Segurança Infantil dos Termos de Uso
          </Link>
          .
        </p>
      </section>

      <p className="pt-5 border-t border-[#E6E8EB] text-xs text-[#596168]">
        Alterações materiais nesta Política de Privacidade serão comunicadas nesta URL oficial com data de atualização revisada e aviso proporcional nos canais do aplicativo quando exigido pela LGPD.
      </p>
    </LegalLayout>
  );
};
