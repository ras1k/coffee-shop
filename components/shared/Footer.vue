<script setup lang="ts"></script>
<template>
  <div class="pt-8 bg-[#6F4E37] text-white px-[5%]">
    <!-- <img src="/assets/img/common/logo.png" alt="" class="h-[50px]"> -->
<div class="flex  justify-between">
  <div>
    <p class="lg:text-3xl font-semibold">Coffee Exploration LLC</p>
    <div>
      3555 Murphy Rd Suite #102, <br />
      Richardson, TX 75082, <br />
      United States
    </div>
  </div>
  
      <div class="bg-white rounded-lg">
        <nuxt-link to="/" class="text-2xl font-bold ">
          <img src="@/assets/img/common/logo.png" alt="" class="h-40 transition ease-out hover:scale-90" />
        </nuxt-link>
      </div>
</div>

    <!-- <div class="grid grid-cols-1 md:grid-cols-3 rounded-md drop-shadow-md">
        <div class="flex flex-col justify-between md:items-start items-center gap-2 p-5">
            <h1 class="text-xl font-bold">Red Oak, Texas</h1>
            <p class="font-[600]"><span class="font-bold">Phone : </span>Phone:  (972) 722-4866</p>
            <p class="font-[600]"><span class="font-bold">Address : </span>Address: 3084 N Goliad Suite #110</p>
            <p class="font-bold">Rockwall, TX 75087</p>
        </div>
        <div class="flex flex-col justify-between md:items-start items-center gap-2 p-5 text-center">
            <h1 class="text-xl font-bold text-center">Murphy, Texas</h1>
            <p class="font-[600]"><span class="font-bold">Phone : </span>(972) 423-8100</p>
            <p class="font-[600]"><span class="font-bold">Address : </span>158 W FM 544 Suite #132</p>
            <p class="font-bold">Murphy, TX 75094</p>
        </div>
        <div class="flex flex-col justify-between md:items-start items-center gap-2 p-5 text-center">
            <h1 class="text-xl font-bold text-center">Rockwall, Texas</h1>
            <p class="font-[600]"><span class="font-bold">Phone : </span>(469) 552-6888</p>
            <p class="font-[600]"><span class="font-bold">Address : </span>Address: 102 E. Ovilla Rd</p>
            <p class="font-bold">Red Oak, TX 75154</p>
        </div>
    </div> -->

    <div class="text-center pt-10 pb-5">
      All Right Reserved

      <span class="text-lg font-bold italic">Hi-Tech Bangla (Bangladesh)</span> &copy;
      {{ new Date().getFullYear() }}
    </div>
  </div>
</template>

<style scoped></style>
