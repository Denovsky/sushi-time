<template>
  <div class="subcaralog__wrapper">
    <my-sign v-bind:class="{ itemToLeft: active, itemToRight: !active }">
      {{ subcatalog.name }}
    </my-sign>
    <div
      v-if="typeOfProduct()"
      class="subcatalog__item"
    >
      <product-item
        v-for="product in subcatalog.products"
        :key="product.name"
        :item="product"
        :color="'gray'"
        @addToCart="addToCart"
      >
      </product-item>
    </div>
    <div v-else-if="!typeOfProduct()" class="subcatalog__item">
      <set-item
        v-for="sets in subcatalog.products"
        :key="sets.name"
        :sets="sets"
        @addToCart="addToCart"
      >

      </set-item>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductItem from '@/components/ProductItem'
import SetItem from '@/components/SetItem'

export default {
  name: "subcatalog-item",
  data() {
    return {
      active: true
    }
  },
  components: {
    ProductItem,
    SetItem
  },
  props: {
    subcatalog: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.toLeft(this.index)
  },
  methods: {
    toLeft(index){
      if (index % 2 == 0) {
        this.active = true
      } else {
        this.active = false
      }
    },
    typeOfProduct() {
      if (this.subcatalog.type === 'product') {
        return true
      } else {
        console.log(this.subcatalog)
        return false
      }
    },
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
.subcaralog__wrapper {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.subcatalog__item {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.itemToLeft {
  align-self: flex-start;
}
.itemToRight {
  align-self: flex-end;
}
</style>