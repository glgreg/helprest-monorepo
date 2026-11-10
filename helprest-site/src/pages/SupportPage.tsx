import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { ContactForm } from '../components/molecules/ContactForm';
import { Smartphone, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export const SupportPage: React.FC = () => {
  return (
    <LegalLayout
      title="Central de Suporte & Contato"
      subtitle="Canais oficiais de atendimento ao usuário, suporte a estabelecimentos parceiros e dados de contato do desenvolvedor perante o Google Play Console."
      lastUpdated="Novembro de 2026"
    >
      {/* Developer Identification Box (Google Play Requirement) */}
      <div className="border border-slate-200 rounded-3xl p-6 bg-slate-50/80 space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-[#009C9D]" />
          Dados Oficiais do Desenvolvedor (Google Play Store)
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
              Entidade Responsável / Desenvolvedor:
            </span>
            <span className="font-bold text-slate-900 text-sm">
              HelpRest Tecnologia (Gustavo L. Gregorio)
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
              E-mail Oficial de Atendimento:
            </span>
            <a
              href="mailto:suporte@helprest.com"
              className="text-[#009C9D] font-bold hover:underline"
            >
              suporte@helprest.com
            </a>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
              Pacote Android (Package Name):
            </span>
            <code className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-slate-800 text-xs">
              com.gustavo_lg.helprest
            </code>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
              Localização & Jurisdição:
            </span>
            <span className="text-slate-800">
              São Paulo, SP — Brasil
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-500">
          <Clock className="w-4 h-4 text-slate-400" />
          <span>Horário de Atendimento da Equipe: Segunda a Sexta-feira, das 09h às 18h (Horário de Brasília).</span>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">
          Ações Rápidas de Autoatendimento
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <Link
            to="/exclusao-de-dados"
            className="p-4 rounded-2xl border border-slate-200 hover:border-rose-300 hover:bg-rose-50/30 transition-all flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-sm text-slate-900 group-hover:text-rose-700">
                Excluir Conta ou Dados
              </div>
              <div className="text-xs text-slate-500">
                Remova suas credenciais e histórico do banco de dados
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            to="/seguranca-dos-dados"
            className="p-4 rounded-2xl border border-slate-200 hover:border-[#009C9D]/40 hover:bg-[#E6F7F7]/30 transition-all flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-sm text-slate-900 group-hover:text-[#007E7F]">
                Consultar Segurança dos Dados
              </div>
              <div className="text-xs text-slate-500">
                Veja o relatório de privacidade e dados coletados
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#009C9D] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Direct Contact Form */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <MessageSquare className="w-5 h-5 text-[#009C9D]" />
          <h2>Envie uma Mensagem para o Suporte</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          Preencha o formulário abaixo caso precise de ajuda com sua conta, tenha interesse em cadastrar um estabelecimento ou queira reportar uma inconformidade em um cardápio:
        </p>
        <ContactForm />
      </section>
    </LegalLayout>
  );
};
