import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { DeleteAccountForm } from '../components/molecules/DeleteAccountForm';
import { ShieldCheck, Clock } from 'lucide-react';

export const DataDeletionView: React.FC = () => {
  const retentionCaptionId = 'lgpd-retention-caption';

  return (
    <LegalLayout
      title="Exclusão de Conta e Dados Pessoais"
      subtitle="Canal web oficial e independente para solicitar a eliminação definitiva de sua conta ou histórico de dados no aplicativo HelpRest (com.helprest), em conformidade com a LGPD (Lei nº 13.709/2018) e o Google Play Console."
      currentHref="/exclusao-de-dados"
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
            <span className="text-[#596168] text-xs block">Controlador / DPO</span>
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
                Solicitação Web e <span className="whitespace-nowrap">E-mail</span> Oficial (LGPD Art. 18)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#3F454A] leading-relaxed">
              Funciona mesmo que você já tenha desinstalado o aplicativo ou trocado de smartphone. Preencha o formulário abaixo para gerar seu protocolo formal e enviar ao DPO em{' '}
              <a
                href="mailto:privacidade@helprest.net"
                className="font-semibold text-[#00797A] hover:underline"
              >
                privacidade@helprest.net
              </a>{' '}
              (atendimento imediato ou em até <strong>15 dias corridos</strong>).
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
                No aplicativo, acesse seu perfil tocando no avatar e selecione <strong className="text-[#11181C]">Sair</strong> para revogar os tokens JWT armazenados no aparelho;
              </li>
              <li>
                Para interromper na hora o acesso de localização (inclusive segundo plano), abra{' '}
                <strong className="text-[#11181C]">Configurações do Android &gt; Aplicativos &gt; HelpRest &gt; Permissões</strong> e defina Localização como <em>Não permitir</em>;
              </li>
              <li>
                Você também pode gerenciar o vínculo OAuth em sua conta Google (<em>Segurança &gt; Conexões com apps de terceiros</em>).
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

      {/* LGPD Retention Table */}
      <section className="space-y-4 pt-2">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Eliminação Definitiva, Estatísticas Anônimas e Prazos LGPD
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
              Tabela de eliminação de dados pessoais e regras de guarda legal sob a LGPD
            </caption>
            <thead>
              <tr className="bg-[#F1F2F4] text-[#11181C]">
                <th scope="col" className="py-3 px-4 font-semibold text-start rounded-ts-2xl">
                  Categoria de Dado
                </th>
                <th scope="col" className="py-3 px-4 font-semibold text-start">
                  Tratamento Aplicado (Art. 15, 16 e 18 LGPD)
                </th>
                <th scope="col" className="py-3 px-4 font-semibold text-start rounded-te-2xl">
                  Prazo Máximo
                </th>
              </tr>
            </thead>
            <tbody className="text-[#3F454A]">
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Nome, E-mail, Data de Nascimento e Vínculo Google OAuth2
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">
                  Eliminação definitiva dos bancos operacionais
                </td>
                <td className="py-3 px-4">Imediato ou até 15 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Flags Alimentares (Dados Sensíveis Art. 11), Foto e Links
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">
                  Eliminação definitiva e revogação integral do consentimento
                </td>
                <td className="py-3 px-4">Imediato ou até 15 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Favoritos (Locais/Produtos) e Localização Salva
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">
                  Eliminação definitiva
                </td>
                <td className="py-3 px-4">Imediato ou até 15 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Visitas, Avaliações Textuais, Fotos e Coordenadas Vinculadas
                </th>
                <td className="py-3 px-4 text-[#B42318] font-semibold">
                  Eliminação definitiva (textos e fotos não permanecem expostos como “desvinculados”)
                </td>
                <td className="py-3 px-4">Imediato ou até 15 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Média Numérica Coletiva do Estabelecimento
                </th>
                <td className="py-3 px-4 text-[#00797A] font-semibold">
                  Apenas recálculo estatístico estritamente anônimo (Art. 12 e 16, IV), ou supressão em baixo volume sem reidentificação
                </td>
                <td className="py-3 px-4">Até 15 dias corridos</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-4 font-semibold text-[#11181C]">
                  Registros de Dever Legal (Art. 16, I) e Backups Cíclicos
                </th>
                <td className="py-3 px-4">
                  Reserva legal isolada apenas quando exigida por lei/ordem judicial; backups criptografados sobrescritos em ciclo automático
                </td>
                <td className="py-3 px-4">Backups: até 30 dias · Dever legal: fim do prazo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-start sm:items-center gap-2 text-xs text-[#596168]">
          <Clock className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <span>
            Caso opte apenas pela “Exclusão Apenas de Dados e Histórico”, seus textos de avaliações, fotos e coordenadas são apagados permanentemente enquanto o cadastro básico da conta permanece ativo. Em qualquer hipótese assistida pela LGPD, o titular também pode peticionar diretamente à ANPD (Art. 18, §1º).
          </span>
        </div>
      </section>
    </LegalLayout>
  );
};
