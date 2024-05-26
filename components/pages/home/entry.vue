<script setup lang="ts">
import { EntryClock, EntryAddress } from '~/assets/icons'
</script>

<template>
  <div class="min-h-[100vh] grid place-items-center">
    <div class="mt-[60px] lg:mt-[130px] s9:mt-[260px] mb-[280px]">
      <h1
        class="max-[768px]:text-[32px] max-[991px]:text-[60px] min-[991px]:text-[70px] font-semibold text-white text-center mb-[47px]"
      >
        The Third International Pharmaceutical Forum of Uzbekistan
      </h1>
      <p class="text-xl text-white mx-auto text-center max-w-[725px] mb-[56px]">
        The largest international event dedicated to solving the most pressing
        problems of the pharmaceutical industry of the new Uzbekistan
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <div
          class="bg-light-white flex gap-2.5 items-center text-white text-xl py-[14px] px-[24px] rounded-[20px] w-fit"
        >
          <EntryClock />
          <p class="text-[18px] lg:text-[24px] font-bold">May 30-31, 2024</p>
        </div>
        <div
          class="bg-light-white flex gap-2.5 items-center text-white text-xl py-[14px] px-[24px] rounded-[20px] w-fit"
        >
          <EntryAddress />
          <p class="text-[18px] lg:text-[24px] font-bold">
            InterContinental Tashkent - Shakhrisabz Street 2
          </p>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-center mb-20"
    >
      <div class="md:order-2 xl:order-1 rounded-2xl overflow-hidden">
        <img class="w-full" src="~/assets/images/member-1.png" />
      </div>
      <div class="md:order-1 xl:order-2 text-center md:col-span-2 text-white">
        <h3 class="text-[40px] font-bold">
          International Pharmaceutical Forum of Uzbekistan
        </h3>
        <p class="text-xl">
          The First International Pharmaceutical Forum of Uzbekistan declared
          itself to be a unique professional international platform for the
          leaders of the pharmaceutical industry, with the participation of the
          heads of the largest manufacturers, distributors, regulators,
          licensors of production technologies, lawyers and consulting
          specialists working in this field and many others.
        </p>
      </div>
      <div class="md:order-3 rounded-2xl overflow-hidden">
        <img class="w-full" src="~/assets/images/member-2.png" />
      </div>
    </div>

    <div
      class="grid grid-cols-1 s9:grid-cols-2 xl:grid-cols-3 gap-8 relative xl:translate-y-1/2 pb-12 xl:pb-0"
    >
      <div
        class="card bg-main py-[34px] py-[40px] rounded-[20px] relative grid place-items-center overflow-hidden"
      >
        <div class="text-white text-center">
          <h3 class="text-[56px] font-bold">2 days</h3>
          <p class="uppercase text-[24px] font-medium">
            BUSINESS COMMUNICATION AND NETWORKING
          </p>
        </div>
      </div>
      <div
        class="card bg-main py-[34px] py-[40px] rounded-[20px] relative grid place-items-center overflow-hidden"
      >
        <div class="text-white text-center">
          <h3 class="text-[56px] font-bold">8+</h3>
          <p class="uppercase text-[24px] font-medium">
            THEMATIC SESSIONS + ROUND TABLES + WORKSHOPS
          </p>
        </div>
      </div>
      <div
        class="card bg-main py-[34px] py-[40px] rounded-[20px] relative grid place-items-center overflow-hidden s9:col-span-2 xl:col-span-1"
      >
        <div class="text-white text-center">
          <h3 class="text-[56px] font-bold">250+</h3>
          <p class="uppercase text-[24px] font-medium">PARTICIPANTS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card:after {
  background-image: url('~/assets/images/x.png');
  background-repeat: no-repeat;
  background-size: 100%;
  content: '';
  height: 140px;
  opacity: 0.1;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(25%, -50%) rotate(135deg);
  width: 140px;
}
</style>
