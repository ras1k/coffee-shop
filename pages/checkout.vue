<script setup>
import { loadStripe } from '@stripe/stripe-js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const nuxtApp = useNuxtApp()
// const config = useRuntimeConfig()

// config.public.apiUrl
const loaderCalls = ref(false)
const store = useProductsStore()
const authStore = useAuthStore()
const userCookie = useCookie('userCookie')
const user = authStore.user
console.log(user)

const formData = ref({
  user_id: authStore.user?.id,
  name: authStore.user?.name,
  email: authStore.user?.email,
  address1: authStore.user?.address,
  address2: '',
  payment: '',
  card_fname: '',
  card_lname: '',
  card_no: '',
  card_expire: '',
  card_cvc: '',
  product: [],

  session_token: '',

  success_token: '',
})

console.log(userCookie.value)

const stripe = await loadStripe(
  'pk_test_51O1nZWKGnxnRW2FleKUVO7ehputq4YhMzBXIgBk9qaku5gzZGAvTQmjhN18YSHIXSjXhVgndcos35WIVhDPxmim000RQoO42wT'
)

const route = useRoute()
const total = computed(() => {
  let t = 0
  store.cart.map((e) => (t += e?.product_price * e?.product_qty))
  return t
})
const allMenu = () => {
  selectedMenu.value = ''
}

const removeCart = () => {
  store.cart.length--
}
const checkout = async () => {
  loaderCalls.value = true
  try {
    store.cart.map((e) => {
      formData.value.product.push(e)
    })
    const response = await $fetch('/api/stripe/create', {
      method: 'POST',
      body: {
        amount: total?.value,
        email: user?.email,
      },
    })
    const { sessionId } = response
    formData.value.session_id = response.sessionId
    store.orderdata = formData.value
    await stripe.redirectToCheckout({ sessionId })
    loaderCalls.value = false
  } catch (error) {
    loaderCalls.value = false
    console.error('Error creating session:', error)
  }
}

const sameAsBilling = ref(false)

onMounted(() => {
  if (!authStore.user) {
    router.push('/login')
  }
})

</script>

<template>
  <div
    class="bg-gray-200 min-h-screen flex justify-center items-center flex-col px-[15%]"
  >
    <BaseLoader v-if="loaderCalls == true" />
    <h2 class="text-4xl font-semibold mb-6 text-center text-gray-800">
      Checkout
    </h2>

    <div class="bg-white shadow-lg rounded-lg p-8 w-full flex gap-10">
      <div class="w-1/4">
        <div class="py-5">
          <div class="bg-white rounded-xl drop-shadow-lg p-3 mb-3">
            <div
              class="pb-2 flex items-center gap-2 text-green-600 text-sm font-semibold"
            >
              <p class="h-3 w-3 rounded-full bg-green-600"></p>
              Open Now
            </div>
          </div>

          <div class="bg-white rounded-xl drop-shadow-lg p-3 mb-3">
            <h1 class="text-xl font-semibold pb-2 border-b">My Order</h1>
            <div
              v-for="item in store.cart"
              class="py-2 flex justify-between gap-2 text-sm font-semibold border-b"
            > 
              <p> {{ item.product_qty }} x {{ item.product_title }}</p>
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
                    v-if="item?.product_qty > 1"
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
              <p>$ {{ total }}</p>
            </div>
          </div>
        </div>
      </div>
      <form @submit.prevent="checkout" class="w-3/4">
        <div class="mb-6">
          <label
            for="name"
            class="block text-sm font-semibold text-gray-800 mb-2"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="input-field"
            placeholder="John Doe"
            disabled
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block text-sm font-semibold text-gray-800 mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="input-field"
            placeholder="example@example.com"
            disabled
          />
        </div>
        <div class="mb-6">
          <label
            for="address"
            class="block text-lg font-semibold text-gray-800 mb-2"
            >Shipping Address</label
          >
          <div class="flex gap-2 items-center mb-4">
            <div class="w-1/2">
              <label for="text" class="mb-2 ">State</label>
              <input type="text" class="w-1/2 input-field" placeholder="State">
            </div>
            <div class="w-1/2">
              <label for="text">Zip Code</label>
              <input type="text" class="w-1/2 input-field" placeholder="State">
            </div>
          </div>
          <label
          for="address"
          class="block text-sm font-semibold text-gray-800 mb-2"
          >Address Line 1</label
        >
          <textarea
            id="address"
            v-model="formData.address2"
            class="input-field"
            rows="4"
            placeholder="123 Main St, City, Country"
          ></textarea>
          <label
          for="address"
          class="block text-sm font-semibold text-gray-800 mb-2"
          >Address Line 2</label
        >
          <textarea
            id="address"
            v-model="formData.address2"
            class="input-field"
            rows="4"
            placeholder="123 Main St, City, Country"
          ></textarea>
        </div>
        <div class="mb-6">
          <label
            for="address"
            class="block text-lg font-semibold text-gray-800 mb-2"
            >Billing Address</label
          >
          <div class="flex gap-2 items-center mb-4">
            <div class="w-1/2">
              <label for="text" class="mb-2 ">State</label>
              <input type="text" class="w-1/2 input-field" placeholder="State">
            </div>
            <div class="w-1/2">
              <label for="text">Zip Code</label>
              <input type="text" class="w-1/2 input-field" placeholder="State">
            </div>
          </div>
          <label
          for="address"
          class="block text-sm font-semibold text-gray-800 mb-2"
          >Address Line 1</label
        >
          <textarea
            id="address"
            v-model="formData.address2"
            class="input-field"
            rows="4"
            placeholder="123 Main St, City, Country"
          ></textarea>
          <label
          for="address"
          class="block text-sm font-semibold text-gray-800 mb-2"
          >Address Line 2</label
        >
          <textarea
            id="address"
            v-model="formData.address2"
            class="input-field"
            rows="4"
            placeholder="123 Main St, City, Country"
          ></textarea>
        </div>
        <!-- <div class="flex gap-2 items-center mb-4">
          <div class="w-1/2">
            <label for="text" class="mb-2">State</label>
            <input type="text" class="w-1/2 input-field" placeholder="State">
          </div>
          <div class="w-1/2">
            <label for="text">Zip Code</label>
            <input type="text" class="w-1/2 input-field" placeholder="State">
          </div>
        </div> -->

        <div class="flex justify-center">
          <button
            v-if="store.cart.length > 0"
            class="px-10 w-1/3 py-2 text-center rounded-full shadow-md bg-[#683615] hover:bg-black transition ease-out hover:scale-105 font-semibold text-white"
          >
            Proceed to Checkout
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.input-field:focus {
  border-color: #4a90e2;
  outline: none;
}
</style>
