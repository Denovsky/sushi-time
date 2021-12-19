<template>
  <div class="itemCatalog">
    <my-sign>
      {{ get_name(PRODUCTS) }}
    </my-sign>
    <div 
      v-if="typeOfProduct()"
      class="itemCatalog__catalog"
    >
      <product-item
        v-for="product in subcatalog.products"
        :key="product.name"
        :item="product"
        @addToCart="addToCart"
      >
      </product-item>
    </div>
    <div v-else-if="!typeOfProduct()" class="itemCatalog__catalog">
      <set-item
        v-for="sets in subcatalog.products"
        :key="sets.name"
        :sets="sets"
      >

      </set-item>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductItem from '@/components/ProductItem'
import SetItem from '@/components/SetItem'

export default {
  components: {
    ProductItem,
    SetItem
  },
  data() {
    return {
      subcatalog: Object
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(item) {
      this.ADD_TO_CART(item)
    },
    get_name(catalogs) {
      for (let catalog of catalogs) {
        console.log(catalog)
        for (let subcatalog of catalog.subcatalog) {
          if (subcatalog.prefix === this.$route.params.id) {
            console.log(subcatalog.name)
            this.subcatalog = subcatalog
            return subcatalog.name
          }
        }
      }
      return
    },
    typeOfProduct() {
      if (this.subcatalog.type === 'product') {
        return true
      } else {
        console.log(this.subcatalog)
        return false
      }
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log("Data succesfully arrived")
          }
        })
  }
}
</script>

<style scoped>
.itemCatalog {
  padding: 100px 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.itemCatalog__catalog {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
@media (max-width: 740px) {
  .itemCatalog {
    padding: 100px 15px 10px 15px;
  }
}
</style>