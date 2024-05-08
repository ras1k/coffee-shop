<script setup>
import { storeToRefs } from "pinia";
import { useVendorDashboardStore } from "~/stores/dashboard/vendorDashboard";

// pinia
const { vendorProducts } = storeToRefs(useVendorDashboardStore());
const { updateVendorStatus, deleteVendorProduct } = useVendorDashboardStore();

const loginCookie = useCookie("loginCookie");

const vendorMail = loginCookie.value.email;
// getInitializedVendorProducts(vendorMail);

const handleProductStatus = (product) => {
  console.log(product, "product");
};
</script>

<template>
  <div>
    <div class="py-4">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-orange-400 font-bold pb-2">My Product</p>
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-gray-600 text-sm">
              <th class="p-2 text-left">Product Id</th>
              <th class="p-2 text-left">Image</th>
              <th class="p-2 text-left">Product Title</th>
              <th class="p-2 text-left">Category</th>
              <th class="p-2 text-left">Brand</th>
              <th class="p-2 text-left">Unit Type</th>
              <th class="p-2 text-left">Unit Quantity</th>
              <th class="p-2 text-left">Max Provide Quantity</th>
              <th class="p-2 text-left">Price Per Unit</th>
              <th class="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody v-for="product in vendorProducts">
            <tr class="">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">{{ product.id }}</h3>
              </td>
              <td class="py-6 p-2 gap-2">
                <img :src="product.image" alt="Image" class="h-10" />
              </td>
              <td class="py-6 p-2 flex items-center gap-2">
                <h3 class="font-bold">{{ product.name }}</h3>
              </td>
              <td class="py-4 p-2">{{ product.category }}</td>
              <td class="py-4 p-2">{{ product.brand }}</td>
              <td class="py-4 p-2">{{ product.unit_type }}</td>
              <td class="py-4 p-2">{{ product.unit_quantity }}</td>
              <td class="py-4 p-2">{{ product.max_provide_quantity }}</td>
              <td class="py-4 p-2">{{ product.price }}</td>
              <td class="py-4 p-2 flex justify-center items-center">
                <select
                  v-model="product.is_available"
                  class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
                  @click="updateVendorStatus(product)"
                >
                  <option :value="true" :selected="product.is_available">
                    Available
                  </option>
                  <option :value="false">Out of stock</option>
                </select>

                <span
                  class="text-red-500 px-2 cursor-pointer"
                  @click="
                    deleteVendorProduct({
                      vendor_mail: vendorMail,
                      product_id: product.id,
                    })
                  "
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
