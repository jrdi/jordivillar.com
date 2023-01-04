import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
	site: 'https://jordivillar.com',
  integrations: [tailwind(), mdx(), sitemap()],
  build: {
    format: 'file'
  }
});
