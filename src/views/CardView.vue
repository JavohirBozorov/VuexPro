<template>
  <div class="cart">
    <h1 class="text-center">This is cart page</h1>
    <ul class="card">
      <li
        v-for="(item, index) in this.$store.state.cartProducts"
        :key="index"
        class="card-body"
      >
        <img :src="require(`@/assets/${item.image}`)" class="card-img" />
        <i @click="deleteBasket(index)" class="bi bi-bag-dash"></i>
        <h4 class="card-title text-center">{{ item.name }}</h4>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data: () => ({}),
  async created() {
    try {
      const cart = await axios.get(`http://localhost:3000/cartProducts`);

      this.$store.state.cartProducts = cart.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions(["deleteElementInBasket"]),
    deleteBasket(elementId) {
      this.deleteElementInBasket(elementId);
    },
  },
};
</script>

<style>
.cart {
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
  border: 0;
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
.card-body:hover .bi-bag-dash,
.card-body:hover .bi-heart {
  opacity: 1;
}
.card .bi-heart,
.bi-bag-dash {
  font-size: 2rem;
  opacity: 0;
  position: absolute;
  right: 1rem;
}
.bi-bag-dash {
  top: 1rem;
}

.bi-heart:hover,
.bi-bag-dash:hover {
  color: #0d6efd;
}
</style>
