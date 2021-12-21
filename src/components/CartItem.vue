<template>
  <div class="itemWrapper">
    <div class="photo">
      <img :src="'@/assets/image/photosOfProducts/' + item.photo" alt="" />
    </div>
    <div class="description">
      <p class="description__name">
        {{ item.name }}
      </p>
      <p v-if="item.real_price === undefined" class="description__info">
        {{ item.description }}
      </p>
      <p v-else class="description__info">
        {{ this.rolls }} 
      </p>
      <div v-if="item.potential_additive !== undefined" class="checkBoxes">
        <input type="checkbox" :value="item.potential_additive[0]" v-model="item.additive" />
        <label>{{ item.potential_additive[0] }}</label>
        <br>
        <input type="checkbox" :value="item.potential_additive[1]" v-model="item.additive" />
        <label>{{ item.potential_additive[1] }}</label>
      </div>
    </div>
    <div class="itemControl">
      <my-item-price class="control__price" :color="'gray'">
        {{ this.item.quantity * this.item.price + " AED"}}
      </my-item-price>
      <div class="control__nums">
        <button 
          class="controlBtns nums__decrement btnCommonStyles"
          @click="$emit('decrement', this.item.name)"
        >
          -
        </button>
        <p> 
          {{ this.item.quantity }}
        </p>
        <button 
          class="controlBtns nums__increment btnCommonStyles"
          @click="$emit('increment', this.item.name)"
        >
          +
        </button>
      </div>
      <div class="control__remove">
        <button 
          class="controlBtns remove__item btnCommonStyles"
          @click="$emit('remove', this.item.name)"
        >
          x
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "cart-item",
  data() {
    return {
      rolls: ""
    }
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    if (this.item.real_price !== undefined) {
      this.item.products.forEach(product => {
        this.rolls = this.rolls + " " + product.name
      });
    }
  }
}
</script>

<style scoped>
.itemWrapper {
  height: 350px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
}
.photo,
.description,
.itemControl {
  width: 100%;
  border-radius: 3px;
}
.photo,
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ECECEC;
  padding: 10px;
}
.photo {
  max-height: 167px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description__info {
  margin-top: 25px;
  font-weight: normal;
}
.description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.itemControl {
  display: flex;
  justify-content: space-between;
}
.controlBtns {
  height: 30px;
  width: 30px;
  border-radius: 3px;
  text-align: center;

  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
}
.nums__decrement {
  background-image: linear-gradient(to right, #EC1B23, #ec5459);
}
.nums__increment {
  background-image: linear-gradient(to right, #8dc73f, #60d9a7);
}
.nums__decrement p {
  color: #000000;
}
.remove__item {
  background-image: linear-gradient(to right, #000000, #222222);
  color: #fff;
}
.control__nums {
  height: 100%;
  width: 39%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.control__nums button {
  text-align: center;
  font-size: 26px;
}
.control__price p {
    font-size: 20px;
    background-color: #ECECEC;
    padding: 2px 10px;
    border-radius: 3px;
}
.control__price,
.control__remove {
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkBoxes p,
.checkBoxes label {
  font: 1rem 'Fira Sans', sans-serif;
}
.checkBoxes input {
  margin: .4rem;
}
@media (max-width: 1220px) {
  .itemWrapper {
    height: 300px;
    width: 200px;
    margin: 20px;
  }
}
@media (max-width: 740px) {
  .itemWrapper {
    height: 250px;
    width: 150px;
    margin: 5px;
    margin-top: 35px;
  }
  .itemControl {
    flex-direction: column;
    align-items: center;
  }
  .control__price,
  .control__nums,
  .control__remove {
    width: 100%;
    margin-top: 10px;
  }
}
</style>