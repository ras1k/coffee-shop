<script setup></script>
<template>
  <div>
    <div class="py-6">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-orange-400 font-bold pb-2">Completed Bid</p>
      </div>
      <hr />
      <div class="grid grid-cols-1 gap-5 my-5">
        <div
          class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-700 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-gray-600 text-sm">
                <th class="p-2 text-left">Bid Id</th>
                <th class="p-2 text-left">Project Name</th>
                <th class="p-2 text-left">Vendor Id</th>
                <th class="p-2 text-left">Bids Submitted</th>
                <th class="p-2 text-left">Selected Bidder Id</th>
                <th class="p-2 text-left">Substitute Bidder 1</th>
                <th class="p-2 text-left">Substitute Bidder 2</th>
                <th class="p-2 text-left">Rejected Bidders</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">01</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
                  <h3 class="font-bold">Meat</h3>
                </td>
                <td class="py-4 p-2">001</td>
                <td class="py-4 p-2 font-semibold">45</td>
                <td class="py-4 p-2">023</td>
                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Details`"
                    class="text-xl font-semibold"
                  />
                </td>
                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Details`"
                    class="text-xl font-semibold"
                  />
                </td>

                <td class="py-4 p-2">
                  <!-- <button
                    class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                  >
                    <Dialog>
                      <DialogTrigger> Save </DialogTrigger>
                    </Dialog>
                  </button> -->
                  <BaseButton
                    :buttonText="`Details`"
                    class="text-xl font-semibold"
                  />
                </td>
              </tr>
              <tr class="bg-gray-600">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">02</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="@/assets/img/avatar.webp" alt="" class="h-10" />
                  <h3 class="font-bold">Vegetable</h3>
                </td>
                <td class="py-4 p-2">002</td>
                <td class="py-4 p-2 font-semibold">99</td>
                <td class="py-4 p-2">66</td>
                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Details`"
                    class="text-xl font-semibold"
                  />
                </td>
                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Details`"
                    class="text-xl font-semibold"
                  />
                  <!-- <button
                    class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                  >
                    <Dialog>
                      <DialogTrigger> Insert </DialogTrigger>
                      <DialogContent>
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 pt-5 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                          id="exampleFormControlInput50"
                          placeholder="reason"
                          value=""
                        />
                        <button
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm items-center"
                        >
                          Save
                        </button>
                      </DialogContent>
                    </Dialog>
                  </button> -->
                </td>

                <td class="py-4 p-2">
                  <BaseButton
                    :buttonText="`Details`"
                    :extraClass="`w-full`"
                    class="text-xl font-semibold"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
