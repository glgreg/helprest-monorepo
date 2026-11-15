import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://helprest.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-11-15T00:00:00.000Z');

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/exclusao-de-dados`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/seguranca-dos-dados`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/aviso-de-saude`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/termos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/suporte`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
