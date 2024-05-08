const dynamicDashboardRoleData = [
  // Hr Management
  {
    id: 1,
    name: "Hr Management",
    dashboardMenu: [
      {
        id: 1,
        name: "Profile",
        url: "/dashboard/profile",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 2,
        name: "Manage Organogram",
        url: "/dashboard/manage-organogram",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Define Position",
            url: "/dashboard/manage-organogram/define-position",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Position List",
            url: "/dashboard/manage-organogram/position-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 3,
        name: "Job Management",
        url: "/dashboard/job-management",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Job Description",
            url: "/dashboard/job-management/create-job-description",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Job List",
            url: "/dashboard/job-management/job-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Job Post",
            url: "/dashboard/job-management/job-post",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 4,
        name: "Hiring Management",
        url: "/dashboard/hiring-management",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Application Steps",
            url: "/dashboard/hiring-management/application-steps",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Background Check",
            url: "/dashboard/hiring-management/background-check",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Orientation and Onboarding",
            url: "/dashboard/hiring-management/orientation-onboarding",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 5,
        name: "Employee Management",
        url: "/dashboard/employee-management",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Employee List",
            url: "/dashboard/employee-management/employee-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Time Card",
            url: "/dashboard/employee-management/time-card",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Leave Management",
            url: "/dashboard/employee-management/leave-management",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 4,
            name: "Performance Management",
            url: "/dashboard/employee-management/performance-management",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 4,
            name: "Career Lifecycle",
            url: "/dashboard/employee-management/career-lifecycle",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
    ],
  },
  // Vendor Login
  {
    id: 2,
    name: "Vendor Login",
    dashboardMenu: [
      {
        id: 1,
        name: "Profile",
        url: "/dashboard/profile",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 2,
        name: "Vendor Products",
        url: "/dashboard/vendor-products",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fas', 'scale-balanced']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "My Products",
            url: "/dashboard/vendor-products/my-products",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Add Products",
            url: "/dashboard/vendor-products/add-products",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 3,
        name: "Manage Orders",
        url: "/dashboard/management-orders",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Requested Orders",
            url: "/dashboard/management-orders/requested-orders",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Create Order",
            url: "/dashboard/management-orders/create-order",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
    ],
  },
  // Supply Chain Management
  {
    id: 3,
    name: "Supply Chain",
    dashboardMenu: [
      {
        id: 1,
        name: "Profile",
        url: "/dashboard/profile",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 3,
        name: "Purchase",
        url: "/dashboard/inventory-purchase",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Purchase",
            url: "/dashboard/inventory-purchase/create-purchase",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Post Purchase",
            url: "/dashboard/inventory-purchase/post-purchase",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Purchase List",
            url: "/dashboard/inventory-purchase/purchase-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 4,
        name: "Bid Management",
        url: "/dashboard/bid-management",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fas', 'scale-balanced']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Bid",
            url: "/dashboard/bid-management/create-bid",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Bid List",
            url: "/dashboard/bid-management/bid-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Post Bid",
            url: "/dashboard/bid-management/post-bid",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Select Bid",
            url: "/dashboard/bid-management/select-bid",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Completed Bid",
            url: "/dashboard/bid-management/completed-bid",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 5,
        name: "Vendor Management",
        url: "/dashboard/vendor-management",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "New vendor Application",
            url: "/dashboard/vendor-management/new-vendor-application",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Registered Vendor List",
            url: "/dashboard/vendor-management/registered-vendor-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Active Vendor List",
            url: "/dashboard/vendor-management/active-vendor-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 4,
            name: "Preferred Vendor List",
            url: "/dashboard/vendor-management/preferred-vendor-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
    ],
  },
  // Inventory Management
  {
    id: 4,
    name: "Inventory Management",
    dashboardMenu: [
      {
        id: 1,
        name: "Inventory Dashboard",
        url: "/dashboard/inventory-dashboard",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 2,
        name: "Products",
        url: "/dashboard/inventory-products",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Product",
            url: "/dashboard/inventory-products/create-product",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Post Product",
            url: "/dashboard/inventory-products/post-product",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Product List",
            url: "/dashboard/inventory-products/product-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 3,
        name: "Purchase",
        url: "/dashboard/inventory-purchase",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Purchase",
            url: "/dashboard/inventory-purchase/create-purchase",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Post Purchase",
            url: "/dashboard/inventory-purchase/post-purchase",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Purchase List",
            url: "/dashboard/inventory-purchase/purchase-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 4,
        name: "Adjustment",
        url: "/dashboard/inventory-adjustment",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Stock In",
            url: "/dashboard/inventory-adjustment/stock-in",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Stock Out",
            url: "/dashboard/inventory-adjustment/stock-out",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 5,
        name: "Categories",
        url: "/dashboard/inventory-categories",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Category",
            url: "/dashboard/inventory-categories/create-category",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Category List",
            url: "/dashboard/inventory-categories/category-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 6,
        name: "Warehouse",
        url: "/dashboard/inventory-warehouse",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Warehouse",
            url: "/dashboard/inventory-warehouse/create-warehouse",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Warehouse List",
            url: "/dashboard/inventory-warehouse/warehouse-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 7,
        name: "Brand",
        url: "/dashboard/inventory-brand",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Brand",
            url: "/dashboard/inventory-brand/create-brand",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Brand List",
            url: "/dashboard/inventory-brand/brand-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
    ],
  },
  // Customer Management
  {
    id: 5,
    name: "Customer Management",
    dashboardMenu: [
      {
        id: 1,
        name: "Profile",
        url: "/dashboard/profile",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 2,
        name: "View Customer Orders",
        url: "/dashboard/view-customer-orders",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        // nestedMenu: [
        //   {
        //     id: 1,
        //     name: "Define Position",
        //     url: "/dashboard/manage-organogram/define-position",
        //     iconHtml: `<fa
        //       class="transition-all duration-300 text-md text-white ease-in-out"
        //       :icon="['fa-solid', 'address-card']"
        //     />`,
        //   },
        //   {
        //     id: 2,
        //     name: "Position List",
        //     url: "/dashboard/manage-organogram/position-list",
        //     iconHtml: `<fa
        //       class="transition-all duration-300 text-md text-white ease-in-out"
        //       :icon="['fa-solid', 'address-card']"
        //     />`,
        //   },
        // ],
      },
      {
        id: 3,
        name: "Manage Customer Feedback",
        url: "/dashboard/manage-customer-feedback",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        // nestedMenu: [
        //   {
        //     id: 1,
        //     name: "Create Job Description",
        //     url: "/dashboard/job-management/create-job-description",
        //     iconHtml: `<fa
        //       class="transition-all duration-300 text-md text-white ease-in-out"
        //       :icon="['fa-solid', 'address-card']"
        //     />`,
        //   },
        //   {
        //     id: 2,
        //     name: "Job List",
        //     url: "/dashboard/job-management/job-list",
        //     iconHtml: `<fa
        //       class="transition-all duration-300 text-md text-white ease-in-out"
        //       :icon="['fa-solid', 'address-card']"
        //     />`,
        //   },
        //   {
        //     id: 3,
        //     name: "Job Post",
        //     url: "/dashboard/job-management/job-post",
        //     iconHtml: `<fa
        //       class="transition-all duration-300 text-md text-white ease-in-out"
        //       :icon="['fa-solid', 'address-card']"
        //     />`,
        //   },
        // ],
      },
      {
        id: 4,
        name: "Block/Unblock Customers",
        url: "/dashboard/handle-customer",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        // nestedMenu: [
        //   {
        //     id: 1,
        //     name: "Application Steps",
        //     url: "/dashboard/hiring-management/application-steps",
        //     iconHtml: `<fa
        //       class="transition-all duration-300 text-md text-white ease-in-out"
        //       :icon="['fa-solid', 'address-card']"
        //     />`,
        //   },
        //   {
        //     id: 2,
        //     name: "Background Check",
        //     url: "/dashboard/hiring-management/background-check",
        //     iconHtml: `<fa
        //       class="transition-all duration-300 text-md text-white ease-in-out"
        //       :icon="['fa-solid', 'address-card']"
        //     />`,
        //   },
        //   {
        //     id: 3,
        //     name: "Orientation and Onboarding",
        //     url: "/dashboard/hiring-management/orientation-onboarding",
        //     iconHtml: `<fa
        //       class="transition-all duration-300 text-md text-white ease-in-out"
        //       :icon="['fa-solid', 'address-card']"
        //     />`,
        //   },
        // ],
      },
    ],
  },
  // Customer Login (User Login)
  {
    id: 6,
    name: "User Dashboard",
    dashboardMenu: [
      {
        id: 1,
        name: "Profile",
        url: "/dashboard/profile",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 2,
        name: "View User Orders",
        url: "/dashboard/view-user-orders",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 3,
        name: "Payment History",
        url: "/dashboard/manage-customer-feedback",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 4,
        name: "Manage Payment Method",
        url: "/dashboard/handle-customer",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      // {
      //   id: 5,
      //   name: "Order Details",
      //   url: "/dashboard/handle-customer",
      //   iconHtml: `<fa
      //         class="transition-all duration-300 text-md text-white ease-in-out"
      //         :icon="['fa-solid', 'address-card']"
      //       />`,
      // },
      {
        id: 6,
        name: "Change Password",
        url: "/dashboard/handle-customer",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
    ],
  },
  // Account Management
  {
    id: 7,
    name: "Accounting Management",
    dashboardMenu: [
      {
        id: 1,
        name: "Accounting Ledger",
        url: "/dashboard/accounting-ledger",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 2,
        name: "Payroll",
        url: "/dashboard/payroll",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 3,
        name: "Expenses",
        url: "/dashboard/expenses",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Operational Expenses",
            url: "/dashboard/expenses/operational-expenses",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Project Expenses",
            url: "/dashboard/expenses/project-expenses",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
    ],
  },
  // Marketing Management
  {
    id: 8,
    name: "Marketing Management",
    dashboardMenu: [
      {
        id: 1,
        name: "Marketing Dashboard",
        url: "/dashboard/marketing-dashboard",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
      },
      {
        id: 2,
        name: "Offer",
        url: "/dashboard/marketing-offer",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Offer",
            url: "/dashboard/marketing-offer/create-offer",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Offer List",
            url: "/dashboard/marketing-offer/offer-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Post Offer",
            url: "/dashboard/marketing-offer/post-offer",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 3,
        name: "Promo",
        url: "/dashboard/marketing-promo",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Promo",
            url: "/dashboard/marketing-promo/create-promo",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Promo List",
            url: "/dashboard/marketing-promo/promo-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Post Promo",
            url: "/dashboard/marketing-promo/post-promo",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
      {
        id: 4,
        name: "Specials",
        url: "/dashboard/marketing-specials",
        iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
        nestedMenu: [
          {
            id: 1,
            name: "Create Specials",
            url: "/dashboard/marketing-specials/create-specials",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 2,
            name: "Specials List",
            url: "/dashboard/marketing-specials/specials-list",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
          {
            id: 3,
            name: "Post Specials",
            url: "/dashboard/marketing-specials/post-specials",
            iconHtml: `<fa
              class="transition-all duration-300 text-md text-white ease-in-out"
              :icon="['fa-solid', 'address-card']"
            />`,
          },
        ],
      },
    ],
  },
];

export { dynamicDashboardRoleData };
