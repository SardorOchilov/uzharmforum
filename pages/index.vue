<script setup lang="ts">
import {
  Entry,
  Participants,
  MainSpeakers,
  Advantages,
} from '~/components/pages/home'
</script>

<template>
  <div>
    <div class="bg-dark-green flex justify-center">
      <div class="container"><Entry /></div>
    </div>
    <div class="container">
      <Participants />
    </div>
    <div>
      <MainSpeakers />
      <Advantages />
    </div>
  </div>
</template>

<style scoped></style>
