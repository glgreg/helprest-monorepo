import React, { useId } from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { DATA_SAFETY_DECLARATIONS } from '../data/dataSafety';
import { ShieldCheck, Lock, CheckCircle2, FileCheck2, MapPin, Smartphone } from 'lucide-react';
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
      subtitle="Espelho público das práticas de coleta, permissões do pacote Android com.gustavo_lg.helprest, criptografia e SDKs declarados ao Google Play Console."
      lastUpdated="Novembro de 2026"
    >
      <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F4F6F5] flex items-start gap-3">
        <FileCheck2 className="w-5 h-5 text-[#007677] flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-[#181C1B] leading-relaxed">
          <strong>Transparência Google Play Data Safety:</strong> Este documento detalha todos os tipos de dados coletados pelo aplicativo <strong>HelpRest</strong>, quais permissões do Android dão origem à coleta, os parceiros técnicos de infraestrutura e as garantias de criptografia e exclusão.
        </div>
      </div>

      {/* Prominent Background Location Summary */}
      <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#E9F3F2] border-s-4 border-[#007677] flex items-start gap-3">
        <MapPin className="w-5 h-5 text-[#007677] flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-[#3A413F] leading-relaxed">
          <strong className="text-[#181C1B]">Localização em Segundo Plano:</strong> A permissão de localização em segundo plano é opcional, ativada apenas mediante escolha expressa de <em>“Permitir o tempo todo”</em>, exibe notificação constante na barra do Android e nunca armazena histórico contínuo de trajetos em nossos bancos de dados.
        </div>
      </div>

      {/* Highlights */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B]">
          Resumo das Práticas Declaradas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="tonal-surface p-4 rounded-2xl bg-[#F4F6F5] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#007677] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="text-[#181C1B] block font-bold">Criptografia em Trânsito</strong>
              <span className="text-[#525B58]">Comunicações sobre HTTPS / TLS 1.3 com hashing Argon2id para senhas.</span>
            </div>
          </div>

          <div className="tonal-surface p-4 rounded-2xl bg-[#F4F6F5] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#007677] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="text-[#181C1B] block font-bold">Solicitação de Exclusão na Web</strong>
              <span className="text-[#525B58]">
                Canal público em{' '}
                <Link to="/exclusao-de-dados" className="text-[#00696A] font-semibold hover:underline">
                  /exclusao-de-dados
                </Link>{' '}
                com prazo de até 30 dias.
              </span>
            </div>
          </div>

          <div className="tonal-surface p-4 rounded-2xl bg-[#F4F6F5] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#007677] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="text-[#181C1B] block font-bold">Sem Venda de Dados ou Anúncios</strong>
              <span className="text-[#525B58]">Nenhum dado é vendido a terceiros ou usado por redes de publicidade.</span>
            </div>
          </div>

          <div className="tonal-surface p-4 rounded-2xl bg-[#F4F6F5] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#007677] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm">
              <strong className="text-[#181C1B] block font-bold">SDKs Limitados ao Essencial</strong>
              <span className="text-[#525B58]">Apenas Google Maps Platform e Google Sign-In OAuth2.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collected Data List */}
      <section className="space-y-4 pt-2">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B]">
          Catálogo de Dados Coletados e Retenção
        </h2>

        <div className="space-y-3.5">
          {DATA_SAFETY_DECLARATIONS.map((item) => (
            <div
              key={item.id}
              className="tonal-surface rounded-2xl p-4 sm:p-5 bg-[#F4F6F5] space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-[#181C1B] text-sm sm:text-base flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#007677] flex-shrink-0" aria-hidden="true" />
                  <span>{item.dataType}</span>
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-[#00696A] w-fit">
                  {item.optionalOrRequired}
                </span>
              </div>

              {item.androidPermission && (
                <div className="font-mono text-xs text-[#525B58]">
                  Origem: <span className="text-[#181C1B] font-medium">{item.androidPermission}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#3A413F] pt-1">
                <div>
                  <strong className="text-[#181C1B] block mb-0.5">Finalidade:</strong>
                  {item.purpose}
                </div>
                <div>
                  <strong className="text-[#181C1B] block mb-0.5">Retenção:</strong>
                  {item.retention}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-[#525B58]">
                <Lock className="w-3.5 h-3.5 text-[#007677] flex-shrink-0" aria-hidden="true" />
                <span>{item.securityMechanism}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Android Permissions Matrix */}
      <section className="space-y-3 pt-2">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>Matriz de Permissões do Aplicativo Android</span>
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
              <tr className="bg-[#EDF1EF] text-[#181C1B]">
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
            <tbody className="text-[#3A413F]">
              {androidPermissions.map((row) => (
                <tr key={row.perm}>
                  <th
                    scope="row"
                    className="py-3 px-4 font-mono text-xs font-semibold text-[#00696A]"
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

      {/* Age & Rating */}
      <section className="space-y-2 pt-2">
        <h2 className="text-lg font-bold text-[#181C1B]">
          Faixa Etária e Conteúdo
        </h2>
        <p className="text-xs sm:text-sm text-[#3A413F]">
          Aplicativo classificado para público geral sem violência ou jogos de azar, com exigência de idade mínima de <strong className="text-[#181C1B]">13 anos</strong> para cadastro de conta individual.
        </p>
      </section>
    </LegalLayout>
  );
};
