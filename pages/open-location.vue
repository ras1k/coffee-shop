<script setup>
import Coffee from "@/assets/img/equipments/E80.webp";
import pastry from "@/assets/img/equipments/M4.webp";
import tart3 from "@/assets/img/equipments/Q1.webp";
import tart4 from "@/assets/img/equipments/wave.webp";
import arabica from "/assets/img/location/arabica.jpg";
import america from "/assets/img/location/america.jpg";
import africa from "/assets/img/location/africa.jpg";
import asia from "/assets/img/location/asia.jpg";
import europa from "/assets/img/location/europa.jpg";
const rewards = ref([
  {
    id: 1,
    name: "CoffeeX Arabica",
    description: "Indulge in the rich aroma and smooth taste of Arabica Coffee, where every sip is an experience of pure elegance.",
    points: 500,
    image: arabica,
  },
  {
    id: 2,
    name: "CoffeeX America",
    description: "America's Finest Beans: From the Heart of the Americas to Your Cup!",
    points: 700,
    image: america,
  },
  {
    id: 3,
    name: "CoffeeX Europa",
    description: "Europa Coffee: A Taste of European Excellence in Every Cup.",
    points: 600,
    image: europa,
  },
  {
    id: 4,
    name: "CoffeeX Africa",
    description: "Experience the untamed flavors of Africa in every sip of our coffee beans.",
    points: 1000,
    image: europa,
  },
  {
    id: 5,
    name: "CoffeeX Asia",
    description: "Discover the Richness of Asia in Every Sip.",
    points: 500,
    image: asia,
  },
]);
</script>
<template>
  <div class=" mx-auto rounded-lg">
    <div
      class="h-[40svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
    <div class="container">
      <h1 class="text-center py-6 text-4xl font-bold text-[#6F4E37]">
        Open A Location
      </h1>
      <p class="text-lg text-center font-semibold">
        Are you ready to embark on the exciting journey of opening your own coffee shop? CoffeeX offers a variety of franchise models designed to suit your unique vision and preferences. Whether you're passionate about showcasing the flavors of Coffee Arabica, exploring the diverse tastes of Coffee Africa, or embracing the rich coffee culture of Coffee Indo-Pak, we have a model that's perfect for you. Here's a closer look at our five types of CoffeeX models
      </p>
      <div class="container py-6 lg:flex flex-wrap gap-5 justify-center">
        <div
          
          class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg"
        >
          <div class="w-[400px]">
            <img class="w-full" :src="arabica" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 pb-6">CoffeeX Arabica</div>
            <p class="text-gray-700 text-base py-4">Indulge in the rich aroma and smooth taste of Arabica Coffee.</p>
            <!-- <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p> -->
            <nuxt-link
              to="/arabica"
              class="px-5 py-1.5 btn"
            >
              View More
            </nuxt-link>
          </div>
        </div>
        <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
          <div class="w-[400px]">
            <img class="w-full" :src="america" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 pb-6">CoffeeX America</div>
            <p class="text-gray-700 text-base py-4">America's Finest Beans: From the Heart of the Americas to Your Cup!</p>
            <!-- <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p> -->
            <nuxt-link
              to="/america"
              class="px-5 py-1.5 btn"
            >
              View More
            </nuxt-link>
          </div>
        </div>
        <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
          <div class="w-[400px]">
            <img class="w-full" :src="europa" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 pb-6">CoffeeX Europa</div>
            <p class="text-gray-700 text-base py-4">Europa Coffee: A Taste of European Excellence in Every Cup.</p>
            <!-- <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p> -->
            <nuxt-link
              to="/europa"
              class="px-5 py-1.5 btn"
            >
              View More
            </nuxt-link>
          </div>
        </div>
        <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
          <div class="w-[400px]">
            <img class="w-full" :src="asia" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 pb-6">CoffeeX Asia</div>
            <p class="text-gray-700 text-base py-4">Asian Coffee: Discover the Richness of Asia in Every Sip</p>
            <!-- <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p> -->
            <nuxt-link
              to="/asia"
              class="px-5 py-1.5 btn"
            >
              View More
            </nuxt-link>
          </div>
        </div>
        <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
          <div class="w-[400px]">
            <img class="w-full" :src="africa" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 pb-6">CoffeeX Africa</div>
            <p class="text-gray-700 text-base py-4">Experience the untamed flavors of Africa in every sip of our coffee beans.</p>
            <!-- <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p> -->
            <nuxt-link
              to="/africa"
              class="px-5 py-1.5 btn"
            >
              View More
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
