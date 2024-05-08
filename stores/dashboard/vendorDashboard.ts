import { defineStore, Store } from "pinia";
import { computed, ref } from "vue";
import {
  vendorProductsData,
  vendorListData,
  purchaseProductsListData,
} from "./vendorDashboardData.js";

export const useVendorDashboardStore = defineStore("vendorDashboard", () => {
  // state
  const vendorProductsRef = ref<any>([]);
  const allVendorListRef = ref<any>([]);

  const vendorVendorListRef = ref<any>(vendorListData);
  const purchaseProductsListRef = ref<any>(purchaseProductsListData);

  // computed
  const vendorProducts = computed(() => vendorProductsRef.value);
  const allVendorList = computed(() => allVendorListRef.value);

  const vendorVendorList = computed(() => vendorVendorListRef.value);
  const purchaseProductsList = computed(() => purchaseProductsListRef.value);

  // actions
  // Handle vendor products
  const getInitializedVendorProducts = (payload: string) => {
    vendorProductsData.forEach((singleVendor: any) => {
      if (singleVendor.vendor_email === payload) {
        vendorProductsRef.value = singleVendor.products;
      }
    });
  };
  const addVendorProduct = (payload: any) => {
    vendorProductsData.forEach((singleVendor: any) => {
      if (singleVendor.vendor_email === payload.vendor_mail) {
        payload.product_details.id = singleVendor.products.length + 1;
        payload.product_details.is_available = true;
        singleVendor.products.push(payload.product_details);
      }
    });
  };
  const updateVendorStatus = (payload: any) => {
    vendorProductsRef.value.forEach((singleProduct: any) => {
      if (singleProduct.id === payload.id) {
        singleProduct.is_available = payload.is_available;
      }
    });
  };
  const deleteVendorProduct = (payload: any) => {
    vendorProductsData.forEach((singleVendor: any) => {
      if (singleVendor.vendor_email === payload.vendor_mail) {
        vendorProductsRef.value = singleVendor.products.filter(
          (singleProducts: any) => singleProducts.id !== payload.product_id
        );
      }
    });
  };

  const getAllVendorList = () => {
    vendorProductsData.forEach((singleVendor: any) => {
      allVendorListRef.value.push({ vendorName: singleVendor.vendor_name });
    });
  };

  const addNewPurchaseList = (payload: any) => {
    payload.id = purchaseProductsList.value.length + 1;
    payload.isApproved = false;
    purchaseProductsListRef.value.push(payload);
  };
  const approvePurchaseList = (payload: number) => {
    purchaseProductsListRef.value.forEach((purchase: any) => {
      if (purchase.id === payload) {
        purchase.isApproved = true;
      }
    });
  };
  const deletePurchaseList = (payload: number) => {
    purchaseProductsListRef.value = purchaseProductsListRef.value.filter(
      (purchase: any) => purchase.id !== payload
    );
  };

  const setVendorProduct = (payload: any) => {
    payload.id = vendorProducts.value.length + 1;
    payload.isPosted = false;
    vendorProductsRef.value.push(payload);
  };
  const approvedVendorProduct = (payload: number) => {
    vendorProductsRef.value.forEach((product: any) => {
      if (product.id === payload) {
        product.isPosted = true;
      }
    });
  };

  return {
    vendorProducts,
    getInitializedVendorProducts,
    addVendorProduct,
    updateVendorStatus,
    deleteVendorProduct,

    allVendorList,
    getAllVendorList,

    vendorVendorList,
    purchaseProductsList,
    addNewPurchaseList,
    approvePurchaseList,
    deletePurchaseList,

    setVendorProduct,
    approvedVendorProduct,
  };
});
