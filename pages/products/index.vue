<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Header store usage
const headerStore = useHeaderStore()

const loginload = ref(false)
const { setRouterHistory } = useHeaderStore()
const loginCookie = useCookie('loginCookie')
const tokenCookie = useCookie('tokenCookie')
const router = useRouter()
const nuxtApp = useNuxtApp()

const placeOrder = () => {
  loginload.value = true
  if (loginCookie.value && loginCookie.value.email) {
    router.push('/checkout')
  } else {
    setRouterHistory('/checkout')
    nuxtApp.$toast('clear')
    nuxtApp.$toast('error', {
      message: 'Please login first!',
      className: 'alert_error',
    })
    router.push('/login/user-dashboard')
  }
  loginload.value = false
}

const store = useProductsStore()
const modules = [Autoplay, Pagination, Navigation]

const getProducts = async () => {
  const data = await $fetch('api/products/get_products')
  console.log(data, 'from products page')

  store.product = data
  data.map((e) => store.allProduct.push(...e.product))
}

const menu = computed(() => store.product)
const selectedMenu = ref('')
const searchQuery = ref('')

const filteredMenu = computed(() => {
  if (!searchQuery.value) return menu.value
  return menu.value.filter(item =>
    item.type_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.product.some(product =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )
})

const clearSearch = () => {
  searchQuery.value = ''
}

const menuSelect = (id) => {
  selectedMenu.value = menu.value.find((item) => item.shop_type_id == id)
}

const allMenu = () => {
  selectedMenu.value = ''
}

const removeCart = () => {
  store.cart.length--
}

const currentSelectedMenuItem = ref('')

const total = computed(() => {
  let t = 0
  if(store.cart)
  store?.cart?.map((e) => (t += e.product_price * e.product_qty))
  return t
})

watch(
  () => selectedMenu.value?.item,
  () => {
    currentSelectedMenuItem.value = ''
    setTimeout(() => {
      currentSelectedMenuItem.value = selectedMenu.value?.item
    }, 100)
    console.log(selectedMenu.value?.item, 'from watch')
  }
)

onMounted(() => {
  getProducts()
})
</script>


<template>
  <ClientOnly >

  <div class="mx-auto">
    <div class="h-[40svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover">
      <div class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold">
        <BaseHeaderTitle />
      </div>
    </div>
    <!-- {{ menu }} -->
   
    <div class="px-[10%] flex flex-col-reverse md:flex-row gap-5 pb-5">
      <div class="md:w-3/4">
        <div class="rounded-b-lg sticky top-[80px] mb-3 z-10 px-1 py-5 backdrop-blur-3xl">
          <div class="bg-white border p-2 rounded-full drop-shadow-md">
            <swiper
              :slides-per-view="3"
              :space-between="10"
              :loop="true"
              :pagination="{ clickable: true }"
              :modules="modules"
              class="rounded-full"
            >
              <swiper-slide
                class="text-white transition ease-out hover:scale-95 bg-yellow-900 p-1 rounded-2xl"
              >
                <h1
                  @click="allMenu()"
                  class="font-semibold h-full w-full px-1 py-1.5 bg-yellow-900 rounded-2xl flex items-center justify-center cursor-pointer"
                  :class="!selectedMenu ? 'bg-yellow-950' : 'bg-yellow-900'"
                >
                  All
                </h1>
              </swiper-slide>

              <swiper-slide
                v-for="item in filteredMenu"
                :key="item.id"
                class="text-white transition ease-out hover:scale-95 bg-yellow-900 p-1 rounded-2xl"
              >
                <p
                  class="font-semibold h-full w-full px-1 py-1.5 rounded-2xl flex items-center justify-center cursor-pointer"
                  :class="selectedMenu == item ? 'bg-yellow-950' : 'bg-yellow-900'"
                  @click="selectedMenu = item"
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
            <div v-for="i in selectedMenu.product" :key="i.id">
              <Products :product="i" />
            </div>
          </div>
        </div>

        <div v-else class="px-5">
          <div v-for="item in filteredMenu" :key="item.id" class="pb-5 px-5">
            <div class="pb-2 border-b-2 border-b-gray-400 mb-2">
              <h1 class="text-3xl font-semibold">{{ item.type_name }}</h1>
            </div>
            <div class="grid lg:grid-cols-3 2xl:grid-cols-4 gap-5">
              <div v-for="i in item.product" :key="i.id">
                <Products :product="i" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:w-1/4">
        <div class="sticky top-[80px] z-10 py-5">
          <div class="bg-white rounded-xl drop-shadow-md p-3 mb-3">
            <div class="pb-2 flex items-center gap-2 text-green-600 text-sm font-semibold">
              <p class="h-3 w-3 rounded-full bg-green-600"></p>
              Open Now
            </div>
          </div>

          <div class="bg-white flex items-center flex-col gap-4 justify-between rounded-xl drop-shadow-md p-3 mb-3">
            <div class="relative w-full rounded-lg flex items-center">
              <span class="bg-[#6f4e372c] py-3 px-2 rounded-s-lg ">
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                  <path
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                v-model="searchQuery"
                class="text-black text-lg font-semibold px-2 w-full rounded-e-lg bg-[#6f4e372c]  py-1.5  focus:outline-none"
              />
              <button
                v-if="searchQuery"
                @click="clearSearch"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
              </button>
            </div>
            <button class="btn px-2 py-1.5 w-full font-semibold">
              Search
            </button>
          </div>

          <div class="bg-white rounded-xl drop-shadow-md p-3 mb-3">
            <h1 class="flex text-xl font-semibold pb-2 border-b">
              <span class="flex-1">
                Your Order 
              </span>
              <span class="px-1">
                {{ store.cart.length }}
              </span>
            </h1>
            <div
              v-for="item in store.cart"
              :key="item.id"
              class="py-2 flex justify-between gap-2 text-sm font-semibold border-b"
            >
              <p>{{ item.product_qty }} x {{ item.product_title }}</p>
              <div class="flex flex-col gap-1">
                <p>$ {{ item.product_price * item.product_qty }}</p>
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
            <button class="w-full py-1.5 px-2 btn mt-4">
              <p
                @click="placeOrder()"
                :disabled="loginload"
                class="flex items-center justify-center gap-4"
              >
                Go to checkout
                <svg
                  v-if="loginload"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 animate-spin"
                  fill="currentColor"
                >
                  <path
                    d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                  ></path>
                </svg>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      
  </ClientOnly>
</template>


<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

/* .swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6f4e37;
  border-radius: 20px;
  cursor: pointer;
} */

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
