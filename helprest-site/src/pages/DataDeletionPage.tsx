import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { DeleteAccountForm } from '../components/molecules/DeleteAccountForm';
import { Trash2, Smartphone, Globe, ShieldCheck, Clock } from 'lucide-react';

export const DataDeletionPage: React.FC = () => {
  return (
    <LegalLayout
      title="Exclusão de Conta e Dados Pessoais"
      subtitle="Recurso oficial na web para solicitar a exclusão definitiva de conta ou de histórico de dados do aplicativo HelpRest (com.gustavo_lg.helprest), em conformidade com o Google Play Console e a LGPD."
      lastUpdated="Novembro de 2026"
    >
      {/* Play Console Identity & Account Deletion Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#F4FDFB] border border-[#B2DFDB] space-y-2">
        <div className="flex items-center gap-2 font-bold text-[#007E7F] text-sm">
          <ShieldCheck className="w-5 h-5 flex-shrink-0" />
          <span>Identificação Oficial para Solicitação de Exclusão</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#11181C] pt-1">
          <div>
            <span className="text-[#687076] block">Aplicativo:</span>
            <strong>HelpRest</strong>
          </div>
          <div>
            <span className="text-[#687076] block">Pacote Android:</span>
            <code className="font-mono font-bold">com.gustavo_lg.helprest</code>
          </div>
          <div>
            <span className="text-[#687076] block">Desenvolvedor / DPO:</span>
            <strong>Gustavo L. Gregorio (privacidade@helprest.com)</strong>
          </div>
        </div>
      </div>

      {/* Honest Methods */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-[#11181C]">
          Como Solicitar a Exclusão ou Revogar Dados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Official Web & Email Channel */}
          <div className="border border-[#B2DFDB] rounded-2xl p-5 bg-[#F4FDFB]/60 space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#11181C]">
              <div className="w-7 h-7 rounded-lg bg-[#009C9D] flex items-center justify-center text-white">
                <Globe className="w-4 h-4" />
              </div>
              <span>1. Solicitação Web e E-mail Oficial</span>
            </div>
            <p className="text-xs text-[#333333] leading-relaxed">
              Ideal mesmo que você já tenha desinstalado o app ou alterado de aparelho. Preencha o formulário abaixo para gerar o protocolo de exclusão e encaminhar a confirmação para{' '}
              <a
                href="mailto:privacidade@helprest.com"
                className="font-bold text-[#007E7F] hover:underline"
              >
                privacidade@helprest.com
              </a>
              .
            </p>
            <span className="inline-block font-mono text-[10px] font-bold uppercase text-[#007E7F] bg-white px-2.5 py-0.5 rounded-full border border-[#B2DFDB]">
              Exclusão integral ou parcial em até 30 dias
            </span>
          </div>

          {/* Device Permission & Session Revocation */}
          <div className="border border-[#EAEAEA] rounded-2xl p-5 bg-[#FAFAFA] space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#11181C]">
              <div className="w-7 h-7 rounded-lg bg-[#E0F2F1] flex items-center justify-center text-[#007E7F]">
                <Smartphone className="w-4 h-4" />
              </div>
              <span>2. Controles Imediatos no Dispositivo Android</span>
            </div>
            <ol className="list-decimal pl-5 text-xs text-[#333333] space-y-1">
              <li>
                No aplicativo, abra seu perfil tocando no avatar da barra superior e selecione <strong>Sair</strong> para encerrar os tokens da sessão no dispositivo;
              </li>
              <li>
                Para interromper imediatamente qualquer acesso de localização (inclusive segundo plano), abra{' '}
                <strong>Configurações do Android &gt; Aplicativos &gt; HelpRest &gt; Permissões</strong> e defina Localização como <em>Não permitir</em>.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Interactive Request Form */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#11181C]">
          <Trash2 className="w-5 h-5 text-[#D93829]" />
          <h2>Gerar Solicitação de Exclusão</h2>
        </div>
        <DeleteAccountForm />
      </section>

      {/* Retention Table */}
      <section className="space-y-4 pt-4 border-t border-[#EAEAEA]">
        <h2 className="text-lg sm:text-xl font-bold text-[#11181C]">
          Dados Excluídos, Retenção e Anonimização
        </h2>

        <div className="overflow-x-auto border border-[#EAEAEA] rounded-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#EAEAEA] bg-[#FAFAFA] text-[#11181C]">
                <th className="py-3 px-4 font-bold">Tipo de Dado</th>
                <th className="py-3 px-4 font-bold">Tratamento Aplicado</th>
                <th className="py-3 px-4 font-bold">Prazo Máximo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAEAEA] text-[#333333]">
              <tr>
                <td className="py-3 px-4 font-bold text-[#11181C]">Nome, E-mail, Data de Nascimento e Senha/OAuth</td>
                <td className="py-3 px-4 text-[#D93829] font-bold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-[#11181C]">Flags de Restrição Alimentar e Foto de Perfil</td>
                <td className="py-3 px-4 text-[#D93829] font-bold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-[#11181C]">Favoritos (Locais e Produtos)</td>
                <td className="py-3 px-4 text-[#D93829] font-bold">Exclusão permanente</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-[#11181C]">Registros de Visitas e Coordenadas Vinculadas</td>
                <td className="py-3 px-4 text-[#D93829] font-bold">Exclusão permanente ou desvinculação total</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-[#11181C]">Médias Coletivas de Avaliação</td>
                <td className="py-3 px-4 text-[#735107] font-bold">Anonimização sem vínculo pessoal</td>
                <td className="py-3 px-4">Até 30 dias corridos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#687076]">
          <Clock className="w-4 h-4 text-[#009C9D]" />
          <span>
            Caso opte apenas pela “Exclusão Apenas de Dados / Histórico”, suas credenciais permanecem ativas enquanto registros de visitas e localização associados são apagados.
          </span>
        </div>
      </section>
    </LegalLayout>
  );
};
