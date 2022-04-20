<template>
  <div class="home">
    <h1 class="text-center bg-light py-2">Products</h1>
    <ul class="card">
      <li
        v-for="(item, index) in this.$store.state.products"
        :key="index"
        class="card-body"
      >
        <img :src="require(`@/assets/${item.image}`)" class="card-img" />
        <i @click="addLove(element)" class="bi bi-heart"></i>
        <i @click="addCart(indexId)" class="bi bi-bag-check"></i>
        <h4 class="card-title text-center">{{ item.name }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "HomeView",
  props: {},
  components: {},
  data: () => ({}),
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/products`);

      this.$store.state.products = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT_CART"]),
    addCart(element) {
      this.ADD_PRODUCT_CART(element);
      // this.$store.state.cartProducts.push(this.$store.state.products[element]);
    },
    ...mapMutations(["ADD_LOVE_CART"]),
    addLove(elementId) {
      this.ADD_LOVE_CART(elementId);
    },
  },
};
</script>

<style scoped>
.home {
  background-color: #f8f9fa;
  text-align: center;
}
ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
ul li {
  list-style-type: none;
  display: inline-block;
}
.card {
  display: inline-block;
  background-color: #f8f9fa;
  margin: 0 auto;
}
.card-body {
  background-color: #a5d6e7;
  border-radius: 2rem;
  margin: 0.2rem;
  position: relative;
}
.card-body:hover {
  cursor: pointer;
}
.card-img {
  width: 220px;
}
.card-title {
  color: #fff;
  background-color: #05447a;
  border-radius: 10px;
  margin-bottom: -5px;
}
.card-body:hover .bi-bag-check,
.card-body:hover .bi-heart {
  opacity: 1;
}
.bi-heart,
.bi-bag-check {
  font-size: 2rem;
  opacity: 0;
  position: absolute;
  right: 1rem;
}
.bi-heart {
  top: 1rem;
}
.bi-bag-check {
  top: 3.5rem;
}

.bi-heart:hover,
.bi-bag-check:hover {
  color: #0d6efd;
}
</style>
