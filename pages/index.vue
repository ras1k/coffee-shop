<script setup>
const nuxtApp = useNuxtApp();

// onMounted(() => {
//   console.log("hello");
//   nuxtApp.$toast("clear");
//   nuxtApp.$toast("success", {
//     message: "Everything is okay.",
//     className: "alert_success",
//   });
// });
</script>

<template>
  <div class="">
    <HomePageHero />
    <HomePageAboutUs/>
    <homePageHomeMenu/>
    <!-- <HomePageHomeOrder/> -->
    <HomePageTopSellingProduct />
    <HomePageSpecialOffer />
    <HomePageWhyChooseUs />
    <HomePageFindUs />
    <!-- <HomePageOverview /> -->
  </div>
</template>

<style scoped></style>
