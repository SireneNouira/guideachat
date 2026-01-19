import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://votre-blog-affiliation.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
