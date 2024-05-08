<script setup>
import { Plus, Minus, Star } from "lucide-vue-next";
import MenuPage from "../pages/MenuPage.vue";
import { Skeleton } from '@/components/ui/skeleton'
const config = useRuntimeConfig()
const props = defineProps(["product"]);
const product = props.product;
const route = useRoute();
console.log(product);


const store = useProductsStore();

const addToCart = (product) => {
  store.addToCart({ ...product, quantity: 1 });
  console.log(store.cart);
};

const isInCart = computed(() => {
  return store.cart.find((item) => item.id === product.id)?.quantity;
});

const removeCart = (id) => {
  store.removeFromCart(id);
};
</script>
<template>
  <div class="rounded-xl bg-white drop-shadow-md mb-2 md:w-[200px]">
    <div class="md:h-[200px] overflow-hidden rounded-t-xl md:w-[200px] relative">
    <!-- <div class="h-[200px] overflow-hidden rounded-t-xl w-[250px] relative"> -->
    
      <img v-if="product.image" :src="config.public.menuImgURL + product.image" alt="" class="object-fit" />
      <Skeleton else class="w-[100px] h-5 rounded-full" />
      <p class="absolute rounded-r-lg bg-[#6F4E37] shadow-lg px-2 py-1.5 font-semibold text-white top-5">Not Available</p>
    </div>
    <div class="p-2 flex flex-col justify-between">
      <h1 class="text-base font-bold py-2 text-black text-center">
        {{ product.title }}
      </h1>
      <!-- <p
        v-if="route.name == 'MenuPage'"
        class="text-sm pb-2 text-center h-[60px] overflow-hidden"
      >
        {{ product.description }}
      </p> -->
      <p class="text-center text-lg font-bold">$ {{ product.price }}</p>

      <div class="flex justify-center items-center py-2 font-bold gap-1">
        <Star class="w-3 h-3" v-for="rating in 5" v-if="!product.rating" />
        <svg
          v-else
          v-for="rating in Math.floor(product.rating)"
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
          v-if="product.rating"
          v-for="star in 5 - Math.floor(product.rating)"
        />
      </div>
      <div
        v-if="isInCart > 0"
        class="flex bg-[#6F4E37] px-5 py-1.5 rounded-xl items-center justify-between"
      >
        <button
          v-if="isInCart > 1"
          @click="store.decresecart(product.id)"
          class="px-2 text-white border-r font-normal flex items-center justify-center"
        >
          <Minus />
          <ion-icon name="remove-outline" class="text-white"></ion-icon>
        </button>
        <button
          v-else
          @click="removeCart(product.id)"
          class="px-2 text-white border-r font-normal flex items-center justify-center"
        >
          <Minus />
          <ion-icon name="remove-outline" class="text-white"></ion-icon>
        </button>
        <p class="px-2 text-white text-center">{{ isInCart }}</p>
        <button
          @click="store.increaseCart(product.id)"
          class="px-2 text-white border-l flex items-center justify-center"
        >
          <Plus />
        </button>
      </div>

      <button
        v-else
        @click="addToCart(product)"
        class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-full"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>
