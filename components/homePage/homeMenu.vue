<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'


import img19 from '@/assets/img/coffeebag/Café Crema@0.3x.jpg'
import img18 from '@/assets/img/coffeebag/Café au Lait.png'
import img29 from '@/assets/img/coffeebag/africa/Ethiopian Yirgacheffe@.jpg'
import img23 from '@/assets/img/coffeebag/asia/Indonesian Kopi Luwak@.jpg'
import img28 from '@/assets/img/coffeebag/africa/Kenyan AA@.jpg'
import img21 from '@/assets/img/coffeebag/Leche y Leche.jpg'
import img27 from '@/assets/img/coffeebag/africa/Robusta Kiandu@.jpg'
import img25 from '@/assets/img/coffeebag/asia/Sri Lankan Milk Coffee@.jpg'
import img26 from '@/assets/img/coffeebag/asia/Thai Iced Coffee @.jpg'
import img22 from '@/assets/img/coffeebag/Zapekanka.jpg'
import img14 from '@/assets/img/coffeebag/america/Affogato - 10 LB @.png'
import img15 from '@/assets/img/coffeebag/america/Robusta@.png'
import img10 from '@/assets/img/coffeebag/arabiandark.png'
import img11 from '@/assets/img/coffeebag/arabianexpresso.png'
import img16 from '@/assets/img/coffeebag/america/Frappé@.jpg'
import img30 from '@/assets/img/coffeebag/america/Frappuccino@.jpg'
import img17 from '@/assets/img/coffeebag/latte.png'
import img12 from '@/assets/img/coffeebag/qishr.png'
import img13 from '@/assets/img/coffeebag/saudiblend.png'
import { menuData } from '/stores/dummyMenuData.js'
// const getProducts = async() => {
//   const data = $fetch('api/products')
//   console.log(data)
// }
// const postProducts = async() => {
//   const postdata = $fetch('api/products', {
//     method: 'post',
//     data:{asss}
//   })
//   console.log(data)
// }
// onMounted(() => {
//   getProducts()
// })
const menu = menuData
const modules = [Autoplay]
const breakpoints = ref({
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  639: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  901: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  1300: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  1500: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
})

const arabica = ref([
  {
    id: 1,
    name: 'Saudi Blend - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 700,
    image: img13,
  },
  {
    id: 2,
    name: 'Arabian Espresso - 10 LB',
    description: 'Redeem this reward for a free coffee of your choice.',
    points: 500,
    image: img11,
  },
  {
    id: 3,
    name: 'Qishr/Husks Roasted Beans - 7 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 600,
    image: img12,
  },
  {
    id: 4,
    name: 'Arabica Decaf - 9 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img11,
  },
  {
    id: 5,
    name: 'Arabian Dark Beans - 9 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img10,
  },
])
const america = ref([
  {
    id: 6,
    name: 'Frappuccino - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img30,
  },
  {
    id: 4,
    name: 'American Robusta - 9 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img15,
  },
  {
    id: 5,
    name: 'Affogato - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img14,
  },
  {
    id: 6,
    name: 'Caffè Latte - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img17,
  },
  {
    id: 7,
    name: 'Frappé - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img16,
  },
])

const europa = ref([
  {
    id: 4,
    name: 'Leche y Leche (Spanish) - 9 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img21,
  },
  {
    id: 5,
    name: 'Kleiner Schwarzer - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img22,
  },
  {
    id: 6,
    name: 'Café Crema - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img19,
  },
  {
    id: 6,
    name: 'Zapekanka - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img22,
  },
  {
    id: 1,
    name: 'Café au Lait - 10 LB',
    description: 'Redeem this reward for a free coffee of your choice.',
    points: 500,
    image: img18,
  },
])
const asia = ref([
  {
    id: 7,
    name: 'Korean Dalgona Coffee - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img26,
  },
  {
    id: 8,
    name: 'Sri Lankan Milk Coffee - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img25,
  },
  {
    id: 9,
    name: 'Indonesian Kopi Luwak - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img23,
  },
  {
    id: 9,
    name: 'Laotian Lao Coffee - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img25,
  },
  {
    id: 4,
    name: 'Thai Iced Coffee - 9 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img26,
  },
])

