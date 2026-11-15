import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { AlertTriangle, ShieldCheck, Stethoscope, Utensils, CheckCircle2 } from 'lucide-react';

export const HealthDisclaimerPage: React.FC = () => {
  return (
    <LegalLayout
      title="Aviso Legal de Saúde e Alérgenos"
      subtitle="Orientações sobre a natureza informativa do HelpRest, prevenção de contaminação cruzada e cuidados indispensáveis para pessoas com doença celíaca ou alergias graves."
      lastUpdated="Novembro de 2026"
    >
      <div className="tonal-surface p-4 sm:p-5 rounded-2xl bg-[#FDF1EF] border-s-4 border-[#B42318] flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#B42318] flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-[#7A271A] space-y-1 leading-relaxed">
          <strong className="font-bold block">
            Isenção de Responsabilidade Médica (Google Play Health Content Policy):
          </strong>
          <span>
            O <strong>HelpRest não é um dispositivo médico</strong>, não substitui diagnóstico clínico, não prescreve planos alimentares terapêuticos e não substitui orientação de médicos alergistas, imunologistas, gastroenterologistas ou nutricionistas.
          </span>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <Stethoscope className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>1. Propósito Informativo de Busca e Cardápios</span>
        </h2>
        <p>
          O aplicativo compara as flags configuradas por você no perfil com as tags declaradas pelos estabelecimentos em seus cadastros e pratos, separando o cardápio nas visões <em>“Para você”</em> e <em>“Outros Itens”</em> para agilizar a leitura visual.
        </p>
        <p>
          Como insumos, receitas e fornecedores de restaurantes podem mudar ao longo do dia sem aviso prévio, o aplicativo deve ser usado como guia auxiliar — nunca como certificação laboratorial definitiva no ato do consumo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <Utensils className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>2. Cuidados Essenciais em Caso de Anafilaxia e Celíacos</span>
        </h2>
        <ul className="list-disc ps-6 space-y-2 text-xs sm:text-sm text-[#3A413F]">
          <li>
            <strong className="text-[#181C1B]">Confirmação presencial antes de pedir:</strong> informe ao atendente e à cozinha sua condição alimentar específica para verificar procedimentos atuais de higienização, chapas e utensílios no momento do preparo;
          </li>
          <li>
            <strong className="text-[#181C1B]">Contaminação cruzada:</strong> em cozinhas mistas, óleos de imersão, partículas suspensas de farinha ou superfícies compartilhadas podem conter traços de alérgenos;
          </li>
          <li>
            <strong className="text-[#181C1B]">Medicação de resgate:</strong> siga integralmente o plano médico recomendado e mantenha sempre acessíveis seus medicamentos de emergência prescritos.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>3. Sobre Cozinhas Exclusivas e Cozinhas Mistas</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="tonal-surface rounded-2xl p-4 sm:p-5 bg-[#F4F6F5] space-y-1.5 text-xs sm:text-sm">
            <strong className="text-[#181C1B] block font-bold">Produção Dedicada</strong>
            <p className="text-[#525B58] leading-relaxed">
              Estabelecimentos cujo ambiente manipula apenas ingredientes isentos de determinado componente (ex.: confeitaria totalmente sem glúten).
            </p>
          </div>
          <div className="tonal-surface rounded-2xl p-4 sm:p-5 bg-[#F4F6F5] space-y-1.5 text-xs sm:text-sm">
            <strong className="text-[#181C1B] block font-bold">Área Separada em Cozinha Mista</strong>
            <p className="text-[#525B58] leading-relaxed">
              Locais que oferecem pratos adaptados (<em>“Para você”</em>) ao lado de itens tradicionais (<em>“Outros Itens”</em>), exigindo dupla checagem em casos graves.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#181C1B] flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#007677]" aria-hidden="true" />
          <span>4. Reporte de Informações Incorretas</span>
        </h2>
        <p>
          Caso identifique divergência entre o cardápio informado no HelpRest e o que o restaurante serve no local, reporte imediatamente para{' '}
          <a href="mailto:suporte@helprest.com" className="text-[#00696A] font-semibold hover:underline">
            suporte@helprest.com
          </a>{' '}
          para revisão e ajuste cadastral.
        </p>
      </section>
    </LegalLayout>
  );
};
