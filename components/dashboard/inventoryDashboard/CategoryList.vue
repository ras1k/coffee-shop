<script setup>
const categories = ref([
  {
    id: 1,
    name: "Health & Wellness",
  },
  {
    id: 2,
    name: "Personal care",
  },
  {
    id: 3,
    name: "Home Kitchen",
  },
]);
</script>
<template>
  <div class="container">
    <div class="py-6">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Category List</p>
      </div>
      <hr />
      <hr />
      <div class="grid grid-cols-1 gap-5 my-5">
        <div
          class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-gray-600 text-xl">
                <th class="p-2 text-left">Category Id</th>
                <th class="p-2 text-left">Category Name</th>
                <th class="p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody v-for="category in categories">
              <tr class="">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">{{ category.id }}</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <h3 class="font-semibold">{{ category.name }}</h3>
                </td>
                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Delete Category`"
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
