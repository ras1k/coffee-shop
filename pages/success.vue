<script setup>
const route = useRoute();

const store = useProductsStore();



const nuxtApp = useNuxtApp();
import { onMounted } from 'vue'
const loading =ref(true)
const createOrder = async () => {
 
  store.orderdata.success_token = route?.query?.session_id

  const data = await $fetch("api/products/create_order", {
    method: "post",
    body:store.orderdata,
  });
  if (data) {
    store.cart = ''
    nuxtApp.$toast("clear");
    nuxtApp.$toast("success", {
      message: "Order Placed Successfully",
    });
  }
  // console.log(data)
  if (data.message)
  {
    loading.value = false
  }
    setTimeout(() => {
      useRouter().push('dashboard')
    }, 2000);
};

onMounted(async () => {
  createOrder()
})
</script>

<template>
  <div class="mx-auto flex flex-row-reverse items-center justify-center h-screen w-1/3">
    <div class="container bg-white text-center p-10 shadow-xl">
      <div class="flex justify-center">
        <svg  v-if="!loading"
          xmlns="http://www.w3.org/2000/svg"
          class=""
          viewBox="0 0 512 512"
          height="50"
        >
          <path
            fill="#63E6BE"
            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
          />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" class="animate-spin w-10 h-10" viewBox="0 0 24 24" fill="rgba(29,107,181,1)"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path></svg>
      </div>
    
      <h1 v-if="loading" class="text-2xl md:text-3xl font-bold pt-4 pb-2">
      Order is in progress
      <p class="text-sm">Please wait</p>
      </h1>
      <h1 v-else class="text-2xl md:text-4xl font-bold pt-4 pb-2">
        Your Order is Confirmed!
      </h1>
      <p>
        We'll send you a shipping confirmation email as soon as your order
        ships.
      </p>
   
    </div>
    <!-- <div>
      <div
      class="bg-white w-full mx-auto p-2 rounded-lg sticky top-16 flex flex-col"
    >
      <h2 class="whitespace-nowrap text-lg font-bold pb-3">Your Cart Item</h2>
      <div class="flex flex-col gap-2">
        <div
          class="p-2 bg-slate-500 rounded-lg shadow-lg"
        >
          <div class="flex gap-2">
            <img
              class="w-[50px] rounded"
              :src="cart.image"
              alt="Grocery"
            />
            <div>
              <p class="text-xl font-bold">
                {{ cart.name }}
              </p>
              <p class="font-semibold">
                ${{ cart.price }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2 text-xl py-3">

          <div class="flex justify-between">
            <div class="font-bold">Total:</div>
            <div>${{ cart.price }}</div>
          </div>
        </div>
      </div>
    </div>
    </div> -->
  </div>
</template>

<style scoped></style>
