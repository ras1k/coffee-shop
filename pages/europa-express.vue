<script setup>
import arabica from "/assets/img/location/arabica.jpg";
import america from "/assets/img/location/america.jpg";
import africa from "/assets/img/location/africa.jpg";
import asia from "/assets/img/location/asia.jpg";
import europa from "/assets/img/location/europa.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import express1 from "@/assets/img/exterior/Europa_express/Europa_express-45.png";
import express2 from "@/assets/img/exterior/Europa_express/Europa_express-42.png";
import express3 from "@/assets/img/exterior/Europa_express/Europa_express-52.png";
import express4 from "@/assets/img/exterior/Europa_express/Europa_express-50.png";
import video from "@/assets/img/video/Europa Express_1.mp4";

const modules = [Autoplay];

</script>
<template>
  <div class="">
    <swiper
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      @slideChange="onSlideChange"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
      :modules="modules"
      class=""
    >
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="express1" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Europa Express</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Europa Coffee: A Taste of European Excellence in Every Cup.
              <!-- Indulge in the rich aroma and smooth taste of Arabica Coffee, <br> where every sip is an experience of pure elegance. -->
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="express2" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Europa Express</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Europa Coffee: A Taste of European Excellence in Every Cup.
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="express3" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Europa Express</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Europa Coffee: A Taste of European Excellence in Every Cup.
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="express4" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Europa Express</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Europa Coffee: A Taste of European Excellence in Every Cup.
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
        <p class="text-3xl font-semibold py-3">CoffeeX Europa Express</p>
        <p>
          Welcome to CoffeeX Europa Express, where the charm and sophistication of European coffee culture are served up with speed and convenience. Our Europa Express segment offers a quick and satisfying coffee experience infused with the timeless elegance of the Old World.

At CoffeeX Europa Express, we understand that life can be fast-paced, but that doesn't mean you have to sacrifice quality for speed. Our menu features a selection of European-inspired drinks crafted with precision and care, ensuring that every sip is a taste of European refinement.

From classic Italian espressos to decadent French lattes, our menu is designed to transport you to the charming cafes of Europe with each sip. Whether you're on your way to work, running errands, or simply in need of a caffeine boost, CoffeeX Europa Express has you covered.

Join us at CoffeeX Europa Express and experience the perfect blend of convenience and sophistication. Because great coffee should be enjoyed anytime, anywhere, without compromise.

          
        </p>
        <p class="py-4">
          <span class="pb-2 text-lg italic">Coffee Europa Beans Properties/Details</span> <br>
          <span>Coffee beans cultivated in Europe exhibit a range of properties influenced by the continent's diverse climates and growing conditions. Here are some key properties of European coffee beans:</span> <br> <br>
          
          <span class="font-semibold" >1.	Altitude of Cultivation:  </span> European coffee beans are typically cultivated at moderate to high altitudes, depending on the specific region. In countries like Italy and Portugal, coffee is grown at altitudes ranging from 500 to 1500 meters above sea level. This altitude provides optimal conditions for coffee cultivation, allowing for slower maturation and enhanced flavor development. <br>
          
          <span class="font-semibold">2.	Caffeine Percentage: </span> European coffee beans generally have a moderate to high caffeine content, depending on factors such as bean variety and processing methods. On average, European coffee beans have a caffeine percentage ranging from 1.2% to 1.8%, contributing to the stimulating effects of the beverage. <br>
          <span class="font-semibold">3.	Sugar Content: </span> The sugar content in European coffee beans varies depending on factors such as growing conditions and bean variety. European coffee beans typically have a sugar content ranging from 5% to 8%, contributing to their natural sweetness and flavor complexity. <br>
          <span class="font-semibold">4.	Flavor Profiles: </span> European coffee beans offer a wide range of flavor profiles, influenced by factors such as terroir, bean variety, and roasting techniques. Italian espresso blends, for example, are known for their rich and intense flavor profiles, with notes of chocolate, caramel, and nuts. Portuguese coffee beans often exhibit a smoother and more balanced flavor profile, with hints of fruit and spice. <br>
          <span class="font-semibold">5.	Processing Methods: </span> European coffee beans are processed using a variety of methods, including washed, natural, and semi-washed processing. Washed processing is common in European countries like Italy and Portugal, resulting in clean and bright flavors. Natural processing, on the other hand, can produce more intense and fruity flavor profiles. <br>
          <span class="font-semibold">6.	Environmental Factors:  </span> European coffee beans are cultivated in a variety of environmental conditions, ranging from the mild climates of southern Europe to the cooler climates of northern Europe. These diverse growing conditions contribute to the unique terroir of European coffee, influencing factors such as acidity, body, and flavor complexity. <br> <br>
          Overall, European coffee beans offer a diverse range of flavors and characteristics, reflecting the continent's rich coffee heritage and dedication to quality. From the bold and intense flavors of Italian espresso to the smooth and balanced profiles of Portuguese coffee, European coffee beans provide a satisfying drinking experience enjoyed by coffee enthusiasts around the world.

          <p class="text-xl italic py-2">Brands of CoffeeX Europa Beans.</p>
          The best brands of CoffeeX America out of many are:
          <ul class="font-semibold">
            <li>1.	Lavazza</li>
            <li>2.	Illy</li>
            <li>3.	Segafredo Zanetti</li>
            <li>4.	Julius Meinl</li>
            <li>5.	Dallmayr</li>
            <li>6.	Pellini Caffè</li>
            <li>7.	Kimbo</li>
            <li>8.	Musetti</li>
            <li>9.	Melitta</li>
            <li>10.	Pellini Espresso</li>
          </ul>
        </p>
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
