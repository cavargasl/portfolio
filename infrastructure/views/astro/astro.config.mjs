// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({include: ['**/react/*']})],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});