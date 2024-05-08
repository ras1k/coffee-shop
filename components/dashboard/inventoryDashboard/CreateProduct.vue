<script setup>
import { useInventoryDashboardStore } from "~/stores/dashboard/inventoryDashboard";
const { setInventoryProduct } = useInventoryDashboardStore();

const productForm = ref({
  title: "",
  brand: "",
  price: "",
  quantity: "",
  category: "",
  unit_type: "",
  unit_amount: "",
  lot_number: "",
  expiry_date: "",
  image: "",
});
// const selectedFile = ref(null);
function onFileChange(event) {
  // selectedFile.value = event.target.files[0];
  productForm.value.image = URL.createObjectURL(event.target.files[0]);
  console.log(
    "Selected File:",
    productForm.value.image,
    URL.createObjectURL(event.target.files[0])
  );
}

const handleProduct = () => {
  setInventoryProduct(productForm.value);
  setTimeout(() => {
    productForm.value = {
      title: "",
      brand: "",
      price: "",
      quantity: "",
      category: "",
      unit_type: "",
      unit_amount: "",
      lot_number: "",
      expiry_date: "",
      image: "",
    };
  }, 1000);
  console.log(productForm.value, "registerForm.value");
};
</script>
<template>
  <div class="container flex flex-col">
    <div class="py-6">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Create Product</p>
      </div>
      <hr />
      <div class="pt-6 bg-slate-700 container text-white mt-2 rounded-lg">
        <form>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/3">
              <label for="Product Name" class="block font-semibold"
                >Product Name</label
              >
              <input
                v-model="productForm.title"
                type="text"
                placeholder="Product Name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="Brand" class="block font-semibold">Brand</label>
              <input
                v-model="productForm.brand"
                type="text"
                placeholder="Brand"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="price" class="block font-semibold">Price</label>
              <input
                v-model="productForm.price"
                type="number"
                placeholder="Price"
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              />
            </div>
          </div>
          <div class="lg:flex items-center gap-5 mt-2">
            <div class="mb-4 lg:w-1/4">
              <label for="Quantity" class="block font-semibold">
                Quantity</label
              >
              <input
                v-model="productForm.quantity"
                type="number"
                placeholder="Quantity"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              />
            </div>

            <div class="mb-4 lg:w-3/4">
              <label for="Category" class="block font-semibold">
                Category</label
              >
              <select
                v-model="productForm.category"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option value="health">Health &amp; Wellness</option>
                <option value="personal care">Personal Care</option>
                <option value="baby care">Baby Care</option>
                <option value="home kitchen">Home Kitchen</option>
                <option value="food">Food</option>
                <option value="toys">Toys &amp; Sports</option>
                <option value="stationary">Stationary and Office</option>
                <option value="fashion">Fashion and Lifestyle</option>
              </select>
            </div>
          </div>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/3">
              <label for="Unit Type" class="block font-semibold"
                >Unit Type</label
              >
              <input
                v-model="productForm.unit_type"
                type="text"
                placeholder="Unit Type"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="Unit Amount" class="block font-semibold"
                >Unit Amount</label
              >
              <input
                v-model="productForm.unit_amount"
                type="text"
                placeholder="Unit Amount"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="Minimum Order Quantity" class="block font-semibold"
                >Minimum Order Quantity</label
              >
              <input
                v-model="productForm.quantity"
                type="number"
                placeholder="Minimum Order Quantity"
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              />
            </div>
          </div>

          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/2">
              <label for="Lot Number" class="block font-semibold"
                >Lot Number</label
              >
              <input
                v-model="productForm.lot_number"
                type="number"
                placeholder="Lot Number"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/2">
              <label for="Lot Expire Date" class="block font-semibold"
                >Lot Expire Date</label
              >
              <input
                v-model="productForm.expiry_date"
                type="date"
                placeholder="Lot Expire Date"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="Upload Product Image" class="block font-semibold"
                >Upload Product Image</label
              >
              <input
                @change="onFileChange"
                type="file"
                id="file"
                name="file"
                class="text-black appearance-none block w-full bg-white border border-gray-300 rounded-md p-2 leading-tight focus:outline-none"
              />
            </div>
          </div>

          <div class="text-center pt-4 py-6">
            <BaseButton
              :buttonText="`Submit`"
              :extraClass="`w-full`"
              class="text-xl font-semibold"
              @click="handleProduct"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
