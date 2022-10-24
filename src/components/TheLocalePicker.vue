<script setup lang="ts">
import { syncRef, useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const LOCALES = ['ru', 'en']

const selected = useLocalStorage<null | string>('locale-preference', null)

syncRef(selected, locale)
</script>

<template>
  <select v-model="selected">
    <option v-for="x in LOCALES" :key="x" :value="x">{{ x }}</option>
  </select>
</template>
