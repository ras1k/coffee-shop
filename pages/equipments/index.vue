<script setup>
// import Coffee from "@/assets/img/equipments/E80.webp";
// import pastry from "@/assets/img/equipments/M4.webp";
// import tart3 from "@/assets/img/equipments/Q1.webp";
// import tart4 from "@/assets/img/equipments/wave.webp";
// const rewards = ref([
//   {
//     id: 1,
//     name: "Mahlkönig E80 Supreme Gbw Espresso Grinder",
//     description: "Redeem this reward for a free coffee of your choice.",
//     points: 500,
//     image: Coffee,
//   },
//   {
//     id: 2,
//     name: "Puqpress M4 Automatic TamperFree Tart",
//     description: "Get a discount on any merchandise purchase.",
//     points: 700,
//     image: pastry,
//   },
//   {
//     id: 3,
//     name: "Puqpress Q1 Gen 5 Automatic Tamper",
//     description: "Get a discount on any merchandise purchase.",
//     points: 600,
//     image: tart3,
//   },
//   {
//     id: 4,
//     name: "Nuova Simonelli Aurelia Wave Espresso Machine",
//     description: "Get a discount on any merchandise purchase.",
//     points: 1000,
//     image: tart4,
//   },
//   {
//     id: 1,
//     name: "Mahlkönig E80 Supreme Gbw Espresso Grinder",
//     description: "Redeem this reward for a free coffee of your choice.",
//     points: 500,
//     image: Coffee,
//   },
//   {
//     id: 2,
//     name: "Puqpress M4 Automatic TamperFree Tart",
//     description: "Get a discount on any merchandise purchase.",
//     points: 700,
//     image: pastry,
//   },

// ]);
import { Plus, Minus, Star } from "lucide-vue-next";

const store = useProductsStore();
const config = useRuntimeConfig()
const route = useRoute();

const equipments = ref()

const getEquipments= async () => {
  const data = await useApi('/get-equipment')
  equipments.value = data;
  console.log('Get api from equipment details', data)
}

const addToCart = (product) => {
  store.addToCart({ ...product, quantity: 1 });
  console.log(store.cart);
};

// const isInCart = computed((id) => {
//   return store.cart.find((item) => item.id == id)?.quantity;
// });


const removeCart = (id) => {
  store.removeFromCart(id);
};


onMounted(() => {
  getEquipments()
})


</script>
<template>
  <div class="mx-auto rounded-lg">
    <div
      class="h-[40svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
    <h1 class="text-center py-6 text-4xl font-bold text-[#6F4E37]">
      Equipments
    </h1>
    <!-- {{ equipments }}  -->
    <div class="container py-6 lg:flex flex-wrap gap-5 justify-center">
      <div
        v-for="equipment in equipments" :key="equipment.id"
        class="max-w-sm rounded bg-gray-100 overflow-hidden shadow-lg"
      >
        <div class="w-[400px]">
          <img class="w-full" :src="equipment?.image" :alt="equipment?.title" />
        </div>
        <div class="px-6 py-4">
          <NuxtLink :to="`/equipments/${equipment?.id}`">
            <p class="font-bold text-xl mb-2 cursor-pointer">{{ equipment?.title }}</p>
          </NuxtLink>
          <div class="flex justify-center items-center py-2 font-bold gap-1 ">
            <Star class="w-3 h-3" v-for="rating in 5" v-if="!equipment?.rating" />
            <svg
              v-else
              v-for="rating in Math.floor(equipment?.rating)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="#FFA800"
              width="24"
              height="24"
              class="w-3 h-3"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
    
            <Star
              class="w-3 h-3"
              v-if="equipment?.rating"
              v-for="star in 5 - Math.floor(equipment?.rating)"
            />
          </div>

          <p class="text-gray-700 text-xl">Price: ${{ equipment?.price.toFixed(2) }}</p>
        </div>

        <div
        v-if="store.cart.find((item) => item.id == equipment.id)?.quantity > 0"
        class="flex bg-[#6F4E37] px-5 py-1.5 rounded-xl items-center justify-between mx-auto mt-10 w-[300px]"
      >
        <button
          v-if="store.cart.find((item) => item.id == equipment.id)?.quantity > 1"
          @click="store.decresecart(equipment.id)"
          class="px-2 text-white border-r font-normal flex items-center justify-center mx-auto"
        >
          <Minus />
         
        </button>
        <button
          v-else
          @click="removeCart(equipment.id)"
          class="px-2 text-white border-r font-normal flex items-center justify-center mx-auto"
        >
          <Minus />
         
        </button>
        <p class="px-2 text-white text-center">{{ store.cart.find((item) => item.id == equipment.id)?.quantity }}</p>
        <button
          @click="store.increaseCart(equipment.id)"
          class="px-2 text-white border-l flex items-center justify-center mx-auto"
        >
          <Plus />
        </button>
      </div>

      <button
      v-else
        @click="addToCart(equipment)"
        class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-full w-[300px] mt-10 flex items-center justify-center text-center mx-auto mb-6"
      >
        Add to Cart
      </button>


<!-- <div class="flex items-center justify-center text-center py-4">
  <button class="px-5 py-1.5 btn w-2/3">
    Add to Cart
  </button>
</div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>

