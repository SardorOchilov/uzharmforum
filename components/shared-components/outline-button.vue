<script setup lang="ts">
import { ArrowRight } from 'assets/icons'
</script>

<template>
  <button
    class="bg-transparent border border-[1px] border-light-border px-6 py-3 rounded-xl flex items-center gap-2"
  >
    <span class="text-dark-blue font-semibold text-xl">
      <slot class=""></slot>
    </span>
    <ArrowRight class="text-main w-[16px]" />
  </button>
</template>

<style scoped></style>
