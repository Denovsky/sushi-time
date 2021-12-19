<template>
  <nav-header></nav-header>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'

export default {
  components: {
    NavHeader
  }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab:wght@700&display=swap");
html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 550;
  color: #000;
  text-decoration: none;
}
@media (max-width: 740px) {
  .app {
      font-size: 15px;
  }
}
</style>
