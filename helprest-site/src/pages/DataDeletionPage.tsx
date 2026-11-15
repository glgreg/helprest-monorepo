import React, { useId } from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { DeleteAccountForm } from '../components/molecules/DeleteAccountForm';
import { ShieldCheck, Clock } from 'lucide-react';

export const DataDeletionPage: React.FC = () => {
  const retentionCaptionId = useId();

  return (
    <LegalLayout
      title="Exclusão de Conta e Dados Pessoais"
      subtitle="Recurso oficial na web para solicitar a exclusão definitiva de conta ou de histórico de dados do aplicativo HelpRest (com.helprest), em conformidade com o Google Play Console e a LGPD."
      lastUpdated="Novembro de 2026"
    >
      {/* Play Console Identity & Account Deletion Reference */}
      <div className="tonal-surface rounded-e-2xl bg-[#EFFBFB] border-s-[3px] border-[#009C9D] px-5 py-4 sm:px-6 sm:py-5 space-y-2.5">
        <div className="flex items-center gap-2 font-bold text-[#11181C] text-sm">
          <ShieldCheck className="w-5 h-5 text-[#00797A] flex-shrink-0" aria-hidden="true" />
          <span>Identificação Oficial para Solicitação de Exclusão</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#11181C] pt-0.5">
          <div>
            <span className="text-[#596168] text-xs block">Aplicativo</span>
            <strong>HelpRest</strong>
          </div>
          <div>
            <span className="text-[#596168] text-xs block">Pacote Android</span>
            <code className="font-mono font-semibold text-xs text-[#11181C]">com.helprest</code>
          </div>
          <div>
            <span className="text-[#596168] text-xs block">Desenvolvedor / DPO</span>
            <strong className="break-words">Gustavo L. Gregorio (privacidade@helprest.net)</strong>
          </div>
        </div>
      </div>

      {/* Honest Methods */}
      <section className="space-y-4">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Como Solicitar a Exclusão ou Revogar Dados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Official Web & Email Channel */}
          <div className="tonal-surface rounded-2xl p-5 bg-[#F7F7F8] space-y-2.5">
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-base font-bold text-[#009C9D]" aria-hidden="true">
                01
              </span>
              <h3 className="text-sm font-bold text-[#11181C]">
                Solicitação Web e E-mail Oficial
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#3F454A] leading-relaxed">
              Ideal mesmo que você já tenha desinstalado o app ou alterado de aparelho. Preencha o formulário abaixo para gerar o protocolo de exclusão integral ou parcial (concluído em até 30 dias) e encaminhar para{' '}
              <a
                href="mailto:privacidade@helprest.net"
                className="font-semibold text-[#00797A] hover:underline"
              >
                privacidade@helprest.net
              </a>
              .
            </p>
          </div>

          {/* Device Permission & Session Revocation */}
          <div className="tonal-surface rounded-2xl p-5 bg-[#F7F7F8] space-y-2.5">
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-base font-bold text-[#009C9D]" aria-hidden="true">
                02
              </span>
              <h3 className="text-sm font-bold text-[#11181C]">
                Controles Imediatos no Dispositivo Android
              </h3>
            </div>
            <ol className="list-decimal ps-5 text-xs sm:text-sm text-[#3F454A] space-y-1.5">
              <li>
                No aplicativo, abra seu perfil tocando no avatar da barra superior e selecione <strong className="text-[#11181C]">Sair</strong> para encerrar os tokens da sessão no dispositivo;
              </li>
              <li>
                Para interromper imediatamente qualquer acesso de localização (inclusive segundo plano), abra{' '}
                <strong className="text-[#11181C]">Configurações do Android &gt; Aplicativos &gt; HelpRest &gt; Permissões</strong> e defina Localização como <em>Não permitir</em>.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Interactive Request Form */}
      <section className="space-y-4 pt-2">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Gerar Solicitação de Exclusão
        </h2>
        <DeleteAccountForm />
      </section>

      {/* Retention Table */}
      <section className="space-y-4 pt-2">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Dados Excluídos, Retenção e Anonimização
        </h2>

        <div
          tabIndex={0}
          role="region"
          aria-labelledby={retentionCaptionId}
          className="tonal-surface hr-table-wrap bg-white"
        >
          <table
            className="hr-responsive-table text-xs sm:text-sm"
            style={
              {
                '--col-2-label': '"Tratamento Aplicado"',
                '--col-3-label': '"Prazo Máximo"',
              } as React.CSSProperties
            }
          >
            <caption id={retentionCaptionId} className="visually-hidden">
              Tabela de categorias de dados excluídos ou anonimizados e prazos máximos de atendimento
            </caption>
            <thead>
              <tr className="bg-[#F1F2F4] text-[#11181C]">
                <th scope="col" className="py-3 px-4 font-semibold text-start rounded-ts-2xl">
                  Tipo de Dado
                </th>
                <th scope="col" className="py-3 px-4 font-semibold text-start">
                  Tratamento Aplicado
                </th>
                <th scope="col" className="py-3 px-4 font-semibold text-start rounded-te-2xl">
                  Prazo Máximo
                </th>
              </tr>
            </thead>
            <tbody className="text-[#3F454A]">
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Nome, E-mail, Data de Nascimento e Senha/OAuth
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Flags de Restrição Alimentar e Foto de Perfil
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Favoritos (Locais e Produtos)
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Registros de Visitas e Coordenadas Vinculadas
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">
                  Exclusão permanente ou desvinculação total
                </td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Médias Coletivas de Avaliação
                </th>
                <td className="py-3 px-4 text-[#00797A] font-semibold">
                  Anonimização sem vínculo pessoal
                </td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-start sm:items-center gap-2 text-xs text-[#596168]">
          <Clock className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <span>
            Caso opte apenas pela “Exclusão Apenas de Dados / Histórico”, suas credenciais permanecem ativas enquanto registros de visitas e localização associados são apagados.
          </span>
        </div>
      </section>
    </LegalLayout>
  );
};
