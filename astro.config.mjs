// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar'
import tailwindcss from '@tailwindcss/vite';
import catppuccin from "@catppuccin/starlight";
import starlightImageZoom from 'starlight-image-zoom'
// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'TypeScript',
          customCss: [ './src/styles/global.css' ],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          plugins: [starlightAutoSidebar(), catppuccin(), starlightImageZoom()],
          sidebar: [
              { label: 'TypeScript', autogenerate: { directory: 'typescript' } },
              {label: 'Reference', autogenerate: { directory: 'reference'}}
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});