import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://camundaflow.de',
  base: '/',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,  // ← ovo generiše Tailwind CSS direktno u <head>
      },
    }),
  ],
});
