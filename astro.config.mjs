import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://post.minami.bio/',
  integrations: [sitemap(), react(), tailwind()]
})
