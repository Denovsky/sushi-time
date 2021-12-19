<template>
  <div class="itemWrapper">
    <div class="photo " v-bind:class="{ mainColor_white: setColor() }">
      <img :src="'@/assets/image/photosOfProducts/' + item.photo" alt="" />
    </div>
    <div class="description " v-bind:class="{ mainColor_white: setColor() }">
      <p class="description__name">
        {{ item.name }}
      </p>
      <p class="description__info">
        {{ item.description }}
      </p>
    </div>
    <div class="itemControl">
      <my-item-price
        :color="color"
      >
        {{ item.price + " AED" }}
      </my-item-price>
      <my-item-btn
        @click="$emit('addToCart', item)"
      > In cart </my-item-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: "product-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    setColor() {
      if (this.color === "white") {
        return true
      } else if (this.color === "gray") {
        return false
      }
    }
  }
}
</script>

<style scoped>
.itemWrapper {
  height: 350px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
}
.photo,
.description,
.itemControl {
  width: 100%;
  border-radius: 3px;
}
.photo,
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ECECEC;
}
.photo {
  max-height: 167px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description__info {
  margin-top: 25px;
  font-weight: normal;
}
.description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.itemControl {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1220px) {
  .itemWrapper {
    height: 300px;
    width: 200px;
    margin: 20px;
  }
}
@media (max-width: 740px) {
  .itemWrapper {
    height: 250px;
    width: 150px;
    margin: 10px;
  }
}
.mainColor_white {
  background-color: #fff;
}
</style>