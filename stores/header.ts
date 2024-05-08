import { defineStore, Store } from "pinia";
import { computed, ref } from "vue";

export const useHeaderStore = defineStore("header", () => {
  // state
  const isMobileMenuRef = ref<boolean>(false);
  const isShowLoadingRef = ref<boolean>(false);
  const routerHistoryRef = ref<string>("");

  const isMobileMenu = computed(() => isMobileMenuRef.value);
  const isShowLoading = computed(() => isShowLoadingRef.value);
  const routerHistory = computed(() => routerHistoryRef.value);

  // actions
  const setMobileMenu = (payload: boolean) => {
    isMobileMenuRef.value = payload;
  };
  const setIsShowLoading = (payload: boolean) => {
    isShowLoadingRef.value = payload;
  };
  const setRouterHistory = (payload: string) => {
    routerHistoryRef.value = payload;
  };
  return {
    isMobileMenu,
    setMobileMenu,

    isShowLoading,
    setIsShowLoading,

    routerHistory,
    setRouterHistory,
  };
});
