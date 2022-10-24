import './style.scss'
import 'uno.css'
import '@unocss/reset/eric-meyer.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from '@vueuse/head'
import App from './App.vue'

import ru from './locales/ru.json'
import en from './locales/en.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    ru,
    en,
  },
})

createApp(App).use(i18n).use(createHead()).mount('#app')
