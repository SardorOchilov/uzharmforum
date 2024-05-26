<script setup lang="ts">
import { OutlineButton } from '~/components/shared-components'
import { computed } from 'vue'

const speakers = computed(() => [
  {
    name: 'Asilbek Khudayarov',
    job_title: 'Minister',
    description: 'Ministry of Health of the Republic of Uzbekistan',
    image:
      'https://admin.uzpharmforum.com/media/post/images/1713385659303835.png',
  },
  {
    name: 'Khurram Teshabayev',
    job_title: 'Deputy Minister',
    description:
      'Ministry of Investments, Industry and Trade of the Republic of Uzbekistan',
    image:
      'https://admin.uzpharmforum.com/media/post/images/1714025781089976.png',
  },
  {
    name: 'Otabek Rustamovich Fozilkarimov',
    job_title: 'Deputy Minister',
    description:
      'The Ministry of Economy and Finance of the Republic of Uzbekistan',
    image:
      'https://admin.uzpharmforum.com/media/post/images/1715837751842290.png',
  },
  {
    name: 'Abdulla Azizov',
    job_title: 'Director',
    description: 'The Pharmaceutical Industry Development Agency',
    image:
      'https://admin.uzpharmforum.com/media/post/images/1714025671287756.png',
  },
])
</script>

<template>
  <div>
    <div class="wave-container">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="#C1EDE2"></use>
          <use xlink:href="#gentle-wave" x="48" y="3" fill="#E0F6F1"></use>
        </g>
      </svg>
    </div>
    <div class="flex flex-col items-center bg-light-green">
      <div class="container">
        <div
          class="flex flex-col md:flex-row justify-between items-center pt-[80px] s9:pt-[280px] mb-8"
        >
          <h3 class="text-[34px] md:text-[48px] font-bold text-dark-blue mb-6">
            Main speakers
          </h3>
          <OutlineButton>See all</OutlineButton>
        </div>
        <div class="pb-[200px]">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
          >
            <div v-for="speaker in speakers" class="flex flex-col items-center">
              <div class="rounded-2xl overflow-hidden h-[350px] w-full">
                <img
                  :src="speaker.image"
                  class="object-cover h-full w-full object-center"
                />
              </div>
              <div class="p-4 rounded-2xl bg-white w-full grow">
                <p class="mb-3 text-xl font-medium text-dark-blue">
                  {{ speaker.name }}
                </p>
                <p class="mb-4 text-lg text-main font-medium">
                  {{ speaker.job_title }}
                </p>
                <div class="pt-4 border-t-[1px] border-light-border">
                  <p class="text-lg text-dark-blue opacity-[.8]">
                    {{ speaker.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wave-container {
  position: relative;
  width: 100%;
  height: 150px; /* Adjust as needed */
  overflow: hidden;
}

.waves {
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
