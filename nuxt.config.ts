// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Pavel Gretskov · Portfolio',
      meta: [
        {
          name: 'description',
          content:
            'I am a Formulation and Process Development Scientist. This site is my online porfolio.',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  modules: ['@unocss/nuxt', 'unplugin-icons/nuxt'],
})
