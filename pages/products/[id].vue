<script setup>
import not_abailable from '@/assets/img/coffeebag/not-available.jpg'
import { Input } from '@/components/ui/input'
import { Minus, Plus, Star } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import 'swiper/css'
import 'swiper/css/navigation'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useHeaderStore } from '~/stores/header'
const showTooltip = ref(false);
// pinia
const { routerHistory } = storeToRefs(useHeaderStore())
const { setRouterHistory } = useHeaderStore()
const loginCookie = useCookie('loginCookie')
const tokenCookie = useCookie('tokenCookie')
const nuxtApp = useNuxtApp()
const router = useRouter()
const auth = useAuthStore()
const store = useProductsStore()
const route = useRoute()
const config = useRuntimeConfig()
const selectedOrderType = ref(null)
const selectedType = ref(null)
// const selectedSaleType = ref("Retail");
const selectedRoast = ref(null)
const selectedPackSize = ref(null)

const product = computed(() => {
  let prod = null
  prod = store.allProduct.find((e) => e.id == route.params.id)
  return prod
})

const product_detail = ref()
const order_types = ref([])
const sizes = ref([])
const beans = ref([])
const roasts = ref([])
const price = ref([])
const quantity = ref([])
const isWishlisted = ref(false)

const placeOrder = () => {
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
}
const getProductDetails = async (id) => {
  const data = await useApi('/product_detail/' + route.params.id)
  product_detail.value = data
  product_detail.value.id = route.params.id
  data.image.map((e) => {
    if (e.product_image != null) {
      selectedOrderType.value = e.order_type
      selectedPackSize.value = e.product_pack_name
      selectedRoast.value = e.product_roast_title
      selectedType.value = e.product_type
    }

    let checkOrderType = order_types.value.find((f) => f == e.order_type)
    if (!checkOrderType) {
      order_types.value.push(e.order_type)
    }

    let checkPrice = price.value.find((f) => f == e.product_price)
    if (!checkPrice) {
      price.value.push(e.product_price)
    }

    let checkQuantity = quantity.value.find((f) => e.quantity)
    if (!checkQuantity) {
      quantity.value.push(e.quantity)
    }

    let checkBean = beans.value.find((f) => f == e.product_type)
    if (!checkBean) {
      beans.value.push(e.product_type)
    }

    let checkRoast = roasts.value.find((f) => f == e.product_roast_title)
    if (!checkRoast) {
      roasts.value.push(e.product_roast_title)
    }
    let checkSize = sizes.value.find((f) => f == e.product_pack_name)
    if (!checkSize) {
      sizes.value.push(e.product_pack_name)
    }
  })
  console.log('Get api from product details', data)
}

const imageUrl = config.public.productImgURL + product.image

const addToCart = () => {
 
  let prod = {
    product_id: product_detail.value.id,
    product_price: filteredImages.value.product_price,
    product_title: product_detail.value.title,
    product_qty: 1,
    occurance_type: occurrence.value.type,
    recurrance_value: occurrence.value.value,
    product_image_id: filteredImages.value.product_image_id,
  }
 console.log(prod);
  store.addToCart(prod)
}

const isInCart = computed(() => {
  if (store && store.cart && Array.isArray(store.cart)) {
    const item = store.cart.find((item) => item?.product_id == product_detail?.value?.id);
    if (item) {
      return item.product_qty;
    }
  }
  return false;
});
const removeCart = (id) => {
  store.removeFromCart(id)
}

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const modules = [FreeMode, Navigation, Thumbs]

const changeOrderType = (order) => {
  selectedOrderType.value = order
}

const changeType = (type) => {
  selectedRoast.value = type
}

const changeBean = (bean) => {
  selectedType.value = bean
}

const selectSize = (size) => {
  selectedPackSize.value = size
}

const filteredImages = computed(() => {
  let img = null

  if (product_detail.value)
    img = product_detail.value.image?.find(
      (image) =>
        image.order_type == selectedOrderType.value &&
        image.product_type == selectedType.value &&
        image.product_roast_title == selectedRoast.value &&
        image.product_pack_name == selectedPackSize.value
    )

  console.log(not_abailable)
  return img
})

