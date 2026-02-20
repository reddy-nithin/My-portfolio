import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nithinsongala.me',
  base: '/',
  integrations: [tailwind()],
});
