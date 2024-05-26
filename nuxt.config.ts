// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'UzPharmForum',
      meta: [
        {
          content: 'UzPharmForum',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],
    },
  },
  vite: {
    plugins: [svgLoader({})],
  },
  modules: ['@nuxtjs/i18n'],
})
