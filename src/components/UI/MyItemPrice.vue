<template>
<div class="wrapper" v-bind:class="{ mainColor_white: setColor() }">
  <p>
    <slot></slot>
  </p>
</div>
  
</template>

<script>
export default {
  name: "my-item-price",
  props: {
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
.wrapper {
  padding: 4px 7px;
  border-radius: 3px;
  background-color: #ECECEC;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainColor_white {
  background-color: #fff;
}
@media (max-width: 740px) {
  .wrapper {
    font-size: 14px;
  }
}
</style>