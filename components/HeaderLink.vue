<template>
  <a class="inline-flex h-6 overflow-hidden items-center">
    <slot name="icon" />
    <span><slot name="text" /></span>
  </a>
</template>

<style lang="scss" scoped>
a {
  // display: inline-block;
  border: 1px solid var(--c-border);
  border-radius: 99px;
  padding: 0 8px;
  color: var(--c-text-primary);
  transition: var(--transition);
  text-decoration: none;
  // height: 24px;

  &:hover,
  &:focus {
    color: var(--c-accent);
    border-color: var(--c-accent);
  }

  :v-deep(svg) {
    vertical-align: middle;
  }

  & > span {
    text-decoration: underline;
    margin-left: 4px;
  }
}
</style>
