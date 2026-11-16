# HelpRest Site Web

Portal institucional e hub oficial de conformidade do **HelpRest** — plataforma mobile-first inteligente para busca, descoberta e recomendação gastronômica orientada a restrições alimentares (doença celíaca, intolerância a lactose, dietas veganas/vegetarianas e alergias severas).

Construído em **Next.js 16 (App Router com Static Site Generation via `output: 'export'`) + React 19 + TypeScript + Tailwind CSS v4**, gerando arquivos `.html` estáticos pré-renderizados (**HTTP 200 OK** direto por rota) em total conformidade com o **Google Play Console** e a **LGPD (Lei nº 13.709/2018)**.

---

## 📱 Visão de Produto

O portal apresenta a proposta de valor do aplicativo para consumidores e gestores de restaurantes:
- **Redirecionamento para Download**: Diálogo modal nativo para download na **Google Play Store** (com especificações do pacote `com.helprest`) e indicador "Em breve" para **Apple App Store**.
- **Simulador Interativo de Flags**: Demonstração em tempo real do ranqueamento `flagMatchRatio` e regra de exclusão *zero-match*.
- **Geofencing de 100 Metros**: Destaque para a verificação de presença física via GPS ao enviar fotos em visitas avaliadas.
- **Portal de Empresas & Restaurantes**: Seção dedicada para cadastro de cozinhas, gestão de cardápios separados (*"Para você"* / *"Outros Itens"*) e alérgenos.

---

## 🛡️ Páginas Estáticas (SSG) e Conformidade Google Play / LGPD

Todas as rotas geram HTML estático real em `out/` (além dos aliases em inglês com `rel="canonical"` apontando para as URLs em português):

| Rota Canônica | Aliases | Documento | Finalidade & Exigência |
| --- | --- | --- | --- |
| `/` | — | **Página Inicial** | Apresentação do produto, simulador de flags, prova social e download |
| `/privacidade` | `/privacy` | **Política de Privacidade** | DPO (Art. 41), dados sensíveis alimentares (Art. 11, I), permissões Android (`ACCESS_BACKGROUND_LOCATION`), OAuth2 Google, transferência internacional (Art. 33 / Res. ANPD 19/2024), prazo LGPD de **15 dias** e Art. 14 / 20 |
| `/exclusao-de-dados` | `/data-deletion` | **Exclusão de Conta e Dados** | Canal web oficial independente para eliminação definitiva em até **15 dias corridos** (incluindo expurgo de avaliações textuais, fotos e coordenadas vinculadas) via `privacidade@helprest.net` |
| `/seguranca-dos-dados` | `/data-safety` | **Segurança dos Dados** | Espelho do formulário Data Safety (HTTPS TLS 1.2/1.3, Google OAuth2 JWKS/JWT, matriz de permissões Android, sem redes de anúncios nem coleta financeira) |
| `/aviso-de-saude` | `/health-disclaimer` | **Aviso de Saúde & Alérgenos** | Natureza informativa (não médica, sem Health Connect), alerta de contaminação cruzada e cuidados de anafilaxia |
| `/termos` | `/terms` | **Termos de Uso & CSAE** | Condições gerais, moderação/denúncia de UGC, geofencing 100m, faixa etária (`13+`, Art. 14) e **Padrões de Segurança Infantil (CSAE/CSAM)** em `#seguranca-infantil` |
| `/suporte` | `/support`, `/contato` | **Central de Suporte** | Dados do desenvolvedor (`Gustavo L. Gregorio`), e-mails `@helprest.net`, pacote `com.helprest` e formulário de contato |

Também são gerados estaticamente: `out/404.html`, `out/sitemap.xml` e `out/robots.txt`.

---

## 🏛️ Arquitetura de Diretórios

```text
src/
├── app/                     # Next.js App Router (layout, globals.css, providers, not-found, sitemap, robots, **/page.tsx)
├── views/                   # Composições de página renderizadas pelas rotas App Router
├── components/
│   ├── atoms/               # Button (+ getButtonClasses), Badge, BrandLogo, Container, Typography, StarRating, StoreBadge, Input
│   ├── molecules/           # FlagChip, EstablishmentCard, PhoneMockup, Accordion, Breadcrumb, DeleteAccountForm, ContactForm, DownloadModal
│   ├── organisms/           # Navbar, HeroSection, InteractiveSimulator, HowItWorksSection, ForEstablishmentsSection, ReviewsSection, DataSafetyHighlightSection, FaqSection, DownloadCtaSection, GooglePlayComplianceHub, Footer
│   └── templates/           # MainLayout, LegalLayout
├── context/                 # ModalContext, useModal
├── data/                    # Flags, estabelecimentos demo, avaliações, FAQs e catálogo Data Safety
├── lib/                     # Rotas legais e normalização de paths (routes.ts)
└── types/                   # Definições TypeScript estritas
```

---

## 🚀 Como Executar e Implantar

### Pré-requisitos
- Node.js >= 20 (ou 24 LTS)
- npm >= 10

### Instalação e Desenvolvimento
```bash
cd helprest-site
npm install
npm run dev
```

### Validação e Build Estático (`out/`)
```bash
npm run typecheck   # Verificação TypeScript estrita (tsc --noEmit)
npm run lint        # Next ESLint (eslint .)
npm run build       # Gera arquivos estáticos HTML/CSS/JS em out/
npm run preview     # Serve a pasta out/ localmente (npx serve@latest out)
```

### Nota de Deploy na Vercel
- **Root Directory**: `helprest-site`
- **Framework Preset**: **Next.js** (O Next.js exporta estaticamente para `out/` via `output: 'export'` em `next.config.ts`, permitindo rotas reais HTTP 200 sem fallback SPA).
