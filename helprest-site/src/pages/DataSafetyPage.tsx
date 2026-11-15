import React, { useId } from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { DATA_SAFETY_DECLARATIONS } from '../data/dataSafety';
import { Lock, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from '../router';

export const DataSafetyPage: React.FC = () => {
  const permissionsCaptionId = useId();

  const androidPermissions = [
    {
      perm: 'ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION',
      status: 'Opcional / Solicitada em tempo de execução',
      why: 'Exibir locais próximos no mapa e validar o raio físico de 100m ao registrar uma visita avaliada.',
    },
    {
      perm: 'ACCESS_BACKGROUND_LOCATION + FOREGROUND_SERVICE_LOCATION',
      status: 'Estritamente opcional (“Permitir o tempo todo”)',
      why: 'Permite a execução da tarefa HELPREST_BACKGROUND_LOCATION com notificação persistente no Android para descobrir locais seguros próximos.',
    },
    {
      perm: 'POST_NOTIFICATIONS / VIBRATE',
      status: 'Opcional',
      why: 'Exibe o indicador obrigatório de serviço em execução quando o monitoramento de proximidade está habilitado.',
    },
    {
      perm: 'Câmera / Seletor de Mídia (expo-image-picker)',
      status: 'Opcional sob ação do usuário',
      why: 'Anexar foto de perfil ou foto do prato em visitas registradas dentro do raio de 100 metros.',
    },
  ];

  return (
    <LegalLayout
      title="Segurança dos Dados (Data Safety)"
      subtitle="Espelho público das práticas de coleta, permissões do pacote Android com.helprest, criptografia e SDKs declarados ao Google Play Console."
      lastUpdated="Novembro de 2026"
    >
      <p className="text-sm sm:text-base text-[#11181C] font-medium leading-relaxed">
        Este documento espelha integralmente as respostas enviadas ao formulário Data Safety do Google Play Console para o aplicativo HelpRest, detalhando coleta, compartilhamento técnico e controles do usuário.
      </p>

      {/* Prominent Background Location Summary */}
      <div className="tonal-surface rounded-e-2xl bg-[#EFFBFB] border-s-[3px] border-[#009C9D] px-5 py-4 sm:px-6 sm:py-5 flex items-start gap-3">
        <MapPin className="w-5 h-5 text-[#00797A] flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-[#3F454A] leading-relaxed">
          <strong className="text-[#11181C]">Localização em Segundo Plano:</strong> A permissão de localização em segundo plano é opcional, ativada apenas mediante escolha expressa de <em>“Permitir o tempo todo”</em>, exibe notificação constante na barra do Android e nunca armazena histórico contínuo de trajetos em nossos bancos de dados.
        </div>
      </div>

      {/* Highlights */}
      <section className="space-y-4">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Resumo das Práticas Declaradas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F7F7F8] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="text-[#11181C] block font-bold">Criptografia em Trânsito</strong>
              <span className="text-[#596168]">Comunicações sobre HTTPS / TLS 1.3 com hashing Argon2id para senhas.</span>
            </div>
          </div>

          <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F7F7F8] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="text-[#11181C] block font-bold">Solicitação de Exclusão na Web</strong>
              <span className="text-[#596168]">
                Canal público em{' '}
                <Link to="/exclusao-de-dados" className="text-[#00797A] font-semibold hover:underline">
                  /exclusao-de-dados
                </Link>{' '}
                com prazo de até 30 dias.
              </span>
            </div>
          </div>

          <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F7F7F8] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="text-[#11181C] block font-bold">Sem Redes de Anúncios ou Venda</strong>
              <span className="text-[#596168]">Zero SDKs publicitários de terceiros e nenhuma comercialização de dados.</span>
            </div>
          </div>

          <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F7F7F8] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="text-[#11181C] block font-bold">SDKs &amp; Escopo Restritos</strong>
              <span className="text-[#596168]">Apenas Google Maps Platform e Google Sign-In OAuth2; sem coleta financeira.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collected Data Catalog — Editorial Divided Layout */}
      <section className="space-y-4 pt-2">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Catálogo de Dados Coletados e Retenção
        </h2>

        <div className="divide-y divide-[#E6E8EB] border-t border-b border-[#E6E8EB]">
          {DATA_SAFETY_DECLARATIONS.map((item) => (
            <div key={item.id} className="py-5 space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                <h3 className="font-bold text-[#11181C] text-sm sm:text-base">{item.dataType}</h3>
                <span className="text-xs font-semibold text-[#00797A] flex-shrink-0">
                  {item.optionalOrRequired}
                </span>
              </div>

              {item.androidPermission && (
                <div className="font-mono text-xs text-[#596168]">
                  Origem: <span className="text-[#11181C] font-medium">{item.androidPermission}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#3F454A] pt-0.5">
                <div>
                  <strong className="text-[#11181C] block mb-0.5">Finalidade:</strong>
                  {item.purpose}
                </div>
                <div>
                  <strong className="text-[#11181C] block mb-0.5">Retenção:</strong>
                  {item.retention}
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 text-xs text-[#596168]">
                <Lock className="w-3.5 h-3.5 text-[#009C9D] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item.securityMechanism}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Android Permissions Matrix */}
      <section className="space-y-3 pt-2">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Matriz de Permissões do Aplicativo Android
        </h2>
        <div
          tabIndex={0}
          role="region"
          aria-labelledby={permissionsCaptionId}
          className="tonal-surface hr-table-wrap bg-white"
        >
          <table
            className="hr-responsive-table text-xs sm:text-sm"
            style={
              {
                '--col-2-label': '"Controle do Usuário"',
                '--col-3-label': '"Finalidade Prática"',
              } as React.CSSProperties
            }
          >
            <caption id={permissionsCaptionId} className="visually-hidden">
              Matriz de permissões do aplicativo Android, controle do usuário e finalidade prática
            </caption>
            <thead>
              <tr className="bg-[#F1F2F4] text-[#11181C]">
                <th scope="col" className="py-3 px-4 font-semibold text-start rounded-ts-2xl">
                  Permissão declarada
                </th>
                <th scope="col" className="py-3 px-4 font-semibold text-start">
                  Controle do Usuário
                </th>
                <th scope="col" className="py-3 px-4 font-semibold text-start rounded-te-2xl">
                  Finalidade Prática
                </th>
              </tr>
            </thead>
            <tbody className="text-[#3F454A]">
              {androidPermissions.map((row) => (
                <tr key={row.perm}>
                  <th
                    scope="row"
                    className="py-3 px-4 font-mono text-xs font-semibold text-[#00797A]"
                  >
                    {row.perm}
                  </th>
                  <td className="py-3 px-4">{row.status}</td>
                  <td className="py-3 px-4">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Age, Category & Declarations */}
      <section className="space-y-2 pt-2">
        <h2 className="font-display text-lg font-bold text-[#11181C]">
          Faixa Etária, Categoria e Declarações de Plataforma
        </h2>
        <p className="text-xs sm:text-sm text-[#3F454A]">
          Aplicativo independente privado (não vinculado a entidade governamental) na categoria de gastronomia (<em>Comer e beber</em>), classificado para público geral com idade mínima de <strong className="text-[#11181C]">13 anos</strong> para cadastro de conta individual e conformidade integral com os{' '}
          <Link to="/termos#seguranca-infantil" className="text-[#00797A] font-semibold hover:underline">
            Padrões de Segurança Infantil (CSAE/CSAM)
          </Link>
          .
        </p>
      </section>
    </LegalLayout>
  );
};
