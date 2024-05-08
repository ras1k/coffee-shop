<script setup>
import { storeToRefs } from "pinia";
import { useHrDashboardStore } from "~/stores/dashboard/hrDashboard";

// pinia
const { jobList } = storeToRefs(useHrDashboardStore());
const { deleteJobPost } = useHrDashboardStore();

const handleDeleteJobPost = (jobId) => {
  deleteJobPost(jobId);
};
</script>
<template>
  <div class="container">
    <div
      class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
    >
      <p class="text-2xl text-[#6F4E37] font-bold pb-2">Job List</p>
    </div>
    <hr />
    <div class="py-6">
      <div
        class="rounded-md py-3 mt-4 flex gap-5 justify-between bg-gray-700 text-white shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="text-sm">
              <th class="p-2 text-left">Job ID</th>
              <th class="p-2 text-left">Job Title</th>
              <th class="p-2 text-left">Reports to</th>
              <th class="p-2 text-left">Job Description</th>
              <th class="p-2 text-left">Key Competencies</th>
              <th class="p-2 text-left">Qualifications</th>
              <th class="p-2 text-left">About Us</th>
              <th class="p-2 text-left">Benefits</th>
            </tr>
          </thead>
          <tbody class="" v-for="jobs in jobList">
            <tr v-if="jobs.isPosted" class="bg-gray-600">
              <td class="py-4 p-2 gap-2">
                {{ jobs.job_id }}
              </td>
              <td class="py-4 p-2 gap-2">
                {{ jobs.job_title }}
              </td>
              <td>
                {{ jobs.reports_to }}
              </td>
              <td class="py-4 p-2">{{ jobs.job_description }}</td>
              <td class="py-4 p-2">{{ jobs.key_competencies }}</td>
              <td class="py-4 p-2 font-semibold">{{ jobs.qualifications }}</td>
              <td class="py-4 p-2">
                {{ jobs.about_us }}
              </td>
              <td class="py-4 p-2">
                <div class="flex">
                  {{ jobs.benefits }}
                  <span
                    class="text-red-500 px-2 cursor-pointer"
                    @click="handleDeleteJobPost(jobs.job_id)"
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
