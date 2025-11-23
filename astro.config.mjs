import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://camundaflow.de',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: true,    // ← ovo je najvažnije!
    })
  ]
});
