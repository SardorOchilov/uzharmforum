<script setup lang="ts">
import { Logo, Hamburger } from '~/assets/icons'
</script>

<template>
  <div class="py-5 flex justify-center bg-dark-green">
    <div class="container flex justify-between items-center">
      <div class="flex gap-5 items-center">
        <Logo class="size-16 text-[#06B48B] w-[60px] h-[60px]" />
        <div>
          <span class="font-medium text-[19px] text-white cursor-pointer">
            Third International Pharmaceutical <br />
            Forum of Uzbekistan
          </span>
        </div>
      </div>
      <ul class="lg:flex gap-10 font-semibold text-[20px] text-white hidden">
        <li class="menu-link">Program</li>
        <li class="menu-link">Participants</li>
        <li class="menu-link">Media</li>
      </ul>
      <div class="lg:flex gap-4 hidden">
        <div
          class="bg-light-white grid place-items-center text-white font-medium text-xl py-[14px] px-[24px] rounded-[20px] cursor-pointer"
        >
          <p>ENG</p>
        </div>
        <div>
          <button
            class="bg-main grid place-items-center text-white font-medium text-xl py-[14px] px-[24px] rounded-[20px]"
          >
            Register
          </button>
        </div>
      </div>
      <div class="block lg:hidden">
        <Hamburger />
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-link {
  @apply cursor-pointer hover:text-main transition-all duration-[.2s];
}
</style>
