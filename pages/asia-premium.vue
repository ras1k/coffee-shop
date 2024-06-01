<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import asia from "@/assets/img/exterior/asia-premium/Asia Premium Images (1).png";
import asia2 from "/assets/img/exterior/asia-premium/Asia Premium Images (4).png";
import asia3 from "/assets/img/exterior/asia-premium/Asia Premium Images (6).png";
import asia4 from "/assets/img/exterior/asia-premium/Asia Premium Images (7).png";


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
        <img :src="asia" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX Asia Premium</h1>
          <h2 class="text-3xl text-white font-bold">
            Discover the Richness of Asia in Every Sip
          </h2>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="">
      <div class="h-[70vh] w-full relative">
        <img :src="asia2" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX Asia Premium</h1>
          <h2 class="text-3xl text-white font-bold">
            Discover the Richness of Asia in Every Sip
          </h2>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="">
      <div class="h-[70vh] w-full relative">
        <img :src="asia3" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX Asia Premium</h1>
          <h2 class="text-3xl text-white font-bold">
            Discover the Richness of Asia in Every Sip
          </h2>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="">
      <div class="h-[70vh] w-full relative">
        <img :src="asia4" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX Asia Premium</h1>
          <h2 class="text-3xl text-white font-bold">
            Discover the Richness of Asia in Every Sip
          </h2>
        </div>
      </div>
    </swiper-slide>
  </swiper>
      <div class="container py-6 text-lg">
        <p class="text-3xl font-semibold py-3">CoffeeX Asia Premium</p>
        <p>
          In the Indo-Pak region, coffee has a relatively shorter history compared to other regions, but it has still left a notable mark. While tea remains the dominant beverage in the Indo-Pak region, coffee has gained popularity in recent decades, especially among urban populations and in upscale cafes and restaurants. <br>
          Coffee cultivation in the Indo-Pak region primarily takes place in countries like India and Pakistan, The first coffee plantation in India was established in the state of Karnataka during the 17th century by Baba Budan, a Sufi saint who brought coffee beans from Yemen. This region, known as Chikmagalur, soon became a hub for coffee cultivation in India. Indian coffee is known for its unique flavor profiles, influenced by factors such as altitude, soil, and climate. Similarly, Pakistan has also seen a rise in coffee consumption, with specialty coffee shops and cafes becoming increasingly common in urban centers like Karachi, Lahore, and Islamabad. <br>
          Although coffee may not have the same longstanding cultural heritage in the Indo-Pak region as it does in other parts of the world, its growing popularity underscores its potential as a beverage of choice for a new generation of coffee enthusiasts. As coffee culture continues to evolve in the Indo-Pak region, it reflects the region's changing tastes and preferences, adding to the rich tapestry of global coffee consumption. <br>
          
          
        </p>
        <p class="py-4">
          <span class="pb-2 text-xl italic">Coffee Indo-Pak Beans Properties/Details </span> <br>
          <p>Coffee beans cultivated in South-East Asia possess unique properties influenced by the region's tropical climate and diverse growing conditions. Here are some key properties of South-East Asian coffee beans:</p> <br> <br>
          
          <span class="font-semibold" >1.	Altitude of Cultivation:  </span> South-East Asian coffee beans are processed using a variety of methods, including wet processing (washed), dry processing (natural), and semi-washed processing. Each method can impart unique flavors and characteristics to the beans, with wet processing typically resulting in cleaner and brighter flavors, while dry processing can produce more intense and fruity profiles. <br>
          
          <span class="font-semibold">2.	Caffeine Percentage: </span> South-East Asian coffee beans offer a wide range of flavor profiles, influenced by factors such as terroir, bean variety, and processing methods. Indonesian coffee, for example, often exhibits earthy and spicy notes, with hints of chocolate and tobacco. Vietnamese coffee is known for its bold and robust flavor, with a slightly bitter taste and smooth finish. <br>
          <span class="font-semibold">3.	Sugar Content: </span> South-East Asia is known for producing both Arabica and Robusta coffee beans. Arabica beans are typically grown in higher-altitude regions and are prized for their nuanced flavors and acidity. Robusta beans, on the other hand, are commonly cultivated in lower-altitude areas and are known for their bold, earthy flavors and higher caffeine content. <br>
          <span class="font-semibold">4.	Flavor Profiles: </span> The sugar content in South-East Asian coffee beans varies depending on factors such as growing conditions and bean variety. While specific data may vary, South-East Asian coffee beans typically have a sugar content ranging from 5% to 8%, contributing to their natural sweetness and flavor complexity.<br>
          <span class="font-semibold">5.	Processing Methods: </span> South-East Asian coffee beans generally have a moderate to high caffeine content, depending on factors such as bean variety and processing methods. Robusta beans, which are commonly grown in the region, tend to have a higher caffeine content compared to Arabica beans. <br>
          <span class="font-semibold">6.	Environmental Factors:  </span> South-East Asian coffee beans are processed using a variety of methods, including wet processing (washed), dry processing (natural), and semi-washed processing. Each method can impart unique flavors and characteristics to the beans, with wet processing typically resulting in cleaner and brighter flavors, while dry processing can produce more intense and fruity profiles. <br> <br>

          South-East Asian coffee beans are processed using a variety of methods, including wet processing (washed), dry processing (natural), and semi-washed processing. Each method can impart unique flavors and characteristics to the beans, with wet processing typically resulting in cleaner and brighter flavors, while dry processing can produce more intense and fruity profiles.
          
          <p class="text-xl italic py-2">Brands of CoffeeX Europa Beans.</p>
          The best brands of CoffeeX America out of many are:
          <ul class="font-semibold">
            <li>1.	Old Town White Coffee: </li>
            <li>2.	Trung Nguyen Coffee</li>
            <li>3.	Café de Lao</li>
            <li>4.	Kopi Kenangan</li>
            <li>5.	Boncafé</li>
            <li>6.	Araku Coffee</li>
            <li>7.	Blue Tokai Coffee Roasters</li>
            <li>8.	VietCafe</li>
            <li>9.	Tad Coffee</li>
            <li>10.	Thai Highland Coffee</li>
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
