<template>
  <div class="set__wrapper">
    <my-sign style="font-size: 32px;">
      {{ this.sets.name }}
    </my-sign>
    <p style="font-size: 24px;">
      {{ this.sets.mass }}
    </p>
    <div class="products__wrapper">
      <product-item
        v-for="product in sets.products"
        :key="product.name"
        :item="product"
        :color="'white'"
        @addToCart="addToCart"
      >
      </product-item>
    </div>
    <my-item-btn 
      @click="$emit('addToCart', this.sets)"
      style="
        width: 30%;
        height: 50px;
      "
    >Add set in cart</my-item-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductItem from '@/components/ProductItem'

export default {
  name: "set-item",
  components: {
    ProductItem
  },
  props: {
    sets: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    addToCart(item) {
      this.ADD_TO_CART(item)
    }
  }
}
</script>

<style scoped>
.set__wrapper {
  margin: 50px;
  padding: 50px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ececec;
}
.products__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>