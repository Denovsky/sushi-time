<template>
  <div class="itemCatalog">
    <my-sign 
      class="sign_right"
      :id="catalog.name"
    >
      {{ catalog.name }}
    </my-sign>
    <div class="itemCatalog__catalog">
      <subcatalog-item
        v-for="item in catalog.subcatalog"
        :key="item.name"
        :subcatalog="item"
        :index="catalog.subcatalog.findIndex(i => i == item)"
      >

      </subcatalog-item>
    </div>
  </div>
</template>

<script>
import SubcatalogItem from '@/components/SubcatalogItem'

export default {
  components: {
    SubcatalogItem
  },
  props: {
    catalog: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.itemCatalog {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.itemCatalog__catalog {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
@media (max-width: 740px) {
  .itemCatalog {
    margin-top: 20px;
  }
}
</style>