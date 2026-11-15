import React, { useState } from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
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
        'URL ativa e publicamente acessível de Política de Privacidade declarando tratamento de dados e alérgenos.',
      summary:
        'Nossa política descreve com precisão a finalidade de cada dado coletado (restrições alimentares, coordenadas de localização com precisão aproximada para cálculo de distância, e credenciais de login). Nenhum dado é vendido ou compartilhado com corretores de dados.',
      compliancePoints: [
        'Conformidade integral com a LGPD (Lei nº 13.709/2018) e GDPR',
        'Declaração explícita sobre ausência de rastreamento entre apps e sem cookies intrusivos',
        'Direitos dos titulares: confirmação, acesso, correção, anonimização e portabilidade',
        'Encarregado de Proteção de Dados (DPO) contactável via privacidade@helprest.com',
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
        'URL pública na web permitindo solicitar a exclusão de conta e todos os dados associados sem precisar reinstalar o aplicativo.',
      summary:
        'Em conformidade com a exigência do Google Play Console, disponibilizamos um formulário web público onde qualquer usuário cadastrado pode solicitar a exclusão completa de sua conta, preferências de restrições, fotos e histórico de avaliações.',
      compliancePoints: [
        'Formulário web independente de instalação do app disponível 24/7',
        'Eliminação definitiva de dados pessoais em até 30 dias',
        'Opção de exclusão total ou exclusão parcial (ex.: apenas dados de localização mantendo cadastro)',
        'Protocolo estruturado encaminhado para privacidade@helprest.com',
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
        'Declaração formal de quais dados são coletados, compartilhados e quais protocolos de criptografia protegem o usuário.',
      summary:
        'Todos os fluxos de rede do HelpRest utilizam TLS 1.3 obrigatório. Senhas são protegidas com o padrão Argon2id. Dados de localização são limitados ao cálculo de distância de estabelecimentos e nunca armazenam histórico de trajeto contínuo.',
      compliancePoints: [
        'Criptografia de tráfego TLS 1.3 / HTTPS obrigatória em todas as requisições à API',
        'Armazenamento seguro de senhas com algoritmo Argon2id e salt criptográfico',
        'Localização aproximada utilizada exclusivamente no momento da consulta de restaurantes',
        'Sem bibliotecas de terceiros para leilão de publicidade ou profiling comportamental',
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
        'Transparência de que o app é uma plataforma facilitadora de busca e não substitui aconselhamento médico ou diagnóstico clínico.',
      summary:
        'O HelpRest fornece informações sobre cardápios e cozinhas com restrições alimentares (glúten, lactose, nozes, etc.). Esclarecemos aos usuários que a responsabilidade final pelo preparo e manipulação é do estabelecimento parceiro, encorajando a comunicação direta com o garçom ou chef.',
      compliancePoints: [
        'Isenção de responsabilidade médica e recomendação explícita de acompanhamento clínico',
        'Alerta preventivo sobre contaminação cruzada em ambientes mistos',
        'Diretrizes claras de comunicação segura entre cliente e estabelecimento',
        'Critérios transparentes para exibição de cozinhas certificadas e mistas',
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
        'Disponibilização de credenciais de teste para que revisores do Google Play validem os recursos autenticados.',
      summary:
        'Usuários podem criar contas gratuitas via e-mail ou Google Sign-In para salvar restaurantes e filtrar restrições alimentares personalizadas, com credenciais de revisão documentadas no Play Console.',
      compliancePoints: [
        'Cadastro gratuito por e-mail ou Google Sign-In (OAuth2)',
        'Credenciais de teste para revisores da loja documentadas no Play Console',
        'Autenticação moderna com JWT, refresh tokens rotativos e rate limiting',
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
        'Atendimento direto para dúvidas sobre o app, reporte de cardápios desatualizados, sugestões e solicitações de privacidade.',
      compliancePoints: [
        'E-mail oficial de suporte: suporte@helprest.com',
        'E-mail oficial do DPO/Privacidade: privacidade@helprest.com',
        'Atendimento em dias úteis das 09h às 18h (Brasília)',
        'Formulário web integrado para preparo direto de chamados',
      ],
      docUrl: '/suporte',
      docButtonText: 'Acessar Central de Suporte & Falar Conosco',
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="conformidade-google-play" className="py-20 bg-[#F4F6F5]">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading2>Central de políticas e transparência no Google Play</Heading2>
          <Paragraph className="mt-3">
            Consulte as diretrizes aplicadas ao pacote{' '}
            <code className="font-mono text-sm text-[#181C1B]">com.gustavo_lg.helprest</code> em todas as etapas de coleta, permissões e segurança.
          </Paragraph>
        </div>

        {/* Interactive Tonal Navigation Strip */}
        <div className="tonal-surface bg-white rounded-3xl p-2.5 mb-6 shadow-[0_2px_10px_-4px_rgba(24,28,27,0.06)]">
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
                      ? 'bg-[#007677] text-white font-semibold'
                      : 'text-[#3A413F] hover:text-[#181C1B] hover:bg-[#EDF1EF] font-medium'
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
        <div className="tonal-surface bg-white rounded-3xl p-6 sm:p-10 shadow-[0_2px_12px_-4px_rgba(24,28,27,0.06)] space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-1.5">
              <div className="text-xs font-medium text-[#00696A]">{currentTab.policyId}</div>
              <h3 className="text-2xl font-bold text-[#181C1B]">{currentTab.label}</h3>
              <p className="text-sm text-[#525B58]">
                <strong className="text-[#181C1B]">Requisito:</strong>{' '}
                {currentTab.playStoreRequirement}
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link to={currentTab.docUrl}>
                <Button
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                >
                  Abrir documento
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-semibold text-[#525B58]">Resumo da declaração</h4>
              <p className="text-[#3A413F] leading-relaxed text-sm sm:text-base">
                {currentTab.summary}
              </p>

              <div className="pt-2">
                <Link
                  to={currentTab.docUrl}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00696A] hover:underline"
                >
                  <span>{currentTab.docButtonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F4F6F5] rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-semibold text-[#181C1B]">Práticas aplicadas</h4>
              <ul className="space-y-2.5">
                {currentTab.compliancePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A413F]">
                    <CheckCircle2
                      className="w-4 h-4 text-[#007677] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F4F6F5] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#525B58]">
            <span>Páginas públicas relacionadas:</span>
            <div className="flex flex-wrap items-center gap-3 font-semibold text-[#00696A]">
              <Link to="/privacidade" className="hover:underline">
                Privacidade
              </Link>
              <Link to="/exclusao-de-dados" className="hover:underline">
                Exclusão de dados
              </Link>
              <Link to="/seguranca-dos-dados" className="hover:underline">
                Segurança dos dados
              </Link>
              <Link to="/aviso-de-saude" className="hover:underline">
                Aviso de saúde
              </Link>
              <Link to="/termos" className="hover:underline">
                Termos de uso
              </Link>
              <Link to="/suporte" className="hover:underline">
                Suporte
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
