# HelpRest Site Web

Portal institucional e landing page oficial do **HelpRest** — plataforma mobile-first inteligente para busca, descoberta e recomendação gastronômica orientada a restrições alimentares (doença celíaca, intolerância a lactose, dietas veganas/vegetarianas e alergias severas).

Desenvolvido em **Vite + React 19 + TypeScript + Tailwind CSS** seguindo rigorosos padrões de **Design Atômico**, Clean Code e total conformidade com as diretrizes do **Google Play Console** e da **Lei Geral de Proteção de Dados (LGPD)**.

---

## 📱 Visão de Produto

O site apresenta a proposta de valor do aplicativo para consumidores e gestores de restaurantes com uma visão 100% focada em produto:
- **Redirecionamento para Download**: Botão interativo para download na **Google Play Store** (com fluxo de Acesso Antecipado e especificações do pacote `com.gustavo_lg.helprest`) e indicador "Em breve" para **Apple App Store**.
- **Simulador Interativo de Flags**: Demonstração em tempo real de como o algoritmo calcula o `flagMatchRatio`, priorizando locais com **100% de compatibilidade** e excluindo opções inseguras.
- **Geofencing de 100 Metros**: Destaque para a tecnologia anti-fraude que exige validação de presença física via GPS para publicação de fotos e avaliações comunitárias.
- **Portal de Empresas & Restaurantes**: Seção dedicada para cadastramento de cozinhas, selos de isolamento contra contaminação cruzada e gestão de cardápios com alérgenos.

---

## 🛡️ Páginas e Conformidade com o Google Play Console

O site disponibiliza todas as páginas públicas obrigatórias para publicação e homologação de aplicativos na Google Play Store:

| Rota | Documento | Finalidade & Exigência |
| --- | --- | --- |
| `/` | **Página Inicial** | Apresentação do produto, simulador de flags, prova social e chamadas para download |
| `/privacidade` | **Política de Privacidade** | Declaração de tratamento de dados pessoais, permissões (`ACCESS_FINE_LOCATION`), criptografia e direitos LGPD |
| `/termos` | **Termos de Uso** | Condições gerais, regras comunitárias de reviews, responsabilidade sanitária e foro |
| `/exclusao-de-dados` | **Exclusão de Conta e Dados** | **Exigência obrigatória Google Play**: Instruções no app e formulário web para solicitar deleção integral |
| `/seguranca-dos-dados` | **Segurança dos Dados (Data Safety)** | Espelho transparente das declarações do Google Play Console (criptografia TLS 1.3, Argon2id, sem venda de dados) |
| `/aviso-de-saude` | **Aviso Legal de Saúde & Alérgenos** | Declaração de conformidade com a política de apps de saúde: aviso de ferramenta não-médica e orientações de anafilaxia |
| `/suporte` | **Central de Suporte & Desenvolvedor** | Dados cadastrais do desenvolvedor (`suporte@helprest.com`, pacote Android, horário de atendimento e formulário) |

---

## 🏛️ Arquitetura de Componentes (Design Atômico)

A interface é construída em camadas atômicas estritas, sem elementos HTML crus no ponto de entrada (`main.tsx`):

```
src/
├── assets/                  # Logos e recursos visuais locais
├── components/
│   ├── atoms/              # Button, Badge, BrandLogo, Container, Typography, StarRating, StoreBadge, Input
│   ├── molecules/          # FlagChip, EstablishmentCard, PhoneMockup, Accordion, Breadcrumb, DeleteAccountForm, ContactForm, DownloadModal
│   ├── organisms/          # Navbar, HeroSection, InteractiveSimulator, HowItWorksSection, AppFeaturesSection, ForEstablishmentsSection, ReviewsSection, DataSafetyHighlightSection, FaqSection, DownloadCtaSection, Footer
│   └── templates/          # MainLayout, LegalLayout
├── context/                # ModalContext, useModal (controle global de modais e downloads)
├── data/                   # Mock e dados reais de flags, restaurantes, avaliações, FAQs e Data Safety
├── pages/                  # HomePage, PrivacyPolicyPage, TermsOfServicePage, DataDeletionPage, DataSafetyPage, HealthDisclaimerPage, SupportPage
├── router/                 # RouterProvider, Link, useRouter (roteamento leve e fluido com histórico e scroll)
├── types/                  # Definições TypeScript estritas de entidades e formulários
├── App.tsx                 # Composição de rotas
├── index.css               # Tema Tailwind CSS e tokens visuais
└── main.tsx                # Montagem pura da aplicação React via createRoot
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 20 (ou 24 LTS)
- npm >= 10

### Instalação
```bash
cd helprest-site
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Validação de Qualidade
```bash
# Verificação de Tipagem Estrita
npm run build # (tsc -b && vite build)

# Linter ESLint 9 Flat Config
npm run lint
```
