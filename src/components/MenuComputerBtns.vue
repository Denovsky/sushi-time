<template>
  <div class="background" v-if="show" @click.stop="hideDialog">
    <div class="background__btnsMenu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-computer-btns",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.background {
  top: 80px;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: flex-start;
}
.background__btnsMenu {
  width: 100%;
  background-color: #ececec;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
</style>