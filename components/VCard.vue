<template>
  <div class="rounded overflow-hidden">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
div {
  box-shadow: 0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
  background: var(--c-surface);
  transition: var(--transition);
}
</style>
