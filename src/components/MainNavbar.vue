<template>
  <nav>
    <span>
      <span class="logo">My Logo</span>
    </span>
    <span class="page">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/login">Login</router-link> -->
    </span>
    <span class="icon">
      <router-link to="/cart" class="cart">
        <i class="bi bi-cart3"></i>
        <span class="number">{{ elementInBasket }}</span>
      </router-link>
      |
      <router-link to="/heart" class="cart">
        <i class="bi bi-heart"></i>
        <span class="number">{{ elementInHeart }}</span>
      </router-link>
    </span>
  </nav>
  <router-view />
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({}),
  methods: {},
  computed: {
    ...mapState(["products"]),
    ...mapState(["cartProducts"]),
    ...mapState(["loveProducts"]),
    ...mapGetters(["elementInBasket"]),
    ...mapGetters(["elementInHeart"]),
  },
};
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

.router-link-exact-active {
  color: #0d6efd;
}
.logo {
  font-size: large;
  font-weight: 900;
  margin-left: 1rem;
}
.bi-apple {
  font-size: x-large;
}
nav {
  display: flex;
  justify-content: space-between;
  font-size: large;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}
nav a {
  text-decoration: none;
  color: #222;
}
.page {
  align-items: center;
}
.icon {
  font-size: 28px;
  /* margin-right: 1rem; */
}
.cart {
  position: relative;
}
.number {
  position: absolute;
  right: -5px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  min-height: 0.9rem;
  min-width: 1.1rem;
  align-items: center;
  text-align: center;
  font-size: 12px;
}
</style>
