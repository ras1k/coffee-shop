<script setup>
import invest from "@/assets/img/AMERICA/Coffee_X_AMERICA_1-32 (3).png";
import invest1 from "@/assets/img/AMERICA/Coffee_X_AMERICA_1-32 (1).png";
import invest2 from "@/assets/img/AMERICA/Coffee_X_AMERICA_1-32 (2).png";
import invest3 from "@/assets/img/AMERICA/Coffee_X_AMERICA_1-32 (4).png";

import premium from "@/assets/img/exterior/CoffeeX-america-premium/Coffee_X-03.png";
import lounge2 from "@/assets/img/exterior/America_Lounge/America Lounge-46.png";
import express from "@/assets/img/exterior/America_Express/EXPRESS-25.png";

</script>
<template>
  <div class="mx-auto rounded-lg">
    <div class="h-[50svh] bg-[url('/assets/img/common/america.png')] bg-cover">
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold flex-col gap-2"
      >
        <BaseHeaderTitle />
        <h2 class="text-center text-3xl font-bold">
          Exploring the Essence of the Americas
        </h2>
      </div>
    </div>
    <h1 class="text-center py-6 text-4xl font-bold text-[#6F4E37]">
      CoffeeX America
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
              Coffee was brought to America by the British in the mid-17th
              century. Coffee houses were popular, but it wasn’t until the
              Boston Party in 1773 that America’s coffee culture was changed
              forever: a mass changeover from tea to coffee, and the demand for
              coffee flourished. Today, Americans are fueled by coffee every
              morning. Unlike other coffee cultures where coffee is a part of
              relaxation and hospitality, here in America coffee is also all
              about speed and quantity. <br />
              <br />
              Coffee’s journey to South America began in the 18th century,
              transforming the social and economic fabric of the continent. From
              the misty mountains of Colombia to the bustling streets of Brazil,
              coffee is more than a drink—it’s a ritual, a tradition, and a way
              of life. <br> <br>
              In CoffeeX America, we focus on providing a specialized
              coffee experience. We offer a a range of flavors to make our
              guests feel at home. Discover the diverse flavors of coffee,
              influenced by the region’s varied climates and terrains.
            </p>
          </div>
          <div class="w-full lg:w-2/3 h-[575px]">
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

    <h4
      class="container flex items-center justify-center text-2xl font-semibold"
    >
    Under this model there are 3 types of shop categories:
    </h4>
    <div class="container py-6 lg:flex flex-wrap gap-5 justify-center">
      <div class="max-w-sm rounded overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="express" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX America Express</div>
          <p class="text-gray-700 text-base py-4">
            Embark on a journey of flavor with CoffeeX America Express.
          </p>
          <nuxt-link
            to="/america-express"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="lounge2" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX America Lounge</div>
          <p class="text-gray-700 text-base py-4">
            Relax and savor the taste of America with CoffeeX America Lounge.
          </p>
          <nuxt-link
            to="/america-lounge"
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
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX America Premium</div>
          <p class="text-gray-700 text-base py-4">
            Discover the richness of America in every cup with CoffeeX America
            Premium.
          </p>
          <nuxt-link
            to="/america-premium"
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
