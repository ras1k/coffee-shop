<script setup>
import express from "@/assets/img/exterior/Africa Express/Africa Express (9).png";
import lounge from "@/assets/img/exterior/Africa_Lounge/Africa Lounge Images (9).png";
import premium from "@/assets/img/exterior/Africa_Premium/Coffee_X_Africa Premium-25.png";

import invest from "@/assets/img/Coffee_X-Africa/Coffee_X_Africa-46.png";
import invest1 from "@/assets/img/Coffee_X-Africa/166601.jpg";
import invest2 from "@/assets/img/Coffee_X-Africa/Coffee_X_Africa-45.png";
import invest3 from "@/assets/img/Coffee_X-Africa/2015035.jpg";

</script>
<template>
  <div class="mx-auto rounded-lg">
    <div
      class="h-[50svh] bg-[url('/assets/img/common/africa.png')] bg-cover"
    >
    <div
    class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold flex-col gap-2"
  >
    <BaseHeaderTitle />
    <h2 class="text-center text-3xl font-bold">
      A Journey through African Coffee Heritage
    </h2>
  </div>
    </div>
    <h1 class="text-center py-6 text-4xl font-bold text-[#6F4E37]">
      CoffeeX Africa
    </h1>

    <section id="investment-opportunity" class="py-12">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-5 items-start justify-center">
        
        <div
        class="w-full flex flex-col items-start justify-center gap-3 lg:w-2/3"
        >
        <div class="flex gap-2">
          <img
            :src="invest1"
            alt="Coffee Exploration"
            class="rounded-lg w-1/3"
          />
          <img
            :src="invest2"
            alt="Coffee Exploration"
            class="w-1/3 rounded-lg"
          />
          <img
            :src="invest3"
            alt="Coffee Exploration"
            class="w-1/3 rounded-lg"
          />
        </div>
        <p class="text-justify text-lg font-semibold">
          Originating from the southern Red Sea region (modern-day Ethiopia and Yemen) it wasn’t until the 9th century that coffee began to spread beyond Ethiopia, reaching the surrounding countries of Yemen, Egypt, and the Middle East. The Portuguese established coffee plantation in the 16th century and other European colonies followed suit. Coffee quickly became an important crop providing jobs and business opportunities and took over significant role in shaping the African continent’s cultural and economic landscape. Coffee is mostly popular among the elites, but consumption in Africa in general is on the rise. Today, Africa remains a critical supplier of high-quality beans to many world-renowned roasters.
          <br />
          <br />
          In CoffeeX Africa, we cater for premium beans from boasting key producers such as Ethiopia, Uganda, Ivory Coast, Tanzania, Kenya, Burundi, Rwanda, and the Democratic Republic of Congo. Visit us and get the produces and tastes of African coffee and immerse in imagination that every cup will tell you about the African history and culture.
        </p>
      </div>
      <div class="w-full lg:w-2/3 h-[610px]">
            <img
              :src="invest"
              alt="Coffee Exploration"
              class="w-full rounded-lg h-full"
            />
      </div>
    </div>
  </div>
  </section>
  <div class="container text-black py-4">
    <hr class="border-black">
  </div>
  <h4 class="container flex items-center justify-center text-2xl font-semibold">Under this model there are 3 types of shop categories:</h4>
    <p class="container text-xl text-center font-medium">
      
    </p>
    <div class="container py-6 lg:flex flex-wrap gap-5 justify-center">

      <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="express" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Africa Express</div>
          <p class="text-gray-700 text-base py-4">Embark on an adventure through Africa's vibrant flavors with CoffeeX Africa Express.</p>
          <nuxt-link
            to="/africa-express"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="lounge" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Africa Lounge</div>
          <p class="text-gray-700 text-base py-4">Escape to the heart of Africa's essence at CoffeeX Africa Lounge.</p>
          <nuxt-link
            to="/africa-lounge"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="premium" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Africa Premium</div>
          <p class="text-gray-700 text-base py-4">Indulge in the rich heritage of Africa with CoffeeX Africa Premium.</p>
          <nuxt-link
            to="/africa-premium"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped></style>
