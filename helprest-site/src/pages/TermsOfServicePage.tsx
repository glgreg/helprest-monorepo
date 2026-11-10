import React from 'react';
import { LegalLayout } from '../components/templates/LegalLayout';
import { FileText, AlertTriangle, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <LegalLayout
      title="Termos de Uso"
      subtitle="Regras, condições gerais e compromissos que regem o uso do aplicativo mobile HelpRest e de seus serviços web associados."
      lastUpdated="Novembro de 2026"
    >
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
        <Scale className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-slate-700">
          Ao baixar, instalar ou utilizar o aplicativo <strong>HelpRest</strong> ou acessar qualquer um de nossos serviços digitais, você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso e com a nossa Política de Privacidade.
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#009C9D]" />
          1. O Que É o HelpRest?
        </h2>
        <p>
          O HelpRest é uma plataforma tecnológica mobile-first de busca, descoberta e recomendação gastronômica, concebida para aproximar consumidores com necessidades e restrições alimentares (como celíacos, intolerantes a lactose, veganos e alérgicos) de estabelecimentos comerciais (restaurantes, cafés, bistrôs e padarias) capazes de atendê-los de forma adequada.
        </p>
        <p>
          O HelpRest <strong>não comercializa alimentos</strong>, não atua como serviço de entrega e não produz refeições. A responsabilidade civil, sanitária e operacional pelo preparo, acondicionamento e entrega de qualquer alimento recai exclusivamente sobre os respectivos estabelecimentos cadastrados.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          2. Aviso Essencial sobre Saúde e Alergias Graves
        </h2>
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs sm:text-sm text-amber-950 space-y-2">
          <p>
            <strong>AVISO MÉDICO IMPORTANTE:</strong> O HelpRest é uma ferramenta auxiliar de busca e estilo de vida. As informações de restrições alimentares e cardápios são declaradas pelos próprios estabelecimentos e enriquecidas por avaliações da comunidade.
          </p>
          <p>
            Usuários com <strong>anafilaxia severa</strong>, alergias com risco à vida ou doença celíaca de alta reatividade <strong>devem sempre comunicar diretamente aos atendentes e cozinheiros do restaurante sobre suas restrições</strong> antes do consumo, a fim de certificar-se sobre os procedimentos de manuseio e riscos de contaminação cruzada no momento do preparo.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#009C9D]" />
          3. Cadastro de Conta e Autenticação
        </h2>
        <p>
          Para usufruir de recursos personalizados, salvar favoritos, configurar flags alimentares ou gerenciar restaurantes, o usuário deve criar uma conta através de credenciais próprias ou mediante autenticação OAuth2 com o Google.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-600">
          <li>O usuário é o único responsável por manter a confidencialidade de sua senha e por todas as atividades efetuadas sob sua conta;</li>
          <li>É expressamente proibido criar contas falsas, utilizar identidade de terceiros ou fraudar sistemas de credenciais;</li>
          <li>Contas de estabelecimentos devem representar empresas regularmente constituídas, sendo de responsabilidade do gestor a veracidade dos dados cadastrais (CNPJ, endereço físico e flags de cozinha).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          4. Regras do Feed Social e Geofencing de 100 Metros
        </h2>
        <p>
          Para assegurar a idoneidade das avaliações e proteger a comunidade celíaca e alérgica contra fraudes comerciais:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
          <li><strong>Validação por Proximidade Física:</strong> O envio de fotos e avaliações oficiais vinculadas a um estabelecimento requer que o GPS do usuário comprove presença física a até <strong>100 metros</strong> de raio do local no momento da captura;</li>
          <li><strong>Proibição de Conteúdo Ilícito:</strong> É proibida a postagem de fotos que contenham nudez, violência, desrespeito ou produtos alheios ao estabelecimento visitado;</li>
          <li><strong>Moderação:</strong> O HelpRest reserva-se o direito de remover qualquer avaliação ou suspender contas que violem padrões comunitários ou tentem burlar o mecanismo de geolocalização.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">
          5. Propriedade Intelectual
        </h2>
        <p>
          A marca "HelpRest", a interface visual, logotipos, algoritmos de cálculo de flags, código-fonte e bancos de dados são de propriedade exclusiva da HelpRest Tecnologia e de seus fundadores, protegidos pelas leis de propriedade intelectual e direitos autorais.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">
          6. Legislação Aplicável e Foro
        </h2>
        <p>
          Estes Termos de Uso são regidos e interpretados em conformidade com a legislação da República Federativa do Brasil, em especial o Marco Civil da Internet (Lei nº 12.965/2014) e o Código de Defesa do Consumidor (Lei nº 8.078/1990). Fica eleito o Foro da Comarca de São Paulo, Estado de São Paulo, para dirimir eventuais litígios.
        </p>
      </section>
    </LegalLayout>
  );
};
