import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/jetbrains-mono';
import './globals.css';

import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Providers } from './providers';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#009C9D',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://helprest.net'),
  title: {
    default: 'HelpRest | Restaurantes Compatíveis com suas Restrições Alimentares',
    template: '%s | HelpRest',
  },
  description:
    'HelpRest conecta pessoas com restrições alimentares — celíacos, intolerantes à lactose, veganos, vegetarianos e alérgicos — a restaurantes compatíveis com cardápios separados por perfil e avaliações validadas por GPS em 100m.',
  keywords: [
    'restrições alimentares',
    'sem glúten',
    'vegano',
    'sem lactose',
    'celíaco',
    'alergias alimentares',
    'restaurantes seguros',
    'HelpRest',
    'cardápio seguro',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', rel: 'alternate icon' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://helprest.net/',
    siteName: 'HelpRest',
    title: 'HelpRest | Coma fora com tranquilidade e cardápios compatíveis',
    description:
      'Filtre restaurantes por flags alimentares, veja pratos compatíveis separados no cardápio e confira avaliações validadas presencialmente em 100m.',
    images: [
      {
        url: '/assets/logos/helprest_logo_green.png',
        alt: 'HelpRest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HelpRest | Coma fora com tranquilidade',
    description:
      'Descubra restaurantes e pratos compatíveis com suas restrições alimentares perto de você.',
    images: ['/assets/logos/helprest_logo_green.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-[#11181C] antialiased min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
