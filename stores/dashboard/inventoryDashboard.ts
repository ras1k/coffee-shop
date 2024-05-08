import { defineStore, Store } from "pinia";
import { computed, ref } from "vue";
import {
  inventoryProductsData,
  vendorListData,
  purchaseProductsListData,
} from "./inventoryDashboardData.js";

export const useInventoryDashboardStore = defineStore(
  "inventoryDashboard",
  () => {
    // state
    const inventoryProductsRef = ref<any>(inventoryProductsData);
    const inventoryVendorListRef = ref<any>(vendorListData);
    const purchaseProductsListRef = ref<any>(purchaseProductsListData);

    // computed
    const inventoryProducts = computed(() => inventoryProductsRef.value);
    const inventoryVendorList = computed(() => inventoryVendorListRef.value);
    const purchaseProductsList = computed(() => purchaseProductsListRef.value);

    // actions
    // Handle inventory products
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

    const setInventoryProduct = (payload: any) => {
      payload.id = inventoryProducts.value.length + 1;
      payload.isPosted = false;
      inventoryProductsRef.value.push(payload);
    };
    const approvedInventoryProduct = (payload: number) => {
      inventoryProductsRef.value.forEach((product: any) => {
        if (product.id === payload) {
          product.isPosted = true;
        }
      });
    };
    const deleteInventoryProduct = (payload: number) => {
      inventoryProductsRef.value = inventoryProductsRef.value.filter(
        (product: any) => product.id !== payload
      );
    };

    return {
      inventoryVendorList,
      purchaseProductsList,
      addNewPurchaseList,
      approvePurchaseList,
      deletePurchaseList,

      inventoryProducts,
      setInventoryProduct,
      approvedInventoryProduct,
      deleteInventoryProduct,
    };
  }
);
