import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  ssr: true,
  modules: ['@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  fonts: {
    families: [
      { name: 'Bricolage Grotesque', provider: 'google', weights: [400, 500, 600, 700], styles: ['normal'] },
      { name: 'IBM Plex Mono', provider: 'google', weights: [400, 500], styles: ['normal', 'italic'] },
    ],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: (t) => (t ? `${t} — Israel Ugbodaga` : 'Israel Ugbodaga — Software engineer'),
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#F5F7F4' }],
    },
  },
  nitro: {
    prerender: { crawlLinks: true, routes: ['/', '/404.html'] },
  },
  routeRules: { '/**': { prerender: true } },
})
