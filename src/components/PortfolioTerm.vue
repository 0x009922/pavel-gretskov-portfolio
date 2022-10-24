<script setup lang="ts">
import VLocale from './VLocale.vue'

defineProps<{
  bigPharma?: boolean
}>()
</script>

<template>
  <li class="rounded-lg text-md overflow-hidden bg-dark-600">
    <div class="p-4">
      <slot />
    </div>

    <div v-if="bigPharma" class="flex justify-end">
      <div
        class="bg-pink-500 text-pink-500 bg-opacity-30 text-xs p-1 rounded-tl-lg"
      >
        <VLocale>
          <template #ru>
            Контрактная разработка для компании Big Pharma
          </template>
          <template #en> Сontract development for Big Pharma </template>
        </VLocale>
      </div>
    </div>
  </li>
</template>
