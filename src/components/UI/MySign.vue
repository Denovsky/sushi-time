<template>
  <p class="sign">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "my-sign",
}
</script>

<style scoped>
.sign {
  font-size: 64px;
  font-weight: bold;
}
@media (max-width: 1220px) {
  .sign {
    font-size: 58px;
  }
}
@media (max-width: 740px) {
  .sign {
    font-size: 48px;
  }
}
</style>