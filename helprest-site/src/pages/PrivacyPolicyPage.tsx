import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { ShieldCheck, Lock, MapPin, Eye, Database, AlertCircle } from 'lucide-react';
import { Link } from '../router';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Conheça nossas práticas de transparência, proteção e tratamento de dados pessoais no HelpRest, em estrita conformidade com a LGPD e as políticas do Google Play Console."
      lastUpdated="Novembro de 2026"
    >
      {/* Overview Card */}
      <div className="p-5 rounded-2xl bg-[#E6F7F7]/60 border border-[#009C9D]/30 flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-[#007E7F] flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-slate-700">
          <strong>Resumo de Privacidade:</strong> O HelpRest nunca comercializa seus dados pessoais. Coletamos apenas as informações estritamente necessárias para calcular compatibilidade com restrições alimentares, geolocalizar restaurantes próximos e validar a autenticidade de fotos de visitas via geofencing de 100 metros.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Database className="w-5 h-5 text-[#009C9D]" />
          1. Quem é o Responsável pelo Tratamento dos Dados?
        </h2>
        <p>
          O aplicativo <strong>HelpRest</strong> (disponível sob o pacote Android <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-slate-800">com.gustavo_lg.helprest</code>) e o site oficial <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-slate-800">helprest.com.br</code> são operados pela HelpRest Tecnologia, atuando como Controladora de Dados nos termos da Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 - "LGPD").
        </p>
        <p>
          Para quaisquer dúvidas, solicitações ou exercício de direitos de titularidade de dados, nosso Encarregado pelo Tratamento de Dados Pessoais (DPO) pode ser contatado diretamente através do canal: <a href="mailto:privacidade@helprest.com" className="text-[#009C9D] font-semibold hover:underline">privacidade@helprest.com</a>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#009C9D]" />
          2. Dados Pessoais Coletados e Finalidades
        </h2>
        <p>
          Coletamos dados em três categorias principais, sempre pautados nas bases legais do Consentimento, Execução de Contrato e Legítimo Interesse:
        </p>

        <div className="space-y-4 pt-2">
          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              a) Dados Cadastrais e de Autenticação
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong>O que coletamos:</strong> Nome completo, endereço de e-mail, senha criptografada (em caso de login tradicional) ou identificador único emitido pelo Google Sign-In (ID Token verificado via JWKS).
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              <strong>Finalidade:</strong> Criação e gerenciamento de perfil, autenticação segura através de JSON Web Tokens (JWT) com refresh token rotacionado e comunicação sobre a conta.
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
            <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#009C9D]" />
              b) Dados de Geolocalização (Permissões de GPS)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong>O que coletamos:</strong> Coordenadas de latitude e longitude (<code className="text-xs font-mono">ACCESS_FINE_LOCATION</code> e <code className="text-xs font-mono">ACCESS_COARSE_LOCATION</code>) obtidas quando o usuário autoriza a localização no dispositivo.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              <strong>Finalidade:</strong> (i) Ordenar restaurantes pela distância física mais próxima por meio da fórmula de Haversine e índices geoespaciais 2dsphere; (ii) Executar a regra de segurança anti-fraude de <em>geofencing de 100 metros</em>, que valida se o usuário esteve de fato presente no estabelecimento antes de permitir a postagem de fotos de visitas no feed comunitário.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              <strong>Nota sobre Localização em Segundo Plano:</strong> A localização em segundo plano só é utilizada mediante autorização explícita para alertar sobre estabelecimentos seguros ao redor do usuário, nunca sendo armazenado histórico contínuo de rastreamento.
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              c) Preferências de Restrição Alimentar (Dados Sensíveis de Estilo de Vida)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong>O que coletamos:</strong> As flags ativas marcadas no perfil (por exemplo: Sem Glúten/Doença Celíaca, Intolerância a Lactose, Vegano, Vegetariano, Alergia a Frutos do Mar, Alergia a Castanhas/Amendoim, etc.).
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              <strong>Finalidade:</strong> Alimentar o algoritmo de recomendação <code className="text-xs font-mono">RecommendationService</code> para filtrar cardápios e exibir scores de correspondência (Match 100% ou Parcial).
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              d) Fotos de Visitas e Conteúdo Gerado pelo Usuário
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong>O que coletamos:</strong> Fotografias de pratos e ambientes enviadas voluntariamente pelo usuário ao publicar uma avaliação de visita.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              <strong>Finalidade:</strong> Exibição no feed social comunitário para auxiliar outros usuários com restrições a visualizarem opções seguras de consumo.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#009C9D]" />
          3. Práticas de Segurança e Criptografia
        </h2>
        <p>
          Adotamos salvaguardas técnicas e organizacionais avançadas para garantir a integridade e sigilo dos dados:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
          <li><strong>Criptografia em trânsito:</strong> Toda comunicação entre o app mobile, web e servidores de API é forçada sobre HTTPS com protocolo TLS 1.3 e cabeçalhos de segurança estritos.</li>
          <li><strong>Armazenamento de senhas com Argon2id:</strong> Senhas nunca são salvas em texto puro. Utilizamos Argon2id com parâmetros seguros de salt e memória.</li>
          <li><strong>Tokens de acesso seguros (JWT):</strong> Sessões utilizam tokens HS256 com prazo de expiração curto e renovação automatizada com refresh tokens.</li>
          <li><strong>Sanitização NoSQL:</strong> Proteção estrita contra ataques de injeção em banco de dados NoSQL MongoDB através de sanitização de operadores.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">
          4. Compartilhamento de Dados com Terceiros
        </h2>
        <p>
          <strong>O HelpRest não vende, não aluga e não comercializa dados pessoais sob nenhuma hipótese.</strong> O compartilhamento ocorre exclusivamente com fornecedores de infraestrutura indispensáveis para a prestação do serviço:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-600">
          <li><strong>Google Maps Platform:</strong> Para exibição de mapas interativos, geocodificação de endereços e rotas.</li>
          <li><strong>Infraestrutura de Banco de Dados em Nuvem (MongoDB Atlas & Redis):</strong> Para persistência criptografada e cache distribuído com alta disponibilidade.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">
          5. Direitos dos Titulares de Dados (LGPD Art. 18)
        </h2>
        <p>
          Você tem direito, a qualquer momento e mediante requisição gratuita, a:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-600">
          <li>Confirmar a existência de tratamento de dados;</li>
          <li>Acessar e retificar seus dados cadastrais diretamente no aplicativo;</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Revogar seu consentimento ou solicitar a exclusão integral de sua conta e histórico.</li>
        </ul>
        <p className="pt-1">
          Para solicitar a exclusão definitiva, você pode utilizar a opção no próprio aplicativo ou acessar nossa página exclusiva de conformidade: <Link to="/exclusao-de-dados" className="text-[#009C9D] font-bold hover:underline">Página de Exclusão de Conta e Dados</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">
          6. Proteção da Privacidade Infantil
        </h2>
        <p>
          O HelpRest é direcionado ao público geral e não coleta intencionalmente dados de crianças menores de 13 anos. Caso tome conhecimento de cadastro indevido de menor sem autorização parental, realizaremos a exclusão imediata mediante notificação via <a href="mailto:privacidade@helprest.com" className="text-[#009C9D] font-semibold hover:underline">privacidade@helprest.com</a>.
        </p>
      </section>

      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
        <div>
          Esta política pode ser atualizada periodicamente para refletir evoluções regulatórias ou novos recursos do produto. Quaisquer alterações substanciais serão comunicadas previamente pelo aplicativo ou por e-mail.
        </div>
      </div>
    </LegalLayout>
  );
};
