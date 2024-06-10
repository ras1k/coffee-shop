<script setup>
import moment from "moment";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { computed } from "vue";

// const store = useOrderStore();
const store = useProductsStore();

const getProducts = async () => {
  const data = await useApi("/get-order-by-user");

  console.log(data, "from dashboard");


  store.order = data;
};

// const sorted_list = computed(() => {
//   return [...store.order].sort((a,b) => b.value - a.value)
// })



onMounted(() => {
  getProducts();
});
</script>
<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div>
        <h2
          class="text-2xl font-semibold leading-tight border-b pb-2 border-orange-400"
        >
          Wishlist
        </h2>
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
              <!-- {{ store.order }} -->
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  SL No.
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Order Id
                </th>
                <!-- <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Name
                </th> -->
                <!-- <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Price
                </th> -->
                <!-- <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Quantity
                </th> -->
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Order Date
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Order Date
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- {{ store.order }} -->
              <tr v-for="(singleOrder, index) in store.order.toSorted()">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ index + 1 }}
                    <!-- {{ singleOrder.order_uid }} -->
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    <!-- {{ index + 1 }} -->
                    {{ singleOrder?.order_uid }}
                  </p>
                </td>
                <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">12/01/24</td> -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    <!-- {{ item.name }} -->
                    {{
                      moment(singleOrder?.item[0]?.created_at).format(
                        "MMMM D, YYYY"
                      )
                    }}
                    <!-- {{ formattedDate }} -->
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    <!-- {{ item.name }} -->
                    {{
                      moment(singleOrder?.item[0]?.created_at).format(
                        "MMMM D, YYYY"
                      )
                    }}
                    <!-- {{ formattedDate }} -->
                  </p>
                </td>
                <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ singleOrder.price }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ singleOrder.qty }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ singleOrder.totalAmount }}
                  </p>
                </td> -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-2 font-semibold text-green-900 leading-tight"
                  >
                    <span></span>
                    <!-- <span class="relative">{{ singleOrder.status }}</span> -->
                    <span class="relative">Pending</span>
                  </span>
                </td>
                <td
                  class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                >
                  <p
                    class="bg-[#6F4E37] text-white px-5 py-1.5 rounded-xl w-1/2 text-center cursor-pointer"
                  >
                    <Dialog>
                      <DialogTrigger>Details </DialogTrigger>
                      <DialogContent class="bg-white">
                        <DialogHeader>
                          <DialogTitle class="py-2">Product Details</DialogTitle>
                          <DialogDescription >
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
                                    Name
                                  </th>

                                  <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                  >
                                    Price
                                  </th>
                                  <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                  >
                                    Quantity
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="i in singleOrder.item">
                                  <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                  >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{ i.product_id }}
                                    </p>
                                  </td>
                                  <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                  >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{ i.product_title }}
                                    </p>
                                  </td>
                                  <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                  >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      $ {{ i.product_price }}
                                    </p>
                                  </td>
                                  <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                  >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{ i.product_qty }}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!-- {{ i.product_title }} -->
                          </DialogDescription>
                        </DialogHeader>

                      </DialogContent>
                    </Dialog>
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
