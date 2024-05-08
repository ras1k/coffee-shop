<script setup>

import arabica1 from "@/assets/img/exterior/CoffeeX_Arabica_Express_01.jpg"
import arabica2 from "@/assets/img/exterior/3.jpg"
import arabica3 from "@/assets/img/exterior/premium/premium1.png"

import invest from "@/assets/img/Arabica/Coffee_X_Arabica_1-31.png";
import invest1 from "@/assets/img/Arabica/Coffee_X_Arabica_1-25.png";
import invest2 from "@/assets/img/Arabica/Coffee_X_Arabica_1-28.png";
import invest3 from "@/assets/img/Arabica/Coffee_X_Arabica_1-29.png";

</script>
<template>
  <div class="mx-auto rounded-lg">
    <div
      class="h-[50svh] bg-[url('/assets/img/Arabica/arabica.png')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold flex-col gap-2"
      >
        <BaseHeaderTitle />
        <h2 class="text-center text-3xl font-bold">
          Elevating Your Arabic Coffee Experience
        </h2>
      </div>
    </div>
    <h1 class="text-center py-6 text-4xl font-bold text-[#6F4E37]">
      CoffeeX Arabica
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
          Born in the region surrounding the southern Red Sea (modern-day Ethiopia and Yemen) coffee is now the second most traded commodity across the Arab countries. Coffee, deriving from the Arabic word ‘qahwa’ was originally believed to give humans special powers aiding concentration and spiritual intoxication while praying to God, is now a symbol of hospitality in the region. The coffee beans that were found all over the old Silk Routes are the same ones you can find today in your coffee cup. Each region in the Middle East has a different take on coffee, adjusting its herbs and spices to create entirely unique flavors. Coffee, in the Arab world, is part of its tradition and culture, and an inseparable part of family gatherings. Thanks to the Arab world for the coffee. <br> <br>

In CoffeeX Arabica, we cater for all types and varieties of coffee beans produced in the Middle Eastern Region and serve coffee of all tastes and flavors that are found in the Region along with the ambience of the Arabic culture to remind you of and take you back to the regional setting for the time being. Take a break in CoffeeX Arabica with your family and friends and enjoy the taste and aroma of our special coffee along with our Arab-style hospitality.
        </p>

      </div>
      <div class="w-full lg:w-2/3 h-[630px]">
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
    <!-- <p class="container text-xl font-medium text-justify">
      
Born in the region surrounding the southern Red Sea (modern-day Ethiopia and Yemen) coffee is now the second most traded commodity across the Arab countries. Coffee, deriving from the Arabic word ‘qahwa’ was originally believed to give humans special powers aiding concentration and spiritual intoxication while praying to God, is now a symbol of hospitality in the region. The coffee beans that were found all over the old Silk Routes are the same ones you can find today in your coffee cup. Each region in the Middle East has a different take on coffee, adjusting its herbs and spices to create entirely unique flavors. Coffee, in the Arab world, is part of its tradition and culture, and an inseparable part of family gatherings. Thanks to the Arab world for the coffee. <br> <br>

In CoffeeX Arabica, we cater for all types and varieties of coffee beans produced in the Middle Eastern Region and serve coffee of all tastes and flavors that are found in the Region along with the ambience of the Arabic culture to remind you of and take you back to the regional setting for the time being. Take a break in CoffeeX Arabica with your family and friends and enjoy the taste and aroma of our special coffee along with our Arab-style hospitality.
    </p> -->
    <h4 class="container flex items-center justify-center text-2xl font-semibold">Under this model there are 3 types of shop categories:</h4>
    <div class="container py-6 lg:flex flex-wrap gap-5 justify-center">

      <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="arabica1" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Arabica Express</div>
          <p class="text-gray-700 text-base py-4">Experience the rush of flavor with CoffeeX Arabica Express.</p>
          <!-- <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p> -->
          <nuxt-link
            to="/arabica-express"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded-lg flex flex-col justify-between overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="arabica2" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Arabica Lounge</div>
          <p class="text-gray-700 text-base py-4">Indulge in relaxation with every sip at CoffeeX Arabica Lounge.</p>
          <!-- <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p> -->
          <nuxt-link
            to="/arabica-lounge"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="arabica3" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Arabica Premium</div>
          <p class="text-gray-700 text-base py-4">Experience the pinnacle of coffee luxury with CoffeeX Arabica Premium.</p>
          <!-- <p class="text-gray-700 text-base">Price: ${{ reward.points }}</p> -->
          <nuxt-link
            to="/arabica-premium"
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
