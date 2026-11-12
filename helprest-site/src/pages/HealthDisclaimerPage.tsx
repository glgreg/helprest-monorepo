import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { AlertTriangle, ShieldCheck, Stethoscope, Utensils, CheckCircle2 } from 'lucide-react';

export const HealthDisclaimerPage: React.FC = () => {
  return (
    <LegalLayout
      title="Aviso Legal de Saúde e Alérgenos"
      subtitle="Declaração de conformidade com a Política de Conteúdo de Saúde do Google Play Console e orientações essenciais para pessoas com alergias severas e doença celíaca."
      lastUpdated="Novembro de 2026"
    >
      {/* Top Crucial Alert */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 flex items-start gap-3.5">
        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-950 space-y-1">
          <strong className="font-bold block text-sm">
            ISENÇÃO DE RESPONSABILIDADE MÉDICA (HEALTH CONTENT DISCLAIMER):
          </strong>
          <span>
            O <strong>HelpRest não é um dispositivo médico</strong>, não fornece aconselhamento médico, não diagnostica doenças, não prescreve dietas terapêuticas e não substitui o acompanhamento regular de médicos alergistas, imunologistas, gastroenterologistas ou nutricionistas.
          </span>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Stethoscope className="w-5 h-5 text-[#009C9D]" />
          1. Finalidade Assistencial e de Estilo de Vida
        </h2>
        <p>
          O HelpRest foi desenvolvido exclusivamente como uma plataforma de <strong>conveniência, busca social e localização</strong>. Seu objetivo primário é facilitar a descoberta de restaurantes que declaram possuir preparos adaptados a restrições alimentares (como veganismo, intolerância a lactose, doença celíaca e sensibilidade a determinados alérgenos).
        </p>
        <p>
          As recomendações exibidas no aplicativo resultam do cruzamento entre as informações cadastradas voluntariamente pelos estabelecimentos gastronômicos e as preferências indicadas pelo próprio usuário em suas flags de perfil.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Utensils className="w-5 h-5 text-amber-600" />
          2. Orientações Vitais para Alergias Graves e Anafilaxia
        </h2>
        <p>
          Pessoas diagnosticadas com alergias IgE-mediadas (com risco de choque anafilático a amendoim, frutos do mar, castanhas, leite, ovos ou soja) devem manter atenção redobrada:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
          <li>
            <strong>Comunicação Direta Obrigatória:</strong> Sempre informe verbalmente ao gerente e garçom do restaurante sobre a gravidade da sua condição antes de efetuar o pedido, certificando-se de que a cozinha aplicará protocolos de isolamento no momento do preparo;
          </li>
          <li>
            <strong>Risco de Contaminação Cruzada:</strong> Mesmo cozinhas bem intencionadas podem sofrer contaminação cruzada por partículas aéreas, óleo de fritura compartilhado ou troca acidental de utensílios;
          </li>
          <li>
            <strong>Medicamentos de Emergência:</strong> Mantenha sempre consigo seus medicamentos de resgate (como autoinjetores de adrenalina/epinefrina e anti-histamínicos) prescritos pelo seu médico.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#009C9D]" />
          3. Selos de Cozinha e Auditoria de Estabelecimentos
        </h2>
        <p>
          No HelpRest, estabelecimentos podem apresentar o selo de <strong>"Cozinha Segura"</strong> ou declarações de áreas isoladas de cocção. Esclarecemos que:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 space-y-1 text-xs">
            <strong className="text-slate-900 block font-semibold">Cozinha 100% Exclusiva</strong>
            <p className="text-slate-600">
              Ambientes que manipulam exclusivamente alimentos livres de determinado alérgeno (ex.: padaria 100% sem glúten). Risco de contaminação cruzada mínimo.
            </p>
          </div>
          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 space-y-1 text-xs">
            <strong className="text-slate-900 block font-semibold">Área Isolada com Protocolo</strong>
            <p className="text-slate-600">
              Cozinhas mistas que possuem bancadas, fornos ou fritadeiras dedicadas e equipe treinada em procedimentos de higienização.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          4. Como Denunciar Irregularidades
        </h2>
        <p>
          Se você frequentou um estabelecimento listado no HelpRest e constatou descumprimento de protocolos sanitários, contaminação evidente ou informações enganosas no cardápio, reporte imediatamente através do formulário na tela do local no app ou pelo e-mail <a href="mailto:suporte@helprest.com" className="text-[#009C9D] font-bold hover:underline">suporte@helprest.com</a>. Realizamos auditorias de moderação e remoção de selos preventivamente.
        </p>
      </section>
    </LegalLayout>
  );
};
