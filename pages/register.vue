<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/authStore";
import { useHeaderStore } from "~/stores/header";
const nuxtApp = useNuxtApp();
const route = useRoute();
const router = useRouter();
const store = useAuthStore();
const loginCookie = useCookie("loginCookie");
const tokenCookie = useCookie("tokenCookie");
const userCookie = useCookie("userCookie");
const loginload = ref(false);

// pinia
const { routerHistory } = storeToRefs(useHeaderStore());
const { setRouterHistory } = useHeaderStore();

const registerForm = ref({
  name: "",
  email: "",
  phone: "",
  role: "",
  gender: "",
  password: "",
  password_confirmation: "",
  address: "",
  country: "",
});
const config = useRuntimeConfig();
const handleRegister = async () => {
  loginload.value= true
  try {
    const response = await $fetch(config.public.apiUrl + "/registration", {
      method: "POST",
      body: registerForm.value,
    });
    if (response.token) {
      console.log(response.message);
      response.data.loginRole = registerForm.value.role;

      store.user = response.data;
      tokenCookie.value = response.token;
      userCookie.value = response.data;


      userCookie.value.role = registerForm.role;
      console.log(response.data);
      loginCookie.value = response.data;
      
      nuxtApp.$toast("clear");
      nuxtApp.$toast("success", {
        message: response.message,
        className: "alert_error",
      });
      if (routerHistory.value !== "") {
        router.push(routerHistory.value);
        setRouterHistory("");
      } else {
        router.push('/dashboard')
        console.log(userCookie.value);
      }
    }
    loginload.value= false
  } catch (error) {
    if (
      error.status === 400 ||
      error.status === 422 ||
      (error.status === 500 && error.data.message)
    ) {
      nuxtApp.$toast("clear");
      nuxtApp.$toast("error", {
        message: error.data.message,
        className: "alert_error",
      });
    }
  }
  console.log(registerForm.value, "registerForm.value");
  loginload.value= true
};

// const loginUser = async () => {
//   if (registerForm.value.email !== "" && registerForm.value.password !== "") {
//     try {
//       const response = await $fetch(config.public.apiUrl + "/registration", {
//         method: "POST",
//         body: registerForm.value,
//       });

//       if (response.message === "User Created!") {
//         store.user = response.user;
//         tokenCookie.value = response.token;
//         nuxtApp.$toast("clear");
//         nuxtApp.$toast("success", {
//           message: response.message,
//           className: "alert_error",
//         });
//         if (routerHistory.value !== "") {
//           router.push(routerHistory.value);
//           setRouterHistory("");
//         } else {
//           router.push("/dashboard");
//         }
//       }
//     } catch (error) {
//       if (error.status === 400 && error.data.message) {
//         nuxtApp.$toast("clear");
//         nuxtApp.$toast("error", {
//           message: error.data.message,
//           className: "alert_error",
//         });
//       }
//     }
//   }
// };
</script>
<template>
  <div class="w-full h-full px-[10%] py-20 flex items-center justify-center">
    <div
      class="py-10 mt-10 sm:py-20 bg-[#6F4E37] rounded-lg drop-shadow-lg w-full"
    >
      <BaseHeaderTitle />

      <div class="px-[25%] pt-20">
        <form @submit.prevent="handleRegister">
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/3">
              <label for="name" class="block font-semibold text-white text-xl"
                >Name</label
              >
              <input
                v-model="registerForm.name"
                type="text"
                placeholder="Name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="email" class="block font-semibold text-white text-xl"
                >Email</label
              >
              <input
                v-model="registerForm.email"
                type="email"
                placeholder="example@email.com"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="phone" class="block font-semibold text-white text-xl"
                >Phone</label
              >
              <input
                v-model="registerForm.phone"
                type="number"
                placeholder="+1"
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none !text-black p-2"
              />
            </div>
          </div>

          <div class="lg:flex items-center gap-5 mt-2">
            <div class="mb-4 lg:w-1/2">
              <label for="name" class="block font-semibold text-white text-xl">
                Gender</label
              >
              <select
                v-model="registerForm.gender"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="mb-4 lg:w-1/2">
              <label for="name" class="block font-semibold text-white text-xl">
                Role</label
              >
              <select
                v-model="registerForm.role"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option value="Customer">Customer</option>
                <option value="investor">Investor</option>
              </select>
            </div>
          </div>

          <div class="lg:flex items-center gap-5 mt-2">
            <div class="mb-4 lg:w-1/2">
              <label for="name" class="block font-semibold text-white text-xl"
                >Password</label
              >
              <input
                v-model="registerForm.password"
                type="password"
                placeholder="Password"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              />
            </div>
            <div class="mb-4 lg:w-1/2">
              <label
                for="message"
                class="block font-semibold text-white text-xl"
                >Password Confirmation</label
              >
              <input
                v-model="registerForm.password_confirmation"
                type="password"
                placeholder="Confirm Password"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              />
            </div>
          </div>

          <div class="lg:flex items-center gap-5 mt-2">
            <div class="mb-4 lg:w-1/2">
              <label for="name" class="block font-semibold text-white text-xl"
                >Address</label
              >
              <input
                v-model="registerForm.address"
                type="text"
                placeholder="Address"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              />
            </div>
            <div class="mb-4 lg:w-1/2">
              <label
                for="message"
                class="block font-semibold text-white text-xl"
                >Country</label
              >
              <input
                v-model="registerForm.country"
                type="text"
                placeholder="Country"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              />
            </div>
          </div>

          <div class="flex items-center justify-center flex-col gap-5">
            
            <button
              type="submit"
              :disabled="loginload"
              class="md:px-10 md:w-1/2 py-2 flex items-center justify-center gap-4 text-center rounded-full bg-black hover:bg-white font-semibold text-white hover:text-black transition ease-out hover:scale-95 mt-4"
            >
              Register
              <svg v-if="loginload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 animate-spin" fill="currentColor"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path></svg>
            </button>
            <div class="text-white text-xl font-semibold">
              Have an Account?
              <nuxt-link to="/login" class="text-green-500 hover:underline"
                >Login here</nuxt-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:-internal-edge-excel-like-autofill-previewed {
  color: black !important;
}
</style>
