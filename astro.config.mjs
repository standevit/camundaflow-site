import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://camundaflow.de',  // za custom domen i ispravne putanje
  base: '/',                       // default, ali eksplicitno
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,       // ← ovo dodaje Tailwind CSS direktno u <head>
      },
    }),
  ],
});
