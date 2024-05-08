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
import lounge1 from "@/assets/img/exterior/Africa_Lounge/Africa Lounge Images (9).png";
import lounge2 from "@/assets/img/exterior/Africa_Lounge/Africa Lounge Images (1).png";
import lounge3 from "@/assets/img/exterior/Africa_Lounge/Africa Lounge Images (4).png";
import lounge4 from "@/assets/img/exterior/Africa_Lounge/Africa Lounge Images (7).png";
import video from "@/assets/img/video/africa_lounge.mp4";

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
          <img :src="lounge1" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Africa Lounge</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Experience the untamed flavors of Africa in every sip of our coffee beans.
              <!-- Indulge in the rich aroma and smooth taste of Arabica Coffee, <br> where every sip is an experience of pure elegance. -->
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="lounge2" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Africa Lounge</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Experience the untamed flavors of Africa in every sip of our coffee beans.
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="lounge3" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Africa Lounge</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Experience the untamed flavors of Africa in every sip of our coffee beans.
            </h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="lounge4" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Africa Lounge</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Experience the untamed flavors of Africa in every sip of our coffee beans.
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
        <p class="text-3xl font-semibold py-3">CoffeeX Africa Lounge</p>
        <p>
          Welcome to CoffeeX Africa Lounge, where the vibrant spirit and rich flavors of African coffee culture come together in a warm and welcoming atmosphere. Nestled within our lounge, you'll discover a haven where you can immerse yourself in the diverse and captivating world of African coffee.

At CoffeeX Africa Lounge, we pride ourselves on showcasing the finest coffee beans sourced from the diverse regions of Africa. Each cup is a celebration of the continent's rich coffee heritage, from the fruity sweetness of Ethiopian Yirgacheffe to the bold and earthy tones of Tanzanian Peaberry.

Step into our inviting lounge and let our skilled baristas guide you through our carefully curated menu of African-inspired drinks, expertly prepared to perfection. Whether you're meeting with friends, enjoying a quiet moment of reflection, or simply seeking a taste of Africa, CoffeeX Africa Lounge offers the perfect setting to indulge in the warmth and hospitality of African coffee culture.

Join us at CoffeeX Africa Lounge and experience a journey through the heart and soul of Africa, one cup at a time. Because when it comes to exceptional coffee and authentic flavors, there's no place quite like CoffeeX Africa Lounge.

        </p>
        <p class="pt-4">
          <span class="pb-2 italic font-semibold">CoffeeX Africa Beans Properties/ Details</span> <br>
          Coffee Africa: <br>
          Coffee beans from Africa exhibit a variety of properties that contribute to their unique flavor profiles and characteristics.   <br> 

          1.	Altitude of Cultivation: African coffee beans are typically cultivated at high altitudes, ranging from 1000 to 2000 meters above sea level. This altitude provides the ideal conditions for slow maturation and optimal flavor development, resulting in beans with complex and nuanced flavors. <br>
          2.	Caffeine Percentage: African coffee beans generally have a moderate caffeine content, typically ranging from 1.2% to 1.5%. This moderate caffeine level contributes to the stimulating effects of African coffee while still allowing for a smooth and enjoyable drinking experience. <br>
          4.	Flavor Profiles: African coffee beans are prized for their diverse flavor profiles, which can include floral aromas, bright acidity, fruity notes, and hints of chocolate and spice. Ethiopian Yirgacheffe beans, for example, are known for their floral aroma and fruity acidity, while Kenyan AA beans exhibit wine-like acidity and fruity sweetness. <br>
          3.	Sugar Content: The sugar content in African coffee beans varies depending on factors such as growing conditions and processing methods. On average, African coffee beans have a sugar content ranging from 6% to 9%, contributing to their natural sweetness and complexity of flavor. <br>
          6.	Environmental Factors: African coffee beans are cultivated in a variety of environmental conditions, ranging from the highlands of Ethiopia to the mountainous regions of Kenya and Tanzania. These diverse growing conditions contribute to the unique terroir of African coffee, influencing factors such as acidity, body, and flavor complexity. <br>
          5.	Processing Methods: African coffee beans are often processed using traditional methods such as washed, natural, or honey processing, which can influence their flavor and aroma. Washed processing tends to result in cleaner and brighter flavors, while natural processing can produce more intense and fruit-forward profiles. <br>

          
          Overall, African coffee beans are prized for their exceptional quality and diverse flavor profiles, making them a favorite among coffee enthusiasts worldwide. From the floral and fruity notes of Ethiopian beans to the bold and complex flavors of Kenyan coffee, African coffee beans offer a rich and satisfying drinking experience that reflects the continent's rich coffee heritage.

          <br />
          <br />
        </p>
        <ul class="py-4">
          <span class="pb-2 italic text-lg font-semibold">	Brands of Africa Coffee Beans: </span> <br> <br>
          
          <li><span class="font-semibold" >1.	Kicking Horse Coffee: </span> Known for their commitment to organic and fair trade practices, Kicking Horse Coffee offers a variety of single-origin African coffees, including beans from Ethiopia, Kenya, and Rwanda. </li>
          
          <li><span class="font-semibold">2.	African Coffee Club :</span> African Coffee Club focuses on sourcing and roasting premium coffee beans exclusively from African countries, offering a curated selection of high-quality beans from Ethiopia, Kenya, Tanzania, and more. </li>
          <li><span class="font-semibold">3.	Red Rooster Coffee Roaster:</span> Red Rooster Coffee Roaster sources and roasts coffee beans from various African regions, with an emphasis on direct trade relationships and sustainable farming practices. </li>
          <li><span class="font-semibold">4.	Equator Coffees:</span> Equator Coffees offers a range of single-origin African coffees, highlighting the unique flavors and characteristics of beans from Ethiopia, Kenya, Rwanda, and other African countries.</li>
          <li><span class="font-semibold">5. Port of Mokha:</span> Port of Mokha specializes in sourcing and roasting Yemeni coffee beans, known for their unique and complex flavor profiles derived from centuries-old cultivation methods in the region.</li>
          <li><span class="font-semibold">6. JoJo's Beans:</span> JoJo's Beans sources and roasts coffee beans from East African countries like Ethiopia, Kenya, and Tanzania, focusing on highlighting the diverse flavor profiles of African coffees. </li>
          <li><span class="font-semibold">7. Marley Coffee:</span> Marley Coffee offers a selection of African coffees, including beans from Ethiopia and Rwanda, with a focus on organic farming practices and sustainable sourcing. </li>
          <li><span class="font-semibold">8. Song Bird Coffee:</span>  Song Bird Coffee specializes in sourcing and roasting African coffees, including beans from Ethiopia, Kenya, and Burundi, with a commitment to quality and sustainability. </li>
          <li><span class="font-semibold">9. Black Oak Coffee Roasters:</span> Black Oak Coffee Roasters offers a variety of single-origin African coffees, sourcing beans from countries like Ethiopia, Kenya, and Tanzania, and roasting them to highlight their unique flavors.</li> <br>
          Queen City Collective Coffee: Queen City Collective Coffee sources and roasts coffee beans from African countries, offering a selection of single-origin coffees with distinct flavor profiles from regions like Ethiopia, Kenya, and Burundi.
        </ul>
      </div>

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
