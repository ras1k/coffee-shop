import { defineStore, } from "pinia";
export const useProductStore = defineStore({
    id:'product',
    state:()=>({
        cart: [],
        menu: []
      
    }),
    actions:{
        addToCart(item) {
            let check = this.cart.find((e) => e.id == item.id)
            if (check)
            {
                check.quantity++
            }
            else {
                 this.cart.push(item)
            }
           
        },

        increaseCart(id) {
            let itemID = this.cart.find((item) => item.id == id)
            itemID.quantity++
            console.log(itemID , id , 'chkId')
        },
        decresecart(id) {
            let itemID = this.cart.find((item) => item.id == id)
            if (itemID.quantity > 0) {
                itemID.quantity-- 
                console.log(itemID , id , 'chkId')
            }
        },

        removeFromCart(id) {
           this.cart=this.cart.filter((item)=>item.id !==id)
           
        }
    },
    persist: {
        storage:persistedState.localStorage
    }
})