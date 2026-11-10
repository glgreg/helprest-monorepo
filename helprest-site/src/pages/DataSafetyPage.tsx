import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { DATA_SAFETY_DECLARATIONS } from '../data/dataSafety';
import { ShieldCheck, Lock, CheckCircle2, XCircle, FileCheck2 } from 'lucide-react';
import { Link } from '../router';

export const DataSafetyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Declaração de Segurança dos Dados"
      subtitle="Espelho transparente das declarações preenchidas no formulário de 'Segurança dos Dados' (Data Safety Section) do Google Play Console."
      lastUpdated="Novembro de 2026"
    >
      {/* Play Store Data Safety Badge */}
      <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3.5">
        <FileCheck2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-emerald-950">
          <strong>Padrão Google Play Console:</strong> Em cumprimento às exigências de transparência da Google Play Store, disponibilizamos publicamente a relação integral dos dados coletados pelo aplicativo HelpRest, suas finalidades e os mecanismos técnicos aplicados para salvaguardá-los.
        </div>
      </div>

      {/* Highlights summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Resumo das Práticas de Segurança
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-slate-900 block font-semibold">Dados Criptografados em Trânsito</strong>
              <span>Todas as informações trafegam por conexões seguras HTTPS utilizando criptografia TLS 1.3.</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-slate-900 block font-semibold">Exclusão Facilitada de Dados</strong>
              <span>Usuários podem solicitar a eliminação integral de seus dados pelo app ou pela <Link to="/exclusao-de-dados" className="text-[#009C9D] font-bold hover:underline">página web</Link>.</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-slate-900 block font-semibold">Sem Venda de Dados</strong>
              <span>Não vendemos ou transferimos dados para corretores de dados (data brokers) ou redes de anúncios direcionados.</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-slate-900 block font-semibold">Hashing de Senhas Seguro</strong>
              <span>Senhas protegidas com algoritmo Argon2id com parâmetros recomendados pela OWASP.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Data Safety Table */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">
          Dados Coletados e Finalidades Declaradas no Console
        </h2>

        <div className="space-y-4">
          {DATA_SAFETY_DECLARATIONS.map((item) => (
            <div
              key={item.id}
              className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2.5 shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#009C9D]" />
                  <span>{item.dataType}</span>
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 w-fit">
                  {item.optionalOrRequired}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 pt-1">
                <div>
                  <strong className="text-slate-800 block mb-0.5">Finalidade de Uso:</strong>
                  {item.purpose}
                </div>
                <div>
                  <strong className="text-slate-800 block mb-0.5">Retenção & Exclusão:</strong>
                  {item.retention}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100 text-xs">
                <span className="flex items-center gap-1 text-slate-700">
                  <Lock className="w-3.5 h-3.5 text-[#009C9D]" />
                  <span>{item.securityMechanism}</span>
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <XCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Não compartilhado com terceiros para publicidade</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience & Content Rating Note */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">
          Público-Alvo e Classificação de Conteúdo
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          O HelpRest possui classificação indicativa <strong>Livre para todas as idades</strong> (Classificação IARC / ClassInd), não contendo conteúdo sensível, violência, drogas ou jogos de azar. Não é direcionado prioritariamente a crianças, atendendo integralmente à Política para Famílias do Google Play.
        </p>
      </section>
    </LegalLayout>
  );
};
