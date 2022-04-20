<template>
  <div class="heart">
    <h1 class="text-center">This is heart page</h1>
    <ul class="card">
      <li
        v-for="(item, index) in this.$store.state.loveProducts"
        :key="index"
        class="card-body"
      >
        <img :src="require(`@/assets/${item.image}`)" class="card-img" />
        <i @click="deleteHeart(index)" class="bi bi-heart-fill"></i>
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
      const love = await axios.get(`http://localhost:3000/loveProducts`);

      this.$store.state.loveProducts = love.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions(["deleteElementInHeart"]),
    deleteHeart(indexId) {
      this.deleteElementInHeart(indexId);
    },
  },
};
</script>

<style>
.heart {
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
  border: none;
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
.card-body:hover .bi-heart-fill {
  opacity: 1;
}
.card .bi-heart-fill,
.bi-bag-check {
  font-size: 2rem;
  opacity: 0;
  position: absolute;
  right: 1rem;
}
.bi-heart-fill {
  top: 1rem;
}
.bi-bag-check {
  top: 3.5rem;
}

.bi-heart-fill:hover,
.bi-bag-check:hover {
  color: #0d6efd;
}
</style>
