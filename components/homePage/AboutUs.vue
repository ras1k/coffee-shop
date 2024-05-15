<script setup>
import premium1 from "@/assets/img/common/about.png";
</script>
<template>
  <div class="bg-gray-100">
    <div class="container py-10 sm:py-10">
      <h2 class="text-4xl text-center font-bold py-5 text-[#6F4E37]">
        About CoffeeX
      </h2>
      <hr class="border-b-1 w-1/2 mx-auto mb-4 border-black">
      <div class="flex flex-col md:flex-row  justify-between items-center gap-10">
        <div class="md:w-3/4">
          <img :src="premium1" alt="" class="rounded-xl w-full" />
        </div>
        <div class="md:w-2/3">
          <h3 class="text-xl text-justify pb-2">
            Our journey began with a simple love for coffee and a desire to
            share that passion with the world. From sourcing the finest beans
            from around the globe to meticulously roasting and brewing each cup
            with care and precision, we strive to provide an unparalleled coffee
            experience that awakens the senses and ignites the spirit of
            exploration. With every sip, we invite you to embark on a journey of
            discovery, where each flavor and aroma tells a story of its own.
          </h3>
          <h4 class="text-xl text-justify pb-4">
            Our mission at Coffee Exploration LLC is simple yet profound: to
            elevate the coffee experience and foster meaningful connections
            through our passion for quality, innovation, and community. We
            believe that coffee has the power to bring people together,
            transcend boundaries, and spark moments of joy and inspiration. Our
            dedication to excellence remains unwavering. We're on a mission to
            redefine what it means to be a coffee company – one cup, one
            conversation, and one community at a time.
          </h4>
        </div>
      </div>
      <!-- <div class="flex justify-center pt-10"> -->
      <div class="flex justify-center md:pt-10">
        <nuxt-link
          to="/about"
          class="px-10 md:w-1/3 py-2 btn"
        >
          Learn More
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
