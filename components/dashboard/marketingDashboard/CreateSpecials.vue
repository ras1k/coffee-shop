<template>
  <div class="container">
    <div class="py-2">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Create Specials</p>
      </div>
      <hr />
      <div class="py-6 bg-slate-700 container text-white mt-2 rounded-lg">
        <form>
          <div class="mb-4 lg:w-full">
            <label for="name" class="block font-semibold">
              Which Job Position are you applying for?</label
            >
            <select
              class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
            >
              <option value="">Weekly Special</option>
              <option value="">Managers Special</option>
            </select>
          </div>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/2">
              <label for="name" class="block font-semibold"
                >Specials Title</label
              >
              <input
                type="text"
                placeholder="name"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-black"
              />
            </div>
            <div class="mb-4 w-1/2">
              <label for="file" class="block font-semibold"
                >Upload Specials Image</label
              >
              <input
                type="file"
                id="file"
                name="file"
                class="appearance-none block w-full bg-white border border-gray-300 rounded-md p-2 text-black leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="message" class="block font-semibold">
                Specials description</label
              >
              <textarea
                id="message"
                name="message"
                placeholder="Promo description..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>

          <div class="text-center pt-4">
            <BaseButton
              :buttonText="`Create`"
              :extraClass="`w-full`"
              class="text-xl font-semibold"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
