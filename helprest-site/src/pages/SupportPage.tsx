import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { ContactForm } from '../components/molecules/ContactForm';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export const SupportPage: React.FC = () => {
  return (
    <LegalLayout
      title="Central de Suporte & Contato"
      subtitle="Atendimento direto aos usuários do HelpRest, suporte a restaurantes parceiros, denúncias de conteúdo e dados oficiais do desenvolvedor para o Google Play."
      lastUpdated="Novembro de 2026"
    >
      {/* Official Play Console Developer Contact Card */}
      <div className="tonal-surface rounded-2xl p-5 sm:p-6 bg-[#F7F7F8] space-y-4">
        <h2 className="font-display text-base sm:text-lg font-bold text-[#11181C]">
          Dados Oficiais do Desenvolvedor
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#3F454A]">
          <div className="space-y-1">
            <span className="text-xs font-medium text-[#596168] block">
              Desenvolvedor responsável
            </span>
            <span className="font-bold text-[#11181C]">Gustavo L. Gregorio (HelpRest)</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-[#596168] block">
              E-mail de suporte técnico
            </span>
            <a href="mailto:suporte@helprest.net" className="text-[#00797A] font-semibold hover:underline">
              suporte@helprest.net
            </a>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-[#596168] block">
              E-mail de privacidade / DPO
            </span>
            <a href="mailto:privacidade@helprest.net" className="text-[#00797A] font-semibold hover:underline">
              privacidade@helprest.net
            </a>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-[#596168] block">
              Pacote Android e localização
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <code className="font-mono font-semibold text-[#11181C] text-xs">
                com.helprest
              </code>
              <span className="text-xs text-[#596168]">• Curitiba, PR — Brasil</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center gap-2 text-xs text-[#596168]">
          <Clock className="w-4 h-4 text-[#009C9D] flex-shrink-0" aria-hidden="true" />
          <span>Horário de atendimento: segunda a sexta-feira, das 09h às 18h (Brasília).</span>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="space-y-3">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Acessos Rápidos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <Link
            to="/exclusao-de-dados"
            className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F7F7F8] hover:bg-[#FDF1EF] transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-sm text-[#11181C] group-hover:text-[#B42318]">
                Excluir Conta ou Dados
              </div>
              <div className="text-xs text-[#596168]">
                Gere protocolo oficial e remova seus registros
              </div>
            </div>
            <ArrowRight
              className="w-4 h-4 text-[#596168] group-hover:text-[#B42318] transition-transform group-hover:translate-x-0.5 flex-shrink-0"
              aria-hidden="true"
            />
          </Link>

          <Link
            to="/seguranca-dos-dados"
            className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F7F7F8] hover:bg-[#EFFBFB] transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-sm text-[#11181C] group-hover:text-[#00797A]">
                Segurança dos Dados &amp; Permissões
              </div>
              <div className="text-xs text-[#596168]">
                Lista completa de coleta e controles Android
              </div>
            </div>
            <ArrowRight
              className="w-4 h-4 text-[#596168] group-hover:text-[#00797A] transition-transform group-hover:translate-x-0.5 flex-shrink-0"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-3 pt-2">
        <h2 className="font-display text-lg sm:text-xl font-bold text-[#11181C]">
          Enviar Mensagem ao Suporte
        </h2>
        <p className="text-xs sm:text-sm text-[#596168]">
          Utilize o formulário para dúvidas técnicas, cadastro de restaurante parceiro ou denúncia de informações de cardápio, conduta abusiva ou segurança infantil na plataforma:
        </p>
        <ContactForm />
      </section>
    </LegalLayout>
  );
};
