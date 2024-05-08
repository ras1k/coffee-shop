<script setup>
import { useHrDashboardStore } from "~/stores/dashboard/hrDashboard";

// pinia
const { setJobList } = useHrDashboardStore();

const jobDescriptionForm = ref({
  job_title: "",
  job_id: "",
  job_description: "",
  duties: "",
  qualifications: "",
  key_competencies: "",
  reports_to: "",
  about_us: "",
  benefits: "",
});

const handleJobDescription = () => {
  setJobList(jobDescriptionForm.value);
  setTimeout(() => {
    jobDescriptionForm.value = {
      job_title: "",
      job_id: "",
      job_description: "",
      duties: "",
      qualifications: "",
      key_competencies: "",
      reports_to: "",
      about_us: "",
      benefits: "",
    };
  }, 1000);
};
</script>
<template>
  <div class="container">
    <div class="py-6">
      <div
        class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
      >
        <p class="text-2xl text-[#6F4E37] font-bold pb-2">
          Create Job Description
        </p>
      </div>
      <hr />
      <div class="pt-6 bg-slate-700 container text-white mt-2 rounded-lg">
        <form>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/2">
              <label for="Job Title" class="block font-semibold"
                >Job Title</label
              >
              <input
                v-model="jobDescriptionForm.job_title"
                type="text"
                placeholder="Job Title"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/2">
              <label for="Job Id" class="block font-semibold">Job ID</label>
              <input
                v-model="jobDescriptionForm.job_id"
                type="text"
                placeholder="Job Id"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="General Job description" class="block font-semibold">
                General Job description</label
              >
              <textarea
                v-model="jobDescriptionForm.job_description"
                id="message"
                name="message"
                placeholder="General Job description..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label
                for="Duties and Responsibilities"
                class="block font-semibold"
              >
                Duties and Responsibilities</label
              >
              <textarea
                v-model="jobDescriptionForm.duties"
                id="message"
                name="Duties and Responsibilities"
                placeholder="Duties and Responsibilities..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label
                for="Job qualifications and requirements"
                class="block font-semibold"
              >
                Job qualifications and requirements</label
              >
              <textarea
                v-model="jobDescriptionForm.qualifications"
                id="Job qualifications"
                name="Job qualifications and requirements"
                placeholder="Job qualifications and requirements..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="Key Competencies" class="block font-semibold">
                Key Competencies</label
              >
              <textarea
                v-model="jobDescriptionForm.key_competencies"
                id="message"
                name="Key Competencies"
                placeholder="Key Competencies..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="message" class="block font-semibold">
                Who this position reports to</label
              >
              <textarea
                v-model="jobDescriptionForm.reports_to"
                id="message"
                name="message"
                placeholder="Who this position reports to..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="message" class="block font-semibold"> About us</label>
              <textarea
                v-model="jobDescriptionForm.about_us"
                id="message"
                name="message"
                placeholder="About us..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <div class="mb-4 w-full">
              <label for="message" class="block font-semibold"> Benefits</label>
              <textarea
                v-model="jobDescriptionForm.benefits"
                id="message"
                name="message"
                placeholder="Benefits..."
                rows="6"
                class="form-textarea mt-1 block w-full rounded-md focus:outline-none text-black p-2 border-gray-300 shadow-sm"
              ></textarea>
            </div>
          </div>

          <div class="text-center pt-4">
            <BaseButton
              :buttonText="`Create`"
              :extraClass="`w-full`"
              class="text-xl font-semibold"
              @click="handleJobDescription"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
