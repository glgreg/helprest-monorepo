import { FaqItem } from '../types';

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'geral',
    question: 'O HelpRest é gratuito para os consumidores?',
    answer: 'Sim! O HelpRest é 100% gratuito para os usuários finais encontrarem estabelecimentos, salvarem restrições alimentares, lerem avaliações verificadas e consultarem cardápios seguros.',
  },
  {
    id: 'faq-2',
    category: 'restricoes',
    question: 'Como funciona o cálculo de compatibilidade de flags?',
    answer: 'O algoritmo do HelpRest analisa todas as suas restrições selecionadas. Se você marcou "Sem Glúten" e "Sem Lactose", estabelecimentos que atendem a ambas têm compatibilidade máxima (100% Match) e ganham prioridade no topo. Se não houver locais 100% próximos, o sistema degrada de forma transparente para opções parciais, excluindo qualquer local que não atenda a nenhuma das suas necessidades.',
  },
  {
    id: 'faq-3',
    category: 'seguranca',
    question: 'O que é a validação de visitas por geofencing (100 metros)?',
    answer: 'Para combater avaliações falsas e garantir a segurança de quem tem alergias severas, fotos de visitas e avaliações oficiais no feed social só podem ser registradas se o GPS do usuário comprovar que ele esteve fisicamente a menos de 100 metros do estabelecimento.',
  },
  {
    id: 'faq-4',
    category: 'estabelecimentos',
    question: 'Como um restaurante ou cafeteria pode se cadastrar no HelpRest?',
    answer: 'Restaurantes podem criar sua conta de Estabelecimento diretamente no aplicativo ou na versão web para empresas. É possível selecionar quais restrições a cozinha atende, cadastrar cardápios categorizados, indicar alérgenos por prato e solicitar auditoria de selos de preparo seguro.',
  },
  {
    id: 'faq-5',
    category: 'seguranca',
    question: 'Como o HelpRest protege os meus dados pessoais e de saúde?',
    answer: 'Seus dados de preferências alimentares e localização são tratados com criptografia de ponta a ponta em trânsito (TLS 1.3) e hashes fortes (Argon2id). O HelpRest segue rigorosamente a Lei Geral de Proteção de Dados (LGPD) e as diretrizes do Google Play Console. Você pode solicitar a exclusão integral de sua conta e histórico a qualquer momento.',
  },
  {
    id: 'faq-6',
    category: 'restricoes',
    question: 'O HelpRest substitui orientações médicas ou nutricionais?',
    answer: 'Não. O HelpRest é uma plataforma de busca e recomendação com finalidade de estilo de vida e assistência cotidiana. Não emitimos diagnósticos clínicos. Pessoas com anafilaxia ou alergias graves devem sempre confirmar procedimentos de manipulação diretamente com a equipe do restaurante.',
  },
];
