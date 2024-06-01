<script setup>
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/stores/header'
import { useAuthStore } from '@/stores/authStore';

// pinia
const { routerHistory } = storeToRefs(useHeaderStore())
const { setRouterHistory } = useHeaderStore()

const nuxtApp = useNuxtApp()

const route = useRoute()
const router = useRouter()
const store = useAuthStore()
const { LOGIN } = useUrls()
const loginload = ref(false)
const loginCookie = useCookie('loginCookie')
const tokenCookie = useCookie('tokenCookie')
const userCookie = useCookie('userCookie')

const loginForm = ref({
  email: '',
  password: '',
  loginRole: '',
})
const config = useRuntimeConfig()

const loginUser = async () => {
  loginload.value= true
  loginForm.value.loginRole = 'Customer'
  if (loginForm.value.email !== '' && loginForm.value.password !== '') {

    try {
      const response = await $fetch(config.public.apiUrl + '/user/login', {
        method: 'POST',
        body: loginForm.value,
      })

      if (response.message === "Login successful") {
        store.user = response.user;
        tokenCookie.value = response.token;
        userCookie.value = response.user;
        response.user.loginRole = loginForm.value.loginRole;
        loginCookie.value = response.user;
        nuxtApp.$toast("clear");
        nuxtApp.$toast("success", {
          message: response.message,
          className: "alert_error",
        });
        if (routerHistory.value !== "") {
          router.push(routerHistory.value);
          setRouterHistory("");
        } else {
          router.push("/dashboard");
        }
      }
    } catch (error) {
      if (error.status === 400 && error.data.message) {
        nuxtApp.$toast('clear')
        nuxtApp.$toast('error', {
          message: error.data.message,
          className: 'alert_error',
        })
      }
    }
  }
   loginload.value= true
}
</script>

<template>
  <div class="w-full h-full px-[10%] py-20 flex items-center justify-center">
    <div
      class="py-10 mt-10 sm:py-20 bg-[#6F4E37] rounded-lg drop-shadow-lg w-full"
    >
      <BaseHeaderTitle />

      <div class="px-[30%] pt-20">
        <form
          v-if="!loginCookie || loginCookie === ''"
          class="flex flex-col items-center gap-6 text-lg"
          @submit.prevent="loginUser"
        >
          <div class="flex flex-col gap-1 w-full">
            <label for="email" class="text-white text-xl font-semibold"
              >Email</label
            >
            <input v-model="loginForm.email" type="email" class="text-black" />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label for="password" class="text-white text-xl font-semibold"
              >Password</label
            >
            <input
              v-model="loginForm.password"
              type="password"
              class="text-black"
            />
          </div>

          <div class="text-white text-xl">
            Don't have an account?
            <NuxtLink
              to="/register"
              class="text-green-400 hover:underline underline-offset-2"
            >
              Register Here
            </NuxtLink>
          </div>
          <Button :disabled="loginload" type="submit" class="py-1.5 flex w-2/3 items-center rounded-full justify-center gap-4 bg-black hover:bg-white font-semibold text-white hover:text-black transition ease-out hover:scale-95 mt-4">Login

            <svg v-if="loginload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 animate-spin" fill="currentColor"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path></svg>
          </Button>
        
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply p-2 rounded-md focus:outline-none;
}
</style>
