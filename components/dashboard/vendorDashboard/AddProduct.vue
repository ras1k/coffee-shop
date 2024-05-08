<script setup>
import { useVendorDashboardStore } from "~/stores/dashboard/vendorDashboard";
const { addVendorProducts } = useVendorDashboardStore();

const loginCookie = useCookie("loginCookie");

const vendorMail = loginCookie.value.email;

const productForm = ref({
  name: "",
  category: "",
  brand: "",
  unit_type: "",
  unit_quantity: "",
  max_provide_quantity: "",
  price: "",
  image: "",
});
function onFileChange(event) {
  productForm.value.image = URL.createObjectURL(event.target.files[0]);
}

const handleProduct = () => {
  addVendorProducts({
    vendor_mail: vendorMail,
    product_details: productForm.value,
  });

  setTimeout(() => {
    productForm.value = {
      name: "",
      brand: "",
      unit_type: "",
      unit_quantity: "",
      max_provide_quantity: "",
      price: "",
      image: "",
    };
  }, 1000);
  console.log(productForm.value, "registerForm.value");
};
</script>
<template>
  <div class="container flex flex-col">
    <div class="py-6">
      <p class="text-orange-400 text-xl border-b pb-2 font-semibold">
        Create Product
      </p>
      <div class="pt-6">
        <form>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/4">
              <label for="Product Name" class="block font-semibold"
                >Product Name</label
              >
              <input
                v-model="productForm.name"
                type="text"
                placeholder="Product Name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/4">
              <label for="Brand" class="block font-semibold">Brand</label>
              <input
                v-model="productForm.brand"
                type="text"
                placeholder="Brand"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>

            <div class="mb-4 lg:w-2/4">
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
              <label for="kg / pcs" class="block font-semibold">Unit</label>
              <input
                v-model="productForm.unit_type"
                type="text"
                placeholder="kg / pcs"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="2.5 / 6" class="block font-semibold"
                >Unit Quantity</label
              >
              <input
                v-model="productForm.unit_quantity"
                type="text"
                placeholder="2.5 / 6"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="Max Provide (2.8 / 6)" class="block font-semibold"
                >Max Provide Quantity</label
              >
              <input
                v-model="productForm.max_provide_quantity"
                type="text"
                placeholder="Max Provide (2.8 / 6)"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
          </div>
          <div class="lg:flex items-center gap-5 mt-2">
            <div class="mb-4 lg:w-1/2">
              <label for="Price per unit" class="block font-semibold">
                Price Per Unit
              </label>
              <input
                v-model="productForm.price"
                type="number"
                placeholder="Price per unit"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              />
            </div>

            <div class="mb-4 lg:w-1/2">
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

          <div class="flex items-center gap-5 mt-2"></div>

          <div class="text-center pt-4">
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
