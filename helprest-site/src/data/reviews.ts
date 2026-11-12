import { Review } from '../types';

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    authorName: 'Camila Mendonça',
    authorInitials: 'CM',
    avatarBg: '#009C9D',
    establishmentName: 'Cantina Verde Curitiba',
    establishmentId: 'est-1',
    visitPhotoUrl: '/assets/showcase/dish-gluten-free.jpg',
    rating: 5,
    dateFormatted: 'Há 2 dias',
    geofenceDistanceMeters: 14,
    isVerifiedVisit: true,
    comment:
      'Como celíaca, sair para jantar costumava gerar ansiedade. Pelo app abri direto a aba "Para você", conferi os ingredientes do gnocchi e registrei minha visita ali na mesa.',
    userDietaryFlags: ['gluten_free', 'lactose_free'],
  },
  {
    id: 'rev-2',
    authorName: 'Lucas Arantes',
    authorInitials: 'LA',
    avatarBg: '#27AE60',
    establishmentName: 'Forneria & Café da Praça',
    establishmentId: 'est-3',
    visitPhotoUrl: '/assets/showcase/dish-cafe.jpg',
    rating: 5,
    dateFormatted: 'Há 5 dias',
    geofenceDistanceMeters: 22,
    isVerifiedVisit: true,
    comment:
      'Alergia a leite e ovo me deixava sem opção em cafeterias. Aqui o pão de queijo vegetal usa inhame e o vaporizador de leite de aveia fica separado.',
    userDietaryFlags: ['lactose_free', 'egg_free'],
  },
  {
    id: 'rev-3',
    authorName: 'Mariana Duarte',
    authorInitials: 'MD',
    avatarBg: '#2D9CDB',
    establishmentName: 'Raízes do Parque Bistro',
    establishmentId: 'est-2',
    visitPhotoUrl: '/assets/places/15.jpeg',
    rating: 5,
    dateFormatted: 'Há 1 semana',
    geofenceDistanceMeters: 9,
    isVerifiedVisit: true,
    comment:
      'Saber que só consegue publicar foto quem esteve a menos de 100 metros do restaurante muda tudo. Você confia muito mais no que a comunidade compartilha.',
    userDietaryFlags: ['vegan', 'sugar_free'],
  },
];
