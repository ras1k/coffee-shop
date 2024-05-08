<script setup>

</script>
<template>
  <div>
    <div class="py-6">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-orange-400 font-bold pb-2">Registered Vendor List</p>
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-gray-600 text-xl">
              <th class="p-2 text-left">Vendor Id</th>
              <th class="p-2 text-left">Vendor Image</th>
              <th class="p-2 text-left">Vendor Name</th>
              <th class="p-2 text-left">Vendor Type</th>
              <th class="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">01</h3>
              </td>
              <td class="py-4 p-2 flex items-center gap-2">
                <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
              </td>
              <!-- <td>
                <p class="text-lg">Masjid Premises</p>
              </td> -->
              <td class="py-4 p-2">Dreaming Double</td>
              <td class="py-4 p-2">Woodwork</td>
              <!-- <td class="py-4 p-2 font-semibold">4 PM</td> -->
              <!-- <td class="py-4 p-2">
                  <p class="text-sm font-bold text-blue-600">Pending</p>
                </td> -->
              <td class="py-4 p-2">
                <!-- <button
                  class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white hover:bg-black text-sm"
                > -->
                <select name="" id="" class="text-black rounded-xl p-1 focus:outline-none">
                  <option value="">Add to Preferred List</option>
                  <option value="">Remove from Preferred List</option>
                </select>
              </td>
            </tr>
            <tr class="bg-gray-600">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">02</h3>
              </td>
              <td class="py-4 p-2 flex items-center gap-2">
                <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
              </td>
              <td class="py-4 p-2">Sweet Talk Spices</td>
              <td class="py-4 p-2">Food</td>
              <!-- <td class="py-4 p-2 font-semibold">9 AM</td> -->
              <!-- <td class="py-4 p-2">
                  <p class="text-sm font-bold text-green-600">Completed</p>
                </td> -->
              <td class="py-4 p-2">
                <select name="" id="" class="text-black rounded-xl p-1 focus:outline-none">
                  <option value="">Add to Preferred List</option>
                  <option value="">Remove from Preferred List</option>
                </select>
              </td>
            </tr>
            <tr class="">
              <td class="py-4 p-2">
                <h3 class="font-bold">03</h3>
              </td>
              <td class="py-4 p-2 flex items-center gap-2">
                <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
              </td>
              <td class="py-4 p-2">Kate's T&amp;T</td>
              <td class="py-4 p-2">Crafts</td>
              <td class="py-4 p-2">
                <select name="" id="" class="text-black rounded-xl p-1 focus:outline-none">
                  <option value="">Add to Preferred List</option>
                  <option value="">Remove from Preferred List</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>