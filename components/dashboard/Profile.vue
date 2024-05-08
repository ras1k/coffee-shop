<script setup>
const userCookie = useCookie('userCookie')
console.log(userCookie, 'user cookie');

</script>
<template>
  <div class="container">
    <div class="flex items-center justify-center">
      <div class="px-[5%] py-5 w-full flex flex-col items-center">
        <img
          src="@/assets/img/avatar.webp"
          alt=""
          class="h-[100px] w-[100px] rounded-full border shadow-md"
        />
        <div class="bg-slate-300 px-5 mt-5 w-full rounded-md shadow-md">
          <p class="text-sm pt-2">Name</p>
          <!-- {{ userCookie }} -->
          <p class="text-xl font-semibold pb-2">{{ userCookie?.name }}</p>
        </div>
        <div class="bg-slate-300 px-5 mt-5 w-full rounded-md shadow-md">
          <p class="text-sm pt-2">Email Address</p>
          <p class="text-xl font-semibold pb-2">{{ userCookie?.email }}</p>
        </div>
        <div class="bg-slate-300 px-5 mt-5 w-full rounded-md shadow-md">
          <p class="text-sm pt-2">Phone Number</p>
          <p class="text-xl font-semibold pb-2">{{ userCookie?.phone_no }}</p>
        </div>
        <div class="bg-slate-300 px-5 mt-5 w-full rounded-md shadow-md">
          <p class="text-sm pt-2">Gender</p>
          <p class="text-xl font-semibold pb-2">{{ userCookie?.gender }}</p>
        </div>
        <div class="bg-slate-300 px-5 mt-5 w-full rounded-md shadow-md">
          <p class="text-sm pt-2">Address</p>
          <p class="text-xl font-semibold pb-2">{{ userCookie?.address }}</p>
        </div>

      
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
