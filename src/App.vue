<template>
  <MainNavbar />
</template>

<script>
import MainNavbar from "@/components/MainNavbar.vue";

export default {
  name: "app",
  components: {
    MainNavbar,
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

html {
  background-color: #f8f9fa;
}
nav {
  display: flex;
  justify-content: space-between;
  font-size: large;
}
nav a {
  text-decoration: none;
  color: #222;
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
  min-width: 0.9rem;
  align-items: center;
  text-align: center;
  font-size: 14px;
}
</style>
