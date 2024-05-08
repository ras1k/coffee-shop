<script setup>
    const stockInForm = ref({
    id: "",
    product_name: "",
    quantity: "",
  }); 

  const handleStockIn = () => {
  console.log(stockInForm.value, "registerForm.value");
};
</script>
<template>
  <div class="container flex flex-col ">
 
    <div class="py-2">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Stock In</p>
      </div>
      <hr />
      <div class="py-6 bg-slate-700 container text-white mt-2 rounded-lg">
        <form>
          <div class="lg:flex items-center gap-5 w-full">
            <div class="mb-4 w-1/2">
              <label for="Product Name" class="block font-semibold">Product Name</label>
              <input
              v-model="stockInForm.product_name"
                type="text"
                placeholder="Product Name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 w-1/2">
              <label for="Quantity" class="block font-semibold"
                >Quantity</label
              >
              <input
              v-model="stockInForm.quantity"
                type="number"
                placeholder="Quantity"
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              ></input>
            </div>
          </div>

          <div class="text-center pt-4">
            <BaseButton :buttonText="`Submit`" :extraClass="`w-full`" class="text-xl font-semibold" @click="handleStockIn" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
