<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'

import { storeToRefs } from 'pinia'
import { useHeaderStore } from '../stores/header'

const nuxtApp = useNuxtApp()

const route = useRoute()

// pinia
const { isShowLoading } = storeToRefs(useHeaderStore())
import { useMarketingDashboardStore } from '../stores/dashboard/marketingDashboard'

// pinia
const { marketingOffer, marketingPromo } = storeToRefs(
  useMarketingDashboardStore()
)

// const route = useRoute();
// const config = useRuntimeConfig();
// useHead(() => ({
//   htmlAttrs: {
//     prefix: "og: https://ogp.me/ns#",
//   },
//   link: [
//     {
//       key: "canonical",
//       rel: "canonical",
//       href: config.public.siteUrl + route.path,
//     },
//   ],
// }));
</script>
<template>
  <div class="bg-[#6f4e372c]">
    <SharedHeader />

    <div
      v-if="isShowLoading"
      class="backdrop-blur-sm bg-white/30 absolute flex flex-col justify-center items-center w-[100vw] h-[100vh] z-[15]"
    >
      <img
        class="w-20 h-20 animate-spin"
        src="https://www.svgrepo.com/show/70469/loading.svg"
        alt="Loading icon"
      />
    </div>

    <div class="min-h-screen mt-20">
      <slot />
      <div
        v-if="route.name?.includes('shops') || route.name?.includes('carts')"
        class="bg-white tilt-shaking text-black w-fit rounded boxShadow p-2 fixed z-30 bottom-10 left-10"
      >
        <table>
          <thead>
            <tr class="bg-gray-400 text-sm">
              <th class="p-2 text-left">Promo Title</th>
              <th class="p-2 text-left">Promo Code</th>
              <th class="p-2 text-left">Discount</th>
            </tr>
          </thead>
        </table>
        <tbody v-for="singlePromo in marketingPromo">
          <tr
            v-if="singlePromo.isApproved"
            class="grid grid-cols-3 gap-2 justify-between"
          >
            <td class="p-2 text-left">
              {{ singlePromo.promo_title }}
            </td>
            <td class="font-bold p-2 text-center">
              {{ singlePromo.promo_code }}
            </td>
            <td class="p-2 text-center">
              {{ singlePromo.promo_discount }}
            </td>
          </tr>
        </tbody>
      </div>

      <!-- <div
        v-if="route.name === 'index'"
        class="bg-white text-black w-fit rounded boxShadow p-2 fixed z-30 bottom-10 right-10"
      >
        <NuxtLink to="/">
          <table>
            <thead>
              <tr class="bg-gray-400 text-sm w-full">
                <th class="p-2 text-left">Offer Title</th>
                <th class="p-2 text-left">Discount - Up to</th>
              </tr>
            </thead>
          </table>
          <tbody v-for="singleOffer in marketingOffer">
            <tr
              v-if="singleOffer.isApproved"
              class="grid grid-cols-2 gap-2 w-full justify-between"
            >
              <td class="p-2 text-left">{{ singleOffer.offer_title }}</td>
              <td class="p-2 text-left">
                {{ singleOffer.offer_discount }} -
                {{ singleOffer.highest_cashback }}
              </td>
            </tr>
          </tbody>
        </NuxtLink>
      </div> -->
    </div>

    <SharedFooter />
  </div>
</template>

<style scoped></style>
