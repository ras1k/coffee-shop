<script setup>
import { storeToRefs } from "pinia";
import { useHrDashboardStore } from "~/stores/dashboard/hrDashboard";

// pinia
const { positionList } = storeToRefs(useHrDashboardStore());
const { deletePositionList } = useHrDashboardStore();

const handleDeletePositionList = (jobId) => {
  deletePositionList(jobId);
};
</script>
<template>
  <div class="container">
    <div
      class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
    >
      <p class="text-2xl text-[#6F4E37] font-bold pb-2">Position List</p>
    </div>
    <hr />
    <div class="py-6">
      <div
        class="rounded-md py-3 mt-4 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="text-sm">
              <th class="p-2 text-left whitespace-nowrap">Job ID</th>
              <th class="p-2 text-left whitespace-nowrap">Job Title</th>
              <th class="p-2 text-left whitespace-nowrap">Reports to</th>
              <th class="p-2 text-left whitespace-nowrap">
                Number of Positions
              </th>
              <th class="p-2 text-left whitespace-nowrap">
                Positions Occupied
              </th>
              <th class="p-2 text-left whitespace-nowrap">
                Vacancies available
              </th>
              <th class="p-2 text-left whitespace-nowrap">Salary type</th>
              <th class="p-2 text-left whitespace-nowrap">Salary Amount</th>
            </tr>
          </thead>
          <tbody class="" v-for="positions in positionList">
            <tr class="bg-gray-600">
              <td class="py-4 p-2 gap-2">
                {{ positions.job_id }}
              </td>
              <td class="py-4 p-2 flex items-center gap-2">
                {{ positions.job_title }}
              </td>
              <td>
                {{ positions.reports_to }}
              </td>
              <td class="py-4 p-2">{{ positions.no_of_positions }}</td>
              <td class="py-4 p-2">{{ positions.positions_occupied }}</td>
              <td class="py-4 p-2 font-semibold">
                {{ positions.vacancies_available }}
              </td>
              <td class="py-4 p-2">
                {{ positions.salary_type }}
              </td>
              <td class="py-4 p-2">
                <div class="flex">
                  ${{ positions.salary_amount }}
                  <span
                    class="text-red-500 px-2 cursor-pointer"
                    @click="handleDeletePositionList(positions.job_id)"
                  >
                    <fa
                      :class="`transition-all duration-300 text-lg ease-in-out p-1 rounded-lg`"
                      :icon="['fa-solid', 'trash-can']"
                    />
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

<style lang="scss" scoped></style>
