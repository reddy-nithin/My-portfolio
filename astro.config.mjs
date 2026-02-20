import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Use base path for GitHub Pages project site (reddy-nithin.github.io/My-portfolio/)
  // When using custom domain nithinsongala.me, change base to '/' and redeploy
  site: 'https://reddy-nithin.github.io',
  base: '/My-portfolio/',
  integrations: [tailwind()],
});
