// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://anket11.github.io',
  base: '/devfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});
