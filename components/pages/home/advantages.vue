<script setup lang="ts">
import {
  Topics,
  Networking,
  Partnership,
  Experience,
  Exclusivity,
  Trends,
} from '~/assets/icons'
const advantagesIcons = [
  {
    icon: Topics,
    title: 'Topics',
    position: '30px',
    description:
      'A rich business program, including unique thematic sessions, round tables, seminars and master classes',
  },
  {
    icon: Experience,
    position: '30px',
    title: 'Experience',
    description:
      'The event is intended to become a platform for the exchange of best practices between experts in the pharmaceutical market',
  },
  {
    icon: Networking,
    position: '70px',
    title: 'Networking',
    description:
      'Establishment of personal informal contacts with people of a narrow specialization with the least effort and time spent on business trips',
  },
  {
    icon: Exclusivity,
    position: '30px',
    title: 'Exclusivity',
    description: 'Industry-unique event',
  },
  {
    icon: Partnership,
    position: '70px',
    title: 'Partnership',
    description:
      'Formation and expansion of the base of potential business partners',
  },
  {
    icon: Trends,
    position: '60px',
    title: 'Trends',
    description: 'Discussion of the upcoming market trends',
  },
]
</script>

<template>
  <div class="py-[160px]">
    <div class="container">
      <h3 class="text-[48px] font-bold text-dark-blue mb-6 text-center">
        Advantages
      </h3>
      <div class="relative">
        <div class="absolute top-[50px] left-0">
          <img
            src="~/assets/images/curved-line.png"
            class="w-full object-cover object-center h-full"
          />
        </div>
        <div class="grid grid-cols-6 gap-7">
          <div
            v-for="(item, idx) in advantagesIcons"
            :key="idx"
            class="flex flex-col items-center"
          >
            <div
              :style="`transform: translateY(${item.position})`"
              class="advantage-icon h-[250px]"
            >
              <component :is="item.icon" class="w-[50px] h-[50px]" />
            </div>
            <div
              class="bg-light-green rounded-2xl p-5 flex flex-col gap-5 z-10 relative grow"
            >
              <p class="text-dark-blue font-bold text-[28px]">
                {{ item.title }}
              </p>
              <p class="text-dark-blue font-medium text-lg">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="absolute top-[600px] left-0">
          <img
            src="~/assets/images/curved-line.png"
            class="w-full object-cover object-center h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advantage-icon:before {
  @apply border-r-[2px] border-dashed border-main h-full w-[1px] bottom-0 content-[''] left-[50%] absolute translate-y-[40%] -ml-[1px];
}
</style>
