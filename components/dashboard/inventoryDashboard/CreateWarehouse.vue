<script setup>
const warehouseForm = ref({
  id: "",
  warehouse_name: "",
});

const handleWarehouse = () => {
  console.log(warehouseForm.value, "lmao");
};
</script>
<template>
  <div class="container flex flex-col">
    <div class="py-2">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Create Warehouse</p>
      </div>
      <hr />
      <div class="py-6 bg-slate-700 container text-white mt-2 rounded-lg">
        <form>
          <div class="lg:flex items-center gap-5 w-full">
            <div class="mb-4 w-full">
              <label for="Name" class="block font-semibold"
                >Warehouse Name</label
              >
              <input
                v-model="warehouseForm.warehouse_name"
                type="text"
                placeholder="Name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
          </div>

          <div class="text-center pt-4">
            <BaseButton
              :buttonText="`Submit`"
              :extraClass="`w-full`"
              class="text-xl font-semibold"
              @click="handleWarehouse"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
