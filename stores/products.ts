import { defineStore } from 'pinia'
export const useProductsStore = defineStore({
  id: 'product',
  state: () => ({
    cart: [],
    order: [],
    product: [],
    allProduct: [],
    menu: [],
    wishlist: [],
    applyForSample: {
      name: '',
      email: '',
      phone_no: '',
      type: '',
      industry: '',
      sub_industry: '',
      address: '',
      country: '',
      reason: '',
      company_name: '',
      no_of_employee: '',
      no_of_daily_customer: '',
      no_of_monthly_customer: ''
    },
    orderdata: null,
  }),
  actions: {
    addToCart(item) {
      let check = this.cart.find((e) => e.product_id == item.product_id)
      if (check) {
        check.product_qty++
      } else {
        this.cart.push(item)
      }
    },

    increaseCart(id) {
      let itemID = this.cart.find((item) => item.product_id == id)
      itemID.product_qty++
    },
    decresecart(id) {
      let itemID = this.cart.find((item) => item.product_id == id)
      if (itemID.product_qty > 0) {
        itemID.product_qty--
      }
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.product_id !== id)
    },
    clearApplyForSample() {
      this.applyForSample = {
        name: '',
        email: '',
        phone_no: '',
        type: '',
        industry: '',
        sub_industry: '',
        address: '',
        country: '',
        reason: '',
        company_name: '',
        no_of_employee: '',
        no_of_daily_customer: '',
        no_of_monthly_customer: ''
      };
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
