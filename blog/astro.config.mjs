// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
//import { markdown }from '@astrojs/markdown-remark';
// https://astro.build/config
export default defineConfig({
  site: 'https://miniblog-67c.pages.dev',
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
