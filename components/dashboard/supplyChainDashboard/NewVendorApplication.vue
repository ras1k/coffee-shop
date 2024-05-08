<script setup></script>

<template>
  <div class="py-6">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-orange-400 font-bold pb-2">
        All Vendor Applications
      </p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-600 text-xl">
            <th class="p-2 text-left">No.</th>
            <th class="p-2 text-left">Vendor Image</th>
            <th class="p-2 text-left">Vendor Name</th>
            <th class="p-2 text-left">Vendor Type</th>
            <th class="p-2 text-left">Details</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">01</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
            </td>

            <td class="py-4 p-2">Humble Cup Coffee</td>
            <td class="py-4 p-2">Beverage</td>
            <td class="py-4 p-2">
              <BaseButton
                :buttonText="`Details`"
                class="text-xl font-semibold"
              />
              <!-- <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div class="font-semibold text-l mb-2">Vendor Details</div>
                      </DialogTitle>
                      <DialogDescription>
                        <h1 class="font-semibold text-l mb-2">Vendor Logo:</h1>
                        <img src="/src/assets/image/home/l4.jpg" alt="" />
                        <div class="flex mt-2 gap-5 items-center justify-between">
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Vendor Name:</h1>
                            Humble Cup Coffee
                          </div>
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Vendor Type:</h1>
                            Beverage
                          </div>
                        </div>
                        <div class="flex gap-5 items-center justify-between mt-2">
                          <div>
                            <span class="text-black font-semibold">Vendor Address:</span>
                            Texas
                          </div>
                          <div>
                            <span class="text-black font-semibold"
                              >Application Submission Date:</span
                            >
                            10 Feb 2024
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </button> -->
            </td>
            <td class="py-4 p-2">
              <select
                name=""
                id=""
                class="text-black rounded-xl p-1 focus:outline-none"
              >
                <option value="">Accept</option>
                <option value="">Reject</option>
              </select>
            </td>
          </tr>
          <tr class="bg-gray-600">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">02</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
            </td>
            <td class="py-4 p-2">Just For You</td>
            <td class="py-4 p-2">Woodwork</td>
            <td class="py-4 p-2">
              <BaseButton
                :buttonText="`Details`"
                class="text-xl font-semibold"
              />
              <!-- <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div class="font-semibold text-l mb-2">Vendor Details</div>
                      </DialogTitle>
                      <DialogDescription>
                        <h1 class="font-semibold text-l mb-2">Vendor Logo:</h1>
                        <img src="/src/assets/image/home/l4.jpg" alt="" />
                        <div class="flex mt-2 gap-5 items-center justify-between">
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Vendor Name:</h1>
                            Just For You
                          </div>
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Vendor Type:</h1>
                            Woodwork
                          </div>
                        </div>
                        <div class="flex gap-5 items-center justify-between mt-2">
                          <div>
                            <span class="text-black font-semibold">Vendor Address:</span> 1
                            Jan 2024
                          </div>
                          <div>
                            <span class="text-black font-semibold"
                              >Application Submission Date:</span
                            >
                            10 Feb 2024
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </button> -->
            </td>
            <td class="py-4 p-2">
              <select
                name=""
                id=""
                class="text-black rounded-xl p-1 focus:outline-none"
              >
                <option value="">Accept</option>
                <option value="">Reject</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
