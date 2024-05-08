<script setup>
import Coffee from "@/assets/img/cookey/blackCoffee.png";
import pastry from "@/assets/img/cookey/pastry.png";
import tart3 from "@/assets/img/cookey/tart3.png";
import affogato from "/assets/img/coffeebag/affogato.png";
import latte from "/assets/img/coffeebag/latte.png";
import frappe from "/assets/img/coffeebag/frappe.png";
const rewards = ref([
  {
    id: 1,
    name: "Free Coffee",
    description: "Redeem this reward for a free coffee of your choice.",
    points: 50,
    image: Coffee,
  },
  {
    id: 2,
    name: "Free Tart",
    description: "Get a discount on any merchandise purchase.",
    points: 100,
    image: tart3,
  },
  {
    id: 3,
    name: "Discount on Affogato Beans",
    description: "Redeem this reward for a free coffee of your choice.",
    points: 50,
    image: affogato,
  },
  {
    id: 4,
    name: "Free Latte",
    description: "Get a discount on any merchandise purchase.",
    points: 100,
    image: latte,
  },
  {
    id: 5,
    name: "Discount on Pastry",
    description: "Get a discount on any merchandise purchase.",
    points: 100,
    image: pastry,
  },
  {
    id: 6,
    name: "Discount on Frappe",
    description: "Get a discount on any merchandise purchase.",
    points: 100,
    image: frappe,
  },
]);
</script>
<template>
  <div class="mx-auto">
    <div
      class="h-[50svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
    <div class="container py-6 flex flex-wrap justify-center gap-8">
      <div
        v-for="reward in rewards"
        :key="reward.id"
        class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
      >
        <img class="w-full" :src="reward.image" :alt="reward.name" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ reward.name }}</div>
          <p class="text-gray-700 text-base">{{ reward.description }}</p>
          <p class="text-gray-700 text-base">
            Points required: {{ reward.points }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
