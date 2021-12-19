<template>
  <div class="mainWrapper">
    <navigation
      :products="PRODUCTS"
    >
    </navigation>
    <div class="catalogWrapper">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.name"
        :catalog="product"
      >
    </catalog-item>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import Navigation from '@/components/Navigation'
import CatalogItem from '@/components/CatalogItem'

export default {
  components: {
    Navigation,
    CatalogItem
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log("The data arrived successfully!")
          }
        })
  }
}
</script>

<style scoped>
.mainWrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.catalogWrapper {
  padding: 40px 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
@media (max-width: 1220px) {
  .catalogWrapper {
    padding: 100px 10px 100px 10px;
  }
}
</style>