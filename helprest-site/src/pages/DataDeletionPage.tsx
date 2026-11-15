import React, { useId } from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { DeleteAccountForm } from '../components/molecules/DeleteAccountForm';
import { Trash2, Smartphone, Globe, ShieldCheck, Clock } from 'lucide-react';

export const DataDeletionPage: React.FC = () => {
  const retentionCaptionId = useId();

  return (
    <LegalLayout
      title="Exclusão de Conta e Dados Pessoais"
      subtitle="Recurso oficial na web para solicitar a exclusão definitiva de conta ou de histórico de dados do aplicativo HelpRest (com.gustavo_lg.helprest), em conformidade com o Google Play Console e a LGPD."
      lastUpdated="Novembro de 2026"
    >
      {/* Play Console Identity & Account Deletion Box */}
      <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#E9F3F2] space-y-2">
        <div className="flex items-center gap-2 font-bold text-[#00696A] text-sm">
          <ShieldCheck className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>Identificação Oficial para Solicitação de Exclusão</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-[#181C1B] pt-1">
          <div>
            <span className="text-[#525B58] text-xs block">Aplicativo:</span>
            <strong>HelpRest</strong>
          </div>
          <div>
            <span className="text-[#525B58] text-xs block">Pacote Android:</span>
            <code className="font-mono font-bold text-xs">com.gustavo_lg.helprest</code>
          </div>
          <div>
            <span className="text-[#525B58] text-xs block">Desenvolvedor / DPO:</span>
            <strong>Gustavo L. Gregorio (privacidade@helprest.com)</strong>
          </div>
        </div>
      </div>

      {/* Honest Methods */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B]">
          Como Solicitar a Exclusão ou Revogar Dados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Official Web & Email Channel */}
          <div className="tonal-surface rounded-2xl p-5 bg-[#E9F3F2] space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#181C1B]">
              <div className="w-7 h-7 rounded-lg bg-[#007677] flex items-center justify-center text-white flex-shrink-0">
                <Globe className="w-4 h-4" aria-hidden="true" />
              </div>
              <span>1. Solicitação Web e E-mail Oficial</span>
            </div>
            <p className="text-xs sm:text-sm text-[#3A413F] leading-relaxed">
              Ideal mesmo que você já tenha desinstalado o app ou alterado de aparelho. Preencha o formulário abaixo para gerar o protocolo de exclusão integral ou parcial (concluído em até 30 dias) e encaminhar para{' '}
              <a
                href="mailto:privacidade@helprest.com"
                className="font-semibold text-[#00696A] hover:underline"
              >
                privacidade@helprest.com
              </a>
              .
            </p>
          </div>

          {/* Device Permission & Session Revocation */}
          <div className="tonal-surface rounded-2xl p-5 bg-[#F4F6F5] space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#181C1B]">
              <div className="w-7 h-7 rounded-lg bg-[#D4EBE9] flex items-center justify-center text-[#00696A] flex-shrink-0">
                <Smartphone className="w-4 h-4" aria-hidden="true" />
              </div>
              <span>2. Controles Imediatos no Dispositivo Android</span>
            </div>
            <ol className="list-decimal ps-5 text-xs sm:text-sm text-[#3A413F] space-y-1">
              <li>
                No aplicativo, abra seu perfil tocando no avatar da barra superior e selecione <strong className="text-[#181C1B]">Sair</strong> para encerrar os tokens da sessão no dispositivo;
              </li>
              <li>
                Para interromper imediatamente qualquer acesso de localização (inclusive segundo plano), abra{' '}
                <strong className="text-[#181C1B]">Configurações do Android &gt; Aplicativos &gt; HelpRest &gt; Permissões</strong> e defina Localização como <em>Não permitir</em>.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Interactive Request Form */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#181C1B]">
          <Trash2 className="w-5 h-5 text-[#B42318]" aria-hidden="true" />
          <h2>Gerar Solicitação de Exclusão</h2>
        </div>
        <DeleteAccountForm />
      </section>

      {/* Retention Table */}
      <section className="space-y-4 pt-2">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B]">
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
              <tr className="bg-[#EDF1EF] text-[#181C1B]">
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
            <tbody className="text-[#3A413F]">
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#181C1B]">
                  Nome, E-mail, Data de Nascimento e Senha/OAuth
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#181C1B]">
                  Flags de Restrição Alimentar e Foto de Perfil
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#181C1B]">
                  Favoritos (Locais e Produtos)
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#181C1B]">
                  Registros de Visitas e Coordenadas Vinculadas
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">
                  Exclusão permanente ou desvinculação total
                </td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#181C1B]">
                  Médias Coletivas de Avaliação
                </th>
                <td className="py-3 px-4 text-[#00696A] font-semibold">
                  Anonimização sem vínculo pessoal
                </td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-start sm:items-center gap-2 text-xs text-[#525B58]">
          <Clock className="w-4 h-4 text-[#007677] flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <span>
            Caso opte apenas pela “Exclusão Apenas de Dados / Histórico”, suas credenciais permanecem ativas enquanto registros de visitas e localização associados são apagados.
          </span>
        </div>
      </section>
    </LegalLayout>
  );
};
