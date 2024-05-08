<script setup>
import { storeToRefs } from "pinia";
import { useInventoryDashboardStore } from "~/stores/dashboard/inventoryDashboard";

// pinia
const { inventoryProducts } = storeToRefs(useInventoryDashboardStore());
const { approvedInventoryProduct, deleteInventoryProduct } =
  useInventoryDashboardStore();

const handleApproveInventoryProduct = (productId) => {
  approvedInventoryProduct(productId);
};
const handleDeleteInventoryProduct = (productId) => {
  deleteInventoryProduct(productId);
};
</script>
<template>
  <div class="container">
    <div class="py-4">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Post Product</p>
      </div>
      <hr />
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-gray-600 text-sm">
              <th class="p-2 text-left">Product Id</th>
              <th class="p-2 text-left">Image</th>
              <th class="p-2 text-left">Product Title</th>
              <th class="p-2 text-left">Price</th>
              <th class="p-2 text-left">Quantity</th>
              <th class="p-2 text-left">Category</th>
              <th class="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody v-for="product in inventoryProducts">
            <tr v-if="!product.isPosted" class="">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">{{ product.id }}</h3>
              </td>
              <td class="py-6 p-2 gap-2">
                <img :src="product.image" alt="Image" class="h-10" />
              </td>
              <td class="py-6 p-2 flex items-center gap-2">
                <h3 class="font-bold">{{ product.title }}</h3>
              </td>
              <td class="py-4 p-2">{{ product.price }}</td>
              <td class="py-4 p-2">{{ product.quantity }}</td>
              <td class="py-4 p-2">{{ product.category }}</td>

              <td class="py-4 p-2 flex justify-center items-center">
                <BaseButton
                  :buttonText="`Approve`"
                  :extraClass="`w-40 rounded-md text-base`"
                  @click="handleApproveInventoryProduct(product.id)"
                />

                <span
                  class="text-red-500 px-2 cursor-pointer"
                  @click="handleDeleteInventoryProduct(product.id)"
                >
                  <fa
                    :class="`transition-all duration-300 text-lg ease-in-out p-1 rounded-lg`"
                    :icon="['fa-solid', 'trash-can']"
                  />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
