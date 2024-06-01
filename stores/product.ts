import { defineStore } from 'pinia'
export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    cart: [],
    menu: [],
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
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
