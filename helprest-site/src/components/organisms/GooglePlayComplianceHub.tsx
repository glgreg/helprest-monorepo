'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
import { getButtonClasses } from '../atoms/Button';
import {
  ShieldCheck,
  Trash2,
  Lock,
  HeartPulse,
  KeyRound,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
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
      icon: <ShieldCheck className="w-4 h-4" aria-hidden="true" />,
      policyId: 'Google Play Developer Policy · Seção 4.8 (Privacidade do Usuário)',
      playStoreRequirement:
        'URL ativa e publicamente acessível de Política de Privacidade declarando tratamento de dados pessoais e restrições alimentares.',
      summary:
        'Nossa política descreve bases legais, finalidade de cada dado coletado (flags alimentares tratadas como dados sensíveis com consentimento específico Art. 11, I, coordenadas para proximidade/geofencing de 100m e autenticação via Google Sign-In OAuth2). Nenhum dado é vendido ou compartilhado com corretores de dados.',
      compliancePoints: [
        'Conformidade com a LGPD (Lei nº 13.709/2018), incluindo Art. 11 (dados sensíveis) e Art. 14 (adolescentes)',
        'Sem rastreamento entre aplicativos nem redes externas de publicidade comportamental',
        'Direitos dos titulares com atendimento em até 15 dias corridos e petição direta à ANPD',
        'Encarregado pelo Tratamento de Dados (DPO) contactável via privacidade@helprest.net',
      ],
      docUrl: '/privacidade',
      docButtonText: 'Acessar Política de Privacidade Completa',
    },
    {
      id: 'deletion',
      label: 'Exclusão de Conta e Dados',
      shortLabel: 'Exclusão de Conta',
      icon: <Trash2 className="w-4 h-4" aria-hidden="true" />,
      policyId: 'Google Play Console · Exclusão de Conta (2024–2026)',
      playStoreRequirement:
        'URL pública na web permitindo solicitar a exclusão de conta e dados associados sem precisar reinstalar o aplicativo.',
      summary:
        'Disponibilizamos página web estática oficial onde qualquer usuário pode solicitar a eliminação definitiva da conta Google OAuth vinculada, flags alimentares, favoritos, fotos de refeições, comentários de avaliações e coordenadas de visitas.',
      compliancePoints: [
        'Página web estática acessível diretamente no navegador sem depender do app instalado',
        'Atendimento imediato ou eliminação definitiva em até 15 dias corridos (LGPD Art. 18, §5º)',
        'Eliminação integral de avaliações textuais, fotos e histórico vinculado (sem exposição em perfil desvinculado)',
        'Protocolo estruturado encaminhado para privacidade@helprest.net',
      ],
      docUrl: '/exclusao-de-dados',
      docButtonText: 'Acessar Central de Exclusão de Conta e Dados',
    },
    {
      id: 'data-safety',
      label: 'Segurança dos Dados (Data Safety)',
      shortLabel: 'Segurança dos Dados',
      icon: <Lock className="w-4 h-4" aria-hidden="true" />,
      policyId: 'Google Play Data Safety Section · Criptografia e Práticas de Dados',
      playStoreRequirement:
        'Declaração formal de quais dados são coletados, compartilhados e quais mecanismos de segurança protegem o usuário.',
      summary:
        'Todos os fluxos de rede do HelpRest utilizam HTTPS criptografado (TLS 1.2/1.3). A autenticação ocorre exclusivamente via Google Sign-In OAuth2 verificado criptograficamente contra JWKS do Google e tokens JWT rotativos.',
      compliancePoints: [
        'Transporte criptografado via HTTPS (TLS 1.2/1.3) em todas as requisições à API',
        'Autenticação Google OAuth2 (JWKS via jose) com tokens JWT de acesso e refresh',
        'Localização utilizada para distância de estabelecimentos e validação presencial de 100m sem histórico de rotas contínuo',
        'Sem SDKs externos de redes de publicidade ou profiling comportamental entre apps',
      ],
      docUrl: '/seguranca-dos-dados',
      docButtonText: 'Ver Declaração Completa de Segurança dos Dados',
    },
    {
      id: 'health',
      label: 'Aviso Legal de Saúde & Alérgenos',
      shortLabel: 'Aviso de Saúde',
      icon: <HeartPulse className="w-4 h-4" aria-hidden="true" />,
      policyId: 'Google Play Health Policy · Declaração Médica e Alergênica Preventiva',
      playStoreRequirement:
        'Transparência de que o app é uma plataforma informativa de busca e não substitui aconselhamento médico ou diagnóstico clínico.',
      summary:
        'O HelpRest fornece informações sobre cardápios e cozinhas com restrições alimentares (glúten, lactose, nozes, etc.). Esclarecemos aos usuários que a responsabilidade pelo preparo e manipulação é do estabelecimento, recomendando confirmação presencial.',
      compliancePoints: [
        'Isenção de responsabilidade médica e recomendação explícita de acompanhamento clínico',
        'Alerta preventivo sobre contaminação cruzada em ambientes mistos',
        'Diretrizes claras de comunicação direta entre cliente e estabelecimento antes do pedido',
        'Critérios transparentes para exibição das abas "Para você" e "Outros Itens"',
      ],
      docUrl: '/aviso-de-saude',
      docButtonText: 'Ler Aviso Legal de Saúde & Alérgenos',
    },
    {
      id: 'login-details',
      label: 'Instruções de Acesso & Revisão',
      shortLabel: 'Acesso / Login',
      icon: <KeyRound className="w-4 h-4" aria-hidden="true" />,
      policyId: 'Google Play Console · Acesso ao App',
      playStoreRequirement:
        'Documentação do fluxo de login e credenciais de revisão para que revisores do Google Play validem os recursos autenticados.',
      summary:
        'Usuários acessam o HelpRest gratuitamente via Google Sign-In (OAuth2) para configurar suas flags de restrições alimentares, favoritar locais e validar visitas, com fluxo documentado aos revisores da loja no Play Console.',
      compliancePoints: [
        'Acesso gratuito por autenticação Google Sign-In (OAuth2)',
        'Orientações de teste para revisores da loja documentadas no Play Console',
        'Sessões autenticadas por tokens JWT (access e refresh) e rate limiting distribuído',
        'Sem cobranças para conferência das funcionalidades essenciais',
      ],
      docUrl: '/termos',
      docButtonText: 'Consultar Termos de Uso e Acesso',
    },
    {
      id: 'support',
      label: 'Central de Suporte & SAC',
      shortLabel: 'Suporte & Contato',
      icon: <HelpCircle className="w-4 h-4" aria-hidden="true" />,
      policyId: 'Google Play Console · Detalhes de Contato da Ficha da Loja',
      playStoreRequirement:
        'E-mail de suporte técnico ativo, tempo hábil de resposta e canais de atendimento aos usuários da loja.',
      summary:
        'Atendimento direto para dúvidas sobre o app, reporte de cardápios desatualizados, denúncias de conteúdo ou segurança infantil e solicitações de privacidade.',
      compliancePoints: [
        'E-mail oficial de suporte e segurança infantil: suporte@helprest.net',
        'E-mail oficial do DPO/Privacidade: privacidade@helprest.net',
        'Atendimento em dias úteis das 09h às 18h (Brasília)',
        'Formulário web integrado para preparo direto de chamados',
      ],
      docUrl: '/suporte',
      docButtonText: 'Acessar Central de Suporte & Falar Conosco',
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="conformidade-google-play" className="py-20 bg-[#F7F7F8]">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading2>Central de políticas e transparência no Google Play</Heading2>
          <Paragraph className="mt-3">
            Consulte as diretrizes aplicadas ao pacote{' '}
            <code className="font-mono text-sm text-[#11181C]">com.helprest</code> em todas as etapas de coleta, permissões e segurança.
          </Paragraph>
        </div>

        {/* Interactive Tonal Navigation Strip */}
        <div className="tonal-surface bg-white rounded-3xl p-2.5 mb-6 shadow-[0_2px_10px_-4px_rgba(17,24,28,0.06)]">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-2xl text-xs sm:text-sm whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#009C9D] text-white font-semibold'
                      : 'text-[#3F454A] hover:text-[#11181C] hover:bg-[#F1F2F4] font-medium'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Policy Details Card */}
        <div className="tonal-surface bg-white rounded-3xl p-6 sm:p-10 shadow-[0_2px_12px_-4px_rgba(17,24,28,0.06)] space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-1.5">
              <div className="text-xs font-medium text-[#00797A]">{currentTab.policyId}</div>
              <h3 className="text-2xl font-bold text-[#11181C]">{currentTab.label}</h3>
              <p className="text-sm text-[#596168]">
                <strong className="text-[#11181C]">Requisito:</strong>{' '}
                {currentTab.playStoreRequirement}
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href={currentTab.docUrl}
                className={getButtonClasses({ variant: 'primary', size: 'md' })}
              >
                <span>Abrir documento</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-semibold text-[#596168]">Resumo da declaração</h4>
              <p className="text-[#3F454A] leading-relaxed text-sm sm:text-base">
                {currentTab.summary}
              </p>

              <div className="pt-2">
                <Link
                  href={currentTab.docUrl}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00797A] hover:underline"
                >
                  <span>{currentTab.docButtonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F7F7F8] rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-semibold text-[#11181C]">Práticas aplicadas</h4>
              <ul className="space-y-2.5">
                {currentTab.compliancePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F454A]">
                    <CheckCircle2
                      className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F7F7F8] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#596168]">
            <span>Páginas públicas relacionadas:</span>
            <div className="flex flex-wrap items-center gap-3 font-semibold text-[#00797A]">
              <Link href="/privacidade" className="hover:underline">
                Privacidade
              </Link>
              <Link href="/exclusao-de-dados" className="hover:underline">
                Exclusão de dados
              </Link>
              <Link href="/seguranca-dos-dados" className="hover:underline">
                Segurança dos dados
              </Link>
              <Link href="/aviso-de-saude" className="hover:underline">
                Aviso de saúde
              </Link>
              <Link href="/termos" className="hover:underline">
                Termos de uso
              </Link>
              <Link href="/suporte" className="hover:underline">
                Suporte
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
