<script setup>
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
const modules = [Autoplay]

import location1 from '@/assets/img/interior/1.jpg'

import location3 from '@/assets/img/interior/3.jpg'

import lounge from '/assets/img/exterior/CoffeeX-america-lounge/Coffee_X_-07.png'
import premium from '/assets/img/exterior/CoffeeX-america-premium/Coffee_X-03.png'

import arabica2 from '@/assets/img/exterior/6.jpg'

import express3 from '/assets/img/exterior/America_Express/EXPRESS-32.png'
// import arabica3 from "@/assets/img/exterior/premium/premium2.png"
</script>
<template>
  <div class="bg-[#2c1c1186] px-[5%] py-[5%]">
    <div
      class="flex flex-col lg:flex-row w-full justify-between gap-10 py-10 items-center lg:py-5"
    >
      <div class="flex flex-col gap-16 w-full lg:w-1/2">
        <h2 class="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
          Open a <br />
          <span class="text-4xl md:text-7xl">Location</span>
        </h2>
        <p class="text-white text-lg">
          Are you ready to embark on the exciting journey of opening your own
          coffee shop? CoffeeX offers a variety of franchise models designed to
          suit your unique vision and preferences. Whether you're passionate
          about showcasing the flavors of Coffee Arabica, exploring the diverse
          tastes of Coffee Africa, or embracing the rich coffee culture of
          Coffee Indo-Pak, we have a model that's perfect for you. Here's a
          closer look at our five types of CoffeeX models
        </p>
        <ul class="list-disc mb-5 text-white">
          <li>
            Proven Success: Benefit from our established brand and successful
            business model.
          </li>
          <li>
            Support: Receive comprehensive support from site selection to grand
            opening and beyond.
          </li>
          <li>
            Quality Products: Access premium coffee beans and beverages to
            delight your customers.
          </li>
        </ul>
        <nuxt-link to="/open-location" class="md:px-10 md:w-1/2 py-2 btn">
          Learn More
        </nuxt-link>
      </div>
      <div class="w-full lg:w-1/2">
        <swiper
          :slides-per-view="1"
          :space-between="10"
          :loop="true"
          :modules="modules"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          class=""
        >
          <swiper-slide class="relative">
            <img
              :src="premium"
              alt=""
              srcset=""
              class="lg:max-h-[500px] rounded-lg"
            />
          </swiper-slide>
          <swiper-slide class="relative">
            <img
              :src="lounge"
              alt=""
              srcset=""
              class="lg:max-h-[500px] rounded-lg"
            />
          </swiper-slide>
          <swiper-slide class="relative">
            <img
              :src="express3"
              alt=""
              srcset=""
              class="lg:max-h-[500px] rounded-lg"
            />
          </swiper-slide>
          <swiper-slide class="relative">
            <img
              :src="location1"
              alt=""
              srcset=""
              class="lg:max-h-[500px] rounded-lg"
            />
          </swiper-slide>
          <swiper-slide class="relative">
            <img
              :src="arabica2"
              alt=""
              srcset=""
              class="lg:max-h-[500px] rounded-lg"
            />
          </swiper-slide>
          <swiper-slide class="relative">
            <img
              :src="location3"
              alt=""
              srcset=""
              class="lg:max-h-[500px] rounded-lg"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
