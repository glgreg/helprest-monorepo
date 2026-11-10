import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { DeleteAccountForm } from '../components/molecules/DeleteAccountForm';
import { Trash2, Smartphone, Globe, ShieldCheck, Clock } from 'lucide-react';

export const DataDeletionPage: React.FC = () => {
  return (
    <LegalLayout
      title="Exclusão de Conta e Dados Pessoais"
      subtitle="Instruções claras e formulário oficial para solicitação de exclusão definitiva de contas e histórico de dados do aplicativo HelpRest, conforme exigido pelo Google Play Console e LGPD."
      lastUpdated="Novembro de 2026"
    >
      {/* Google Play Policy Statement */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          <strong>Conformidade Google Play Console (Políticas de Exclusão de Contas):</strong> Se o seu aplicativo permite que usuários criem uma conta de dentro do app, ele deve permitir que usuários solicitem a exclusão da conta de forma fácil tanto de dentro do aplicativo quanto por meio de um recurso baseado na Web. O HelpRest disponibiliza ambos os caminhos abaixo.
        </div>
      </div>

      {/* Two Paths to Delete */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Como Solicitar a Exclusão dos Seus Dados
        </h2>
        <p className="text-sm text-slate-600">
          Você pode escolher o método mais conveniente para realizar a sua solicitação:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Path 1: Inside the App */}
          <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/70 space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <div className="w-7 h-7 rounded-lg bg-[#E6F7F7] flex items-center justify-center text-[#009C9D]">
                <Smartphone className="w-4 h-4" />
              </div>
              <span>Método 1: Diretamente no App</span>
            </div>
            <p className="text-xs text-slate-600">
              Ideal para quem ainda tem o aplicativo instalado:
            </p>
            <ol className="list-decimal pl-5 text-xs text-slate-600 space-y-1">
              <li>Abra o <strong>HelpRest</strong> e acesse a aba <strong>Perfil</strong>;</li>
              <li>Toque no ícone de <strong>Configurações</strong> no canto superior;</li>
              <li>Role até a seção <strong>Segurança e Privacidade</strong>;</li>
              <li>Selecione <strong>Excluir Minha Conta</strong>;</li>
              <li>Confirme digitando sua senha ou autenticando via Google.</li>
            </ol>
            <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Processamento instantâneo
            </span>
          </div>

          {/* Path 2: Web Form */}
          <div className="border border-[#009C9D]/40 rounded-2xl p-5 bg-[#E6F7F7]/30 space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <div className="w-7 h-7 rounded-lg bg-[#009C9D] flex items-center justify-center text-white">
                <Globe className="w-4 h-4" />
              </div>
              <span>Método 2: Formulário Web Oficial</span>
            </div>
            <p className="text-xs text-slate-600">
              Ideal para quem desinstalou o aplicativo ou não tem acesso ao aparelho móvel:
            </p>
            <p className="text-xs text-slate-600">
              Preencha o formulário eletrônico disponibilizado logo abaixo informando o e-mail cadastrado. Um protocolo será gerado e os dados excluídos em até 30 dias.
            </p>
            <span className="inline-block text-[11px] font-semibold text-[#007E7F] bg-[#E6F7F7] px-2 py-0.5 rounded border border-[#009C9D]/20">
              Disponível abaixo 24h/7
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Form Component */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Trash2 className="w-5 h-5 text-rose-600" />
          <h2>Formulário de Solicitação de Exclusão (Web)</h2>
        </div>
        <DeleteAccountForm />
      </section>

      {/* Data Retention & Deletion Details */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">
          Quais Dados São Excluídos e Quais São Retidos?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <th className="py-2.5 px-3 font-semibold">Tipo de Informação</th>
                <th className="py-2.5 px-3 font-semibold">Ação Realizada</th>
                <th className="py-2.5 px-3 font-semibold">Prazo de Execução</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="py-3 px-3 font-medium text-slate-800">Credenciais & Login</td>
                <td className="py-3 px-3 text-rose-600 font-semibold">Exclusão permanente</td>
                <td className="py-3 px-3">Imediata (até 30 dias para backups frios)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-slate-800">Flags de Restrição Alimentar</td>
                <td className="py-3 px-3 text-rose-600 font-semibold">Exclusão permanente</td>
                <td className="py-3 px-3">Imediata</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-slate-800">Locais Salvos & Favoritos</td>
                <td className="py-3 px-3 text-rose-600 font-semibold">Exclusão permanente</td>
                <td className="py-3 px-3">Imediata</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-slate-800">Histórico de Geolocalização</td>
                <td className="py-3 px-3 text-rose-600 font-semibold">Exclusão permanente</td>
                <td className="py-3 px-3">Imediata</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-slate-800">Avaliações Públicas e Notas de Restaurantes</td>
                <td className="py-3 px-3 text-amber-700 font-medium">Anonimização permanente (desvinculação do autor)</td>
                <td className="py-3 px-3">Até 30 dias (para preservar a média coletiva do estabelecimento)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
          <Clock className="w-4 h-4 text-slate-400" />
          <span>O processo completo de expurgo é finalizado em no máximo 30 dias corridos em cumprimento à LGPD.</span>
        </div>
      </section>
    </LegalLayout>
  );
};
