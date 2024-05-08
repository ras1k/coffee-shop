import { defineStore, Store } from "pinia";
import { computed, ref } from "vue";
import {
  marketingOfferData,
  marketingPromoData,
} from "./marketingDashboardData.js";

export const useMarketingDashboardStore = defineStore(
  "marketingDashboard",
  () => {
    // state
    const marketingOfferRef = ref<any>(marketingOfferData);
    const marketingPromoRef = ref<any>(marketingPromoData);

    // computed
    const marketingOffer = computed(() => marketingOfferRef.value);
    const marketingPromo = computed(() => marketingPromoRef.value);

    // actions
    // Handle marketing offer
    const addMarketingOffer = (payload: any) => {
      payload.id = marketingOffer.value.length + 1;
      payload.isPosted = false;
      marketingOfferRef.value.push(payload);
    };
    const approvedMarketingOffer = (payload: number) => {
      marketingOfferRef.value.forEach((offer: any) => {
        if (offer.id === payload) {
          offer.isApproved = true;
        }
      });
    };
    const deleteMarketingOffer = (payload: number) => {
      marketingOfferRef.value = marketingOfferRef.value.filter(
        (offer: any) => offer.id !== payload
      );
    };

    // Handle marketing promo
    const addMarketingPromo = (payload: any) => {
      payload.id = marketingPromo.value.length + 1;
      payload.isPosted = false;
      marketingPromoRef.value.push(payload);
    };
    const approvedMarketingPromo = (payload: number) => {
      marketingPromoRef.value.forEach((promo: any) => {
        if (promo.id === payload) {
          promo.isApproved = true;
        }
      });
    };
    const deleteMarketingPromo = (payload: number) => {
      marketingPromoRef.value = marketingPromoRef.value.filter(
        (promo: any) => promo.id !== payload
      );
    };

    return {
      marketingOffer,
      addMarketingOffer,
      approvedMarketingOffer,
      deleteMarketingOffer,

      marketingPromo,
      addMarketingPromo,
      approvedMarketingPromo,
      deleteMarketingPromo,
    };
  }
);