const occurrence = ref({
  type: 'single',
  value: 'Weeks',
})

const modalOpen = ref(false)

const EventForm = ref({
  occurrence_type: '',
})
const total = computed(() => {
  let t = 0
  if(store.cart)
  store?.cart?.map((e) => (t += e.product_price * e.product_qty))
  return t
})

const wishList = ref({
  user_id: '',
  product_id: route.params.id,
  updated_at: '',
  created_at: ''
})


const addToWishlist = async () => {
  if (!auth.user) {
    router.push('/login')
  } try {
    const response = await useApi('/add-wishlist', {
      method: "POST",
      body: wishList.value,
    });

    if (response) {
      nuxtApp.$toast("clear");
      nuxtApp.$toast("success", {
        message: response.message,
        className: "alert_error",
      });
    }
  } catch (error) {
    if (
      error.status === 400 ||
      error.status === 422 ||
      (error.status === 500 && error.data.message)
    ) {
      nuxtApp.$toast('clear')
      nuxtApp.$toast('error', {
        message: error.data.message,
        className: 'alert_error',
      })
    }
  }
}
const getWishlisted = async() => {
if(auth.user)
{
  const response = await useApi(`/get-wishlist/${route.params.id}`);
 isWishlisted.value = response.status
}
}
onMounted(() => {
  getProductDetails()
  getWishlisted()
})
</script>

