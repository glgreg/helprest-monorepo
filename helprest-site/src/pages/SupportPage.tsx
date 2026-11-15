import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { ContactForm } from '../components/molecules/ContactForm';
import { Smartphone, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export const SupportPage: React.FC = () => {
  return (
    <LegalLayout
      title="Central de Suporte & Contato"
      subtitle="Atendimento direto aos usuários do HelpRest, suporte a restaurantes parceiros, denúncias de conteúdo e dados oficiais do desenvolvedor para o Google Play."
      lastUpdated="Novembro de 2026"
    >
      {/* Official Play Console Developer Contact Card */}
      <div className="tonal-surface rounded-2xl p-5 sm:p-6 bg-[#F4F6F5] space-y-4">
        <h2 className="text-base font-bold text-[#181C1B] flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>Dados Oficiais do Desenvolvedor</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#3A413F]">
          <div className="space-y-1">
            <span className="text-xs font-medium text-[#525B58] block">
              Desenvolvedor responsável
            </span>
            <span className="font-bold text-[#181C1B]">Gustavo L. Gregorio (HelpRest)</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-[#525B58] block">
              E-mail de suporte técnico
            </span>
            <a href="mailto:suporte@helprest.com" className="text-[#00696A] font-semibold hover:underline">
              suporte@helprest.com
            </a>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-[#525B58] block">
              E-mail de privacidade / DPO
            </span>
            <a href="mailto:privacidade@helprest.com" className="text-[#00696A] font-semibold hover:underline">
              privacidade@helprest.com
            </a>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-[#525B58] block">
              Pacote Android e localização
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <code className="bg-white px-2 py-0.5 rounded-md font-mono text-[#181C1B] text-xs">
                com.gustavo_lg.helprest
              </code>
              <span className="text-xs text-[#525B58]">• Curitiba, PR — Brasil</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center gap-2 text-xs text-[#525B58]">
          <Clock className="w-4 h-4 text-[#007677] flex-shrink-0" aria-hidden="true" />
          <span>Horário de atendimento: segunda a sexta-feira, das 09h às 18h (Brasília).</span>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B]">
          Acessos Rápidos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <Link
            to="/exclusao-de-dados"
            className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F4F6F5] hover:bg-[#FDF1EF] transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-sm text-[#181C1B] group-hover:text-[#B42318]">
                Excluir Conta ou Dados
              </div>
              <div className="text-xs text-[#525B58]">
                Gere protocolo oficial e remova seus registros
              </div>
            </div>
            <ArrowRight
              className="w-4 h-4 text-[#525B58] group-hover:text-[#B42318] transition-transform group-hover:translate-x-0.5 flex-shrink-0"
              aria-hidden="true"
            />
          </Link>

          <Link
            to="/seguranca-dos-dados"
            className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#F4F6F5] hover:bg-[#E9F3F2] transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-sm text-[#181C1B] group-hover:text-[#00696A]">
                Segurança dos Dados & Permissões
              </div>
              <div className="text-xs text-[#525B58]">
                Lista completa de coleta e controles Android
              </div>
            </div>
            <ArrowRight
              className="w-4 h-4 text-[#525B58] group-hover:text-[#00696A] transition-transform group-hover:translate-x-0.5 flex-shrink-0"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#181C1B]">
          <MessageSquare className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <h2>Enviar Mensagem ao Suporte</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#525B58]">
          Utilize o formulário para dúvidas técnicas, cadastro de restaurante parceiro ou denúncia de informações de cardápio e conteúdo na plataforma:
        </p>
        <ContactForm />
      </section>
    </LegalLayout>
  );
};
