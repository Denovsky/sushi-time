<template>
  <button class="btnItem btnCommonStyles">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-item-btn"
}
</script>

<style>
.btnItem {
  width: 60%;
  height: 30px;
  border-radius: 3px;
  font-size: 16px;

  background-image: linear-gradient(to right, #8dc73f, #60d9a7);
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
}
@media (max-width: 740px) {
  .btnItem {
    font-size: 14px;
  }
}
</style>