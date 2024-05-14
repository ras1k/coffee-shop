<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import premium1 from "/assets/img/exterior/CoffeeX-america-premium/1.png";
import premium2 from "/assets/img/exterior/CoffeeX-america-premium/Coffee_X-02.png";
import premium3 from "/assets/img/exterior/CoffeeX-america-premium/Coffee_X-03.png";
import video from "/assets/img/video/america_premium.mp4";
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
        <img :src="premium1" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX America Premium</h1>
          <h2 class="text-3xl text-white font-bold text-center">
            Luxury in Every Cup
            <!-- Indulge in the rich aroma and smooth taste of Arabica Coffee, <br> where every sip is an experience of pure elegance. -->
          </h2>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="">
      <div class="h-[70vh] w-full relative">
        <img :src="premium2" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX America Premium</h1>
          <h2 class="text-3xl text-white font-bold text-center">
            Luxury in Every Cup
          </h2>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="">
      <div class="h-[70vh] w-full relative">
        <img :src="premium3" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX America Premium</h1>
          <h2 class="text-3xl text-white font-bold text-center">
            Luxury in Every Cup
          </h2>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide class="">
      <div class="h-[60vh] w-full relative">
        <img :src="arabica6" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX Arabica Premium</h1>
          <h2 class="text-3xl text-white font-bold text-center">
            Luxury in Every Cup
          </h2>
        </div>
      </div>
    </swiper-slide> -->
    <swiper-slide class="">
      <div class="h-[70vh] w-full relative">
        <video autoplay controls loop class="h-[100%] w-full border" >
          <source :src="video" type="video/mp4">
        </video>
    
      </div>
    </swiper-slide>
  </swiper>
      <!-- <div class="h-[70vh] w-full relative">
        <img :src="america" alt="" />
        <div
          class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
        >
          <h1 class="text-5xl text-white font-bold">CoffeeX America Premium</h1>
          <h2 class="text-3xl text-white font-bold">
            America's Finest Beans: From the Heart of the Americas to Your Cup!
          </h2>
        </div>
      </div> -->

      <div class="container py-6 text-lg">
        <p class="text-3xl font-semibold py-3">CoffeeX America Premium</p>
        <p>
          Welcome to CoffeeX America Premium, where luxury meets the bold flavors and rich traditions of the Americas. Our Premium segment is tailored for those with a discerning palate, offering an elevated coffee experience that transcends the ordinary.

At CoffeeX America Premium, we source only the finest beans from the most renowned coffee-growing regions across North, Central, and South America. Each cup is a celebration of the diverse and vibrant coffee cultures that define the American continent, from the intense richness of Colombian blends to the smooth sophistication of Brazilian roasts.

Indulge in our exclusive menu of specialty drinks, meticulously crafted by our expert baristas to showcase the unique flavors and aromas of our premium beans. Whether you prefer a velvety espresso, a creamy latte, or a refreshing cold brew, every sip at CoffeeX America Premium is a luxurious journey through the flavors of the Americas.

Step into our elegant lounge and immerse yourself in the sophistication of CoffeeX America Premium. Whether you're seeking a moment of indulgence or looking to impress with a truly exceptional coffee experience, our Premium segment promises to delight even the most discerning coffee connoisseurs.
        </p>
        <p class="pt-4">
          <span class="pb-2 italic font-semibold">America Beans Properties/ Details</span> <br>
          Coffee America: <br>
          High-quality Arabica coffee from the Americas offers a delightful combination of slightly sweet taste, floral notes, and fruity aromas. The fruity acidity and absence of bitterness are often perceived as pleasant by coffee enthusiasts, with the intensity of these characteristics influenced by the degree of roasting. Lighter roasts emphasize the fruity characteristics, while darker roasts offer a richer flavor profile with caramelized sweetness. <br> <br>
          Origin and Cultivation: <br>
          Coffee beans from the Americas are typically cultivated at moderate to high altitudes, ranging from 900-1,200 meters above sea level. The plants thrive in the region's delicate climate, which provides the ideal conditions for slow maturation and optimal flavor development. The cultivation process demands careful attention, with longer periods for pruning and fertilizing to ensure optimal growth and development. The largest producers of Arabica coffee in the Americas include Brazil, Colombia, Guatemala, Mexico, Nicaragua, El Salvador, Costa Rica, and Honduras

          <br />
          <br />
        </p>
        <p class="py-4">
          <span class="pb-2">Varieties of Beans: </span> <br> <br>
          
          <span class="font-semibold" >1.	Brazilian Bourbon: </span> Renowned for its smooth and creamy texture, Brazilian Bourbon beans offer nutty and chocolatey undertones, with a medium body and mild acidity. <br>
          
          <span class="font-semibold">2.	Colombian Excelso</span> Grown in high-altitude regions, Colombian Excelso beans feature a well-balanced flavor profile with medium body, bright acidity, and versatile flavor notes, making them ideal for various brewing methods. <br>
          <span class="font-semibold">3.	Costa Rican Tarrazu</span> Tarrazu beans from Costa Rica are celebrated for their bright acidity, full body, and complex flavor profile, with notes of citrus, honey, and caramel. <br>
          <span class="font-semibold">4.	Guatemalan Huehuetenango:</span> Hailing from the Huehuetenango region, Guatemalan beans offer a complex flavor profile with notes of chocolate, spice, and fruit, making them highly sought after by coffee aficionados. <br>
          <span class="font-semibold">5.	Mexican Chiapas:</span> Chiapas beans from Mexico are known for their smooth and mellow flavor profile, with medium acidity, chocolatey sweetness, and hints of nuttiness, making them perfect for espresso and French press brewing. <br> <br>
          The low acidity of Brazilian Bourbon Santos derives from the region's lower growing elevations. This is low relative to areas such as Central America where higher elevation plantations (e.g., 1,200 meters above sea level) produce premium gourmet coffees that are brighter (higher acidity).
          
          <p class="text-xl italic font- py-2">Brands of CoffeeX America Beans.</p>
          The best brands of CoffeeX America out of many are:
          <ul class="font-semibold">
            <li>1.	Coffee Masters - Brazil Yellow Bourbon</li>
            <li>2.	Coffee Bros’ - Las Margaritas</li>
            <li>3.	JBC Coffee Roasters - Decaf Colombia</li>
          </ul>
        </p>
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
