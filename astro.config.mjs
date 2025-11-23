import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
});

export default defineConfig({
  site: 'https://camundaflow.de',   // ← ovo dodaj/obavezno postavi tačno ovako
  base: '/',                        // ← ako već imaš base, ostavi ovako
  // ostalo ostaje isto
});
