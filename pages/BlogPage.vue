<template>
  <div>
    <div class="h-[50svh] bg-[url('/assets/img/home/hero/hero1.jpg')] bg-cover">
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        Blog
      </div>
    </div>
    <div class="grid grid-cols-4 px-[5%] py-10 gap-5">
      <div v-for="item in blogItem" class="rounded-xl bg-white drop-shadow-md">
        <div class="h-[150px] overflow-hidden rounded-t-xl min-w-[250px]">
          <img :src="item.img" alt="" class="object-fit" />
        </div>
        <div class="p-2 flex flex-col justify-between">
          <h1 class="text-lg font-semibold py-2 text-black">
            {{ item.title }}
          </h1>
          <p class="pb-2 text-gray-500 text-sm">{{ item.date }}</p>
          <p class="pb-2 max-h-[100px] overflow-hidden">
            {{ item.description }}
          </p>

          <button class="text-left text-red-600 text-sm">Read More...</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import img1 from "/assets/img/gallary/murphy/best-pizza-slice-mogios-pizza.jpg";
import img2 from "/assets/img/gallary/murphy/mogios-pizza-delicious-slices-texas.jpg";
import img3 from "/assets/img/gallary/murphy/mogios-pizza-inviting-interior-plano-tx.jpg";
import img4 from "/assets/img/gallary/murphy/mogios-pizza-kitchen-preparation.jpg";

const blogItem = ref([
  {
    id: "1",
    title:
      "The Science Behind Perfect Murphy TX Pizza: Techniques and Tips with Mogio’s Pizza",
    description:
      "Welcome to the savory world of Murphy, TX pizza, where every slice tells a story of flavor and tradition. Pizza isnt just food here; its a way of life, bringing together families, friends, and communities over bubbling cheese and crisp crusts. In...",
    date: "Mar 12, 2024 | Blog, Pizza",
    img: img1,
  },
  {
    id: "2",
    title: "From Dough to Delight: Mogio’s Pizza in Murphy TX Process Revealed",
    description:
      "Welcome, fellow pizza aficionados! Today, were about to embark on a tantalizing journey deep into the heart of Mogios Pizza in Murphy TX. Join us as we unveil the secrets behind crafting the perfect pizza – from dough to delight.The Crust Chronicles: Crafting...",
    date: "Feb 13, 2024 | Blog, Pizza",
    img: img2,
  },
  {
    id: "3",
    title:
      "Exploring Unique Pizza Toppings: Elevate Your Experience with Mogio’s Pizza Delivery in Murphy TX",
    description:
      "Explore Best Pizza Delivery in Murphy TX- Mogios Pizza   Welcome, pizza enthusiasts! If youre in Murphy, TX, get ready for a mouthwatering journey through the unique pizza scene thats bound to delight your taste buds. Murphys pizza experience is not just a...",
    date: "Jan 25, 2024 | Blog, Pizza",
    img: img3,
  },
  {
    id: "4",
    title:
      "The Healthier Side of Gourmet Pizza in Murphy TX: Smart Ingredient Choices",
    description:
      "Greetings, pizza enthusiasts in Murphy, TX! In a town where culinary experiences thrive, theres a special place reserved for the delightfully diverse world of pizza. Whether youre a regular at local pizzerias or a newcomer exploring the scene, Murphys pizza culture...",
    date: "Dec 26, 2023 | Blog, Pizza",
    img: img4,
  },
]);
</script>
