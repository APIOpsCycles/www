import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://www.apiopscycles.com',
  adapter: netlify(),
});
