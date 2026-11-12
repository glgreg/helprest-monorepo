export type DietaryFlagCategory = 'intolerance' | 'lifestyle' | 'allergy' | 'health';

export interface DietaryFlag {
  id: string;
  name: string;
  shortLabel: string;
  category: DietaryFlagCategory;
  description: string;
  iconName: string;
  imageAsset?: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceFormatted: string;
  flags: string[]; // flag IDs
  isSafe: boolean;
  allergenAlerts?: string[];
  imageUrl?: string;
}

export interface Establishment {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  distanceKm: number;
  distanceFormatted: string;
  address: string;
  neighborhood: string;
  city: string;
  imageUrl: string;
  flags: string[]; // supported flag IDs
  matchRatio?: number; // 0 to 1
  isSponsor?: boolean;
  kitchenCertified: boolean;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  highlightDish: MenuItem;
  features: string[];
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatar: string;
  establishmentName: string;
  establishmentId: string;
  rating: number;
  dateFormatted: string;
  geofenceDistanceMeters: number;
  isVerifiedVisit: boolean;
  comment: string;
  userDietaryFlags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'seguranca' | 'estabelecimentos' | 'restricoes';
}

export interface DataSafetyItem {
  id: string;
  dataType: string;
  collected: boolean;
  shared: boolean;
  purpose: string;
  retention: string;
  optionalOrRequired: 'Obrigatório para a funcionalidade' | 'Opcional / Consentimento';
  securityMechanism: string;
}
