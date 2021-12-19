<template>
  <div class="dialogBg" v-if="show">
    <transition name="fade">
      <div v-if="show" class="MenuBtnsWrapper">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "menu-btns",
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
.dialogBg {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: flex-end;
}
.MenuBtnsWrapper {
  height: 100%;
  background-color: #ececec;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.fade-move {
  transition: transform 0.4s;
}
</style>