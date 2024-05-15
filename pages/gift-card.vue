<script setup>
import Coffee from "@/assets/img/giftcard/coffee.jpg";
import Coffee2 from "@/assets/img/giftcard/coffee.webp";
import Coffee3 from "@/assets/img/giftcard/coffee2.jpg";
import merc from "@/assets/img/giftcard/merc.jpg";
const giftCards = ref([
  {
    id: 1,
    name: "Coffee Lover Gift Card",
    description:
      "Treat your loved ones to their favorite coffee drinks! Because its great",
    price: 25,
    image: Coffee,
  },
  {
    id: 2,
    name: "Merchandise Gift Card",
    description:
      "Let them choose from our collection of coffee-themed merchandise.",
    price: 50,
    image: merc,
  },
  {
    id: 3,
    name: "Coffee Subscription Gift Card",
    description:
      "Give the gift of coffee every month with our subscription service.",
    price: 100,
    image: Coffee2,
  },
]);

const purchaseGiftCard = (card) => {
  console.log(`Purchasing ${card.name} gift card for $${card.price}`);
};
</script>
<template>
  <div class="mx-auto">
    <div
      class="h-[40svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
    <div
      class="container py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="card in giftCards"
        :key="card.id"
        class="rounded-lg overflow-hidden shadow-lg relative bg-white"
      >
        <img
          class="w-full h-48 object-cover object-center"
          :src="card.image"
          :alt="card.name"
        />
        <div class="p-6">
          <h2 class="text-lg font-semibold">{{ card.name }}</h2>
          <p class="text-gray-600 mb-4">{{ card.description }}</p>
          <p class="text-gray-700 text-lg font-semibold">${{ card.price }}</p>
          <button
            @click="purchaseGiftCard(card)"
            class="px-10 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 font-semibold text-white absolute bottom-4 right-4"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
