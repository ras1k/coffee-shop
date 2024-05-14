<script setup>
import arabica from "@/assets/img/exterior/2.jpg"
import arabica2 from "@/assets/img/exterior/4.jpg"
import arabica3 from "@/assets/img/exterior/5.jpg"
import arabica_video from "@/assets/img/video/arabica_lounge.mp4"
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
            <h1 class="text-5xl text-white font-bold">CoffeeX Arabica Lounge</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Relax and Revel
              <!-- Indulge in the rich aroma and smooth taste of Arabica Coffee, <br> where every sip is an experience of pure elegance. -->
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
            <h1 class="text-5xl text-white font-bold">CoffeeX Arabica Lounge</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Relax and Revel
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
            <h1 class="text-5xl text-white font-bold">CoffeeX Arabica Lounge</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Relax and Revel
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <video autoplay controls loop class="h-[100%] w-full border" >
            <source :src="arabica_video" type="video/mp4">
          </video>
      
        </div>
      </swiper-slide>

        <div class="container py-6 text-lg">
          <p class="text-3xl font-semibold py-3">CoffeeX Arabica lounge</p>
          <p>
            Welcome to CoffeeX Arabica Lounge, where we invite you to unwind, socialize, and savour the moment. Our Lounge segment is tailored to meet the needs of the coffee enthusiast, providing a welcoming and comfortable atmosphere for individuals to enjoy their favourite brews.

            At CoffeeX Arabica Lounge, we understand that coffee is more than just a beverage—it's a social experience. Whether you're catching up with friends, meeting a colleague for a business chat, or simply seeking a quiet moment of relaxation, our Lounge offers the perfect setting to enjoy quality coffee in good company.
            
            Our carefully curated menu features a variety of Arabica blends and speciality drinks, each crafted with precision to deliver a rich and flavorful experience. From classic espresso shots to indulgent lattes and refreshing cold brews, there's something to satisfy every palate at CoffeeX Arabica Lounge.
            
            Join us at CoffeeX Arabica Lounge and elevate your coffee experience to new heights. Whether you're a coffee aficionado or simply appreciate a good cup of joe, our Lounge is the perfect destination to indulge your senses and escape the hustle and bustle of everyday life.
          </p>
          <!-- <p class="pt-4">
            <span class="pb-2 italic font-semibold">Arabica Beans Properties/ Details</span> <br>
            High quality Arabica coffee has a slightly sweet taste with floral
            notes and fruity, berry aromas. Depending on personal taste, the
            fruity acidity and absence of bitterness may be perceived as
            pleasant. The intensity of these taste and aroma characteristics is
            largely determined by the degree of roasting. The lighter the roast,
            the stronger the emphasis on the fruity characteristics. The origin
            of the beans also determines the aroma. Depending on the region, the
            beans have different flavor profiles. Compared to Robusta beans,
            Arabica beans have lower acidity and bitterness, resulting in a more
            pleasant and well-balanced cup of coffee.<br />
            <br />
            Coffee Arabica is cultivated at a Higher altitudes (1000-2000m), it
            is a Delicate plant, high demands on soil and climate. They usually
            mature fast within about (9 months) of plantations. Which means that
            the period for pruning and fertilizing is longer. The largest
            producers are (sorted in left to right order of cultivation volume)
            <br />
            <br />
            Brazil, Colombia, Ethiopia, Honduras / Peru, Guatemala, Mexico,
            Nicaragua, El Salvador, Costa Rica.
            <br />
            <br />
          </p> -->
          <p class="py-4">
            <span class="pb-2">The species of beans of Coffea Arabica available from each countries are, </span> <br> <br>
            
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
    </swiper>
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
