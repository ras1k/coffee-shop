<script setup>
import { useMarketingDashboardStore } from "~/stores/dashboard/marketingDashboard";

// pinia
const { addMarketingOffer } = useMarketingDashboardStore();

const offerForm = ref({
  offer_title: "",
  highest_cashback: "",
  offer_discount: "",
  valid_till: "",
  offer_description: "",
});

const handleOffer = () => {
  addMarketingOffer(offerForm.value);
  offerForm.value = {
    offer_title: "",
    highest_cashback: "",
    offer_discount: "",
    valid_till: "",
    offer_description: "",
  };
};
</script>
<template>
  <div class="container">
    <div class="py-2">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Create Offer</p>
      </div>
      <hr />
      <div class="py-6 bg-slate-700 container text-white mt-2 rounded-lg">
        <form>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/2">
              <label for="name" class="block font-semibold">Offer Title</label>
              <input
                v-model="offerForm.offer_title"
                type="text"
                placeholder="Ex: Ramadan Discount"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/2">
              <label for="number" class="block font-semibold"
                >Highest Cashback</label
              >
              <input
                v-model="offerForm.highest_cashback"
                type="number"
                placeholder="Price"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
          </div>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/2">
              <label for="number" class="block font-semibold">Discount</label>
              <input
                v-model="offerForm.offer_discount"
                type="number"
                placeholder="20% discount"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/2">
              <label for="number" class="block font-semibold">Valid Till</label>
              <input
                v-model="offerForm.valid_till"
                type="date"
                placeholder="20% discount"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="message" class="block font-semibold">
                Offer description</label
              >
              <textarea
                v-model="offerForm.offer_description"
                id="message"
                name="message"
                placeholder="Offer description..."
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
              @click="handleOffer"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
