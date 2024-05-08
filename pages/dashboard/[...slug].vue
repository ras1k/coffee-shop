<script setup>
import { dynamicDashboardRoleData } from "./dashboardData";

import { useVendorDashboardStore } from "~/stores/dashboard/vendorDashboard";
const { getInitializedVendorProducts } = useVendorDashboardStore();

const currentTab = ref("");

const loginCookie = useCookie("loginCookie");
const userCookie = useCookie('userCookie')
console.log(userCookie, 'user cookie');

const convertToTitleCase = (inputString) => {
  const words = inputString?.split("-");

  // Capitalize the first letter of each word
  const capitalizedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back together
  const resultString = capitalizedWords?.join(" ");

  return resultString;
};

const dynamicDashboardRole = ref(dynamicDashboardRoleData);

onMounted(() => {
  console.log(loginCookie.value.loginRole, "loginCookie.value.loginRole");
  if (loginCookie.value.loginRole === "accounting-management") {
    currentTab.value = "Accounting Ledger";
  } else if (loginCookie.value.loginRole === "vendor-login") {
    getInitializedVendorProducts(loginCookie.value.email);
    currentTab.value = "Profile";
  } else {
    currentTab.value = "Profile";
  }
});
</script>
<template>
  <div class="mt-10 h-full pt-5">
    <!-- <BaseHeaderTitle /> -->
    <div
      class="flex lg:flex-row flex-col min-h-screen w-full bg-[#6F4E37] text-lg font-semibold mt-5 rounded-r-lg"
    >
      <div class="lg:w-[30%] h-full w-[40%] p-5 text-white">
        <ul class="text-xl">
          <li class="" @click="currentTab = 'Profile'">
            <img
              src="@/assets/img/avatar.webp"
              alt=""
              srcset=""
              class="w-16 h-16"
            />
            <span>{{ userCookie?.name }} </span>
          </li>
          <template
            v-for="currentDashboard in dynamicDashboardRole"
            :key="currentDashboard.id"
          > 
            <template
              v-if="
                currentDashboard.name ===
                convertToTitleCase(loginCookie.loginRole)
              "
            >
              <li
                v-for="singleDashboardMenu in currentDashboard.dashboardMenu"
                :key="singleDashboardMenu.id"
                :class="`flex flex-col ${
                  currentTab.includes(singleDashboardMenu.name)
                    ? 'bg-gray-700 shadow-inner'
                    : ''
                }`"
                @click="currentTab = singleDashboardMenu.name"
              >
                <div class="flex justify-between w-full">
                  <div class="flex items-center gap-3">
                    <fa
                      v-if="singleDashboardMenu.name === 'Profile'"
                      class="transition-all duration-300 text-md text-white ease-in-out"
                      :icon="['fa-solid', 'address-card']"
                    />

                    <fa
                      v-else-if="
                        singleDashboardMenu.name === 'Manage Organogram'
                      "
                      :class="`transition-all duration-300 text-md text-white ease-in-out`"
                      :icon="['fa-solid', 'sitemap']"
                    />
                    <!-- <BaseIconJobIcon
                      v-else-if="singleDashboardMenu.name === 'Job Management'"
                      class="w-6 h-6"
                    />
                    <BaseIconHireIcon
                      v-else-if="
                        singleDashboardMenu.name === 'Hiring Management'
                      "
                      class="w-6 h-6"
                    />
                    <BaseIconEmployeeIcon
                      v-else-if="
                        singleDashboardMenu.name === 'Employee Management'
                      "
                      class="w-6 h-6"
                    /> -->

                    <!-- Customer Management -->
                    <fa
                      v-else-if="
                        singleDashboardMenu.name === 'View Customer Orders'
                      "
                      class="transition-all duration-300 text-md text-white ease-in-out"
                      :icon="['fa-solid', 'cart-shopping']"
                    />
                    <fa
                      v-else-if="
                        singleDashboardMenu.name === 'Manage Customer Feedback'
                      "
                      class="transition-all duration-300 text-md text-white ease-in-out"
                      :icon="['fa-solid', 'comment-dots']"
                    />
                    <fa
                      v-else-if="
                        singleDashboardMenu.name === 'Block/Unblock Customers'
                      "
                      class="transition-all duration-300 text-md text-white ease-in-out"
                      :icon="['fa-solid', 'list-check']"
                    />
                    <span
                      :class="
                        currentTab.includes(singleDashboardMenu.name)
                          ? 'text-orange-400'
                          : ''
                      "
                      >{{ singleDashboardMenu.name }}</span
                    >
                  </div>
                  <div>
                    <!-- <fa
                      v-if="singleDashboardMenu?.nestedMenu?.length > 0"
                      :class="`transition-all duration-300 text-sm ease-in-out ${
                        currentTab.includes(singleDashboardMenu.name)
                          ? 'rotate-90 text-orange-400'
                          : 'text-white'
                      }`"
                      :icon="['fa-solid', 'chevron-right']"
                    /> -->
                  </div>
                </div>

                <ul
                  v-if="
                    singleDashboardMenu?.nestedMenu?.length > 0 &&
                    currentTab.includes(singleDashboardMenu.name)
                  "
                  class="w-full flex flex-col"
                >
                  <li
                    v-for="singleNestedMenu in singleDashboardMenu?.nestedMenu"
                    :key="singleNestedMenu.id"
                    :class="`${
                      currentTab.includes(singleNestedMenu.name)
                        ? 'text-orange-400'
                        : ''
                    } ${
                      currentTab === singleNestedMenu.name
                        ? 'bg-[#162041] shadow-inner'
                        : ''
                    }`"
                    @click.stop="
                      currentTab =
                        singleDashboardMenu.name + ' > ' + singleNestedMenu.name
                    "
                  >
                    {{ singleNestedMenu.name }}
                  </li>
                </ul>
              </li>
            </template>
          </template>
        </ul>
      </div>

      <div class="lg:w-[70%] w-[60%] bg-slate-200 rounded-s-lg p-5">
        <!-- <p class="text-xl flex gap-3 items-center">
          <span>{{ currentTab.split(">")[0] }}</span>
          <fa
            v-if="currentTab.split('>')[1]"
            :class="`transition-all duration-300 text-sm ease-in-out text-white`"
            :icon="['fa-solid', 'chevron-right']"
          />
          <span>{{ currentTab.split(">")[1] }}</span>
        </p> -->

        <!-- Dynamic Component of right side -->
        <DashboardProfile v-if="currentTab === 'Profile'" />

        <!-- Content for HR Management -->
        <DashboardHrDashboardDefinePosition
          v-if="
            currentTab.includes('Define Position') ||
            currentTab === 'Manage Organogram'
          "
        />
        <DashboardHrDashboardPositionList
          v-if="currentTab.includes('Position List')"
        />

        <DashboardHrDashboardCreateJobDescription
          v-if="
            currentTab.includes('Create Job Description') ||
            currentTab === 'Job Management'
          "
        />
        <DashboardHrDashboardJobList v-if="currentTab.includes('Job List')" />
        <DashboardHrDashboardJobPost v-if="currentTab.includes('Job Post')" />

        <DashboardHrDashboardApplicationSteps
          v-if="
            currentTab.includes('Application Steps') ||
            currentTab === 'Hiring Management'
          "
        />
        <DashboardHrDashboardBackgroundCheck
          v-if="currentTab.includes('Background Check')"
        />
        <DashboardHrDashboardOrientation
          v-if="currentTab.includes('Orientation and Onboarding')"
        />

        <DashboardHrDashboardEmployeeList
          v-if="
            currentTab.includes('Employee List') ||
            currentTab === 'Employee Management'
          "
        />
        <DashboardHrDashboardTimeCard v-if="currentTab.includes('Time Card')" />
        <DashboardHrDashboardLeaveManagement
          v-if="currentTab.includes('Leave Management')"
        />
        <DashboardHrDashboardPerformanceManagement
          v-if="currentTab.includes('Performance Management')"
        />
        <DashboardHrDashboardCareerLifeCycle
          v-if="currentTab.includes('Career Lifecycle')"
        />

        <!-- Content for Vendor Chain Management -->
        <DashboardVendorDashboardMyProducts
          v-if="
            currentTab.includes('My Products') ||
            currentTab === 'Vendor Products'
          "
        />
        <DashboardVendorDashboardAddProduct
          v-if="currentTab.includes('Add Products')"
        />

        <!-- Content for Supply Chain Management -->
        <DashboardSupplyChainDashboardCreateBid
          v-if="
            currentTab.includes('Create Bid') || currentTab === 'Bid Management'
          "
        />
        <DashboardSupplyChainDashboardBidList
          v-if="currentTab.includes('Bid List')"
        />
        <DashboardSupplyChainDashboardPostBid
          v-if="currentTab.includes('Post Bid')"
        />
        <DashboardSupplyChainDashboardSelectBid
          v-if="currentTab.includes('Select Bid')"
        />
        <DashboardSupplyChainDashboardCompletedBid
          v-if="currentTab.includes('Completed Bid')"
        />
        <DashboardSupplyChainDashboardNewVendorApplication
          v-if="
            currentTab.includes('New vendor Application') ||
            currentTab === 'Vendor Management'
          "
        />
        <DashboardSupplyChainDashboardVendorList
          v-if="currentTab.includes('Registered Vendor List')"
        />
        <DashboardSupplyChainDashboardActiveVendor
          v-if="currentTab.includes('Active Vendor List')"
        />
        <DashboardSupplyChainDashboardPreferredVendor
          v-if="currentTab.includes('Preferred Vendor List')"
        />

        <!-- Content for Customer Management System -->
        <!-- <DashboardCustomerManagementDashboardViewCustomerOrders
          v-if="currentTab.includes('View Customer Orders')"
        />
        <DashboardCustomerManagementDashboardManageCustomerFeedback
          v-if="currentTab.includes('Manage Customer Feedback')"
        />
        <DashboardCustomerManagementDashboardManageCustomer
          v-if="currentTab.includes('Block/Unblock Customers')"
        /> -->

        <!-- Content for Accounting Management System -->
        <!-- <DashboardAccountDashboardAccountLedger
          v-if="currentTab.includes('Accounting Ledger')"
        />
        <DashboardAccountDashboardPayroll
          v-if="currentTab.includes('Payroll')"
        />
        <DashboardAccountDashboardOperationalExpenses
          v-if="
            currentTab.includes('Operational Expenses') ||
            currentTab === 'Expenses'
          "
        />
        <DashboardAccountDashboardProjectExpenses
          v-if="currentTab.includes('Project Expenses')"
        />
        <DashboardCustomerManagementDashboardManageCustomerFeedback
          v-if="currentTab.includes('Manage Customer Feedback')"
        />
        <DashboardCustomerManagementDashboardManageCustomer
          v-if="currentTab.includes('Block/Unblock Customers')"
        /> -->

        <!-- Content for User Dashboard System -->
        <!-- <DashboardUserDashboardViewUserOrders
          v-if="currentTab.includes('View User Orders')"
        />
        <DashboardUserDashboardPaymentHistory
          v-if="currentTab.includes('Payment History')"
        />
        <DashboardUserDashboardManagePaymentMethod
          v-if="currentTab.includes('Manage Payment Method')"
        />
        <DashboardUserDashboardReferralProgram
          v-if="currentTab.includes('Referral Program')"
        /> -->

        <!-- Content for Inventory Management -->
        <DashboardInventoryDashboardManageDashboard
          v-if="currentTab.includes('Inventory Dashboard')"
        />
        <DashboardInventoryDashboardCreateProduct
          v-if="
            currentTab.includes('Create Product') || currentTab === 'Products'
          "
        />
        <DashboardInventoryDashboardPostProduct
          v-if="currentTab.includes('Post Product')"
        />
        <DashboardInventoryDashboardProductList
          v-if="currentTab.includes('Product List')"
        />
        <DashboardInventoryDashboardCreatePurchase
          v-if="
            currentTab.includes('Create Purchase') || currentTab === 'Purchase'
          "
        />
        <DashboardInventoryDashboardPostPurchase
          v-if="currentTab.includes('Post Purchase')"
        />
        <DashboardInventoryDashboardProductList
          v-if="currentTab.includes('Purchase List')"
        />
        <DashboardInventoryDashboardStockIn
          v-if="currentTab.includes('Stock In') || currentTab === 'Adjustment'"
        />
        <DashboardInventoryDashboardStockOut
          v-if="currentTab.includes('Stock Out')"
        />
        <DashboardInventoryDashboardCreateCategory
          v-if="
            currentTab.includes('Create Category') ||
            currentTab === 'Categories'
          "
        />
        <DashboardInventoryDashboardCategoryList
          v-if="currentTab.includes('Category List')"
        />
        <DashboardInventoryDashboardCreateWarehouse
          v-if="
            currentTab.includes('Create Warehouse') ||
            currentTab === 'Warehouse'
          "
        />
        <DashboardInventoryDashboardWarehouseList
          v-if="currentTab.includes('Warehouse List')"
        />
        <DashboardInventoryDashboardCreateBrand
          v-if="currentTab.includes('Create Brand') || currentTab === 'Brand'"
        />
        <DashboardInventoryDashboardBrandList
          v-if="currentTab.includes('Brand List')"
        />

        <!-- Content for Customer Management System -->
        <DashboardCustomerManagementDashboardViewCustomerOrders
          v-if="currentTab.includes('View Customer Orders')"
        />
        <DashboardCustomerManagementDashboardManageCustomerFeedback
          v-if="currentTab.includes('Manage Customer Feedback')"
        />
        <DashboardCustomerManagementDashboardManageCustomer
          v-if="currentTab.includes('Block/Unblock Customers')"
        />

        <!-- Content for Accounting Management System -->
        <DashboardAccountDashboardAccountLedger
          v-if="currentTab.includes('Accounting Ledger')"
        />
        <DashboardAccountDashboardPayroll
          v-if="currentTab.includes('Payroll')"
        />
        <DashboardAccountDashboardOperationalExpenses
          v-if="
            currentTab.includes('Operational Expenses') ||
            currentTab === 'Expenses'
          "
        />
        <DashboardAccountDashboardProjectExpenses
          v-if="currentTab.includes('Project Expenses')"
        />

        <!-- Content for User Dashboard System -->
        <DashboardUserDashboardViewUserOrders
          v-if="currentTab.includes('View User Orders')"
        />
        <DashboardUserDashboardPaymentHistory
          v-if="currentTab.includes('Payment History')"
        />
        <DashboardUserDashboardManagePaymentMethod
          v-if="currentTab.includes('Manage Payment Method')"
        />
        <DashboardUserDashboardReferralProgram
          v-if="currentTab.includes('Referral Program')"
        />
        <DashboardUserDashboardOrderDetails
          v-if="currentTab.includes('Order Details')"
        />

        <!-- Content for Marketing Management -->
        <DashboardMarketingDashboardManageDashboard
          v-if="currentTab.includes('Marketing Dashboard')"
        />
        <DashboardMarketingDashboardCreateOffer
          v-if="currentTab.includes('Create Offer') || currentTab === 'Offer'"
        />
        <DashboardMarketingDashboardOfferList
          v-if="currentTab.includes('Offer List')"
        />
        <DashboardMarketingDashboardPostOffer
          v-if="currentTab.includes('Post Offer')"
        />
        <DashboardMarketingDashboardCreatePromo
          v-if="currentTab.includes('Create Promo') || currentTab === 'Promo'"
        />
        <DashboardMarketingDashboardPromoList
          v-if="currentTab.includes('Promo List')"
        />
        <DashboardMarketingDashboardPostPromo
          v-if="currentTab.includes('Post Promo')"
        />
        <DashboardMarketingDashboardCreateSpecials
          v-if="
            currentTab.includes('Create Specials') || currentTab === 'Specials'
          "
        />
        <DashboardMarketingDashboardSpecialsList
          v-if="currentTab.includes('Specials List')"
        />
        <DashboardMarketingDashboardPostSpecials
          v-if="currentTab.includes('Post Specials')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
ul > li {
  @apply flex gap-2 items-center p-4 rounded-lg cursor-pointer;
}
</style>