const africa = ref([
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe - 10 LB',
    description: 'Redeem this reward for a free coffee of your choice.',
    points: 500,
    image: img29,
  },
  {
    id: 2,
    name: 'Kenyan AA - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 700,
    image: img28,
  },
  {
    id: 3,
    name: 'Tanzanian Peaberry - 7 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 600,
    image: img29,
  },
  {
    id: 3,
    name: 'Jamaican Blue Mountain - 7 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 600,
    image: img28,
  },
  {
    id: 6,
    name: 'Robusta Kiandu - 10 LB',
    description: 'Get a discount on any merchandise purchase.',
    points: 1000,
    image: img27,
  },
])
</script>
<template>
  <div class="py-10">
    <div class="w-full flex items-center justify-center flex-col">
      <!-- <h1 class="text-4xl font-bold pb-10 text-[#6F4E37]">Our Products</h1> -->
      <!-- <nuxt-link
      to="/products"
      class="px-10 py-2 rounded-full bg-gradient-to-r from-pink-500 to-[#6F4E37] hover:from-green-400 hover:to-blue-500 font-semibold text-white"
    >
      View Products
    </nuxt-link> -->
    </div>

    <div class="w-full px-[13%]">
      <swiper
        :slides-per-view="1"
        :breakpoints="breakpoints"
        :space-between="10"
        :loop="true"
        :modules="modules"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
        }"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <div>
            <h1 class="text-4xl font-bold  text-[#6F4E37]">
              CoffeeX Arabica
              <hr class="border-b-1 mt-4 mx-auto mb-6 border-black">
            </h1>
          </div>
          <div class="flex gap-5 w-full justify-between">
            <div v-for="item in arabica">
              <div class="rounded-xl bg-white drop-shadow-md">
                <div class="h-[200px] overflow-hidden rounded-t-xl w-[250px]">
                  <img :src="item.image" alt="" class="object-fit" />
                </div>
                <div
                  class="p-2 h-[125px] max-w-[250px] flex flex-col justify-between"
                >
                  <h1 class="text-lg md:text-xl font-bold py-2 text-black">
                    {{ item.name }}
                  </h1>
                  <nuxt-link
                    :to="{ path: '/products', query: { menu: item.slug } }"
                    class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-full"
                  >
                    See All
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div>
            <h1 class="text-4xl font-bold  text-[#6F4E37]">
              CoffeeX America
              <hr class="border-b-1 mt-4 mx-auto mb-6 border-black">
            </h1>
          </div>
          <div class="flex gap-5 w-full justify-between">
            <div
              v-for="item in america"
              class="rounded-xl bg-white drop-shadow-md"
            >
              <div class="h-[200px] overflow-hidden rounded-t-xl w-[250px]">
                <img :src="item.image" alt="" class="object-fit" />
              </div>
              <div
                class="p-2 h-[125px] max-w-[250px] flex flex-col justify-between"
              >
                <h1 class="text-lg md:text-xl font-bold py-2 text-black">
                  {{ item.name }}
                </h1>
                <nuxt-link
                  :to="{ path: '/products', query: { menu: item.slug } }"
                  class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-full"
                >
                  See All
                </nuxt-link>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <h1 class="text-4xl font-bold  text-[#6F4E37]">
              CoffeeX Asia
              <hr class="border-b-1 mt-4 mx-auto mb-6 border-black">
            </h1>
          </div>
          <div class="flex gap-5 w-full justify-between">
            <div
              v-for="item in asia"
              class="rounded-xl bg-white drop-shadow-md"
            >
              <div class="h-[200px] overflow-hidden rounded-t-xl w-[250px]">
                <img :src="item.image" alt="" class="object-fit" />
              </div>
              <div
                class="p-2 h-[125px] max-w-[250px] flex flex-col justify-between"
              >
                <h1 class="text-lg md:text-xl font-bold py-2 text-black">
                  {{ item.name }}
                </h1>
                <nuxt-link
                  :to="{ path: '/products', query: { menu: item.slug } }"
                  class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-full"
                >
                  See All
                </nuxt-link>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <h1 class="text-4xl font-bold  text-[#6F4E37]">
              CoffeeX Europa
              <hr class="border-b-1 mt-4 mx-auto mb-6 border-black">
            </h1>
          </div>
          <div class="flex gap-5 w-full justify-between">
            <div
              v-for="item in europa"
              class="rounded-xl bg-white drop-shadow-md"
            >
              <div class="h-[200px] overflow-hidden rounded-t-xl w-[250px]">
                <img :src="item.image" alt="" class="object-fit" />
              </div>
              <div
                class="p-2 h-[125px] max-w-[250px] flex flex-col justify-between"
              >
                <h1 class="text-lg md:text-xl font-bold py-2 text-black">
                  {{ item.name }}
                </h1>
                <nuxt-link
                  :to="{ path: '/products', query: { menu: item.slug } }"
                  class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-full"
                >
                  See All
                </nuxt-link>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <div>
            <h1 class="text-4xl font-bold pb-10 text-[#6F4E37]">
              CoffeeX Asia
            </h1>
          </div>
          <div class="flex gap-5 w-full justify-between">
            <div
              v-for="item in asia"
              class="rounded-xl bg-white drop-shadow-md"
            >
              <div class="h-[200px] overflow-hidden rounded-t-xl w-[250px]">
                <img :src="item.image" alt="" class="object-fit" />
              </div>
              <div
                class="p-2 h-[125px] max-w-[250px] flex flex-col justify-between"
              >
                <h1 class="text-xl font-bold py-2 text-black">
                  {{ item.name }}
                </h1>
                <nuxt-link
                  :to="{ path: '/products', query: { menu: item.slug } }"
                  class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-full"
                >
                  See All
                </nuxt-link>
              </div>
            </div>
          </div>
        </swiper-slide> -->

        <swiper-slide class="">
          <div>
            <h1 class="text-4xl font-bold  text-[#6F4E37]">
              CoffeeX Africa
              <hr class="border-b-1 mt-4 mx-auto mb-6 border-black">
            </h1>
          </div>
          <div class="flex gap-5 w-full justify-between">
            <div
              v-for="item in africa"
              class="rounded-xl bg-white drop-shadow-md"
            >
              <div class="h-[200px] overflow-hidden rounded-t-xl w-[250px]">
                <img :src="item.image" alt="" class="object-fit" />
              </div>
              <div
                class="p-2 h-[125px] max-w-[250px] flex flex-col justify-between"
              >
                <h1 class="text-lg md:text-xl font-bold py-2 text-black">
                  {{ item.name }}
                </h1>
                <nuxt-link
                  :to="{ path: '/products', query: { menu: item.slug } }"
                  class="bg-[#6F4E37] btn px-5 py-1.5"
                >
                  See All
                </nuxt-link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>