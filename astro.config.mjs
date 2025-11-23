import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://camundaflow.de',
  base: '/',                     // ← obavezno
  build: {
    assets: 'assets'             // ← ovo forsira ispravne putanje
  },
  integrations: [tailwind()]
});
