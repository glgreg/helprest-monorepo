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
      <div className="border border-[#EAEAEA] rounded-2xl p-5 sm:p-6 bg-[#FAFAFA] space-y-4">
        <h2 className="text-base font-bold text-[#11181C] flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-[#009C9D]" />
          <span>Dados Oficiais do Desenvolvedor</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#333333]">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-[#687076] font-bold uppercase tracking-wider block">
              Desenvolvedor Responsável
            </span>
            <span className="font-bold text-[#11181C]">Gustavo L. Gregorio (HelpRest)</span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] text-[#687076] font-bold uppercase tracking-wider block">
              E-mail de Suporte Técnico
            </span>
            <a href="mailto:suporte@helprest.com" className="text-[#007E7F] font-bold hover:underline">
              suporte@helprest.com
            </a>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] text-[#687076] font-bold uppercase tracking-wider block">
              E-mail de Privacidade / DPO
            </span>
            <a href="mailto:privacidade@helprest.com" className="text-[#007E7F] font-bold hover:underline">
              privacidade@helprest.com
            </a>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] text-[#687076] font-bold uppercase tracking-wider block">
              Pacote Android • Localização
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <code className="bg-white px-2 py-0.5 rounded border border-[#EAEAEA] font-mono text-[#11181C] text-xs">
                com.gustavo_lg.helprest
              </code>
              <span className="text-xs text-[#687076]">• Curitiba, PR — Brasil</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[#EAEAEA] flex items-center gap-2 text-xs text-[#687076]">
          <Clock className="w-4 h-4 text-[#009C9D] flex-shrink-0" />
          <span>Horário de atendimento: segunda a sexta-feira, das 09h às 18h (Brasília).</span>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#11181C]">
          Acessos Rápidos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <Link
            to="/exclusao-de-dados"
            className="p-4 rounded-2xl border border-[#EAEAEA] bg-white hover:border-[#D93829]/40 transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-sm text-[#11181C] group-hover:text-[#D93829]">
                Excluir Conta ou Dados
              </div>
              <div className="text-xs text-[#687076]">
                Gere protocolo oficial e remova seus registros
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#687076] group-hover:text-[#D93829] transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            to="/seguranca-dos-dados"
            className="p-4 rounded-2xl border border-[#EAEAEA] bg-white hover:border-[#009C9D] transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-sm text-[#11181C] group-hover:text-[#007E7F]">
                Segurança dos Dados & Permissões
              </div>
              <div className="text-xs text-[#687076]">
                Lista completa de coleta e controles Android
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#687076] group-hover:text-[#007E7F] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-3 pt-4 border-t border-[#EAEAEA]">
        <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#11181C]">
          <MessageSquare className="w-5 h-5 text-[#009C9D]" />
          <h2>Enviar Mensagem ao Suporte</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#687076]">
          Utilize o formulário para dúvidas técnicas, cadastro de restaurante parceiro ou denúncia de informações de cardápio e conteúdo na plataforma:
        </p>
        <ContactForm />
      </section>
    </LegalLayout>
  );
};
