<script setup>
const mediaCampaigns = [
  {
    name: "Campaign 1",
    platform: "Facebook",
    startDate: "2024-03-01",
    endDate: "2024-03-15",
    status: "Active",
  },
  {
    name: "Campaign 2",
    platform: "Instagram",
    startDate: "2024-03-05",
    endDate: "2024-03-20",
    status: "Inactive",
  },
  {
    name: "Campaign 3",
    platform: "Twitter",
    startDate: "2024-03-10",
    endDate: "2024-03-25",
    status: "Active",
  },
  // Add more campaigns as needed
];
</script>

<template>
  <div class="mx-auto mt-8">
    <h1 class="text-3xl font-semibold mb-4 border-b border-orange-400 pb-2">
      Marketing Dashboard
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-black"
    >
      <!-- Box 1: Low Stock Items -->
      <div
        class="bg-white px-4 py-6 flex justify-between items-center rounded-lg shadow-md"
      >
        <div>
          <img
            src="https://vue.hibootstrap.com/pyle/img/wallet-money.0e90e8be.svg"
            class=""
            alt=""
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-[#6F4E37]">
            Total Revenue:
          </h2>
          <p class="text-2xl font-bold">$5312.00</p>
        </div>
      </div>
      <div
        class="bg-white px-4 py-6 flex justify-between items-center rounded-lg shadow-md"
      >
        <div>
          <img
            src="https://vue.hibootstrap.com/pyle/img/wallet-add.e317072d.svg"
            class="text-green-500"
            alt=""
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-[#6F4E37]">
            Total Leads:
          </h2>
          <p class="text-2xl font-bold">$2312.00</p>
        </div>
      </div>
      <div
        class="bg-white px-4 py-6 flex justify-between items-center rounded-lg shadow-md"
      >
        <div>
          <img
            src="https://vue.hibootstrap.com/pyle/img/money-send.3acc8814.svg"
            class="text-green-500"
            alt=""
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-[#6F4E37]">
            Conversion Rate:
          </h2>
          <p class="text-2xl font-bold">20%</p>
        </div>
      </div>
      <div
        class="bg-white px-4 py-6 flex justify-between items-center rounded-lg shadow-md"
      >
        <div>
          <img
            src="https://vue.hibootstrap.com/pyle/img/money-change.ca11b81a.svg"
            class="text-green-500"
            alt=""
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-[#6F4E37]">
            Total Return:
          </h2>
          <p class="text-2xl font-bold">$50.00</p>
        </div>
      </div>
    </div>
    <div>
      <p
        class="text-2xl font-semibold mt-4 pt-6 border-b border-orange-400 pb-2 text-[#6F4E37]"
      >
        Media Campaigns
      </p>
      <div class="p-6 rounded-lg shadow-md mt-4 bg-gray-700 text-white">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Campaign Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Platform
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Start Date
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                End Date
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-lg font-semibold uppercase"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(campaign, index) in mediaCampaigns" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">{{ campaign.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ campaign.platform }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ campaign.startDate }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ campaign.endDate }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ campaign.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
