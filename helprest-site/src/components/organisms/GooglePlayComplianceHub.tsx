import React, { useState } from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Link } from '../../router';
import { 
  ShieldCheck, 
  Trash2, 
  Lock, 
  HeartPulse, 
  KeyRound, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink
} from 'lucide-react';

interface ComplianceTab {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
  policyId: string;
  playStoreRequirement: string;
  summary: string;
  compliancePoints: string[];
  docUrl: string;
  docButtonText: string;
}

export const GooglePlayComplianceHub: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('privacy');

  const tabs: ComplianceTab[] = [
    {
      id: 'privacy',
      label: 'Política de Privacidade',
      shortLabel: 'Privacidade',
      icon: <ShieldCheck className="w-4 h-4" />,
      policyId: 'Google Play Developer Policy • Seção 4.8 (Privacidade do Usuário)',
      playStoreRequirement: 'URL ativa e publicamente acessível de Política de Privacidade declarando tratamento de dados e alérgenos.',
      summary: 'Nossa política descreve com precisão a finalidade de cada dado coletado (restrições alimentares, coordenadas de localização com precisão aproximada para cálculo de distância, e credenciais de login). Nenhum dado é vendido ou compartilhado com corretores de dados.',
      compliancePoints: [
        'Conformidade integral com a LGPD (Lei nº 13.709/2018) e GDPR',
        'Declaração explícita sobre ausência de rastreamento entre apps e sem cookies intrusivos',
        'Direitos dos titulares: confirmação, acesso, correção, anonimização e portabilidade',
        'Encarregado de Proteção de Dados (DPO) contactável via privacidade@helprest.com'
      ],
      docUrl: '/privacidade',
      docButtonText: 'Acessar Política de Privacidade Completa'
    },
    {
      id: 'deletion',
      label: 'Exclusão de Conta e Dados',
      shortLabel: 'Exclusão de Conta',
      icon: <Trash2 className="w-4 h-4 text-rose-500" />,
      policyId: 'Google Play Console • Requisito Mandatório de Exclusão de Conta (2024–2026)',
      playStoreRequirement: 'URL pública na web permitindo solicitar a exclusão de conta e todos os dados associados sem precisar reinstalar o aplicativo.',
      summary: 'Em conformidade com a exigência mandatória do Google Play Console, disponibilizamos um formulário web público onde qualquer usuário cadastrado pode solicitar a exclusão completa de sua conta, preferências de restrições, fotos e histórico de avaliações.',
      compliancePoints: [
        'Formulário web independente de instalação do app disponível 24/7',
        'Eliminação definitiva de dados pessoais em até 30 dias',
        'Opção de exclusão total ou exclusão parcial (ex: apenas dados de localização mantendo cadastro)',
        'Notificação de confirmação e recibo criptográfico de exclusão enviado por e-mail'
      ],
      docUrl: '/exclusao-de-dados',
      docButtonText: 'Acessar Central de Exclusão de Conta e Dados'
    },
    {
      id: 'data-safety',
      label: 'Segurança dos Dados (Data Safety)',
      shortLabel: 'Segurança dos Dados',
      icon: <Lock className="w-4 h-4 text-emerald-600" />,
      policyId: 'Google Play Data Safety Section • Criptografia e Práticas de Dados',
      playStoreRequirement: 'Declaração formal de quais dados são coletados, compartilhados e quais protocolos de criptografia protegem o usuário.',
      summary: 'Todos os fluxos de rede do HelpRest utilizam TLS 1.3 obrigatório com criptografia ponta a ponta. Senhas são protegidas com o padrão Argon2id. Dados de localização são estritamente limitados ao cálculo de distância de estabelecimentos e nunca armazenam histórico de trajeto contínuo.',
      compliancePoints: [
        'Criptografia de tráfego TLS 1.3 / HTTPS obrigatória em todas as requisições à API',
        'Armazenamento seguro de senhas com algoritmo Argon2id e salt criptográfico',
        'Localização aproximada utilizada exclusivamente no momento da consulta de restaurantes',
        'Sem bibliotecas de terceiros para leilão de publicidade ou profiling comportamental'
      ],
      docUrl: '/seguranca-dos-dados',
      docButtonText: 'Ver Declaração Completa de Segurança dos Dados'
    },
    {
      id: 'health',
      label: 'Aviso Legal de Saúde & Alérgenos',
      shortLabel: 'Aviso de Saúde',
      icon: <HeartPulse className="w-4 h-4 text-amber-500" />,
      policyId: 'Google Play Health Policy • Declaração Médica e Alergênica Preventiva',
      playStoreRequirement: 'Transparência de que o app é uma plataforma facilitadora de busca e não substitui aconselhamento médico ou diagnóstico clínico.',
      summary: 'O HelpRest fornece informações colaborativas e verificadas sobre cardápios e cozinhas com restrições alimentares (glúten, lactose, nozes, etc.). Esclarecemos aos usuários que a responsabilidade final pelo preparo e manipulação é do estabelecimento parceiro, encorajando a comunicação direta com o garçom ou chef.',
      compliancePoints: [
        'Isenção de responsabilidade médica e recomendação explícita de acompanhamento clínico',
        'Alerta preventivo sobre contaminação cruzada em ambientes não certificados',
        'Diretrizes claras de comunicação segura entre cliente e estabelecimento',
        'Critérios transparentes de auditoria e validação de cozinhas sem glúten/alérgenos'
      ],
      docUrl: '/aviso-de-saude',
      docButtonText: 'Ler Aviso Legal de Saúde & Alérgenos'
    },
    {
      id: 'login-details',
      label: 'Instruções de Acesso & Revisão',
      shortLabel: 'Acesso / Login',
      icon: <KeyRound className="w-4 h-4 text-blue-600" />,
      policyId: 'Google Play Console • Acesso ao App (App Access Guidelines)',
      playStoreRequirement: 'Disponibilização de credenciais de teste para que os revisores do Google Play testem 100% dos recursos protegidos por autenticação.',
      summary: 'Disponibilizamos suporte completo às equipes de revisão do Google Play Console. Usuários podem navegar como visitantes ou criar contas gratuitas via e-mail e Google Sign-In para salvar restaurantes e filtrar restrições alimentares personalizadas.',
      compliancePoints: [
        'Suporte a modo visitante (navegação de estabelecimentos e filtros sem login obrigatório)',
        'Credenciais de teste para revisores do Google Play Store documentadas no Console',
        'Autenticação moderna com JWT, refresh tokens rotativos e rate limiting',
        'Sem barreiras de paywall para conferência das funcionalidades essenciais'
      ],
      docUrl: '/termos',
      docButtonText: 'Consultar Termos de Uso e Acesso'
    },
    {
      id: 'support',
      label: 'Central de Suporte & SAC',
      shortLabel: 'Suporte & Contato',
      icon: <HelpCircle className="w-4 h-4 text-[#009C9D]" />,
      policyId: 'Google Play Console • Detalhes de Contato da Ficha da Loja',
      playStoreRequirement: 'E-mail de suporte técnico ativo, tempo hábil de resposta e canais de atendimento aos usuários da loja.',
      summary: 'Equipe dedicada de suporte técnico e relacionamento com estabelecimentos. Atendimento para dúvidas sobre o app, reporte de cardápios desatualizados, sugestões e solicitações de privacidade.',
      compliancePoints: [
        'E-mail oficial de suporte: suporte@helprest.com',
        'E-mail oficial do DPO/Privacidade: privacidade@helprest.com',
        'Tempo médio de resposta (SLA): até 24 horas úteis',
        'Formulário web integrado para envio direto de chamados'
      ],
      docUrl: '/suporte',
      docButtonText: 'Acessar Central de Suporte & Falar Conosco'
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="conformidade-google-play" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionTag>
            <ShieldCheck className="w-3.5 h-3.5 text-[#009C9D]" />
            Conformidade & Diretrizes Google Play Store
          </SectionTag>
          <Heading2>
            Central de Conformidade & Políticas do Google Play Console
          </Heading2>
          <Paragraph className="mt-3">
            Atendemos 100% dos requisitos mandatórios do Google Play Console (Novembro de 2026) para aplicativos de alimentação e saúde alimentar. Navegue pelas abas abaixo para auditar cada política:
          </Paragraph>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-3 sm:p-4 mb-8 shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#009C9D] text-white shadow-md shadow-[#009C9D]/20 font-bold scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.shortLabel}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white ml-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Policy Details Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden animate-in fade-in duration-200">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Em Conformidade com Google Play Console (Nov/2026)
                </span>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  {currentTab.policyId}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                {currentTab.label}
              </h3>
              <p className="text-sm font-medium text-slate-500 mt-1">
                <strong>Requisito da Loja:</strong> {currentTab.playStoreRequirement}
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link to={currentTab.docUrl}>
                <Button
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Abrir Documento
                </Button>
              </Link>
            </div>
          </div>

          {/* Body Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Resumo da Declaração
              </h4>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {currentTab.summary}
              </p>
              
              <div className="pt-2">
                <Link
                  to={currentTab.docUrl}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#009C9D] hover:underline"
                >
                  <span>{currentTab.docButtonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Garantias Verificadas:
              </h4>
              <ul className="space-y-2.5">
                {currentTab.compliancePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Direct Links to All Other Compliance Pages */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span>Todas as páginas de conformidade Google Play:</span>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/privacidade" className="text-[#009C9D] hover:underline font-medium">
                Política de Privacidade
              </Link>
              <span>•</span>
              <Link to="/exclusao-de-dados" className="text-[#009C9D] hover:underline font-medium">
                Exclusão de Conta e Dados
              </Link>
              <span>•</span>
              <Link to="/seguranca-dos-dados" className="text-[#009C9D] hover:underline font-medium">
                Segurança dos Dados
              </Link>
              <span>•</span>
              <Link to="/aviso-de-saude" className="text-[#009C9D] hover:underline font-medium">
                Aviso de Saúde
              </Link>
              <span>•</span>
              <Link to="/termos" className="text-[#009C9D] hover:underline font-medium">
                Termos de Uso
              </Link>
              <span>•</span>
              <Link to="/suporte" className="text-[#009C9D] hover:underline font-medium">
                Suporte
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
