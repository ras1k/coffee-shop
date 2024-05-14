<script setup>
import coffee1 from "@/assets/img/home/hero/coffee1.jpg";
import coffee2 from "@/assets/img/home/hero/bean.jpg";
// import coffee3 from "@/assets/img/home/hero/coffee6.jpg";
import coffee3 from "@/assets/img/home/hero/cup.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const modules = [Autoplay];

const heroSlider = ref([
  {
    id: 1,
    image: coffee2,
    title: "Welcome to Coffee Exploration LLC",
    description: "The Best Coffee in Town!",
  },
  {
    id: 2,
    image: coffee3,
    title: "Welcome to Coffee Exploration LLC",
    description: "The Best Coffee in Town!",
  },
  {
    id: 3,
    image: coffee1,
    title: "Welcome to Coffee Exploration LLC",
    description: "The Best Coffee in Town!",
  },
]);
</script>
<template>
  <div class="h-[50vh]">
    <swiper
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
     
      :modules="modules"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: true,
      }"
      class=""
    >
      <swiper-slide class="relative" v-for="(item, index) in heroSlider">
        <img :src="item.image" alt="" />
        <div
          class="bg-[#00000052] absolute z-10 h-full w-full flex flex-col gap-5 justify-center items-center "
        >
          <h1 class="text-3xl md:text-5xl text-white font-bold">
            {{ item.title }}
          </h1>
          <h2 class="text-2xl md:text-4xl text-white font-bold">
            {{ item.description }}
          </h2>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;
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
