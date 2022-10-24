import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uno from 'unocss/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    uno(),
    vueI18n({
      include: path.resolve('./src/locales'),
    }),
  ],
})
