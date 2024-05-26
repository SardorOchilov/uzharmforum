<script setup lang="ts">
const participants = computed(() => [
  {
    id: 1,
    img: 'https://admin.uzpharmforum.com/media/post/images/Rectangle-5-(1).png',
    text: 'Ministry of Investment, Industry and Trade of the Republic of Uzbekistan',
  },
  {
    id: 2,
    img: 'https://admin.uzpharmforum.com/media/post/images/Rectangle-5-(1).png',
    text: 'Ministry of Health of the Republic of Uzbekistan',
  },
  {
    id: 3,
    img: 'https://admin.uzpharmforum.com/media/post/images/1681542012040358.png',
    text: 'Agency for the Development of the Pharmaceutical industry under the Ministry of Health of the Republic of Uzbekistan',
  },
  {
    id: 4,
    img: 'https://admin.uzpharmforum.com/media/post/images/1681542051136013.png',
    text: 'State Tax Committee',
  },
  {
    id: 5,
    img: 'https://admin.uzpharmforum.com/media/post/images/1681542087024837.png',
    text: 'State Customs Committee',
  },
  {
    id: 6,
    img: 'https://admin.uzpharmforum.com/media/post/images/1681542123195816.png',
    text: 'Antimonopoly Committee of Uzbekistan',
  },
  {
    id: 7,
    img: 'https://admin.uzpharmforum.com/media/post/images/1681542165626292.png',
    text: 'Agency for Intellectual Property of the Republic of Uzbekistan',
  },
])
</script>

<template>
  <div class="pt-[280px] pb-[160px]">
    <h3 class="text-[48px] font-bold text-dark-blue mb-6">Participants</h3>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
    >
      <div
        v-for="participant in participants"
        :key="participant.id"
        class="flex flex-col gap-7 p-6 rounded-xl bg-light-gray"
      >
        <div>
          <img :src="participant.img" />
        </div>
        <p class="font-semibold text-dark-blue text-xl">
          {{ participant.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
