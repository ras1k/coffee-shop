<script setup>
import { storeToRefs } from "pinia";
import { useCustomerOrderManageDashboardStore } from "~/stores/dashboard/customerAndOrderManageDashboard";
const store = useProductsStore();
// pinia
const { orderLists } = storeToRefs(useCustomerOrderManageDashboardStore());
const { deleteOrder } = useCustomerOrderManageDashboardStore();

const handleOrderStatus = (orderId, status) => {
  console.log(orderId, status, "orderId, status");
};

const handleDeleteOrder = (orderId) => {
  deleteOrder(orderId);
};
</script>
<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div>
        <h2 class="text-2xl font-semibold leading-tight">All Orders</h2>
      </div>
      <div class="my-2 flex sm:flex-row flex-col">
        <div class="flex flex-row mb-1 sm:mb-0">
          <div class="relative">
            <select
              class="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              class="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
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
                  Id
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Customer
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Status
                </th>
                <!-- <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Branch
                </th> -->
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
              <!-- {{ store.order }} -->
              <!-- <tr v-for="singleOrder in orderLists" > -->
              <tr v-for="(singleOrder, index) in store.order">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ index+1 }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm" v-for="item in singleOrder.product">
                  <div class="flex items-center">
                    <!-- <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        :src="singleOrder.userImg"
                        alt=""
                      />
                    </div> -->
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ singleOrder.name }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm" v-for="item in singleOrder.product">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ item.name }}
                    </p>
                  </div>
                </td>
                

                <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <select
                    :class="`rounded-lg text-green-900 outline-none font-semibold ${
                      singleOrder.orderStatus === 'Pending'
                        ? 'bg-orange-200'
                        : singleOrder.orderStatus === 'Processing'
                        ? 'bg-red-200'
                        : singleOrder.orderStatus === 'On the way'
                        ? 'bg-green-200'
                        : 'bg-green-400'
                    }`"
                    v-model="singleOrder.orderStatus"
                    @click="handleOrderStatus(singleOrder)"
                  >
                    <option :selected="singleOrder.orderStatus === 'Pending'">
                      Pending
                    </option>
                    <option
                      :selected="singleOrder.orderStatus === 'Processing'"
                    >
                      Processing
                    </option>
                    <option
                      :selected="singleOrder.orderStatus === 'On the way'"
                    >
                      On the way
                    </option>
                    <option :selected="singleOrder.orderStatus === 'Delivered'">
                      Delivered
                    </option>
                  </select>
                </td> -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-2 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      :class="`absolute inset-0  opacity-50 rounded-full ${
                        singleOrder.status === 'pending'
                          ? 'bg-orange-200'
                          : singleOrder.status === 'Processing'
                          ? 'bg-red-200'
                          : singleOrder.status === 'On the way'
                          ? 'bg-green-200'
                          : 'bg-green-400'
                      }`"
                    ></span>
                    <span class="relative ">{{ singleOrder.status }}</span>
                  </span>
                </td>
                <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ singleOrder.branch }}
                  </p>
                </td> -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm" v-for="item in singleOrder.product">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.price }}
                  </p>
                </td>

                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    <span
                      class="text-white px-2 cursor-pointer bg-red-600 rounded-full p-2 hover:bg-black"
                      @click="handleDeleteOrder(singleOrder.id)"
                    >
                      Delete
                    </span>
                  </p>
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
  </div>
</template>

<style lang="scss" scoped></style>
