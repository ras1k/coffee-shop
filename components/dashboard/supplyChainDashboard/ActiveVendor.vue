<script setup></script>
<template>
  <div>
    <div class="py-6">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-orange-400 font-bold pb-2">
          Active Vendor List
        </p>
      </div>
      <hr />
      <div class="grid grid-cols-1 gap-5 my-5">
        <div
          class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-700 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-gray-600 text-xl">
                <th class="p-2 text-left">Vendor Id</th>
                <th class="p-2 text-left">Vendor Image</th>
                <th class="p-2 text-left">Vendor Name</th>
                <th class="p-2 text-left">Vendor Type</th>
                <!-- <th class="p-2 text-left">Budget</th> -->
                <th class="p-2 text-left">Details</th>
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
                <td class="py-4 p-2">Humble Cup Coffee</td>
                <td class="py-4 p-2">Beverage</td>
                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Details`"
                    class="text-xl font-semibold"
                  />
                </td>
              </tr>
              <tr class="bg-gray-600">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">02</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
                </td>
                <td class="py-4 p-2">Just For You</td>
                <td class="py-4 p-2">Woodwork</td>
                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Details`"
                    class="text-xl font-semibold"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
