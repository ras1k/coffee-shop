<script setup></script>
<template>
  <div>
    <div class="py-5 container">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Employee Time Card</p>
      </div>
      <hr />
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-gray-600 text-l">
              <th class="p-2 text-left">Employee ID</th>
              <th class="p-2 text-left">Employee Name</th>
              <th class="p-2 text-left">Date</th>
              <th class="p-2 text-left">Day</th>
              <th class="p-2 text-left">Time In</th>
              <th class="p-2 text-left">Time Out</th>
              <th class="p-2 text-left">Break</th>
              <th class="p-2 text-left">Total Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">01</h3>
              </td>
              <td class="py-4 p-2 flex items-center gap-2">
                <img
                  src="@/assets/img/avatar.webp"
                  alt=""
                  class="w-14 h-14 rounded-full ring-4 ring-gray-500"
                />
                <h3 class="px-3 font-bold">Dr. Imran</h3>
              </td>
              <td class="py-4 p-2">2024-03-06</td>
              <td class="py-4 p-2">Wednesday</td>
              <td class="py-4 p-2">07:00 pm</td>
              <td class="py-4 p-2">03:30 pm</td>

              <td class="py-4 p-2">
                <p class="text-sm font-bold text-blue-600">30 mins</p>
              </td>
              <td class="Py-4 p-2">
                <p class="py-4 p-2 font-semibold">8 hours</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
