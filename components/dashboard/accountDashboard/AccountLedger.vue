<script setup>
const ledgerList = ref([
  {
    id: 1,
    date: "12/12/2023",
    description: "Vera Carpenter",
    debit: "2590",
    credit: "2590",
    Balance: "2590",
    userImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    orderId: "IS987346",
    orderStatus: "Pending",
    branch: "Dhaka",
    totalAmount: "$9823",
  },
  {
    id: 2,
    date: "12/12/2023",
    description: "Blake Bowman",
    debit: "2590",
    credit: "2590",
    Balance: "2590",
    userImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    orderId: "IS987346",
    orderStatus: "Processing",
    branch: "Chattogram",
    totalAmount: "$7235",
  },
  {
    id: 3,
    date: "12/12/2023",
    description: "Dana Moore",
    debit: "2590",
    credit: "2590",
    Balance: "2590",
    userImg:
      "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    orderId: "IS987346",
    orderStatus: "On the way",
    branch: "Dhaka",
    totalAmount: "$9823",
  },
  {
    id: 4,
    date: "12/12/2023",
    description: "Alonzo Cox",
    debit: "2590",
    credit: "2590",
    Balance: "2590",
    userImg:
      "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
    orderId: "IS987346",
    orderStatus: "Delivered",
    branch: "Dhaka",
    totalAmount: "$823",
  },
]);
</script>
<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div>
        <h2
          class="text-2xl font-semibold leading-tight border-b pb-2 border-orange-400"
        >
          Account Ledger List
        </h2>
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
                  No.
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Debit
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Credit
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Balance
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="singleOrder in ledgerList">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ singleOrder.id }}
                  </p>
                </td>
                <!-- <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      :class="`absolute inset-0  opacity-50 rounded-full ${
                        singleOrder.orderStatus === 'Pending'
                          ? 'bg-orange-200'
                          : singleOrder.orderStatus === 'Processing'
                          ? 'bg-red-200'
                          : singleOrder.orderStatus === 'On the way'
                          ? 'bg-green-200'
                          : 'bg-green-400'
                      }`"
                    ></span>
                    <span class="relative">{{ singleOrder.orderStatus }}</span>
                  </span>
                </td> -->
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ singleOrder.date }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ singleOrder.description }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    ${{ singleOrder.debit }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    ${{ singleOrder.credit }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    ${{ singleOrder.Balance }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <BaseButton
                    :buttonText="`Create`"
                    :extraClass="`w-full`"
                    class=""
                  />
                </td>
              </tr>
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
