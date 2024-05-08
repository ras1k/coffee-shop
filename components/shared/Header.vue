<script setup>
const currentPage = ref("Home");
const route = useRoute();
const router = useRouter();

const showNavbar = ref(false);
const currentScrollPosition = ref(0);

const myFunction = () => {
  currentScrollPosition.value = window.scrollY;
};

const loginCookie = useCookie("loginCookie");
const tokenCookie = useCookie("tokenCookie");
const logoutUser = () => {
  router.push(`/login/${loginCookie.value.loginRole}`);
  loginCookie.value = "";
  tokenCookie.value = "";
};

onMounted(() => {
  window.addEventListener("scroll", myFunction);
});
</script>
<template>
  <div
    class="fixed top-0 w-full z-50 sm:px-[5%] h-[80px] flex items-center navBarStyle bg-[url('/assets/img/common/nav.png')] bg-cover"
    ref="navBar"
    :class="
      (route.name != 'index' ? 'text-black' : 'text-white',
      currentScrollPosition > 0 ||
      route.name.includes('register') ||
      route.name.includes('dashboard')
        ? 'bg-white'
        : route.name.includes('login') ||
          route.name.includes('register') ||
          route.name.includes('dashboard')
        ? 'text-black bg-white'
        : 'text-black bg-white')
    "
  >
    <div
      class="fixed sm:static w-full flex justify-between items-center gap-5 pt-3 sm:bg-transparent px-[5%] sm:px-0 z-50"
    >
      <nuxt-link to="/" class="text-2xl font-bold">
        <!-- Coffee <span class="text-green-400">Exploration</span> LLC -->
        <img src="@/assets/img/common/logo.png" alt="" class="h-40 transition ease-out hover:scale-90" />
      </nuxt-link>
      <div
        class="absolute sm:static mt-[55px] sm:mt-0 w-full sm:w-fit z-40 sm:bg-transparent flex flex-col sm:flex-row gap-5 items-center font-bold text-md justify-center duration-200 "
        :class="
          showNavbar == true ? '' : 'translate-y-[-100%] sm:translate-y-0'
        "
        @click="showNavbar = !showNavbar"
      >
        <nuxt-link to="/" class="">Home </nuxt-link>
        <!-- <nuxt-link to="/">Product &amp; Services</nuxt-link> -->
        <div class="flex items-center gap-5">
          <div class="font-bold flex gap-1 items-center relative group">
            <p class="hidden sm:block cursor-pointer ">Products &amp; Services</p>
            <div
              class="p-2 rounded-md absolute top-[100%] right-0 hidden group-hover:flex text-black bg-white drop-shadow-md flex-col gap-2"
            >
              <NuxtLink to="/products" class="hover:bg-[#e6e1ce] px-2 py-1 rounded">Products</NuxtLink>
              <!-- <NuxtLink to="/catering-prices">Catering Prices</NuxtLink>
              <NuxtLink to="/coffee-school">Coffee School</NuxtLink> -->
              <NuxtLink to="/equipments" class="hover:bg-[#e6e1ce] px-2 py-1 rounded">Equipment</NuxtLink>
              <NuxtLink to="/wholesale" class="hover:bg-[#e6e1ce] px-2 py-1 rounded">Wholesale</NuxtLink>
            </div>
          </div>
        </div>
        <nuxt-link to="/MenuPage" class="">Menu</nuxt-link>
        <!-- <div class="flex items-center gap-5">
          <div class="font-bold flex gap-1 items-center relative group">
            <p class="hidden sm:block">Rewards Center</p>
            <div
              class="p-2 rounded-md absolute top-[100%] right-0 hidden group-hover:flex text-black bg-white drop-shadow-md flex-col gap-2"
            >
              <NuxtLink to="/rewards">Rewards</NuxtLink>
              <NuxtLink to="/reviews">Reviews</NuxtLink>
              <NuxtLink to="/gift-card">Gift cards</NuxtLink>
            </div>
          </div>
        </div> -->
        <!-- <nuxt-link to="/rewards">Rewards</nuxt-link>
        <nuxt-link to="/gift-card">Gift Cards</nuxt-link>
        <nuxt-link to="/reviews">Reviews</nuxt-link> -->

        <nuxt-link to="/investment-opportunity" class=" "
          >Investment Opportunity</nuxt-link
        >
        <div class="flex items-center gap-5">
          <div class="font-bold flex gap-1 items-center relative group">
            <nuxt-link to="/open-location" class="hidden sm:block  ">Open A Location</nuxt-link>
            <!-- <p class="hidden sm:block">Open A Location</p> -->
            <div
              class="p-2 rounded-md w-[210px] drop-shadow-lg absolute top-[100%] left-5 hidden group-hover:flex text-black bg-white flex-col gap-1"
            >
              <ul class="relative submenu">
                <NuxtLink to="/arabica" class="hover:bg-[#e6e1ce] p-2 rounded flex justify-between mr-5">CoffeeX Arabica <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="24"
              height="24"
              fill="rgb(111,78,55)"
            >
              <path
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              ></path>
            </svg>  </NuxtLink>
                
              <ul class="w-[150px] absolute hidden p-2 right-[-70%] bg-white drop-shadow-lg top-0 rounded-lg submenu-item">
                <li class="shadow-2xl py-1 text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/arabica-express" class=" p-2 rounded">Express</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/arabica-lounge" class="p-2 rounded">Lounge</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/arabica-premium" class="p-2 rounded">Premium</nuxt-link></li>
              </ul>
              </ul>
              <ul class="relative submenu">
                <NuxtLink to="/america" class="hover:bg-[#e6e1ce] p-2 rounded flex justify-between mr-5"> CoffeeX America <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="24"
              height="24"
              fill="rgb(111,78,55)"
            >
              <path
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              ></path>
            </svg></NuxtLink>
              <ul class="w-[150px] absolute hidden p-2 right-[-70%] bg-white drop-shadow-lg top-0 rounded-lg submenu-item">
                <li class=" shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/america-express" class="p-2 rounded">Express</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/america-lounge" class="p-2 rounded">Lounge</nuxt-link></li>
                <li class=" shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/america-premium" class="p-2 rounded">Premium</nuxt-link></li>
              </ul>
              </ul>
              <ul class="relative submenu">
                <NuxtLink to="/europa" class="hover:bg-[#e6e1ce] p-2 rounded flex justify-between mr-5"> CoffeeX Europa <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="24"
              height="24"
              fill="rgb(111,78,55)"
            >
              <path
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              ></path>
            </svg></NuxtLink>
              <ul class="w-[150px] absolute hidden p-2 right-[-70%] bg-white drop-shadow-lg top-0 rounded-lg submenu-item">
                <li class=" shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/europa-express" class=" p-2 rounded">Express</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/europa-lounge" class=" p-2 rounded">Lounge</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/europa-premium" class="p-2 rounded">Premium</nuxt-link></li>
              </ul>
              </ul>
              <ul class="relative submenu">
                <NuxtLink to="/asia" class="hover:bg-[#e6e1ce] p-2 rounded flex justify-between mr-5"> CoffeeX Asia <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="24"
              height="24"
              fill="rgb(111,78,55)"
            >
              <path
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              ></path>
            </svg></NuxtLink>
              <ul class="w-[150px] absolute hidden p-2 right-[-70%] bg-white drop-shadow-lg top-0 rounded-lg submenu-item">
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/asia-express" class="p-2 rounded">Express</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/asia-lounge" class=" p-2 rounded">Lounge</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/asia-premium" class="p-2 rounded">Premium</nuxt-link></li>
              </ul>
              </ul>
              <ul class="relative submenu">
                <NuxtLink to="/africa" class="hover:bg-[#e6e1ce] p-2 rounded flex justify-between mr-5"> CoffeeX Africa <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="24"
              height="24"
              fill="rgb(111,78,55)"
            >
              <path
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              ></path>
            </svg></NuxtLink>
              <ul class="w-[150px] absolute hidden p-2 right-[-70%] bg-white drop-shadow-lg top-0 rounded-lg submenu-item">
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/africa-express" class=" p-2 rounded">Express</nuxt-link></li>
                <li class=" shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/africa-lounge" class="p-2 rounded">Lounge</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] rounded"><nuxt-link to="/africa-premium" class="p-2 rounded">Premium</nuxt-link></li>
              </ul>
              </ul>
              <!-- <NuxtLink to="/catering-prices">Catering Prices</NuxtLink>
              <NuxtLink to="/coffee-school">Coffee School</NuxtLink> -->
              <!-- <NuxtLink to="/america"CoffeeX America</NuxtLink> -->
              <!-- <NuxtLink to="/europa">CoffeeX Europa</NuxtLink> -->
              <!-- <NuxtLink to="/asia">CoffeeX Asia</NuxtLink> -->
              <!-- <NuxtLink to="/africa">CoffeeX Africa</NuxtLink> -->
            </div>
          </div>
        </div>
        <!-- <nuxt-link to="/open-location">Open A Location</nuxt-link> -->
        <!-- <div class="font-bold flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="rgba(234,113,46,1)"
          >
            <path
              d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"
            ></path>
          </svg>
          <p class="hidden sm:block">Cart</p>
        </div> -->
        <nuxt-link to="/about" class=" ">About</nuxt-link>
        <nuxt-link to="/contact" class=" ">Contact</nuxt-link>
        <nuxt-link v-if="!loginCookie" to="/supply-chain" class=" "
          >Supply Chain</nuxt-link
        >
        <div class="flex items-center gap-5">
          <div class="font-bold flex gap-1 items-center relative group">
            <nuxt-link class="hidden sm:block cursor-pointer lg: ">Customer Portal</nuxt-link>
            <!-- <p class="hidden sm:block">Open A Location</p> -->
            <div
              class="p-2 rounded-md w-[200px] drop-shadow-lg absolute top-[100%] left-10 hidden group-hover:flex text-black bg-white flex-col gap-1"
            >
            <nuxt-link v-if="!loginCookie" to="/login/user-dashboard" class="hover:bg-[#e6e1ce] p-2 rounded"
          >Customer Login</nuxt-link
        >
        <NuxtLink v-else to="/dashboard" class="lg:  hover:bg-[#e6e1ce] p-2 rounded">Dashboard</NuxtLink>
              <ul class="relative submenu">
                <h1 class="cursor-pointer hover:bg-[#e6e1ce] p-2 rounded flex gap-2">Rewards Center <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="24"
              height="24"
              fill="rgb(111,78,55)"
            >
              <path
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              ></path>
            </svg></h1>
              <ul class="w-[125px] absolute hidden p-2 right-[100%] bg-white drop-shadow-lg top-0 rounded-lg submenu-item">
                <li class="shadow-2xl py-1 text-lg hover:bg-[#e6e1ce] p-2 rounded"><nuxt-link to="/rewards">Rewards</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] p-2 rounded"><nuxt-link to="/reviews">Reviews</nuxt-link></li>
                <li class="shadow-2xl py-1 border-black text-lg hover:bg-[#e6e1ce] p-2 rounded"><nuxt-link to="/gift-card">Gift Cards</nuxt-link></li>
              </ul>
              </ul>

            </div>
          </div>
        </div>
        

        <div class="flex items-center font-bold gap-5">
          <div
            v-if="!loginCookie"
            class="flex gap-1 items-center relative group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(234,113,46,1)"
            >
              <path
                d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18Z"
              ></path>
            </svg>
            <p class="hidden sm:block cursor-pointer">Admin Login</p>
            <div
              class="p-2 rounded-md absolute top-[100%] right-0 hidden group-hover:flex text-black bg-white drop-shadow-md flex-col gap-1"
            >
              <NuxtLink to="/login/hr-management" class="hover:bg-[#e6e1ce] p-2 rounded">Hr Management</NuxtLink>
              <NuxtLink to="/login/inventory-management" class="hover:bg-[#e6e1ce] p-2 rounded"
                >Inventory System</NuxtLink
              >
              <NuxtLink to="/login/supply-chain" class="hover:bg-[#e6e1ce] p-2 rounded">Supply Chain System</NuxtLink>
              <NuxtLink to="/login/accounting-management" class="hover:bg-[#e6e1ce] p-2 rounded"
                >Accounting Management</NuxtLink
              >
              <NuxtLink to="/login/customer-management" class="hover:bg-[#e6e1ce] p-2 rounded"
                >Customer Management</NuxtLink
              >
              <NuxtLink to="/login/marketing-management" class="hover:bg-[#e6e1ce] p-2 rounded"
                >Media,Communication,Marketing Management System</NuxtLink
              >
            </div>
          </div>
          <div v-else class="cursor-pointer">
            <p @click="logoutUser()">Log Out</p>
          </div>
          <!-- <div class="font-bold flex gap-1 items-center relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(234,113,46,1)"
            >
              <path
                d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18Z"
              ></path>
            </svg>
            <p class="hidden sm:block">Login</p>
            <div
              class="p-2 rounded-md absolute top-[100%] right-0 hidden group-hover:block text-black bg-white drop-shadow-md w-[200px]"
            >
              <p>Vendor Login</p>
              <p>Customer Login</p>
              <p>Register</p>
            </div>
          </div> -->

          <div class="block sm:hidden" @click="showNavbar = !showNavbar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(0,0,0,1)"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #f19822;
}
.submenu:hover .submenu-item{
  display: block;
}
</style>
