<script setup>
import { useHrDashboardStore } from "~/stores/dashboard/hrDashboard";

// pinia
const { setPositionList } = useHrDashboardStore();

const positionForm = ref({
  job_title: "",
  reports_to: "",
  responsible_for: "",
  no_of_positions: "",
  positions_occupied: "",
  vacancies_available: "",
  salary_type: "",
  salary_amount: "",
});

const handlePosition = () => {
  setPositionList(positionForm.value);
  console.log(positionForm.value, "registerForm.value");
};
</script>
<template>
  <div class="container">
    <div
      class="flex justify-between items-center pt-4 border-b border-[#6F4E37]"
    >
      <p class="text-2xl text-[#6F4E37] font-bold pb-2">Define Position</p>
    </div>
    <hr />
    <div class="py-6 bg-slate-700 container text-white mt-2 rounded-lg">
      <!-- <p class="text-orange-400 text-xl font-semibold">Define Position</p> -->
      <div class="pt-6">
        <form>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/3">
              <label for="Job Title" class="block font-semibold"
                >Job Title</label
              >
              <input
                v-model="positionForm.job_title"
                type="text"
                placeholder="Job Title"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="Reports To" class="block font-semibold"
                >Reports To</label
              >
              <input
                v-model="positionForm.reports_to"
                type="text"
                placeholder="Reports To"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="Responsible For" class="block font-semibold"
                >Responsible for</label
              >
              <input
                v-model="positionForm.responsible_for"
                type="text"
                placeholder="Responsible For"
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              />
            </div>
          </div>
          <div class="lg:flex items-center gap-5">
            <div class="mb-4 lg:w-1/3">
              <label for="Number of Positions" class="block font-semibold"
                >Number of Positions</label
              >
              <input
                v-model="positionForm.no_of_positions"
                type="number"
                placeholder="Number of Positions"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="Positions Occupied" class="block font-semibold"
                >Positions Occupied</label
              >
              <input
                v-model="positionForm.positions_occupied"
                type="number"
                placeholder="Positions Occupied"
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
              />
            </div>
            <div class="mb-4 lg:w-1/3">
              <label for="Vacancies available" class="block font-semibold"
                >Vacancies available
              </label>
              <input
                v-model="positionForm.vacancies_available"
                type="number"
                placeholder="0"
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              />
            </div>
          </div>

          <div class="lg:flex items-center gap-5 mt-2">
            <div class="mb-4 lg:w-1/2">
              <label for="Salary Type" class="block font-semibold">
                Salary Type</label
              >
              <select
                v-model="positionForm.salary_type"
                class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647] text-lg"
              >
                <option value="hourly">Hourly</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div class="mb-4 lg:w-1/2">
              <label for="Salary Amount" class="block font-semibold">
                Salary Amount</label
              >
              <input
                v-model="positionForm.salary_amount"
                type="number"
                placeholder="Salary Amount"
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-[#1A2647] p-2"
              />
            </div>
          </div>

          <div class="text-center pt-4">
            <BaseButton
              :buttonText="`Submit`"
              :extraClass="`w-full`"
              class="text-xl font-semibold text-white"
              @click="handlePosition"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
