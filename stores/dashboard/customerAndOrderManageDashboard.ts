import { defineStore, Store } from "pinia";
import { computed, ref } from "vue";

import {
  orderListsData,
  customerListsData,
} from "./customerAndOrderManagementData.js";

export const useCustomerOrderManageDashboardStore = defineStore(
  "customerAndOrderManageDashboard",
  () => {
    // state
    const orderListsRef = ref<any>(orderListsData);
    const customerListsRef = ref<any>(customerListsData);

    // computed
    const orderLists = computed(() => orderListsRef.value);
    const customerLists = computed(() => customerListsRef.value);

    // actions
    // Handle customers order
    const deleteOrder = (payload: number) => {
      orderListsRef.value = orderListsRef.value.filter(
        (order: any) => order.id !== payload
      );
    };
    const deleteFeedback = (payload: any) => {
      const nonUpdateObjectOrderList: any = [];
      const updatedOrderListsData = orderListsRef.value.map((order: any) => {
        if (order.id === payload.orderId) {
          order.orderedProducts = order.orderedProducts.filter(
            (singleFeedback: any) =>
              singleFeedback.productId !== payload.feedbackProductId
          );
        } else {
          nonUpdateObjectOrderList.push(order);
        }
      });
    };
    const updateFeedbackStatus = (payload: any) => {
      const updatedFeedBackStatus = orderListsRef.value.map((order: any) => {
        if (order.id === payload.orderId) {
          order.orderedProducts = order.orderedProducts.map(
            (singleFeedback: any) => {
              if (singleFeedback.productId === payload.feedbackProductId) {
                singleFeedback.feedbackStatus = payload.feedbackStatus;
              }
              return singleFeedback;
            }
          );
        }
      });
    };

    // Handle customer data
    const verifyCustomer = (payload: number) => {
      const updateCustomerStatus = customerListsRef.value.map(
        (customer: any) => {
          if (customer.id === payload) {
            customer.isVerified = true;
          }
          return customer;
        }
      );
    };
    const deleteCustomer = (payload: number) => {
      customerListsRef.value = customerListsRef.value.filter(
        (customer: any) => customer.id !== payload
      );
    };

    return {
      orderLists,
      deleteOrder,
      deleteFeedback,
      updateFeedbackStatus,

      customerLists,
      verifyCustomer,
      deleteCustomer,
    };
  }
);
