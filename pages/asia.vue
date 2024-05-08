<script setup>

import arabica from "/assets/img/location/arabica.jpg";
import america from "/assets/img/location/america.jpg";
import europa from "/assets/img/location/europa.jpg";

import invest from "@/assets/img/Coffee_X_Asia/Coffee_X_Asia-54.png";
import invest1 from "@/assets/img/Coffee_X_Asia/Coffee_X_Asia-49.png";
import invest2 from "@/assets/img/Coffee_X_Asia/Coffee_X_Asia-51.png";
import invest3 from "@/assets/img/Coffee_X_Asia/Coffee_X_Asia-53.png";

</script>
<template>
  <div class="mx-auto rounded-lg">
    <div
      class="h-[50svh] bg-[url('/assets/img/interior/7.jpg')] bg-cover"
    >
    <div
    class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold flex-col gap-2"
  >
    <BaseHeaderTitle />
    <h2 class="text-center text-3xl font-bold">
      A Fusion of South Asian Coffee Culture
    </h2>
  </div>
    </div>
    <h1 class="text-center py-6 text-4xl font-bold text-[#6F4E37]">
      CoffeeX Asia
    </h1>

    <section id="investment-opportunity" class="py-12">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-5 items-start justify-center">
        
        <div class="w-full flex flex-col items-start justify-center gap-3 lg:w-2/3">
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
           
          Coffee first came in Asia in the 17th century when Baba Budan, an Indian revered Sufi, brough seven coffee beans from Makkah after pilgrimage and planted those beans in Karnataka, marking the beginning of coffee cultivation in the country and laying foundation for growth of coffee in Asia. The spread of coffee in Asia was further propelled by the forces of colonization. Recognizing the potential of the region’s fertile lands for coffee cultivation European colonizers established large-scale coffee plantations in their colonies transforming the landscape and economy of these regions. <br> <br>
          In Asia, several countries are now making significant contributions to the global coffee industry. Each of these countries has its unique coffee culture, production methods, and coffee bean characteristics. Well-proliferated coffee shops and cafes in urban centers have become social hubs where people gather to enjoy a cup of coffee, socialize, or work. The trend is on the rise. <br> 
          In CoffeeX Asia, we cater for diverse coffee flavors representing vibrant Asian coffee cultures. Visit our CoffeeX Asia, surely, we’ll captivate your taste buds.
          </p>
        </div>
        <div class="w-full lg:w-2/3 h-[600px]">
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
          <img class="w-full" :src="arabica" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Asia Express</div>
          <p class="text-gray-700 text-base py-4">
            Journey through Asia's flavors with CoffeeX Asia Express.
          </p>
          <nuxt-link
            to="/asia-express"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="america" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Asia Lounge</div>
          <p class="text-gray-700 text-base py-4">
            Experience the serenity of Asia at CoffeeX Asia Lounge.
          </p>
          <nuxt-link
            to="/asia-lounge"
            class="px-5 py-1.5 btn"
          >
            View More
          </nuxt-link>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden bg-white shadow-lg">
        <div class="w-[400px]">
          <img class="w-full" :src="europa" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 pb-6">CoffeeX Asia Premium</div>
          <p class="text-gray-700 text-base py-4">
            Unlock the rich tapestry of flavors with CoffeeX Asia Premium.
          </p>
          <nuxt-link
            to="/asia-premium"
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
