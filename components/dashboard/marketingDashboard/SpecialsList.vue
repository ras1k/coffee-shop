<template>
  <div class="">
    <div class="py-6">
      <div>
        <h2
          class="text-2xl font-semibold leading-tight border-b pb-2 border-orange-400"
        >
          Current Specials List
        </h2>
      </div>
      <div
        class="rounded-md py-3 mt-4 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="text-sm">
              <th class="p-2 text-left">Specials ID</th>
              <th class="p-2 text-left">Specials Type</th>
              <th class="p-2 text-left">Specials Title</th>
              <th class="p-2 text-left">Image</th>
              <th class="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="bg-gray-600">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">01</h3>
              </td>
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">Weekly Special</h3>
              </td>
              <td class="py-4 p-2 flex items-center gap-2">
                <h4 class="">Special Offer</h4>
              </td>
              <td>
                <p class="text-lg">
                  <img
                    src="@/assets/img/products/category/peach.svg"
                    alt=""
                    class="h-[50px] w-[50px] rounded-full border shadow-md"
                  />
                </p>
              </td>
              <td class="py-4 p-2 text-blue-500">Pending</td>
              <!-- <td class="py-4 p-2">
                <div class="flex">
                  <p class="text-sm font-bold text-blue-600 mt-[30px] mx-3">
                    $2000
                  </p>
                  <router-link to="/HR_Dashboard/HR_Position_List/1">
                    <span class="text-gray-500 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </span>
                  </router-link>
                </div>
              </td> -->
            </tr>
            <tr class="bg-gray-500 py-2">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">02</h3>
              </td>
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">Managers Special</h3>
              </td>
              <td class="py-4 p-2 flex items-center gap-2">
                <h4 class="">Grocery Offer</h4>
              </td>
              <td>
                <p class="text-lg">
                  <img
                    src="@/assets/img/products/category/orange.svg"
                    alt=""
                    class="h-[50px] w-[50px] rounded-full border shadow-md"
                  />
                </p>
              </td>
              <td class="py-4 p-2 text-green-600 font-bold">Pending</td>
              <!-- <td class="py-4 p-2">
                <div class="flex">
                  <p class="text-sm font-bold text-blue-600 mt-[30px] mx-3">
                    $2000
                  </p>
                  <router-link to="/HR_Dashboard/HR_Position_List/1">
                    <span class="text-gray-500 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </span>
                  </router-link>
                </div>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
