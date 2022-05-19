import axios from 'axios';
const state = {
  items: [],
  checkoutStatus: null,
}
const mutations = {
  SET_CART_ITEMS (state, payload) {
    state.cartItems = payload;
  },
  pushProductToCart(state,{ id, price, title }) {
    state.items.push({
      id,
      price,
      title,
      quantity: 1 
  })
  },
  incrementItemQuantity (state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  
  decrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    if (cartItem.quantity == 1) {
      state.items = state.items.filter(item => item.id != cartItem.id) 
    } else {
        cartItem.quantity--
    }
  },
  setCheckoutStatus (state, status) {
      state.checkoutStatus = status
  },
}

const actions = {
  getSavedCartItems ({ commit }) {
    axios.get('/api/cart').then((response) => {
      commit('SET_CART_ITEMS', response.data)
    });
  },
  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', product)
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  },
}

const getters = {
  cartProducts: state => state.items,
  cartTotalPrice: state => {
    return state.items.reduce((acc, item) => {
      return (item.quantity * item.price) + acc;
    }, 0).toFixed(2);
  },
  cartTotalQuantity: state => {
    return state.items.reduce((acc, item) => {
      return item.quantity + acc;
    }, 0);
  },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};