<template>
  <div class="">
    <div class="py-5 container">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">Application Steps</p>
      </div>
      <hr />
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-gray-600">
              <th class="p-2 text-center w-1/8">Applicant ID</th>
              <th class="p-2 text-center w-1/8">Position Title</th>
              <th class="p-2 text-center w-3/8">Name</th>
              <th class="p-2 text-center w-1/8">Contact</th>
              <th class="p-2 text-center w-1/8">Application Submited Date</th>
              <th class="p-2 text-center w-1/8">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 w-1/8 text-center">01</td>
              <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
              <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img
                  src="@/assets/img/avatar.webp"
                  alt=""
                  class="w-14 h-14 rounded-full ring-4 ring-gray-500"
                />
                <h3 class="font-bold">Ibnul Hossain</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">+8801823455640</td>
              <td class="py-4 p-2 text-center w-1/8">02/14/2024</td>

              <td class="py-4 p-2 text-center w-1/8">
                <div class="flex">
                  <span class="text-sm text-whit mt-6">
                    <span class="p-2 text-white bg-green-500 mx-2"
                      >Application Submitted</span
                    >
                  </span>
                  <span>
                    <router-link
                      to="/HR_Dashboard/HR_Change_Application_Steps/1"
                    >
                      <span class="text-gray-500 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </span>
                    </router-link>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
