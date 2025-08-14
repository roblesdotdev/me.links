import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://roblesar.pages.dev',
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [icon(), sitemap()],
})
