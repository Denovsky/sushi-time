<template>
  <a class="headerBtn">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "my-header-btn"
}
</script>

<style scoped>
.headerBtn {
  line-height: 1;
  cursor: pointer;
  position: relative;

  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  user-select: none;
}
.headerBtn::after {
  background-color: #8dc73f;
  display: block;
  content: "";
  height: 4px;
  width: 0%;
  left: 0%;
  position: absolute;
  -webkit-transition: width .1s ease-in-out;
	-moz--transition: width .1s ease-in-out;
	transition: width .1s ease-in-out;
}
.headerBtn:active:after,
.headerBtn:focus:after {
  width: 100%;
}
</style>