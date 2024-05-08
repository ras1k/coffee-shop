<script setup lang="ts">
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
</script>

<template>
  <div class="py-5 container">
    <div
      class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
    >
      <p class="text-2xl text-[#6F4E37] font-bold pb-2">
        Leave Of Leave Management
      </p>
    </div>
    <hr />
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-600 text-l">
            <th class="p-2 text-left">Employee ID</th>
            <th class="p-2 text-left">Employee Name</th>
            <th class="p-2 text-left">Preferred date</th>
            <th class="p-2 text-left">Requested date</th>
            <th class="p-2 text-left">Reason</th>
            <th class="p-2 text-left">Status</th>
            <th class="p-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">01</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <img
                src="@/assets/img/avatar.webp"
                alt=""
                class="w-14 h-14 rounded-full ring-4 ring-gray-500"
              />
              <h3 class="px-3 font-bold">Dr. Imran</h3>
            </td>
            <td class="py-4 p-2">2024-03-10</td>
            <td class="py-4 p-2">2024-03-06</td>

            <td class="py-4 p-2">
              <p class="front-semibold">Sick Leave</p>
            </td>
            <td class="py-4 p-2 text-yellow-500 font-semibold">Pending</td>
            <td>
              <button
                class="px-3 py-2 rounded-md shadow-md bg-emerald-600 text-white hover:bg-black text-sm"
              >
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent class="bg-white">
                    <DialogHeader>
                      <DialogTitle>
                        <div class="font-bold text-2xl mb-2 text-center">
                          Leave Request
                        </div>
                      </DialogTitle>
                      <DialogDescription>
                        <div>
                          <h1 class="mt-2 text-lg text-black">
                            <span class="text-xl font-semibold">Reason:</span>
                            Sick Leave.
                          </h1>
                        </div>

                        <div class="flex-cols items-center mt-2">
                          <div>
                            <h1 class="mt-2 text-lg text-black">
                              <span class="text-xl font-semibold"
                                >Preferred Date:</span
                              >
                              2024-03-10
                            </h1>
                          </div>
                          <div>
                            <h1 class="mt-2 mb-2 text-lg text-black">
                              <span class="text-xl font-semibold"
                                >Requested Date:</span
                              >
                              2024-03-06
                            </h1>
                          </div>
                        </div>
                        <div class="flex-cols border-2 p-2 rounded-sm">
                          <h1 class="mt-2 text-lg text-black">
                            <span class="text-xl font-semibold"
                              >Description:</span
                            >
                          </h1>
                          <p class="text-lg">
                            I am taking sick leave due to flu symptoms and a
                            high fever. I need time to rest and recover.
                          </p>
                        </div>
                        <div class="flex justify-between">
                          <div
                            class="w-1/2 flex justify-center border mt-5 py-2 rounded-md text-lg bg-white pr-2"
                          >
                            <DropdownMenu class="w-full">
                              <DropdownMenuTrigger class="w-full"
                                >Update Status</DropdownMenuTrigger
                              >
                              <DropdownMenuContent class="bg-white">
                                <DropdownMenuItem class="text-yellow-600"
                                  >Pending</DropdownMenuItem
                                >
                                <DropdownMenuItem class="text-green-600"
                                  >Approved</DropdownMenuItem
                                >
                                <DropdownMenuItem class="text-red-600"
                                  >Cancelled</DropdownMenuItem
                                >
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M12 16L6 10H18L12 16Z"></path>
                            </svg>
                          </div>
                          <div class="mt-5">
                            <button
                              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
