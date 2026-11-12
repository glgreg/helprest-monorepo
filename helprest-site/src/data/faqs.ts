import { FaqItem } from '../types';

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'geral',
    question: 'O HelpRest é gratuito para os consumidores?',
    answer:
      'Sim. O HelpRest é gratuito para você configurar suas restrições alimentares, explorar restaurantes próximos no mapa, salvar locais ou pratos nos favoritos e registrar visitas com foto no feed social.',
  },
  {
    id: 'faq-2',
    category: 'restricoes',
    question: 'Como o aplicativo calcula quais restaurantes aparecem para mim?',
    answer:
      'O motor de recomendação compara as restrições selecionadas no seu perfil com as flags de cada cozinha e prato. Locais que atendem 100% das suas flags ativas aparecem em destaque; qualquer estabelecimento sem nenhuma correspondência é ocultado enquanto suas restrições estiverem ligadas.',
  },
  {
    id: 'faq-3',
    category: 'seguranca',
    question: 'Como funciona a validação de visita em 100 metros e o uso da câmera?',
    answer:
      'No momento em que você toca em "Registrar Visita", o HelpRest verifica suas coordenadas GPS dentro de um raio de 100 metros do estabelecimento. A câmera ou galeria só é aberta quando você escolhe anexar uma foto da refeição ao relato.',
  },
  {
    id: 'faq-4',
    category: 'seguranca',
    question: 'O HelpRest precisa de localização em segundo plano?',
    answer:
      'Não é obrigatório para usar o mapa nem para filtrar restaurantes. A permissão em segundo plano ("Permitir o tempo todo") é totalmente opcional, acompanha notificação visível na barra do Android quando ativa para descobrir locais próximos e pode ser revogada a qualquer momento nas configurações do aparelho.',
  },
  {
    id: 'faq-5',
    category: 'estabelecimentos',
    question: 'Como um restaurante ou cafeteria pode se cadastrar no HelpRest?',
    answer:
      'No próprio aplicativo, a tela inicial oferece a entrada dedicada para empresas. O gestor cria a conta informando dados do estabelecimento e CNPJ, define as flags da cozinha e gerencia os itens do cardápio com ingredientes detalhados.',
  },
  {
    id: 'faq-6',
    category: 'restricoes',
    question: 'O HelpRest substitui orientação médica ou confirmação no balcão?',
    answer:
      'Não. O HelpRest é uma ferramenta informativa de busca e apoio ao dia a dia, nunca um serviço médico. Pessoas com alergias graves ou anafilaxia devem sempre confirmar os procedimentos de preparo e risco de contaminação cruzada diretamente com a cozinha antes de pedir.',
  },
];
