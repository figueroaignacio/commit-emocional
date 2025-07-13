// @ts-check
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'rjigjic0',
      dataset: 'production',
      apiVersion: '2025-01-28',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
  ],
});
