<script setup>
import arabica from "/assets/img/exterior/CoffeeX_Arabica_Express_01.jpg"
import arabica1 from "/assets/img/exterior/CoffeeX_Arabica_Express_02.jpg"
import arabica2 from "/assets/img/exterior/CoffeeX_Arabica_Express_03.jpg"
import arabica3 from "/assets/img/exterior/CoffeeX_Arabica_Express_04.jpg"
import video from "/assets/img/video/arabica_express.mp4"

import "swiper/css"
import "swiper/css/navigation"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

const modules = [Autoplay];

</script>
<template>
  <div class="">
    <swiper
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
       
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
      :modules="modules"
      class=""
    >
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="arabica" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Arabica Express</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Fast and Flavorful
              <!-- Indulge in the rich aroma and smooth taste of Arabica Coffee, <br> where every sip is an experience of pure elegance. -->
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="arabica1" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Arabica Express</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Fast and Flavorful
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="arabica2" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Arabica Express</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Fast and Flavorful
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="arabica3" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Arabica Express</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Fast and Flavorful
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <video autoplay controls loop class="h-[100%] w-full border" >
            <source :src="video" type="video/mp4">
          </video>
      
        </div>
      </swiper-slide>
    </swiper>
        <div class="container py-6 text-lg">
          <p class="text-3xl font-semibold py-3">CoffeeX Arabica Express</p>
          <p>
            Welcome to CoffeeX Arabica Express, where great coffee meets affordability. Our Arabica Express segment is designed to provide a budget-friendly option for coffee lovers who refuse to compromise on quality. We understand that exceptional coffee shouldn't come with a hefty price tag, which is why we've curated a selection of Arabica beans that deliver outstanding flavor without breaking the bank.

            At CoffeeX Arabica Express, we believe that everyone deserves access to delicious coffee experiences. Whether you're grabbing a quick pick-me-up on your way to work or simply looking to indulge in a flavorful cup without overspending, our Express segment has you covered. Our commitment to quality remains unwavering, ensuring that each sip of our affordable brews is a satisfying and memorable one.
            
            Join us at CoffeeX Arabica Express and discover a world of great coffee that won't cost you a fortune. Because enjoying a premium coffee experience shouldn't have to come with a premium price tag.
          </p>
          <p class="py-4">
            <span class="pb-2">The species of beans of Coffea Arabica available from each countries are: </span> <br> <br>
            
            <span class="font-semibold" >•	Ethiopian Yirgacheffe:</span> Renowned for its floral aroma, bright acidity, and fruity notes, Ethiopian Yirgacheffe is one of the most sought-after Arabica coffee beans in the world. <br>
            
            <span class="font-semibold">•	Colombian Supremo:</span> Grown in the high-altitude regions of Colombia, Colombian Supremo beans are known for their well-balanced flavor, medium body, and mild acidity. <br>
            <span class="font-semibold">•	Guatemalan Antigua:</span> Hailing from the Antigua region of Guatemala, these beans are prized for their complex flavor profile, featuring notes of chocolate, spice, and fruit. <br>
            <span class="font-semibold">•	Kenyan AA:</span> Kenyan AA beans are esteemed for their bold and bright flavor profile, characterized by wine-like acidity, fruity sweetness, and floral aromas. <br>
            The Climate for the beans are 15-25°C / CoffeeX Arabica needs moderate climate. <br> <br>
            The Caffeine percentage is low with 0.8% to 1.5% <br> <br>
            The Beans contain a good oil percentage 15-17% / higher percentage leads to a smoother texture. <br> <br>
            The sugar percentage is about 6% to 9% / Arabica is the "sweeter" coffee bean. <br> <br>
            
            <p class="text-xl italic font- py-2">Brands of CoffeeX Arabica Beans.</p>
            The best brands of CoffeeX Arabica out of many are:
            <ul class="font-semibold">
              <li>1. Caffe Diemme - Oro</li>
              <li>2. Caffè New York </li>
              <li>3. Goldschmidt - San Cristoba</li>
              <li>4. Wild Coffee from Ethiopia</li>
              <li>5. Caffè Altamura Gold</li>
              <li>6. Castorino – Biologica</li>
            </ul>
          </p>
          <div class="flex items-center justify-center">
            <p class="text-4xl font-semibold">Make an 
              <nuxt-link to="/contact" class="text-blue-500 hover:underline hover:text-emerald-500 underline-offset-2">
                Appointment
              </nuxt-link>   
            </p>
          </div>
        </div>

     
      
      
     
      
      <!-- <swiper-slide v-for="(item, index) in coffeeData" class="">
        <div class="h-[70vh] w-full relative">
          <img :src="coffee2" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">
              {{ item.name }}
            </h1>
            <h2 class="text-3xl text-white font-bold">
              {{ item.subTitle }}
            </h2>
          </div>
        </div>

        <div class="container py-20 text-lg">
          <div class="text-4xl font-bold py-5">{{ item.name }}</div>
          <p>{{ item.description }}</p>
        </div>
      </swiper-slide> -->
   
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
