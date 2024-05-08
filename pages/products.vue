<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import { useHeaderStore } from "@/stores/header";
const headerStore = useHeaderStore();
import { Plus, Minus, Star } from "lucide-vue-next";
const loginload = ref(false)
import { menuData } from "/stores/dummyProductData.js";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

//brother
const { setRouterHistory } = useHeaderStore();
const loginCookie = useCookie("loginCookie");
const tokenCookie = useCookie("tokenCookie");
const router = useRouter();
const nuxtApp = useNuxtApp();
const placeOrder = () => {
  loginload.value= true
  if (loginCookie.value && loginCookie.value.email) {
    router.push("/checkout");
  } else {
    setRouterHistory("/checkout");
    nuxtApp.$toast("clear");
    nuxtApp.$toast("success", {
      message: "Please login first!",
      className: "alert_error",
    });
    router.push("/login/user-dashboard");
  }
  loginload.value= false
};


const store = useProductsStore();
const modules = [Autoplay, Pagination, Navigation];
const getProducts = async() => {
  const data = await $fetch('api/products/get_products')
  console.log(data, 'from products page')
  
  store.product = data;
}

const menu = computed(() => {
  return store.product
}) 

const selectedMenu = ref("");
const menuSelect = (id) => {
    
  selectedMenu.value = menu.find((item) => item.shop_type_id == id);
  
};

const route = useRoute();

const allMenu = () => {
  selectedMenu.value = "";
};


const removeCart = () => {
  store.cart.length--;
};

const currentSelectedMenuItem = ref("");

const total = computed(() => {
  let t = 0
  store.cart.map((e) => (t += e.price * e.quantity))
  return t
})

watch(
  () => selectedMenu.value.item,
  () => {
    currentSelectedMenuItem.value = "";
    setTimeout(() => {
      currentSelectedMenuItem.value = selectedMenu.value.item;
    }, 100);
    console.log(selectedMenu.value.item, "from watch");
  }
);


watch(route.query.menu, () => {
  getProducts()
  if (route.query.menu) {
    selectedMenu.value = menu.find((e) => e.slug == route.query.menu);
  }
});

onMounted(() => {
  getProducts()
})


</script>

<template>
  <div class="mx-auto">
    <div
      class="h-[50svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
<!-- {{ menu }} -->
    <div class="px-[10%] flex flex-col-reverse md:flex-row gap-5 pb-5">
      <div class="md:w-3/4">
        <div class="rounded-b-lg sticky top-[80px] mb-3 z-10 px-1 py-5">
          <div class="bg-white border p-2 rounded-full drop-shadow-md">
            <swiper
              :slides-per-view="3.5"
              :space-between="10"
              :loop="true"
              @slideChange="onSlideChange"
              :pagination="{ clickable: true }"
              :modules="modules"
              class="rounded-full "
            >
              <swiper-slide class="text-white transition ease-out hover:scale-95 hover:bg-black">
                <h1
                  @click="allMenu()"
                  class="font-semibold h-full w-full px-5 py-1.5 "
                >
                  All
                </h1>
              </swiper-slide>

              <swiper-slide v-for="item in menu" class="text-white transition ease-out hover:scale-95 hover:bg-black">
              
                <p
                  class="font-semibold h-full w-full px-2 py-1.5"
                  @click="selectedMenu=item"
                >
                  {{ item.type_name }}
                  
                </p>
              </swiper-slide>
            </swiper>
            
          </div>
        </div>
      
        <div v-if="selectedMenu">
         
          <div class="pb-2 border-b-2 border-b-gray-500 mb-2">
            <h1 class="text-3xl font-semibold">{{ selectedMenu.type_name }}</h1>
          </div>
          <div class="grid lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            <div v-for="i in selectedMenu.product">
             
              <Products :product="i" />
            </div>
          </div>
        </div>

        <div v-else class="px-5">
           <div v-for="item in menu" class="pb-5 px-5">
            <div class="pb-2 border-b-2 border-b-gray-400 mb-2">
              <h1 class="text-3xl font-semibold">{{ item.type_name }}</h1>
            </div>
            <div class="grid lg:grid-cols-3 2xl:grid-cols-4 gap-5">
              <div v-for="i in item.product">
                <Products :product="i" />
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="md:w-1/4">
        <div class="sticky top-[80px] z-10 py-5">
          <div class="bg-white rounded-xl drop-shadow-md p-3 mb-3">

          <div
            class="pb-2 flex items-center gap-2 text-green-600 text-sm font-semibold"
          >
            <p class="h-3 w-3 rounded-full bg-green-600"></p>
            Open Now
          </div>
        </div>

          <!-- <div class="bg-white rounded-xl drop-shadow-md p-3 mb-3">
            <div class="py-1.5 text-sm flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="rgba(4,99,39,1)"
              >
                <path
                  d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V12L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.386 4H17.614C18.4477 4 19.1939 4.51715 19.4867 5.29775L22 12V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM4.136 12H19.864L17.614 6H6.386L4.136 12ZM6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17ZM17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17Z"
                ></path>
              </svg>
              <p>Deliver option</p>
            </div>
            <div class="pb-2 flex items-center gap-2 text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="rgba(255,0,0,1)"
              >
                <path
                  d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Enter delivery address"
                class="py-1.5 pl-1"
              />
            </div>
          </div> -->

          <div class="bg-white rounded-xl drop-shadow-md p-3 mb-3">
            <h1 class="text-xl font-semibold pb-2 border-b">Your Order</h1>
            <div
              v-for="item in store.cart"
              class="py-2 flex justify-between gap-2 text-sm font-semibold border-b"
            >
              <p>{{ item.quantity }} x {{ item.title }}</p>
              <div class="flex flex-col gap-1">
                <p>$ {{ item.price * item.quantity }}</p>
                <div class="flex border p-1 rounded-md bg-white drop-shadow-md">
                  <div class="border-r" @click="store.increaseCart(item.id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="rgba(0,0,0,1)"
                    >
                      <path
                        d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    v-if="item.quantity > 1"
                    @click="store.decresecart(item.id)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="rgba(0,0,0,1)"
                    >
                      <path d="M5 11V13H19V11H5Z"></path>
                    </svg>
                  </div>
                  <div v-else @click="removeCart()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="rgba(0,0,0,1)"
                    >
                      <path d="M5 11V13H19V11H5Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="text-sm font-semibold flex gap-2 justify-between items-center py-2"
            >
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <div
              class="text-sm font-semibold flex gap-2 justify-between items-center py-2"
            >
              <p>Total</p>
              <p>${{ total }}</p>
            </div>
            <!-- <p class="text-center text-[#6F4E37] text-sm py-2">
              I have a coupon
            </p> -->
            <button
              class="w-full py-1.5 px-2 btn mt-4"
            >
              <p @click="placeOrder()" :disabled="loginload" class="flex items-center justify-center gap-4 "> 
                Go to checkout
                <svg v-if="loginload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 animate-spin" fill="currentColor"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path></svg>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6f4e37;
  border-radius: 20px;
  cursor: pointer;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
