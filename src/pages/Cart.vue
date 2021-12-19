<template>
  <div class="wrapperCart">
    <my-sign class="sign_cart">Cart:</my-sign>
    <div
      class="wrapperCartItem"
    >
      <cart-item
        v-for="item in get_cart_items(this.cartItems)"
        :key="item.name"
        :item="item"
        @decrement="decrementItem"
        @increment="incrementItem"
        @remove="deleteFromCart"
      >
      </cart-item>
    </div>
    <div v-if="!isEmpty" class="controlUserWrapper">
      <input type="number" name="" placeholder="Type your phone number">
      <my-item-btn class="confirmBtn">Confirm your order</my-item-btn>
    </div>
    <p v-if="isEmpty">There's empty now!</p>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import CartItem from '@/components/CartItem.vue'

export default {
  components: {
    CartItem
  },
  data() {
    return {
      isEmpty: true
    }
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "DECREMENT_CART_ITEM",
      "INCREMENT_CART_ITEM"
    ]),
    get_cart_items(elems) {
      if (elems.length === 0) {
        this.isEmpty = true
        return []
      } else {
        this.isEmpty = false
        return elems
      }
    },
    decrementItem(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    incrementItem(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'CART'
    }),
    cartTotalCost() {
      let result = []

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    }
  },
  updated() {
    if (window.innerWidth >= 1220) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }
}
</script>

<style scoped>
.wrapperCart {
  padding: 40px 80px;
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.sign_cart {
  margin-top: 100px;
}
.wrapperCartItem {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.controlUserWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.controlUserWrapper input { 
  margin-top: 20px;
  font-size: 20px;
  height: 35px;
  width: 350px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;
}
.controlUserWrapper input::-webkit-outer-spin-button,
.controlUserWrapper input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.controlUserWrapper input[type=number] {
  -moz-appearance: textfield;
}
.controlUserWrapper input:focus { 
  border: 2px solid rgba(0, 0, 0, 1);
}
.confirmBtn {
  margin-top: 20px;
  font-size: 24px;
  height: 45px;
  width: 240px;
}
@media (max-width: 740px) {
  .wrapperCart {
    padding: 0 0 50px 0;
  }
}
</style>