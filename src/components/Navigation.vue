<template>
  <div v-if="showNavigator" class="navBtnWrapper bgGrayGrid">
    <my-nav-btn
      v-for="btns in products"
      :key="btns.name"
      :href="`#${btns.name}`"
    >
      <p>{{ btns.name }}</p>
    </my-nav-btn>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      showNavigator: true,
    }
  },
  props: {
    products: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
  updated() {
    if (window.innerWidth >= 1220) {
      this.showNavigator = true;
    } else {
      this.showNavigator = false;
    }
  }
}
</script>

<style scoped>
.navBtnWrapper {
  margin-top: 80px;
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ECECEC;
}
.bgGrayGrid {
  background-image: url(../assets/bg.svg);
  background-repeat: no-repeat;
  background-size: 120%, 120%;
  background-position: center;
}
</style>