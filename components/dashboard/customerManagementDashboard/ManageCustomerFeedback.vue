<script setup>
import { storeToRefs } from "pinia";
import { useCustomerOrderManageDashboardStore } from "~/stores/dashboard/customerAndOrderManageDashboard";

// pinia
const { orderLists } = storeToRefs(useCustomerOrderManageDashboardStore());
const { updateFeedbackStatus, deleteFeedback } =
  useCustomerOrderManageDashboardStore();

const handleDeleteFeedback = (orderId, feedbackProductId) => {
  deleteFeedback({ orderId: orderId, feedbackProductId: feedbackProductId });
};

const handleFeedbackStatus = (orderId, feedbackProductId, feedbackStatus) => {
  updateFeedbackStatus({
    orderId: orderId,
    feedbackProductId: feedbackProductId,
    feedbackStatus: feedbackStatus,
  });
};
</script>
<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div>
        <h2 class="text-2xl font-semibold leading-tight">Customer Feedback</h2>
      </div>
      <div class="my-2 flex sm:flex-row flex-col">
        <div class="flex flex-row mb-1 sm:mb-0">
          <div class="relative">
            <select
              class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <div class="relative">
            <select
              class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="block relative">
          <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
              <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
              ></path>
            </svg>
          </span>
          <input
            placeholder="Search"
            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  User
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Product Id
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Feedback
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="singleOrder in orderLists">
                <template
                  v-if="
                    singleOrder?.orderedProducts &&
                    singleOrder?.orderedProducts?.length > 0
                  "
                >
                  <template
                    v-for="singleFeedback in singleOrder.orderedProducts"
                  >
                    <template v-if="singleFeedback.feedback !== ''">
                      <tr
                        :class="`${
                          singleFeedback.feedbackStatus === 'Hide'
                            ? 'opacity-40'
                            : ''
                        }`"
                      >
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-full h-full rounded-full"
                                :src="singleOrder?.userImg"
                                alt=""
                              />
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {{ singleOrder.userName }}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <p class="text-gray-900 whitespace-no-wrap">
                            {{ singleFeedback.productId }}
                          </p>
                        </td>
                        <td
                          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          <p class="text-gray-900 whitespace-no-wrap">
                            {{ singleFeedback.feedback }}
                          </p>
                        </td>
                        <td
                          class="px-5 py-5 border-b flex gap-3 border-gray-200 bg-white text-sm"
                        >
                          <!-- Approved Feedback -->
                          <span
                            v-if="singleFeedback.feedbackStatus === 'Approved'"
                            class="relative font-semibold text-green-600 border border-green-600 p-1 w-10 h-10 flex justify-center items-center rounded-full leading-tight cursor-pointer"
                            @click="
                              handleFeedbackStatus(
                                singleOrder.id,
                                singleFeedback.productId,
                                ''
                              )
                            "
                          >
                            <fa
                              :class="`transition-all duration-300 text-lg ease-in-out p-1 rounded-lg`"
                              :icon="['fa-solid', 'square-check']"
                            />
                          </span>

                          <span
                            v-else
                            class="relative font-semibold text-green-600 border border-green-600 p-1 w-10 h-10 flex justify-center items-center rounded-full leading-tight cursor-pointer"
                            @click="
                              handleFeedbackStatus(
                                singleOrder.id,
                                singleFeedback.productId,
                                'Approved'
                              )
                            "
                          >
                            <fa
                              :class="`transition-all duration-300 text-lg ease-in-out p-1 rounded-lg`"
                              :icon="['fa-solid', 'square-plus']"
                            />
                          </span>

                          <!-- Show / Hide feedback -->
                          <span
                            v-if="singleFeedback.feedbackStatus === 'Hide'"
                            class="relative font-semibold text-green-600 border border-green-600 p-1 w-10 h-10 flex justify-center items-center rounded-full leading-tight cursor-pointer"
                            @click="
                              handleFeedbackStatus(
                                singleOrder.id,
                                singleFeedback.productId,
                                ''
                              )
                            "
                          >
                            <fa
                              :class="`transition-all duration-300 text-lg ease-in-out p-1 rounded-lg`"
                              :icon="['fa-solid', 'eye']"
                            />
                          </span>
                          <span
                            v-else
                            class="relative font-semibold text-red-600 border border-red-600 p-1 w-10 h-10 flex justify-center items-center rounded-full leading-tight cursor-pointer"
                            @click="
                              handleFeedbackStatus(
                                singleOrder.id,
                                singleFeedback.productId,
                                'Hide'
                              )
                            "
                          >
                            <fa
                              :class="`transition-all duration-300 text-lg ease-in-out p-1 rounded-lg`"
                              :icon="['fa-solid', 'eye-slash']"
                            />
                          </span>

                          <span
                            class="relative font-semibold text-red-600 border border-red-600 p-1 w-10 h-10 flex justify-center items-center rounded-full leading-tight cursor-pointer"
                            @click="
                              handleDeleteFeedback(
                                singleOrder.id,
                                singleFeedback.productId
                              )
                            "
                          >
                            <fa
                              :class="`transition-all duration-300 text-lg ease-in-out p-1 rounded-lg`"
                              :icon="['fa-solid', 'trash-can']"
                            />
                          </span>
                        </td>
                      </tr>
                    </template>
                  </template>
                </template>
              </template>
            </tbody>
          </table>
          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
