<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import img1 from "/assets/img/coffeebag/1.jpg";
import img8 from "/assets/img/coffeebag/8.jpg";
import invest from "/assets/img/investment/Coffee_X-18.jpg";
import invest1 from "/assets/img/investment/Coffee_X-19.jpg";
import invest2 from "/assets/img/investment/Coffee_X-20.jpg";
import invest3 from "/assets/img/investment/Coffee_X-21.jpg";

import { toppingselling } from "/stores/dummyMenuData.js";

const topSellingProduct = toppingselling;

const modules = [Autoplay];
const breakpoints = ref({
  890: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  // 903: {
  // slidesPerView: 1,
  // spaceBetween: 10
  // },
  925: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1200: {
    slidesPerView: 3.5,
    spaceBetween: 10,
  },
  1500: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  1700: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
});
import { ref } from "vue";

const imageUrl = ref("coffee.jpg");
const roi = ref(10);
const years = ref(5);
</script>
<template>
  <section id="investment-opportunity" class="py-12 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center pb-5">
        Investment Opportunity
      </h2>
      <hr class="border-b-1 w-1/2 mx-auto mb-4 border-black">
      <div class="flex flex-col lg:flex-row gap-5 items-start justify-center">
        <div class="w-full lg:w-2/3">
          <img
            :src="invest"
            alt="Coffee Exploration"
            class="w-full rounded-lg h-full"
          />
        </div>
        <div
          class="w-full flex flex-col items-start justify-center gap-3 lg:w-2/3"
        >
          <div class="flex justify-between gap-1">
            <img
              :src="invest1"
              alt="Coffee Exploration"
              class="rounded-lg w-1/3"
            />
            <img
              :src="invest2"
              alt="Coffee Exploration"
              class="w-1/3 rounded-lg"
            />
            <img
              :src="invest3"
              alt="Coffee Exploration"
              class="w-1/3 rounded-lg"
            />
          </div>

          <!-- <p class="text-lg text-gray-700 mb-6">
            Join Coffee Exploration LLC in our journey to redefine the coffee
            industry. With a solid track record and a commitment to
            sustainability, investing with us means being part of a thriving
            market and a forward-thinking company.
          </p>
          <p class="text-lg text-gray-700 mb-6 font-bold">
            Why Invest with Us?
            <ul class=" text-gray-700 list-disc mb-5">
              <li>Proven Performance: Coffee Exploration LLC has consistently delivered growth and profitability in the competitive coffee market.</li>
              <li>Market Potential: The specialty coffee market is booming, offering lucrative opportunities for expansion and profitability.</li>
              <li>Sustainable Approach: We prioritize sustainability in all aspects of our business, ensuring long-term success while minimizing environmental impact.</li>
            </ul>
          </p> -->
          <p class="text-justify text-lg w-full font-semibold">
            Now is the perfect time to invest in the coffee business. As the world emerges from the pandemic, coffee shops are experiencing a resurgence in demand, becoming more than just places to grab a cup of joe—they're vibrant community hubs where people gather to work, socialize, and unwind. With a growing emphasis on quality, sustainability, and innovation, there's never been a better opportunity to capitalize on the evolving coffee culture and carve out your niche in this thriving industry. Join us in brewing success and fueling the passion for coffee!
          </p>
          <nuxt-link
            to="/investment-opportunity"
            class="px-10 py-2 w-1/3 mx-auto btn"
            >Learn More</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
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
