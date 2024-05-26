<script setup lang="ts">
import {
  Loader,
  Phone,
  Address,
  Clock,
  ArrowRight,
  FooterOcean,
} from '~/assets/icons'
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
          <use xlink:href="#gentle-wave" x="48" y="3" fill="#078b6c"></use>
        </g>
      </svg>
    </div>
    <div class="bg-secondary flex justify-center">
      <div class="container">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-[60px]"
        >
          <div>
            <div class="flex gap-5 items-center mb-2">
              <Loader class="size-16" />
              <div>
                <span class="font-medium text-[19px] text-white">
                  Third International Pharmaceutical <br />
                  Forum of Uzbekistan
                </span>
              </div>
            </div>
            <span class="font-bold text-transparent-white text-lg">
              © 2024 International <br />
              Pharmceutical Forum of Uzbekistan
            </span>
            <div class="font-bold text-lg mt-5">
              <span class="text-transparent-white">Website development:</span>
              <a class="text-white">Online Service Group</a>
            </div>
          </div>
          <div class="text-white">
            <div>
              <div class="flex gap-2 items-center">
                <Phone />
                <span class="font-bold text-lg">Phone number:</span>
              </div>
              <a
                class="font-semibold text-xl hover:text-main transition-all duration-[.2s] cursor-pointer text-transparent-white"
                href="tel:+998991178899"
                >+998 99 117 88 99</a
              >
            </div>
            <div class="mt-4">
              <div class="flex gap-2 items-center">
                <Address />
                <span class="font-bold text-lg">Address:</span>
              </div>
              <a
                class="font-semibold text-xl hover:text-main transition-all duration-[.2s] cursor-pointer text-transparent-white"
                >OOO “World Pharma Forum” Tashkent, 95A Amir Temur Avenue</a
              >
            </div>
          </div>
          <div>
            <ul class="flex flex-col gap-3 font-bold text-[20px] text-white">
              <li class="menu-link">Program</li>
              <li class="menu-link">Participants</li>
              <li class="menu-link">Media</li>
            </ul>
          </div>
          <div
            class="rounded-xl bg-main py-[20px] px-[26px] flex flex-col justify-between"
          >
            <div>
              <div class="flex gap-2 items-center">
                <Clock class="size-5 text-white" />
                <span class="font-bold text-lg text-white"
                  >May 30-31, 2024</span
                >
              </div>
              <div class="flex gap-2 items-center">
                <Address />
                <span class="font-bold text-lg text-white"
                  >InterContinental Tashkent - Shakhrisabz Street 2</span
                >
              </div>
            </div>
            <div class="flex gap-2 text-white items-center cursor-pointer">
              <span class="font-bold text-xl">Register</span>
              <ArrowRight class="w-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-link {
  @apply cursor-pointer hover:text-main transition-all duration-[.2s];
}

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
