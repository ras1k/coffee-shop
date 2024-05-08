<script setup>
import img1 from "/assets/img/coffeebag/1.jpg";
import img2 from "/assets/img/coffeebag/2.jpg";
import img3 from "/assets/img/coffeebag/3.webp";
import img4 from "/assets/img/coffeebag/4.jpeg";
import img5 from "/assets/img/coffeebag/5.jpg";
import img6 from "/assets/img/coffeebag/6.avif";
import img7 from "/assets/img/coffeebag/7.jpg";
import img8 from "/assets/img/coffeebag/8.jpg";
import img9 from "/assets/img/coffeebag/9.jpg";
const rewards = ref([
  {
    id: 1,
    name: "Blend Coffee - 10 LB",
    description: "Redeem this reward for a free coffee of your choice.",
    points: 500,
    image: img1,
  },
  {
    id: 2,
    name: "Premium black Tea NO SPICE - 10 LB",
    description: "Get a discount on any merchandise purchase.",
    points: 700,
    image: img2,
  },
  {
    id: 3,
    name: "Dark Roast Beans - 7 LB",
    description: "Get a discount on any merchandise purchase.",
    points: 600,
    image: img3,
  },
  {
    id: 4,
    name: "Medium Roast Coffee - 9 LB",
    description: "Get a discount on any merchandise purchase.",
    points: 1000,
    image: img4,
  },
  {
    id: 5,
    name: "Green Yemeni Beans - 10 LB",
    description: "Get a discount on any merchandise purchase.",
    points: 1000,
    image: img5,
  },
  {
    id: 6,
    name: "Turkish Blend - 10 LB",
    description: "Get a discount on any merchandise purchase.",
    points: 1000,
    image: img6,
  },
  {
    id: 7,
    name: "Qishr/Husks - 10 LB",
    description: "Get a discount on any merchandise purchase.",
    points: 1000,
    image: img7,
  },
  {
    id: 8,
    name: "Jubani Blend - 10 LB",
    description: "Get a discount on any merchandise purchase.",
    points: 1000,
    image: img8,
  },
  {
    id: 9,
    name: "Saudi Blend - 10 LB",
    description: "Get a discount on any merchandise purchase.",
    points: 1000,
    image: img9,
  },
]);
</script>
<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
</style>
<template>
  <div class="mx-auto rounded-lg">
    <div
      class="h-[50svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
    <h1 class="text-center py-6 text-4xl font-bold text-[#6F4E37]">
      Wholesale Coffee – Wholesale
    </h1>
    <div class="container py-6 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
      <div
        v-for="reward in rewards"
        :key="reward.id"
        class="max-w-sm rounded overflow-hidden shadow-lg relative"
        @mouseover="reward.hover = true"
        @mouseleave="reward.hover = false"
      >
        <div class="h-[350px]">
          <img class="w-full" :src="reward.image" :alt="reward.name" />
          <button
            v-if="reward.hover"
            class="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-2 w-1/2 cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-green-400 hover:to-blue-500 font-semibold text-white"
          >
            Buy
          </button>
          <div
            v-if="reward.hover"
            class="absolute inset-0 bg-black opacity-25"
          ></div>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ reward.name }}</div>
          <!-- <p class="text-gray-700 text-base">{{ reward.description }}</p> -->
          <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
