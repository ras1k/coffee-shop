<script setup>
import Coffee from "@/assets/img/equipments/E80.webp";
import pastry from "@/assets/img/equipments/M4.webp";
import tart3 from "@/assets/img/equipments/Q1.webp";
import tart4 from "@/assets/img/equipments/wave.webp";
const rewards = ref([
  {
    id: 1,
    name: "Mahlkönig E80 Supreme Gbw Espresso Grinder",
    description: "Redeem this reward for a free coffee of your choice.",
    points: 500,
    image: Coffee,
  },
  {
    id: 2,
    name: "Puqpress M4 Automatic TamperFree Tart",
    description: "Get a discount on any merchandise purchase.",
    points: 700,
    image: pastry,
  },
  {
    id: 3,
    name: "Puqpress Q1 Gen 5 Automatic Tamper",
    description: "Get a discount on any merchandise purchase.",
    points: 600,
    image: tart3,
  },
  {
    id: 4,
    name: "Nuova Simonelli Aurelia Wave Espresso Machine",
    description: "Get a discount on any merchandise purchase.",
    points: 1000,
    image: tart4,
  },
  {
    id: 1,
    name: "Mahlkönig E80 Supreme Gbw Espresso Grinder",
    description: "Redeem this reward for a free coffee of your choice.",
    points: 500,
    image: Coffee,
  },
  {
    id: 2,
    name: "Puqpress M4 Automatic TamperFree Tart",
    description: "Get a discount on any merchandise purchase.",
    points: 700,
    image: pastry,
  },

]);
</script>
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
      Equipments
    </h1>
    <div class="container py-6 lg:flex flex-wrap gap-5 justify-center">
      <div
        v-for="reward in rewards"
        :key="reward.id"
        class="max-w-sm rounded bg-gray-100 overflow-hidden shadow-lg"
      >
        <div class="w-[400px]">
          <img class="w-full" :src="reward.image" :alt="reward.name" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ reward.name }}</div>
          <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p>
        </div>
<div class="flex items-center justify-center text-center py-4">
  <button class="px-5 py-1.5 btn w-2/3">
    Add to Cart
  </button>
</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>

