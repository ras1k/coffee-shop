<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Plus, Minus, Star, Axis3DIcon } from "lucide-vue-next";

const store = useProductsStore();
const route = useRoute();
const config = useRuntimeConfig()
const selectedRoast = ref(null);
const selectedPackSize = ref(null);

const product = computed(() => {
  let prod = null;
  prod = store.allProduct.find((e) => e.id == route.params.id);
  return prod;
});

const product_detail = ref()
const sizes = ref([])
const roasts = ref([])
const price = ref([])
const getProductDetails = async (id) => {
  
  const data = await useApi('/product_detail/'+ route.params.id )
  product_detail.value = data
  data.image.map((e) => {
    if (selectedRoast.value == null && selectedPackSize.value == null && e.product_image != '' )
    {
      console.log(e)
      selectedPackSize.value = e.product_pack_name
      selectedRoast.value = e.product_roast_title
    }
    
    let checkPrice = price.value.find((f) => f == e.product_price)
    if(!checkPrice)
    {
      price.value.push(e.product_price)
    }

    let checkRoast = roasts.value.find((f) => f ==  e.product_roast_title)
    if (!checkRoast)
    {
    roasts.value.push( e.product_roast_title)
   }
    let checkSize = sizes.value.find((f) => f == e.product_pack_name)
    if (!checkSize)
    {
    sizes.value.push( e.product_pack_name)
   }
   
  })
  console.log('Get api from product details', data)
}

const imageUrl = config.public.productImgURL + product.image;

const addToCart = (product) => {
  store.addToCart({ ...product, quantity: 1 });
  console.log(store.cart);
};

const isInCart = computed(() => {
  return store.cart.find((item) => item.id == product.value.id)?.quantity;
});

const removeCart = (id) => {
  store.removeFromCart(id);
};

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];

const changeType = (type) => {
  
  selectedRoast.value = type;
};

const selectSize = (size) => {

  selectedPackSize.value = size;
};

const filteredImages = computed(() => {
  let img = null
  
  if(product_detail.value)
    img = product_detail.value.image?.find(image => image.product_roast_title == selectedRoast.value && image.product_pack_name == selectedPackSize.value);
console.log(img)
  return img
});

onMounted(() => {
  getProductDetails()
})

</script>

<template>
  <div class="container py-20">
    <div
      class="flex flex-col md:flex-row justify-center items-center md:items-start p-6 space-y-4 md:space-y-0 md:space-x-6 bg-stone-100 drop-shadow-lg rounded-lg"
    >

      <div class="w-1/2 h-[450px] flex-1">
      <div class="w-full h-[80%] mb-2 object-cover">
          <img :src="config.public.productImgURL+filteredImages?.product_image" class="h-full w-full rounded-lg border-2 border-yellow-700">
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
            ><img v-if="image.product_image" :src="config.public.productImgURL+image.product_image" @click="selectedRoast=image.product_roast_title , selectedPackSize= image.product_pack_name" :alt="image.product_roast_title"
          /></swiper-slide>

        </swiper>

      </div>
    
      <div class="flex-1">
        <h1 class="text-3xl font-bold mb-4">{{ product_detail?.title }}</h1>
        <!-- {{  product_detail }} -->
        <p v-html="product_detail?.short_description" class=""></p>
        <div class="flex py-2 font-bold gap-1">
          <Star class="w-3 h-3" v-for="rating in 5" v-if="!product_detail?.rating" />
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
        <div class="text-2xl text-red-500 font-bold mb-6">
          ${{ product_detail?.price.toFixed(2) }}
        </div>
        <!-- {{ product_detail.image }} -->
        <div
        v-if="isInCart > 0"
        class="flex bg-[#6F4E37] px-5 py-1.5 rounded-xl items-center justify-between mt-10 w-[300px]"
      >
        <button
          v-if="isInCart > 1"
          @click="store.decresecart(product.id)"
          class="px-2 text-white border-r font-normal flex items-center justify-center"
        >
          <Minus />
         
        </button>
        <button
          v-else
          @click="removeCart(product.id)"
          class="px-2 text-white border-r font-normal flex items-center justify-center"
        >
          <Minus />
         
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
        class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-[300px] mt-10"
      >
        Add to Cart
      </button>
        <!-- <button class="px-6 py-3 btn w-1/2 my-10">Add to Cart</button> -->
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
