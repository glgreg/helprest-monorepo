import { DataSafetyItem } from '../types';

export const DATA_SAFETY_DECLARATIONS: DataSafetyItem[] = [
  {
    id: 'personal-identity',
    dataType: 'Nome, E-mail, Data de Nascimento e Autenticação',
    androidPermission: 'INTERNET • Google Sign-In (OAuth2)',
    collected: true,
    shared: false,
    purpose:
      'Criação e identificação da conta de consumidor, login tradicional ou via Google Identity Services e verificação etária mínima aplicável.',
    retention:
      'Mantido enquanto a conta estiver ativa. Excluído em até 30 dias após solicitação formal.',
    optionalOrRequired: 'Obrigatório para a funcionalidade',
    securityMechanism:
      'Tráfego HTTPS com TLS 1.3, hashing Argon2id para senhas e tokens JWT rotativos.',
  },
  {
    id: 'business-partner',
    dataType: 'Dados de Parceiros (Nome Fantasia, CNPJ e Endereço)',
    androidPermission: 'Cadastramento Empresarial no App',
    collected: true,
    shared: false,
    purpose:
      'Verificação e exibição pública de estabelecimentos gastronômicos, localização no mapa e gestão de filiais.',
    retention:
      'Mantido enquanto o estabelecimento permanecer cadastrado na plataforma.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Tráfego criptografado em trânsito (TLS 1.3) e controle de acesso restrito ao administrador.',
  },
  {
    id: 'loc-foreground',
    dataType: 'Localização Precisa e Aproximada (Primeiro Plano)',
    androidPermission: 'ACCESS_FINE_LOCATION • ACCESS_COARSE_LOCATION',
    collected: true,
    shared: true,
    purpose:
      'Ordenação de restaurantes por proximidade, exibição no mapa Google Maps e validação presencial de visitas com geofencing de 100 metros.',
    retention:
      'Coordenadas da visita validada ficam associadas ao registro da avaliação; buscas de mapa não persistem histórico contínuo.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Compartilhamento técnico limitado à API do Google Maps para renderização cartográfica.',
  },
  {
    id: 'loc-background',
    dataType: 'Localização em Segundo Plano (Opcional com Notificação)',
    androidPermission: 'ACCESS_BACKGROUND_LOCATION • FOREGROUND_SERVICE_LOCATION • POST_NOTIFICATIONS',
    collected: true,
    shared: false,
    purpose:
      'Monitoramento pontual em segundo plano (tarefa HELPREST_BACKGROUND_LOCATION) apenas quando autorizado pelo usuário para encontrar estabelecimentos próximos.',
    retention:
      'Não mantemos histórico contínuo de trajetos ou histórico permanente de deslocamento do usuário em servidor.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Serviço com notificação ativa permanente no Android e desligamento imediato ao revogar nas Configurações do sistema.',
  },
  {
    id: 'photos-camera',
    dataType: 'Fotos e Imagens (Câmera / Galeria)',
    androidPermission: 'Seletor do Sistema / Câmera (expo-image-picker)',
    collected: true,
    shared: false,
    purpose:
      'Captura ou seleção voluntária de fotos de perfil e registros fotográficos de refeições anexados a visitas validadas no raio de 100m.',
    retention:
      'Armazenadas enquanto a visita ou foto de perfil existir, podendo ser removidas mediante solicitação.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Envio criptografado em trânsito com validação de tipo de arquivo.',
  },
  {
    id: 'dietary-flags',
    dataType: 'Preferências e Restrições Alimentares (Flags)',
    androidPermission: 'Perfil do Usuário',
    collected: true,
    shared: false,
    purpose:
      'Filtragem personalizada do RecommendationService e separação de cardápios ("Para você" vs "Outros Itens").',
    retention:
      'Editável ou removível pelo próprio usuário no app ou na exclusão total da conta.',
    optionalOrRequired: 'Obrigatório para a funcionalidade',
    securityMechanism:
      'Armazenado sob sigilo de conta; jamais usado para segmentação publicitária ou venda a terceiros.',
  },
  {
    id: 'app-activity',
    dataType: 'Interações no App (Favoritos, Visitas, Seguidores)',
    androidPermission: 'Uso do Aplicativo',
    collected: true,
    shared: false,
    purpose:
      'Persistência de restaurantes e pratos favoritos, avaliações de visitas e visualização do feed comunitário.',
    retention:
      'Avaliações públicas de visitas são desvinculadas/anonimizadas ou removidas na exclusão da conta.',
    optionalOrRequired: 'Opcional / Consentimento',
    securityMechanism:
      'Protegido em trânsito (TLS 1.3) e acessível sob moderação anti-abuso.',
  },
];
