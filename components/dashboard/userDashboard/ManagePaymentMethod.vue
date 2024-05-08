<script setup>
const paymentMethods = ref([
  { type: "Credit Card", details: "Ending in 1234" },
  { type: "Bank Account", details: "Account ending in 5678" },
  // Add more payment methods as needed
]);

const addPaymentMethod = () => {
  // Logic to add a new payment method
  // This could open a modal or navigate to a new page
};

const removePaymentMethod = (index) => {
  // Logic to remove the payment method at the given index
  paymentMethods.value.splice(index, 1);
};
</script>
<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div>
        <h2
          class="text-2xl font-semibold leading-tight border-b pb-2 border-orange-400"
        >
          Manage Payment Method
        </h2>
      </div>
      <div class="mx-auto py-6">
        <div class="max-w-md">
          <div v-if="paymentMethods.length === 0" class="text-gray-600">
            No payment methods added.
          </div>
          <div v-else>
            <div
              v-for="(method, index) in paymentMethods"
              :key="index"
              class="bg-gray-700 text-white shadow overflow-hidden sm:rounded-lg mb-4"
            >
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6">
                  {{ method.type }}
                </h3>
                <p class="mt-1 max-w-2xl text-sm">
                  {{ method.details }}
                </p>
              </div>
              <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
                <button
                  @click="removePaymentMethod(index)"
                  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <button
              @click="addPaymentMethod"
              class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
