<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/authStore";
import { useHeaderStore } from "~/stores/header";
import {useProductsStore } from "/stores/products"
const nuxtApp = useNuxtApp();
const route = useRoute();
const router = useRouter();
const store = useAuthStore();
const productStotre = useProductsStore();
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
  phone_no: "",
  type: "",
  industry: "",
  sub_industry: "",
  address: "",
  country: "",
  reason: "",
  company_name: "",
  no_of_employee: "",
  no_of_daily_customer: "",
  no_of_monthly_customer: "",
});

const business_type = ref();

const config = useRuntimeConfig();
const handleRegister = async () => {
  loginload.value = true;
  productStotre.applyForSample.value = registerForm.value
  try {
    const response = await useApi("/apply-for-sample", {
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
      // console.log(response.data);
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
        router.push("/dashboard");
        console.log(userCookie.value);
      }
    }
    registerForm.value = {
      name: "",
      email: "",
      phone_no: "",
      type: "",
      industry: "",
      sub_industry: "",
      address: "",
      country: "",
      reason: "",
      company_name: "",
      no_of_employee: "",
      no_of_daily_customer: "",
      no_of_monthly_customer: "",
    };
    nuxtApp.$toast("clear");
    nuxtApp.$toast("success", {
      message: response.message,
      className: "alert_error",
    });
    loginload.value = false;
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
  loginload.value = false;
};

const businessType = ref([
  {
    name: "Consumer Goods & Products",
    sub: [
      "Consumer Goods Rental",
      "Fitness and Recreation Centers",
      "Hotels and Accommodation",
      "Laundry Services",
      "Miscellaneous Personal Services",
      "Personal Care Services",
      "Photofinishing",
      "Residential Real Estate Leasing",
      "Travel and Reservation Services",
    ],
  },
  {
    name: "Education Sector",
    sub: [
      "University",
      "College",
      "School",
      "Private University/College",
      "Private School",
      "Education Board",
      "Academy",
      "Institute",
      "Vocational & Training Institute",
      "New Construction",
      "Flight Training School",
      "Child Day Care Services",
      "Professional & Management Training",
    ],
  },
  {
    name: "Entertainment, Leisure and Hospitality",
    sub: ["Hotel -All", "NewConstruction", "Restaurant -All", "ETL"],
  },
  {
    name: "Small Business",
    sub: [
      "Restaurant",
      "Gas Station",
      "Grocery",
      "Auto",
      "Electronics",
      "Gym",
      "Retail",
      "New Construction",
      "Grocery Stores",
    ],
  },
]);

const loginUser = async () => {
  if (registerForm.value.email !== "" && registerForm.value.password !== "") {
    try {
      const response = await $fetch(config.public.apiUrl + "/registration", {
        method: "POST",
        body: registerForm.value,
      });

      if (response.message === "User Created!") {
        store.user = response.user;
        tokenCookie.value = response.token;
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
        nuxtApp.$toast("clear");
        nuxtApp.$toast("error", {
          message: error.data.message,
          className: "alert_error",
        });
      }
    }
  }
};
</script>
<template>
  <div class="container mx-auto">
    <div class="py-8">
      <div>
        
        <h2 class="text-2xl font-semibold leading-tight pb-2">
          Apply For Sampledsfsdfsdf
        </h2>
      </div>
      <hr class="border my-4 border-orange-400" />

      <div class="py-8 px-4 bg-slate-700 rounded-lg">
        <form @submit.prevent="handleRegister">
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/3">
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
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
              <label
                for="email"
                class="block font-semibold text-white text-xl pb-1"
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
              <label
                for="phone"
                class="block font-semibold text-white text-xl pb-1"
                >Phone</label
              >
              <input
                v-model="registerForm.phone_no"
                type="number"
                placeholder="+1"
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none !text-black p-2"
              />
            </div>
          </div>

          <div class="lg:flex items-center gap-5 mt-2">
            <div
              v-if="registerForm.type == 'Organization'"
              class="mb-4 lg:w-1/2"
            >
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
              >
                Type</label
              >
              <select
                v-model="registerForm.type"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option value="Individual">Individual</option>
                <option value="Organization">Organization</option>
              </select>
            </div>
            <div v-else class="mb-4 lg:w-full">
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
              >
                Type</label
              >
              <select
                v-model="registerForm.type"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option value="Individual">Individual</option>
                <option value="Organization">Organization</option>
              </select>
            </div>
            <div
              v-if="registerForm.type == 'Organization'"
              class="mb-4 lg:w-1/2"
            >
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
              >
                Industry</label
              >
              <select
                v-model="business_type"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option :value="business" v-for="business in businessType">
                  {{ business.name }}
                </option>
              </select>
            </div>
          </div>
          <div
            v-if="registerForm.type == 'Organization'"
            class="lg:flex items-center gap-5 mt-2"
          >
            <div class="mb-4 lg:w-1/2">
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
              >
                Sub Industry</label
              >
              <select
                v-model="registerForm.sub_industry"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option v-for="sub in business_type?.sub" :value="sub">
                  {{ sub }}
                </option>
              </select>
            </div>
            <!-- {{ business_type }} -->
            <div class="mb-4 lg:w-1/2">
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
              >
                Company Name</label
              >
              <input
                v-model="registerForm.company_name"
                type="text"
                placeholder="Company Name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
          </div>
          <div
            v-if="registerForm.type == 'Organization'"
            class="lg:flex items-center gap-5 mt-2"
          >
            <div class="mb-4 lg:w-1/2">
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
              >
                Number of Employee</label
              >
              <input
                v-model="registerForm.no_of_employee"
                type="number"
                placeholder="Number of Employee"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <!-- {{ business_type }} -->
            <div class="mb-4 lg:w-1/2">
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
              >
                Daily Customer Number</label
              >
              <input
                v-model="registerForm.no_of_daily_customer"
                type="number"
                placeholder="Daily Customer"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/2">
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
              >
                Monthly Customer Number</label
              >
              <input
                v-model="registerForm.no_of_monthly_customer"
                type="number"
                placeholder="Monthly Customer"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
          </div>

          <div class="lg:flex items-center gap-5 mt-2">
            <div class="mb-4 lg:w-1/2">
              <label
                for="name"
                class="block font-semibold text-white text-xl pb-1"
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
                class="block font-semibold text-white text-xl pb-1"
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
          <div class="mb-4 lg:w-full">
            <div>
              <label
                for="message"
                class="block font-semibold text-white text-xl pb-1"
                >Reason</label
              >
              <textarea
                v-model="registerForm.reason"
                type="text"
                rows="4"
                placeholder="Reason"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              />
            </div>
          </div>

          <div class="flex items-center justify-center flex-col gap-5">
            <button
              type="submit"
              :disabled="loginload"
              class="md:px-10 md:w-1/2 py-2 flex items-center justify-center btn mt-4"
            >
              Apply
              <span v-if="loginload" class="flex items-center">
                ing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 animate-spin mx-1"
                  fill="currentColor"
                >
                  <path
                    d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 
                    19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944
                     3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                  ></path>
                </svg>
              </span>
            </button>
            <!-- <div class="text-black text-xl font-semibold">
              Have an Account?
              <nuxt-link to="/login" class="text-green-500 hover:underline"
                >Login here</nuxt-link
              >
            </div> -->
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
