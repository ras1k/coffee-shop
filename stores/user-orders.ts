import { defineStore, } from "pinia";
export const useOrderStore = defineStore({
    id:'order',
    state:()=>({
        cart: [],
      
    }),

    persist: {
        storage:persistedState.localStorage
    }
})