<script setup>

import invest from "@/assets/img/Coffee_X_Europa/Coffee_X_Europa-39.png";
import invest1 from "@/assets/img/Coffee_X_Europa/Coffee_X_Europa-37.png";
import invest2 from "@/assets/img/Coffee_X_Europa/Coffee_X_Europa-38.png";
import invest3 from "@/assets/img/Coffee_X_Europa/Coffee_X_Europa-41.png";

import express from "@/assets/img/exterior/Europa_express/Europa_express-45.png";
import lounge from "@/assets/img/exterior/Europa_Lounge/Europa_Lounge_-40.png";
import premium from "@/assets/img/exterior/CoffeeX_Europa_Premium/CoffeeX_Europa_Premium (11).png";

</script>
<template>
  <div class="mx-auto rounded-lg">
    <div
      class="h-[50svh] bg-[url('/assets/img/common/europa.png')] bg-cover"
    >
    <div
    class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold flex-col gap-2"
  >
    <BaseHeaderTitle />
    <h2 class="text-center text-3xl font-bold">
      Embracing European Coffee Elegance
    </h2>
  </div>
    </div>
    <h1 class="text-center py-6 text-4xl font-bold text-[#6F4E37]">
      CoffeeX Europa
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
           
        In Europe, coffee is a morning cup of joe, it’s a cultural expedition, a trendy beverage through the continent’s diverse coffee landscapes, from Gibraltar in the West to the Bosphorus in the East, from the artisanal brews of the North to the sun-drenched espressos of the Mediterranean. Every place gives a unique coffee experience, every place gives a tale of centuries of tradition and innovation. Coffee culture in Europe is rich. It’s a social ritual, a daily necessity. <br> <br>
        In CoffeeX Europa, we cater for all types and varieties of coffee beans produced in Europe. Taste our range of European brands of coffee, take part in Europe’s delicious coffee culture and get indulged in the treat served with our coffee. Visit CoffeeX Europa, where the rich smell of our coffee will  permeate your dreams.
          </p>

        </div>
        <div class="w-full lg:w-2/3 h-[500px]">
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

    <div class="container py-6 lg:flex flex-wrap gap-5 justify-center">

      <div class="max-w-sm rounded overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="express" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Europa Express</div>
          <p class="text-gray-700 text-base py-4">Embark on a European adventure with CoffeeX Europa Express.</p>
          <nuxt-link
            to="/europa-express"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="lounge" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Europa Lounge</div>
          <p class="text-gray-700 text-base py-4">Immerse yourself in European elegance at CoffeeX Europa Lounge.</p>
          <nuxt-link
            to="/europa-lounge"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="premium" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Europa Premium</div>
          <p class="text-gray-700 text-base py-4">Savor the essence of Europe with CoffeeX Europa Premium.</p>
          <nuxt-link
            to="/europa-premium"
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
