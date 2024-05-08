<script setup>
const bidderInputs = ref([
  {
    name: "Introduction",
    type: "textarea",
  },
  {
    name: "Scope of Work",
    type: "text",
  },
  {
    name: "Price",
    type: "number",
  },
  {
    name: "Timeline",
    type: "datetime",
  },
]);

const removeInput = (index) => {
  bidderInputs.value.splice(index, 1);
};

const inputType = ref("text");
const inputFiledName = ref("");

const addNewField = () => {
  console.log(inputType.value, inputFiledName.value);
  bidderInputs.value.push({
    name: inputFiledName.value,
    type: inputType.value,
  });
};

const showCreateNewField = ref(false);

const supplyBidForm = ref({
  bid_id: "",
  name: "",
  budget: "",
  summary: "",
  timeframe: "",
  terms: "",
});

const handleBid = () => {
  console.log(supplyBidForm.value, "lmao");
};
</script>

<template>
  <div>
    <div class="py-5">
      <p class="text-2xl font-bold py-3 text-orange-400 border-b">Create Bid</p>
      <div class="rounded-xl p-5 w-full shadow-md mt-5">
        <form>
          <div class="py-5 space-y-7 mt-5">
            <div class="lg:flex items-center gap-5">
              <div class="mb-4 lg:w-1/3">
                <label for="Bid ID" class="block font-semibold"
                  >Bid ID <span class="text-red-500">*</span></label
                >
                <input
                  v-model="supplyBidForm.bid_id"
                  type="text"
                  placeholder="Bid ID"
                  class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
                />
              </div>
              <div class="mb-4 lg:w-1/3">
                <label for="Project/Job Name" class="block font-semibold"
                  >Project/Job Name <span class="text-red-500">*</span></label
                >
                <input
                  v-model="supplyBidForm.name"
                  type="text"
                  placeholder="Project/Job Name"
                  class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
                />
              </div>
              <div class="mb-4 lg:w-1/3">
                <label for="Project/Job Budget" class="block font-semibold"
                  >Project/Job Budget <span class="text-red-500">*</span></label
                >
                <input
                  v-model="supplyBidForm.budget"
                  type="text"
                  placeholder="Project/Job Budget"
                  class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none text-[#1A2647]"
                />
              </div>
            </div>
            <div class="">
              <label
                for="Project/Job scope of work/Summary"
                class="text-white font-semibold"
              >
                Project/Job scope of work/Summary
                <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="supplyBidForm.summary"
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Project/Job scope of work/Summary"
                class="w-full p-3 mt-1 rounded-lg border-2 text-black focus:outline-gray-200"
              ></textarea>
            </div>
            <div class="">
              <label
                for="Required Project Completion Timeframe"
                class="text-white font-semibold"
              >
                Required Project Completion Timeframe
                <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="supplyBidForm.timeframe"
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Required Project Completion Timeframe"
                class="w-full p-3 mt-1 rounded-lg border-2 text-black focus:outline-gray-200"
              ></textarea>
            </div>

            <div class="relative">
              <label
                for="Terms & Conditions"
                class="text-white font-semibold"
              >
                Terms &amp; Conditions <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="supplyBidForm.terms"
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Terms & Conditions"
                class="w-full p-3 mt-1 rounded-lg border-2 text-black focus:outline-gray-200"
              ></textarea>
            </div>
            <div class="flex flex-col gap-5">
              <div class="flex justify-between gap-2">
                <div>
                  <h1 class="text-white font-semibold text-xl">
                    Required Bidder Information
                  </h1>
                </div>
                <div class="flex justify-end gap-2">
                  <h1
                    v-if="!showCreateNewField"
                    class="text-white font-semibold text-xl px-2"
                  >
                    Create Additional Requirements
                  </h1>
                  <div v-else class="flex flex-col gap-2">
                    <div class="flex">
                      <p class="px-1">Name</p>
                      <input
                        v-model="inputFiledName"
                        type="text"
                        class="w-full rounded-lg px-2 border-2 text-black focus:outline-gray-200"
                      />
                    </div>

                    <div class="flex">
                      <p class="px-1">Type {{ selected }}</p>
                      <select
                        v-model="inputType"
                        class="w-full rounded-lg px-2 border-2 text-black focus:outline-gray-200"
                      >
                        <option disabled value="">Please select one</option>
                        <option>textarea</option>
                        <option>text</option>
                        <option>datetime</option>
                        <option>number</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="bg-teal-800 hover:bg-teal-900 text-white font-bold py-1 px-3 border border-blue-700 rounded-lg"
                    @click="
                      showCreateNewField ? addNewField() : '',
                        (showCreateNewField = !showCreateNewField)
                    "
                  >
                    {{ showCreateNewField ? "Done" : "Add" }}
                  </button>
                </div>
              </div>
              <div class="mb-3 w-full">
                <div class="mb-4">
                  <label for="name" class="block font-semibold"
                    >Bid ID <span class="text-red-500">*</span></label
                  >
                  <input
                    type="number"
                    placeholder="name"
                    class="form-input mt-1 block w-full rounded-md p-2 focus:outline-none text-[#1A2647]"
                  />
                </div>
              </div>

              <div v-for="(input, index) in bidderInputs" class="relative">
                <button
                  @click="removeInput(index)"
                  class="absolute z-50 right-0 pt-10 pr-8"
                >
                  <fa :icon="['fas', 'trash']" class="text-red-600" />
                </button>
                <p class="bg-transparent text-white font-semibold">
                  {{ input.name }}
                </p>
                <input
                  v-if="input.type === 'textarea'"
                  name=""
                  id=""
                  cols=""
                  rows="4"
                  placeholder="An overview of the bidder and their qualifications"
                  class="w-full p-3 mt-1 rounded-lg border-2 text-black focus:outline-gray-200"
                />
                <input
                  v-else-if="input.type === 'text'"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 pt-5 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  placeholder="A detailed description of the services or products being offered"
                  value=""
                />
                <input
                  v-else-if="input.type === 'number'"
                  type="number"
                  class="w-full p-3 rounded-lg text-black"
                  id="exampleFormControlInput50"
                  value=""
                />
                <input
                  v-else-if="input.type === 'datetime'"
                  type="date"
                  class="w-full p-3 rounded-lg text-black"
                  id="exampleFormControlInput50"
                  value=""
                />
              </div>
            </div>
            <BaseButton
              :buttonText="`Submit`"
              :extraClass="`w-full`"
              class="text-xl font-semibold"
              @click="handleBid"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
