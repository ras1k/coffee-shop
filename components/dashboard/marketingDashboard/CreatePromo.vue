<script setup>
import { useMarketingDashboardStore } from "~/stores/dashboard/marketingDashboard";

// pinia
const { addMarketingPromo } = useMarketingDashboardStore();

const promoForm = ref({
  promo_title: "",
  promo_code: "",
  promo_discount: "",
  image: "",
  promo_description: "",
});

function onFileChange(event) {
  promoForm.value.image = URL.createObjectURL(event.target.files[0]);
}

const handlePromo = () => {
  addMarketingPromo(promoForm.value);
  promoForm.value = {
    promo_title: "",
    promo_code: "",
    promo_discount: "",
    image: "",
    promo_description: "",
  };
};
</script>

<template>
  <div class="container">
    <div class="py-2">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Create Promo</p>
      </div>
      <hr />
      <div class="py-6 bg-slate-700 container text-white mt-2 rounded-lg">
        <form>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/2">
              <label for="Title" class="block font-semibold">Promo Title</label>
              <input
                v-model="promoForm.promo_title"
                type="text"
                placeholder="Title"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-black"
              />
            </div>
            <div class="mb-4 lg:w-1/2">
              <label for="Promo Code" class="block font-semibold"
                >Promo Code</label
              >
              <input
                v-model="promoForm.promo_code"
                type="text"
                placeholder="Promo Code"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-black"
              />
            </div>
          </div>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/2">
              <label for="Promo Discount" class="block font-semibold"
                >Promo Discount</label
              >
              <input
                v-model="promoForm.promo_discount"
                type="text"
                placeholder="Promo Discount"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-black"
              />
            </div>
            <div class="mb-4 w-1/2">
              <label for="file" class="block font-semibold"
                >Upload Promo Image</label
              >
              <input
                type="file"
                id="file"
                name="file"
                @change="onFileChange"
                class="appearance-none block w-full bg-white border border-gray-300 rounded-md p-2 text-black leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="message" class="block font-semibold">
                Promo description</label
              >
              <textarea
                id="message"
                name="message"
                placeholder="Promo description..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>

          <div class="text-center pt-4">
            <BaseButton
              :buttonText="`Create`"
              :extraClass="`w-full`"
              class="text-xl font-semibold"
              @click="handlePromo"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
