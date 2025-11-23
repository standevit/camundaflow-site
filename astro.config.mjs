import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://camundaflow.de',   // ← ovo je obavezno za custom domen
  base: '/',                        // ← ostavi ovako (default je ionako ovo)
  integrations: [tailwind()]
});
