<template>
  <div
    class="flex flex-col items-center space-y-2 text-center whitespace-nowrap"
  >
    <div class="text-4xl font-semibold text-blue-500">
      <slot name="value" />
    </div>
    <div class="text-sm text-blue-500 opacity-80"><slot name="title" /></div>
  </div>
</template>
