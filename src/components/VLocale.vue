<script setup lang="ts">
import { match } from 'ts-pattern'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const typedLocale = computed<'en' | 'ru'>(() =>
  match(locale.value)
    .with('ru', (x) => x)
    .otherwise(() => 'en')
)
</script>

<template>
  <slot :name="typedLocale" />
</template>
