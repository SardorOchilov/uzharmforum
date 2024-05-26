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
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      cookieDomain: '.forum.uz',
      cookieKey: 'lang',
    },
    locales: [
      {
        code: 'ru',
        file: 'ru.json',
      },
      {
        code: 'uz',
        file: 'uz.json',
      },
      {
        code: 'en',
        file: 'en.json',
      },
    ],
    langDir: 'locales',
    defaultLocale: 'ru',
  },
})