<template>
  <div class="container py-20">
    <!-- {{ selectedOrderType }}  {{selectedType}} {{ selectedRoast}}  {{ selectedPackSize }} -->

    <div
      class="flex flex-col md:flex-row justify-center items-center md:items-start p-6 space-y-4 md:space-y-0 md:space-x-6 bg-stone-100 drop-shadow-lg rounded-lg"
    >
      <div class="w-1/2 h-[450px] flex-1">
        <div class="w-full h-full mb-2 object-cover">
          <!-- {{ product_detail?.image }} -->
          <Skeleton
            v-if="product_detail == null"
            class="h-[125px] w-[250px] rounded-xl"
          />
          <img
            v-else
            :src="
              filteredImages?.product_image
                ? config.public.productImgURL + filteredImages?.product_image
                : not_abailable
            "
            class="h-full w-full rounded-lg border-2 border-yellow-700"
          />
        </div>
        <!-- {{ product_detail?.image[0].product_roast_title }} -->
        <!-- <div class="flex overflow-x-scroll gap-2 w-[550px] ">
        <div v-for="(image, index) in product_detail?.image"  class=" w-36 h-20 rounded-lg">  
            <img v-if="config.public.productImgURL+image.product_image" :src="config.public.productImgURL+image.product_image" @click="selectedRoast=image.product_roast_title , selectedPackSize= image.product_pack_name" :alt="image.product_roast_title" class="h-full border-2 border-yellow-700 rounded">
        </div>
      </div> -->

        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="3"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(image, index) in product_detail?.image"
            ><img
              v-if="image.product_image"
              :src="config.public.productImgURL + image.product_image"
              @click="
                ;(selectedOrderType = image.order_type),
                  (selectedType = image.product_type),
                  (selectedRoast = image.product_roast_title),
                  (selectedPackSize = image.product_pack_name)
              "
              :alt="image.product_roast_title"
          /></swiper-slide>
        </swiper>
      </div>
      <!-- {{auth.user && !isWishlisted}} -->
      <!-- {{ product_detail }} -->
      <div class="flex-1">
        <div class="flex gap-24">
          <h1 class="text-3xl font-bold mb-4">{{ product_detail?.title }}</h1> 
          <div v-if="auth.user && !isWishlisted" @click="addToWishlist()" class="relative inline-block cursor-pointer">
            <div class="transition-transform transform duration-300 hover:scale-110" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="green">
                <path d="M4 9C4 6.49238 5.71351 5 7.5 5C9.40609 5 10.7537 6.58211 12 7.82843C13.2463 6.58211 14.5939 5 16.5 5C18.3158 5 20 6.48356 20 9C20 10.1222 19.7639 11.1501 19.3509 12.1019L21.1856 12.8981C21.7005 11.7114 22 10.4135 22 9C22 5.49592 19.5337 3 16.5 3C14.5905 3 13.1464 3.9848 12 5.02802C10.8536 3.9848 9.40952 3 7.5 3C4.50355 3 2 5.49623 2 9C2 12.0199 3.36207 14.4702 5.20346 16.445C7.03313 18.4073 9.38528 19.955 11.4916 21.1985L12.5084 19.4762C10.441 18.2557 8.29313 16.8259 6.66623 15.0811C5.05106 13.3489 4 11.3626 4 9ZM19 17V14H17V17H14V19H16.999L17 22H19L18.999 19H22V17H19Z"></path>
              </svg>
            </div>
            <div v-if="showTooltip" class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-700 text-white text-center text-sm py-1 rounded shadow-lg">
              Add to Wishlist
            </div>
          </div>
           <svg v-if="isWishlisted" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="rgba(54,166,95,1)"><path d="M19.0001 13.9999V16.9999H22.0001V18.9999H18.9991L19.0001 21.9999H17.0001L16.9991 18.9999H14.0001V16.9999H17.0001V13.9999H19.0001ZM20.2426 4.75736C22.4033 6.92253 22.5715 10.3141 20.7498 12.667C19.9261 12.2403 18.9911 12 18 12C14.6863 12 12 14.6863 12 18C12 19.0089 12.249 19.9596 12.6889 20.794L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z"></path></svg>
        </div>
        <!-- <p v-html="product_detail?.short_description" class=""></p> -->
        <div class="flex py-2 font-bold gap-1">
          <Star
            class="w-3 h-3"
            v-for="rating in 5"
            v-if="!product_detail?.rating"
          />
          <svg
            v-else
            v-for="rating in Math.floor(product_detail?.rating)"
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
            v-if="product_detail?.rating"
            v-for="star in 5 - Math.floor(product_detail?.rating)"
          />
        </div>

        <div class="">
          <div class="py-1">
            <div class="flex space-x-4">
              <label
                v-for="order_type in order_types"
                :class="{
                  'px-4 py-2 border rounded cursor-pointer': true,
                  'bg-[#6F4E37] text-white': selectedOrderType === order_type,
                  'bg-white text-gray-700': selectedOrderType !== order_type,
                }"
              >
                <input
                  type="radio"
                  name="order_type"
                  :value="order_type"
                  v-model="selectedOrderType"
                  class="hidden"
                  @click="changeOrderType(order_type)"
                />
                {{ order_type }}
              </label>
            </div>
          </div>
          <!-- {{ occurrence }} -->

          <div v-if="selectedOrderType === 'Whole Sale'" class="mt-2">
            <div class="relative mb-3">
              <div class="flex flex-col gap-2">
                <p class="text-lg font-semibold py-1">
                  Occurrence Type <span class="text-red-600">*</span>
                </p>
                <div class="flex gap-2 items-center">
                  <div class="flex gap-2 items-center">
                    <div class="flex">
                      <input
                        type="radio"
                        name=""
                        id=""
                        value="single"
                        v-model="occurrence.type"
                      />
                      <label for="" class="font-semibold mx-2">Single</label>
                    </div>
                    <div>
                      <div>
                        <input
                          type="radio"
                          value="recurrence"
                          v-model="occurrence.type"
                          id="toggleModal"
                        />
                        <label for="recurrence" class="font-semibold mx-2"
                          >Recurrence</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <Select
                  v-if="occurrence.type === 'recurrence'"
                  v-model="occurrence.value"
                  class="w-full"
                >
                  <SelectTrigger class="w-[30%]">
                    <SelectValue placeholder="Recurrence Pattern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup class="bg-white">
                      <SelectLabel>Recurrence Pattern</SelectLabel>
                      <SelectItem value="Days"> Daily </SelectItem>
                      <SelectItem value="Weeks"> Weekly </SelectItem>
                      <SelectItem value="Months"> Monthly </SelectItem>
                      <SelectItem value="Years"> Yearly </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div class="py-4">
          <label class="block mb-2 text-xl font-semibold" for="packSize"
            >Product Type <span class="text-red-600">*</span></label
          >
          <div class="flex space-x-4">
            <!-- Grinded -->
            <label
              v-for="bean in beans"
              :class="{
                'px-4 py-2 border rounded cursor-pointer': true,
                'bg-[#6F4E37] text-white': selectedType === bean,
                'bg-white text-gray-700': selectedType !== bean,
              }"
            >
              <input
                type="radio"
                name="bean"
                :value="bean"
                v-model="selectedType"
                class="hidden"
                @click="changeBean(bean)"
              />
              {{ bean }}
            </label>

            <!-- Whole Bean -->
            <!-- <label
              :class="{
                'px-4 py-2 border rounded cursor-pointer': true,
                'bg-[#6F4E37] text-white': selectedType === 'Whole Bean',
                'bg-white text-gray-700': selectedType !== 'Whole Bean',
              }"
            >
              <input
                type="radio"
                name="grind"
                value="Whole Bean"
                v-model="selectedType"
                class="hidden"
              />
              Whole Bean
            </label> -->
          </div>
        </div>

        <div class="py-4">
          <label class="block mb-2 text-xl font-semibold" for="packSize"
            >Select Roast Type <span class="text-red-600">*</span></label
          >
          <div class="flex space-x-4">
            <label
              v-for="roast in roasts"
              :class="{
                'px-4 py-2 border rounded cursor-pointer': true,
                'bg-[#6F4E37] text-white': selectedRoast === roast,
                'bg-white text-gray-700': selectedRoast !== roast,
              }"
              @click="changeType(roast)"
            >
              <input
                type="radio"
                :value="roast"
                v-model="selectedRoast"
                class="hidden"
                name="roast"
              />
              {{ roast }}
            </label>
          </div>
        </div>

        <div>
          <label class="block mb-2 text-xl font-semibold pt-4" for="packSize"
            >Select Pack Size <span class="text-red-600">*</span></label
          >
          <select
            id="packSize"
            v-model="selectedPackSize"
            class="block w-2/5 p-2 border rounded-md bg-white text-gray-700 text-lg font-semibold"
          >
            <option
              v-for="size in sizes"
              :value="size"
              class="text-lg font-semibold py-1"
            >
              {{ size }}
            </option>
          </select>
        </div>

        

        <div v-if="!isInCart > 0" class="text-2xl text-green-500 font-bold py-6">
          <span class="text-gray-700">Unit Price:</span> ${{
            filteredImages?.product_price.toFixed(2)
          }}
        </div>
        
        <div v-if="isInCart > 0" class="text-2xl text-green-500 font-bold py-6">
          <span class="text-gray-700">Unit Price:</span> ${{ total.toFixed(2) }}
        </div>
       <div class="flex">
        <div
          v-if="isInCart > 0"
          class="flex bg-[#6F4E37] px-5 py-1.5 rounded-xl items-center justify-between w-[300px]"
        >
          <button
            v-if="isInCart > 1"
            @click="store.decresecart(product_detail.id)"
            class="px-2 text-white border-r font-normal flex items-center justify-center"
          >
            <Minus />
          </button>
          <button
            v-else
            @click="removeCart(product_detail.id)"
            class="px-2 text-white border-r font-normal flex items-center justify-center"
          >
            <Minus />
          </button>
          <p class="px-2 text-white text-center">{{ isInCart }}</p>
          <!-- <input class="px-2 text-black text-center" :value="isInCart" /> -->
          <button
            @click="store.increaseCart(product_detail.id)"
            class="px-2 text-white border-l flex items-center justify-center"
          >
            <Plus />
          </button>
        </div>


          <button
              v-else
              :disabled="!filteredImages"
              @click="addToCart()"
              class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-[300px]"
            >
              Add to Cart
            </button>

          <button @click="placeOrder()" class="bg-[#6F4E37] text-white px-6 mx-2 py-1.5 rounded-xl w-[300px]">
            Go To Checkout
          </button>
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
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  border-radius: 4px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.75;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
