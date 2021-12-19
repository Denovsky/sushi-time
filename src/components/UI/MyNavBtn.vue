<template>
  <a class="navBtn btnCommonStyles">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "my-nav-btn",
}
</script>

<style>
.navBtn {
  padding: 30px 60px;
  border-radius: 10px;

  background-image: linear-gradient(to right, #dededc, #ececec);
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.btnCommonStyles {
  background-size: 300% 100%; 
  border: none;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.btnCommonStyles:hover {
  background-position: 100% 0;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.btnCommonStyles:focus {
  outline: none;
}
.btnCommonStyles p {
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.btnCommonStyles:active {
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  -moz-transform: scale(0.98);
  -o-transform: scale(0.98);
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}
</style>