<template>
  <div class="btnMenuWrapper btnCommonStyles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-menu-btns"
}
</script>

<style>
.btnMenuWrapper {
  width: 100px;
  height: 80px;
  border: none;
  background-color: #ececec;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>