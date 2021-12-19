<template>
  <div class="headerWrapper">
    <div 
      v-if="showMenu" 
      class="headerWrapper__computer"
    >
      <div class="navBtnsWrapper">
        <my-header-btn
          v-for="product in PRODUCTS"
          :key="product.name"
          @click="openComputerMenu(product)"
        >
          {{ product.name }}
        </my-header-btn>
      </div>
      <div class="logoWrapper">
        <img 
          src="@/assets/main_icon.svg" 
          alt="image"
          @click="$router.push('/')"
        >
      </div>
      <div class="infoBtnsWrapper">
        <my-header-btn>
          News
        </my-header-btn>
        <my-header-btn>
          About us
        </my-header-btn>
        <p>
          +7 (800) 555 35 35 - Dubai
        </p>
        <img 
          src="@/assets/image/header/cart.svg"
          alt="image"
          @click="$router.push('/cart')"
        >
      </div>
    </div>
    
    <div 
      v-else
      class="headerWrapper__telephone"
    >
      <div class="navBtnsWrapper__telephone">
        <img 
          src="@/assets/mini_icon.svg" 
          alt="image"
          @click="$router.push('/')"
        >
      </div>
      <img 
        src="@/assets/image/header/cart.svg"
        alt="image"
        @click="$router.push('/cart')">
      <div 
        class="telephone__menu"
        @click="openTelephoneMenu"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <menu-computer-btns
    v-model:show="isOpenComputerMenu"
  >
    <my-menu-btns
        v-for="item in curentCatalog.subcatalog"
        :key="item.name"
        @click="closeMenu(item)"
      >
        {{ item.name }}
    </my-menu-btns>
  </menu-computer-btns>
  <menu-btns
    v-model:show="isOpenTelephoneMenu"
  >
    <div v-if="isShowSubcatalog" class="selectSubcatalogWrapper">
      <my-menu-btns
          v-for="product in curentCatalog.subcatalog"
          :key="product.name"
          @click="closeMenu(product)"
        >
          {{ product.name }}
      </my-menu-btns>
    </div>
    <div class="telephoneMenuWrapper">
      <my-menu-btns
          v-for="product in PRODUCTS"
          :key="product.name"
          @click="closeTelephoneMenu(product)"
        >
          {{ product.name }}
      </my-menu-btns>
    </div>
  </menu-btns>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MenuBtns from '@/components/MenuBtns.vue'
import MenuComputerBtns from '@/components/MenuComputerBtns.vue'

export default {
  name: 'nav-header',
  components: {
    MenuBtns,
    MenuComputerBtns
  },
  data() {
    return {
      showMenu: true,
      isOpenTelephoneMenu: false,
      isOpenComputerMenu: false,
      isShowSubcatalog: false,
      curentCatalog: Object
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    openTelephoneMenu() {
      this.isOpenTelephoneMenu = true
    },
    closeTelephoneMenu(subcatalog) {
      this.curentCatalog = subcatalog
      this.isShowSubcatalog = true
    },
    closeMenu(item) {
      this.isOpenTelephoneMenu = false
      this.$router.push(`/${item.prefix}`)
      this.curentCatalog = []
      this.isShowSubcatalog = false
    },
    openComputerMenu(subcatalog) {
      if (subcatalog.subcatalog.length !== 0) {
        this.curentCatalog = subcatalog
        this.isOpenComputerMenu = true
      } else {
        alert(`At the moment, the product is being added to the "${subcatalog.name}" catalog`)
      }
    }
  },
  updated() {
    if (window.innerWidth >= 1220) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }
}
</script>

<style scoped>
.headerWrapper,
.headerWrapper__computer,
.headerWrapper__telephone {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.headerWrapper {
  height: 80px;
  position: fixed;
  background-color: #ECECEC;
  justify-content: center;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
}
.headerWrapper__computer,
.headerWrapper__telephone {
  height: 100%;
  justify-content: space-around;
}
.navBtnsWrapper,
.infoBtnsWrapper {
  width: 35%;
  margin: 0 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navBtnsWrapper {
  justify-content: space-between;
  align-self: left;
}
.logoWrapper {
  align-self: center;
}
.infoBtnsWrapper {
  justify-content: space-between;
  align-self: right;
}
.logoWrapper img,
.navBtnsWrapper__telephone img {
  cursor: pointer;
}
.telephone__menu {
  height: 40px;
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.telephone__menu:active,
.infoBtnsWrapper img:active,
.headerWrapper__telephone img:active {
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  -moz-transform: scale(0.95);
  -o-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  transform: scale(0.95);
  }
.telephone__menu div{
  height: 25%;
  width: 75%;
  border-radius: 3px;
  background-color: #C4C4C4;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.25);
}
.navBtnsWrapper__telephone,
.headerWrapper__telephone img,
.telephone__menu {
  width: 70px;
}
.telephoneMenuWrapper,
.selectSubcatalogWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>