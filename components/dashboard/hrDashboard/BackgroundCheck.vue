<script setup></script>
<template>
  <div class="py-5 w-full container">
    <div
      class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
    >
      <p class="text-2xl text-[#6F4E37] font-bold pb-2">Background Check</p>
    </div>
    <hr />
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-600">
            <th class="p-2 text-center w-1/8">Position Title</th>
            <th class="p-2 text-center w-3/8">Applicant name</th>
            <th class="p-2 text-center w-1/8">Applicant Details</th>
            <th class="p-2 text-center w-1/8">Background check start date</th>
            <th class="p-2 text-center w-1/8">Background check Receive date</th>
            <th class="p-2 text-center w-1/8">Background check status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
            <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
              <img
                src="@/assets/img/avatar.webp"
                alt=""
                class="w-14 h-14 rounded-full ring-4 ring-gray-500"
              />
              <h3 class="font-bold">Ibnul Hossain</h3>
            </td>
            <td class="py-4 p-2 pl-5 text-center w-1/8">
              <button
                class="text-center text-sm px-3 py-2 text-white bg-blue-500 rounded-sm"
              >
                Detail
              </button>
            </td>
            <td class="py-4 p-2 text-center w-1/8">
              <input
                class="mx-3 peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none text-black"
                type="date"
                name="event_date"
                id="event_date"
                placeholder="YYYY-MM-DD"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </td>
            <td class="py-4 p-2 text-center w-1/8">
              <input
                class="mx-3 peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none text-black"
                type="date"
                name="event_date"
                id="event_date"
                placeholder="YYYY-MM-DD"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </td>
            <td class="py-4 p-2 text-center w-1/8">
              <div class="flex">
                <span class="text-red-500 px-2">Not Cleared</span>
                <span class="px-2"
                  ><button
                    class="text-white text-sm px-2 py-2 rounded-sm bg-blue-500"
                  >
                    Update
                  </button></span
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
