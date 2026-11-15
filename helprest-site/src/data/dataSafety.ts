import { DataSafetyItem } from '../types';

export const DATA_SAFETY_DECLARATIONS: DataSafetyItem[] = [
  {
    id: 'personal-identity',
    dataType: 'Nome, E-mail, Data de Nascimento e Vínculo Google OAuth2',
    androidPermission: 'INTERNET • Google Sign-In (OAuth2)',
    collected: true,
    shared: false,
    purpose:
      'Criação e identificação da conta de consumidor, autenticação via Google Identity Services (ID Token) e verificação etária mínima aplicável (13+ com assistência de responsável para menores de 18 anos).',
    retention:
      'Mantidos enquanto a conta estiver ativa. Eliminados nos bancos operacionais em até 15 dias corridos após solicitação confirmada do titular.',
    optionalOrRequired: 'Obrigatório para a funcionalidade',
    securityMechanism:
      'Tráfego HTTPS com criptografia TLS (1.2/1.3), validação de ID Token nas chaves públicas (JWKS) do Google e sessões via tokens JWT assinados com refresh controlado.',
  },
  {
    id: 'business-partner',
    dataType: 'Dados de Parceiros (Nome Fantasia, Endereço e CNPJ quando informado)',
    androidPermission: 'Cadastramento Empresarial no App',
    collected: true,
    shared: false,
    purpose:
      'Identificação e exibição pública de estabelecimentos gastronômicos, geolocalização no mapa e gerenciamento de cardápios.',
    retention:
      'Mantidos enquanto o estabelecimento permanecer ativo na plataforma ou até solicitação formal de descadastramento pelo gestor.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Transporte criptografado via HTTPS/TLS e autorização baseada em função (RBAC) verificada por token JWT no servidor.',
  },
  {
    id: 'loc-foreground',
    dataType: 'Localização Precisa e Aproximada (Primeiro Plano)',
    androidPermission: 'ACCESS_FINE_LOCATION • ACCESS_COARSE_LOCATION',
    collected: true,
    shared: true,
    purpose:
      'Ordenação de restaurantes próximos via cálculo geoespacial, exibição no mapa Google Maps e validação presencial de visitas com geofencing de 100 metros ao publicar avaliações com foto.',
    retention:
      'Consultas de mapa não persistem histórico contínuo de trajetos em servidor; dados geográficos associados à conta ou à visita são apagados na exclusão.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Compartilhamento técnico limitado à API do Google Maps para renderização cartográfica durante o uso.',
  },
  {
    id: 'loc-background',
    dataType: 'Localização em Segundo Plano (Opcional com Notificação)',
    androidPermission: 'ACCESS_BACKGROUND_LOCATION • FOREGROUND_SERVICE_LOCATION • POST_NOTIFICATIONS',
    collected: true,
    shared: false,
    purpose:
      'Monitoramento pontual em segundo plano (tarefa HELPREST_BACKGROUND_LOCATION) apenas quando expressamente habilitado pelo usuário para identificar estabelecimentos próximos.',
    retention:
      'Sem histórico permanente de deslocamento ou rastreamento contínuo armazenado em servidor.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Execução transparente com notificação persistente no Android e desligamento imediato ao revogar a permissão no sistema.',
  },
  {
    id: 'photos-camera',
    dataType: 'Fotos e Imagens (Câmera / Seletor do Sistema)',
    androidPermission: 'Seletor do Sistema / Câmera (expo-image-picker)',
    collected: true,
    shared: false,
    purpose:
      'Envio voluntário de foto de perfil ou imagens de refeições anexadas a avaliações presenciais validadas no raio de 100m.',
    retention:
      'Mantidas enquanto a foto de perfil ou a avaliação existir; removidas definitivamente mediante edição/remoção pelo usuário ou pedido de exclusão em até 15 dias.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Envio sobre conexão criptografada HTTPS/TLS sob ação explícita de seleção do titular.',
  },
  {
    id: 'dietary-flags',
    dataType: 'Preferências e Restrições Alimentares (Dados Sensíveis - LGPD Art. 11)',
    androidPermission: 'Perfil do Usuário',
    collected: true,
    shared: false,
    purpose:
      'Consentimento específico e destacado (LGPD Art. 11, I) para filtragem matemática personalizada do RecommendationService e separação de cardápios ("Para você" vs "Outros Itens").',
    retention:
      'Editáveis ou removíveis a qualquer momento pelo próprio titular no app, com revogação completa na exclusão da conta.',
    optionalOrRequired: 'Obrigatório para a funcionalidade',
    securityMechanism:
      'Acesso autenticado via JWT em tráfego criptografado; jamais utilizadas para diagnóstico médico, venda ou segmentação publicitária.',
  },
  {
    id: 'app-activity',
    dataType: 'Interações no App (Favoritos, Avaliações e Fotos de Visitas)',
    androidPermission: 'Uso do Aplicativo',
    collected: true,
    shared: false,
    purpose:
      'Salvamento de restaurantes e produtos favoritos, avaliações comunitárias de estabelecimentos visitados presencialmente e denúncias de conteúdo abusivo.',
    retention:
      'Na exclusão total da conta, todos os registros individuais de visitas, textos de avaliações e fotos são eliminados definitivamente em até 15 dias corridos (preservando-se apenas recálculo numérico coletivo quando não singularizável).',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Tráfego HTTPS/TLS, moderação contra abuso com log administrativo isolado e sanitização estrita de entradas.',
  },
];
