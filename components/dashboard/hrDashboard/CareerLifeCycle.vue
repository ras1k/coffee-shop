<script setup lang="ts">
// import { ref } from "vue";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

import img1 from "@/assets/img/avatar.webp";

const employees = ref([
  {
    id: "1",
    image: img1,
    name: "Harun Khan",
    current_position: "CEO",
    joining_date: "2022-12-01",
    joining_position: "Mid Developer",
    joining_salary: "$ 500",
    current_salary: "$ 1000",
  },
  {
    id: "2",
    image: img1,
    name: "Ashraful Jayed",
    current_position: "Waiter",
    joining_date: "2023-12-01",
    joining_position: "Junior Developer",
    joining_salary: "$ 200",
    current_salary: "$ 200",
  },
]);
</script>

<template>
  <div class="py-5 container">
    <div
      class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
    >
      <p class="text-2xl text-[#6F4E37] font-bold pb-2">Career Life Cycle</p>
    </div>
    <hr />
    <hr />
    <div class="mt-10 grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pb-4">
      <div
        v-for="employee in employees"
        :key="employee.id"
        class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div
          class="relative overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            class="rounded-t-lg p-5 h-[350px] w-full"
            :src="employee.image"
            alt=""
          />
        </div>
        <div class="p-6">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <span>Name: </span> {{ employee.name }}
          </h5>
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <span>Current Position: </span> {{ employee.current_position }}
          </h5>
          <div class="mt-4 text-center">
            <button
              class="px-6 py-3 rounded-md shadow-md bg-orange-800 text-white text-sm"
            >
              <Dialog>
                <DialogTrigger> Details </DialogTrigger>
                <DialogContent class="bg-white">
                  <DialogHeader>
                    <DialogTitle>
                      <div class="text-xl mb-2 text-center">
                        <span class="font-bold">Employee Details</span>
                      </div>
                    </DialogTitle>
                    <DialogDescription>
                      <img
                        :src="employee.image"
                        alt="user_image"
                        class="px-20 h-[300px]"
                      />
                      <div class="flex mt-2 gap-5 items-center justify-between">
                        <p class="font-semibold mt-2 text-l text-black">
                          Employee Name: {{ employee.name }}
                        </p>

                        <p class="font-semibold mt-2 text-l text-black">
                          Current Position: {{ employee.current_position }}
                        </p>
                      </div>
                      <div class="flex mt-2 gap-5 items-center justify-between">
                        <div class="flex gap-2">
                          <h1 class="text-black font-semibold">
                            Joining Date:
                          </h1>
                          {{ employee.joining_date }}
                        </div>
                        <div class="flex gap-2">
                          <h1 class="text-black font-semibold">
                            Joining Position:
                          </h1>
                          {{ employee.joining_position }}
                        </div>
                      </div>
                      <div class="flex mt-2 gap-5 items-center justify-between">
                        <div class="flex gap-2">
                          <h1 class="text-black font-semibold">
                            Current Salary:
                          </h1>
                          {{ employee.current_salary }}
                        </div>
                        <div class="flex gap-2">
                          <h1 class="text-black font-semibold">
                            Joining Salary:
                          </h1>
                          {{ employee.joining_salary }}
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
