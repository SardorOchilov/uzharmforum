<script setup lang="ts">
import Header from './header.vue'
import Footer from './footer.vue'
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
