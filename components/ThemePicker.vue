<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import IconLight from '~icons/material-symbols/light-mode'
import IconDark from '~icons/material-symbols/dark-mode'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    type="button"
    role="switch"
    aria-label="Toggle dark mode"
    :aria-checked="isDark"
    @click="toggleDark()"
  >
    <IconDark v-if="isDark" />
    <IconLight v-else />
  </button>
</template>

<style lang="scss" scoped>
button {
  background: none;
  border: 1px solid var(--c-border);
  border-radius: 99px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: var(--transition);
}
</style>
