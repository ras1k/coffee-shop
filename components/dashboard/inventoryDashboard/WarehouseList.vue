<script setup>
const warehouse = ref([
  {
    id: 1,
    name: "Murphy",
  },
  {
    id: 2,
    name: "Texas",
  },
  {
    id: 3,
    name: "Dallas",
  },
]);
</script>
<template>
  <div class="container">
    <div class="py-6">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Warehouse List</p>
      </div>
      <hr />
      <div class="grid grid-cols-1 gap-5 my-5">
        <div
          class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-gray-600 text-xl">
                <th class="p-2 text-left">Warehouse Id</th>
                <th class="p-2 text-left">Warehouse Name</th>
                <th class="p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody v-for="category in warehouse">
              <tr class="">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">{{ category.id }}</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <!-- <img src="@/assets/img/avatar.webp" alt="" class="h-10" /> -->
                  <h3 class="font-semibold">{{ category.name }}</h3>
                </td>
                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Delete Warehouse`"
                    :extraClass="`w-full`"
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
