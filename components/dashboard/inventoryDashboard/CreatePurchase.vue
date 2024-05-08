<script setup>
import { storeToRefs } from "pinia";
import { useInventoryDashboardStore } from "~/stores/dashboard/inventoryDashboard";

// pinia
const { inventoryVendorList, purchaseProductsList } = storeToRefs(
  useInventoryDashboardStore()
);
const { addNewPurchaseList, deletePurchaseList } = useInventoryDashboardStore();

const nuxtApp = useNuxtApp();

const productForm = ref({
  id: "",
  vendor_name: "",
  product_name: "",
  quantity: "",
  price: "",
  import_before_date: "",
});

const selectedVendorProducts = ref([]);

const handleProduct = () => {
  if (
    productForm.value.vendor_name === "" ||
    productForm.value.product_name === "" ||
    productForm.value.quantity === "" ||
    productForm.value.import_before_date === ""
  ) {
    nuxtApp.$toast("clear");
    nuxtApp.$toast("success", {
      message: "Please check, some field are missing!",
      className: "alert_error",
    });
  } else {
    const currentProduct = selectedVendorProducts.value.find(
      (product) => product.name === productForm.value.product_name
    );
    productForm.value.price = currentProduct.price;
    addNewPurchaseList(productForm.value);
  }
};

const handleDeletePurchaseListProduct = (purchaseListId) => {
  deletePurchaseList(purchaseListId);
};

watch(
  () => productForm.value.vendor_name,
  () => {
    const currentVendor = inventoryVendorList.value.filter(
      (vendor) => vendor.name === productForm.value.vendor_name
    );
    selectedVendorProducts.value = currentVendor[0].products;
  }
);
</script>
<template>
  <div class="container flex flex-col">
    <div class="py-8">
      <div>
        <h2
          class="text-2xl font-semibold leading-tight border-b pb-2 border-orange-400"
        >
          Current Purchase List
        </h2>
      </div>
      <div class="my-2 flex sm:flex-row flex-col">
        <div class="flex flex-row mb-1 sm:mb-0">
          <div class="relative">
            <select
              class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <div class="relative">
            <select
              class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="block relative">
          <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
              <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
              ></path>
            </svg>
          </span>
          <input
            placeholder="Search"
            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  No.
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Vendor Name
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Product Name
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Single Unit Price
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Total Amount
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="singleProduct in purchaseProductsList">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ singleProduct.id }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ singleProduct.import_before_date }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ singleProduct.vendor_name }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ singleProduct.product_name }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ singleProduct.quantity }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-nowrap">
                    ${{ singleProduct.price }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-nowrap">
                    ${{ singleProduct.quantity * singleProduct.price }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="text-red-500 px-2 cursor-pointer"
                    @click="handleDeletePurchaseListProduct(singleProduct.id)"
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
          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-6">
      <p class="text-orange-400 text-xl border-b pb-2 font-semibold">
        Create Purchase
      </p>
      <div class="pt-6">
        <form>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/2">
              <label for="Category" class="block font-semibold">
                Purchase From
              </label>
              <select
                v-model="productForm.vendor_name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option
                  v-for="option in inventoryVendorList"
                  :value="option.name"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>

            <div class="mb-4 lg:w-1/2">
              <label for="Category" class="block font-semibold">
                Selected Vendors Products
              </label>
              <select
                v-model="productForm.product_name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option
                  v-for="option in selectedVendorProducts"
                  :value="option.name"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="lg:flex items-end justify-center gap-5 mt-2">
            <div class="lg:w-1/2">
              <label for="Quantity" class="block font-semibold">
                Quantity</label
              >
              <input
                v-model="productForm.quantity"
                type="number"
                placeholder="Quantity"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              />
            </div>

            <div class="lg:w-1/2">
              <label for="Lot Expire Date" class="block font-semibold"
                >In the Date</label
              >
              <input
                v-model="productForm.import_before_date"
                type="date"
                placeholder="Lot Expire Date"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>

            <BaseButton
              :buttonText="`Add new`"
              :extraClass="`w-full`"
              class="text-base"
              @click="handleProduct"
            />
          </div>

          <div class="text-center pt-4">
            <BaseButton
              :buttonText="`Submit`"
              :extraClass="`w-full`"
              class="text-xl font-semibold"
              @click="handlePurchaseVendorProduct()"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
