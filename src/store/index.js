import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cartProducts: [],
    loveProducts: [],
  },
  getters: {
    elementInBasket: (state) => {
      return state.cartProducts.length;
    },
    elementInHeart: (state) => {
      return state.loveProducts.length;
    },
  },
  mutations: {
    ADD_PRODUCT_CART: (state, element) => {
      state.cartProducts.push(state.products[element]);
    },
    ADD_LOVE_CART: (state, index) => {
      state.loveProducts.push(state.loveProducts[index]);
    },
    DELETE_BASKET: (state, element) => {
      state.cartProducts.splice(element, 1);
    },
    DELETE_HEART: (state, index) => {
      state.loveProducts.splice(index, 1);
    },
  },
  actions: {
    deleteElementInBasket: (context, element) => {
      context.commit("DELETE_BASKET", element);
    },
    deleteElementInHeart: (context, index) => {
      context.commit("DELETE_HEART", index);
    },
  },
  modules: {},
});
