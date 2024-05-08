<script setup></script>

<template>
  <div class="mx-auto container">
    <div
      class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
    >
      <p class="text-2xl text-[#6F4E37] font-bold pb-2">Inventory Dashboard</p>
    </div>
    <hr />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 mt-6 md:grid-cols-4 gap-4 text-black"
    >
      <!-- Box 1: Low Stock Items -->
      <div
        class="bg-white px-4 py-6 flex justify-between items-center rounded-lg shadow-md"
      >
        <div>
          <img
            src="https://vue.hibootstrap.com/pyle/img/wallet-money.0e90e8be.svg"
            class=""
            alt=""
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-orange-400">Sales:</h2>
          <p class="text-2xl font-bold">$5312.00</p>
        </div>
      </div>
      <div
        class="bg-white px-4 py-6 flex justify-between items-center rounded-lg shadow-md"
      >
        <div>
          <img
            src="https://vue.hibootstrap.com/pyle/img/wallet-add.e317072d.svg"
            class="text-green-500"
            alt=""
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-orange-400">Purchases:</h2>
          <p class="text-2xl font-bold">$2312.00</p>
        </div>
      </div>
      <div
        class="bg-white px-4 py-6 flex justify-between items-center rounded-lg shadow-md"
      >
        <div>
          <img
            src="https://vue.hibootstrap.com/pyle/img/money-send.3acc8814.svg"
            class="text-green-500"
            alt=""
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-orange-400">
            Sales Return:
          </h2>
          <p class="text-2xl font-bold">$312.00</p>
        </div>
      </div>
      <div
        class="bg-white px-4 py-6 flex justify-between items-center rounded-lg shadow-md"
      >
        <div>
          <img
            src="https://vue.hibootstrap.com/pyle/img/money-change.ca11b81a.svg"
            class="text-green-500"
            alt=""
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-orange-400">
            Purchases Return:
          </h2>
          <p class="text-2xl font-bold">$50.00</p>
        </div>
      </div>
    </div>
    <div>
      <p class="text-2xl font-semibold mt-4 pt-6 text-orange-400">
        Stock Alert
      </p>
      <div class="pb-6">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Code
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Product
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Warehouse
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Quantity
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Quantity Alert
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">87303231</td>
              <td class="px-6 py-4 whitespace-nowrap">Vegetable</td>
              <td class="px-6 py-4 whitespace-nowrap">Warehouse 01</td>
              <td class="px-6 py-4 whitespace-nowrap">05</td>
              <td class="px-6 py-4 whitespace-nowrap text-red-500">10</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">87305452</td>
              <td class="px-6 py-4 whitespace-nowrap">Meat</td>
              <td class="px-6 py-4 whitespace-nowrap">Warehouse 02</td>
              <td class="px-6 py-4 whitespace-nowrap">06</td>
              <td class="px-6 py-4 whitespace-nowrap text-red-500">15</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">87305231</td>
              <td class="px-6 py-4 whitespace-nowrap">Fruits</td>
              <td class="px-6 py-4 whitespace-nowrap">Warehouse 02</td>
              <td class="px-6 py-4 whitespace-nowrap">03</td>
              <td class="px-6 py-4 whitespace-nowrap text-red-500">12</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">87305452</td>
              <td class="px-6 py-4 whitespace-nowrap">Sugar</td>
              <td class="px-6 py-4 whitespace-nowrap">Warehouse 01</td>
              <td class="px-6 py-4 whitespace-nowrap">15</td>
              <td class="px-6 py-4 whitespace-nowrap text-red-500">20</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">87305912</td>
              <td class="px-6 py-4 whitespace-nowrap">Soap</td>
              <td class="px-6 py-4 whitespace-nowrap">Warehouse 02</td>
              <td class="px-6 py-4 whitespace-nowrap">08</td>
              <td class="px-6 py-4 whitespace-nowrap text-red-500">16</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">87305928</td>
              <td class="px-6 py-4 whitespace-nowrap">Nuts</td>
              <td class="px-6 py-4 whitespace-nowrap">Warehouse 01</td>
              <td class="px-6 py-4 whitespace-nowrap">05</td>
              <td class="px-6 py-4 whitespace-nowrap text-red-500">10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
